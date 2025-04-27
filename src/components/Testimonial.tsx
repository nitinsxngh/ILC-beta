"use client";

const testimonials = [
  { name: "Konen Qureshi", text: "I wouldn not have grown and learned as much as I have without your constant support and guidance. Thank you and I wish the ILC team all the very best." },
  { name: "Palaq Thapar", text: "Working with ILC has been a great experience till now. Each day I am learning something new and different. It will be adding something to my resume and help me expand my portfolio." },
  { name: "Louis Mabel", text: "I got an opportunity to work with Integrated Legal Circle and it was a very enriching experience. I gained knowledge, confidence, and enhanced my organizational skills and adaptability." },
  { name: "Tejaswi Rallapalli", text: "Integrated Legal Circle is a place where one can explore their ideas and develop themselves to the fullest. I had a great experience learning writing skills from them." },
  { name: "Stuti Gupta", text: "The ILC team and my manager were always supportive and friendly. They were always there whenever I needed help. It is really nice working with them." },
  { name: "Anirud Ramakur", text: "Thank you ILC! It has been a great experience working with professionals, and the mentors were always there to guide me." },
];

export default function InfiniteTestimonial() {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-black">
      <div className="flex items-center space-x-6 animate-scroll w-max">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[380px] p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/50"
          >
            <p className="text-gray-300 mb-4 leading-relaxed italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <h3 className="text-blue-400 font-semibold text-sm tracking-wider">
              - {testimonial.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
