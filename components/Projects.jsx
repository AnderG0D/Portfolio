import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Shopping Cart",
    tools: "HTML5, CSS3, JavaScript, Ajax, XAMPP, MySQL",
    description: "A webpage with a functional shopping cart where products can be added and removed.",
    image: "/carrito.png",
    githubLink: "https://github.com/AnderG0D/CarritoWeb"
  },
  {
    id: 2,
    title: "VotaTec Website",
    tools: "Next.js, Tailwind CSS, TypeScript, MongoDB",
    description: "An online voting website for students of the Instituto Tecnológico de Chihuahua II, including a dashboard for website administrators and security for student accounts during voting.",
    image: "/votatec.png",
    githubLink: "https://github.com/AnderG0D/VotaTec"
  },
  {
    id: 3,
    title: "GastoSano app",
    tools: "Flutter, Supabase",
    description: "A mobile app for managing personal expenses.",
    image: "/gastosano.png",
    imageClassName: "h-auto w-full object-cover",
    githubLink: "https://github.com/AnderG0D/SanaFinanza"
  },
  {
    id: 4,
    title: "Hotline Tec II",
    tools: "Next.js, GameMaker, HTML5, MongoDB",
    description: "Browser game inspired by the game Hotline Miami with Google account integration to save progress.",
    image: "/hotline.png",
    link: "https://www.hotlinemiamitecii.me/",
    githubLink: "https://github.com/AnderG0D/CloudComputing"
  },
  {
    id: 5,
    title: "CH9300-03 app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app that digitizes the electrified work permit form, which is approved or rejected by an EHS engineer and the plant manager.",
    image: "/ch9300.jpg",
  },
  {
    id: 6,
    title: "P2P Issues & Process Tracker",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to record issues with material suppliers and track those records until the issue is resolved.",
    image: "/p2p.jpg"
  },
  {
    id: 7,
    title: "Request for Reworks",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to fill out a form to request rework on parts or units.",
    image: "/reworks.jpg"
  },
  {
    id: 8,
    title: "Fire Extinguishers Maintenance app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to manage information about fire extinguishers in the plant and make annotations.",
    image: "/extintores.jpg"
  },
  {
    id: 9,
    title: "Fixed Asset Disposals app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to request the disposal of a machine or tool from the plant.",
    image: "/fixed.jpg"
  },
  {
    id: 10,
    title: "Fire Extinguishers List app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to modify information about fire extinguishers in the plant.",
    image: "/lista_extintores.jpg"
  },
  {
    id: 11,
    title: "Fire Extinguishers Locations app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to modify information about fire extinguisher locations in the plant.",
    image: "/ubicaciones_extintores.jpg"
  },
  {
    id: 12,
    title: "Monster Shooter",
    tools: "Unreal Engine, C++, Mixamo, Blueprints",
    description: "FPS game made in Unreal Engine and C++ where you play as a vampire hunter and must reach an objective before time runs out or before the vampires kill you.",
    image: "/monstershooter.png",
    githubLink: "https://github.com/AnderG0D/Monster_Shooter"
  },
  {
    id: 13,
    title: "Just Run",
    tools: "Unreal Engine, Mixamo, Blueprints, Blender, Photoshop",
    description: "Endless runner game made with Blueprints and Unreal Engine where you play as a ninja who must dodge obstacles, collect coins, and power-ups that grant unique abilities for a limited time. It is also adapted for mobile devices.",
    image: "/justrun.png",
    githubLink: "https://github.com/AnderG0D/JustRun5.1"
  },
  {
    id: 14,
    title: "RunBRun",
    tools: "Unreal Engine, C++, Blueprints",
    description: "Endless runner game inspired by the famous mobile game Subway Surfers, but with a Mexican and inclusive twist. The protagonist is an elderly person in a wheelchair who must escape from a police officer, dodge obstacles, collect coins, and power-ups with unique abilities for a limited time. It is also adapted for mobile devices.",
    image: "/runbrun.png",
    githubLink: "https://github.com/AnderG0D/RunBitchRun"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center text-center px-8 space-y-8 scroll-mt-24">
      <h2 className="text-6xl font-bold text-yellow-500">Projects</h2>

      {/* Contenedor de Cards */}
      <div className="flex flex-col space-y-12 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tools={project.tools}
            description={project.description}
            image={project.image}
            imageClassName={project.imageClassName} // Clase personalizada
            link={project.link}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

