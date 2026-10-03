import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { resumeBuilderUrl } from '../config/config';

export function Visual() {
  return (
    <div className="visual-psychometric">
      <div className="test-card">
        <div className="test-icon bg-blue-100">🖊️</div>
        <div className="test-info">
          <h4>Interest Profile</h4>
        </div>
        <div className="status-badge success">
          <CheckCircle size={14} /> Complete
        </div>
      </div>
      <div className="test-connector">
      </div>
      <div className="test-card">
        <div className="test-icon bg-gray-100">📁</div>
        <div className="test-info">
          <h4>Aptitude Profile</h4>
        </div>
        <div className="status-badge success">
          <CheckCircle size={14} /> Complete
        </div>
      </div>
      <div className="test-connector">
       
      </div>
      <div className="test-card">
        <div className="test-icon bg-blue-50">✏️</div>
        <div className="test-info">
          <h4>Future Orientation Profile</h4>
        </div>
        <div className="status-badge warning">
          <Clock size={14} /> In Progress
        </div>
      </div>
    </div>
  );
}

export function LeftPanel({ tab }) {
  return (
    <>
      <p className="step-label">{tab.label}</p>
      <h3 className="tool-title">{tab.title}</h3>
      <p className="tool-subtitle">{tab.subtitle}</p>
      <ul className="tool-list">
        <h4 className="psy-list-title">Grades 8-10 : Career Discovery</h4>
        <p className="psy-list-subtitle">
          Understand your strengths and choose the right stream with clarity.
        </p>
        <h4 className="psy-list-title">Grades 11–12 · Career Pathway Planning</h4>
        <p className="psy-list-subtitle">
          Evaluate your current path and strengthen it for the right career outcomes.
        </p>
      </ul>
      <a href={resumeBuilderUrl} target="_self">
        <button type="button" className="btn-dark tool-btn">
          {tab.btnText}
        </button>
      </a>
    </>
  );
}
