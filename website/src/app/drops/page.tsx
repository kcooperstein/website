"use client";

import Header from "../../components/Header";
import DropGrid from "../../components/DropGrid";

export default function DropsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-red-800 font-[family-name:var(--font-geist-sans)]">
      <Header />
      {/* this is where the code for drop images and hover should go */}
      <main className="bg-white text-black px-6 md:px-12 lg:px-24 py-16">
        <DropGrid />
      </main>
    </div>
  );
}
