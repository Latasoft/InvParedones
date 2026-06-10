import Header from "../components/Header";
import Footer from "../components/Footer";

import presidente from "../assets/images/presidente.jpg";

export default function GobiernoCorporativo() {
  return (
    <>
      <Header />

      {/* Hero */}
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-10 md:py-10">
                <h1 className="text-[#8bc34a] md:text-5xl font-bold leading-tight">
                    Gobierno Corporativo
                </h1>
            </div>
        </section>


        <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-slate-200"></div>
        </div>

      {/* Presidente */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="flex flex-col items-center self-start">

                <p className="text-xl font-bold text-slate-900 mb-4">
                    Presidente de Inversiones Paredones
                </p>

                <img
                    src={presidente}
                    alt="Nicolás Maraboli"
                    className="w-full max-w-md rounded-3xl shadow-xl object-cover"
                />
                </div>
            

          {/* Información */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Nicolás Maraboli
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

              <p>
                Nicolás Maraboli es empresario y fundador de Latasoft,
                compañía de desarrollo digital enfocada en soluciones
                tecnológicas para empresas, con operaciones en distintos
                mercados.
              </p>

              <p>
                A lo largo de su trayectoria ha participado en el desarrollo
                y operación de negocios en áreas como ecommerce, tecnología,
                retail e industria, combinando experiencia emprendedora con
                formación en gestión de proyectos y finanzas corporativas
                (Yale).
              </p>

              <p>
                Su experiencia incluye el paso por compañías como Cencosud,
                Coca-Cola Andina y Grupo Telepizza, donde adquirió una visión
                práctica sobre la operación y escalamiento de empresas.
              </p>

              <p>
                Proveniente de una familia con tradición empresarial en el
                sector agrícola en Chile, ha desarrollado una mirada cercana
                y concreta del funcionamiento de los negocios, entendiendo
                tanto su dimensión operativa como estratégica.
              </p>

              <p>
                En InvParedones lidera la estrategia y desarrollo de negocios,
                con foco en la compra, venta e inversión en empresas,
                conectando oportunidades reales con inversionistas y
                acompañando procesos de negociación y cierre.
              </p>

              <p>
                Su enfoque se basa en generar transacciones concretas y
                relaciones de largo plazo, aportando una visión práctica,
                comercial y orientada a resultados en cada proceso.
              </p>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}