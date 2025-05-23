
import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureSection } from "@/components/home/FeatureSection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeatureSection />
    </MainLayout>
  );
}
