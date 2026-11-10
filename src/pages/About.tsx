import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/hero-eye.png";

export default function About() {
  const navigate = useNavigate();
  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");

  // TYPING EFFECT
  useEffect(() => {
    let index = 0;
    let interval: any;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden text-white px-4 sm:px-6 py-10">
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen gap-8 pt-20 pb-10">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >
          <img
            src={profilePhoto}
            alt="Aarish Saifi wearing a black suit"
            loading="lazy"
            decoding="async"
            className="h-[250px] w-[200px] rounded-2xl border border-white/15 object-cover object-[68%_center] shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:h-[350px] sm:w-[280px] md:h-[400px] md:w-[320px]"
          />
          {/* DIVIDER LINE */}
          <div
            className="
              mt-6
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              w-[90vw]
              sm:w-[400px]
              md:w-[500px]
            "
          />
        </motion.div>

        {/* GLASS BOX CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-4xl
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
        >
          {/* GLASS LIGHT EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* HEADER SECTION */}
          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
              "
            >
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </h1>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div
            className="
              relative
              z-10
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >
            <div
              className="
                text-white/70
                text-sm
                sm:text-base
                leading-8
                tracking-wide
                space-y-6
              "
            >
              <p>
                I’m Aarish Saifi, a Computer Science Engineering student at IMS Engineering College, Ghaziabad, who likes building technology around real problems. My projects span flood-safety planning, AI-assisted delivery-risk reduction, and an all-in-one campus platform. Alongside development, I spent 4–5 months freelancing in video editing and regularly take part in hackathons, technical events, and webinars. I was a finalist at CodeX 3.0 HackArena and a runner-up at WebNova 2026. I’m always looking for the next problem worth solving—and the right people to solve it with.
              </p>

              {/* EDUCATION */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40">
                  Education
                </h2>
                <div className="space-y-2 text-sm text-white/80">
                  <p>
                    • <strong className="text-white">B.Tech, Computer Science Engineering</strong> — IMS Engineering College, Ghaziabad (AKTU), 2024–present (Expected 2028)
                  </p>
                  <p>
                    • <strong className="text-white">Class 12</strong> — Kendriya Vidyalaya, 2024
                  </p>
                  <p>
                    • <strong className="text-white">Class 10</strong> — Kendriya Vidyalaya, 2022
                  </p>
                </div>
              </div>

              {/* EXPERIENCE & ACTIVITIES */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40">
                  Experience & Activities
                </h2>
                <div className="space-y-2 text-sm text-white/80">
                  <p>• Google Cloud Generative AI Virtual Internship — EduSkills, 8 weeks</p>
                  <p>• Freelance Video Editor — 4–5 months in 2025</p>
                  <p>• Smart India Hackathon (SIH) — Participant</p>
                  <p>• Participates in hackathons, technical events, and webinars</p>
                </div>
              </div>

              {/* SKILLS */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40">
                  Skills
                </h2>
                <p className="text-sm text-white/80">
                  HTML, CSS, JavaScript, Python, C++, Node.js, MongoDB, SQL, React.js
                </p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
}
