import { useEffect, useRef, useState } from "react";
import laptopUrl from "../assets/lap.png";
import shapeUrl from "../assets/shape1.svg";

export default function LaptopHero() {
  // ===== Typewriter (description) =====
  const phrases = useRef([
    "Powerful health insights at your fingertips.",
    "Track, prevent, and optimize your wellbeing.",
    "Smart tools. Simple experience. Real results.",
  ]);
  const [idx, setIdx] = useState(0); 
  const [sub, setSub] = useState(""); 
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const current = phrases.current[idx % phrases.current.length];
    const typingSpeed = 36; 
    const deletingSpeed = 24; 

    let t;
    if (!deleting) {
      t = setTimeout(() => {
        const next = current.slice(0, sub.length + 1);
        setSub(next);
        if (next === current) {
          setPause(true);
          setTimeout(() => {
            setPause(false);
            setDeleting(true);
          }, 1200);
        }
      }, typingSpeed);
    } else {
      t = setTimeout(() => {
        const next = current.slice(0, Math.max(0, sub.length - 1));
        setSub(next);
        if (next.length === 0) {
          setDeleting(false);
          setIdx((v) => (v + 1) % phrases.current.length);
        }
      }, deletingSpeed);
    }
    return () => clearTimeout(t);
  }, [sub, deleting, pause, idx]);

  return (
    <section className="relative overflow-hidden bg-[#F6F1F1]">

      {/* شكل SVG في الحافة */}
     <img
  src={shapeUrl}
  alt="decor"
  aria-hidden
  draggable={false}
  className="
    absolute z-0 opacity-1          /* خليه فوق خلفية السيكشن وتحت المحتوى */
    -top-[-40px] -left-[28px] w-[140px] h-[140px]      /* موبايل */
    sm:-top-[-70px] sm:-left-[56px] sm:w-[190px] sm:h-[190px]
    md:-top-[-110px] md:-left-[80px] md:w-[260px] md:h-[260px]
    lg:-top-[-120px] lg:-left-[90px] lg:w-[300px] lg:h-[300px]
  "
/>

      {/* دخان/هالات خضراء */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="smoke-one" />
        <div className="smoke-two" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-28 pb-14 md:pt-32 md:pb-20">
        {/* العنوان */}
        <div className="flex items-end justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap text-center">
          {["First", "Second", "Third"].map((word, i) => (
            <div key={i} className="flex items-center justify-center">
              <h1 className="font-extrabold leading-none text-[#14591D] text-[3.2rem] md:text-[5rem]">
                {word}
              </h1>
              <span className="ml-3 mb-3 inline-block w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#7EDF5E]" />
            </div>
          ))}
        </div>

        {/* الوصف (Typewriter) */}
        <p className="mt-6 md:mt-8 text-center text-lg md:text-xl text-[#2f9e44]/80 max-w-3xl mx-auto" aria-label="typewriter-description">
          <span className="align-middle">{sub}</span>
          <span className={`caret ${pause ? "opacity-0" : ""}`}></span>
        </p>

        {/* زر Start Now */}
        <div className="mt-6 md:mt-8 text-center">
          <a
            href="#start"
            className="inline-block px-7 py-3.5 rounded-2xl bg-[#14591D] text-white font-semibold shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Now
          </a>
        </div>

        {/* صورة اللابتوب */}
        <div className="mt-10 md:mt-14 flex justify-center">
          <img
            src={laptopUrl}
            alt="Laptop"
            className="w-full h-auto max-w-[280px] sm:max-w-[420px] md:max-w-3xl animate-breathe motion-reduce:animate-none select-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
