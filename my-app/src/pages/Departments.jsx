export default function Departments() {
  const items = [
    ["fas fa-baby", "Pediatrics"],
    ["fas fa-tooth", "Dentistry"],
    ["fas fa-brain", "Neurology"],
    ["fas fa-bone", "Orthopedics"],
    ["fas fa-lungs", "Pulmonology"],
    ["fas fa-heartbeat", "Cardiology"],
    ["fas fa-wheelchair", "Rehabilitation"],
    ["fas fa-user-md", "General Medicine"],
  ];
  return (
    <section id="about" className="py-12 bg-[#F6F1F1]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#14591D] mb-8 text-center">Departments</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {items.map(([icon, label], i) => (
            <div key={i} className="group flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <i className={`${icon} fa-2x text-[#7EDF5E] mb-2 transition-transform duration-300 group-hover:scale-110`}></i>
              <span className="text-[#14591D] font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}