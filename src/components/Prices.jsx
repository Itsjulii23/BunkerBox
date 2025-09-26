import React from "react";
import { assetsSvgs } from "../assets/assets";

const Prices = () => {
  return (
    <section>
      <div id="headerPrices" className="font-poppins text-center p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-tight">
          Tarifas
        </h1>
        <p className="text-lg text-center text-gray-500 mt-2">
          ¡Únete y alcanza tu mejor versión!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/*PLAN ROOKIE*/}

        <div
          id="planRookie"
          className="bg-gray-100 p-6 rounded-xl shadow-md text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-400 flex justify-center items-center gap-2">
            <span>Plan Rookie</span>
            <img
              className="w-9 h-9"
              src={assetsSvgs.Rookie}
              alt="Rookie icon"
            />
          </h2>
          <p className="text-lg mb-4 font-bold">45€/mes</p>
          <ul className="space-y-2">
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso 10 clases grupales
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Cross"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a 1 open box semanal
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Cross}
                alt="Cross"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a sesión de fisioterapia
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Cross}
                alt="Cross"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a Eventos del Box
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Cross}
                alt="Cross"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a Entrenamiento Personalizado
            </li>
          </ul>
          <button className="cursor-pointer mt-4 bg-yellow-400 text-white font-bold py-2 px-4 rounded-4xl hover:bg-yellow-500 transition duration-300">
            Incríbete Ya
          </button>
        </div>

        {/*PLAN WARRIOR*/}
        <div
          id="planWarrior"
          className="bg-gray-100 p-6 rounded-xl shadow-md text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-400 flex justify-center items-center gap-2">
            <span>Plan Warrior</span>
            <img
              className="w-9 h-9"
              src={assetsSvgs.Warrior}
              alt="Warrior icon"
            />
          </h2>
          <p className="text-lg mb-4 font-bold">50€/mes</p>
          <ul className="space-y-2">
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso 12 clases grupales
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a 3 open box semanal
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a sesión de fisioterapia
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Cross}
                alt="Cross"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a Eventos del Box
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Cross}
                alt="Cross"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a Entrenamiento Personalizado
            </li>
          </ul>
          <button className="cursor-pointer mt-4 bg-yellow-400 text-white font-bold py-2 px-4 rounded-4xl hover:bg-yellow-500 transition duration-300">
            Incríbete Ya
          </button>
        </div>

        {/*PLAN BEAST*/}

        <div
          id="planBeast"
          className="bg-gray-100 p-6 rounded-xl shadow-md text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-400 flex justify-center items-center gap-2">
            <span>Plan Beast</span>
            <img className="w-9 h-9" src={assetsSvgs.Beast} alt="Beast icon" />
          </h2>
          <p className="text-lg mb-4 font-bold">60€/mes</p>
          <ul className="space-y-2">
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso Ilimitado a clases grupales
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Cross"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a ilimitado a open box
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a sesión de fisioterapia
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a Eventos del Box
            </li>
            <li className="flex items-center justify-start">
              <img
                src={assetsSvgs.Tick}
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Acceso a Entrenamiento Personalizado
            </li>
          </ul>
          <button className="cursor-pointer mt-4 bg-yellow-400 text-white font-bold py-2 px-4 rounded-4xl hover:bg-yellow-500 transition duration-300">
            Incríbete Ya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Prices;
