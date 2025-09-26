import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Ubication = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/019831ae-bcc5-73cf-a709-0ea31bc26e04/style.json?key=tQUkRo7leTZlptkcG3HQ",
      center: [-4.4437, 36.7119],
      zoom: 16,
    });

    new maplibregl.Marker()
      .setLngLat([-4.4437, 36.7119])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML(`
      <div style="
        font-family: 'Segoe UI', sans-serif;
        padding: 10px;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        max-width: 220px;
      ">
        <h3 style="margin: 0 0 8px 0; font-size: 1.1rem; color: #1a202c;">🏋️‍♂️ WodCore Gym</h3>
        <p style="margin: 0; font-size: 0.9rem; color: #4a5568;">
          Tu lugar para entrenar, superarte y transformar tu salud física y mental.
        </p>
      </div>
    `)
      )
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <>
      <h1 className="font-poppins text-3xl md:text-5xl font-extrabold text-gray-800 text-center leading-tight mb-4">
        Encuéntranos Aquí
      </h1>
      <div ref={mapContainer} style={{ width: "100%", height: "20rem" }} />
    </>
  );
};

export default Ubication;
