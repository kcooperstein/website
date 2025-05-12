import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import Header from "@/components/Header";

const ENTRY_QUERY = `*[_type == "journal" && slug.current == $slug][0]`;

const options = { next: { revalidate: 60 } };

export default async function JournalEntry({ params }: { params: { slug: string } }) {
  const entry = await client.fetch<SanityDocument>(ENTRY_QUERY, { slug: params.slug }, options);

  if (!entry) return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <Header />
      <Link href="/journal" className="hover:underline">
        ← Back to posts
      </Link>
      <p className="text-center py-20">Entry not found.</p>
    </main>
  );

  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <Header />
      <Link href="/journal" className="hover:underline text-red-800">
        ← Back to posts
      </Link>
      <div className="bg-white text-red-800 px-6 sm:px-12 lg:px-24 py-16">
        <p className="text-sm mb-2">
          {new Date(entry.publishedAt).toLocaleDateString()}
        </p>
        <h1 className="text-4xl font-bold mb-6">{entry.title}</h1>
        <div>{entry.body}</div>
      </div>
      <PortableText value={entry.body} />
    </main>
  );
}

