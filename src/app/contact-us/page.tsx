import BookNowColored from "@/components/buttons/BookNowColoredd";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import { FaRegMessage } from "react-icons/fa6";
import { MdMail, MdPhoneInTalk } from "react-icons/md";

export default function ContactUs() {
  const scrolled = true;
  return (
    <main>
      <Navbar scrolled={scrolled} />
      <div className="">
        <Wrapper>
          <div className="md:py-36 pt-36 pb-20">
            <h1 className="text-4xl md:text-7xl text-[#4B1D8C] font-semibold text-center">
              Get In Touch
            </h1>

            <div className="flex flex-col md:flex-row gap-10 items-center my-8 md:my-32 justify-between">
              <div className="text-center">
                <MdMail className="mx-auto w-[100px] h-[100px]" />
                <p className="text-[#4B1D8C] font-semibold text-xl md:text-3xl">
                  Email
                </p>
                <p className="text-[#4B1D8C] text-lg md:text-2xl">
                  Reachout to us
                  <br />
                  <a href="mailto:Info@ezeemedia.io">Info@ezeemedia.io</a>
                </p>
              </div>
              <div className="text-center">
                <MdPhoneInTalk className="mx-auto w-[100px] h-[100px]" />

                <p className="text-[#4B1D8C] font-semibold text-xl md:text-3xl">
                  Phone
                </p>
                <p className="text-[#4B1D8C] text-lg md:text-2xl">
                  Give us a call
                  <br />
                  +91 9328303399
                </p>
              </div>
              <div className="text-center">
                <FaRegMessage className="mx-auto w-[100px] h-[100px]" />

                <p className="text-[#4B1D8C] font-semibold text-xl md:text-3xl">
                  Message
                </p>
                <p className="text-[#4B1D8C] text-lg md:text-2xl">
                  Send us a message here
                  <br />
                  +91 9328303399
                </p>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl text-[#4B1D8C] font-semibold text-center">
              Why PR IS IMPORTANT
            </h1>

            <p className="text-center mt-9 text-base md:text-xl text-[#200123]">
              Effective PR efforts can significantly boost website traffic by
              enhancing visibility and attracting more engagement. Increased
              recognition from strategic PR initiatives leads to heightened
              attention and traffic on the brand&apos;s online platforms..
            </p>
            <p className="text-center mb-9 text-base md:text-xl mt-5 text-[#200123]">
              Earning recognition from industry experts or evaluators enhances
              credibility by providing a third-party endorsement, establishing
              trust and confidence in the brand, product, or individual.
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
