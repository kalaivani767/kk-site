import Navbar from "../components/Navbar";
import ProjectsHero from "../components/projects/ProjectsHero";
import Footer from "../components/Footer";
import ProjectsListing from "../components/projects/ProjectsListing";
import ProjectLocations from "../components/projects/ProjectLocations";
import TrustBadges from "../components/projects/TrustBadges";
import FAQ from "../components/projects/FAQ";
import CTA from "../components/CTA";
export default function Page() {
  return (
    <>
      <Navbar  />
      <ProjectsHero />
      <ProjectsListing />
      <TrustBadges />
<ProjectLocations />
<FAQ />

<CTA />  
<Footer />
    </>
  );
}