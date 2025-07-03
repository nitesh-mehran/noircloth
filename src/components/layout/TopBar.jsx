// src/components/layout/TopBar.jsx
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm overflow-hidden whitespace-nowrap py-2">
      <div className="relative w-full">
        <div className="animate-marquee flex items-center gap-32 px-4 w-max">
          <span>
            🎉 Use Code <strong>NOIR10</strong> to get <strong>10% OFF</strong> on your first order!
          </span>
          <span> Delivered with ❤️ by NoirCloth</span>
          <span>
            🎉 Use Code <strong>NOIR10</strong> to get <strong>10% OFF</strong> on your first order!
          </span>
          <span> Delivered with ❤️ by NoirCloth</span>
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TopBar;
