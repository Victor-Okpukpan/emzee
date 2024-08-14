import Wrapper from "../Wrapper";

export default function Achievements() {
  return (
    <div
      style={{
        background:
          "linear-gradient(94.33deg, #4B1D8C -11.3%, #140826 171.27%)",
      }}
      className="text-white py-11"
    >
      <Wrapper>
        <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl -ml-0 md:-ml-14">
          Our Achievements
        </h1>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="text-center">
            <p className="text-5xl sm:text-6xl md:text-8xl font-semibold">11</p>
            <p className="text-xl sm:text-2xl md:text-3xl">Global Awards</p>
          </div>
          <div className="text-center">
            <p className="text-5xl sm:text-6xl md:text-8xl font-semibold">1000+</p>
            <p className="text-xl sm:text-2xl md:text-3xl">International Clients</p>
          </div>
          <div className="text-center">
            <p className="text-5xl sm:text-6xl md:text-8xl font-semibold">300+</p>
            <p className="text-xl sm:text-2xl md:text-3xl">Media Connections</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
