import Header from "../components/Header";
import Footer from "../components/Footer";

import tecnologia from "../assets/images/tecnologia.jpg";
import turismo from "../assets/images/turismo.jpg";
import inmobiliario from "../assets/images/inmobiliario.jpg";
import retail from "../assets/images/retail.jpg";
import agricultura from "../assets/images/agricultura.jpg";

const rubros = [
  {
    numero: "01",
    titulo: "Tecnología y software",
    imagen: tecnologia,
    descripcion:
      "Experiencia directa en desarrollo y gestión de soluciones tecnológicas, combinada con participación en procesos de valorización y negociación de empresas del sector, facilitando oportunidades de inversión y cierre de acuerdos.",
  },
  {
    numero: "02",
    titulo: "Construcción e inmobiliario",
    imagen: inmobiliario,
    descripcion:
      "Formación en ingeniería en construcción y participación en proyectos junto a constructoras y organismos públicos, lo que nos permite evaluar, valorizar y negociar activos y empresas con base técnica y criterio de inversión.",
  },
  {
    numero: "03",
    titulo: "Hospitalidad y turismo",
    imagen: turismo,
    descripcion:
      "Experiencia en gestión de servicios en entornos internacionales, incluyendo operación en Asia, lo que nos permite comprender el sector y participar en la estructuración y negociación de oportunidades de inversión.",
  },
  {
    numero: "04",
    titulo: "Consumo masivo y retail",
    imagen: retail,
    descripcion:
      "Experiencia laboral directa en empresas del sector, participando en áreas de operación, logística y desarrollo de negocios, aportando visión práctica en procesos de análisis, valorización y negociación.",
  },
  {
    numero: "05",
    titulo: "Agricultura y agroindustria",
    imagen: agricultura,
    descripcion:
      "Provenimos de familias vinculadas al sector agrícola, lo que nos entrega un conocimiento real del rubro. Esta cercanía nos permite evaluar, valorizar y negociar oportunidades con una visión de largo plazo y entendimiento operativo.",
  },
];
export default function PorqueNosotros() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-white to-slate-50">

        {/* Hero */}
        <section className="border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-center text-5xl md:text-6xl font-bold text-[#8bc34a] max-w-4xl leading-tight mx-auto">
              ¿Por qué nosotros?
            </h1>

          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10">

          <div className="text-center mb-14">

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Experiencia en sectores estratégicos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {rubros.map((rubro) => (
              <article
                key={rubro.numero}
                className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">

                  <img
                    src={rubro.imagen}
                    alt={rubro.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <span
                    aria-hidden="true"
                    className="absolute top-5 right-5 text-6xl font-black text-white/60"
                  >
                    {rubro.numero}
                  </span>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-1 bg-[#8bc34a] rounded-full mb-4" />

                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {rubro.titulo}
                    </h3>
                  </div>

                </div>

                {/* Contenido */}
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed">
                    {rubro.descripcion}
                  </p>
                </div>

              </article>
            ))}
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}