import Abount from "./components/about";
import { FAQ } from "./components/accordion";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Services from "./components/servicesOffered";

export default function Home() {
  return (
    <>
      <Hero />
      <Abount />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}
