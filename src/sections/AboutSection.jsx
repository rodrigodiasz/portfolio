import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    value: "75%+",
    label: "Ops Overhead Reduced",
    desc: "Replaced manual workflows with AWS Lambda automation pipelines at B4You.",
  },
  {
    value: "100+",
    label: "Projects Delivered",
    desc: "Web apps, APIs, internal tools, and platforms shipped across both companies.",
  },
  {
    value: "60%+",
    label: "Accessibility Improved",
    desc: "WCAG compliance gains on institutional systems at the Central Bank of Brazil.",
  },
  {
    value: "0",
    label: "Downtime on Migration",
    desc: "Led a full infrastructure migration at BCB from design through deployment.",
  },
];

const quickFacts = [
  { icon: "📍", text: "Brasília, Brazil" },
  { icon: "🎓", text: "B.Sc. Software Engineering — UCB (2022–2025)" },
  { icon: "🌐", text: "Portuguese (Native) · English (Advanced)" },
  { icon: "🟢", text: "Open to remote opportunities" },
];

const techTags = [
  "React", "Next.js", "TypeScript", "Node.js",
  "NestJS", "AWS", "PostgreSQL", "Docker", "Tailwind CSS",
];

const AboutSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-highlight",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-highlights-grid", start: "top 80%" },
      }
    );
    gsap.fromTo(
      ".about-quickfacts",
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-quickfacts", start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="work" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <TitleHeader title="About Me" sub="👨‍💻 Who I Am" />

        <div className="mt-16 flex flex-col xl:flex-row gap-10">
          {/* LEFT — Bio + Highlights */}
          <div className="flex flex-col gap-8 xl:w-2/3">
            <p className="text-white-50 text-lg leading-relaxed">
              Full-Stack Developer with 4+ years of experience shipping production-grade web
              applications used by thousands of users — including systems at Brazil's Central Bank,
              one of Latin America's most critical financial institutions. Frontend-focused with strong
              backend and cloud depth across React, Next.js, TypeScript, Node.js, and AWS. Open to
              remote opportunities with international teams.
            </p>

            <div className="about-highlights-grid grid grid-cols-1 md:grid-cols-2 gap-5">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="about-highlight card-border rounded-xl p-6 flex flex-col gap-2"
                >
                  <span className="text-3xl font-bold text-white">{h.value}</span>
                  <span className="text-white font-semibold">{h.label}</span>
                  <p className="text-white-50 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Quick Facts + Tech */}
          <div className="about-quickfacts xl:w-1/3 flex flex-col gap-6">
            <div className="card-border rounded-xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-lg mb-1">Quick Facts</h3>
              {quickFacts.map((f) => (
                <div key={f.text} className="flex items-start gap-3">
                  <span className="text-xl">{f.icon}</span>
                  <p className="text-white-50 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="card-border rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm text-white-50 border border-white/10 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
