const projects = [
  {
    number: "01",
    title: "Multi-Platform Content Management",
    meta: "Strategy · Operations",
    items: [
      "Managed 10+ Instagram and YouTube accounts",
      "Built structured content systems and posting pipelines",
      "Maintained consistent publishing across platforms",
      "Optimized content based on performance metrics",
    ],
  },
  {
    number: "02",
    title: "Creative Content Production",
    meta: "Production · Editing",
    items: [
      "Produced short-form video content (shooting + editing)",
      "Improved visual quality and storytelling",
      "Increased engagement through better content structure",
    ],
  },
  {
    number: "03",
    title: "Team & Workflow Management",
    meta: "Leadership · Process",
    items: [
      "Coordinated small teams (3–5 people)",
      "Organized tasks, deadlines, and content production cycles",
      "Improved workflow efficiency and delivery consistency",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-ink/10 px-6 md:px-12 py-24 md:py-40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40">
              02 / Selected Work
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.95]">
              Three case
              <br />
              <span className="italic">studies.</span>
            </h2>
          </div>
        </div>

        {/* Project list */}
        <div className="border-t border-ink/10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid md:grid-cols-12 gap-8 py-12 md:py-20 border-b border-ink/10"
            >
              <div className="md:col-span-3">
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40 mb-2">
                  {project.number}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/60">
                  {project.meta}
                </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.05] mb-10 md:mb-12 max-w-3xl">
                  {project.title}
                </h3>
                <ul className="space-y-4 max-w-2xl">
                  {project.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-6 text-base md:text-lg text-ink/75 leading-relaxed"
                    >
                      <span className="font-mono text-[11px] tracking-[0.2em] text-ink/40 mt-2 shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
