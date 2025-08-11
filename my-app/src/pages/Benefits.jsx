import deco from "../assets/shape2.svg"; // <-- استيراد الصورة/الـ SVG

export default function Benefits() {
  return (
    <section id="services" className="relative overflow-hidden py-16 bg-[#F6F1F1]">
      {/* الصورة على الشمال فوق - تحت المحتوى وفوق الخلفية */}
   <img
  src={deco}
  alt=""
  aria-hidden
  draggable={false}
  className="
    absolute z-0 opacity-1
    right-0 top-0
    w-[120px] h-[120px]
    sm:w-[160px] sm:h-[160px]
    md:w-[200px] md:h-[200px]
  "
/>


      {/* المحتوى فوق الصورة */}
      <div className="container relative z-10 mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#14591D] mb-10 text-center">
          Benefits of Our Platform{" "}
          <span className="inline-block w-3 h-3 bg-[#7EDF5E] rounded-md"></span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="group bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#7EDF5E] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-[#14591D] mb-2">AI Diagnosis</h3>
            <p className="text-[#2f9e44]">Quickly identify possible conditions using advanced AI algorithms.</p>
          </article>

          <article className="group bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#7EDF5E] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.38-1.12 2.5-2.5 2.5S7 12.38 7 11s1.12-2.5 2.5-2.5S12 9.62 12 11z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-[#14591D] mb-2">Nearby Clinics</h3>
            <p className="text-[#2f9e44]">Find hospitals and clinics near your location instantly.</p>
          </article>

          <article className="group bg-white rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#7EDF5E] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-[#14591D] mb-2">Preventive Care</h3>
            <p className="text-[#2f9e44]">Receive tips and recommendations to maintain a healthy lifestyle.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
