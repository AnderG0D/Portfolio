import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, tools, description, image, link, githubLink, imageClassName }) {
  return (
    <div className="flex flex-col items-center w-full text-white py-2 px-8">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row w-full max-w-full bg-[radial-gradient(circle, rgba(139,0,0,0.4) 10%, transparent 50%)] overflow-hidden shadow-2xl">
        {/* Imagen */}
        <div className={`md:w-1/2 w-full relative ${imageClassName || ""}`}>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={1200}
            height={900}
            objectFit="contain"
            className="rounded-none"
          />
        </div>

        {/* Contenido */}
        <div className="md:w-1/2 w-full p-8 flex flex-col space-y-4 justify-start">
          {/* Título */}
          <h3 className="text-4xl font-bold text-yellow-500 mb-2">{title}</h3>

          {/* Herramientas */}
          <p className="text-xl text-gray-400 font-medium mb-4">
            Built with: <span className="text-yellow-300">{tools}</span>
          </p>

          {/* Descripción */}
          <p className="text-lg text-gray-300 leading-relaxed flex-grow">
            {description}
          </p>

          {/* Botones */}
          <div className="flex space-x-4 justify-center items-center">
            {link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-3 rounded-lg transition-transform transform hover:scale-105"
              >
                Live Demo
              </Link>
            )}
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-lg transition-transform transform hover:scale-105"
              >
                GitHub
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
