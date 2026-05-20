import React, { useState } from 'react';
import { CheckCircle2, CheckCircle, Clock, Fingerprint, Share2 } from 'lucide-react';
import toolsBg from '../../img repo/iridi for tools bg.svg';

const tabsData = [
  {
    id: 'psychometric',
    label: 'Psychometric test',
    title: "Know What You're Built For",
    subtitle: 'Science-backed assessments using RIASEC, MBTI, Big 5, and OCEAN — validated by certified doctors.',
    listTitle: 'Made for',
    points: [
      'Students of Class 8 - 10',
      'Students of Class 11 - 12',
      'College Students & Graduates'
    ],
    btnText: 'Take assessment'
  },
  {
    id: 'cv_builder',
    label: 'Digilocker Verified CV',
    title: "Your CV Should Open Doors, Not Raise Questions",
    subtitle: "Build a CV that's instantly verifiable by employers and recruiters — no calls, no doubts, no delays.",
    listTitle: 'Features',
    points: [
      'DigiLocker verified',
      'Employer-ready format',
      'Unique Career ID',
      'ATS optimised',
      'Auto-updating CV'
    ],
    btnText: 'Build your CV'
  },
  {
    id: 'career_id',
    label: 'Career ID',
    title: "The Aadhaar of Professional India",
    subtitle: "A living, dynamic credential that is more than a CV. Authenticated by Government and trusted by employers. It grows automatically from your school to your most senior role.",
    listTitle: 'Features',
    points: [
      'One ID for your entire career journey',
      'Verified and trusted by employers',
      'Easy to share anywhere'
    ],
    btnText: 'Get your Career ID'
  },
  {
    id: 'career_kundli',
    label: 'Career Kundli',
    title: "Your Career Dashboard",
    subtitle: "A structured career profile that helps you track, build, and showcase your journey in one dashboard.",
    listTitle: 'Features',
    points: [
      'Everything about your career, organized',
      'Built for clarity, not confusion',
      'Grows with every new milestone'
    ],
    btnText: 'Build your Career Kundli'
  }
];

const RenderVisual = ({ activeId }) => {
  if (activeId === 'psychometric') {
    return (
      <div className="visual-psychometric">
        <div className="test-card">
          <div className="test-icon bg-blue-100">🧠</div>
          <div className="test-info">
            <h4>MBTI Assessment</h4>
            <p>Personality type</p>
          </div>
          <div className="status-badge success">
            <CheckCircle size={14} /> Complete
          </div>
        </div>
        <div className="test-connector">
          <span></span><span></span><span></span>
        </div>
        <div className="test-card">
          <div className="test-icon bg-gray-100">📄</div>
          <div className="test-info">
            <h4>RIASEC Profiling</h4>
            <p>Aptitude Mapping</p>
          </div>
          <div className="status-badge success">
            <CheckCircle size={14} /> Complete
          </div>
        </div>
        <div className="test-connector">
          <span></span><span></span><span></span>
        </div>
        <div className="test-card">
          <div className="test-icon bg-blue-50">✏️</div>
          <div className="test-info">
            <h4>Big 5 & OCEAN</h4>
            <p>Trait analysis</p>
          </div>
          <div className="status-badge warning">
            <Clock size={14} /> In Progress
          </div>
        </div>
      </div>
    );
  }

  if (activeId === 'cv_builder') {
    return (
      <div className="visual-cv">
        <div className="cv-header">
          <div className="cv-avatar"></div>
          <div className="cv-header-text">
            <h4>Jane Doe</h4>
            <p>Product Designer</p>
          </div>
        </div>
        <div className="cv-body">
          <div className="cv-col cv-left">
            <div className="cv-block"></div>
            <div className="cv-block"></div>
            <div className="cv-block"></div>
          </div>
          <div className="cv-col cv-right">
            <div className="cv-section-title">Experience</div>
            <div className="cv-item">
              <div className="cv-item-icon"></div>
              <div className="cv-item-text">
                <div className="cv-line w-full"></div>
                <div className="cv-line w-3/4"></div>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-item-icon"></div>
              <div className="cv-item-text">
                <div className="cv-line w-full"></div>
                <div className="cv-line w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeId === 'career_id') {
    return (
      <div className="visual-career-id">
        <div className="floating-icon icon-tl">
          <Fingerprint size={24} className="text-blue-500" />
        </div>
        
        <div className="id-card-main">
          <div className="id-avatar">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80"
              alt="John Doe"
            />
          </div>
          <div className="id-info">
            <div className="id-name-row">
              <h4>John Doe</h4>
              <CheckCircle size={16} className="text-green-500" />
            </div>
            <p>Product Designer • New Delhi, India</p>
            <div className="id-badge">Career ID: ILC445378</div>
          </div>
        </div>
        
        <div className="floating-icon icon-br">
          <Share2 size={20} className="text-green-500" />
        </div>
      </div>
    );
  }

  if (activeId === 'career_kundli') {
    return (
      <div className="visual-kundli">
        <div className="browser-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <div className="browser-bar">ilc.com</div>
        </div>
        <div className="browser-body">
          <div className="kundli-grid">
            <div className="kundli-card wide">
              <div className="k-header">
                <h5>Psychometric test evaluation</h5>
                <a href="#">view report</a>
              </div>
              <div className="k-content">
                <div className="k-icon">🧠</div>
                <div className="k-text">
                  <h6>Psychometric Profile</h6>
                  <p>RIASEC, INTJ, Big 5, OCEAN</p>
                </div>
              </div>
            </div>
            
            <div className="kundli-card">
              <div className="k-header">
                <h5>Experience</h5>
                <a href="#">view all</a>
              </div>
              <div className="k-content">
                <div className="k-icon bg-purple-100">💼</div>
                <div className="k-text">
                  <h6>Product Designer</h6>
                  <p>Clockworks Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="kundli-card">
              <div className="k-header">
                <h5>Testimonials</h5>
              </div>
              <div className="k-content">
                <div className="k-avatar"></div>
                <div className="k-text">
                  <h6>Keerti Singh</h6>
                  <p>Founder at Blip St...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const Tools = ({ activeTab, onTabChange }) => {
  const [localActiveTab, setLocalActiveTab] = useState('psychometric');
  const resolvedActiveTab = activeTab ?? localActiveTab;
  const setResolvedActiveTab = onTabChange ?? setLocalActiveTab;
  const activeData = tabsData.find(t => t.id === resolvedActiveTab);

  return (
    <section className="tools-section" id="tools">
      <div className="container">
        <div className="tools-header-global">
          <div className="badge-light">Core Features</div>
          <h2 className="tools-heading">
            The Tools That<br />Build Your Career
          </h2>
        </div>

        <div className="tools-tabs">
          {tabsData.map(tab => (
            <button
              key={tab.id}
              className={`tool-tab-btn ${resolvedActiveTab === tab.id ? 'active' : ''}`}
              onClick={() => setResolvedActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div 
          className="tools-container"
          style={{ 
            backgroundImage: `url("${toolsBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div key={resolvedActiveTab} className="tools-left tools-panel-animate">
            <h3 className="tool-title">{activeData.title}</h3>
            <p className="tool-subtitle">{activeData.subtitle}</p>

            <h4 className="tool-list-title">{activeData.listTitle}</h4>
            <ul className="tool-list">
              {activeData.points.map((point, index) => (
                <li key={index}>
                  <CheckCircle2 size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <button className="btn-dark tool-btn">{activeData.btnText}</button>
          </div>
          
          <div key={`${resolvedActiveTab}-visual`} className="tools-right tools-panel-animate">
            <RenderVisual activeId={resolvedActiveTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
