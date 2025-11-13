import TpcHero from "@/app/tpc/components/tpcHero";
import TpcWhatWeDo from "@/app/tpc/components/tpcWhatWeDo";
import TpcUpcoming from "@/app/tpc/components/tpcUpcoming";
export default function TpcPage() {
  return (
    <main>
      <TpcHero />
      <TpcWhatWeDo />
      <TpcUpcoming />
    </main>
  );
}
