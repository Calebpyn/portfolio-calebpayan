import { Contact, Footer } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
