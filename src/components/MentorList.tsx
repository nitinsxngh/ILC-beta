'use client';

import React, { useEffect, useState } from 'react';

// Define the structure of a mentor
interface Mentor {
  _id: { $oid: string };
  img?: string;
  name: string;
  email: string;
  jobTitle: string;
  jobCompany: string;
  mentorId: string;
  date: { $date: { $numberLong: string } };
  __v: { $numberInt: string };
}

// Default profile image (external source)
const DEFAULT_PROFILE_IMAGE = 'https://www.w3schools.com/howto/img_avatar.png';

const MentorList = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('https://api.ilc.limited/api/mentors');
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  // Categorize mentors
  const professors = mentors.filter((mentor) => mentor.jobTitle.toLowerCase().includes('professor'));
  const professionals = mentors.filter((mentor) => !mentor.jobTitle.toLowerCase().includes('professor'));

  return (
    <div id="mentors-section" className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white my-4">
          Meet Our Experts
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-xl">Loading mentors...</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {/* Professors Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#a47c38] border-b-2 pb-2 mb-6">Professors</h3>
            <div className="space-y-6">
              {professors.length > 0 ? (
                professors.map((mentor) => (
                  <div key={mentor._id.$oid} className="flex items-center space-x-4 border p-4 rounded-xl shadow-md">
                    <img
                      src={mentor.img || DEFAULT_PROFILE_IMAGE}
                      alt={mentor.name}
                      onError={(e) => (e.currentTarget.src = DEFAULT_PROFILE_IMAGE)}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold">{mentor.name}</p>
                      <p className="text-gray-600">{mentor.jobTitle}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No professors found</p>
              )}
            </div>
          </div>

          {/* Professionals Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#a47c38] border-b-2 pb-2 mb-6">Professionals</h3>
            <div className="space-y-6">
              {professionals.length > 0 ? (
                professionals.map((mentor) => (
                  <div key={mentor._id.$oid} className="flex items-center space-x-4 border p-4 rounded-xl shadow-md">
                    <img
                      src={mentor.img || DEFAULT_PROFILE_IMAGE}
                      alt={mentor.name}
                      onError={(e) => (e.currentTarget.src = DEFAULT_PROFILE_IMAGE)}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold">{mentor.name}</p>
                      <p className="text-gray-600">{mentor.jobTitle}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No professionals found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorList;
