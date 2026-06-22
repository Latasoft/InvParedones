import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import GobiernoCorporativo from "./pages/GobiernoCorporativo";
import Servicios from "./pages/Servicios";
import Eventos from "./pages/Eventos";
import Contacto from "./pages/Contacto";
import PorqueNosotros from "./pages/PorqueNosotros";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/gobierno-corporativo" element={<GobiernoCorporativo />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/porque-nosotros" element={<PorqueNosotros />} />
    </Routes>
  );
}