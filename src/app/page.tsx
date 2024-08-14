import Footer from "@/components/Footer";
import Achievements from "@/components/sections/Achievements";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Specialty from "@/components/sections/Specialty";
import Testimonials from "@/components/sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Achievements />
      <Testimonials />
      <Partners />
      <Specialty />
      <Footer />
    </main>
  );
}
