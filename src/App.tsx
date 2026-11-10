import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link, Routes, Route } from "react-router-dom";

import heroEye from "@/assets/hero-eye.png";
import WelcomeScreen from "@/components/WelcomeScreen";
import FrontendDeveloperSection from "@/components/FrontendDeveloperSection";
import Showcase from "./components/Showcase";
import ContactSection from "@/components/ContactSection";
import About from "./pages/About";
import Resume from "./pages/Resume";

const logos = ["AARISH SAIFI", "WEB DEVELOPER", "AI ENTHUSIAST", "PORTFOLIO"];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [time, setTime] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const text = "AARISH";
  const [displayed, setDisplayed] = useState("");
  const [colorMode, setColorMode] = useState(0);

  const colors = [
    "bg-gradient-to-b from-white via-gray-200 via-gray-500 to-black text-transparent bg-clip-text",
    "text-white",
    "bg-gradient-to-b from-black via-gray-500 via-gray-200 to-white text-transparent bg-clip-text",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showWelcome || mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome, mobileMenu]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    function type() {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i < text.length) setTimeout(type, 200);
    }
    type();
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-black text-white overflow-x-hidden w-full">
          <AnimatePresence>{showWelcome && <WelcomeScreen />}</AnimatePresence>

          {/* ── NAV ── */}
          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4 md:py-5 backdrop-blur-xl bg-black/20 border-b border-white/10">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[10px] font-bold text-white tracking-wider flex-shrink-0">
                AS
              </div>
              <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/70 uppercase font-medium">
                AARISH SAIFI
              </span>
            </div>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-10 text-xs tracking-widest text-white/70 uppercase">
              <li
                onClick={() =>
                  document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </li>
              <li
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </li>
              <li>
                <Link to="/resume" className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  Resume
                </Link>
              </li>
              <li
                onClick={() =>
                  document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Showcase
              </li>
              <li
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </li>
            </ul>

            {/* Desktop clock */}
            <div className="hidden md:block text-[10px] tracking-[0.3em] text-white/70 uppercase">
              {time}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white z-50 p-1"
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* ── MOBILE MENU OVERLAY ── */}
          {mobileMenu && (
            <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white uppercase tracking-[0.3em] text-sm md:hidden">
              <div className="absolute top-24 text-center">
                <p className="text-[10px] text-white/40 tracking-[0.3em] mb-2">TIME</p>
                <h2 className="text-2xl tracking-widest font-semibold">{time}</h2>
              </div>

              {[
                { label: "Home", id: "Home" },
                { label: "About", id: "about" },
                { label: "Showcase", id: "showcase" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenu(false);
                  }}
                  className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  {label}
                </button>
              ))}

              <Link
                to="/resume"
                onClick={() => setMobileMenu(false)}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Resume
              </Link>
            </div>
          )}

          {/* ── HERO ── */}
          <section
            id="Home"
            className="relative w-full bg-black pt-16"
          >
            {/* Mobile layout: stacked */}
            <div className="flex flex-col md:hidden px-5 pb-10 pt-6 gap-6">
              {/* Name */}
              <h1
                onClick={() => setColorMode((prev) => (prev + 1) % colors.length)}
                className={`font-display uppercase leading-[0.85] tracking-[-0.03em] text-[22vw] cursor-pointer transition-all duration-300 ${colors[colorMode]}`}
              >
                {displayed || "\u00A0"}
              </h1>

              {/* Tagline */}
              <p className="text-xl font-[Poppins] font-bold tracking-wide text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-white via-white/60 to-white animate-[shine_4s_linear_infinite] leading-tight">
                Turning ideas
                <br />
                into AI-powered
                <br />
                products that
                <br />
                solve real problems.
              </p>

              {/* Portrait */}
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ maxHeight: "52vw" }}>
                <img
                  src={heroEye}
                  alt="Hero"
                  className="w-full h-full object-cover object-[68%_top]"
                  style={{ maxHeight: "52vw" }}
                />
              </div>

              {/* Role line */}
              <p className="text-sm font-[Poppins] font-medium tracking-wide text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-white via-white/60 to-white animate-[shine_4s_linear_infinite] leading-relaxed">
                Computer Science Engineering Student ·{" "}
                <em className="not-italic text-white">Web Developer · AI Enthusiast</em>
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/aarish159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
                >
                  View Resume <ArrowUpRight size={14} />
                </Link>
                <button
                  type="button"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all hover:bg-white/80"
                >
                  Contact Me <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Desktop layout: original full-screen */}
            <div className="hidden md:block relative w-full h-screen min-h-[640px] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={heroEye}
                  alt="Hero"
                  className="h-full w-full object-cover object-[68%_center] md:h-[90%] md:w-[90%] md:object-contain md:object-center"
                />
              </div>

              <div className="relative z-10 w-full h-full flex flex-col justify-between px-12 pt-24 pb-10">
                <h1
                  onClick={() => setColorMode((prev) => (prev + 1) % colors.length)}
                  className={`font-display uppercase leading-[0.85] tracking-[-0.03em] text-[14vw] lg:text-[13rem] cursor-pointer transition-all duration-300 ${colors[colorMode]}`}
                >
                  {displayed || "\u00A0"}
                </h1>

                <p className="absolute top-28 right-12 text-right text-4xl lg:text-5xl leading-[1.08] max-w-md font-[Poppins] font-bold tracking-wide text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-white via-white/60 to-white animate-[shine_4s_linear_infinite]">
                  Turning ideas
                  <br />
                  into AI-powered
                  <br />
                  products that
                  <br />
                  solve real problems.
                </p>

                <div className="flex flex-row items-end justify-between gap-6 mt-auto">
                  <p className="text-xl leading-relaxed max-w-md font-[Poppins] font-medium tracking-wide text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-white via-white/60 to-white animate-[shine_4s_linear_infinite]">
                    Computer Science Engineering Student · <br />
                    <em className="not-italic text-white">Web Developer · AI Enthusiast</em>
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://github.com/aarish159"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
                    >
                      GitHub <ArrowUpRight size={16} />
                    </a>
                    <Link
                      to="/resume"
                      className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
                    >
                      View Resume <ArrowUpRight size={16} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all hover:bg-white/80"
                    >
                      Contact Me <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── MARQUEE ── */}
          <div className="bg-black border-t border-white/10 py-5 overflow-hidden">
            <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.333%); }
            }
            .animate-marquee {
              animation: marquee 10s linear infinite;
            }
            @keyframes shine {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>

          <section id="about">
            <FrontendDeveloperSection />
          </section>
          <section id="showcase">
            <Showcase />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      }
    />

      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
