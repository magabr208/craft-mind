import { useEffect, useRef, useState } from "react";
import iconUrl from "../assets/icon.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // لغات (ديسكتوب)
  const [langDesktop, setLangDesktop] = useState("EN");
  const [langDesktopOpen, setLangDesktopOpen] = useState(false);
  const desktopBtnRef = useRef(null);
  const desktopDdRef = useRef(null);

  // لغات (موبايل)
  const [langMobile, setLangMobile] = useState("EN");
  const [langMobileOpen, setLangMobileOpen] = useState(false);
  const mobileBtnRef = useRef(null);
  const mobileDdRef = useRef(null);

  // قفل سكرول الصفحة وقت منيو الموبايل
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // إغلاق القوائم عند الضغط خارجها
  useEffect(() => {
    function onClickOutside(e) {
      if (
        desktopDdRef.current &&
        desktopBtnRef.current &&
        !desktopDdRef.current.contains(e.target) &&
        !desktopBtnRef.current.contains(e.target)
      ) {
        setLangDesktopOpen(false);
      }
      if (
        mobileDdRef.current &&
        mobileBtnRef.current &&
        !mobileDdRef.current.contains(e.target) &&
        !mobileBtnRef.current.contains(e.target)
      ) {
        setLangMobileOpen(false);
      }
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <nav className="bg-[#F6F1F1]/80 backdrop-blur shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={iconUrl} alt="Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-[#14591D] tracking-wide">HealthSite</span>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-6 text-[#14591D] font-semibold">
          <li><a href="#" className="inline-block border-b-2 border-transparent hover:border-[#7EDF5E] transition-all duration-300">Home</a></li>
          <li><a href="#services" className="inline-block border-b-2 border-transparent hover:border-[#7EDF5E] transition-all duration-300">Services</a></li>
          <li><a href="#about" className="inline-block border-b-2 border-transparent hover:border-[#7EDF5E] transition-all duration-300">About</a></li>
          <li><a href="#contact" className="inline-block border-b-2 border-transparent hover:border-[#7EDF5E] transition-all duration-300">Contact</a></li>
        </ul>

        {/* Language + Login / Sign Up desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language dropdown */}
          <div className="relative">
            <button
              ref={desktopBtnRef}
              onClick={(e) => { e.stopPropagation(); setLangDesktopOpen(v => !v); }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#14591D]/30 text-[#14591D] hover:border-[#14591D] transition"
            >
              <i className="fas fa-globe-asia text-sm" />
              <span className="text-sm font-semibold">{langDesktop}</span>
              <i className="fas fa-chevron-down text-xs ml-1" />
            </button>
            <div
              ref={desktopDdRef}
              className={`${langDesktopOpen ? "" : "hidden"} absolute top-full right-0 mt-2 w-28 bg-white rounded-lg shadow border border-[#14591D]/15 overflow-hidden`}
            >
              {["EN", "AR"].map((l) => (
                <button key={l} onClick={() => { setLangDesktop(l); setLangDesktopOpen(false); }} className="w-full text-left px-3 py-2 hover:bg-[#F6F1F1]">
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Login / Sign Up */}
          <a href="#" className="px-4 py-2 border border-[#14591D] text-[#14591D] rounded-lg hover:bg-[#14591D] hover:text-white transition-all duration-300 shadow-sm">Login</a>
          <a href="#" className="px-4 py-2 bg-[#7EDF5E] text-[#14591D] font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-sm">Sign Up</a>
        </div>

        {/* Mobile menu icon */}
        <button onClick={() => setMobileOpen(v => !v)} className="md:hidden p-2 rounded-lg hover:bg-white/60 transition" aria-expanded={mobileOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#14591D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 top-14 md:hidden transition-all duration-300 z-40 ${mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className="relative h-[calc(100vh-3.5rem)] w-full bg-[#F6F1F1] shadow-md p-6 text-[#14591D] font-semibold flex flex-col overflow-y-auto">
          {/* Language mobile */}
          <div className="relative mb-4">
            <button
              ref={mobileBtnRef}
              onClick={(e) => { e.stopPropagation(); setLangMobileOpen(v => !v); }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#14591D]/30"
            >
              <i className="fas fa-globe-asia text-sm" />
              <span className="text-sm font-semibold">{langMobile}</span>
              <i className="fas fa-chevron-down text-xs" />
            </button>
            <div
              ref={mobileDdRef}
              className={`${langMobileOpen ? "" : "hidden"} absolute top-full left-0 mt-2 w-28 bg-white rounded-lg shadow border border-[#14591D]/15 overflow-hidden z-50`}
            >
              {["EN", "AR"].map((l) => (
                <button key={l} onClick={() => { setLangMobile(l); setLangMobileOpen(false); }} className="w-full text-left px-3 py-2 hover:bg-[#F6F1F1]">
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Links mobile */}
          <nav className="flex flex-col gap-2 text-lg">
            <a href="#" className="py-2 hover:text-[#7EDF5E]" onClick={() => setMobileOpen(false)}>Home</a>
            <a href="#services" className="py-2 hover:text-[#7EDF5E]" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#about" className="py-2 hover:text-[#7EDF5E]" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#contact" className="py-2 hover:text-[#7EDF5E]" onClick={() => setMobileOpen(false)}>Contact</a>
          </nav>

          <hr className="border-[#14591D]/20 my-4" />

          {/* Login / Sign Up mobile */}
          <div className="grid grid-cols-1 gap-3 text-lg">
            <a href="#" className="px-4 py-3 border border-[#14591D] text-center text-[#14591D] rounded-xl hover:bg-[#14591D] hover:text-white transition">Login</a>
            <a href="#" className="px-4 py-3 bg-[#7EDF5E] text-[#14591D] font-semibold text-center rounded-xl hover:opacity-90 transition">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
}