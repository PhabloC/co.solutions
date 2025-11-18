import { FAQ } from "./components/accordion";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Services from "./components/servicesOffered";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}
