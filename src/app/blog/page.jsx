"use client";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "What is Pollution and Why It Matters?",
    summary: "A deep dive into how pollution affects our environment and health.",
    slug: "what-is-pollution",
  },
  {
    id: 2,
    title: "Top 10 Ways to Reduce Air Pollution",
    summary: "Practical tips for individuals and communities to fight air pollution.",
    slug: "reduce-air-pollution",
  },
  {
    id: 3,
    title: "How AI Can Help Solve the Pollution Crisis",
    summary: "Exploring AI-driven solutions for environmental problems.",
    slug: "ai-and-pollution",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:underline mt-3 inline-block"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
