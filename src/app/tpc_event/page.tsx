import TpcAllEvents from "../tpc_event/components/tpcAllEvents";
import TpcEventCarousel from "@/app/tpc_event/components/tpcEventCarousel";

export default function TPCEventPage() {
  return (
    <main>
        <TpcEventCarousel />
        <TpcAllEvents />
    </main>
  );
}
