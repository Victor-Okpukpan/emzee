/* eslint-disable @next/next/no-img-element */
import Wrapper from "../Wrapper";

export default function Testimonials() {
  return (
    <section>
      <Wrapper>
        <div className="pt-28">
          <h1 className="text-4xl sm:text-5xl text-[#4B1D8C] font-semibold">
            Testimonials
          </h1>
          <div className="w-full space-x-4 sm:space-x-8 flex items-center overflow-hidden mt-14 group">
            <div className="flex items-center space-x-4 sm:space-x-8 animate-loop-scroll group-hover:paused">
              <img
                src="/testimonials/1.svg"
                alt="Andy R"
                loading="lazy"
                className="max-w-none w-32 sm:w-40 md:w-48"
              />
              <img
                src="/testimonials/2.svg"
                alt="Alex"
                loading="lazy"
                className="max-w-none w-32 sm:w-40 md:w-48"
              />
              <img
                src="/testimonials/3.svg"
                alt="Thomas C"
                loading="lazy"
                className="max-w-none w-32 sm:w-40 md:w-48"
              />
            </div>
            <div
              className="flex items-center space-x-4 sm:space-x-8 animate-loop-scroll group-hover:paused"
              aria-hidden="true"
            >
              <img
                src="/testimonials/1.svg"
                alt="Andy R"
                loading="lazy"
                className="max-w-none w-32 sm:w-40 md:w-48"
              />
              <img
                src="/testimonials/2.svg"
                alt="Alex"
                loading="lazy"
                className="max-w-none w-32 sm:w-40 md:w-48"
              />
              <img
                src="/testimonials/3.svg"
                alt="Thomas C"
                loading="lazy"
                className="max-w-none w-32 sm:w-40 md:w-48"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
