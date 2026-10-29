import Link from "next/link";
import { site } from "@/config/site";

export function ZMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Zenvyq Labs ZL mark">
      <defs>
        <linearGradient id="zl-main" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#713BFF" /><stop offset=".48" stopColor="#245BFF" /><stop offset="1" stopColor="#22D9F2" />
        </linearGradient>
        <linearGradient id="zl-orbit" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#B34BFF" /><stop offset=".52" stopColor="#267BFF" /><stop offset="1" stopColor="#19D9EE" />
        </linearGradient>
        <radialGradient id="zl-planet" cx="30%" cy="25%" r="80%">
          <stop offset="0" stopColor="#55F3FF" /><stop offset=".5" stopColor="#376BFF" /><stop offset="1" stopColor="#863CFF" />
        </radialGradient>
      </defs>
      <path d="M12 10H48L20 37L12 44L20 53H34L20 43L51 10H12Z" fill="url(#zl-main)" />
      <path d="M37 24L37 48Q37 53 42 53H55L49 47H44V19Z" fill="url(#zl-main)" />
      <ellipse cx="31" cy="34" rx="29" ry="10" transform="rotate(-17 31 34)" fill="none" stroke="url(#zl-orbit)" strokeWidth="3.1" />
      <circle cx="52" cy="21" r="4.2" fill="url(#zl-planet)" />
    </svg>
  );
}
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <ZMark className="h-9 w-9" />
      <span className="font-display text-sm font-semibold tracking-[.16em] text-white">{site.wordmark}</span>
    </Link>
  );
}
