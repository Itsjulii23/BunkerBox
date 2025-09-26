import React from "react";

const VideoCrossfit = () => {
  return (
    <section id="videoCrossfit" className="grid place-items-center p-8">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
        <div className="text-center">
          <h1 className="font-poppins text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Descubre el <span className="text-yellow-400">CrossFit</span> en
            Acción
          </h1>
          <p className="text-gray-600 text-lg">
            El CrossFit combina fuerza, resistencia y técnica en entrenamientos
            funcionales de alta intensidad. Mejora tu forma física, desafía tus
            límites y forma parte de una comunidad que se supera día a día.
          </p>
        </div>

        <div id="videoContainer" className="flex justify-center">
          <iframe
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/1Q18EOZfTJQ"
            title="Video CrossFit"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoCrossfit;
