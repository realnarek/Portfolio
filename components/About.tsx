export default function About() {
  return (
    <section
      id="about"
      className="border-t border-ink/10 px-6 md:px-12 py-24 md:py-40"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-3">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] md:sticky md:top-12">
            <div className="text-ink/40">01 / About</div>
          </div>
        </div>
        <div className="md:col-span-9">
          <p className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.15] tracking-[-0.02em] font-light">
            Content Manager with hands-on experience in creating, managing, and
            optimizing content across{" "}
            <span className="italic">multiple platforms.</span> Skilled in
            building structured workflows, analyzing performance, and improving
            content consistency.
          </p>
          <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 max-w-3xl">
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              Background in team leadership and operations under high-pressure
              conditions.
            </p>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40 md:text-right md:self-end">
              Currently based in Yerevan, Armenia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
