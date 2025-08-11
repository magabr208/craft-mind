function Row() {
  const icons = [
    "fas fa-baby",
    "fas fa-university",
    "fas fa-brain",
    "fas fa-bone",
    "fas fa-lungs",
    "fas fa-heartbeat",
    "fas fa-wheelchair",
  ];
  return (
    <div className="flex gap-3 pr-3">
      {icons.map((icon, i) => (
        <div key={i} className="w-24 h-24 grid place-items-center rounded-xl bg-[#27ae60] text-white">
          <i className={`${icon} fa-lg`}></i>
        </div>
      ))}
    </div>
  );
}

export default function MarqueeDepartments() {
  return (
    <section className="py-10 bg-white">
      <div className="overflow-hidden">
        <div className="flex items-center marquee-track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
