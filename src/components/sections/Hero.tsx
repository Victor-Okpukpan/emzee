import BookNow from "../buttons/BookNow";
import Wrapper from "../Wrapper";
import Video from "next-video";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {/* <Video
          src="/videos/video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        /> */}
        
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(75, 29, 140, 0.5) 100%, rgba(20, 8, 38, 0.2) 0%)",
        }}
        className="absolute inset-0 z-20 flex items-center justify-center"
      >
        <Wrapper>
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-white mb-8 font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-snug md:leading-relaxed">
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
