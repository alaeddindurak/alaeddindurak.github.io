import { About } from "@/components/sections/About";
import { Competencies } from "@/components/sections/Competencies";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";

/** Home page: introduction, biography, expertise, experience, education and competencies. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Competencies />
    </>
  );
}
