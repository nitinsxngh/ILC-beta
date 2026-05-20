import { Play } from "lucide-react";
import React, { useState, useEffect } from "react"
import "../poadcast.css";

const Poadcast = () => {

    const [playingIndex, setPlayingIndex] = useState(null);
    const [titles, setTitles] = useState({});

    const getYoutubeIdFromUrl = (url) => {
        const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})/);
        return match ? match[1] : null;
    };

    const poadcasts = [
        {
            link: "https://www.youtube.com/watch?v=fbBaVJ4-NyQ",
            onClickReadNow: () => { },
        },
        {
            link: "https://www.youtube.com/watch?v=tpTInK3__xc",
            onClickReadNow: () => { },
        },
        {
            link: "https://www.youtube.com/watch?v=3EtaPTFpSOk",
            onClickReadNow: () => { },
        }
    ];

    useEffect(() => {
        let mounted = true;

        const fetchTitles = async () => {
            const results = await Promise.all(
                poadcasts.map(async (item) => {
                    try {
                        const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(item.link)}&format=json`;
                        const response = await fetch(oembedUrl);
                        if (!response.ok) throw new Error("Failed to fetch title");
                        const data = await response.json();
                        return data.title || "";
                    } catch {
                        return "";
                    }
                })
            );
            if (mounted) {
                const titleMap = results.reduce((acc, title, index) => {
                    acc[index] = title;
                    return acc;
                }, {});
                setTitles(titleMap);
            }
        };

        fetchTitles();
        return () => {
            mounted = false;
        };
    }, []);

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

            <div className="poadcats-row" >
                {poadcasts.map((item, index) => {
                    const youtubeId = getYoutubeIdFromUrl(item.link);

                    return (
                        <div key={index} className="poadcast-card">
                            {playingIndex === index ? (
                                <div className="video-wrapper">
                                    <iframe
                                        title="Podcast video"
                                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="poadcast-iframe"
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
                                        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                                        alt="Podcast thumbnail"
                                        className="poadcast-img"
                                    />
                                    <div className="play-overlay" aria-hidden>
                                        <div className="play-circle">
                                            <Play size={16} color="#fff" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="poadcast-content">
                                <p className="poadcast-title">
                                    {titles[index] || "Podcast video"}
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
                    );
                })}
            </div>

        </div>
    )

}

export default Poadcast;