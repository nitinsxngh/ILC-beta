import React from 'react';
import Founder from '@/components/Founder/Founder'; // Import the Founder component

const teamMembers = [
  {
    name: "Shreya Chopra",
    role: "Founder | MD",
    photo: "/assets/teachers/shreya-chopra-crop.jpeg",
    description: "Shreya Chopra is holding B.Com (Hon.) LL.B. graduation degree , Masters in Corporate Law , and currently pursuing Doctorate of Philosophy in Legal Real Estate frauds . Worked as Legal Executive in Real Estate Regulatory Authority and as an Assistant Professor too. Apart from Academics she has been crowned as Miss India 2017 from Glammonn and been the Social Voice for the campaign 'Beti Bachao Beti Padhao' along with being the Brand Ambassador for Bharat Scouts and Guides . Spoken and Stood for legal rights for 'Betiyan' on national News Channels like C.N.B.C. , ZEE Hindustan , Mh1 etc. And Awarded 42 Government Awards for Educating them , Visiting them and Supporting them in their Legal Rights.",
  },
  {
    name: "Kaushaki Kumari",
    role: "Legal Researcher | Education Head",
    photo: "/assets/teachers/Kaushaki-Kumari.jpg",
    description: "Kaushaki Kumari, a distinguished law graduate with a Bachelor of Laws (BA LLB) degree, combines academic excellence, practical expertise, and innovative leadership in the legal field. As an active member of her university's Moot Court Committee, she contributed to fostering critical legal skills among peers and advancing legal education. With hands-on experience at reputed organizations like AIHRA and Tulja Estates, she specializes in corporate law, legal research, and strategic case preparation. Recognized for her impactful publications and process optimization initiatives, Kaushaki's ability to navigate complex legal challenges with precision distinguishes her as a forward-thinking legal professional.",
  },
  {
    name: "Suvigya Tiwari",
    role: "AI | IPR",
    photo: "/assets/teachers/suvigya.jpg",
    description: "Suvigya is an expert at the intersection of artificial intelligence (AI), intellectual property rights (IPR), and strategic innovation management. With a deep understanding of AI technologies and legal frameworks, he helps businesses protect their innovations while ensuring compliance with patent, copyright, and trademark laws. Suvigya's ability to navigate the complexities of IPR in the evolving AI landscape is complemented by his experience in overseeing digital initiatives, aligning technology with business goals, and driving impactful solutions.",
  },
  {
    name: "Prateek Tripathi",
    role: "Sales & Marketing",
    photo: "/assets/teachers/prateek.png", // Add actual photo path
    description: "Prateek is a dynamic sales and marketing expert with a strong foundation in technology and business growth. An MCA graduate, he plays a pivotal role in driving ILC's expansion by enhancing visibility, onboarding key stakeholders, and building lasting relationships. As a former HVCO President and an impactful orator, Prateek brings both leadership and persuasion to the table, ensuring impactful engagement. Beyond business, his commitment to social causes reflects his dedication to creating meaningful change for the community.",
  },
  {
    name: "Divyansh Singh",
    role: "Paralegal Lead | Relationship Manager",
    photo: "/assets/teachers/divyansh.jpeg", // Add actual photo path
    description: "Divyansh Singh is a 3rd Year-law student at Faculty of Law, University of Lucknow. He has been an excellent scholar during his school time as well as is a great performer in his law school. He has a valuable art of negotiation and is a keen learner of law. He has some exceptional skills in the field of law and is a certified legal drafter along with a certification in the field of Trademark Law. He has been featured in the APN News network and is leading the paralegal department at ILC.",
  },
  {
    name: "Sidhart Sharma",
    role: "Business Development Executive",
    photo: "/assets/teachers/sidhart.jpeg", // Add actual photo path
    description: "Sidhart is a dynamic Business Development Executive with a B.Tech background, bringing a strategic approach to client relationships and external partnerships. With a strong focus on growth and collaboration, he plays a key role in expanding our network and creating meaningful business opportunities. His problem-solving mindset and commitment to excellence help drive innovation and long-term success for the organization.",
  },
  {
    name: "Chandamita Nath",
    role: "Research & Education",
    photo: "/assets/teachers/chanamita.jpeg", // Add actual photo path
    description: "Chandamita Nath is a PhD Researcher in Social Sciences. She completed her BA from Delhi University and MA in Public Administration from Jamia Millia Islamia University. With over seven years of experience as an educator, she has taught students, competitive exam aspirants, and young children at the primary level. She has worked with several NGOs and the Delhi University Women's Association, contributing to social initiatives and mentoring programs. Over the past five years, she has been actively involved in mentoring underprivileged students through NGOs in Delhi and has also worked as an e-learning educator.",
  },
  {
    name: "Sanchi Gupta",
    role: "Legal Expert",
    photo: "/assets/teachers/sanchi.png", // Add actual photo path
    description: "Sanchi Gupta-Advocate of Punjab and Haryana High Court is a passionate and dedicated legal professional with a strong commitment to justice, ethics and advocacy. She earned BBA-LL.B (Hons.) degree from GD Goenka University, Gurgaon (Specialized in corporate laws and IPR Laws). Then pursued LLM from IILM Gurgaon in the field of corporate and commercial laws. After completing her legal education, she embarked on her legal career joined her legal practice in Karnal Courts now practicing in High court. She has authored two books titled as Interface Between Cyber Crimes And Intellectual Property Rights and Role Of Sebi In Indian Capital Market.",
  }
];

const AboutUs = () => {
  return (
    <div className="relative px-6 lg:px-8 rounded-lg shadow-md mt-16 mb-64 py-12 min-h-screen">
      {/* Background logo */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: "url('/assets/logo/ilc-logo.svg')" }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-[#a47c38] text-center mb-12">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Integrated Legal Circle ILC is a dynamic startup committed to empowering the legal
              community by fostering connections and providing comprehensive resources. We offer a
              robust platform encompassing both online and offline legal training, certified
              courses, and access to specialized legal expertise. Our core mission is to bridge the
              critical gap between academic legal education and practical application in the
              professional world. We achieve this by facilitating meaningful connections between
              skilled professionals, leading companies, universities, and multinational
              corporations MNCs. Through our integrated approach, we empower individuals with the
              essential skills and knowledge necessary to not only survive but thrive in todays
              competitive legal landscape.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              We envision a future where all legal professionals, regardless of their background,
              have access to the resources and support they need to reach their full potential. We
              strive to create a platform that cultivates highly skilled, well-prepared individuals
              and seamlessly connects them with rewarding career opportunities through targeted value
              enhancement programs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Our mission is to empower aspiring and established legal professionals by bridging the
              gap between theoretical knowledge and practical expertise. We achieve this through
              value-driven training, mentorship, and networking opportunities that provide both
              learning and earning potential. We are dedicated to fostering a community of skilled
              individuals who are prepared to excel in their legal careers.
            </p>
          </section>

          <h2 className="text-[#a47c38] text-2xl font-bold text-center underline mt-16 mb-8">Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col h-[26rem] lg:h-[28rem] transition-transform duration-300 hover:scale-105"
              >
                {/* Image Section */}
                <div
                  className="flex-shrink-0 w-full h-[18rem] bg-center bg-cover rounded-t-lg"
                  style={{ backgroundImage: `url(${member.photo})` }}
                ></div>

                {/* Content Section */}
                <div className="flex flex-col justify-between p-4 flex-grow">
                  <div>
                    <h3 className="text-[#a47c38] text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>

                {/* Hover Effect for Description */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-sm text-left animate-fadeIn text-[#a47c38]">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Founder />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;