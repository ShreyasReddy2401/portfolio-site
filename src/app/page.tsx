"use client";

import { useState } from "react";
import portfolio from "@/data/portfolio-data.json";

type Experience = {
  company: string;
  role: string;
  team?: string;
  start: string;
  end: string;
  location: string;
  highlights: string[];
  tech: string[];
};

type Project = {
  name: string;
  stack: string[];
  summary: string;
  bullets: string[];
};

export default function Home() {
  const data = portfolio;
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="blob blob-one" />
      <div className="blob blob-two" />

      <header className="sticky top-0 z-20 border-b border-black/10 bg-[var(--bg)]/80 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <a className="text-sm font-semibold tracking-[0.18em]" href="#home">
            SRG
          </a>
          <div className="hidden gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <button
            aria-label="Open menu"
            className="btn btn-secondary px-3 py-2 text-xs md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
          >
            Menu
          </button>
        </nav>
        {menuOpen ? (
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 pb-3 md:hidden md:px-8">
            {navItems.map((item) => (
              <a
                className="mobile-nav-link"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <main id="home" className="mx-auto w-full max-w-6xl px-5 pb-20 md:px-8">
        <section className="stagger-children grid min-h-[70vh] items-center gap-8 py-20 md:grid-cols-2">
          <div className="space-y-6">
            <p className="tag">Software Engineer Portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              {data.profile.name}
            </h1>
            <p className="text-xl text-[var(--muted)]">{data.profile.headline}</p>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
              {data.profile.subheadline}
            </p>
            <p className="hero-pretext">
              I ship reliable systems with measurable outcomes in cloud cost, platform performance,
              and developer productivity.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <aside className="card h-fit">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Snapshot
            </p>
            <div className="mt-4 space-y-4 text-sm">
              <p>
                <span className="meta-label">Location</span>
                <br />
                {data.profile.location}
              </p>
              <p>
                <span className="meta-label">Email</span>
                <br />
                <a href={`mailto:${data.profile.email}`}>{data.profile.email}</a>
              </p>
              <p>
                <span className="meta-label">LinkedIn</span>
                <br />
                <a href={data.profile.linkedin} target="_blank" rel="noreferrer">
                  {data.profile.linkedin.replace("https://", "")}
                </a>
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="stat">
                <p className="stat-number">2+</p>
                <p>Years</p>
              </div>
              <div className="stat">
                <p className="stat-number">3</p>
                <p>Major Projects</p>
              </div>
              <div className="stat">
                <p className="stat-number">20K+</p>
                <p>Reports</p>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section">
          <p className="section-pretext">Who I am</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-copy">{data.about.long}</p>
        </section>

        <section id="experience" className="section">
          <p className="section-pretext">Where I created impact</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="grid gap-4">
            {data.experience.map((item: Experience) => (
              <article className="card card-hover timeline-card" key={`${item.company}-${item.role}`}>
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <h3 className="text-xl font-semibold">
                    {item.role} <span className="text-[var(--muted)]">@ {item.company}</span>
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    {item.start} - {item.end}
                  </p>
                </div>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {item.team ? `${item.team} • ` : ""}
                  {item.location}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-[var(--muted)]">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span className="chip" key={`${item.company}-${tech}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-pretext">What I built</p>
          <h2 className="section-title">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {data.projects.map((project: Project) => (
              <article className="card card-hover h-full" key={project.name}>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {project.summary}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-[var(--muted)]">
                  {project.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span className="chip" key={`${project.name}-${tech}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-pretext">How I execute</p>
          <h2 className="section-title">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(data.skills).map(([category, list]) => (
              <article className="card card-hover" key={category}>
                <h3 className="text-lg font-semibold capitalize">
                  {category.replace("_", " ")}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(list as string[]).map((skill) => (
                    <span className="chip" key={`${category}-${skill}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section pb-6">
          <p className="section-pretext">Let us build together</p>
          <h2 className="section-title">Contact</h2>
          <p className="section-copy max-w-2xl">{data.about.short}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={`mailto:${data.profile.email}`}>
              Email Me
            </a>
            <a
              className="btn btn-secondary"
              href={data.profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <a className="back-to-top" href="#home">
          Top
        </a>
      </main>
    </div>
  );
}
