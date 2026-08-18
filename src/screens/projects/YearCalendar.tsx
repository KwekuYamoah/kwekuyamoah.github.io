import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon, MapPinIcon } from "@heroicons/react/24/solid";
import {
    MONTHS_LONG,
    MONTHS_SHORT,
    TimelineEvent,
    calendarYears,
    eventCovers,
    eventStartsIn,
    timelineEvents,
} from "./timeline";

/**
 * A year at a time, twelve months at a glance.
 *
 * Two states are deliberately drawn differently: a month where something
 * *began* (a paper, a degree, a role) is a solid mark, while a month merely
 * covered by an ongoing span (the teaching years) is a wash. That's what makes
 * a sparse career legible as continuous work rather than four isolated dots.
 */
const YearCalendar = () => {
    const [year, setYear] = useState(calendarYears[calendarYears.length - 1]);
    const [month, setMonth] = useState<number | null>(null);

    /** Per-month buckets for the active year, computed once per year change. */
    const monthsInYear = useMemo(
        () =>
            MONTHS_SHORT.map((_, m) => ({
                starts: timelineEvents.filter((e) => eventStartsIn(e, year, m)),
                covers: timelineEvents.filter((e) => eventCovers(e, year, m)),
            })),
        [year]
    );

    // Land on the first month with something in it, so the panel is never empty
    // on arrival and switching years always shows that year's work.
    useEffect(() => {
        const firstStart = monthsInYear.findIndex((m) => m.starts.length > 0);
        const firstCover = monthsInYear.findIndex((m) => m.covers.length > 0);
        setMonth(firstStart !== -1 ? firstStart : firstCover !== -1 ? firstCover : null);
    }, [monthsInYear]);

    const selected = month === null ? [] : monthsInYear[month].covers;

    return (
        <div className="px-10 md:px-40 py-14">
            {/* Year rail */}
            <div className="flex flex-wrap gap-2 border-b border-hairline pb-6">
                {calendarYears.map((y) => {
                    const count = timelineEvents.filter((e) => e.start[0] === y).length;
                    const isActive = y === year;
                    return (
                        <button
                            key={y}
                            onClick={() => setYear(y)}
                            aria-pressed={isActive}
                            className={`relative rounded-md px-4 py-2 font-montserrat text-sm font-bold tracking-wide transition-colors duration-300 ${
                                isActive ? "text-on-accent" : "text-ink-muted hover:text-ink"
                            }`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="calendar-year-pill"
                                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                                    className="absolute inset-0 rounded-md bg-accent"
                                />
                            )}
                            <span className="relative">
                                {y}
                                {count > 0 && (
                                    <span
                                        className={`ml-2 text-[0.65rem] ${
                                            isActive ? "text-on-accent/70" : "text-ink-muted/70"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                )}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-14">
                {/* Month grid */}
                <div className="md:w-[55%]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={year}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-3"
                        >
                            {monthsInYear.map(({ starts, covers }, m) => {
                                const isSelected = m === month;
                                const hasAnything = covers.length > 0;

                                const tone = isSelected
                                    ? "border-accent bg-accent text-on-accent"
                                    : starts.length > 0
                                    ? "border-accent/50 bg-accent/10 text-ink hover:border-accent"
                                    : hasAnything
                                    ? "border-hairline bg-accent/5 text-ink-muted hover:border-accent/50"
                                    : "border-hairline/60 text-ink-muted/50";

                                return (
                                    <button
                                        key={m}
                                        disabled={!hasAnything}
                                        onClick={() => setMonth(m)}
                                        aria-pressed={isSelected}
                                        aria-label={`${MONTHS_LONG[m]} ${year}${
                                            hasAnything ? "" : " — nothing logged"
                                        }`}
                                        className={`flex h-20 flex-col justify-between rounded-lg border p-3 text-left transition-colors duration-300 md:h-24 ${tone} ${
                                            hasAnything ? "cursor-pointer" : "cursor-default"
                                        }`}
                                    >
                                        <span className="font-montserrat text-xs font-bold uppercase tracking-widest">
                                            {MONTHS_SHORT[m]}
                                        </span>
                                        <span className="flex gap-1">
                                            {starts.map((e) => (
                                                <span
                                                    key={e.id}
                                                    className={`h-1.5 w-1.5 rounded-full ${
                                                        isSelected ? "bg-on-accent" : "bg-accent"
                                                    }`}
                                                />
                                            ))}
                                            {starts.length === 0 && hasAnything && (
                                                <span
                                                    className={`h-1.5 w-5 rounded-full ${
                                                        isSelected ? "bg-on-accent/60" : "bg-accent/40"
                                                    }`}
                                                />
                                            )}
                                        </span>
                                    </button>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-montserrat text-[0.65rem] uppercase tracking-widest text-ink-muted">
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            Started
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-5 rounded-full bg-accent/40" />
                            Ongoing
                        </span>
                    </div>
                </div>

                {/* Detail panel */}
                <div className="md:w-[45%]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${year}-${month}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-lg border border-hairline bg-chrome theme-surface p-6 md:p-8"
                        >
                            <p className="font-montserrat text-[0.65rem] uppercase tracking-widest text-ink-muted">
                                {month === null ? year : `${MONTHS_LONG[month]} ${year}`}
                            </p>

                            {selected.length === 0 ? (
                                <p className="mt-4 font-satoshi text-lg text-ink-muted">
                                    Nothing logged this year.
                                </p>
                            ) : (
                                <div className="mt-5 flex flex-col gap-8">
                                    {selected.map((event) => (
                                        <TimelineEntry key={event.id} event={event} />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const TimelineEntry = ({ event }: { event: TimelineEvent }) => (
    <div>
        <span className="inline-block rounded border border-hairline px-2 py-0.5 font-montserrat text-[0.6rem] uppercase tracking-widest text-ink-muted">
            {event.kind}
        </span>
        <h3 className="mt-3 font-satoshi text-xl font-bold text-ink md:text-2xl">
            {event.role}
        </h3>
        <p className="mt-1 font-montserrat text-xs uppercase tracking-wide text-ink-muted">
            {event.label}
        </p>
        <p className="mt-3 font-satoshi text-base leading-relaxed text-ink-soft">
            {event.detail}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            {event.location && (
                <span className="flex items-center gap-1.5 font-montserrat text-xs text-ink-muted">
                    <MapPinIcon className="h-3.5 w-3.5" />
                    {event.location}
                </span>
            )}
            {event.link && (
                <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-montserrat text-xs font-bold text-accent underline underline-offset-4 transition-colors duration-300 hover:text-ink"
                >
                    Read more
                    <ArrowUpRightIcon className="h-3 w-3" />
                </a>
            )}
        </div>
    </div>
);

export default YearCalendar;
