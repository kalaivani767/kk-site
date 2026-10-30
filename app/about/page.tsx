import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import OurJourney from "../components/about/OurJourney";
import OurValues from "../components/about/OurValues";
import Timeline from "../components/about/Timeline";
import AboutCTA from "../components/about/AboutCTA";
import Team from "../components/about/Team";
import LeaderWithVision from "../components/about/LeaderWithVision";

export default function Page() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurJourney />
      <OurValues />
      <Timeline />
      <LeaderWithVision />
      <Team />
      <AboutCTA />
      <Footer />
    </>
  );
}
