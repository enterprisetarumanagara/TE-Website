import AboutGallery from "./components/AboutGallery";
import VisionMission from "./components/VisionMission";
import ChairmanMessage from "./components/ChairmanWords";
import Hero from "@/components/sections/Hero";
export default function AboutPage() {
  return (
    <main>
      <AboutGallery />
      <VisionMission />
      <ChairmanMessage />
      <Hero />
    </main>
  );
}
