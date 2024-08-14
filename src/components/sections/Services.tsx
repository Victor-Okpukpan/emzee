import Image from "next/image";
import Wrapper from "../Wrapper";

export default function Services() {
  return (
    <section>
      <Wrapper>
        <div className="pt-20 md:pt-28">
          <h1 className="text-3xl sm:text-5xl text-[#4B1D8C] font-semibold mb-4">
            Our Services
          </h1>

          <div className="flex flex-col-reverse md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-[#200123] mb-3 font-semibold text-2xl">
                Public Relations
              </p>

              <p className="md:text-xl text-base text-[#200123]">
                Ezeemedia specializes in strategic communications for clients in
                the web3, crypto, fintech, blockchain, and emerging technology
                industries. Our deep understanding of the media landscape helps
                us assist clients in building strong brands, sharing their
                messages, and reaching their goals.
              </p>
              <p className="md:text-xl text-base mt-8 text-[#200123]">
                In addition to traditional PR tactics, we also offer a range of
                digital marketing services to further amplify our clients&apos;
                messages. From social media management to content creation and
                influencer partnerships, we have the tools and expertise to help
                our clients stand out in a crowded marketplace.
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

          <div className="flex items-center flex-col-reverse md:flex-row mt-16 gap-6">
            <div className="flex-1">
              <p className="text-[#200123] font-semibold text-2xl mb-3">Marketing</p>

              <p className="md:text-xl text-base text-[#200123]">
                At Ezeemedia, we understand the importance of marketing and how
                it is key to the success of your web3 brand. We implement
                intelligent and sustainable marketing strategies anchored by
                best practices to achieve tangible success.
              </p>
              <p className="md:text-xl text-base mt-8 text-[#200123]">
                We believe that data-driven marketing techniques, understanding
                your audience, creating engaging and creative content, and
                building loyal communities are all essential components that
                work in unison to make the biggest impact on your business. Our
                team of experts is dedicated to helping you develop and
                implement these strategies to ensure that your business achieves
                maximum growth and success
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/target.svg"
                alt="Man standing by target"
                width={434}
                height={363}
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
