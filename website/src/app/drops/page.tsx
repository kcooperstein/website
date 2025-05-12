import Header from "../../components/Header";
import Image from 'next/image';
import Link from 'next/link';
import { client } from "../../sanity/lib/client";
import { type SanityDocument } from "next-sanity";

const options = { next: { revalidate: 30 } };

export default async function DropsPage() {
  const drops = await client.fetch<SanityDocument[]>(`*[_type == "drop"]{ title, slug }`, {}, options);

  return (
     <div className="flex flex-col min-h-screen bg-white text-red-800 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="bg-white px-6 md:px-12 lg:px-24 py-16">
        <Header />
        <section className="bg-white text-red-800 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {drops.map((drop: any) => (
                <Link href={`/drops/${drop.slug.current}`} className="text-xl hover:underline" key={drop.slug.current}>
                  <div className="relative h-64 w-full">
                    <Image
                      // src={drop.coverImage} to do: switch this to const
                      src={drop.slug.current === 'im-just-a-girl' ? 'https://cdn.sanity.io/images/y61nakqn/production/f874705356f943c36c76c9b66028840db224950c-1080x1620.jpg' : 'https://cdn.sanity.io/images/y61nakqn/production/b925753b62b42fb0f16109cb6ab5475854f2fa63-1000x1000.jpg'}
                      alt={drop.title}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold group-hover:text-red-800">
                    {drop.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
      </section>
      </main>
    </div>
  );
};
