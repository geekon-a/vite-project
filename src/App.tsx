import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// IMPORTY STRÁNEK Z NOVÉ SLOŽKY
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Magazin from './pages/Magazin';
import Kategorie from './pages/Kategorie'; // Nezapomeň importovat novou stránku
import ScrollToTop from './components/ScrollToTop';
import Akce from './pages/Akce';

function App() {
  return (
    <Router>

      <ScrollToTop />
      <div className="bg-black min-h-screen text-white font-sans antialiased flex flex-col justify-between">
        
        {/* Navigace zůstává nahoře napříč celým webem */}
        <NavBar />

        {/* Dynamické přepínání obsahu */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Chytí /kiteboarding (subCategory bude undefined -> ukáže vše) */}
            {/* Chytí i /kiteboarding/kites (subCategory bude "kites" -> vyfiltruje jen kity) */}
            <Route path="/:mainCategory/:subCategory?" element={<Kategorie />} />
            
            <Route path="/produkt/:id" element={<ProductDetail />} />
            <Route path="/magazin/:blogCategory?" element={<Magazin />} />
            <Route path="/akce/:eventCategory?" element={<Akce />} />
          </Routes>
        </div>

        {/* Patička zůstává dole napříč celým webem */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;