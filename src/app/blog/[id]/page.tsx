"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface BlogPost {
  _id: string;
  img: string;
  title: string;
  description: string;
  body: string;
}

const BlogPost = () => {
  const { id } = useParams(); // ✅ Correct Next.js App Router method
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // Ensure id exists before fetching

    const fetchPost = async () => {
      try {
        const response = await fetch(`https://api.ilc.limited/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading blog post...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 pt-24 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.img} alt={post.title} className="w-full rounded-lg mb-6" />
      <p className="text-gray-200 text-lg mb-6">{post.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.body }} className="text-white-800"></div>
    </div>
  );
};

export default BlogPost;
