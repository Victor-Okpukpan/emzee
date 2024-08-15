import BookNowColored from "@/components/buttons/BookNowColoredd";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { FaRegMessage } from "react-icons/fa6";
import { MdMail, MdPhoneInTalk } from "react-icons/md";

export default function Blog() {
  const scrolled = true;

  return (
    <main>
      <Navbar scrolled={scrolled} />
      <div className="">
        <Wrapper>
          <div className="md:py-36 pt-36 pb-20">
            <h1 className="text-4xl md:text-7xl text-[#4B1D8C] font-semibold text-center">
              Blog
            </h1>

            <div className="my-8 md:my-32">
              {/* TODO: Map */}
              {/* Blog One */}
              <div className="mb-16">
                <h2 className="font-semibold text-2xl md:text-4xl text-[#4B1D8C]">
                  Mastering Media Relationship Management
                </h2>
                <p className="text-[#200123] my-4 text-base md:text-xl">
                  By Ezeemedia In Business Posted July 30, 2024
                </p>

                <div className="mb-5">
                  <Image
                    src="/blog/blog-1.svg"
                    alt="Mastering Media Relationship Management"
                    width={1200}
                    height={520}
                  />
                </div>
                <p className="mt-5 text-[#200123] text-base md:text-xl">
                  In the ever-evolving world of public relations, managing media
                  relationships isn&apos;t just another task—it&apos;s the
                  linchpin of your strategy. Cultivating and sustaining strong
                  connections with media professionals can turn a routine pitch
                  into a headline and ensure your client’s story doesn’t get
                  lost in the noise. Let’s dive into how...
                </p>

                <div className="mt-9">
                  <Link
                    href="/blog/Mastering-Media-Relationship-Management"
                    className="bg-[#2C1152]  py-4 px-6 rounded-xl text-white text-xl"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Blog Two */}
              <div className="">
                <h2 className="font-semibold text-2xl md:text-4xl text-[#4B1D8C]">
                  Maximizing Your ROI: How to Choose the Right PR Agency for
                  Your Business
                </h2>
                <p className="text-[#200123] my-4 text-base md:text-xl">
                  By Ezeemedia In Business Posted July 30, 2024
                </p>

                <div className="mb-5">
                  <Image
                    src="/blog/blog-2.svg"
                    alt="Maximizing Your ROI: How to Choose the Right PR Agency for Your Business"
                    width={1200}
                    height={520}
                  />
                </div>
                <p className="mt-5 text-[#200123] text-base md:text-xl">
                  In today’s competitive world, a solid public relations (PR)
                  strategy can make a big difference for your business. Whether
                  you’re a new startup looking to get noticed or a
                  well-established company managing a crisis, choosing the right
                  PR agency is crucial. Here’s a straightforward guide to help
                  you pick an...
                </p>

                <div className="mt-9">
                  <Link
                    href="/blog/Maximizing-Your-ROI-How-to-Choose-the-Right-PR-Agency-for-Your-Business"
                    className="bg-[#2C1152]  py-4 px-6 rounded-xl text-white text-xl"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </main>
  );
}
