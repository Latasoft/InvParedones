"use client";  

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import tecnologia from "../assets/images/tecnologia.jpg";
import turismo from "../assets/images/turismo.jpg";
import inmobiliario from "../assets/images/inmobiliario.jpg";
import retail from "../assets/images/retail.jpg";
import agricultura from "../assets/images/agricultura.jpg";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

import surmodel from "../assets/images/surmodel.jpg";
import BuildSync from "../assets/images/buildsync.jpg";
import Latasoft from "../assets/images/latasoft.jpg";

import Slider from "../components/slidder";
import SliderOrganizaciones from "../components/slidderOrganizaciones";

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

const casosExito = [
  {
    id: 1,
    empresa: "Surmodel",
    imagen: surmodel,

    titulo: "Búsqueda de inversionistas y expansión comercial",

    descripcion:
      "Apoyamos a Surmodel en la búsqueda de inversionistas, la postulación a 500 Startups Latam y la generación de reuniones con potenciales socios estratégicos. Se establecieron vínculos con inversionistas de Perú y Emiratos Árabes Unidos, fortaleciendo su proyección internacional.", 
    desafio:
      "Surmodel buscaba acelerar su crecimiento mediante la incorporación de inversionistas estratégicos y la generación de alianzas comerciales que impulsaran la expansión de su plataforma de búsqueda de trabajadores freelance y promotoras.",
    solucion:
      "Desde InvParedones lideramos la gestión de búsqueda de inversionistas y potenciales clientes corporativos. Se establecieron conversaciones con inversionistas de Perú y Emiratos Árabes Unidos, se coordinó la postulación de la startup a 500 Startups Latam y se gestionaron reuniones con potenciales inversionistas y empresas para explorar oportunidades de inversión y alianzas estratégicas.",
    resultado:
      "Surmodel amplió su red de contactos con actores relevantes del ecosistema de emprendimiento e inversión internacional, participó en un proceso de aceleración de alto nivel y logró generar oportunidades concretas de inversión y desarrollo comercial mediante reuniones estratégicas con empresas e inversionistas.",
    tags: [
      "Startups",
      "Inversión",
      "Internacionalización"
    ]
  },

  {
    id: 2,
    empresa: "BuildSync",
    imagen: BuildSync,
    titulo: "Conexión con el ecosistema startup e industria",
    descripcion: "Impulsamos la vinculación de BuildSync con el ecosistema de innovación chileno mediante Chrysalis PUCV y Draper Startup House, además de generar conexiones con empresas como Cementos Melón, Masisa y Anglo American para explorar oportunidades de negocio.",
    desafio: "BuildSync, una startup enfocada en tecnología RFID para la detección de tuberías y fugas en proyectos de construcción e infraestructura, buscaba fortalecer su acceso al ecosistema de innovación, atraer inversionistas y generar vínculos con potenciales clientes corporativos del sector.",
    solucion: "Desde InvParedones lideramos la búsqueda de inversionistas, la conexión con el ecosistema startup chileno y la vinculación con empresas estratégicas. Se gestionó el ingreso de BuildSync a la incubadora Chrysalis de la Pontificia Universidad Católica de Valparaíso, su incorporación al ecosistema de Draper Startup House en Viña del Mar y reuniones con compañías del sector como Cementos Melón, Masisa y Anglo American para explorar oportunidades de colaboración y desarrollo comercial.",
    resultado: "BuildSync fortaleció su posicionamiento dentro del ecosistema de innovación en Chile, amplió su red de contactos con actores relevantes de la industria y estableció relaciones con empresas líderes del sector. Actualmente, sus fundadores desarrollan proyectos de construcción e infraestructura entre el sur de Chile y Brasil, consolidando la proyección internacional de la iniciativa.",
    tags: [
      "Startups",
      "Innovación",
      "Conexión con la industria"
    ]
  },

 {
    id: 3,
    empresa: "Latasoft",
    imagen: Latasoft,
    titulo: "Internacionalización y desarrollo de negocios",
    descripcion: "Apoyamos la expansión de Latasoft mediante rondas de negocios internacionales, integración al ecosistema de innovación y conexiones con empresas de Europa, Asia y Medio Oriente. El proceso culminó con una oferta de adquisición por parte de inversionistas de India y Perú, la cual fue rechazada por la empresa.",
    desafio: "Latasoft buscaba acelerar su crecimiento comercial, fortalecer su presencia en el ecosistema de innovación y expandir sus oportunidades de negocio tanto en Chile como en mercados internacionales.",
    solucion: "Desde InvParedones impulsamos la búsqueda de clientes, la integración al ecosistema de innovación y la generación de vínculos estratégicos con organizaciones y empresas nacionales e internacionales. Se gestionó la participación en rondas de negocios organizadas por ProChile y la Cámara Regional del Comercio de Valparaíso (CRCP), estableciendo reuniones con empresas de Perú, Bolivia, Colombia y México. Asimismo, se facilitó el ingreso a cámaras de comercio latinoamericanas y se promovieron conexiones con compañías internacionales como Latecoere (Francia), JR Metals (Japón) y Quiddiya City (Arabia Saudita). Además, se coordinó el acercamiento con potenciales compradores de capitales de India y Perú interesados en adquirir la empresa.",
    resultado: "Latasoft consolidó una amplia red internacional de contactos comerciales e institucionales, fortaleció su posicionamiento dentro del ecosistema de innovación y abrió oportunidades de colaboración con organizaciones de distintos países. Como resultado de este proceso, la empresa recibió una propuesta de adquisición por parte de inversionistas de India y Perú, la cual fue evaluada y finalmente rechazada por decisión de sus fundadores, manteniendo la continuidad de su estrategia de crecimiento independiente.",
    tags: ["Desarrollo de software", "Internacionalización", "Negocios internacionales"]
  }
];



export default function PorqueNosotros() {
  const [casoSeleccionado, setCasoSeleccionado] = useState(null);
  return (
    <>
      <Header />
      <Slider />

      <main className="bg-gradient-to-b from-white to-slate-50">

        {/* Hero */}
        <section className="border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-center text-5xl md:text-4xl font-bold text-[#8bc34a] max-w-4xl leading-tight mx-auto">
            ¿Por qué elegir InvParedones para compra y venta de empresas?
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

          {/* Casos de éxito */}
          <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="text-center mb-14">

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Casos de éxito
              </h2>

              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Conoce algunos proyectos donde hemos participado generando oportunidades
                de inversión, expansión comercial y desarrollo estratégico para empresas
                en distintos sectores.
              </p>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {casosExito.map((caso) => (

                <article
                  key={caso.id}
                  className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >

                  {/* Imagen */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={caso.imagen}
                      alt={caso.empresa}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">

                      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#8bc34a] bg-white/90 px-3 py-1 rounded-full mb-3">
                        Caso de éxito
                      </span>

                      <h3 className="text-3xl font-bold text-white">
                        {caso.empresa}
                      </h3>

                    </div>

                  </div>

                  {/* Contenido */}
                  <div className="p-7">

                    <h4 className="text-xl font-bold text-slate-900 leading-snug">
                      {caso.titulo}
                    </h4>

                    <p className="mt-4 text-slate-600 leading-relaxed line-clamp-8">
                      {caso.descripcion}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">

                      {caso.tags.map((tag) => (

                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#8bc34a]/10 text-[#6fa126] text-sm font-medium"
                        >
                          {tag}
                        </span>

                      ))}

                    </div>

                    {/* Botón */}
                    <button
                      onClick={() => setCasoSeleccionado(caso)}
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-[#8bc34a] hover:gap-4 transition-all duration-300"
                    >

                      Ver caso completo

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </button>

                  </div>

                </article>

              ))}

            </div>

          </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Conoce más sobre nuestra experiencia en
              {" "}
              <Link to="/quienes-somos" className="text-[#8bc34a] font-semibold underline">
                quiénes somos
              </Link>
              {" "}
              o revisa nuestros
              {" "}
              <Link to="/servicios" className="text-[#8bc34a] font-semibold underline">
                servicios de compra y venta de empresas en Chile
              </Link>,
              donde detallamos nuestro enfoque en valorización, negociación e inversión en empresas.
            </p>

          </div>
        </section>

      </main>

      {
casoSeleccionado && (

<div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-5">

    <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center border-b p-8">

            <h2 className="text-3xl font-bold">
                Caso de éxito: {casoSeleccionado.empresa}
            </h2>

            <button onClick={() => setCasoSeleccionado(null)}>
                <X />
            </button>

        </div>

        <div className="p-8 space-y-10">

            <section>

                <h3 className="text-2xl font-bold mb-3 text-[#8bc34a]">
                    Desafío
                </h3>

                <p className="text-slate-600 leading-relaxed">
                    {casoSeleccionado.desafio}
                </p>

            </section>

            <section>

                <h3 className="text-2xl font-bold mb-3 text-[#8bc34a]">
                    Solución
                </h3>

                <p className="text-slate-600 leading-relaxed">
                    {casoSeleccionado.solucion}
                </p>

            </section>

            <section>

                <h3 className="text-2xl font-bold mb-3 text-[#8bc34a]">
                    Resultado
                </h3>

                <p className="text-slate-600 leading-relaxed">
                    {casoSeleccionado.resultado}
                </p>

            </section>

        </div>

    </div>

</div>

)}
      <SliderOrganizaciones />
      <Footer />
    </>
  );
}