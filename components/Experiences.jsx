import ExperienceCard from "./ExperienceCard";

export function ExperienceSection() {
    const experiences = [
      {
        id: 1,
        title: "FR-Tecnologías de Flujo Emerson",
        position: "Analyst Programmer Intern",
        duration: "June 2024 - November 2024",
        location: "Chihuahua, Mexico",
        description: `
          Description of the experience.
        `,
        skills: [
          "Microsoft Power Apps",
          "Microsoft Power Automate",
          "Microsoft SharePoint"
        ],
      },
      // Agrega más experiencias aquí si es necesario
    ];
  
    return (
      <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-8 space-y-8">
        <h2 className="text-6xl font-bold text-yellow-500">Experience</h2>
        <div className="flex flex-col space-y-12 w-full">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              position={exp.position}
              duration={exp.duration}
              location={exp.location}
              description={exp.description}
              skills={exp.skills}
            />
          ))}
        </div>
      </section>
    );
  }