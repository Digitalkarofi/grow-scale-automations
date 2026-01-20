import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
