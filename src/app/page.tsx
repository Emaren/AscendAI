"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Layers, LineChart, Network, ShieldCheck, Zap } from "lucide-react";

const proofMarks = ["TokenTap", "AoE2WAR", "Traffic", "VPSSentry", "TMail", "Pulse"];

const cards = [
  {
    title: "AUTOMATE\nWHAT DRAINS YOU",
    body: "We build automations that eliminate repetitive tasks and free your team to focus on what matters.",
    icon: Network,
  },
  {
    title: "SEE WHAT OTHERS\nMISS",
    body: "We surface the metrics and insights hidden in your data so you can make smarter decisions.",
    icon: Eye,
  },
  {
    title: "INTEGRATE &\nSTREAMLINE",
    body: "We connect your tools, systems, and data into a single, efficient operating engine.",
    icon: Layers,
  },
  {
    title: "SCALE WITH\nCONFIDENCE",
    body: "We design operational systems that grow with you—without adding chaos.",
    icon: LineChart,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-[790px] overflow-hidden border-b border-white/10 lg:min-h-[920px]">
        <div className="absolute inset-0">
          <Image
            src="/ascend-pyramid-hero.png"
            alt="Black pyramid lit by a white vertical signal beam on a dark brick floor"
            fill
            priority
            sizes="100vw"
            className="hero-pyramid-image"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#020202_0%,rgba(2,2,2,0.96)_21%,rgba(2,2,2,0.62)_47%,rgba(2,2,2,0.16)_73%,rgba(2,2,2,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_32%,rgba(214,192,140,0.20),transparent_31%),radial-gradient(circle_at_26%_18%,rgba(255,255,255,0.07),transparent_20%)]" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/72 to-transparent" />
        </div>

        <header className="relative z-20 mx-auto flex max-w-[1800px] items-center justify-between px-8 py-8 sm:px-12 lg:px-16">
          <a href="#" className="text-2xl font-semibold tracking-[0.28em] sm:text-3xl">
            ASCEND <span className="text-neutral-400">AI</span>
          </a>

          <nav className="hidden items-center gap-10 text-sm font-semibold tracking-[0.12em] text-white lg:flex">
            <a href="#" className="border-b border-white pb-1">HOME</a>
            <a href="#solutions" className="transition hover:text-[#d6c08c]">SOLUTIONS</a>
            <a href="#about" className="transition hover:text-[#d6c08c]">ABOUT</a>
            <a href="#contact" className="transition hover:text-[#d6c08c]">CONTACT</a>
          </nav>

          <a
            href="#contact"
            className="rounded border border-white/35 px-6 py-4 text-sm font-semibold tracking-[0.12em] transition hover:bg-white hover:text-black"
          >
            BOOK A CALL
          </a>
        </header>

        <div className="relative z-10 mx-auto max-w-[1800px] px-8 pt-24 sm:px-12 sm:pt-32 lg:px-16 lg:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-[760px]"
          >
            <h1 className="text-[4rem] font-bold leading-[0.94] tracking-[-0.065em] sm:text-[5.9rem] lg:text-[6.6rem] xl:text-[7.4rem]">
              OPERATIONAL
              <br />
              INTELLIGENCE
              <br />
              <span className="text-[#b8aa92]">FOR MODERN</span>
              <br />
              <span className="text-[#b8aa92]">BUSINESS.</span>
            </h1>

            <p className="mt-10 max-w-[600px] text-xl leading-9 text-neutral-200 sm:text-2xl">
              Ascend AI builds systems that tighten operations, automate repetitive work, and surface hidden leverage inside your business.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-6 rounded bg-white px-8 py-5 text-base font-semibold tracking-[0.08em] text-black transition hover:bg-[#d6c08c]"
              >
                BOOK A CALL <ArrowRight size={22} />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-6 rounded border border-white/40 px-8 py-5 text-base font-semibold tracking-[0.08em] transition hover:border-white hover:bg-white/[0.07]"
              >
                OUR SOLUTIONS <ArrowRight size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto mt-24 max-w-[1620px] px-8 pb-12 sm:px-12 lg:mt-28 lg:px-16">
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.38em] text-[#b8aa92]/80">
            BUILT BY OPERATORS
          </p>
          <div className="grid grid-cols-2 gap-7 text-center md:grid-cols-6">
            {proofMarks.map((mark) => (
              <a
                key={mark}
                href="#solutions"
                className="text-lg font-semibold tracking-[0.12em] text-white/28 transition hover:text-[#d6c08c]"
              >
                {mark}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="relative z-10 mx-auto max-w-[1620px] px-8 py-28 sm:px-12 lg:px-16">
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-7 text-xs font-semibold tracking-[0.35em] text-neutral-500">WHAT WE DO</p>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              WE TURN COMPLEXITY
              <br />
              INTO <span className="text-[#b8aa92]">CLARITY.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-neutral-300 lg:ml-auto">
            We help businesses capture value that&apos;s leaking through outdated systems, manual work, and disconnected data.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {cards.map(({ title, body, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="min-h-[300px] rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-10 shadow-[0_0_80px_rgba(255,255,255,0.035)]"
            >
              <Icon className="mb-12 text-[#d6c08c]" size={34} strokeWidth={1.45} />
              <h3 className="whitespace-pre-line text-2xl font-bold leading-tight tracking-[-0.025em]">{title}</h3>
              <p className="mt-6 text-base leading-7 text-neutral-300">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-[1620px] px-8 pb-24 sm:px-12 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["01", "Map the leaks", "Find repeated decisions, stale reports, invisible bottlenecks, and expensive handoffs."],
            ["02", "Build the system", "Ship the smallest useful automation or console first, then tighten it with real operator feedback."],
            ["03", "Compound the signal", "Connect workflow to analytics, alerts, campaigns, and next actions so the system keeps learning."],
          ].map(([num, title, body]) => (
            <div key={num} className="rounded-lg border border-white/10 bg-white/[0.035] p-10">
              <p className="text-xs font-semibold tracking-[0.35em] text-[#d6c08c]/70">{num}</p>
              <h3 className="mt-7 text-3xl font-bold tracking-[-0.04em]">{title}</h3>
              <p className="mt-5 text-base leading-7 text-neutral-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-[1620px] px-8 pb-16 sm:px-12 lg:px-16">
        <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white/[0.035] p-10 md:p-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-[0.16] topo-lines" />
          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div className="md:ml-[42%]">
              <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-neutral-500">LET&apos;S BUILD WHAT&apos;S NEXT</p>
              <h2 className="text-4xl font-bold tracking-[-0.04em]">
                READY TO <span className="text-[#b8aa92]">ASCEND?</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-300">
                Book a call and let&apos;s explore what&apos;s possible for your business.
              </p>
            </div>

            <a
              href="mailto:tony@ascendai.one?subject=Ascend%20AI%20Call"
              className="inline-flex items-center justify-center gap-6 rounded bg-white px-9 py-5 text-base font-semibold tracking-[0.08em] text-black transition hover:bg-[#d6c08c]"
            >
              BOOK A CALL <ArrowRight size={22} />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto grid max-w-[1620px] gap-10 px-8 pb-12 sm:px-12 md:grid-cols-3 lg:px-16">
        <div>
          <p className="text-2xl font-semibold tracking-[0.28em]">
            ASCEND <span className="text-neutral-400">AI</span>
          </p>
          <p className="mt-5 text-sm text-neutral-500">© 2026 Ascend AI. All rights reserved.</p>
        </div>

        <nav className="flex items-center gap-10 text-sm font-semibold tracking-[0.12em] text-neutral-300 md:justify-center">
          <a href="#solutions" className="transition hover:text-white">SOLUTIONS</a>
          <a href="#about" className="transition hover:text-white">ABOUT</a>
          <a href="#contact" className="transition hover:text-white">CONTACT</a>
        </nav>

        <div className="text-base leading-8 text-neutral-300 md:text-right">
          <a href="mailto:tony@ascendai.one" className="transition hover:text-white">tony@ascendai.one</a>
          <br />
          Alberta, Canada
        </div>
      </footer>
    </main>
  );
}
