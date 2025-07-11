import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scrolling effect for in-page anchor links
  useEffect(() => {
  const links = document.querySelectorAll('a[href^="#"]');

  const scrollToTarget = (target) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * percent);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  };

  const handleClick = (e) => {
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      e.preventDefault();
      scrollToTarget(section);
      setMenuOpen(false);
    }
  };

  links.forEach((link) => link.addEventListener("click", handleClick));

  return () => {
    links.forEach((link) => link.removeEventListener("click", handleClick));
  };
}, []);



  return (
    <div className="font-poppins relative w-full min-h-screen overflow-x-hidden scroll-smooth">


      {/* GLOBAL BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/ocean.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* NAVBAR */}
      <header className="absolute top-4 left-0 w-full px-8 z-10">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/waves.svg"
              alt="Ocean Logo"
              className="w-8 h-8 invert"
            />
            <span className="text-white text-2xl font-semibold">OceanExplorer</span>
          </a>

          <nav className="hidden md:flex gap-10 text-lg font-medium">
            {["Home", "Places", "About", "Featured", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white hover:text-cyan-300 transition after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-500 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
        {menuOpen && (
  <div className="md:hidden mt-4 flex flex-col bg-black/70 px-6 py-4 rounded-md gap-4 text-white text-lg">
    {["Home", "Places", "About", "Featured", "Contact"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        onClick={() => setMenuOpen(false)} // 👈 closes menu on mobile
      >
        {item}
      </a>
    ))}
  </div>
)}

      </header>


      {/* HERO CONTENT */}
      <div className="flex flex-col items-center justify-center h-screen text-white text-center px-4 z-10">
        <h2 className="text-5xl md:text-6xl font-bold drop-shadow-2xl">
          Explore the Oceans
        </h2>
        <p className="text-xl md:text-2xl mt-4 drop-shadow-lg">
          Discover Earth’s hidden beauty
        </p>

        <a
          href="#places"
          className="mt-6 relative inline-block px-6 py-3 text-white font-semibold rounded-full overflow-hidden border border-white transition duration-300 group"
        >
          <span className="absolute inset-0 w-full h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition duration-700 rounded-full blur-sm"></span>
          <span className="absolute inset-0 w-full h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition duration-700 rounded-full z-0"></span>
          <span className="relative z-10">See Locations</span>
        </a>
      </div>

      {/* PLACES TO VISIT SECTION */}
      <section
        id="places"
        className="relative h-screen text-white overflow-hidden flex items-center z-10"
      >
        {/* Transparent overlay to darken background for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Top Ocean Destinations
          </h2>

          <div className="grid md:grid-cols-3 gap-6 h-[70vh]">
            {/* Maldives Card */}
            <div className="col-span-1 md:col-span-2 h-full relative rounded-xl overflow-hidden shadow-xl">
              <video
                src="/maldives.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              ></video>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 p-6">
                <h3 className="text-3xl font-semibold mb-2">Maldives</h3>
                <p className="text-white/80">
                  A tropical paradise with clear waters, coral reefs, and stunning beachscapes.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 h-full">
              {/* Iceland Card */}
              <div className="h-1/2 relative rounded-xl overflow-hidden shadow-xl w-full">
                <video
                  src="/iceland.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                ></video>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-5">
                  <h3 className="text-2xl font-semibold mb-2">Icelandic Coast</h3>
                  <p className="text-white/80">
                    Dramatic cliffs and ocean landscapes meet glaciers and volcanic terrain.
                  </p>
                </div>
              </div>

              {/* Reef Card */}
              <div className="h-1/2 relative rounded-xl overflow-hidden shadow-xl w-full">
                <video
                  src="/reef.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                ></video>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-5">
                  <h3 className="text-2xl font-semibold mb-2">Great Barrier Reef</h3>
                  <p className="text-white/80">
                    Explore the largest coral reef system filled with vibrant marine life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE OCEANS SECTION */}
<section
   id="about"
  className="relative min-h-screen flex items-center justify-center text-white px-6 md:px-16 z-10"
>
  {/* Blurred overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl text-center space-y-6">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">About the Oceans</h2>
    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
      Covering over 70% of the Earth’s surface, oceans are the lifeblood of our planet.
      They regulate climate, provide food and oxygen, and connect cultures across the globe.
      Beneath the waves lies a world teeming with life, mystery, and beauty — from vibrant coral reefs
      to the deepest unexplored trenches.
    </p>
    <p className="text-white/80 text-md">
      Join us in exploring and preserving the oceans — one wave at a time.
    </p>
  </div>
</section>


{/* FEATURED LOCATIONS GRID */}
<section
  id="featured"
  className="relative min-h-screen py-16 px-6 md:px-12 z-10 text-white"
>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

  <div className="relative z-10 max-w-[1600px] mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
      More Ocean Wonders
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {[
        { title: "Bora Bora", video: "/bora.mp4" },
        { title: "Santorini", video: "/santorini.mp4" },
        { title: "Raja Ampat", video: "/raja.mp4" },
        { title: "Seychelles", video: "/seychelles.mp4" },
        { title: "Hawaii", video: "/hawaii.mp4" },
        { title: "Komodo Island", video: "/komodo.mp4" },
      ].map((loc, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden shadow-2xl group w-full aspect-video"
        >
          <video
            src={loc.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition z-10"></div>
          <div className="relative z-20 p-5 h-full flex items-end">
            <h3 className="text-2xl font-semibold">{loc.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* CONTACT SECTION */}
<section
  id="contact"
  className="relative min-h-screen py-20 px-6 md:px-12 z-10 text-white flex items-center justify-center"
>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

  <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
    
    {/* LEFT: Contact Form */}
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-white/80 mb-8">
        We'd love to hear your thoughts or help you plan your next ocean adventure.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
  type="submit"
  className="mt-4 relative inline-block px-6 py-3 text-white font-semibold rounded-full overflow-hidden border border-white transition duration-300 group w-full text-center"
>
  <span className="absolute inset-0 w-full h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition duration-700 rounded-full blur-sm"></span>
  <span className="absolute inset-0 w-full h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition duration-700 rounded-full z-0"></span>
  <span className="relative z-10">Send Message</span>
</button>

      </form>
    </div>

    {/* RIGHT: Video + Quote */}
    <div className="relative rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-center">
      <video
        src="/ocean-deep.mp4"  // <-- Replace with your actual video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 text-center">
        <p className="text-xl italic font-light max-w-md">
          "The ocean stirs the heart, inspires the imagination, and brings eternal joy to the soul."
        </p>
        <span className="mt-4 text-cyan-300 font-semibold">— Robert Wyland</span>
      </div>
    </div>
  </div>
</section>


{/* FOOTER */}
<footer className="bg-black/70 backdrop-blur-sm text-white py-10 mt-[-2px]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Social Icons */}
    <div className="flex justify-center gap-6 text-cyan-400 text-xl mb-4">
      <a href="#" className="hover:text-cyan-300 transition">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="hover:text-cyan-300 transition">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="hover:text-cyan-300 transition">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="hover:text-cyan-300 transition">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="#" className="hover:text-cyan-300 transition">
        <i className="fab fa-github"></i>
      </a>
    </div>

    {/* Footer Text */}
    <p className="text-white/80 text-sm">
      Made with <span className="text-cyan-400">♥</span> by Muhammad Saad
    </p>
  </div>
</footer>






    </div>
  );
}
