import BookNowColored from "@/components/buttons/BookNowColoredd";
import Navbar from "@/components/Navbar";
import Achievements from "@/components/sections/Achievements";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function About() {
  const scrolled = true;
  return (
    <main>
      <Navbar scrolled={scrolled} />
      <div className="">
        <Wrapper>
          <div className="py-36 ">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h1 className="text-4xl mb-4 sm:text-7xl text-[#4B1D8C] font-semibold">
                  About Us
                </h1>
                <p className="text-[#200123] underline mb-3 font-semibold text-2xl">
                  Our Mission
                </p>

                <p className="md:text-xl text-base text-[#200123]">
                  Our mission is to amplify the voices of our clients, crafting
                  compelling narratives that resonate with their target
                  audiences and drive meaningful connections. Through strategic
                  storytelling, creativity, and integrity, we empower brands to
                  achieve their goals, gain leads, foster trust, and leave a
                  lasting impact on the world
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/speaker.svg"
                  alt="Speaker"
                  width={330}
                  height={425}
                  className="ml-auto"
                />
              </div>
            </div>
          </div>
        </Wrapper>
        <Achievements />
        <Wrapper>
          <div className="py-20 md:py-36">
            <h1 className="text-3xl sm:text-5xl text-[#4B1D8C] font-semibold text-center">
              Work With The A-Team
            </h1>

            <p className="text-center py-9 text-base md:text-xl text-[#200123]">
              One of the most favoured agencies in the country for all
              PR-related services. We are based solely on a single essence:
              guaranteeing significant press coverage for every one of our
              clients. From entrepreneurs to marketers, consultants, designers,
              and writers; we are a team of like-minded people that works
              together to create successful media campaigns that deliver the
              results your brand desires.
              <br />
              Take a peek at the dream team at Level Up PR and give us a call to
              discover how our PR strategy might help you.
            </p>

            <div className="w-max mx-auto">
              <BookNowColored />
            </div>
          </div>
        </Wrapper>
      </div>
    </main>
  );
}
