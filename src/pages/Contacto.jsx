import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import SuccessModal from "../components/modal";


export default function Contacto() {

    const [mostrarModal, setMostrarModal] = useState(false);

    const [formData, setFormData] = useState({
      nombre: "",
      correo: "",
      telefono: "",
      empresa: "",
      servicio: "",
      mensaje: "",
    });

    const [errors, setErrors] = useState({
      correo: "",
      telefono: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });

      // Limpiar error al corregir el campo
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    };

    const validarEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validarTelefono = (telefono) => {
      // Teléfono opcional
      if (!telefono) return true;

      const limpio = telefono.replace(/\D/g, "");

      return (
        limpio.length === 9 || // 912345678
        limpio.length === 11 || // 56912345678
        limpio.length === 12 // +56912345678
      );
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const nuevosErrores = {
        correo: "",
        telefono: "",
      };

      let formularioValido = true;

      // Validar correo
      if (!validarEmail(formData.correo)) {
        nuevosErrores.correo =
          "Ingrese un correo electrónico válido.";
        formularioValido = false;
      }

      // Validar teléfono
      if (!validarTelefono(formData.telefono)) {
        nuevosErrores.telefono =
          "Ingrese un teléfono válido. Ej: +56 9 1234 5678";
        formularioValido = false;
      }

      setErrors(nuevosErrores);

      if (!formularioValido) {
        return;
      }

      try {
        const response = await fetch("/contacto.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message);
        }

        // Mostrar modal solo si el correo fue enviado
        setMostrarModal(true);

        // Limpiar formulario
        setFormData({
          nombre: "",
          correo: "",
          telefono: "",
          empresa: "",
          servicio: "",
          mensaje: "",
        });

        // Limpiar errores
        setErrors({
          correo: "",
          telefono: "",
        });

      } catch (error) {
        console.error("Error:", error);

        alert(
          "Ocurrió un error al enviar el formulario. Por favor, inténtelo nuevamente."
        );
      }
    };
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-[#8bc34a] leading-tight">
              Contacta a nuestros expertos en compra y venta de empresas
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Estamos disponibles para responder consultas relacionadas con la
              compra, venta, valorización e inversión en empresas.
            </p>
          </div>
        </section>

        {/* Formulario + Información */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Formulario */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Envíanos un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre Completo *
                    </label>

                    <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingrese su nombre"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#8bc34a]"
                    required
                    />
                </div>

                <div>
                    <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="correo@empresa.com"
                    className={`w-full rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 ${
                        errors.correo
                        ? "border border-red-500 focus:ring-red-300"
                        : "border border-slate-300 focus:ring-[#8bc34a]"
                    }`}
                    required
                    />

                    {errors.correo && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.correo}
                    </p>
                    )}
                </div>

                <div>
                    <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    className={`w-full rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 ${
                        errors.telefono
                        ? "border border-red-500 focus:ring-red-300"
                        : "border border-slate-300 focus:ring-[#8bc34a]"
                    }`}
                    />

                    {errors.telefono && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.telefono}
                    </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    Empresa
                    </label>

                    <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de la empresa"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#8bc34a]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    Servicio de Interés
                    </label>

                    <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#8bc34a]"
                    >
                    <option value="">Seleccione una opción</option>
                    <option value="Compra de Empresa">Compra de Empresa</option>
                    <option value="Venta de Empresa">Venta de Empresa</option>
                    <option value="Valorización Empresa">Valorización Empresa</option>
                    <option value="Negociación Startup">Negociación Startup</option>
                    <option value="Cierre de Trato en el Exterior">
                        Cierre de Trato en el Exterior
                    </option>
                    <option value="Otro">Otro</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje *
                    </label>

                    <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Escriba su mensaje..."
                    className="w-full border border-slate-300 rounded-xl px-4 py-3.5 resize-none focus:outline-none focus:ring-2 focus:ring-[#8bc34a]"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#8bc34a] text-white py-4 rounded-xl font-semibold hover:bg-[#7cb342] transition"
                >
                    Enviar Solicitud
                </button>

                </form>

            </div>

            {/* Columna derecha */}
            <div className="flex flex-col gap-6">

              {/* Información de contacto */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8">

                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Información de Contacto
                </h2>

                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <div className="bg-[#8bc34a]/10 p-3 rounded-xl shrink-0">
                      <Mail size={20} className="text-[#8bc34a]" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        Correo Electrónico
                      </p>

                      <p className="text-slate-600 break-all">
                        contacto@invparedones.cl
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#8bc34a]/10 p-3 rounded-xl shrink-0">
                      <Phone size={20} className="text-[#8bc34a]" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        Teléfono
                      </p>

                      <p className="text-slate-600">
                        +56 9 5793 3981
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#8bc34a]/10 p-3 rounded-xl shrink-0">
                      <MapPin size={20} className="text-[#8bc34a]" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        Dirección
                      </p>

                      <p className="text-slate-600">
                        Av. Vitacura 2670
                        <br />
                        Las Condes, Santiago
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* CTA Calendly */}
              <div className="bg-[#8bc34a] rounded-3xl p-6 md:p-8 text-white">

                <Calendar size={36} className="mb-5" />

                <h3 className="text-2xl font-bold mb-4">
                  ¿Prefieres agendar una reunión?
                </h3>

                <p className="text-white/90 leading-relaxed mb-6">
                  Agenda una reunión directamente con nuestro equipo para
                  conversar sobre oportunidades de inversión, compra o venta de
                  empresas.
                </p>

                <a
                  href="https://calendly.com/inversiones-paredones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center bg-white text-[#8bc34a] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Agendar Reunión
                </a>

              </div>

            </div>

          </div>
        </section>
      </main>
        <SuccessModal
        isOpen={mostrarModal}
        onClose={() => setMostrarModal(false)}
        />
      <Footer />
    </>
  );
}