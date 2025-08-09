export default function Footer() {
  return (
    <footer id="contact" className="py-10 bg-[#14591D] text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
        <p>© 2025 HealthSite. All rights reserved.</p>
        <form className="flex gap-3 justify-end" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email"
            className="w-full md:w-auto px-4 py-3 rounded-xl text-[#14591D] focus:outline-none"
          />
          <button className="px-5 py-3 rounded-xl bg-[#7EDF5E] text-[#14591D] font-semibold transition">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}
