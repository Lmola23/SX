import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar/navbar.jsx";
import Home from "./Pages/Home/home.jsx";
import Footer from "./Componentes/Footer/footer.jsx";
import Servicio from './Pages/Servicios/Servicio.jsx';
import Producto from './Pages/Productos/Producto.jsx';
import Reservacion from './Pages/Reservaciones/Reservacion.jsx';
import KeniaBlog from './Pages/KeniaBlog/keniablog.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/SX" element={<Home key="home" />} />
          <Route path="/services" element={<Servicio key="services" />} />
          <Route path="/products" element={<Producto key="products" />} />
          <Route path="/booking" element={<Reservacion key=" booking" />} />
          <Route path="/blog" element={<KeniaBlog key="blog" />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

