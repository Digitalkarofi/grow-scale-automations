import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TargetAudienceBar } from "@/components/home/TargetAudienceBar";
import { StrategicPartnerSection } from "@/components/home/StrategicPartnerSection";
import { AIAutomationSection } from "@/components/home/AIAutomationSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CtaSection } from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TargetAudienceBar />
      <StrategicPartnerSection />
      <AIAutomationSection />
      <ServicesSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
