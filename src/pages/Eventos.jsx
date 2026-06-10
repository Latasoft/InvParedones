import Header from "../components/Header";
import Footer from "../components/Footer";

import años from "../assets/images/100años.jpeg";
import g from "../assets/images/g100.jpg";
import proChile from "../assets/images/proChile.jpg";
import tim from "../assets/images/tim.jpg";
import aws from "../assets/images/aws.jpg";
import fortalecePyme from "../assets/images/fortalecePyme.jpg";
import summit from "../assets/images/summit.jpg";
import demoDay from "../assets/images/demoDay.jpg";
import startupHouse from "../assets/images/startupHouse.jpg";
import economiaUVM from "../assets/images/economiaUVM.jpg";

export default function Eventos() {
const eventos = [
  {
    titulo: "Evento 100 Años Relaciones Diplomaticas y Comerciales Chile - Estados Unidos",
    imagen: años,
    descripcion:
      "Junto a varios emprendedores, empresarios, inversionistas y directores de organizaciones."
  },
  {
    titulo: "Evento G100 Relaciones Chile - Estados Unidos",
    imagen: g,
    descripcion:
      "Junto a Profesor Mora (Economia UAI y Kris Bourngham (Fundador de WOM) en el marco de aniversario de 100 años de relaciones bilaterales Chile - Estados Unidos."
  },
  {
    titulo: "Evento ProChile Rondas de Negocios Latinoamérica 27# Encuentro Empresarial Viña Del Mar 2023",
    imagen: proChile,
    descripcion:
      "Se realizaron rondas de negocios con empresas de Peru, Colombia y Bolivia en representacion de nuestro cliente quien es una reconocida empresa de servicios informaticos B2B en Chile para el servicio Cierre de Tratos para empresas en el exterior."
  },
  {
    titulo: "TIM 2023 Incubadora Chrysalis PUCV",
    imagen: tim,
    descripcion:
      "Asistencia al programa TIM 2023 en representación de nuestros clientes una importante startup del rubro de la construccion para definir valorizacion de la startup y futuras negociaciones con inversionistas."
  },
  {
    titulo: "AWS Community Day Chile 2023",
    imagen: aws,
    descripcion:
      "Asistencia al principal evento sobre ciberseguridad de santiago impartido por la multinacional AWS para gerentes y tomadores de decisiones de la industria TI en Chile."
  },
  {
    titulo: "Evento FortalecePyme Viña Del Mar 2023",
    imagen: fortalecePyme,
    descripcion:
      "Asistencia al principal evento regional para emprendimientos y pymes de la quinta region en chile para representacion de nuestros clientes."
  },
  {
    titulo: "Summit ASIVA 2023",
    imagen: summit,
    descripcion:
      "Asistencia a uno de los eventos mas destacados del año sobre innovacion empresarial y generacion de redes de contacto para emprendedores en la zona central de Chile, fuimos por representación de nuestros clientes."
  },
  {
    titulo: "Demo Day Draper StartupHouse 2023",
    imagen: demoDay,
    descripcion:
      "Asistencia a uno de los Demos Days mas esperados por inversionistas y fondos de inversion en chile, donde se analizan diferentes startups y donde se cierran rondas de inversion y alianzas comerciales entre inversionistas, startups y grupos empresariales"
  },
  {
    titulo: "Demo Day Draper StartupHouse 2024",
    imagen: startupHouse,
    descripcion:
      "Asistencia a uno de los Demos Days mas esperados por inversionistas y fondos de inversion en Chile, impartido por la reconocida casa Draper fundada por el Sr. Tim Draper en Silicon Valley, principal inversionista de Facebook, Yahoo, Hotmail, Bitcoin entre otras reconocidas multinacionales, donde se analizan diferentes startups y donde se cierran rondas de inversion y alianzas comerciales entre inversionistas, fondos de venture capital, startups y grupos empresariales."
  },
  {
    titulo: "Evento de Economia Circular UVM Viña Del Mar 2023",
    imagen: economiaUVM,
    descripcion:
      "Asistimos al evento de Economia Circular donde se tuvo momento de degustacion de vinos de la region, momento de conexiones empresariales y charlas sobre economia circular con destacadas empresas como Preunic, Sopraval y Anglo American."
  }
];

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#8bc34a]">
            Eventos y rondas de negocios
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Nuestra experiencia llevando a cabo conexiones y cierres de negocios a lo largo del tiempo.
            </p>
          </div>
          
        </section>

        {/* Eventos */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento, index) => (
              <article
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={evento.imagen}
                    alt={evento.titulo}
                    className="w-full h-72 object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {evento.titulo}
                  </h2>

                  <p className="text-slate-600 leading-relaxed">
                    {evento.descripcion}
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