import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DomainsGrid from "./components/DomainsGrid";
import WhyPartnerSection from "./components/WhyPartnerSection";
import IntegrationModelsSection from "./components/IntegrationModelsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DomainsGrid />
        <WhyPartnerSection />
        <IntegrationModelsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
