import React from 'react';

const Founder: React.FC = () => {
  const name = "Shreya Chopra";
  const imageUrl = "/assets/teachers/shreya-chopra.jpeg";  // Ensure the image path is correct
  const thoughts = "To be the premier global platform that unites legal professionals across all disciplines, fostering collaboration, skill development, and impactful networking, while empowering them to shape the future of law with innovation, excellence, and integrity!";
  const designation = "Founder";

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 p-8 mx-auto sm:py-36 sm:px-6 lg:max-w-6xl lg:px-8 border-t-2 border-purple">
      <div className="flex-shrink-0 w-56 overflow-hidden rounded-lg border-4 border-purple mb-8 lg:mb-0">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow text-center lg:text-left">
        <h2 className="text-4xl font-bold text-gray-300 mb-4">{name}</h2>
        <p className="text-xl font-semibold text-[#a47c38] mb-4">{designation}</p>
        <p className="text-[#a47c38] text-xl leading-relaxed italic border-l-4 border-purple pl-4">{thoughts}</p>
      </div>
    </div>
  );
};

export default Founder;