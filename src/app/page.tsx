import Community from "@/components/Community";
import Confidence from "@/components/Confidence";
import Disciplines from "@/components/Disciplines";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Opening from "@/components/Opening";
import Philosophy from "@/components/Philosophy";
import ReturnToSelf from "@/components/ReturnToSelf";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <Marquee />
        <Opening />
        <Philosophy />
        <ReturnToSelf />
        <Confidence />
        <Community />
        <Disciplines />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
