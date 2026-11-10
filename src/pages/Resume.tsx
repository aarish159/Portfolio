import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const resumePath = "/Aarish_Saifi_Resume_Updated.pdf";
const resumePreviewPath = "/resume-preview.png";

export default function Resume() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black px-4 pb-8 pt-24 text-white sm:px-8">
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-4 py-4 backdrop-blur-xl sm:px-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={16} /> Home
        </button>
        <a
          href={resumePath}
          download="Aarish_Saifi_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-white/80 sm:px-5"
        >
          <Download size={16} /> Download PDF
        </a>
      </header>

      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">Aarish Saifi</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Resume</h1>
        </div>

        <img
          src={resumePreviewPath}
          alt="Aarish Saifi resume preview"
          className="mx-auto block h-auto w-full max-w-[1000px] rounded-xl border border-white/15 bg-white shadow-2xl"
        />
        <p className="mt-3 text-center text-xs text-white/40">
          Download the PDF using the button above.
        </p>
      </section>
    </main>
  );
}