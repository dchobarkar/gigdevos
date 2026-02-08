import Hero from "./components/Hero";
import Capability from "./components/Capability";
import DemoBuilds from "./components/DemoBuilds";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import NDAExperience from "./components/NDAExperience";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <Capability />
      <DemoBuilds />
      <TechStack />
      <Process />
      <NDAExperience />
      <Contact />
    </main>
  );
}
