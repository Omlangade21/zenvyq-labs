import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

/** The official ZL emblem, used as supplied (transparent PNG, original aspect ratio). */
export function LogoMark({ size = 36, priority = false }: { size?: number; priority?: boolean }) {
  return <Image src="/brand/zenvyq-logo.png" alt="" width={size} height={size} priority={priority} className="-mx-2 -my-2 shrink-0" />;
}
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <LogoMark size={52} priority />
      <span className="font-sans text-[1.15rem] font-semibold tracking-[-0.02em] text-head">{site.name}</span>
    </Link>
  );
}
