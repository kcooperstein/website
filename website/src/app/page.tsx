import MainHeader from "@/components/MainHeader";

export default function LandingPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <MainHeader />
      </main>

      {/* Fixed Footer Tagline */}
      <footer className="fixed bottom-0 left-0 w-full text-center text-lg font-medium text-red-800 p-4 bg-white bg-opacity-80 backdrop-blur-sm">
        Bridging Art and Technology Through Conceptual Experiences
      </footer>
    </div>
  );
}
