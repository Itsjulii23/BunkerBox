import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black p-4 font-poppins">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} WodCore. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
