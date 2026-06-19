import React from 'react';
import ctaBg from '../../img repo/Ready to Take Bg Block.svg';
import { resumeBuilderUrl } from '../config/config';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div 
          className="cta-wrapper"
          style={{ 
            backgroundImage: `url("${ctaBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="badge-light">Try ILC</div>
          <h2 className="cta-heading">
            Ready To Take Your<br />CareerID?
          </h2>
          <a className="btn-dark cta-btn" href={resumeBuilderUrl} target="_self">
            Get your CareerID
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
