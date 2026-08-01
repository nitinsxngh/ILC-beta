import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, CheckCircle, Clock, Fingerprint, Share2 } from 'lucide-react';
import toolsBg from '../../img repo/iridi for tools bg.svg';
import { resumeBuilderUrl } from '../config/config';

const tabsData = [
  {
    id: 'psychometric',
    label: 'Psychometric test',
    title: "Know What You're Built For",
    subtitle: 'Our psychometrically validated assessments are built on research based insights,and advanced data models to evaluate your aptitude and interests, helping you understand yourself better and choose the right career path with confidence.',
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
    title: "Your CV Should Build Trust Instantly",
    subtitle: "A verified CV that makes it easy for employers to validate your credentials quickly, securely, and effortlessly.",
    listTitle: 'Features',
    points: [
      'DigiLocker verified credentials',
      'AI generated, ATS-optimised',
      'Blockchain secured identity',
    ],
    btnText: 'Build your CV'
  },
  {
    id: 'career_id',
    label: 'Career ID',
    title: "One profile. Every milestone. ",
    points: [
      "Career ID is a secure digital profile that keeps your academic achievements, skills, certifications, internships, and work experience together in one place. As your career evolves, your profile evolves with it, giving you a verified record that's always up to date and ready whenever you need it."
    ],
    btnText: 'Get your Career ID'
  },
  {
    id: 'career_kundli',
    label: 'Career Kundli',
    title: "Your Career Dashboard",
    subtitle: "Career Kundli is your interactive career dashboard, bringing together strengths, verified achievements, and career milestones in one place.",
    listTitle: "What's inside",
    points: [
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
    ],
    btnText: 'Build your Career Kundli'
  }
];

const RenderVisual = ({ activeId }) => {
  if (activeId === 'psychometric') {
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
          <span></span><span></span><span></span>
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
          <span></span><span></span><span></span>
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

  if (activeId === 'cv_builder') {
    return (
      <div className="visual-kundli">
        <img
          src="/resume.svg"
          alt="CV Preview"
          className="cv-preview"
        />
      </div>
    );
  }

  if (activeId === 'career_id') {
    return (
      <div className="visual-career-id">
        <div className="floating-icon icon-tl">
          <img src="/fingerprint.svg" alt="Share Icon" width={24} height={24} />
        </div>

        <div className="id-card-main">
          <div className="id-avatar">
            <img
              src="/John.png"
              alt="John Doe"
            />
          </div>
          <div className="id-info">
            <div className="id-name-row">
              <h4>John Doe</h4>
              <CheckCircle size={16} className="text-green-500" />
            </div>
            <p>Product Designer • New Delhi, India</p>
            <div className="id-badge"><span>Career ID: ILC445378</span></div>
          </div>
        </div>

        <div className="floating-icon icon-br">
          <img src="/share.svg" alt="Share Icon" width={24} height={24} />
        </div>
      </div>
    );
  }

  if (activeId === 'career_kundli') {
    return (
      <div className="visual-kundli">

        <img
          src="/ck-report.svg"
          alt="CV Preview"
          className="cv-preview"
        />

      </div>
    );
  }

  return null;
};

const Tools = ({ activeTab, onTabChange }) => {

  const sentinelRefs = useRef([]);
  const scrollFromTabClick = useRef(false);
  const activeTabRef = useRef(activeTab ?? tabsData[0].id);
  const resolvedActiveTab = activeTab ?? tabsData[0].id;
  const setResolvedActiveTab = onTabChange ?? (() => { });
  const activeIndex = Math.max(
    0,
    tabsData.findIndex((tab) => tab.id === resolvedActiveTab)
  );

  activeTabRef.current = resolvedActiveTab;

  const scrollToStep = (tabId, behavior = 'smooth') => {
    const el = document.getElementById(`tools-step-${tabId}`);
    if (el) {
      el.scrollIntoView({ behavior, block: 'start' });
    }
  };

  const handleTabClick = (tabId) => {
    scrollFromTabClick.current = true;
    setResolvedActiveTab(tabId);
    scrollToStep(tabId);
    window.setTimeout(() => {
      scrollFromTabClick.current = false;
    }, 800);
  };

  useEffect(() => {
    const sentinels = sentinelRefs.current.filter(Boolean);
    if (!sentinels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollFromTabClick.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const tabId = visible.target.dataset.tabId;
          if (tabId && tabId !== activeTabRef.current) {
            setResolvedActiveTab(tabId);
          }
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.5, 1],
      }
    );

    sentinels.forEach((sentinel) => observer.observe(sentinel));
    return () => observer.disconnect();
  }, [setResolvedActiveTab]);

  return (
    <section className="tools-section" id="tools">
      <div
        className="tools-scrolly-room"
        style={{ '--tools-steps': tabsData.length }}
      >
        {tabsData.map((tab, index) => (
          <div
            key={tab.id}
            id={`tools-step-${tab.id}`}
            ref={(el) => { sentinelRefs.current[index] = el; }}
            data-tab-id={tab.id}
            className="tools-scrolly-sentinel"
            style={{ '--step-index': index }}
            aria-hidden="true"
          />
        ))}

        <div className="tools-scrolly-stage">
          <div className="container tools-scrolly-inner">
            <div className="tools-scrolly-header">
              <div className="tools-header-global">
                <div className="badge-light">Core Features</div>
                <h2 className="tools-heading">
                  The Tools That Build Your Career
                </h2>
              </div>
            </div>

            <div className="tools-scrolly-cards">
              {tabsData.map((tab, index) => (
                <article
                  id={`tools-card-${tab.id}`}
                  key={tab.id}
                  className={`tools-container tools-feature-card ${index === activeIndex ? 'is-visible' : ''}`} style={{
                    backgroundImage: `url("${toolsBg}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: index + 1,
                  }}
                  aria-hidden={index !== activeIndex}
                >
                  <div className="tools-left">
                    <p className="step-label" >
                      {tab.label}
                    </p>
                    <h3 className="tool-title">{tab.title}</h3>
                    {tab.id !== "career_id" && <>
                      <p className="tool-subtitle">{tab.subtitle}</p>
                    </>}
                    {tab.id === 'psychometric' || tab.id === 'career_id' ? null : <h4 className="tool-list-title">{tab.listTitle}</h4>}
                    <ul className="tool-list">
                      {tab.id !== 'psychometric' ? tab.points.map((point, idx) => (
                        <li key={idx} >
                          {/* {tab.id !== "career_id" && <CheckCircle2 size={16} className="text-green-500" />} */}
                          <p className='carrer-kundali-piont' >{point}</p>
                        </li>
                      )) : (
                        <>
                          <h4 className="psy-list-title">Grades 8-10 : Career Discovery</h4>
                          <p className='psy-list-subtitle' >Understand your strengths and choose the right stream with clarity.</p>
                          <h4 className="psy-list-title">Grades 11–12 · Career Pathway Planning</h4>
                          <p className='psy-list-subtitle' >Evaluate your current path and strengthen it for the right career outcomes.</p>
                        </>
                      )}
                    </ul>
                    <a href={resumeBuilderUrl} target="_self" >
                      <button type="button" className="btn-dark tool-btn" >
                        {tab.btnText}
                      </button>
                    </a>
                  </div>

                  <div className={`tools-right ${tab.id === 'cv_builder' || tab.id === 'career_kundli' ? 'tools-bottom-end' : 'tools-center'}`}>
                    <RenderVisual activeId={tab.id} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
