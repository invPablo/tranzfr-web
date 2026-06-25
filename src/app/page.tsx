import BetaBanner from "@/components/BetaBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SplitterWidget from "@/components/SplitterWidget";
import TripTabs from "@/components/TripTabs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 selection:bg-sky-500/20 selection:text-sky-800">
      <BetaBanner />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <SplitterWidget />
        <TripTabs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
