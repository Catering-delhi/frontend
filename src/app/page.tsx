// src/app/page.tsx
import Chefs from "@/components/sections/Chefs";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import Video from "@/components/sections/Video";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Video /> */}
      <Chefs />
      <Testimonials />
      <WhyUs />
    </>
  );
}
