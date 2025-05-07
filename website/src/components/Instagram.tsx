"use client";

import React, { useEffect, useState } from "react";

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram-feed")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load Instagram feed:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Instagram Feed...</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <a
          key={index}
          href={`https://www.instagram.com/p/${post.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={post.imageUrl}
            alt={post.caption || "Instagram post"}
            className="w-full h-auto rounded hover:opacity-80 transition"
          />
        </a>
      ))}
    </div>
  );
}
