import React from 'react';
import { Atom, Shield, BarChart3 } from 'lucide-react';

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <div className="badge-light">The ILC Model</div>
        <h2 className="features-heading">
          India's First Career<br />Identity Platform
        </h2>
        <p className="features-subtext">
In a world where degrees fall short and CVs lack credibility, ILC builds a <br/> verified, lifelong Career Identity connecting skills, achievements, and <br/> opportunities in one trusted platform.      </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Atom size={28} />
          </div>
          <h3 className="feature-card-title">Mapped by Science,<br />Not Opinion</h3>
          {/* <p className="feature-card-text">
            Your career path is based on scientific assessments — personality, aptitude, and interests — validated by experts. Not a quiz, a clear roadmap.
          </p> */}
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Shield size={28} />
          </div>
          <h3 className="feature-card-title">Credentials You Can<br />Trust</h3>
          {/* <p className="feature-card-text">
            Every credential is verified through government systems and securely stored — making it tamper-proof and instantly verifiable.
          </p> */}
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <BarChart3 size={28} />
          </div>
          <h3 className="feature-card-title">A Career Record That<br />Grows With You</h3>
          {/* <p className="feature-card-text">
            From school to your career, every skill, milestone, and experience is added to your Career ID — continuously and automatically.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
