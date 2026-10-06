
import { HeroSpotlight } from "./components/hero-spotlight";
import { NowShowing } from "./components/now-showing";
import { AiCineAdvisor } from "./components/ai-cine-advisor";
import { ExclusiveOffers } from "./components/exclusive-offers";
import { LuxuryCinemas } from "./components/luxury-cinemas";
import { Newsletter } from "./components/newsletter";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-[#0E0E0F]">
      <HeroSpotlight />
      <NowShowing />
      <AiCineAdvisor />
      <ExclusiveOffers />
      <LuxuryCinemas />
      <Newsletter />
    </main>
  );
}
