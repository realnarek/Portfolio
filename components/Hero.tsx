import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Top utility bar */}
      <header className="flex justify-between items-start px-6 md:px-12 pt-8 text-[11px] font-mono uppercase tracking-[0.2em] text-ink/60">
        <span>Narek Tamazyan</span>
        <span className="hidden md:inline">Portfolio / 2026</span>
      </header>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Profile photo */}
        <div className="mb-12 md:mb-16">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-ink/10 bg-neutral-100">
            <Image
              src="/profile.jpg"
              alt="Narek Tamazyan"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="font-serif text-[15vw] md:text-[10vw] lg:text-[9rem] xl:text-[10rem] font-light leading-[0.85] text-center tracking-[-0.04em]">
          Narek
          <br />
          <span className="italic font-normal">Tamazyan</span>
        </h1>

        {/* Role */}
        <div className="mt-10 text-[11px] font-mono uppercase tracking-[0.3em] text-ink/60">
          Content Manager · Yerevan
        </div>

        {/* Tagline */}
        <p className="mt-12 max-w-xl text-center text-lg md:text-xl text-ink/70 leading-[1.5] font-serif italic px-4">
          Building and managing content systems that drive engagement, growth,
          and consistency.
        </p>
      </div>

      {/* Bottom indicator */}
      <footer className="px-6 md:px-12 pb-8 flex justify-between items-end text-[11px] font-mono uppercase tracking-[0.2em] text-ink/60">
        <span>Available for work</span>
        <a
          href="#about"
          className="hover:text-ink transition-colors"
          aria-label="Scroll to about section"
        >
          Scroll ↓
        </a>
      </footer>
    </section>
  );
}
