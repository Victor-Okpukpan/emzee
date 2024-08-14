"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Achievements from "@/components/sections/Achievements";
import { FAQ } from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Specialty from "@/components/sections/Specialty";
import Testimonials from "@/components/sections/Testimonials";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.getElementById("hero-section")!.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroSectionHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="">
      <Navbar scrolled={scrolled} />
      <section id="hero-section">
        <Hero />
      </section>
      <Achievements />
      <Testimonials />
      <Partners />
      <Specialty />
      <FAQ />
      <Footer />
    </main>
  );
}
