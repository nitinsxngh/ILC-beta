"use-client";
import React, { useState } from "react";
import "../people.css";

const People = () => {
  const tabs = [
    "Office Team",
    "Advisors",
    "Domain Experts",
    "Psychologists",
    "Career Counsellors",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const team = [
    { name: "Jane Doe", role: "Position/Role", img: "/people.png" },
    { name: "Jane Doe", role: "Position/Role", img: "/people.png" },
    { name: "Jane Doe", role: "Position/Role", img: "/people.png" },
    { name: "Jane Doe", role: "Position/Role", img: "/people.png" },
    { name: "Jane Doe", role: "Position/Role", img: "/people.png" },
    { name: "Jane Doe", role: "Position/Role", img: "/people.png" },
    { name: "Jane Doe", role: "Position/Role", img: "/people.png" },
    { name: "Jane Doe", role: "Position/Role", img: "/people.png" },
  ];

  return (
    <section className="people-section">
      <div className="people-header">
        <span className="people-badge">Our People</span>
        <h2 className="people-title">The Team Behind ILC</h2>
        <p className="people-description">
          Built by people who believe every Indian deserves a verified career identity.
          Real industry experience — not just academic credentials.
        </p>
      </div>

      <div className="people-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`people-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="people-grid">
        {team.map((member, index) => (
          <article key={index} className="people-card">
            <img
              src={member.img}
              alt={member.name}
              className="people-image"
            />
            <div className="people-card-body">
              <p className="people-name">{member.name}</p>
              <p className="people-role">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default People;
