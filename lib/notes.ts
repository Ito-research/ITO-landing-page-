export const notes = [
  {
    slug: "cost-of-being-clever",
    date: "02.18.26",
    title: "On the cost of being clever",
    time: "4 MIN",
    summary: "Why complexity has a carrying cost, and why the simplest explanation is often the strongest place to begin.",
    paragraphs: [
      "Complexity has a cost that rarely appears in a backtest. It adds assumptions, creates more places for a model to be wrong, and makes it harder to know what to trust. A clever explanation can fit the past with extraordinary precision and still tell us very little about what happens next.",
      "We try to treat each additional rule as a question rather than an improvement. What observation requires it? Would the idea still make sense if the rule were removed? Is the added detail explaining something structural, or simply making the historical record look more comfortable?",
      "This does not mean that simple systems are automatically good. It means that complexity should earn its place. A small set of explicit assumptions is easier to challenge, monitor, and retire when the evidence changes.",
      "The goal is not elegance for its own sake. It is to know what we believe, why we believe it, and what would make us change our minds.",
    ],
  },
  {
    slug: "what-a-stop-button-teaches-you",
    date: "02.04.26",
    title: "What a stop button teaches you",
    time: "3 MIN",
    summary: "A stop button is not a last resort. It is a design decision made before the room gets loud.",
    paragraphs: [
      "A stop button is not a last resort. It is an admission, made in advance, that conditions can change faster than a plan. The decision to pause should not depend on one person finding the right words at the right moment.",
      "Designing a stop means asking what can go wrong at each layer: data, execution, controls, and the assumptions that tie them together. It means making the safe action clear and technically possible, rather than hoping that a process will hold under pressure.",
      "It also teaches humility. A system that can be paused is a system whose makers accept that they do not have a complete picture. Stopping is not the opposite of discipline. Sometimes it is the clearest expression of it.",
    ],
  },
  {
    slug: "why-we-write-the-limits-first",
    date: "01.21.26",
    title: "Why we write the limits first",
    time: "5 MIN",
    summary: "Decide what you will not tolerate while the room is still quiet.",
    paragraphs: [
      "A limit is useful before it is tested. By writing down what we will not tolerate first, we make the difficult decision while the room is quiet—not when pressure is asking us to improvise.",
      "The exercise begins with plain language. What would invalidate the research? What level of uncertainty is acceptable? Which operational conditions require us to pause? A useful limit must be observable, owned by someone, and connected to an action.",
      "Numbers alone are not a risk process. A boundary without monitoring is a wish; monitoring without a predetermined response is a dashboard. The work is to connect what we measure to what we are prepared to do.",
      "Writing the limits first narrows the space for rationalization. It gives a team a shared reference point when the evidence is uncomfortable and the easy answer is to wait.",
    ],
  },
  {
    slug: "noise-is-not-randomness",
    date: "01.08.26",
    title: "Noise is not randomness",
    time: "4 MIN",
    summary: "An imperfect signal can have structure. A convincing pattern can still be an accident.",
    paragraphs: [
      "A noisy signal can still have structure; a clean-looking pattern can still be an accident. The work is not to make every movement meaningful. It is to measure carefully enough to know when meaning is earned.",
      "Markets produce more observations than explanations. That abundance makes it tempting to keep looking until something appears. But searching is part of the experiment: the more possibilities we try, the less surprising a good-looking result becomes.",
      "We try to be explicit about what was tested, what was left out, and what would count as evidence against an idea. A result should survive reasonable changes in measurement and the discomfort of an independent review.",
      "Uncertainty does not disappear when a line is drawn on a chart. It is part of the thing being measured.",
    ],
  },
] as const;

export type Note = (typeof notes)[number];

export function getNote(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}
