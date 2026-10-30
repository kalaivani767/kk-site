import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactInfoBar from "../components/contact/ContactInfoBar";
import ContactFormMap from "../components/contact/ContactFormMap";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

export default function Page() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactInfoBar />
      <ContactFormMap />
      <ContactFAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
