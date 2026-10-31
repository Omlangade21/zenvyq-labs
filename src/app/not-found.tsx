import Link from "next/link";
export default function NotFound() {
  return (<section className="section pt-36 md:pt-44"><div className="wrap"><h1 className="h1">Page not found</h1><p className="lead mt-4">That page doesn’t exist or has moved.</p><Link href="/" className="btn-primary mt-8">Back to home</Link></div></section>);
}
