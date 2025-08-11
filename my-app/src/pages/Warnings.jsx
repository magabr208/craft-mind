export default function Warnings() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-10 text-center">
          Risks of Ignoring Health <span className="inline-block w-3 h-3 bg-red-500 rounded-md"></span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="group bg-red-50 rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-red-500 mb-4 flex items-center gap-3">
              <i className="fas fa-heartbeat fa-2x transition-transform duration-300 group-hover:scale-110"></i>
              <svg viewBox="0 0 120 24" className="h-6 w-36">
                <polyline fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                  className="text-red-500"
                  points="0,12 15,12 25,5 35,19 45,12 60,12 68,4 74,18 82,12 95,12 105,8 112,16 120,12"
                  style={{ strokeDasharray: 140, strokeDashoffset: 0, animation: "heartbeatDash 1.2s linear infinite" }}
                ></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">Heart Diseases</h3>
            <p className="text-red-600">Neglecting your health may increase the risk of heart-related illnesses.</p>
          </article>

          <article className="group bg-red-50 rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-red-500 mb-4"><i className="fas fa-brain fa-2x transition-transform duration-300 group-hover:scale-110"></i></div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">Mental Health Issues</h3>
            <p className="text-red-600">Ignoring symptoms can worsen mental and neurological health.</p>
          </article>
          <article className="group bg-red-50 rounded-xl p-6 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-red-500 mb-4"><i className="fas fa-virus fa-2x transition-transform duration-300 group-hover:scale-110"></i></div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">Infectious Diseases</h3>
            <p className="text-red-600">Delaying diagnosis can lead to the spread of dangerous infections.</p>
          </article>
        </div>
      </div>
    </section>
  );
}