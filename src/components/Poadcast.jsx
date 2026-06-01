import { Play } from "lucide-react";
import React, { useState, useEffect, useCallback, useRef } from "react"
import "../poadcast.css";


const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;
const YOUTUBE_MAX_RESULTS = 6; 

const Poadcast = () => {
    const [poadcasts, setPoadcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [playingIndex, setPlayingIndex] = useState(null);
    const [nextPageToken, setNextPageToken] = useState("");
    const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
    const loaderRef = useRef(null);
    const containerRef = useRef(null);
    const playerRefs = useRef({});
    const lastTapRef = useRef(0);

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, []);

    const initPlayer = (index) => {
        const checkYT = setInterval(() => {
            if (window.YT && window.YT.Player) {
                playerRefs.current[index] = new window.YT.Player(`youtube-player-${index}`);
                clearInterval(checkYT);
            }
        }, 500);
    };

    const handleDoubleTap = (index, amount) => {
        const now = Date.now();
        if (now - lastTapRef.current < 300) {
            const player = playerRefs.current[index];
            if (player && typeof player.seekTo === "function") {
                const currentTime = player.getCurrentTime();
                player.seekTo(currentTime + amount, true);
            }
        }
        lastTapRef.current = now;
    };

    const fetchPlaylistVideos = useCallback(async (token = "") => {
        if (!YOUTUBE_API_KEY || !YOUTUBE_PLAYLIST_ID) {
            setError("Missing Environment Variables: Ensure VITE_YOUTUBE_API_KEY and VITE_YOUTUBE_PLAYLIST_ID are set in your .env file and the server is restarted.");
            setLoading(false);
            return;
        }

        if (!token) {
            setLoading(true);
            setError("");
        } else {
            setIsFetchingNextPage(true);
        }

        try {
            const pageTokenParam = token ? `&pageToken=${token}` : "";
            const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${encodeURIComponent(YOUTUBE_API_KEY)}&playlistId=${encodeURIComponent(YOUTUBE_PLAYLIST_ID)}&part=snippet&maxResults=${YOUTUBE_MAX_RESULTS}${pageTokenParam}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`YouTube API request failed: ${response.status}`);
            }

            const data = await response.json();
            console.log("YouTube API response:", data);
            if (!data.items) {
                throw new Error("No videos returned from the YouTube playlist.");
            }

            const items = data.items
                .filter((item) => item.snippet?.resourceId?.videoId)
                .map((item) => {
                    const videoId = item.snippet.resourceId.videoId;
                    return {
                        videoId,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails?.high?.url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
                        onClickReadNow: () => { },
                    };
                });

            setNextPageToken(data.nextPageToken || "");
            setPoadcasts((prev) => token ? [...prev, ...items] : items);
        } catch (fetchError) {
            setError(fetchError.message || "An error occurred while fetching videos. Please try again later.");
        } finally {
            setLoading(false);
            setIsFetchingNextPage(false);
        }
    }, [YOUTUBE_API_KEY, YOUTUBE_PLAYLIST_ID]);

    useEffect(() => {
        fetchPlaylistVideos();
    }, [fetchPlaylistVideos]);

    useEffect(() => {
        if (!loaderRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                if (target.isIntersecting && nextPageToken && !isFetchingNextPage) {
                    fetchPlaylistVideos(nextPageToken);
                }
            },
            { 
                root: containerRef.current, // Observe visibility inside the row container
                threshold: 0.1, 
                rootMargin: "0px 300px 0px 0px" // Pre-fetch when 300px away from the right edge
            }
        );

        observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [loading, isFetchingNextPage, nextPageToken, fetchPlaylistVideos]);

    return (
        <div className="poadcast-section">
            <div className="more-features-header">
                <div className="badge-light">Our Podcast</div>
                <h2 className="more-features-heading">
                    Listen. Learn. Grow.
                </h2>
                <p className="more-features-subtext">
                    Tune into ILC Podcasts for conversations with industry experts, mentors, and professionals sharing real career experiences and practical advice.                    </p>
            </div>

            <div className="poadcats-row" ref={containerRef}>
                {error && (
                    <div className="poadcast-error">{error}</div>
                )}

                {loading && poadcasts.length === 0 && (
                    <div className="poadcast-loading">Loading latest channel videos…</div>
                )}

                {poadcasts.map((item, index) => (
                    <div key={item.videoId || index} className="poadcast-card">
                        {playingIndex === index ? (
                            <div className="video-wrapper" style={{ position: "relative" }}>
                                <iframe
                                    title="Podcast video"
                                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&enablejsapi=1&playsinline=1`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="poadcast-iframe"
                                    name={`youtube-player-${index}`}
                                    id={`youtube-player-${index}`}
                                    sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
                                    onLoad={() => initPlayer(index)}
                                />
                                {/* Invisible overlays for double-tap seeking */}
                                <div 
                                    onClick={() => handleDoubleTap(index, -10)}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '30%', height: '85%', zIndex: 10 }}
                                />
                                <div 
                                    onClick={() => handleDoubleTap(index, 10)}
                                    style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '85%', zIndex: 10 }}
                                />
                            </div>
                        ) : (
                            <div
                                className="video-thumb"
                                role="button"
                                tabIndex={0}
                                onClick={() => setPlayingIndex(index)}
                                onKeyDown={(e) => { if (e.key === 'Enter') setPlayingIndex(index); }}
                            >
                                <img
                                    src={item.thumbnail}
                                    alt="Podcast thumbnail"
                                    className="poadcast-img"
                                />
                                
                            </div>
                        )}

                        <div className="poadcast-content">
                            <p className="poadcast-title">
                                {item.title || "Podcast video"}
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setPlayingIndex(index);
                                    item.onClickReadNow?.();
                                }}
                                className="readnow-btn"
                            >
                                <div className="circle-icon">
                                    <Play size={12} color="#fff" fill="#fff" />
                                </div>
                                Watch now
                            </button>
                        </div>
                    </div>
                ))}

                {/* This invisible div triggers the loading of the next page when it scrolls into view */}
                <div ref={loaderRef} style={{ minWidth: '50px', height: '10px', flexShrink: 0 }} aria-hidden="true" />

                {isFetchingNextPage && (
                    <div className="poadcast-loading" style={{ flex: '0 0 auto', padding: '0 2rem', whiteSpace: 'nowrap' }}>Loading more videos…</div>
                )}
            </div>

        </div>
    )

}

export default Poadcast;