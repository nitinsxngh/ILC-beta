import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is ILC?",
    answer: "ILC (Integrated Learning Circle) is an advanced career development platform that combines artificial intelligence, psychometric analysis, and mentorship to help individuals discover their strengths and align them with the right career paths. It offers tools like Career Kundli, AI-powered resumes, and guided learning journeys to support users from self-discovery to job placement."
  },
  {
    question: "Can anyone use Career Kundli?",
    answer: "Yes, Career Kundli is designed to be accessible to everyone. Whether you are a student exploring career options, a graduate planning your next step, or a professional considering a shift, the platform adapts to your profile and provides personalized insights that are easy to understand and act upon."
  },
  {
    question: "Are the psychologists trustworthy for my child?",
    answer: "Yes, the psychologists associated with ILC are qualified professionals who follow structured, research-backed assessment methodologies. The platform ensures that all evaluations are designed with ethical standards, scientific rigor, and the well-being of the user in mind, making it a safe and reliable choice for students."
  },
  {
    question: "Is the resume ATS-friendly?",
    answer: "Yes, resumes generated through ILC are optimized for Applicant Tracking Systems (ATS). They are structured using industry best practices, relevant keywords, and clean formatting to improve visibility and increase the chances of getting shortlisted by recruiters."
  },
  {
    question: "Can I modify my Career Kundli?",
    answer: "Yes, you can modify your Career Kundli. As your skills, interests, and experiences evolve, the platform allows you to update your inputs so that your insights and recommendations remain accurate and relevant."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, your data is highly secure. ILC uses modern security protocols and encryption standards to protect user information. Additionally, user data is handled with strict privacy policies, ensuring confidentiality and control at every stage."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-left">
            <div className="badge-light">FAQ</div>
            <h2 className="faq-heading">
              Everything You<br />Need To Know
            </h2>
            <button className="btn-dark">Ask a question</button>
          </div>
          
          <div className="faq-right">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openIndex === index ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      className={`faq-icon ${openIndex === index ? 'rotated' : ''}`} 
                      size={20} 
                    />
                  </button>
                  <div 
                    className="faq-answer-wrapper"
                    style={{
                      maxHeight: openIndex === index ? '500px' : '0',
                      opacity: openIndex === index ? 1 : 0
                    }}
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
