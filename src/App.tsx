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
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <AnimatePresence>{showWelcome && <WelcomeScreen />}</AnimatePresence>

          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-5 backdrop-blur-xl bg-black/20 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[10px] font-bold text-white tracking-wider">
                AS
              </div>

              <span className="whitespace-nowrap text-[9px] tracking-[0.18em] text-white/80 uppercase font-medium sm:text-[10px] md:text-xs md:tracking-[0.3em]">
                AARISH SAIFI
              </span>
            </div>
            <ul className="hidden md:flex items-center gap-10 text-xs tracking-widest text-white/70 uppercase">
              <li
                onClick={() =>
                  document.getElementById("Home")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </li>

              <li
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  })
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
                  document.getElementById("showcase")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Showcase
              </li>

              <li
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </li>
            </ul>

            <div className="hidden md:block text-[10px] tracking-[0.3em] text-white/70 uppercase">
              {time}
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white z-50"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>


          {mobileMenu && (
            <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white uppercase tracking-[0.3em] text-sm md:hidden">

              <div className="absolute top-30 text-center">
                <p className="text-[10px] text-white/40 tracking-[0.3em] mb-2">
                  TIME
                </p>

                <h2 className="text-2xl tracking-widest font-semibold">
                  {time}
                </h2>
              </div>

              <button
                onClick={() => {
                  document.getElementById("Home")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Home
              </button>

              <button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                About
              </button>

              
              <Link
                to="/resume"
                onClick={() => setMobileMenu(false)}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Resume
              </Link>
              <button
                onClick={() => {
                  document.getElementById("showcase")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Showcase
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Contact
              </button>
            </div>
          )}

          <section
            id="Home"
            className="relative min-h-[100svh] w-full overflow-hidden bg-black md:h-screen md:min-h-[640px]"
          >
            <div className="absolute inset-0 hidden items-center justify-center md:flex">
              <img
                src={heroEye}
                alt="Aarish Saifi in a black suit"
                fetchPriority="high"
                decoding="async"
                className="h-[90%] w-[90%] object-contain object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-5 pb-7 pt-24 sm:px-8 md:h-full md:min-h-0 md:justify-between md:px-12 md:pb-10 md:pt-24">
              <h1
                onClick={() => setColorMode((prev) => (prev + 1) % colors.length)}
                className={`cursor-pointer font-display text-[clamp(4.25rem,20vw,8rem)] uppercase leading-[0.82] tracking-[-0.04em] transition-all duration-300 md:text-[14vw] lg:text-[13rem] ${colors[colorMode]}`}
              >
                {displayed || "\u00A0"}
              </h1>

              <p className="mt-3 max-w-[20ch] self-end text-right font-[Poppins] text-[clamp(1.35rem,6vw,2rem)] font-bold leading-tight tracking-wide text-white md:absolute md:right-12 md:top-28 md:mt-0 md:max-w-md md:text-4xl lg:text-5xl">
                <span className="md:hidden">
                  Turning ideas into AI-powered products that solve real problems.
                </span>
                <span className="hidden md:inline">
                  Turning ideas
                  <br />
                  into AI-powered
                  <br />
                  products that
                  <br />
                  solve real problems.
                </span>
              </p>

              <div className="relative mt-5 h-[48svh] min-h-[300px] max-h-[440px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#080808] sm:h-[54svh] md:hidden">
                <img
                  src={heroEye}
                  alt="Aarish Saifi wearing a black suit"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-7 md:mt-0 md:flex-row md:items-end md:justify-between md:gap-6 md:pt-0">
                <p className="max-w-md font-[Poppins] text-sm font-medium leading-relaxed tracking-wide text-white/85 sm:text-base md:text-xl">
                  Computer Science Engineering Student ·<br className="hidden sm:block" />
                  <em className="not-italic text-white">Web Developer · AI Enthusiast</em>
                </p>
                <div className="grid w-full grid-cols-2 gap-3 md:flex md:w-auto md:flex-wrap md:items-center md:justify-end">
                  <a href="https://github.com/aarish159" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-white hover:text-black sm:px-5 sm:text-xs md:w-auto md:gap-3 md:tracking-[0.2em]">
                    GitHub <ArrowUpRight size={16} />
                  </a>
                  <Link to="/resume" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-white hover:text-black sm:px-5 sm:text-xs md:w-auto md:gap-3 md:tracking-[0.2em]">
                    View Resume <ArrowUpRight size={16} />
                  </Link>
                  <button type="button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="col-span-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all hover:bg-white/80 md:col-span-1 md:w-auto md:gap-3 md:tracking-[0.2em]">
                    Contact Me <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

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
