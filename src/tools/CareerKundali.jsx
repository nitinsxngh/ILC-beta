import React from 'react';
import { resumeBuilderUrl } from '../config/config';

export function Visual() {
  return (
    <div className="visual-kundli">
      <img src="/ck-report.svg" alt="CV Preview" className="cv-preview" />
    </div>
  );
}

export function LeftPanel({ tab }) {
  const points = [
    <>
      <strong>• Professional Snapshot :</strong> A quick overview of your strengths,
      interests, skills, and career direction.
    </>,
    <>
      <strong>• Verified Credentials :</strong> Academic records and certifications
      securely verified through DigiLocker.
    </>,
    <>
      <strong>• Experience & Projects :</strong> A record of internships, work
      experience, projects, and key achievements.
    </>,
    <>
      <strong>• Career Timeline :</strong> A chronological view of your learning,
      experiences, and professional milestones.
    </>,
  ];

  return (
    <>
      <p className="step-label">{tab.label}</p>
      <h3 className="tool-title">{tab.title}</h3>
      <p className="tool-subtitle">{tab.subtitle}</p>
      <h4 className="tool-list-title">{tab.listTitle}</h4>
      <ul className="tool-list">
        {points.map((point, idx) => (
          <li key={idx}>
            <p className="carrer-kundali-piont">{point}</p>
          </li>
        ))}
      </ul>
      <a href={resumeBuilderUrl} target="_self">
        <button type="button" className="btn-dark tool-btn">
          {tab.btnText}
        </button>
      </a>
    </>
  );
}
