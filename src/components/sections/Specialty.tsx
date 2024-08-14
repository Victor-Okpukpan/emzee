import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";

export default function Specialty() {
  return (
    <section>
      <Wrapper>
        <div className="py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl text-[#4B1D8C] font-semibold text-center">
            How Ezeemedia is
            <br />
            Different?
          </h1>

          <div className="">
            <Image
              src="/specialties.svg"
              alt="Why EzeeMedia is Different"
              width={1200}
              height={748}
              className="mt-14"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
