"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1Ijoibml0aW5zeG5naCIsImEiOiJjbDJ6cWNnYjAxaTFnM2trNmh2d3B1ZXdmIn0.zBTzZ5tjnScENUb-2JoVUQ";

const Contact = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [77.0266, 28.4595],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([77.0266, 28.4595]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div className="w-full p-6 md:p-12 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact & Information</h2>
      
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
        {/* Column 1: General Pages */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2">General</h3>
          <ul className="space-y-3">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Blogs</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Terms and Conditions</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Column 2: Courses */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2">Our Circles</h3>
          <ul className="space-y-3">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Integrated Drone Circle</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Integrated Engineering Circle</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Integrated Management Circle</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Integrated Finance Circle</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Integrated AI Circle</li>
          </ul>
        </div>

        {/* Column 3: Map & Contact Info */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2">Locations</h3>
          
          {/* Map */}
          <div className="h-64 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative mb-6">
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-lg z-10 pointer-events-none"></div>
            <div ref={mapContainerRef} className="w-full h-full rounded-lg"></div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-500 pb-2">Contact Us</h3>
            
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
      </div>
    </div>
  );
};

export default Contact;