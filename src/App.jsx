import React, { useCallback, useEffect, useState } from 'react';
import Features from './components/Features';
import Steps from './components/Steps';
import Tools from './components/Tools';
import MoreFeatures from './components/MoreFeatures';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Legal from './components/Legal';
import Privacy from './components/Privacy';
import Refund from './components/Refund';
import logoEagle from '../img repo/ILC Logo Eagle.svg';
import './index.css';
import Poadcast from './components/Poadcast';
import Blog from './components/Blog';
import People from './components/People';

function App() {
  const [activeToolTab, setActiveToolTab] = useState('psychometric');
  const [hash, setHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));
  const resumeBuilderUrl = 'https://resumebuilder.ilc.limited/register';

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const goToToolsTab = useCallback((tabId) => {
    setActiveToolTab(tabId);
    // Scroll after state update is scheduled
    requestAnimationFrame(() => scrollToId('tools'));
  }, [scrollToId]);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // When navigating to legal pages via footer links, keep UX consistent:
    // always start at the top of the new page.
    if (hash === '#terms' || hash === '#privacy' || hash === '#refund') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [hash]);

  if (hash === '#terms' || hash === '#privacy' || hash === '#refund') {
    return (
      <div className="app-layout">
        <header className="navbar-shell" id="top">
          <div className="container">
            <nav className="navbar">
              <a href="#top" className="navbar-brand-link">
                <img src={logoEagle} alt="ILC Logo" className="navbar-logo" />
              </a>
              <div className="navbar-links">
                <a
                  href="#top"
                  onClick={(e) => (
                    e.preventDefault(),
                    (window.location.hash = ''),
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
                  )}
                >
                  Home
                </a>
              </div>
              <button
                className="btn-outline"
                onClick={() => (
                  (window.location.hash = ''),
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
                )}
              >
                Back
              </button>
            </nav>
          </div>
        </header>
        {hash === '#privacy' ? <Privacy /> : hash === '#refund' ? <Refund /> : <Legal />}
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-layout">
      <header className="navbar-shell">
        <div className="container">
          <nav className="navbar">
            <a href="#" className="navbar-brand-link">
              <img src={logoEagle} alt="ILC Logo" className="navbar-logo" />
            </a>
            <div className="navbar-links">
              <a href="#tools" onClick={(e) => (e.preventDefault(), goToToolsTab('cv_builder'))}>
                DigiLocker Verified CV
              </a>
              <a href="#tools" onClick={(e) => (e.preventDefault(), goToToolsTab('psychometric'))}>
                Psychometric Test
              </a>
              <a href="#tools" onClick={(e) => (e.preventDefault(), goToToolsTab('career_id'))}>
                Career ID
              </a>
              <a href="#how-it-works" onClick={(e) => (e.preventDefault(), scrollToId('how-it-works'))}>
                How it works
              </a>
            </div>
            <a className="btn-outline" href={resumeBuilderUrl}>
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <div className="container">
        <main className="hero-wrapper">
          <div className="hero-left">
            <div className="tagline-badge">India's first career identity platform</div>
            <h1 className="hero-heading">
              Your Career. <br /> Verified.
            </h1>
            <p className="hero-subtext">
              India’s first Career Identity Platform — where every skill you build, every milestone you cross, becomes part of one verified record that employers can trust.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href={resumeBuilderUrl}>
                Get your CareerID
              </a>
              <button className="btn-secondary">How it works</button>
            </div>
          </div>

          <div className="hero-right">
            <img
              className="hero-id-svg"
              src={`${import.meta.env.BASE_URL}ID.svg`}
              alt="Career ID"
            />
          </div>
        </main>
      </div>

      <Features />
      <section id="how-it-works">
        <Steps />
      </section>
      <Tools activeTab={activeToolTab} onTabChange={setActiveToolTab} />
      <MoreFeatures />
      <Testimonial />
      <Poadcast/>
      {/* <Blog/>
      <People/> */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
