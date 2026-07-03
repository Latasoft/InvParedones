import Header from "../components/Header";
import Footer from "../components/Footer";
import inversiones from "../assets/images/Inversiones.jpeg";
import vision from "../assets/images/vision.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-white to-slate-50">

        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-6 pt-8 md:pt-12 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Compra y Venta de Empresas
            <span className="block text-[#8bc34a]">
              en Chile
            </span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-slate-700">
            InvParedones
          </p>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                InvParedones es una firma especializada en la compra, venta e inversión en empresas en Chile,
                conectando a dueños de negocios con inversionistas y oportunidades reales. 
                Conoce más sobre <Link to="/servicios" className="text-[#8bc34a] font-semibold underline">nuestros servicios</Link>  
                o revisa <Link to="/porque-nosotros" className="text-[#8bc34a] font-semibold underline">por qué elegirnos</Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://calendly.com/inversiones-paredones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-[#8bc34a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#7cb342] transition"
                >
                  Agendar Reunión
                </a>
                
                  <Link
                    to="/contacto"
                    className="text-center border border-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacto
                  </Link>

              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={inversiones}
                alt="Compra y venta de empresas en Chile"
                className="w-full max-w-xl rounded-3xl shadow-2xl object-cover hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* ── Visión ── */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block bg-[#8bc34a]/10 text-[#8bc34a] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Nuestra Visión
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Construimos el futuro de las
                <span className="block text-[#8bc34a]">
                  inversiones empresariales
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Ser una firma referente en la compra y venta de empresas en Chile y
                Latinoamérica, reconocida por conectar oportunidades reales, generar
                confianza en cada proceso y concretar transacciones de alto valor de
                manera eficiente, transparente y profesional.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={vision}
                alt="Asesoría para compra y venta de empresas"
                className="w-full max-w-xl rounded-3xl shadow-2xl object-cover hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </section>

{/* Misión */}
<section className="bg-[#8bc34a] py-20 md:py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Encabezado */}
    <div className="max-w-3xl mb-16 md:mb-24">

      <span className="inline-block border border-white/30 text-white px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6">
        Nuestra Misión
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
        Conectamos empresas,
        <span className="block text-slate-100">
          inversionistas y oportunidades.
        </span>
      </h2>

      <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
        Facilitamos la compra y venta de empresas mediante procesos
        transparentes, estratégicos y orientados a resultados,
        acompañando a nuestros clientes desde la valorización del negocio
        hasta el cierre exitoso de cada transacción.
      </p>

    </div>

    {/* Tarjetas */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Tarjeta 1 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">

        <span
          aria-hidden="true"
          className="absolute top-5 right-6 text-7xl font-black text-slate-100"
        >
          01
        </span>

        <div className="w-12 h-1 bg-[#8bc34a] rounded-full mb-6"></div>

        <h3 className="text-slate-900 font-bold text-xl mb-4">
          Transacciones reales
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Nos enfocamos en concretar operaciones eficientes y seguras,
          transformando oportunidades en acuerdos exitosos.
        </p>

      </div>

      {/* Tarjeta 2 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">

        <span
          aria-hidden="true"
          className="absolute top-5 right-6 text-7xl font-black text-slate-100"
        >
          02
        </span>

        <div className="w-12 h-1 bg-[#8bc34a] rounded-full mb-6"></div>

        <h3 className="text-slate-900 font-bold text-xl mb-1">
          Acompañamiento 
        </h3>
        <h3 className="text-slate-900 font-bold text-xl mb-4">
          Integral 
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Participamos activamente en cada etapa del proceso,
          brindando apoyo estratégico y asesoramiento especializado.
        </p>

      </div>

      {/* Tarjeta 3 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">

        <span
          aria-hidden="true"
          className="absolute top-5 right-6 text-7xl font-black text-slate-100"
        >
          03
        </span>

        <div className="w-12 h-1 bg-[#8bc34a] rounded-full mb-6"></div>

        <h3 className="text-slate-900 font-bold text-xl mb-4">
          Conexión estratégica
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Vinculamos empresarios e inversionistas adecuados,
          generando relaciones de valor y oportunidades sostenibles.
        </p>

      </div>

    </div>

  </div>
</section>

<hr className="max-w-7xl mx-auto border-slate-200" />
<section className="py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
      Descubre qué nos diferencia
    </h2>

    <Link
      to="/porque-nosotros"
      className="inline-flex items-center mt-8 bg-[#8bc34a] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#7cb342] transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      ¿Por qué nosotros?
    </Link>

  </div>
</section>

      </main>
      <Footer />
    </>
  );
}
