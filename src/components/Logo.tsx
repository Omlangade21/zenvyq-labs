import Link from "next/link";
import { site } from "@/config/site";
export function ZMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#c6ff3d" />
      <path d="M9 9.5h14L9 22.5h14" fill="none" stroke="#0a0b0d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="23" cy="9.5" r="1.6" fill="#0a0b0d" />
    </svg>
  );
}
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <ZMark />
      <span className="font-display text-sm font-semibold tracking-[.16em] text-white">{site.wordmark}</span>
    </Link>
  );
}
