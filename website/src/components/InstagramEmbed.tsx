export default function InstagramEmbed() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJFaUZsSKGH" data-instgrm-version="14" style="width:100%;">
          </blockquote>
          <script async src="//www.instagram.com/embed.js"></script>
        `,
      }}
    />
  );
}
