"use client";
import { notFound } from "next/navigation";

const blogPosts = {
  "what-is-pollution": {
    title: "What is Pollution and Why It Matters?",
    content: `Pollution refers to the presence of substances in the environment that are harmful to living organisms. It affects air, water, and soil quality, impacting both nature and human health...`,
  },
  "reduce-air-pollution": {
    title: "Top 10 Ways to Reduce Air Pollution",
    content: `1. Use public transport\n2. Avoid burning trash\n3. Plant more trees\n4. Use clean energy sources like solar or wind...\n\nEvery small action counts!`,
  },
  "ai-and-pollution": {
    title: "How AI Can Help Solve the Pollution Crisis",
    content: `Artificial Intelligence is being used to monitor pollution levels, predict trends, and suggest actions. From satellite images to traffic flow optimization, AI is a game-changer...`,
  },
};

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug];
  if (!post) return notFound();

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="whitespace-pre-line text-gray-300">{post.content}</p>
      </div>
    </div>
  );
}
