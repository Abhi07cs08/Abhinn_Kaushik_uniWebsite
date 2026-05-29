import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  ExternalLink,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageSquareText,
  Microscope,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  UserCheck,
  X,
  Zap,
} from "lucide-react";

// Replace these placeholder booking links with your real Calendly or booking URLs.
const PROFILE_AUDIT_LINK = "https://calendly.com/YOUR-LINK/profile-audit";
const ESSAY_REVIEW_LINK = "https://calendly.com/YOUR-LINK/essay-review";
const STRATEGY_PACKAGE_LINK = "https://calendly.com/YOUR-LINK/strategy-package";
const LINKEDIN_URL = "https://www.linkedin.com/in/abhinn-kaushik2028/";
const CONTACT_EMAIL = "Abhi.Kaushik@mail.utoronto.ca";
const BRAND_MARK_PATH = "/abhinn-mark.svg";
// Replace this file in /public/ when updating the profile photo. The page falls back to AK initials.
const PROFILE_IMAGE_PATH = "/abhinn-profile.png";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Book", href: "#book" },
];

const trustBadges = [
  "CMU / Imperial / NUS / NTU admits",
  "UofT Computer Science Co-op",
  "AI research + deployment",
  "US / UK / Canada / Singapore",
  "International applicant perspective",
  "Scholarship strategy",
];

const proofFacts = [
  "Lester B. Pearson Scholar",
  "1570 SAT",
  "TEDx Speaker",
  "FIRST Global Mauritius",
  "Research Lead @ UTMIST",
  "RISE Fellows FINALIST",
  "EY Data & AI Intern",
];

const problems = [
  {
    title: "Strong grades are not enough",
    text: "At top programs, grades usually keep you in the game. They rarely make you stand out alone.",
  },
  {
    title: "Random activities do not create a profile",
    text: "Ten disconnected activities can look weaker than one clear, deep direction.",
  },
  {
    title: "Essays need strategy",
    text: "A good essay is not just well-written. It has to strengthen the application's overall narrative.",
  },
  {
    title: "Different countries evaluate differently",
    text: "US, UK, Canada, and Singapore applications reward different signals. Treating them the same is a mistake.",
  },
];

const credibility = [
  {
    icon: Trophy,
    title: "Top admits",
    text: "Admitted to CMU, UofT CS, Imperial, NUS, and NTU across CS, engineering, and STEM pathways.",
  },
  {
    icon: Award,
    title: "Scholarship perspective",
    text: "Won one of UofT's most selective international merit awards, giving me direct experience with scholarship positioning and global applicant evaluation.",
  },
  {
    icon: Target,
    title: "Academic positioning",
    text: "Built a competitive testing and IB profile while balancing research, AI projects, robotics, leadership, and international applications.",
  },
  {
    icon: Microscope,
    title: "Research + AI",
    text: "Research Assistant at UofT Computational Neuroscience Lab working on representation learning, NeuroAI alignment, robustness, and model internals.",
  },
  {
    icon: BrainCircuit,
    title: "Real ML deployment",
    text: "Worked on YOLOv11-based automatic number plate recognition at Zygal.io, deployed across 1,200 edge devices.",
  },
  {
    icon: UserCheck,
    title: "Research Lead @ UTMIST",
    text: "Research Lead for Dynamic Few-Shot Object Detection at UTMIST, the world's largest undergraduate machine learning club.",
  },
  {
    icon: Sparkles,
    title: "Global experience",
    text: "FIRST Global Mauritius representative, TEDx speaker, LIYSF Clare Elwell Scholar, Rise for the World top 500 finalist, and scholarship winner.",
  },
];

const services = [
  {
    name: "CS/EECS Profile Audit + Strategy Call",
    price: "$100 USD",
    tag: "Best starting point",
    description:
      "A focused 60-minute call where we review your academics, activities, projects, essays direction, and target universities. You'll leave knowing what to keep, what to cut, what to improve, and what your next 30-90 days should look like.",
    includes: [
      "60-minute strategy call",
      "Profile strengths and weaknesses",
      "Target university fit",
      "Project and extracurricular positioning",
      "Clear 30-90 day next steps",
    ],
    cta: "Book Profile Audit",
    href: PROFILE_AUDIT_LINK,
  },
  {
    name: "Essay Review",
    price: "$50 USD",
    description:
      "Detailed written feedback on your essays, focused on clarity, narrative, specificity, and whether the essay actually strengthens your application.",
    includes: [
      "Written feedback",
      "Structure and clarity notes",
      "Narrative and positioning comments",
      "Suggestions for stronger examples and framing",
    ],
    cta: "Submit Essay for Review",
    href: ESSAY_REVIEW_LINK,
  },
  {
    name: "Application Strategy Package",
    price: "$250 USD",
    tag: "Most complete",
    featured: true,
    description:
      "A deeper personalized review for students who want both strategic direction and written feedback across their application.",
    includes: [
      "Two strategy calls",
      "Essay and extracurricular feedback",
      "Personalized application direction",
      "30-90 day action plan",
      "School-specific positioning advice",
    ],
    cta: "Apply for Strategy Package",
    href: STRATEGY_PACKAGE_LINK,
  },
];

const steps = [
  {
    icon: Layers3,
    title: "Choose a service",
    text: "Pick the option that fits your current stage.",
  },
  {
    icon: ClipboardCheck,
    title: "Fill out a short intake form",
    text: "Share your grades, activities, projects, target universities, and concerns.",
  },
  {
    icon: MessageSquareText,
    title: "Get direct feedback",
    text: "I review your profile, essays, or strategy and give specific, honest feedback.",
  },
  {
    icon: Rocket,
    title: "Leave with next steps",
    text: "You get a clearer view of what to fix and how to move forward.",
  },
];

const coverItems = [
  "CS/EECS profile strategy",
  "US applications",
  "UK personal statements",
  "Canadian applications",
  "Singapore applications",
  "Common App",
  "Supplemental essays",
  "SAT strategy",
  "Activities list",
  "Research positioning",
  "Project selection",
  "Clubs and leadership",
  "Sports as extracurriculars",
  "Scholarships",
  "Financial aid for international students",
  "Recommendation letters",
  "Personal branding",
  "Application narrative",
  "School list strategy",
  "90-day improvement plan",
];

const forYou = [
  "You are applying to CS, EECS, engineering, AI, data science, robotics, or STEM",
  "You are targeting selective universities",
  "You are an international applicant navigating multiple systems",
  "You have good grades but no clear story",
  "You are unsure whether your extracurriculars actually help",
  "You want direct feedback, not generic motivational advice",
  "You want someone recent who understands the process from the student side",
];

const notForYou = [
  "You want guaranteed admission",
  "You want someone to write your essays for you",
  "You want copied templates",
  "You are not willing to do the work yourself",
];

const faqs = [
  {
    q: "Do you guarantee admission?",
    a: "No. No one can honestly guarantee admission. I help you build a clearer, stronger, better-positioned application.",
  },
  {
    q: "Do you write essays for students?",
    a: "No. I provide feedback, structure, and positioning advice. The writing must remain the student's own.",
  },
  {
    q: "Can you help with US, UK, and Canada?",
    a: "Yes. I applied across multiple systems and can help students understand how each system evaluates applicants differently.",
  },
  {
    q: "Is this only for CS students?",
    a: "The strongest fit is CS/EECS/engineering/STEM applicants, but many principles apply broadly.",
  },
  {
    q: "Can international students book?",
    a: "Yes. This is especially useful for international students navigating multiple admissions systems.",
  },
  {
    q: "How do I prepare for the profile audit?",
    a: "Bring your grades, activities, projects, target universities, rough essays if any, and honest concerns.",
  },
  {
    q: "What happens after I book?",
    a: "You complete a short intake form, then receive the call link or essay submission instructions.",
  },
  {
    q: "What currency are prices in?",
    a: "USD.",
  },
  {
    q: "Are spots limited?",
    a: "Yes. I keep the number of reviews limited so feedback stays detailed and personalized.",
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/74 backdrop-blur-2xl">
      <nav className="container-page flex min-h-16 items-center justify-between gap-4 py-3">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={BRAND_MARK_PATH}
            alt=""
            className="h-10 w-10 rounded-2xl shadow-[0_0_22px_rgba(214,168,90,0.18)] transition duration-200 group-hover:scale-105"
            aria-hidden="true"
          />
          <span className="text-sm font-extrabold tracking-wide text-cream transition group-hover:text-gold">
            Abhinn Kaushik
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted transition hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a href={PROFILE_AUDIT_LINK} className="btn-primary px-5 py-2.5">
            Book a Profile Audit
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cream lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/96 px-5 pb-5 pt-2 shadow-soft backdrop-blur-2xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-base font-semibold text-muted transition hover:bg-white/[0.04] hover:text-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={PROFILE_AUDIT_LINK} className="btn-primary mt-2 w-full">
              Book a Profile Audit
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="heading-lg">{title}</h2>
      {text ? <p className="body-copy mt-5">{text}</p> : null}
    </div>
  );
}

function ProfileImage() {
  const [imageReady, setImageReady] = useState(true);

  return (
    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/25 via-white/[0.06] to-white/[0.02] p-1 shadow-glow">
      {imageReady ? (
        <img
          src={PROFILE_IMAGE_PATH}
          alt="Abhinn Kaushik"
          className="h-full w-full rounded-[1.25rem] object-cover"
          onError={() => setImageReady(false)}
        />
      ) : (
        <div className="grid h-full w-full place-items-center rounded-[1.25rem] bg-ink text-4xl font-black text-gold">
          AK
        </div>
      )}
    </div>
  );
}

function HeroCard() {
  const stats = [
    "5 top CS/EECS admits: CMU, UofT, Imperial, NUS, NTU",
    "Research leadership",
    "1,200-device AI deployment",
    "Multi-system strategy",
  ];

  return (
    <div className="reveal relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-5 rounded-[2rem] bg-gold/10 blur-3xl" />
      <div className="glass-card relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
        <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
          <ProfileImage />
          <div>
            <p className="text-2xl font-extrabold text-cream">Abhinn Kaushik</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-muted">
              UofT Computer Science Co-op
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              CMU | Imperial | NUS | NTU admits
            </p>
          </div>
        </div>

        <div className="relative mt-6 rounded-3xl border border-white/10 bg-ink/50 p-4">
          <div className="flex items-start gap-3">
            <BrainCircuit className="mt-1 text-gold" size={21} />
            <div>
              <p className="font-bold text-cream">AI | Research | Robotics background</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Recent applicant perspective across competitive CS, engineering, scholarship, and international admissions systems.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-5 grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-extrabold leading-5 text-cream">{stat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal">
          <p className="eyebrow mb-5">CS/EECS Admissions Strategy</p>
          <h1 className="heading-xl max-w-4xl">
            Build a sharper CS/EECS application strategy.
          </h1>
          <p className="body-copy mt-6 max-w-2xl">
            Admitted to CMU, UofT CS, Imperial, NUS, and NTU. I help ambitious students clarify what to improve, how to position their work, and how to build a stronger application for top universities.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PROFILE_AUDIT_LINK} className="btn-primary">
              Book a Profile Audit <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-xs font-bold text-muted"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <HeroCard />
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.018] py-5">
      <div className="container-page">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Proof points
          </p>
          <div className="flex flex-wrap gap-2.5 sm:justify-end">
            {proofFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-white/10 bg-ink/50 px-3.5 py-2 text-xs font-bold text-muted"
              >
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.018]">
      <div className="container-page">
        <SectionHeading
          eyebrow="The real problem"
          title="Most applicants are not short on effort. They are short on direction."
          text="Many ambitious students join random clubs, chase activities without a story, write generic essays, build shallow projects, misunderstand admissions systems, and focus on effort instead of positioning."
          centered
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <article key={problem.title} className="reveal glass-card rounded-3xl p-5 transition duration-200 hover:-translate-y-1 hover:border-gold/30">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <Zap size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-cream">{problem.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{problem.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredibilitySection() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Credibility"
          title="Why my advice is different"
          text="I recently went through the process across multiple admissions systems, and my background is built around CS, AI, robotics, research, and international applications."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {credibility.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`reveal glass-card rounded-3xl p-5 transition duration-200 hover:-translate-y-1 hover:border-gold/30 ${
                  index === credibility.length - 1 ? "xl:col-span-3" : ""
                }`}
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-pad scroll-mt-24 border-y border-white/10 bg-white/[0.018]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Ways I can help"
          text="Simple, direct feedback for students who want a clearer application strategy. All prices are in USD."
          centered
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className={`reveal relative flex rounded-[1.75rem] border p-5 sm:p-6 ${
                service.featured
                  ? "border-gold/45 bg-gold/[0.075] shadow-glow"
                  : "border-white/10 bg-white/[0.045]"
              } backdrop-blur-xl transition duration-200 hover:-translate-y-1`}
            >
              <div className="flex min-h-full w-full flex-col">
                <div className="flex min-h-8 items-start justify-between gap-3">
                  {service.tag ? (
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-extrabold text-gold">
                      {service.tag}
                    </span>
                  ) : (
                    <span />
                  )}
                  {service.featured ? <Sparkles className="text-gold" size={19} /> : null}
                </div>
                <h3 className="mt-5 text-2xl font-extrabold leading-tight text-cream">{service.name}</h3>
                <p className="mt-3 text-3xl font-black text-gold">{service.price}</p>
                <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                      <Check className="mt-0.5 shrink-0 text-gold" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.href} className={service.featured ? "btn-primary mt-7 w-full" : "btn-secondary mt-7 w-full"}>
                  {service.cta} <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="reveal mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-muted">
          I keep this limited so each student gets detailed, personalized feedback.
        </p>
        <div className="reveal mx-auto mt-8 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-gold/25 bg-gold/[0.075] p-5 text-center shadow-glow sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-extrabold text-cream">Not sure where to start?</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Book the profile audit. It gives you the clearest first read on what matters, what is missing, and what to do next.
            </p>
          </div>
          <a href={PROFILE_AUDIT_LINK} className="btn-primary w-full shrink-0 sm:w-auto">
            Book Profile Audit <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading eyebrow="Process" title="How it works" centered />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="reveal glass-card rounded-3xl p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <Icon size={22} />
                  </div>
                  <span className="font-serif text-4xl font-bold text-white/10">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-extrabold text-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CoverSection() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.018]">
      <div className="container-page">
        <SectionHeading eyebrow="Topics" title="What we can work on" centered />
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          {coverItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm font-semibold text-muted transition hover:-translate-y-0.5 hover:border-gold/35 hover:bg-gold/10 hover:text-cream"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="reveal glass-card rounded-[1.75rem] p-6 sm:p-8">
          <SectionHeading eyebrow="Fit" title="This is for you if..." />
          <ul className="mt-7 space-y-4">
            {forYou.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted sm:text-base">
                <Check className="mt-1 shrink-0 text-gold" size={19} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal rounded-[1.75rem] border border-white/10 bg-ink/60 p-6 sm:p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-gold">
            <ShieldCheck size={23} />
          </div>
          <h3 className="text-2xl font-extrabold text-cream">This is not for you if...</h3>
          <ul className="mt-6 space-y-4">
            {notForYou.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted sm:text-base">
                <X className="mt-1 shrink-0 text-gold" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.018]">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="reveal">
          <SectionHeading
            eyebrow="Philosophy"
            title="Effort is not enough. Direction matters."
            text="Most ambitious students are already working hard. The problem is that their effort is often scattered. Strong applications usually have coherence: academics, projects, activities, essays, and recommendations pointing in a believable direction. My goal is to help you understand what your current profile is saying, what it is missing, and how to make it sharper."
          />
        </div>
        <div className="reveal glass-card rounded-[1.75rem] p-7 sm:p-9">
          <BookOpenCheck className="mb-8 text-gold" size={32} />
          <p className="font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl">
            "Strong applications do not just list achievements. They make those achievements make sense."
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-pad scroll-mt-24">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Questions" centered />
        <div className="reveal mx-auto mt-10 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-extrabold text-cream sm:px-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5 text-sm leading-6 text-muted sm:px-6 sm:text-base">
                    {faq.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" className="section-pad scroll-mt-24">
      <div className="container-page">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gold/[0.08] p-7 text-center shadow-glow sm:p-10 lg:p-14">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Start here</p>
            <h2 className="heading-lg">Ready to make your application strategy clearer?</h2>
            <p className="body-copy mx-auto mt-5 max-w-2xl">
              If you are applying to top CS/EECS programs and want direct, personalized feedback, start with a profile audit.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={PROFILE_AUDIT_LINK} className="btn-primary">
                Book a Profile Audit <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-secondary">
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = useMemo(
    () => [
      { label: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
      { label: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
      { label: "Services", href: "#services" },
      { label: "FAQ", href: "#faq" },
      { label: "Book", href: "#book" },
    ],
    [],
  );

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-page flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-cream">Abhinn Kaushik</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            CS/EECS admissions strategy for ambitious students.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-muted transition hover:border-gold/35 hover:text-cream"
              >
                {Icon ? <Icon size={16} /> : null}
                {link.label}
                {link.label === "LinkedIn" ? <ExternalLink size={14} /> : null}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen overflow-hidden text-cream">
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <ProblemSection />
        <CredibilitySection />
        <ServicesSection />
        <HowItWorks />
        <CoverSection />
        <FitSection />
        <PhilosophySection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
