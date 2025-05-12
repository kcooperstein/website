import Header from "@/components/Header";

import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "../../sanity/lib/client";

export const JOURNAL_QUERY = `*[_type == "journal"] | order(publishedAt desc) {
  title,
  slug,
  publishedAt,
  body
}`;

const options = { next: { revalidate: 30 } };

export default async function JournalPage() {
  const entries = await client.fetch<SanityDocument[]>(JOURNAL_QUERY, {}, options);

  return (
    <>
      <Header />
      <main className="bg-white text-red-800 px-6 sm:px-12 lg:px-24 py-16">
        <h1 className="text-4xl font-bold mb-8">Entries</h1>
          <ul className="flex flex-col gap-y-4">
            {entries.map((entry) => (
              <Link key={entry.slug.current} href={`/journal/${entry.slug.current}`}>
                <p className="text-sm text-gray-500">
                  {new Date(entry.publishedAt).toLocaleDateString()}
                </p>
                <h2 className="text-2xl font-semibold group-hover:underline">{entry.title}</h2>
                <p className="text-gray-700 mt-1 line-clamp-3">
                  {(entry.body).slice(0, 200)}...
                </p>
              </Link>
            ))}
          </ul>
      </main>
    </>
  );
}
