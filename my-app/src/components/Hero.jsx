import heroUrl from "../assets/hero.png";

export default function Hero() {
  return (
    <>
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold text-[#14591D] leading-snug">
          First Title <span className="ml-2 inline-block w-3 h-3 bg-[#7EDF5E] rounded-md align-middle"></span>
        </h2>
        <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold text-[#14591D] leading-snug">
          Second Title <span className="ml-2 inline-block w-3 h-3 bg-[#7EDF5E] rounded-md align-middle"></span>
        </h2>
        <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold text-[#14591D] leading-snug">
          Third Title <span className="ml-2 inline-block w-3 h-3 bg-[#7EDF5E] rounded-md align-middle"></span>
        </h2>
        <p className="mt-2 text-lg md:text-xl text-[#2f9e44]/80 leading-relaxed">
          This is a unified description for all the titles above, summarizing the key health and wellness points in one place.
        </p>
        <div className="flex gap-4 pt-2">
          <a href="#services" className="px-5 py-3 rounded-xl bg-[#14591D] text-white font-semibold shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            Explore Services
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-[#14591D] font-semibold shadow border border-[#14591D]/30 hover:border-[#14591D] hover:-translate-y-0.5 transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={heroUrl} alt="Health Image" className="w-[85%] max-w-md animate-subtle" />
      </div>
    </>
  );
}