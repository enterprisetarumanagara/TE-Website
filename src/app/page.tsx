import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import UpcomingEvents from "@/components/sections/Upcoming";
import BusinessUnits from "@/components/sections/BusinessUnits";
import ChairmanMessage from "@/components/sections/ChairmanWords";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <UpcomingEvents />
      <BusinessUnits />
      <ChairmanMessage />
    </main>
  );
}
