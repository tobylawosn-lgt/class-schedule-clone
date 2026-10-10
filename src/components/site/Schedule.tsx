import { useState } from "react";
import { DAYS, SCHEDULE, type Day, type Location, type Session } from "@/data/schedule";
import { bookingLink } from "@/config/booking";
import { cn } from "@/lib/utils";

type Filter = "All" | Location;

function Availability({ s }: { s: Session }) {
  if (s.spots === 0) return <span className="text-sm text-muted-foreground">Full</span>;
  return (
    <span className={cn("text-sm font-semibold", s.spots <= 2 ? "text-primary" : "text-foreground")}>
      {s.spots} {s.spots === 1 ? "spot" : "spots"} left
    </span>
  );
}

function Row({ s, day }: { s: Session; day: Day }) {
  const full = s.spots === 0;
  return (
    <li className="grid grid-cols-[4rem_1fr] gap-x-4 gap-y-3 border-t border-border py-5 md:grid-cols-[5rem_1.6fr_1fr_6rem_8rem_8rem] md:items-center">
      <div className="font-display text-xl font-extrabold tabular-nums">{s.time}</div>
      <div>
        <div className="text-lg font-semibold leading-tight">{s.name}</div>
        <div className="mt-1 text-sm text-muted-foreground">{s.place}</div>
      </div>
      <div className="col-start-2 flex flex-wrap gap-2 md:col-start-auto">
        <span className="rounded-sm bg-surface px-2 py-1 text-xs font-semibold uppercase tracking-wider">{s.focus}</span>
        <span className="rounded-sm border border-border px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.location}</span>
      </div>
      <div className="col-start-2 text-sm text-muted-foreground md:col-start-auto">{s.duration} min</div>
      <div className="col-start-2 md:col-start-auto"><Availability s={s} /></div>
      <div className="col-span-2 md:col-span-1">
        {full ? (
          <span className="block w-full rounded-md border border-border py-3 text-center text-sm font-semibold text-muted-foreground">Waitlist via booking</span>
        ) : (
          <a
            href={bookingLink(s.name, `${day} ${s.time}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-md bg-primary py-3 text-center text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book
          </a>
        )}
      </div>
    </li>
  );
}

export function Schedule() {
  const [day, setDay] = useState<Day>("Mon");
  const [filter, setFilter] = useState<Filter>("All");
  const sessions = SCHEDULE[day].filter((s) => filter === "All" || s.location === filter);

  return (
    <section id="schedule" className="scroll-mt-20 border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Weekly schedule</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Pick a slot.</h2>
          </div>
          <div className="flex gap-2" role="group" aria-label="Filter by location">
            {(["All", "Studio", "Outdoor"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  filter === f ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-6 gap-1 rounded-md bg-background p-1" role="tablist">
          {DAYS.map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={day === d}
              onClick={() => setDay(d)}
              className={cn(
                "rounded-sm py-3 text-sm font-bold uppercase tracking-wider transition-colors",
                day === d ? "bg-surface text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {d}
            </button>
          ))}
        </div>

        <ul className="mt-4">
          {sessions.length ? sessions.map((s) => <Row key={s.time + s.name} s={s} day={day} />) : (
            <li className="border-t border-border py-10 text-center text-muted-foreground">No {filter.toLowerCase()} sessions this day.</li>
          )}
        </ul>
      </div>
    </section>
  );
}
