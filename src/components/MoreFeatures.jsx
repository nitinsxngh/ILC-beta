import React from 'react';

const features = [
  {
    img: 'images/1.svg',
    title: 'e-Library',
    desc: '1,300+ notes, expert blogs, and resources — all inside your ILC account.'
  },
  {
    img: 'images/2.svg',
    title: 'Expert Mentors',
    desc: 'Guidance from 30+ real industry professionals who know how careers work.'
  },
  {
    img: 'images/3.svg',
    title: 'DigiLocker Verified',
    desc: 'Every credential is government-authenticated. Zero fakes.'
  },
  {
    img: 'images/4.svg',
    title: 'Internship Placement',
    desc: 'Structured internships matched to your profile and career goals.'
  },
  {
    img: 'images/5.svg',
    title: 'Growth Tracking',
    desc: 'Your Career ID updates as you grow — always showing where you are right now.'
  },
  {
    img: 'images/6.svg',
    title: 'Counsellor Sessions',
    desc: 'One-on-one sessions with trained career counsellors at every stage.'
  }
];

const MoreFeatures = () => {
  return (
    <section className="more-features-section">
      <div className="container">
        <div className="more-features-header">
          <div className="badge-light">More Features</div>
          <h2 className="more-features-heading">
            Everything You Need To<br />Build Your Career
          </h2>
          <p className="more-features-subtext">
            ILC provides all the tools you need to build and showcase your career — <br/> from psychometric assessments and certifications to portfolio,<br/> experience, and verified career credentials.
          </p>
        </div>

        <div className="more-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="more-feature-card">
              <div 
                className="more-feature-card-bg" 
                style={{ backgroundImage: `url("${import.meta.env.BASE_URL}${feature.img}")` }}
              ></div>
              <div className="more-feature-card-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
