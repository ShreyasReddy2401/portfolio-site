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
  const cards = [
    { key: "about", label: "About Me", pretext: "Who I am" },
    { key: "experience", label: "Experience", pretext: "Where I created impact" },
    { key: "projects", label: "Projects", pretext: "What I built" },
    { key: "skills", label: "Skills", pretext: "How I execute" },
    { key: "contact", label: "Contact", pretext: "Let us build together" },
  ] as const;
  const [activeCard, setActiveCard] = useState(0);

  const currentCard = cards[activeCard];
  const isFirstCard = activeCard === 0;
  const isLastCard = activeCard === cards.length - 1;

  const renderCardContent = () => {
    if (currentCard.key === "about") {
      return (
        <div className="space-y-6">
          <p className="section-copy mt-0 max-w-3xl">{data.about.long}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="stat text-left">
              <p className="meta-label">Location</p>
              <p className="mt-1 text-base">{data.profile.location}</p>
            </div>
            <div className="stat text-left">
              <p className="meta-label">Focus</p>
              <p className="mt-1 text-base">Distributed Systems, Cloud, AI-Enabled Products</p>
            </div>
          </div>
        </div>
      );
    }

    if (currentCard.key === "experience") {
      return (
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
      );
    }

    if (currentCard.key === "projects") {
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {data.projects.map((project: Project) => (
            <article className="card card-hover h-full" key={project.name}>
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
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
      );
    }

    if (currentCard.key === "skills") {
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(data.skills).map(([category, list]) => (
            <article className="card card-hover" key={category}>
              <h3 className="text-lg font-semibold capitalize">{category.replace("_", " ")}</h3>
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
      );
    }

    return (
      <div className="space-y-6">
        <p className="section-copy mt-0 max-w-2xl">{data.about.short}</p>
        <div className="space-y-3 text-sm">
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
        <div className="flex flex-wrap gap-3">
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
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="blob blob-one" />
      <div className="blob blob-two" />

      <header className="sticky top-0 z-20 border-b border-black/10 bg-[var(--bg)]/80 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <span className="text-sm font-semibold tracking-[0.18em]">SRG</span>
          <span className="text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
            Card Switch Portfolio
          </span>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8">
        <section className="stagger-children space-y-6">
          <div className="space-y-4">
            <p className="tag">Software Engineer Portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              {data.profile.name}
            </h1>
            <p className="text-xl text-[var(--muted)]">{data.profile.headline}</p>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
              {data.profile.subheadline}
            </p>
          </div>

          <div className="deck-tabs" role="tablist" aria-label="Portfolio cards">
            {cards.map((card, index) => (
              <button
                aria-selected={activeCard === index}
                className={`deck-tab ${activeCard === index ? "deck-tab-active" : ""}`}
                key={card.key}
                onClick={() => setActiveCard(index)}
                role="tab"
                type="button"
              >
                {card.label}
              </button>
            ))}
          </div>

          <section className="deck-card" aria-live="polite">
            <p className="section-pretext">{currentCard.pretext}</p>
            <h2 className="section-title">{currentCard.label}</h2>

            <div className="mt-5 max-h-[58vh] overflow-y-auto pr-1">{renderCardContent()}</div>

            <div className="deck-controls mt-6">
              <button
                className="btn btn-secondary"
                disabled={isFirstCard}
                onClick={() => setActiveCard((prev) => Math.max(prev - 1, 0))}
                type="button"
              >
                Previous
              </button>
              <p className="text-sm text-[var(--muted)]">
                {activeCard + 1} / {cards.length}
              </p>
              <button
                className="btn btn-primary"
                disabled={isLastCard}
                onClick={() => setActiveCard((prev) => Math.min(prev + 1, cards.length - 1))}
                type="button"
              >
                Next
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
