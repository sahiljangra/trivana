// about/page.tsx
import React from "react";
import Header1 from '@/components/header/Header1'
import HomePageAboutSection from "@/components/factory-homepage/HomePageAboutSection";
import Footer1 from "@/components/footers/Footer1";
import Breadcrumb from "@/components/common/Breadcrumb";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Trivana Textile",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Header1 />
      <Breadcrumb title="About Us" subtitle="Our Story of Manufacturing Excellence Built on." srcImage="/assets/img/trivana/about-us/trivana-textile-about-us.webp" />
      <HomePageAboutSection pt="pt-120" />      
      <Footer1 />
    </>
  );
};

export default AboutPage;
