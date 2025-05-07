const posts = [
  {
    image:
      "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/491443451_17899594743179224_5195437337783815030_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHvxHxV66jvZfHh6CcLUHwUNBuzbiaX-BtDugBqCDym-Oj0-5KaBjnl-fvGxPL2nLXnuCYExz2Ou-WuoKNKPC5K&_nc_ohc=4zuNZGT-VLMQ7kNvwFZAnuq&_nc_gid=c5H6F9y3yp5AHv1zgcQ8ow&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzYyMDgxOTk0NjI0ODI3NDI0Ng%3D%3D.3-ccb7-5&oh=00_AfLXx8Ktk_YpGTJyEf8ZLA_RkTObIRyfjteW7MusVLGGVQ&oe=681F3213&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/p/DJFaUZsSKGH/?img_index=1",
  },
  {
    image: "https://your-hosted-image-url2.jpg",
    link: "https://www.instagram.com/p/DI_vJBHRFIM/?img_index=1",
  },
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <a
          key={index}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={post.image}
            alt={`Instagram post ${index + 1}`}
            className="w-full h-auto rounded hover:opacity-80 transition"
          />
        </a>
      ))}
    </div>
  );
}
