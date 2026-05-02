const skills = [
  "Content Strategy & Planning",
  "Social Media Management",
  "Short-form Video Production",
  "Content Analytics & Optimization",
  "Workflow & Process Building",
  "Team Coordination",
  "Performance Monitoring",
];

const tools = [
  { name: "Instagram", category: "Platform" },
  { name: "TikTok", category: "Platform" },
  { name: "YouTube Shorts", category: "Platform" },
  { name: "DaVinci Resolve", category: "Editing" },
  { name: "CapCut", category: "Editing" },
  { name: "ChatGPT", category: "AI" },
  { name: "Claude", category: "AI" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-ink/10 px-6 md:px-12 py-24 md:py-40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40">
              03 / Capabilities
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.95]">
              Skills <span className="italic">&</span> tools.
            </h2>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Skills column */}
          <div>
            <div className="flex items-baseline justify-between pb-5 border-b border-ink/30 mb-2">
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em]">
                Skills
              </h3>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40">
                {String(skills.length).padStart(2, "0")}
              </span>
            </div>
            <ul>
              {skills.map((skill, i) => (
                <li
                  key={skill}
                  className="font-serif text-2xl md:text-3xl py-5 font-light border-b border-ink/10 flex items-baseline gap-6"
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] text-ink/40 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools column */}
          <div>
            <div className="flex items-baseline justify-between pb-5 border-b border-ink/30 mb-2">
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em]">
                Tools
              </h3>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40">
                {String(tools.length).padStart(2, "0")}
              </span>
            </div>
            <ul>
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex justify-between items-baseline py-5 border-b border-ink/10"
                >
                  <span className="font-serif text-2xl md:text-3xl font-light">
                    {tool.name}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40">
                    {tool.category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
