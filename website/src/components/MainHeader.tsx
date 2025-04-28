import Link from 'next/link';

export default function MainHeader() {
  return (
    <aside className="fixed top-0 right-0 h-full flex flex-col justify-between items-center text-red-600 z-50 pt-[40px] pr-[60px] pb-[60px]">
      <div className="text-xl font-bold">
        the con.cept
      </div>

      {/* Centered link */}
      <div className="flex-grow flex items-center justify-center">
        <Link
          href="/home"
          className="text-lg font-medium tracking-wide hover:text-red-400 transition-colors duration-200"
        >
          our world
        </Link>
      </div>

      {/* Optional space at bottom */}
      <div />
    </aside>
  );
}
