import Abount from "./components/about";
import { ServicesTeste } from "./components/ServiceTeste/ServiceTeste";

import { FAQ } from "./components/accordion";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Services from "./components/servicesOffered";

export default function Home() {
  return (
    <>
      <Hero
        title={"Sites de alta conversão que elevam seu negócio"}
        subtitle={"Você foca no seu negócio. Nós cuidamos do online"}
      />
      <Abount />
      <Services />
      <ServicesTeste />
      <FAQ />
      <Contact />
    </>
  );
}
