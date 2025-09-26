import React from "react";
import { assetsPics } from "../assets/assets";

const Team = () => {
  return (
    <section id="teamSection" className="text-center p-8">
      <h1 className="font-poppins text-3xl md:text-5xl font-extrabold text-gray-800 text-center leading-tight mb-4">
        Nuestro Equipo
      </h1>
      <p className="text-lg text-center text-gray-500 mt-2">
        Somos un grupo de entusiastas del fitness apasionados.
      </p>
      <section
        id="trainerCards"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        <div
          id="trainerCard"
          className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            className="w-full h-48 object-cover shadow-md rounded-lg"
            src={assetsPics.Trainer2}
            alt="Entrenador Carlos Muñoz García"
          />

          <h2 className="font-bold text-gray-800 text-center text-2xl mt-6">
            Carlos Muñoz García
          </h2>
          <p className="text-yellow-500 text-center font-semibold text-base mt-2">
            Grado en Ciencias de la Actividad Física y del Deporte
          </p>
          <span className="text-gray-600">
            Entrenador principal en un box de CrossFit en Sevilla, especializado
            en halterofilia y movilidad funcional.
          </span>
        </div>
        <div
          id="trainerCard"
          className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            className="w-full h-48 object-cover mx-auto shadow-md"
            src={assetsPics.Trainer1}
            alt="Entrenador Laura Sánchez Ortega"
          />
          <h2 className="font-bold text-gray-800 text-center text-2xl mt-6">
            Laura Sánchez Ortega
          </h2>
          <p className="text-yellow-500 text-center font-semibold text-base mt-2">
            Fisioterapia + Certificación CrossFit Level 2 (CF-L2)
          </p>
          <span className="text-gray-600">
            Coach de CrossFit en Madrid, con enfoque en prevención de lesiones y
            entrenamiento adaptado para mujeres.
          </span>
        </div>
        <div
          id="trainerCard"
          className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            className="w-full h-48 object-cover mx-auto shadow-md"
            src={assetsPics.Trainer3}
            alt="Entrenador Javier Romero Delgado"
          />
          <h2 className="font-bold text-gray-800 text-center text-2xl mt-6">
            Javier Romero Delgado
          </h2>
          <p className="text-yellow-500 text-center font-semibold text-base mt-2">
            Técnico Superior en Acondicionamiento Físico + Nutrición Deportiva
          </p>
          <span className="text-gray-600">
            Entrenador de CrossFit en Valencia, experto en programación de WODs
            y rendimiento competitivo.
          </span>
        </div>
      </section>
    </section>
  );
};

export default Team;
