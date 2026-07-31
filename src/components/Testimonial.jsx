import React from 'react';
import { Quote } from 'lucide-react';
import profilePic from '../../img repo/shreya chopra profile pic.jpg';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="testimonial-image">
            <img src={profilePic} alt="Shreya Chopra" />
          </div>
          <div className="testimonial-content">
            <div className="quote-icon-wrapper">
              <Quote fill="white" size={20} className="text-white" />
            </div>
            <h3 className="testimonial-quote">
              “The most successful people aren't the ones who know all the answers, they're the ones who know themselves.”
            </h3>
            <div className="testimonial-author">
              <h4>Shreya Chopra</h4>
              <p>Managing Director & Founder, ILC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
