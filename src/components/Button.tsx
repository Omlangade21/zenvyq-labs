import Link from "next/link";
import type { ReactNode } from "react";
type Props = { href: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string; external?: boolean };
export function Button({ href, children, variant = "primary", className = "", external }: Props) {
  const cls = `${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  const isExt = external || href.startsWith("mailto:") || href.startsWith("http");
  return isExt
    ? <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
}
