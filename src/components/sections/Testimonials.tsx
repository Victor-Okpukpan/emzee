/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Wrapper from "../Wrapper";

export default function Testimonials() {
  return (
    <section>
      <Wrapper>
        <div className="pt-20 md:pt-28">
          <h1 className="text-3xl sm:text-5xl text-[#4B1D8C] font-semibold text-center">
            Testimonials
          </h1>
          <div className="w-full space-x-8 flex items-center overflow-hidden mt-14 group">
            <div className="flex items-center space-x-8 animate-loop-scroll group-hover:paused">
              <Image
                src="/testimonials/1.svg"
                alt="Andy R"
                loading="lazy"
                className="max-w-none"
                width={592}
                height={525}
              />
              <Image
                src="/testimonials/2.svg"
                alt="Alex"
                loading="lazy"
                className="max-w-none"
                width={592}
                height={525}
              />
              <Image
                src="/testimonials/3.svg"
                alt="Thomas C"
                loading="lazy"
                className="max-w-none"
                width={592}
                height={525}
              />
            </div>
            <div
              className="flex items-center space-x-8 animate-loop-scroll group-hover:paused"
              aria-hidden="true"
            >
              <Image
                src="/testimonials/1.svg"
                alt="Andy R"
                loading="lazy"
                className="max-w-none"
                width={592}
                height={525}
              />
              <Image
                src="/testimonials/2.svg"
                alt="Alex"
                loading="lazy"
                className="max-w-none"
                width={592}
                height={525}
              />
              <Image
                src="/testimonials/3.svg"
                alt="Thomas C"
                loading="lazy"
                className="max-w-none"
                width={592}
                height={525}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
