const projects = [
  {
    number: "01",
    eyebrow: "Independent project · Currently inactive",
    title: "WhatsApp Lead Copilot",
    summary: "A backend for lead classification and scoring, context building, and human reviewed reply drafts.",
    stack: "NestJS · TypeScript · Evolution API · Supabase / PostgreSQL",
    note: "From May through September 2026, the Copilot received and persisted real inbound messages in production. Separate technical validations performed locally and in isolation covered classification and scoring, context building, and reply-draft generation. The project is currently inactive; automatic sends were disabled, and no commercial metrics have been verified.",
    className: "project-featured",
  },
  {
    number: "02",
    eyebrow: "Emerson · Analyst Programmer Intern",
    title: "Operational workflow tools",
    summary: "Built a Honeywell CK65 web app to validate shipments through a scanning flow, a tool to manage supplier invoice issues, and a process to record and track defective part rework.",
    stack: "Application development · Workflow automation",
    className: "",
  },
  {
    number: "03",
    eyebrow: "Mada del Norte · Process Support & Automation Analyst",
    title: "Portability data centralization",
    summary: "Designed and developed a database to centralize portability information, alongside support for hardware, software, and data capture systems.",
    stack: "Database design · Technical support",
    className: "",
  },
];

export default function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">A few things I’ve worked on</p>
        <h2 id="projects-title">Selected work<span className="accent">.</span></h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className={`project-row ${project.className}`} key={project.number}>
            <span className="project-number">{project.number}</span>
            <div className="project-copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-stack">{project.stack}</p>
              {project.note && <p className="project-note">{project.note}</p>}
            </div>
            <span className="project-mark" aria-hidden="true">—</span>
          </article>
        ))}
      </div>
    </section>
  );
}
