import React from 'react';
import Founder from '@/components/Founder/Founder'; // Import the Founder component

const teamMembers = [
  {
    name: "Shreya Chopra",
    role: "Founder & MD",
    photo: "/assets/teachers/shreya-chopra.png",
    description:
      "Shreya Chopra is holding B.Com (Hon.) LL.B. graduation degree, Masters in Corporate Law, and currently pursuing a Doctorate of Philosophy in Legal Real Estate frauds. She has worked as a Legal Executive in the Real Estate Regulatory Authority and as an Assistant Professor. Beyond academics, she was crowned Miss India 2017 by Glammonn, served as the Social Voice for the 'Beti Bachao Beti Padhao' campaign, and is the Brand Ambassador for Bharat Scouts and Guides. She has spoken and stood for the legal rights of 'Betiyan' on national news channels like C.N.B.C., ZEE Hindustan, and Mh1, and has received 42 government awards for educating, visiting, and supporting them in their legal rights.",
  },
  {
    name: "Suvigya Tiwari",
    role: "IT Head",
    photo: "/assets/teachers/suvigya.png",
    description:
      "Suvigya is a Technical Product Manager specializing in the intersection of artificial intelligence (AI), tech policy and compliance, UI/UX, and cloud computing. With a strong grasp of both technology and legal frameworks, he helps build scalable, user-centered, and compliant products that align innovation with business goals. His expertise in managing digital initiatives, protecting innovations, and driving strategic growth enables him to deliver impactful solutions in the evolving AI and technology landscape.",
  },
  {
    name: "Chhaya Dayma",
    role: "Research & Development Head",
    photo: "/assets/teachers/chhaya.png",
    description:
      "As the Head of Research & Development at ILC, Chhaya has spent the past year actively working on strengthening the library, publications, research projects, and newsletters. Through this experience, she has come to see R&D not merely as a set of processes but as the creation of a vibrant knowledge ecosystem. Her focus is on nurturing innovative ideas, encouraging quality research, producing impactful publications, and positioning the newsletter as a bridge between academia, industry, and society, contributing to ILC's growth as a thought leader and center of research excellence.",
  },
  {
    name: "Harkrish Chaudhary",
    role: "Media Production & Digital Innovation Head",
    photo: "/assets/teachers/harkrish.png",
    description:
      "With over two years of hands-on experience, Harkrish Chaudhary expertly leads ILC's complete media production workflow. From directing and DOP responsibilities to advanced editing, podcast creation, and event shoots, he consistently delivers high-quality, professional work across all projects. Managing every stage, from the initial concept to the final polished cut, he ensures each production is visually compelling, creatively engaging, and executed with precision. Harkrish's vision is to craft powerful stories and high-impact visuals that elevate the brand, captivate audiences, and set new benchmarks for innovation and quality in media production.",
  },
  {
    name: "Ronit Gulliya",
    role: "Digital Media Head",
    photo: "/assets/teachers/ronit.png",
    description:
      "Ronit Gulliya is an experienced digital marketing professional with over two years of expertise in building and executing performance-driven online campaigns. He specializes in Meta Ads, Google Ads, and social media marketing, combining strategic planning, creative execution, and data analytics to deliver measurable growth. Ronit has worked with brands across diverse industries, helping them increase visibility, engagement, and conversions through targeted digital strategies. Known for his results-oriented mindset and passion for innovation, he continually refines his skills to stay ahead of industry trends and deliver impactful marketing solutions that drive long-term success.",
  },
  {
    name: "Bhoomi Gupta",
    role: "Founder's Office",
    photo: "/assets/teachers/bhoomi.png",
    description:
      "At ILC, Bhoomi Gupta works across content, research, and strategy, contributing to podcasts, events, and communication material. With experience in scriptwriting, magazine content, and event ideation, she helps shape creative narratives aligned with ILC's vision. Working closely with leadership, she bridges creativity with organizational goals, gaining hands-on exposure from concept to execution. Her vision is to grow as a versatile professional, crafting stories that inspire while building expertise in business strategy, innovation, and brand communication.",
  },
];

const AboutUs = () => {
  return (
    <div className="relative px-6 lg:px-8 rounded-lg shadow-md mt-2 mb-64 py-12 min-h-screen">
      {/* Background logo */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: "url('/assets/logo/ilc-logo.svg')" }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10 mt-20">
        <h1 className="text-4xl font-bold tracking-tight text-[#a47c38] text-center mb-12">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Who Are We</h2>
            <p className="text-lg leading-relaxed text-gray-300" style={{ textAlign: 'justify' }}>
            At ILC, we are revolutionizing education by prioritizing practical training over theoretical learning.
            Our platform serves as a lifetime support system for students, guiding them from their first year of education through PhD and beyond.
            We believe in bridging the gap between academic knowledge and industry expectations, ensuring students gain real-world exposure through internships,
            professional training, and mentorship opportunities.
            Beyond students, we extend our services to professors, educational institutions, and industry experts, offering a fully integrated support system that includes e-libraries,
            study abroad assistance, career counseling, HR services, and faculty mobility programs. Whether it is securing an internship, finding the right job, or hiring trained professionals at a lower HR cost, we are here to help!
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Our Vision & Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-300" style={{ textAlign: 'justify' }}>
            Our mission is to bridge the gap between academic learning and real-world applications by providing students with practical training,
            career guidance, and lifelong support from their first year to PhD. We aim to empower educators, industry experts,
            and institutions by facilitating seamless access to internships, job opportunities, study abroad assistance, HR solutions,
            and professional networking, creating a sustainable and industry-relevant education ecosystem for all.
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