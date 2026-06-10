import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/images/Logo.jpeg";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-white border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Contenido principal */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Marca */}
          {/* Logo */}

        <div className="flex items-center gap-4 mb-6">
            <img
              src={logo}
              alt="Logo"
              className="h-40 w-auto"
            />
            <div className="h-8 w-px bg-slate-300"></div>
            <span className="text-s uppercase">
              Concretamos oportunidades reales
            </span>
          </div>
          <div>
            
            <h2 className="text-3xl font-bold text-slate-900">
              Inv<span className="text-[#8bc34a]">Paredones</span>
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed max-w-sm">
              Firma especializada en la compra, venta e inversión en empresas,
              conectando oportunidades reales con inversionistas estratégicos.
            </p>

            <a
              href="https://calendly.com/inversiones-paredones"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-[#8bc34a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7cb342] transition"
            >
              Agendar Reunión
              <ArrowRight size={18} />
            </a>
          </div>

         
          {/* Contacto */}
          <div>
            <h3 className="font-bold text-slate-900 mb-5">
              Contacto
            </h3>

            <ul className="space-y-5">

              <li>
                <a
                  href="mailto:inversiones.paredones@gmail.com"
                  className="flex items-start gap-3 text-slate-600 hover:text-[#8bc34a] transition"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span>inversiones.paredones@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+56957933981"
                  className="flex items-start gap-3 text-slate-600 hover:text-[#8bc34a] transition"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span>+56 9 5793 3981</span>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.google.com/?q=Av.+Vitacura+2670,+Las+Condes,+Santiago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-600 hover:text-[#8bc34a] transition"
                >
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>
                    Av. Vitacura 2670
                    <br />
                    Las Condes, Santiago de Chile
                  </span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-slate-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <span className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} InvParedones. Todos los derechos reservados.
          </span>

          <span className="text-sm text-slate-500">
            Desarrollado por{" "}
            <span className="font-semibold text-black">
              Latasoft
            </span>
          </span>

        </div>

      </div>
    </footer>
  );
}