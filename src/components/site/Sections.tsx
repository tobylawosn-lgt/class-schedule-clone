import { bookingLink } from "@/config/booking";
import { cn } from "@/lib/utils";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function BookButton({ className, label = "Book Your Session" }: { className?: string; label?: string }) {
  return (
    <a
      href={bookingLink()}
      {...ext}
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90",
        className,
      )}
    >
      {label}
    </a>
  );
}

export function Photo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-border bg-surface", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-extrabold uppercase tracking-tight">
          Alex Moreno<span className="text-primary">.</span>
        </a>
        <nav className="flex items-center gap-6">
          <a href="#schedule" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            Schedule
          </a>
          {/* Sticky MobileBar owns Book on small screens — avoid triple CTAs above the fold */}
          <BookButton label="Book" className="hidden px-5 py-2 text-sm md:inline-flex" />
        </nav>
      </div>
    </header>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <BookButton className="w-full py-3" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[min(92svh,720px)] overflow-hidden">
      <img
        src="/images/hero-studio.jpg"
        alt="Coach guiding a client through a strength session in a Barcelona studio"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/35 md:bg-gradient-to-r md:from-background md:via-background/85 md:to-background/25"
        aria-hidden
      />
      {/* pb-28 clears the fixed mobile Book bar so the orange line isn't clipped */}
      <div className="relative mx-auto flex min-h-[min(92svh,720px)] max-w-6xl flex-col justify-end px-5 pb-28 pt-24 md:justify-center md:pb-24 md:pt-20">
        <div className="max-w-xl">
          <p className="eyebrow text-foreground/80">Strength & Conditioning · Barcelona</p>
          <h1 className="hero-headline mt-5 font-extrabold uppercase">
            Stronger.<br />Consistently.<br /><span className="text-primary">In less time.</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground sm:mt-6 sm:text-lg">
            Structured 45–60 minute sessions for busy professionals — in the studio or outdoors across the city.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            {/* Desktop: primary Book here. Mobile: sticky bar is the persistent Book. */}
            <BookButton className="hidden sm:inline-flex" />
            <a
              href="#schedule"
              className="font-semibold underline-offset-4 hover:underline sm:px-4"
            >
              View Schedule →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const points = [
    ["10+ years", "Coaching strength and conditioning for professionals and athletes."],
    ["Structured approach", "Progressive programming. Every session has a clear purpose."],
    ["Tracked weekly", "Loads, attendance and progress logged so results compound."],
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Photo
          src="/images/coach-portrait.jpg"
          alt="Alex Moreno, strength and conditioning coach, coaching with barbells"
          className="aspect-square"
        />
        <div>
          <p className="eyebrow">Your coach</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Alex Moreno</h2>
          <p className="mt-3 text-muted-foreground">Strength & Conditioning Coach, 33. Barcelona.</p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {points.map(([t, d]) => (
              <li key={t} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr]">
                <span className="font-display font-extrabold text-primary">{t}</span>
                <span className="text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        <Photo
          src="/images/location-studio.jpg"
          alt="Gym floor in Eixample — racks, plates, and open training space"
          className="aspect-[4/3]"
        />
        <Photo
          src="/images/location-beach.jpg"
          alt="Barceloneta coastline used for outdoor conditioning sessions"
          className="aspect-[4/3]"
        />
        <Photo
          src="/images/location-park.jpg"
          alt="Tree-lined paths at Parc de la Ciutadella for outdoor training"
          className="aspect-[4/3]"
        />
      </div>
    </section>
  );
}

const testimonials = [
  ["Two sessions a week, in and out in under an hour. Deadlift up 40 kg in six months.", "Marta, 38, Architect"],
  ["Finally a programme that fits around client calls. Never missed a week.", "David, 42, Lawyer"],
  ["The beach sessions are hard and efficient. Exactly what I needed.", "Laura, 31, Product Manager"],
  ["Clear plan, clear progress. No wasted time.", "Jordi, 45, Surgeon"],
];

export function Proof() {
  return (
    <section className="border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow">Clients</p>
        <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">What clients say.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {testimonials.map(([q, who]) => (
            <figure key={who} className="rounded-md border border-border bg-background p-6">
              <blockquote className="text-lg">“{q}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">{who}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-md border border-border">
          <img
            src="/images/session-outdoor.jpg"
            alt="Athletes training outdoors with kettlebells during a group conditioning session"
            className="aspect-[21/9] w-full object-cover md:aspect-[3/1]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export function Logistics() {
  const items = [
    ["Base", "Studio in Eixample, Barcelona."],
    ["Outdoor", "Parc de la Ciutadella, Barceloneta beach, Montjuïc."],
    ["Session length", "45 or 60 minutes. Starts on time."],
    ["Bring", "Training shoes, water, towel. Equipment provided."],
    ["For", "Professionals who want structured, efficient training."],
    ["Not for", "Anyone looking for casual workouts or quick fixes."],
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="eyebrow">Logistics</p>
      <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">The details.</h2>
      <dl className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([t, d]) => (
          <div key={t} className="bg-background p-6">
            <dt className="eyebrow">{t}</dt>
            <dd className="mt-2 text-lg">{d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold uppercase leading-none md:text-7xl">
          Your next session is <span className="text-primary">on the schedule.</span>
        </h2>
        <div className="mt-10 flex flex-col items-center gap-4">
          <BookButton className="px-10 py-5 text-lg" />
          <a href="#schedule" className="font-semibold text-muted-foreground hover:text-foreground">View Schedule</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span>Alex Moreno · Strength & Conditioning · Barcelona, Spain</span>
        <a href="https://instagram.com" {...ext} className="hover:text-foreground">Instagram</a>
      </div>
    </footer>
  );
}
