// pages/api/instagram-feed.js

import InstagramScraper from "instagram-scraper";

const INSTAGRAM_USERNAME = "2twelve.studio"; // Replace with your Instagram username

export default async function handler(req, res) {
  try {
    // Fetch the user feed (posts and media)
    const feed = await InstagramScraper.getUserFeed(INSTAGRAM_USERNAME);

    // Map over the feed data to return only necessary information
    const posts = feed.map((post) => ({
      id: post.id,
      imageUrl: post.display_url,
      caption: post.edge_media_to_caption.edges[0]?.node.text || "",
    }));

    // Send the posts data as JSON response
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching Instagram feed:", error);
    res.status(500).json({ error: "Failed to fetch Instagram feed" });
  }
}
