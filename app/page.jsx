import Link from "next/link";
import Image from "next/image";
import ProjectsSection from "../components/Projects";
import { ExperienceSection } from "@/components/Experiences";

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black via-[#4b0000] to-black bg-[radial-gradient(circle, rgba(139,0,0,0.6) 20%, rgba(0,0,0,0.8) 80%)] backdrop-blur-sm text-white">


      {/* Sección Home*/}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8 space-y-8 md:space-y-0 md:space-x-12">
        {/* Texto */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-500">Eitale! I am Edgar Anderson</h1>
          <h2 className="text-3xl md:text-4xl text-yellow-300">Full Stack Developer & Game Programmer</h2>
          <p className="max-w-2xl text-lg md:text-xl text-gray-300">
            My passion is to create and develop software that is fun and engaging for users.
            I have experience with a variety of programming languages and tools, and I'm always looking for new ways to improve my skills.
            I love learning everything about the world of programming and technology, diving into all kinds of topics to expand my knowledge.
            I obsess over every detail to ensure that every project meets or exceeds client expectations, and I bring the same dedication to my personal projects.
            My goal is to use my full potential to create amazing, original, and entertaining things because I was born to do this.
            I strive to build unique, fun experiences and turn them into successful ventures.
          </p>
          <button className="px-8 py-4 bg-yellow-500 text-xl text-black font-bold rounded-md hover:bg-yellow-600 transition-all">
            <Link href="#contact">Contact Me</Link>
          </button>
        </div>

        {/* Imagen */}
        <div className="mt-8 md:mt-0">
          <Image
            src="/edgar_resume.jpeg"
            alt="EA"
            width={350}
            height={450}
            className="rounded-lg border-4 border-yellow-500 shadow-2xl hover:shadow-yellow-500 hover:scale-105 transition-transform"
          />
        </div>
      </section>

      {/* Sección About */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-8 space-y-8">
        <h2 className="text-6xl font-bold text-yellow-500">About Me</h2>
        <p className="max-w-3xl text-xl text-gray-300 leading-relaxed">
        Since I was a child, I have always been fascinated by technology and science fiction. 
        I dreamed of creating my own inventions and exploring the endless possibilities of innovation. 
        Over time, I discovered my talent in programming, electronics, mathematics, and science, which fueled my passion even more. 
        Currently, I am a proud graduate of the Instituto Tecnológico de Chihuahua II with a degree in Computer Systems Engineering, specializing in full-stack development. 
        While actively seeking new career opportunities, I am enhancing my skills by working through the Google Digital Marketing & E-commerce Professional Certificate and revisiting both new and foundational concepts in my field.
        At the same time, I am wholeheartedly pursuing my passion for programming and game development. 
        I'm currently focused on my project, "RunBRun," an exciting endless runner game with a Mexican twist! Looking ahead, my goal is to continue growing and mastering programming and business, building a grand empire of science, technology, and entertainment. 
        The future holds limitless possibilities, and I am determined to make them a reality. Amen!
        </p>
      </section>

      {/* Sección Skills */}
      <section id="skills" className="min-h-screen flex flex-col items-center justify-center text-center px-8 space-y-8">
        <h2 className="text-6xl font-bold text-yellow-500">Skills</h2>
        {/* Contenedor de Skills */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            C++
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            JavaScript
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Java
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            HTML5
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            CSS3
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Node.js
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            React
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Next.js
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Tailwind CSS
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            MongoDB
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            MySQL
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Flutter
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Supabase
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Unreal Engine
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Blender
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Python
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            C#
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Figma
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Microsoft Power Apps
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Microsoft Power Automate
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Microsoft SharePoint
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Microsoft PowerBI
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Express
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Git
          </span>
          <span className="px-6 py-3 bg-yellow-500 text-black text-lg font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all">
            SQL
          </span>
        </div>
      </section>

      {/* Sección Projects */}
      <ProjectsSection />

      {/* Sección Experience */}
      <ExperienceSection />

      {/* Sección Contact */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-8 space-y-8 bg-gradient-to-br from-red-900 via-transparent to-transparent bg-blur"
        style={{
          background: "radial-gradient(circle, rgba(139,0,0,0.4) 10%, transparent 50%)",
        }}
      >
        <h2 className="text-6xl font-bold text-yellow-500 z-10">Contact Me!</h2>
        <div className="flex flex-row items-center space-x-8 z-10">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/edgar-anderson-82a87427b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width="70"
              height="70"
              className="hover:scale-110 transition-transform"
            />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/AnderG0D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github-cat-1.png"
              alt="Github"
              width="70"
              height="70"
              className="hover:scale-110 transition-transform"
              style={{ filter: "invert(1)" }}
            />
          </a>
          {/* Email */}
          <a
            href="mailto:m.anzoedgar11@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/email.png"
              alt="Email"
              width="70"
              height="70"
              className="hover:scale-110 transition-transform"
              style={{ filter: "invert(1)" }}
            />
          </a>
          {/* CV */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/resume.png"
              alt="Resume"
              width="70"
              height="70"
              className="hover:scale-110 transition-transform"
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
      </section>


    </div>
  );
}
