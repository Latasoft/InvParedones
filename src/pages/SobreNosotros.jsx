import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SobreNosotros() {
  return (
    <>
      <Header />

      <main>

        {/* Hero */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-20">

            <span className="inline-block border border-[#8bc34a] text-black px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Sobre Nosotros
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-[#8bc34a] max-w-4xl leading-tight">
              Quiénes Somos
            </h1>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

              <p>
                En InvParedones nos especializamos en la compra, venta e
                inversión en empresas, conectando a dueños de negocios con
                inversionistas y oportunidades reales en el mercado chileno.
              </p>

              <p>
                Entendemos que cada empresa tiene una historia, un valor y un
                potencial único. Por eso, nuestro enfoque combina análisis
                estratégico, experiencia operativa y una visión práctica de los
                negocios, permitiendo estructurar procesos claros y efectivos
                para cada cliente.
              </p>

              <p>
                Acompañamos a nuestros clientes en todas las etapas del proceso,
                desde la evaluación y valorización de la empresa, hasta la
                búsqueda de contrapartes, negociación y cierre de la
                transacción.
              </p>

            </div>

          </div>
        </section>

        {/* Valores */}
        <section className="bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-20">

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Objetivo
                </h3>

                <p className="text-slate-600 leading-relaxed">
                    Generar acuerdos sólidos, transparentes y alineados con los intereses de cada parte.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Más que intermediarios
                </h3>

                <p className="text-slate-600 leading-relaxed">
                    Somos un puente entre oportunidades y resultados concretos
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Mirada internacional
                </h3>

                <p className="text-slate-600 leading-relaxed">
                 Que permite identificar y conectar oportunidades más allá de lo local
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Expertise */}
        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                Expertos en Compra y Venta de Empresas
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Acompañamos a dueños de negocios e inversionistas en procesos de compra, 
                venta y evaluación de empresas en Chile.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Nuestro enfoque combina análisis estratégico, experiencia en
                negocios y gestión comercial, permitiendo estructurar
                oportunidades reales y concretar transacciones de forma
                eficiente.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mt-6">
                Trabajamos con empresas de distintos rubros, adaptando cada
                proceso a las necesidades de nuestros clientes, con una mirada
                práctica y orientada a resultados.
              </p>
            </div>

            <div className="bg-[#8bc34a] rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Visión Empresarial
              </h3>

              <p className="text-lg leading-relaxed text-white/90">
                InvParedones nace con una visión empresarial de largo plazo,
                combinando experiencia en tecnología, operación de negocios y
                entornos corporativos, junto con una mirada internacional que
                permite identificar y conectar oportunidades más allá de lo
                local.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Creemos en los negocios reales, en las relaciones de confianza
                y en la importancia de ejecutar con claridad.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}