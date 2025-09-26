import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    plan: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario enviado:", formData);

    setFormSubmitted(true);

    setFormData({
      plan: "",
      nombre: "",
      apellidos: "",
      telefono: "",
      email: "",
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="p-8 bg-gray-100 mt-6">
      <div id="headerForm" className="">
        <h1 className="font-poppins text-3xl md:text-5xl font-extrabold text-gray-800 text-center leading-tight mb-4">
          Contacta con nosotros
        </h1>
      </div>

      {formSubmitted && (
        <div className="max-w-sm mx-auto bg-green-100 text-green-700 p-4 rounded-md mb-4 text-center font-semibold shadow">
          ¡Formulario enviado con éxito!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 max-w-sm mx-auto rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Selecciona un plan</option>
            <option value="1">Plan Rookie</option>
            <option value="2">Plan Warrior</option>
            <option value="3">Plan Beast</option>
          </select>
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="Apellidos"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono de contacto"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-3 bg-yellow-500 text-white text-sm font-medium uppercase rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
