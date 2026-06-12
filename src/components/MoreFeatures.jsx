import React from 'react';

const features = [
  {
    img: 'images/1.svg',
    title: 'Psychometric Test',
    desc: 'Insights designed for your academic stage, backed by 2026 trends and NEP 2020.'
  },
  {
    img: 'images/2.svg',
    title: 'Counselling Sessions',
    desc: 'Benefit from one-on-one sessions with trained career counsellors at every step of your journey.'
  },
  {
    img: 'images/3.svg',
    title: 'DigiLocker Verified',
    desc: 'Every credential is government authenticated, ensuring complete authenticity.'
  },
  {
    img: 'images/4.svg',
    title: 'e-Library',
    desc: 'Access 1,300+ notes, expert blogs, and learning resources, all within your ILC account.'
  },
  {
    img: 'images/5.svg',
    title: 'Experiential Learning',
    desc: 'Receive structured internship opportunities matched to your profile and career goals.'
  },
  {
    img: 'images/6.svg',
    title: 'Growth Tracking',
    desc: 'Your Career ID evolves with your progress, always reflecting your current stage and achievements.'
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
