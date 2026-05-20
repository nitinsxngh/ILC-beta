import React, { useState } from 'react';
import { CircleDot, Blocks, Rocket, CheckCircle2, Clock, IndianRupee } from 'lucide-react';

import blueBg from '../../img repo/blue frame elipse.svg';
import greenBg from '../../img repo/green frame elipse.svg';
import yellowBg from '../../img repo/yellow frame elipse.svg';

const Steps = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'discover',
      title: 'Discover',
      icon: <img src="/eye.svg" alt="Discover Icon" className="tab-icon" sizes='20' />,
      color: 'blue',
      description: 'Psychometric assessment maps aptitude, personality, and career alignment certified osvano odists and expert counsellors co-validate.',
      points: [
        'AI-powered psychometric testing',
        'One-on-one counselling sessions',
        'Identify skill gaps & best-fit pathways',
        'Panel of psychologists'
      ]
    },
    {
      id: 'build',
        title: 'Build',
        icon: <img src="/build.svg" alt="Build Icon" className="tab-icon" sizes='20' />,
      color: 'green',
      description: 'Once your path is clear, ILC equips you with the skills employers actually trust — through hands-on training, expert mentorship, and a DigiLocker-verified Career Resume that makes your growth impossible to question.',
      points: [
        'Cross-domain training built for employability',
        'Real mentorship. Real projects. Real outcomes.',
        'Verified credentials- backed by DigiLocker'
      ]
    },
    {
      id: 'launch',
      title: 'Launch',
      icon: <img src="/launch.svg" alt="Launch Icon" className="tab-icon" sizes='20' />,
      color: 'yellow',
      description: 'This is where your verified identity meets real opportunity — and your career finally begins.',
      points: [
        'Get placed via our corporate network',
        'International study & employment pathways',
        'Structured placement with defined outcomes'
      ]
    }
  ];

  const getGradientClass = (color) => {
    switch(color) {
      case 'blue': return 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-500/20';
      case 'green': return 'bg-gradient-to-br from-green-400 to-green-500 shadow-green-500/20';
      case 'yellow': return 'bg-gradient-to-br from-yellow-400 to-orange-400 shadow-yellow-500/20';
      default: return 'bg-gradient-to-br from-blue-400 to-blue-600';
    }
  };

  const getRightBackground = (color) => {
    switch(color) {
      case 'blue': return `url("${blueBg}")`;
      case 'green': return `url("${greenBg}")`;
      case 'yellow': return `url("${yellowBg}")`;
      default: return `url("${blueBg}")`;
    }
  };

  return (
    <section className="steps-section">
      <div className="container">
        <div className="steps-wrapper">
          <div className="steps-left">
            <div className="badge-light">The ILC Model</div>
            <h2 className="steps-heading">
              Build Your Career<br />In Just Three Steps
            </h2>
            
            <div className="steps-accordion">
              {tabs.map((tab, index) => (
                <div 
                  key={tab.id} 
                  className={`step-item ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="step-header">
                    {tab.icon}
                    <h3>{tab.title}</h3>
                  </div>
                  
                  <div className={`step-content ${activeTab === index ? 'expanded' : ''}`}>
                    <div className="step-content-inner">
                      <p className="step-description">{tab.description}</p>
                      <ul className="step-points">
                        {tab.points.map((point, i) => (
                          <li key={i}>
                            <CheckCircle2 size={16} className="text-gray-600 mr-3 flex-shrink-0 mt-1 " />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary steps-cta">Get your CareerID</button>
          </div>

          <div className="steps-right">
            <div 
              className="steps-right-bg"
              style={{ 
                backgroundImage: getRightBackground(tabs[activeTab].color),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="cards-stack">
                <div className="stacked-card card-back-2"></div>
                <div className="stacked-card card-back-1"></div>
                <div className="stacked-card card-front">
                  <div className="counsellor-profile">
                    <div className="counsellor-avatar">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces&q=80" alt="Keerti Singh" />
                    </div>
                    <div className="counsellor-info">
                      <h4>Keerti Singh</h4>
                      <p>Career Counsellor</p>
                    </div>
                  </div>
                  
                  <div className="counsellor-tags">
                    <span className="tag-blue">Career Guidance</span>
                    <span className="tag-blue-light">Interview Prep</span>
                  </div>
                  
                  <p className="counsellor-desc">
                    I help students discover their strengths, explore career options and plan their next steps with confidence.
                  </p>
                  
                  <div className="counsellor-stats">
                    <div className="stat">
                      <Clock size={14} />
                      <span>12+ years</span>
                    </div>
                    <div className="stat">
                      <IndianRupee size={14} />
                      <span>1500/session</span>
                    </div>
                  </div>
                  
                  <button className="counsellor-btn">Book a session</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
