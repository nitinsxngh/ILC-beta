"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1Ijoibml0aW5zeG5naCIsImEiOiJjbDJ6cWNnYjAxaTFnM2trNmh2d3B1ZXdmIn0.zBTzZ5tjnScENUb-2JoVUQ"; // Replace with your token

const Contact = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10", // Dark theme
      center: [77.0266, 28.4595], // Replace with actual coordinates (lng, lat)
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([77.0266, 28.4595]).addTo(map); // Add marker

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col w-full md:flex-row items-center md:items-start gap-6 md:gap-12 p-6 md:p-12 text-white">
      {/* Left: Map */}
      <div className="w-full md:w-1/2 h-64 md:h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
        {/* Blue border effect */}
        <div className="absolute inset-0 border-4 border-blue-500/30 rounded-lg z-10 pointer-events-none"></div>
        {/* Map container */}
        <div ref={mapContainerRef} className="w-full h-full rounded-lg"></div>
      </div>

      {/* Right: Contact Details */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        
        <div className="mb-4">
          <p className="font-semibold">Head Office:</p>
          <p>B-57, 1st Floor B Block, Suncity, Sector 54, Gurugram, Haryana - 122011</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Branch:</p>
          <p>N-14/27, DLF Phase 2, Sector 25, Gurugram, Haryana - 122022</p>
          <p>889/1, Opp Ana Sagar Lake, Chupati, Gauravpath, Ajmer, Rajasthan - 305001</p>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span>📞</span>
          <p>+91-9599029606, +91-7303031659</p>
        </div>

        <div className="flex items-center gap-2">
          <span>📧</span>
          <p>info@ilc.limited</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;