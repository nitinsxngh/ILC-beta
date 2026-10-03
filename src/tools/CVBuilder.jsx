import React from 'react';
import { resumeBuilderUrl } from '../config/config';

export function Visual() {
  return (
    <div className="visual-kundli">
      <img src="/resume.svg" alt="CV Preview" className="cv-preview" />
    </div>
  );
}

export function LeftPanel({ tab }) {
  return (
    <>
      <p className="step-label">{tab.label}</p>
      <h3 className="tool-title">{tab.title}</h3>
      <p className="tool-subtitle">{tab.subtitle}</p>
      <h4 className="tool-list-title">{tab.listTitle}</h4>
      <ul className="tool-list">
        {tab.points.map((point, idx) => (
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
