import { Metadata } from "next";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero";
import ParallaxHero from "./components/home/parallax-hero";
import Podcast from "./components/home/podcast";
import Pricing from "./components/home/pricing";
import Services from "./components/home/services";
import StackedCards from "./components/home/stacked-cards";
import About from "./components/home/about";
import Team from "./components/home/team";
import EcosystemCards from "./components/home/ecosystem-cards";

export const metadata: Metadata = {
    title: "ILC",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <StackedCards/>
      <Podcast/>
      <EcosystemCards/>
      <Services/>
      <Team teamdataNumber="06"/>
      <Pricing/>
      <ParallaxHero/>
      <Contact contactdataNumber="10"/>
    </>
  );
}
