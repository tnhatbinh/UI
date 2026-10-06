import { HeroSpotlight } from './components/HeroSpotlight/HeroSpotlight';
import { NowShowing } from './components/NowShowing/NowShowing';
import { AiCineAdvisor } from './components/AiCineAdvisor/AiCineAdvisor';
import { ExclusiveOffers } from './components/ExclusiveOffers/ExclusiveOffers';
import { LuxuryCinemas } from './components/LuxuryCinemas/LuxuryCinemas';
import { Newsletter } from './components/newsletter/newsletter';

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-[#0E0E0F]">
      <HeroSpotlight />
      <NowShowing />
      <div id="ai-tro-ly">
        <AiCineAdvisor />
      </div>
      <div id="uu-dai">
        <ExclusiveOffers />
      </div>
      <div id="rap-chieu">
        <LuxuryCinemas />
      </div>
      <Newsletter />
    </main>
  );
}
