"use client";

import Header from "@/components/Header";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function SocialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-red-800 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-grow px-6 sm:px-12 lg:px-24 py-16">
        {/* Contact Info and Links */}
        <section className="max-w-4xl mx-auto text-center space-y-10">
          <div>
            <div className="flex justify-center gap-6 mt-4 text-red-700">
              <a
                href="https://www.instagram.com/2twelve.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@2twelvestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Tiktok
              </a>
              <a
                href="hhttps://x.com/2twelvestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </section>
        <InstagramEmbed />
      </main>
    </div>
  );
}
