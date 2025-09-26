import React from "react";
import { assetsSvgs } from "../assets/assets";

const Crossfit = () => {
  return (
    <section>
      <div className="flex justify-center items-center p-4">
        <h1 className="font-poppins text-3xl md:text-5xl font-extrabold text-gray-800 text-center leading-tight mb-4">
          ¿Qué es el <span className="text-yellow-400">CrossFit</span>?
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          <img
            src={assetsSvgs.Dumbbell}
            alt=""
            className="w-12 h-12 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-yellow-400 text-shadow-xs">
            Entrenamiento Funcional de Alta Intensidad
          </h2>
          <p>
            Movimientos naturales, útiles y variados que mejoran tu fuerza,
            agilidad y resistencia en cada sesión. Ideal para quienes buscan
            rendimiento real en la vida diaria.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          <img
            src={assetsSvgs.Users}
            alt=""
            className="w-12 h-12 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-yellow-400 text-shadow-xs">
            Comunidad Fuerte
          </h2>
          <p>
            Comparte esfuerzo, sudor y logros con una comunidad que te impulsa a
            superarte. Aquí no entrenas solo: creces junto a personas con la
            misma pasión.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          <img
            src={assetsSvgs.Refresh}
            alt=""
            className="w-12 h-12 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-yellow-400 text-shadow-xs">
            Variedad Constante
          </h2>
          <p>
            Cada entrenamiento es diferente, combinando ejercicios variados que
            desafían tu cuerpo y mente. La clave está en la constante variedad
            para evitar la rutina y maximizar tu progreso.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Crossfit;
