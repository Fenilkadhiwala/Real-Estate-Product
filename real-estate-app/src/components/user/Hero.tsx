export const Hero = () => {
  return (
    <div className="text-white hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-[100%] h-[45vh] bg-red-700 bg-cover">
        <div className="pt-[4rem] ml-24 flex flex-col w-[500px]">
          <span className="uppercase text-white font-bold text-xl">
            Find Your Dream Space
          </span>
          <span className="text-white text-dark mt-3">
            Connecting buyers, tenants, and investors with their ideal homes and
            commercial spaces.
          </span>
          <button className="border-double border-4 border-white mt-6 py-2 w-40">
            Explore More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
