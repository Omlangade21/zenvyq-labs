import { PageTransition } from "@/components/Template";
export default function Template({ children }: { children: React.ReactNode }) { return <PageTransition>{children}</PageTransition>; }
