import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Logo.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo y slogan*/}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-auto"
              />
            </Link>

            <div className="h-10 w-px bg-slate-300"></div>
            <Link to="/" >
              <span className="text-xs uppercase">
              Concretamos oportunidades reales
            </span>
            </Link>

          </div>

          {/* Menú Desktop */}
          <nav>
            <ul className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
              <Link
                to="/"
                className="hover:text-[#8bc34a] transition"
              >
                Inicio
              </Link>

              <Link
                to="/sobre-nosotros"
                className="hover:text-[#8bc34a] transition"
              >
                Sobre Nosotros
              </Link>

              <Link
                to="/gobierno-corporativo"
                className="hover:text-[#8bc34a] transition"
              >
                Gobierno Corporativo
              </Link>

              <Link
                to="/servicios"
                className="hover:text-[#8bc34a] transition"
              >
                Servicios
              </Link>

              <Link
                to="/eventos"
                className="hover:text-[#8bc34a] transition"
              >
                Eventos
              </Link>

              <Link
                to="/contacto"
                className="hover:text-[#8bc34a] transition"
              >
                Contacto
              </Link>
            </ul>
          </nav>

          {/* Botón Hamburguesa */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menú Móvil */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav>
              <ul className="flex flex-col gap-4 text-slate-700 font-medium">

                <li>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                </li>

                <li>
                  <Link
                    to="/sobre-nosotros"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sobre Nosotros
                  </Link>
                </li>

                <li>
                  <Link
                    to="/gobierno-corporativo"
                    onClick={() => setMenuOpen(false)}
                  >
                    Gobierno Corporativo
                  </Link>
                </li>

                <li>
                  <Link
                    to="/eventos"
                    onClick={() => setMenuOpen(false)}
                  >
                    Eventos
                  </Link>
                </li>

                <li>
                  <Link
                    to="/servicios"
                    onClick={() => setMenuOpen(false)}
                  >
                    Servicios
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contacto"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacto
                  </Link>

                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}