import { Nav } from "@/components/nielsenai/Nav";
import { Hero } from "@/components/nielsenai/Hero";
import { FeatureCards } from "@/components/nielsenai/FeatureCards";
import { AdSlot } from "@/components/nielsenai/AdSlot";
import { ApiTeaser } from "@/components/nielsenai/ApiTeaser";
import { Faq } from "@/components/nielsenai/Faq";
import { Footer } from "@/components/nielsenai/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AdSlot slot="3166936960" format="auto" fullWidthResponsive className="pb-4" />
        <FeatureCards />
        <ApiTeaser />
        <Faq />
        <AdSlot slot="8419263645" format="autorelaxed" className="pb-16" />
      </main>
      <Footer />
    </>
  );
}
