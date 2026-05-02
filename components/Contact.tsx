type ContactRowProps = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

function ContactRow({ label, value, href, external }: ContactRowProps) {
  const inner = (
    <div className="grid md:grid-cols-12 gap-8 py-8 md:py-10 border-b border-ink/10 group">
      <div className="md:col-span-3">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40">
          {label}
        </div>
      </div>
      <div className="md:col-span-9 flex items-baseline justify-between gap-4">
        <span className="font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] break-all md:break-normal">
          {value}
        </span>
        {href && (
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40 group-hover:text-ink transition-colors shrink-0">
            {external ? "Open ↗" : "→"}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-ink/10 px-6 md:px-12 py-24 md:py-40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40">
              04 / Contact
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[-0.03em] leading-[0.95]">
              Let&apos;s build
              <br />
              something <span className="italic">together.</span>
            </h2>
          </div>
        </div>

        {/* Contact rows */}
        <div className="border-t border-ink/30">
          <ContactRow
            label="Phone"
            value="+374 99 293024"
            href="tel:+37499293024"
          />
          <ContactRow
            label="LinkedIn"
            value="narek-tamazian"
            href="https://www.linkedin.com/in/narek-tamazian-91202a1a7"
            external
          />
          <ContactRow label="Location" value="Yerevan, Armenia" />
        </div>

        {/* Footer */}
        <footer className="mt-20 md:mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40">
          <span>© 2026 Narek Tamazyan</span>
          <span>All rights reserved</span>
        </footer>
      </div>
    </section>
  );
}
