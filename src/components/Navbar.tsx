import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-hh-yellow/20 bg-[#07281d]">
      <Link href="/" className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/navbar.png" alt="Hacker House Goa 2026" className="h-auto w-full" />
      </Link>
    </header>
  );
}
