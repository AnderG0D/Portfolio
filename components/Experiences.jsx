const experiences = [
  {
    company: "Mada del Norte",
    position: "Process Support & Automation Analyst",
    dates: "Apr 2025 — Sep 2025",
    description: "Supported teams with hardware, software, and data capture issues. Designed and developed a database to centralize portability information.",
  },
  {
    company: "Emerson · FR-Tecnologías de Flujo",
    position: "Analyst Programmer Intern",
    dates: "Jun 2024 — Dec 2024",
    description: "Developed internal applications for shipment validation, supplier invoice issue management, and defective part rework tracking.",
  },
];

export function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">Where I’ve contributed</p>
        <h2 id="experience-title">Experience<span className="accent">.</span></h2>
      </div>
      <div className="experience-list">
        {experiences.map((item, index) => (
          <article className="experience-row" key={item.company}>
            <span className="experience-index">0{index + 1}</span>
            <div className="experience-main">
              <h3>{item.company}</h3>
              <p className="experience-position">{item.position}</p>
              <p className="experience-description">{item.description}</p>
            </div>
            <p className="experience-dates">{item.dates}<br />Chihuahua, Mexico</p>
          </article>
        ))}
      </div>
      <div className="education-line">
        <span className="eyebrow">Education</span>
        <div>
          <h3>Instituto Tecnológico de Chihuahua II</h3>
          <p>B.S. in Computer Systems Engineering <span>·</span> Aug 2020 — Dec 2024</p>
        </div>
      </div>
    </section>
  );
}
