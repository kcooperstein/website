
import Image from 'next/image';
import { type SanityDocument } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Header from "../../../components/Header";

const options = { next: { revalidate: 60 } };

export default async function DropPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const drop = await client.fetch<SanityDocument>(
    `*[_type == "drop" && slug.current == $slug][0]{
      title,
      intro,
      shopLink,
      content[]{
        ...,
        _type == "image" => {
          asset->{
            url,
            metadata { dimensions }
          }
        }
      }
    }`,
    { slug: slug },
    options
  );

  if (!drop) return (
    <main className="text-red-800 max-w-4xl mx-auto px-6 py-16 space-y-10">
      <Header />
      <p className="text-red-800 text-center py-20">Drop not found.</p>
    </main>
  );

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <Header />
      <h1 className="text-red-800 text-4xl font-bold">{drop.title}</h1>
      <p className="text-red-800 text-lg">{drop.intro}</p>

      {drop.shopLink && (
        <a
          href={drop.shopLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-800 inline-block underline text-lg"
        >
          → Shop This Drop
        </a>
      )}

      {drop.content?.map((block: any, i: number) => {
        // Text block (basic text rendering)
        if (block._type === 'block') {
          return (
            <p key={i} className="text-red-800 text-base leading-relaxed">
              {block.children.map((child: any, j: number) => (
                <span key={j}>{child.text}</span>
              ))}
            </p>
          );
        }

        // Image block
        if (block._type === 'image') {
          const { url, metadata } = block.asset;
          return (
            <Image
              key={i}
              src={url}
              alt={`Drop image ${i + 1}`}
              width={metadata.dimensions.width}
              height={metadata.dimensions.height}
              className="w-full my-8 object-cover"
            />
          );
        }

        // Video embed block
        if (block._type === 'video') {
          return (
            <div key={i} className="w-full aspect-video my-6">
              <iframe
                src={block.url}
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          );
        }

        // Fallback for unknown types
        return null;
      })}
    </main>
  );
}

