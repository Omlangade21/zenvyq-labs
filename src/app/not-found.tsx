import { Button } from "@/components/Button";
export const metadata = { title: "Page not found" };
export default function NotFound() {
  return (
    <section className="wrap flex min-h-[80vh] flex-col items-start justify-center pt-24">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-4xl font-semibold text-white sm:text-6xl">That page doesn’t exist.</h1>
      <p className="mt-5 max-w-lg text-lg">The link may be old or mistyped. Here are some places to go instead.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/">Back home</Button><Button href="/services" variant="ghost">See services</Button><Button href="/contact" variant="ghost">Contact us</Button></div>
    </section>
  );
}
