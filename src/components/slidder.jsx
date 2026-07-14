import { useEffect, useState } from "react";

import logo1 from "../assets/images/logo1.jpg";
import logo2 from "../assets/images/logo2.jpg";
import logo3 from "../assets/images/logo3.jpg";
import logo4 from "../assets/images/logo4.jpg";
import logo5 from "../assets/images/logo5.jpg";
import logo6 from "../assets/images/logo6.jpg";
import logo7 from "../assets/images/logo7.jpg";
import logo8 from "../assets/images/logo8.jpg";

const slides = [
  { image: logo1, nombre: "Empresa 1" },
  { image: logo2, nombre: "Empresa 2" },
  { image: logo3, nombre: "Empresa 3" },
  { image: logo4, nombre: "Empresa 4" },
  { image: logo5, nombre: "Empresa 5" },
  { image: logo6, nombre: "Empresa 6" }, 
  { image: logo7, nombre: "Empresa 7" },
  { image: logo8, nombre: "Empresa 8" }, 
];

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentSlide((prev) => (prev + 1) % slides.length);

        }, 2500);

        return () => clearInterval(interval);

    }, []);

    return (

        <section className="py-10 bg-black">

            <h2 className="text-4xl font-bold text-center text-white">

                Empresas que han confiado en nosotros

            </h2>

            <div className="relative max-w-6xl mx-auto h-56 mt-14">

                <div className="absolute inset-0 flex justify-center items-center gap-8">

                    {[0,1,2,3].map((offset)=>{

                        const item = slides[(currentSlide + offset) % slides.length];

                        return(

                            <div
                                key={offset}
                                className="
                                w-40
                                md:w-52
                                lg:w-64
                                h-full
                                flex
                                items-center
                                justify-center
                                transition-all
                                duration-700
                                "
                            >

                                <img
                                    src={item.image}
                                    alt={item.nombre}
                                    className="
                                    max-h-28
                                    object-contain
                                    "
                                />

                            </div>

                        )

                    })}

                </div>

            </div>

        </section>

    )

}