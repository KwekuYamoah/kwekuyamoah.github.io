export type TimelineKind =
    | "Education"
    | "Teaching"
    | "Research"
    | "Conference"
    | "Industry"
    | "Publication";

export type TimelineEvent = {
    id: number;
    /** Headline shown in the detail panel. */
    role: string;
    detail: string;
    kind: TimelineKind;
    /** Inclusive start, as [year, monthIndex] with monthIndex 0–11. */
    start: [number, number];
    /** Inclusive end, for anything that ran over several months. */
    end?: [number, number];
    /** Date as written elsewhere on the site — the calendar places events by
     *  `start`/`end`, but always shows the wording that was authored. */
    label: string;
    location?: string;
    link?: string;
};

/**
 * The year calendar indexes everything the rest of the page states —
 * education, teaching, research, and publications — so a visitor can read a
 * single year as a unit instead of hunting across four sections.
 */
export const timelineEvents: Array<TimelineEvent> = [
    {
        id: 1,
        role: "Teaching Assistant",
        detail:
            "Assisting with the teaching of undergraduate Computer Science courses at Ashesi University.",
        kind: "Teaching",
        start: [2022, 0],
        end: [2025, 11],
        label: "2022 – 2025",
        location: "Ashesi University, Berekuso",
    },
    {
        id: 2,
        role: "B.Sc. in Computer Science",
        detail: "Graduated from Ashesi University.",
        kind: "Education",
        start: [2022, 4],
        label: "May 2022",
        location: "Berekuso, Ghana",
        link: "https://www.ashesi.edu.gh/",
    },
    {
        id: 3,
        role: "Freelance",
        detail:
            "Worked on the integration of LLMs to enhance legal research at Diligence AI.",
        kind: "Industry",
        start: [2023, 1],
        label: "February 2023",
    },
    {
        id: 4,
        role: "Participant",
        detail:
            "Attended the DLI Conference in Ghana, where I presented a poster and published a paper.",
        kind: "Conference",
        start: [2023, 8],
        label: "September 2023",
        location: "Ghana",
    },
    {
        id: 5,
        role: "Researcher",
        detail:
            "Conducting research to see how prosodic features can guide a robot in an environment.",
        kind: "Research",
        start: [2024, 1],
        label: "February 2024",
    },
    {
        id: 6,
        role: "Machine Translation Corpus for Kpelle",
        detail:
            "The first functional machine translation corpus for Kpelle, a low-resource Mande language spoken in Liberia and Guinea.",
        kind: "Publication",
        start: [2025, 6],
        label: "July 2025",
        location: "Vienna, Austria",
        link: "https://aclanthology.org/2025.africanlp-1.8/",
    },
    {
        id: 7,
        role: "Speech Prosody for Robot Instructions",
        detail:
            "Prosodic cues improve a robot's ability to disambiguate spoken instructions, helping it understand intent even when phrasing alone is ambiguous.",
        kind: "Publication",
        start: [2025, 7],
        label: "August 2025",
        location: "Rotterdam, Netherlands",
        link: "https://www.isca-archive.org/interspeech_2025/sasu25b_interspeech.pdf",
    },
    {
        id: 8,
        role: "Ph.D. in Computer & Information Science & Engineering",
        detail:
            "Started at the University of Florida, researching neuro-symbolic and multi-agent approaches to NLP in low-resource contexts.",
        kind: "Education",
        start: [2025, 7],
        label: "Aug 2025 – Present",
        location: "Gainesville, FL",
        link: "https://www.cise.ufl.edu/",
    },
    {
        id: 9,
        role: "Elicitation-Matrix Twi Translation",
        detail:
            "An elicitation-matrix method for capturing pragmatic context in low-resource machine translation, guiding translation of Akuapem Twi to better preserve meaning that literal translation loses.",
        kind: "Publication",
        start: [2026, 4],
        label: "May 2026",
        location: "Marco Island, FL",
        link: "https://journals.flvc.org/FLAIRS/article/view/141846/147007",
    },
];

export const MONTHS_SHORT = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const MONTHS_LONG = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

/** Months are compared as a single ordinal so spans are a plain range test. */
export const ordinal = (year: number, month: number) => year * 12 + month;

export const eventStartsIn = (event: TimelineEvent, year: number, month: number) =>
    event.start[0] === year && event.start[1] === month;

export const eventCovers = (event: TimelineEvent, year: number, month: number) => {
    const point = ordinal(year, month);
    const from = ordinal(...event.start);
    const to = event.end ? ordinal(...event.end) : from;
    return point >= from && point <= to;
};

export const calendarYears = (() => {
    const bounds = timelineEvents.flatMap((e) => [e.start[0], (e.end ?? e.start)[0]]);
    const first = Math.min(...bounds);
    const last = Math.max(...bounds);
    return Array.from({ length: last - first + 1 }, (_, i) => first + i);
})();
