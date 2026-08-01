import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// const faqs = [
//   {
//     question: "What is ILC?",
//     answer: "ILC (Integrated Learning Circle) is an advanced career development platform that combines artificial intelligence, psychometric analysis, and mentorship to help individuals discover their strengths and align them with the right career paths. It offers tools like Career Kundli, AI-powered resumes, and guided learning journeys to support users from self-discovery to job placement."
//   },
//   {
//     question: "Can anyone use Career Kundli?",
//     answer: "Yes, Career Kundli is designed to be accessible to everyone. Whether you are a student exploring career options, a graduate planning your next step, or a professional considering a shift, the platform adapts to your profile and provides personalized insights that are easy to understand and act upon."
//   },
//   {
//     question: "Are the psychologists trustworthy for my child?",
//     answer: "Yes, the psychologists associated with ILC are qualified professionals who follow structured, research-backed assessment methodologies. The platform ensures that all evaluations are designed with ethical standards, scientific rigor, and the well-being of the user in mind, making it a safe and reliable choice for students."
//   },
//   {
//     question: "Is the resume ATS-friendly?",
//     answer: "Yes, resumes generated through ILC are optimized for Applicant Tracking Systems (ATS). They are structured using industry best practices, relevant keywords, and clean formatting to improve visibility and increase the chances of getting shortlisted by recruiters."
//   },
//   {
//     question: "Can I modify my Career Kundli?",
//     answer: "Yes, you can modify your Career Kundli. As your skills, interests, and experiences evolve, the platform allows you to update your inputs so that your insights and recommendations remain accurate and relevant."
//   },
//   {
//     question: "Is my data secure?",
//     answer: "Yes, your data is highly secure. ILC uses modern security protocols and encryption standards to protect user information. Additionally, user data is handled with strict privacy policies, ensuring confidentiality and control at every stage."
//   }
// ];

const faqs2 = [
  {
    id: "about_ilc",
    title: "About ILC",
    faqs: [
      {
        question: "What is ILC?",
        answer: <>
          <p>
            ILC (Integrated Learning Circle) is India's first Career Identity Platform - a lifelong, verified digital profile that captures who you are professionally, what you're capable of, and how your journey evolves over time.
          </p>
          <p>
            It isn't just another learning platform, job portal, or counselling service. Instead, ILC brings self-discovery, skill development, verified achievements, and career opportunities together in one connected ecosystem, supporting every stage of your professional journey.
          </p>
        </>
      },
      {
        question: "How is ILC different from coaching institutes and job portals?",
        answer: "Most career platforms focus on a single stage: learning, counselling, or hiring. ILC is different. It connects self-discovery, skill development, verified credentials, and employment into one lifelong Career Identity. As you grow, your profile grows with you, creating a trusted record of your professional journey"
      }
    ]
  },
  {
    id: "career_kundli",
    title: "Career ID & Kundli",
    faqs: [
      {
        question: "What is a Career ID?",
        answer: "The Career ID is a living, verified record of your professional journey. Unlike a resume that captures a moment in time, it continuously evolves as you gain new skills, experiences, credentials, and achievements."
      },
      {
        question: "What's inside a Career ID?",
        answer: (
          <>
            <p>
              Your Career ID brings together everything that shapes your professional journey:
            </p>

            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong>Psychometric Profile:</strong> Insights into your strengths and personality.
              </li>
              <li>
                <strong>Verified Skills:</strong> Certifications earned through trusted partners.
              </li>
              <li>
                <strong>Experience Record:</strong> Internships, projects, and work experience.
              </li>
              <li>
                <strong>Growth Timeline:</strong> A living record that tracks your progress.
              </li>
              <li>
                <strong>Verified Career CV:</strong> A DigiLocker-verified CV ready for employers.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: 'What is the "Career Kundli"?',
        answer: "The Career Kundli is a dynamic profile that captures your professional journey from the very beginning. It records what you're interested in, what you're good at, what you're learning, and what you've achieved. With every new milestone, your profile evolves."
      }
    ]
  },
  {
    id: "assessments",
    title: "Assessments",
    faqs: [{
      question: 'What assessments does ILC offer?',
      answer: (
        <>
          <p>A psychometric assessment helps students understand their strengths, interests, aptitude, personality, and learning preferences. We offer two assessments:</p>
          <ul className='list-disc' >
            <li>
              <strong>Career Discovery (Grades 8–10):</strong>Helps choose the right stream with confidence.
            </li>
            <li>
              <strong>Career Pathway (Grades 11–12):</strong>Explores courses, colleges, and careers.
            </li>
          </ul>
        </>
      )
    },
    {
      question: "Are the assessments scientifically valid?",
      answer: "Yes. The assessments are developed and reviewed by qualified psychometricians to ensure evidence accuracy. And no, this is not a pass/fail test. It is introspection: it's about understanding yourself, not scoring you."
    }
    ]
  },
  {
    id: "how_helps",
    title: "How It Helps You",
    faqs: [{
      question: "How does ILC help me as a student?",
      answer: "With ILC, you can understand your strengths through psychometric assessments, build relevant skills, access learning resources, earn verified credentials, and create a lifelong Career ID that grows with you."
    },
    {
      question: "Will ILC actually help me get placed?",
      answer: "Yes. ILC connects verified candidates with internships, training programmes, and job opportunities through its network of industry partners and employers."
    },
    {
      question: "How does ILC help me as a parent?",
      answer: "ILC helps you understand your child's strengths, interests, aptitude, and personality, so you can support their academic and career decisions with confidence. It also lets you track their progress over time."
    },
    {
      question: "Why should employers use ILC?",
      answer: "ILC provides employers with access to a network of verified candidates. Each Career ID combines authenticated credentials, verified skills, and psychometric insights for informed hiring decisions."
    }
    ]
  },
  {
    id: "security_next",
    title: "Security & Next Steps",
    faqs: [{
      question: "How does DigiLocker verification work?",
      answer: "ILC verifies CVs and credentials through DigiLocker via Meri Pehchan, India's government-authenticated identity system. This makes every Career ID trustworthy, backed by government infrastructure."
    },
    {
      question: "How do I get started, or partner with ILC?",
      answer: "Whether you're a student, parent, school, university, employer, or government partner, get in touch with us and our team will help you find the right place to begin."
    }
    ]
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
            {faqs2.map((value) => (
              <>
                <h4 className='mt-2 mb-1' >{value.title}</h4>
                {<div className="faq-list">
                  {value.faqs.map((faq, index) => (
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
                </div>}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
