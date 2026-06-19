import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// IMPORTY STRÁNEK Z NOVÉ SLOŽKY
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Magazin from './pages/Magazin';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans antialiased flex flex-col justify-between">
        
        {/* Navigace zůstává nahoře napříč celým webem */}
        <NavBar />

        {/* Dynamické přepínání obsahu */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produkt/:id" element={<ProductDetail />} />
            <Route path="/magazin" element={<Magazin />} />
          </Routes>
        </div>

        {/* Patička zůstává dole napříč celým webem */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;