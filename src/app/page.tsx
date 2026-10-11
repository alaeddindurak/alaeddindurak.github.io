import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

/** Home page: introduction followed by the biography. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
