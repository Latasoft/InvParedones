import Header from "../components/Header";
import Footer from "../components/Footer";

import compraEmpresa from "../assets/images/compra.jpg";
import ventaEmpresa from "../assets/images/venta.jpg";
import valorizacion from "../assets/images/valorizacion.jpg";
import negociacion from "../assets/images/negociacion.jpg";
import cierreExterior from "../assets/images/cierre.jpg";

export default function Servicios() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-10">

          <h1 className="text-[#8bc34a] text-3xl md:text-3xl font-bold leading-tight">
            Servicios de compra, venta y valorización de empresas en Chile
          </h1>

        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* Compra de Empresa */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={compraEmpresa}
            alt="Compra de Empresa"
            className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <span className="text-[#8bc34a] font-semibold uppercase tracking-widest text-sm">
              Servicio
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Compra de Empresa
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              El servicio asesora en todo el proceso de adquirir un negocio en
              funcionamiento. Incluye evaluación, valorización y negociación.
              Su objetivo es asegurar una compra segura y estratégica,
              minimizando riesgos.
            </p>
          </div>
        </div>

        {/* Venta de Empresa */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#8bc34a] font-semibold uppercase tracking-widest text-sm">
              Servicio
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Venta de Empresa
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              El servicio asesora en todo el proceso de poner en el mercado y
              vender un negocio. Incluye valorización, preparación de la
              empresa y búsqueda de compradores. Su objetivo es lograr una venta
              rápida, segura y al mejor precio posible.
            </p>
          </div>

          <img
            src={ventaEmpresa}
            alt="Venta de Empresa"
            className="order-1 lg:order-2 w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* Valorización Empresa */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={valorizacion}
            alt="Valorización Empresa"
            className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <span className="text-[#8bc34a] font-semibold uppercase tracking-widest text-sm">
              Servicio
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Valorización Empresa
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              El servicio consiste en determinar el valor real de un negocio
              mediante análisis financieros, operativos y de mercado. Permite
              tomar decisiones estratégicas con información clara y objetiva,
              ya sea para vender, comprar o crecer.
            </p>
          </div>
        </div>

        {/* Negociación Startup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#8bc34a] font-semibold uppercase tracking-widest text-sm">
              Servicio
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Negociación Startup
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              El servicio asesora en la definición y cierre de acuerdos con
              inversionistas o socios. Incluye la estructuración de la
              propuesta, valoración y condiciones de inversión. Su objetivo es
              lograr acuerdos favorables que impulsen el crecimiento sin perder
              control del negocio.
            </p>
          </div>

          <img
            src={negociacion}
            alt="Negociación Startup"
            className="order-1 lg:order-2 w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* Cierre de Trato en el Exterior */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={cierreExterior}
            alt="Cierre de Trato en el Exterior"
            className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <span className="text-[#8bc34a] font-semibold uppercase tracking-widest text-sm">
              Servicio
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Cierre de Trato en el Exterior
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              El servicio consiste en representar al cliente mediante un
              vendedor experto que viaja para negociar y concretar acuerdos
              internacionales. Incluye preparación estratégica, manejo de la
              negociación y cierre presencial. Su objetivo es maximizar
              resultados y asegurar acuerdos favorables en terreno.
            </p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Agendemos una Reunión
          </h2>

          <a
            href="https://calendly.com/inversiones-paredones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#8bc34a] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#7cb342] transition"
          >
            Agendemos una Reunión
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}