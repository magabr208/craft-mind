import cornerLeft from "../assets/left.png";    // حافة يسار
import cornerRight from "../assets/right.png";  // حافة يمين
import sea from "../assets/line.svg";            // موجة البحرٍسس
import logo1 from "../assets/dgoptia.png";      // لوجو سبونسر 1
import logo2 from "../assets/wezara.png";       // لوجو سبونسر 2

export default function MegaFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0f3d13] text-white mt-16">
      {/* موجة علوية sea.svg */}
      <img
        src={sea}
        alt="wave"
        aria-hidden
        className="absolute top-0 left-0 w-full h-[90px] md:h-[110px] object-cover z-0"
      />

      {/* شريط سفلي ملوّن */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-24 md:h-28 text-[#0a2a0e]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <rect x="0" y="0" width="100" height="100" fill="currentColor" />
      </svg>

      {/* صور ديكور الحواف */}
      <img
        src={cornerLeft}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 left-0 opacity-25 w-[120px] sm:w-[160px] md:w-[200px]"
      />
      <img
        src={cornerRight}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute bottom-0 right-0 opacity-25 w-[120px] sm:w-[160px] md:w-[200px]"
      />

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          
          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>Explore</span>
              <span className="inline-block w-3 h-3 rounded-md bg-[#7EDF5E]" />
            </h3>
            <nav className="space-y-2 text-white/80">
              {[
                ["Home", "#"],
                ["Services", "#services"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Sponsored by */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>Sponsored by</span>
              <span className="inline-block w-3 h-3 rounded-md bg-[#7EDF5E]" />
            </h3>
            <div className="flex items-center gap-6">
              <img
                src={logo2}
                alt="sponsor 1"
                className="w-24 h-24 rounded-lg object-contain bg-white/10 p-2"
              />
              <img
                src={logo1}
                alt="sponsor 2"
                className="w-24 h-24 rounded-lg object-contain bg-white/10 p-2"
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:text-right">
            <h3 className="text-xl font-semibold mb-4 flex md:justify-end items-center gap-2">
              <span>Description</span>
              <span className="inline-block w-3 h-3 rounded-md bg-[#7EDF5E]" />
            </h3>
            <p className="text-white/80 max-w-lg md:ml-auto">
              A clean footer section with a wave top, a colored base bar, decorative corner images, and three columns: Explore links, Sponsors, and a concise description right-aligned for balance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
