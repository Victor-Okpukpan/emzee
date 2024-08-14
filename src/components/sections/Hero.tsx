import BookNow from "../buttons/BookNow";
import Wrapper from "../Wrapper";
import Video from "next-video";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Video
        src="/videos/video.mp4"
        autoPlay
        muted
        loop
        className="w-full md:h-full min-h-screen"
      />

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(75, 29, 140, 0.5) 100%, rgba(20, 8, 38, 0.2) 0%)",
        }}
        className="h-full absolute top-0 right-0 left-0 z-20"
      >
        <Wrapper>
          <div className="flex flex-col items-start h-full justify-center">
            <h1 className="text-white text-4xl mb-8 font-semibold md:text-5xl">
              Driving Brands and
              <br />
              Businesses to the
              <br />
              Pinnacle of Success.
            </h1>
            <BookNow />
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
