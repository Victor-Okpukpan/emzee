import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(94.33deg, #4B1D8C -11.3%, #140826 171.27%)",
      }}
      className="text-white"
    >
      <Wrapper>
        <div className="py-12 sm:py-20 w-full">
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="flex-1">
              <h1 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-semibold">
                Location
              </h1>
              <p className="text-lg sm:text-xl">
                USA: Ezeemedia llc, 2055 Limestone Rd STE 200-C, Wilmington, DE
                19808
              </p>
              <p className="text-lg sm:text-xl mt-4 sm:mt-8">
                India :- Ezeemedia digital marketing OPC PVT LTD 425, Sakar
                complex near super bakery vip road vadodara
              </p>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 48.5%, rgba(153, 153, 153, 0) 100%)",
              }}
              className="w-0.5 h-full hidden sm:block"
            ></div>
            <div className="flex-1">
              <div className="w-max md:ml-auto">
                <h1 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-semibold">
                  Phone
                </h1>
                <p className="text-lg sm:text-xl">USA: +447449983493</p>
                <p className="text-lg sm:text-xl">India: +91 9328303399 </p>
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 48.5%, rgba(153, 153, 153, 0) 100%)",
              }}
              className="w-0.5 h-full hidden sm:block"
            ></div>
            <div className="flex-1">
              <div className="w-max md:ml-auto">
                <h1 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-semibold">
                  Email
                </h1>
                <p className="text-lg sm:text-xl">
                  <a href="mailto:Info@ezeemedia.io">Info@ezeemedia.io</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-10 sm:mt-14 items-center space-y-6 sm:space-y-0 sm:space-x-12">
            <div className="w-64 sm:w-auto">
              <Image
                src="/logo.svg"
                alt="Ezeemedia logo"
                width={261.48}
                height={70.4}
              />
            </div>
            <div>
              <p className="text-center sm:text-left text-lg sm:text-2xl">
                &copy; 2024 Ezeemedia
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
