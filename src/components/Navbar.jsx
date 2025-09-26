import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Íconos del menú
import { assetsPics } from "../assets/assets";

const Navbar = ({
  onScrollToHome,
  onScrollToTarifas,
  onScrollToCrossfit,
  onScrollToTeam,
  onScrollToUbication,
  onScrollToContact,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <section
        id="navbar"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="flex justify-between items-center bg-[#EAE9E4] text-black p-4 font-poppins relative"
      >
        <div id="logo">
          <img src={assetsPics.Logo} alt="WodCore" className="w-20" />
        </div>
        <div id="nav-links" className="hidden md:block">
          <ul className="flex gap-10 items-center">
            <li
              onClick={() => {
                onScrollToHome();
                closeMenu();
              }}
              className="cursor-pointer text-[1.4rem] font-bold text-yellow-400 hover:scale-110 transition duration-300"
            >
              Inicio
            </li>
            <li
              onClick={() => {
                onScrollToCrossfit();
                closeMenu();
              }}
              className="cursor-pointer text-[1.4rem] font-bold hover:text-yellow-400 hover:scale-110 transition duration-300"
            >
              Crossfit
            </li>
            <li
              onClick={() => {
                onScrollToTeam();
                closeMenu();
              }}
              className="cursor-pointer text-[1.4rem] font-bold hover:text-yellow-400 hover:scale-110 transition duration-300"
            >
              Equipo
            </li>
            <li
              onClick={() => {
                onScrollToTarifas();
                closeMenu();
              }}
              className="cursor-pointer text-[1.4rem] font-bold hover:text-yellow-400 hover:scale-110 transition duration-300"
            >
              Tarifas
            </li>
            <li
              onClick={() => {
                onScrollToUbication();
                closeMenu();
              }}
              className="cursor-pointer text-[1.4rem] font-bold hover:text-yellow-400 hover:scale-110 transition duration-300"
            >
              Ubicación
            </li>
            <li
              onClick={() => {
                onScrollToContact();
                closeMenu();
              }}
              className="cursor-pointer text-[1.4rem] font-bold hover:text-yellow-400 hover:scale-110 transition duration-300"
            >
              Contacto
            </li>
          </ul>
        </div>

        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#EAE9E4] shadow-md md:hidden z-40">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li
                onClick={() => {
                  onScrollToHome();
                  closeMenu();
                }}
                className="text-[1.2rem] font-bold text-yellow-400"
              >
                Inicio
              </li>
              <li
                onClick={() => {
                  onScrollToCrossfit();
                  closeMenu();
                }}
                className="text-[1.2rem] font-bold"
              >
                Crossfit
              </li>
              <li
                onClick={() => {
                  onScrollToTeam();
                  closeMenu();
                }}
                className="text-[1.2rem] font-bold"
              >
                Equipo
              </li>
              <li
                onClick={() => {
                  onScrollToTarifas();
                  closeMenu();
                }}
                className="text-[1.2rem] font-bold"
              >
                Tarifas
              </li>
              <li
                onClick={() => {
                  onScrollToUbication();
                  closeMenu();
                }}
                className="text-[1.2rem] font-bold"
              >
                Ubicación
              </li>
              <li
                onClick={() => {
                  onScrollToContact();
                  closeMenu();
                }}
                className="text-[1.2rem] font-bold"
              >
                Contacto
              </li>
            </ul>
          </div>
        )}
      </section>

      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src={assetsPics.Home2}
          alt="Fondo"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center bg-black/40">
          <h1 className="text-4xl font-bold mb-2">
            Bienvenido <strong className="text-yellow-400">WodCore</strong>
          </h1>
          <p className="text-xl">Tu sitio de Crossfit de confianza</p>
        </div>
      </section>
    </>
  );
};

export default Navbar;
