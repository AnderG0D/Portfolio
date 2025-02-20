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
    title: "Health Influencers",
    tools: "Next.js, Tailwind CSS, Perplexity API, Vercel",
    description: "Verify Influencers is a Next.js web application deployed on Vercel that allows users to search health-related claims made by influencers. Users can filter claims by a specific influencer's name or search for the most popular influencers. The app enables users to select the time period (e.g., last week, month, year), the number of claims to analyze (ranging from 5 to 50), and the journals with which to verify the claims. After initiating the search, the app displays the results in a leaderboard, ranking influencers by their confidence score, from highest to lowest. Clicking on any influencer takes the user to a detailed page showing all their claims, whether they were verified, debunked, etc., along with the corresponding links to the claims and the trusted sources (scientific journals, health websites, etc.) used to verify or dispute those claims.",
    image: "/health_influencers.jpg",
    link: "https://health-influencers-jet.vercel.app/",
    githubLink: "https://github.com/AnderG0D/Health-Influencers"
  },
  {
    id: 4,
    title: "Hotline Tec II",
    tools: "Next.js, GameMaker, HTML5, MongoDB",
    description: "Browser game inspired by the game Hotline Miami with Google account integration to save progress.",
    image: "/hotline.png",
    link: "https://cloud-computing-git-main-ander42069s-projects.vercel.app/",
    githubLink: "https://github.com/AnderG0D/CloudComputing"
  },
  {
    id: 5,
    title: "GastoSano app",
    tools: "Flutter, Supabase",
    description: "A mobile app for managing personal expenses.",
    image: "/gastosano.png",
    imageClassName: "h-auto w-full object-cover",
    githubLink: "https://github.com/AnderG0D/SanaFinanza"
  },
  {
    id: 6,
    title: "PlantListApp",
    tools: "Java, Android Studio, SQLite",
    description: "PlantListApp is an Android application developed in Android Studio. This app allows users to explore a list of plants, view their basic information, and access more detailed information by simply tapping on each item in the list.",
    image: "/lista_flores.jpg",
    githubLink: "https://github.com/AnderG0D/PlantListApp"
  },
  {
    id: 7,
    title: "CaraAguilaApp",
    tools: "Java, Android Studio",
    description: "CaraAguilaApp is an Android application that simulates a coin toss. The app keeps track of how many times 'Heads' or 'Tails' has appeared and displays the percentage of occurrences of each result in a visual and interactive manner.",
    image: "/lanzar_moneda.jpg",
    githubLink: "https://github.com/AnderG0D/CaraAguilaApp"
  },
  {
    id: 8,
    title: "CompassApp",
    tools: "Java, Android Studio",
    description: "Virtual Compass is an Android application that shows the direction and orientation degrees relative to true north. It uses the device's sensors to provide accurate, real-time guidance.",
    image: "/brujula.jpg",
    githubLink: "https://github.com/AnderG0D/CompassApp"
  },
  {
    id: 9,
    title: "RadioApp",
    tools: "Java, Android Studio",
    description: "This Android application allows you to calculate the radius of a circle based on its area. It also keeps track of the number of calculations made and calculates the average of the obtained radii.",
    image: "/radio.jpg",
    githubLink: "https://github.com/AnderG0D/RadioApp"
  },
  {
    id: 10,
    title: "CitasApp",
    tools: "Java, Android Studio",
    description: "CitasApp is an Android application that allows users to easily schedule appointments. Users can enter their name, the topic of conversation, and the appointment date. The information is saved in the app and can be viewed later from the 'View Preferences' option.",
    image: "/preferencias.jpg",
    githubLink: "https://github.com/AnderG0D/CitasApp"
  },
  {
    id: 11,
    title: "SensoresApp",
    tools: "Java, Android Studio",
    description: "Sensor Explorer is an Android application that allows you to view all the available sensors on your smartphone. It displays the sensor's name, type, and the values it provides in real-time.",
    image: "/sensores.jpg",
    githubLink: "https://github.com/AnderG0D/SensoresApp"
  },
  {
    id: 12,
    title: "SOSApp",
    tools: "Java, Android Studio",
    description: "SOS Emergency Alert is an Android application that sends an SMS to an emergency number with a distress message and your exact location (latitude, longitude, and altitude) when you press the SOS button.",
    image: "/sos.jpg",
    githubLink: "https://github.com/AnderG0D/SOSApp"
  },
  {
    id: 13,
    title: "SQLiteApp",
    tools: "Java, Android Studio, SQLite",
    description: "A simple Android application that uses SQLite to store and manage information about people. The app allows users to add, edit, search, and browse through data stored in an SQLite database. Each person's information includes an ID, name, and description.",
    image: "/sqlite.jpg",
    githubLink: "https://github.com/AnderG0D/SQLiteApp"
  },
  {
    id: 14,
    title: "WifiScannerApp",
    tools: "Java, Android Studio",
    description: "This is a simple application to scan nearby Wi-Fi networks using Android's WifiManager. The app allows the user to see a list of available Wi-Fi networks and their details, such as SSID and security capabilities. Additionally, users can search for networks, reload the results, and browse through the network list.",
    image: "/wifi_scanner.jpg",
    githubLink: "https://github.com/AnderG0D/WifiScannerApp"
  },
  {
    id: 15,
    title: "HttpJsonApp",
    tools: "Java, Android Studio, Volley, MySQL, PHP, Hostinger",
    description: "This web application allows storing and displaying a list of grasses with their ID, common name, scientific name, description, and image. The application is built with Android Studio and uses a web server running PHP to interact with a MySQL database, where the grass data is stored. The grass list is displayed in the web application, and when a grass is selected, a new window shows the complete details of the plant.",
    image: "/http_json.jpg",
    githubLink: "https://github.com/AnderG0D/HttpJsonApp"
  },
  {
    id: 16,
    title: "CH9300-03 app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app that digitizes the electrified work permit form, which is approved or rejected by an EHS engineer and the plant manager.",
    image: "/ch9300.jpg",
  },
  {
    id: 17,
    title: "P2P Issues & Process Tracker",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to record issues with material suppliers and track those records until the issue is resolved.",
    image: "/p2p.jpg"
  },
  {
    id: 18,
    title: "Request for Reworks",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to fill out a form to request rework on parts or units.",
    image: "/reworks.jpg"
  },
  {
    id: 19,
    title: "Fire Extinguishers Maintenance app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to manage information about fire extinguishers in the plant and make annotations.",
    image: "/extintores.jpg"
  },
  {
    id: 20,
    title: "Fixed Asset Disposals app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to request the disposal of a machine or tool from the plant.",
    image: "/fixed.jpg"
  },
  {
    id: 21,
    title: "Fire Extinguishers List app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to modify information about fire extinguishers in the plant.",
    image: "/lista_extintores.jpg"
  },
  {
    id: 22,
    title: "Fire Extinguishers Locations app",
    tools: "Microsoft Power Apps, Microsoft Automate, Microsoft SharePoint",
    description: "An app to modify information about fire extinguisher locations in the plant.",
    image: "/ubicaciones_extintores.jpg"
  },
  {
    id: 23,
    title: "Monster Shooter",
    tools: "Unreal Engine, C++, Mixamo, Blueprints",
    description: "FPS game made in Unreal Engine and C++ where you play as a vampire hunter and must reach an objective before time runs out or before the vampires kill you.",
    image: "/monstershooter.png",
    githubLink: "https://github.com/AnderG0D/Monster_Shooter"
  },
  {
    id: 24,
    title: "Just Run",
    tools: "Unreal Engine, Mixamo, Blueprints, Blender, Photoshop",
    description: "Endless runner game made with Blueprints and Unreal Engine where you play as a ninja who must dodge obstacles, collect coins, and power-ups that grant unique abilities for a limited time. It is also adapted for mobile devices.",
    image: "/justrun.png",
    githubLink: "https://github.com/AnderG0D/JustRun5.1"
  },
  {
    id: 25,
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

