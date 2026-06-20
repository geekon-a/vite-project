// src/pages/Kategorie.tsx
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { vsechnyProdukty } from './ProductsData'; // Tady importujeme naše data

export default function Kategorie() {
  // Vytáhneme parametry z URL (chytá /:mainCategory/:subCategory?)
  const { mainCategory, subCategory } = useParams<{ mainCategory: string; subCategory?: string }>();

  // Filtrování dat na základě URL
  const vyfiltrovaneProdukty = vsechnyProdukty.filter((produkt) => {
    // 1. Kontrola hlavní kategorie (kiteboarding / wing / hydrofoil)
    if (produkt.category !== mainCategory?.toLowerCase()) {
      return false;
    }
    // 2. Kontrola podkategorie, pokud je v URL zadaná (kites / boards / bars / wings / foils)
    if (subCategory && produkt.type !== subCategory.toLowerCase()) {
      return false;
    }
    return true;
  });

  // Pomocný dynamický nadpis upravený pro 3 hlavní kategorie
  const ziskejNadpis = () => {
    const main = mainCategory?.toLowerCase();
    const sub = subCategory?.toLowerCase();

    // Pokud jsme pouze na hlavní kategorii (např. /hydrofoil nebo /wing)
    if (!sub) {
      switch (main) {
        case 'kiteboarding': return 'Kiteboarding Gear';
        case 'wing': return 'Wingfoiling Gear';
        case 'hydrofoil': return 'Hydrofoil Komplety & Komponenty';
        default: return 'Vybavení';
      }
    }

    // Pokud filtrujeme i konkrétní podkategorii (např. /kiteboarding/boards nebo /hydrofoil/foils)
    switch (sub) {
      case 'kites': return 'Kites';
      case 'boards': return 'Kiteboards';
      case 'bars': return 'Bars';
      case 'wings': return 'Wings';
      case 'wingfoils': return 'Wingfoils';
      case 'foils': return 'Foils';
      case 'accessories': return 'Příslušenství';
      default: return 'Vybavení';
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 min-h-screen">
      {/* Drobečková navigace (Breadcrumbs) */}
      <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
        <Link to="/" className="hover:text-white transition">Home</Link> / 
        <Link to={`/${mainCategory}`} className="hover:text-white transition"> {mainCategory}</Link> 
        {subCategory && ` / ${subCategory}`}
      </div>

      {/* Dynamický nadpis */}
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
        {ziskejNadpis()}
      </h1>

      {/* Grid s vyfiltrovanými produkty */}
      {vyfiltrovaneProdukty.length === 0 ? (
        <p className="text-zinc-500">V této kategorii zatím nejsou žádné produkty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {vyfiltrovaneProdukty.map((produkt) => (
            <ProductCard 
              key={produkt.id}
              id={produkt.id}
              name={produkt.name}
              price={produkt.price}
              image={produkt.image}
              tag={produkt.tag}
            />
          ))}
        </div>
      )}
    </div>
  );
}