import { useEffect, useState } from "react";

import organizacion1 from "../assets/images/organizacion1.jpg";
import organizacion2 from "../assets/images/organizacion2.jpg";
import organizacion3 from "../assets/images/organizacion3.jpg";
import organizacion4 from "../assets/images/organizacion4.jpg";
import organizacion5 from "../assets/images/organizacion5.jpg";
import organizacion6 from "../assets/images/organizacion6.jpg";
import organizacion7 from "../assets/images/organizacion7.jpg";
import organizacion8 from "../assets/images/organizacion8.jpg";
import organizacion9 from "../assets/images/organizacion9.jpg";
import organizacion10 from "../assets/images/organizacion10.jpg";
import organizacion11 from "../assets/images/organizacion11.jpg";
import organizacion12 from "../assets/images/organizacion12.jpg";
import organizacion13 from "../assets/images/organizacion13.jpg";
import organizacion14 from "../assets/images/organizacion14.jpg";
import organizacion15 from "../assets/images/organizacion15.jpg";




const slides = [
    { image: organizacion1, nombre: "organizacion 1" },
    { image: organizacion2, nombre: "organizacion 2" },
    { image: organizacion3, nombre: "organizacion 3" },
    { image: organizacion4, nombre: "organizacion 4" },
    { image: organizacion5, nombre: "organizacion 5" },
    { image: organizacion6, nombre: "organizacion 6" },
    { image: organizacion7, nombre: "organizacion 7" },
    { image: organizacion8, nombre: "organizacion 8" },
    { image: organizacion9, nombre: "organizacion 9" },
    { image: organizacion10, nombre: "organizacion 10" },
    { image: organizacion11, nombre: "organizacion 11" },
    { image: organizacion12, nombre: "organizacion 12" },
    { image: organizacion13, nombre: "organizacion 13" },
    { image: organizacion14, nombre: "organizacion 14" },
    { image: organizacion15, nombre: "organizacion 15" }
];

export default function SliderOrganizaciones() {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentSlide((prev) => (prev + 1) % slides.length);

        }, 2500);

        return () => clearInterval(interval);

    }, []);

    return (

        <section className="py-10 bg-white">

            <h2 className="text-4xl font-bold text-center text-gray-800">

                Organizaciones que confían en nosotros

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