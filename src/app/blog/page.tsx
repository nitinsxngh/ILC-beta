"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  _id: string;
  img: string;
  title: string;
  description: string;
  category: string;
  body: string;
  keywords: string[];
  timestamp: number;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("https://api.ilc.limited/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-[#a47c38]">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">Error: {error}</div>;
  }

  return (
    <div className="px-6 lg:px-8 bg-white rounded-lg shadow-md py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-[#a47c38] text-center mb-6">Blog</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Explore our latest articles, tips, and insights.
      </p>

      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post._id} href={`/blog/${post._id}`}>
              <div className="p-6 rounded-lg shadow-sm bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full rounded-t-lg mb-4 h-48 object-cover"
                />
                <span className="inline-block bg-[#a47c38] text-white text-xs px-2 py-1 rounded mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold text-[#a47c38] mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.description}</p>
                <div className="mt-4 text-sm text-[#a47c38] font-medium">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No blog posts found.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
