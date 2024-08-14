import BookNowColored from "@/components/buttons/BookNowColoredd";
import Navbar from "@/components/Navbar";;
import Wrapper from "@/components/Wrapper";

export default function OurServices() {
  const scrolled = true;
  return (
    <main>
      <Navbar scrolled={scrolled} />
      <div className="">
        <Wrapper>
          <div className="md:py-36 pt-36 pb-20">
            <h1 className="text-4xl md:text-7xl text-[#4B1D8C] font-semibold text-center">
              Services
            </h1>

            <div
              style={{
                background:
                  "linear-gradient(100.62deg, #461B82 0%, #140826 101.02%)",
              }}
              className="md:py-24 py-12 md:px-20 px-10 rounded-lg mt-6 md:mt-12 mb-12 md:mb-28 max-w-[820px] mx-auto"
            >
              <h2 className="text-white font-semibold text-3xl mb-7 md:mb-14 md:text-5xl">
                Feature Services
              </h2>
              <div className="">
                <ul className="text-white">
                  <li className="border-b border-b-white py-4 md:py-7 text-xl md:text-3xl">
                    Media Relations
                  </li>
                  <li className="border-b border-b-white py-4 md:py-7 text-xl md:text-3xl">
                    Consultation
                  </li>
                  <li className="border-b border-b-white py-4 md:py-7 text-xl md:text-3xl">
                    Crisis Management
                  </li>
                  <li className="border-b border-b-white py-4 md:py-7 text-xl md:text-3xl">
                    Copywriting & Blogging
                  </li>
                </ul>
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
