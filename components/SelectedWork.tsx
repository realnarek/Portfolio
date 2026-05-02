import Image from "next/image";

type WorkItem = {
  title: string;
  platform: string;
  description: string;
  href: string;
  image: string;
};

const work: WorkItem[] = [
  {
    title: "Svet Nails",
    platform: "Instagram",
    description: "Commercial beauty content and visual branding.",
    href: "https://instagram.com/svet_nails__",
    image: "/work/svet-nails.jpg",
  },
  {
    title: "YSO Student Chapter",
    platform: "Instagram",
    description: "Educational and event-based content management.",
    href: "https://instagram.com/ysostudentchapter",
    image: "/work/yso.jpg",
  },
  {
    title: "Films by Nar",
    platform: "YouTube",
    description: "Short-form video content and editing.",
    href: "https://youtube.com/@filmsbynar",
    image: "/work/films-by-nar.jpg",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
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
              Live <span className="italic">work.</span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
          {work.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={`Open ${item.title} on ${item.platform}`}
            >
              {/* Image — overflow-hidden lets the inner image scale on hover */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.platform}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Caption */}
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl md:text-3xl font-light tracking-[-0.01em]">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40 group-hover:text-ink transition-colors shrink-0">
                  ↗
                </span>
              </div>

              <div className="mt-2 flex items-baseline justify-between gap-4">
                <p className="text-sm md:text-[15px] text-ink/60 leading-relaxed">
                  {item.description}
                </p>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink/40 shrink-0">
                  {item.platform}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
