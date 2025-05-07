"use client";
import React, { useEffect, useState } from "react";
import getInstagramFeed from "@raddo/easy-instagram-feed";
import Image from "next/image";

// Your Instagram handle or public username
const INSTAGRAM_USERNAME = "2twelve.studio";

export default function InstagramFeed() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the Instagram feed
    getInstagramFeed(INSTAGRAM_USERNAME).then((feed) => {
      console.log(feed);
      setPosts(feed);
    });
  }, []);

  // If the feed is still loading, show a loading message
  if (posts.length === 0) {
    return <div>Loading Instagram Feed...</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <a
          key={index}
          href={post.url} // Post URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={post.src} // Instagram image URL
            alt={`Instagram post ${index + 1}`}
            width={500} // Adjust width
            height={500} // Adjust height
            className="w-full h-auto rounded hover:opacity-80 transition"
            unoptimized // This allows images from external sources
            loading="lazy" // Lazy loading
          />
        </a>
      ))}
    </div>
  );
}
