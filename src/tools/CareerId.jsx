import React from 'react';
import { CheckCircle } from 'lucide-react';
import { resumeBuilderUrl } from '../config/config';

export function Visual() {
  return (
    <div className="visual-career-id">
      <div className="floating-icon icon-tl">
        <img src="/fingerprint.svg" alt="Share Icon" width={24} height={24} />
      </div>

      <div className="id-card-main">
        <div className="id-avatar">
          <img src="/John.png" alt="John Doe" />
        </div>
        <div className="id-info">
          <div className="id-name-row">
            <h4>John Doe</h4>
            <CheckCircle size={16} className="text-green-500" />
          </div>
          <p>Product Designer • New Delhi, India</p>
          <div className="id-badge">
            <span>Career ID: ILC445378</span>
          </div>
        </div>
      </div>

      <div className="floating-icon icon-br">
        <img src="/share.svg" alt="Share Icon" width={24} height={24} />
      </div>
    </div>
  );
}

export function LeftPanel({ tab }) {
  return (
    <>
      <p className="step-label">{tab.label}</p>
      <h3 className="tool-title">{tab.title}</h3>
      <ul className="tool-list">
        {tab.points.map((point, idx) => (
          <li key={idx}>
            <p className="carrer-kundali-piont" style={{ fontSize: 14 }} >{point}</p>
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
