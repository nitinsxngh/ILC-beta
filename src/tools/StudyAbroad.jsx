import React from 'react';
import { resumeBuilderUrl } from '../config/config';

export function Visual() {
    return (
        <div className="visual-study-abroad">
            <img
                src={`${import.meta.env.BASE_URL}tools/studyright.svg`}
                alt=""
                className="study-right-img"
            />
        </div>
    );
}

export function LeftPanel({ tab }) {
    return (
        <div>
            <p className="step-label">{tab.label}</p>
            <h3 className="tool-title">{tab.title}</h3>
            <p className="tool-subtitle">{tab.subtitle}</p>
            <ul className="tool-list">
                <h4 className="psy-list-title">Find Your Best-Fit Options</h4>
                <p className="psy-list-subtitle">
                    Explore countries, courses, and universities based on your goals, profile, and budget.  </p>
                <h4 className="psy-list-title">Talk to a Counsellor</h4>
                <p className="psy-list-subtitle">
                    Build your shortlist, track requirements, and stay ready for every step.  </p>
            </ul>
            <a href={resumeBuilderUrl} target="_self">
                <button type="button" className="btn-dark tool-btn">
                    {tab.btnText}
                </button>
            </a>
        </div>
    );
}
