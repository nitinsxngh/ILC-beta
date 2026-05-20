import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import "../blog.css";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogs = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "poadcast.png",
      date: "23 Jan, 2026",
      onClickReadNow: () => { },
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "poadcast.png",
      date: "23 Jan, 2026",
      onClickReadNow: () => { },
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "poadcast.png",
      date: "23 Jan, 2026",
      onClickReadNow: () => { },
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "poadcast.png",
      date: "23 Jan, 2026",
      onClickReadNow: () => { },
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <div className="badge-light">Blog</div>
        <h2 className="blog-heading">Insights For Your Career Journey</h2>
        <p className="blog-subtext">
          Built by people who believe every Indian deserves a verified career
          identity. Real industry experience — not just academic credentials.
        </p>
      </div>

      <div className="blog-navigation">
        <button
          className="nav-btn nav-btn-prev"
          onClick={handlePrevious}
          aria-label="Previous blog"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          className="nav-btn nav-btn-next"
          onClick={handleNext}
          aria-label="Next blog"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="blog-row">
        {blogs.map((item, index) => (
          <div key={index} className="blog-card">
            <img
              src={item.img || "/blog_img.png"}
              alt={item.title}
              className="blog-img"
            />

            <div className="blog-content">
              <p className="blog-title">{item.title}</p>
              <p className="blog-date">{item.date}</p>
              <button
                type="button"
                onClick={item.onClickReadNow}
                className="blog-read-btn"
              >
                Read now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
