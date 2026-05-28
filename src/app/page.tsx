"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Layers, LineChart, Network } from "lucide-react";

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
      <div className="site-shell">
        <section className="relative min-h-[780px] overflow-hidden border-x border-b border-white/10 lg:min-h-[860px] xl:min-h-[900px]">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 hero-pyramid-scene"
              aria-label="Black pyramid lit by a white vertical signal beam on a dark brick floor"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#020202_0%,rgba(2,2,2,0.985)_23%,rgba(2,2,2,0.88)_40%,rgba(2,2,2,0.34)_57%,rgba(2,2,2,0.22)_74%,rgba(2,2,2,0.72)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_34%,rgba(214,192,140,0.16),transparent_28%),radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.055),transparent_20%)]" />
            <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/68 to-transparent" />
          </div>

          <header className="relative z-20 flex items-center justify-between px-[clamp(1.5rem,3vw,4rem)] py-8 lg:py-9">
            <a href="#" className="text-2xl font-semibold tracking-[0.29em] sm:text-3xl">
              ASCEND <span className="text-neutral-400">AI</span>
            </a>

            <nav className="hidden items-center gap-10 text-sm font-semibold tracking-[0.12em] text-white lg:flex">
              <a href="#" className="border-b border-white pb-1">
                HOME
              </a>
              <a href="#solutions" className="transition hover:text-[#d6c08c]">
                SOLUTIONS
              </a>
              <a href="#about" className="transition hover:text-[#d6c08c]">
                ABOUT
              </a>
              <a href="#contact" className="transition hover:text-[#d6c08c]">
                CONTACT
              </a>
            </nav>

            <a
              href="#contact"
              className="rounded border border-white/35 px-6 py-4 text-sm font-semibold tracking-[0.12em] transition hover:bg-white hover:text-black"
            >
              BOOK A CALL
            </a>
          </header>

          <div className="relative z-10 px-[clamp(2.25rem,4.8vw,6rem)] pt-24 sm:pt-28 lg:pt-36 xl:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="max-w-[535px]"
            >
              <h1 className="text-[2.72rem] font-semibold leading-[1.15] tracking-[-0.022em] text-[#e3ded2] sm:text-[3.55rem] lg:text-[3.95rem] xl:text-[4.28rem] 2xl:text-[4.55rem]">
                OPERATIONAL
                <br />
                INTELLIGENCE
                <br />
                <span className="text-[#bfb39a]">FOR MODERN</span>
                <br />
                <span className="text-[#bfb39a]">BUSINESS.</span>
              </h1>

              <p className="mt-11 max-w-[470px] text-[1rem] leading-[2] text-neutral-300 sm:text-[1.04rem] sm:leading-[2.05]">
                Ascend AI builds systems that tighten operations, automate repetitive work, and surface hidden leverage inside your business.
              </p>

              <div className="mt-14 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-5 rounded border border-[#d6c08c]/40 bg-[#12100b]/80 px-8 py-5 text-base font-extrabold tracking-[0.08em] text-[#eadfca] shadow-[0_0_34px_rgba(214,192,140,0.08),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition hover:border-[#d6c08c] hover:bg-[#d6c08c] hover:text-black"
                >
                  BOOK A CALL <ArrowRight size={21} />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-5 rounded border border-white/20 bg-black/25 px-8 py-5 text-base font-semibold tracking-[0.08em] text-[#ddd6c9] transition hover:border-[#d6c08c]/55 hover:bg-[#d6c08c]/10 hover:text-[#f2e7cf]"
                >
                  OUR SOLUTIONS <ArrowRight size={21} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 mt-24 px-[clamp(1.5rem,3vw,4rem)] pb-10 lg:mt-24">
            <p className="mb-7 text-center text-xs font-semibold tracking-[0.38em] text-[#b8aa92]/80">
              BUILT BY OPERATORS
            </p>
            <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {proofMarks.map((mark) => (
                <a
                  key={mark}
                  href="#solutions"
                  className="group flex min-h-16 items-center justify-center gap-3 rounded-full border border-white/[0.055] bg-black/20 px-4 text-sm font-semibold tracking-[0.12em] text-white/36 backdrop-blur-sm transition hover:border-[#d6c08c]/30 hover:text-[#d6c08c]"
                >
                  <span className="hidden h-5 w-5 items-center justify-center rounded border border-white/15 text-[10px] text-white/30 transition group-hover:border-[#d6c08c]/40 group-hover:text-[#d6c08c] xl:flex">
                    {mark.slice(0, 1)}
                  </span>
                  {mark}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="relative z-10 border-x border-white/10 px-[clamp(1.5rem,3vw,4rem)] py-24 lg:py-28">
          <div className="mx-auto mb-16 grid max-w-[1420px] gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-7 text-xs font-semibold tracking-[0.35em] text-neutral-500">WHAT WE DO</p>
              <h2 className="text-4xl font-bold leading-tight tracking-[-0.055em] sm:text-5xl lg:text-[3.65rem]">
                WE TURN COMPLEXITY
                <br />
                INTO <span className="text-[#b8aa92]">CLARITY.</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-neutral-300 lg:ml-auto lg:text-xl lg:leading-9">
              We help businesses capture value that&apos;s leaking through outdated systems, manual work, and disconnected data.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1420px] gap-6 lg:grid-cols-4">
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

        <section id="about" className="relative z-10 border-x border-white/10 px-[clamp(1.5rem,3vw,4rem)] pb-24">
          <div className="mx-auto grid max-w-[1420px] gap-6 lg:grid-cols-3">
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

        <section id="contact" className="relative z-10 border-x border-white/10 px-[clamp(1.5rem,3vw,4rem)] pb-16">
          <div className="relative mx-auto max-w-[1420px] overflow-hidden rounded-xl border border-white/15 bg-white/[0.035] p-10 md:p-16">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-[0.16] topo-lines" />
            <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div className="md:ml-[28%]">
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
                className="inline-flex items-center justify-center gap-6 rounded bg-white px-9 py-5 text-base font-extrabold tracking-[0.08em] !text-[#050505] transition hover:bg-[#d6c08c]"
                style={{ color: "#050505" }}
              >
                BOOK A CALL <ArrowRight size={22} />
              </a>
            </div>
          </div>
        </section>

        <footer className="relative z-10 mx-auto grid max-w-[1420px] gap-10 border-x border-white/10 px-[clamp(1.5rem,3vw,4rem)] pb-12 pt-4 md:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold tracking-[0.28em]">
              ASCEND <span className="text-neutral-400">AI</span>
            </p>
            <p className="mt-5 text-sm text-neutral-500">© 2026 Ascend AI. All rights reserved.</p>
          </div>

          <nav className="flex items-center gap-10 text-sm font-semibold tracking-[0.12em] text-neutral-300 md:justify-center">
            <a href="#solutions" className="transition hover:text-white">
              SOLUTIONS
            </a>
            <a href="#about" className="transition hover:text-white">
              ABOUT
            </a>
            <a href="#contact" className="transition hover:text-white">
              CONTACT
            </a>
          </nav>

          <div className="text-base leading-8 text-neutral-300 md:text-right">
            <a href="mailto:tony@ascendai.one" className="transition hover:text-white">
              tony@ascendai.one
            </a>
            <br />
            Alberta, Canada
          </div>
        </footer>
      </div>
    </main>
  );
}