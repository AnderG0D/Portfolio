import React from "react";

export default function ExperienceCard({ title, position, duration, location, description, skills }) {
  return (
    <div className="flex flex-col w-full bg-[#240B09] p-6 rounded-lg border border-[#552211] shadow-lg hover:shadow-2xl transition-all">
      {/* Título */}
      <h3 className="text-3xl font-bold text-[#FFD700] mb-4">{title}</h3>

      {/* Puesto, duración y lugar */}
      <p className="text-lg text-white mb-4">
        {position} - {duration} | {location}
      </p>

      {/* Descripción */}
      <p className="text-lg text-white leading-relaxed mb-4">{description}</p>

      {/* Habilidades */}
      {skills && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#FFD700] text-[#240B09] font-semibold py-1 px-3 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
