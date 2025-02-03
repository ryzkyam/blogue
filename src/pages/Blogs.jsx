// src/components/BlogPage.js
import React from 'react';
import { Button } from "../components/ui/button";
// Sample blog posts data
const posts = [
  {
    id: 1,
    title: "RPA ROBOT FORM SUBMIT",
    date: "September 10, 2024",
    excerpt: "This is a short summary of the first blog post."
  },
  {
    id: 2,
    title: "DATABASE",
    date: "September 12, 2024",
    excerpt: "This is a short summary of the second blog post."
  },
  
  // Add more posts as needed
];

const Blogs = () => {
  return (
    <div className="min-h-fit bg-gray-100 py-8 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">All actifity</h1>
      </header>
      <main className="max-w-3xl mx-auto">
        {posts.map(post => (
          <article key={post.id} className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            <Button className="bg-[#8dd8dc] hover:bg-purple-400 text-lg">
            <a href={`/posts/${post.id}`} className="inline-block  text-blue-500 hover:underline">Read more</a>
            </Button>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Blogs;
