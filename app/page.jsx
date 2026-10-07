import Image from "next/image";
import ProjectsSection from "../components/Projects";
import { ExperienceSection } from "@/components/Experiences";

const skillGroups = [
  { label: "Backend", skills: ["Node.js", "NestJS", "TypeScript", "JavaScript", "REST APIs"] },
  { label: "Data", skills: ["Supabase", "PostgreSQL", "SQL"] },
  { label: "Tools", skills: ["Git", "Docker", "Evolution API"] },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">Backend developer · Chihuahua, Mexico</p>
          <h1 id="hero-title">Edgar<br />Anderson<span className="accent">.</span></h1>
          <p className="hero-role">I build backend systems and practical software.</p>
          <p className="hero-intro">Focused on Node.js, NestJS, TypeScript, and data driven applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="mailto:m.anzoedgar11@hotmail.com">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Portrait of Edgar Anderson">
          <div className="portrait-frame">
            <Image src="/edgar_resume.jpeg" alt="Edgar Anderson" fill priority sizes="(max-width: 760px) 72vw, 38vw" className="portrait-image" />
          </div>
          <p className="portrait-caption">Developer · builder · lifelong learner</p>
        </div>
        <a className="scroll-cue" href="#about"><span></span> Scroll to explore</a>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <h2 id="about-title">Thoughtful systems.<br /><span className="muted-heading">Useful outcomes.</span></h2>
        </div>
        <div className="about-copy">
          <p>I’m a Computer Systems Engineering graduate from Instituto Tecnológico de Chihuahua II, with experience in backend development, internal tools, and process support.</p>
          <p>I enjoy turning operational needs into clear software: APIs, data workflows, and applications that help people do their work.</p>
          <div className="language-line"><span className="eyebrow">Languages</span><span>Spanish · Native</span><span>English · C1 (EF SET, Mar 2024)</span></div>
        </div>
      </section>

      <section className="section skills-section" id="skills" aria-labelledby="skills-title">
        <div className="skills-title-block"><p className="eyebrow">Tools of the trade</p><h2 id="skills-title">Core stack<span className="accent">.</span></h2></div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
        <p className="certificate-line"><span className="eyebrow">Certificate</span> Google Digital Marketing &amp; E-commerce · May 2025</p>
      </section>

      <ProjectsSection />
      <ExperienceSection />

      <footer className="contact-section" id="contact">
        <div className="contact-topline"><span className="eyebrow">Have a role or project in mind?</span><span className="footer-mark">EA<span className="accent">.</span></span></div>
        <h2>Let’s make<br />something useful.</h2>
        <a className="contact-email" href="mailto:m.anzoedgar11@hotmail.com">m.anzoedgar11@hotmail.com <span aria-hidden="true">↗</span></a>
        <div className="contact-links" aria-label="Contact links">
          <a href="tel:6141281698">614 128 1698</a>
          <a href="https://www.linkedin.com/in/edgar-anderson-82a87427b" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/AnderG0D" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="/resume_ingles.pdf" target="_blank" rel="noreferrer">Resume PDF <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom"><span>Edgar Anderson</span><span>Chihuahua, Mexico</span><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </main>
  );
}
