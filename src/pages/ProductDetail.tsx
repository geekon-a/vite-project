// src/pages/ProductDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { vsechnyProdukty } from './ProductsData';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Najdeme produkt podle ID v databázi
  const produkt = vsechnyProdukty.find(p => p.id === id);

  // Stavy pro vybranou velikost a aktivní tab ve specifikacích
  const [vybranaVelikost, setVybranaVelikost] = useState<string>('');

  if (!produkt) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen text-zinc-500">
        Produkt nebyl nalezen. <Link to="/" className="text-yellow-400 underline">Zpět na Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-24 pb-24 text-white">
      
      {/* 1. HLAVNÍ PRODUKTOVÁ KARTA (Dva sloupce: Foto vs. Nákupní zóna) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[calc(100vh-6rem)]">
        
        {/* LEVÝ SLOUPEC: Obří čisté studio pro produkt */}
        <div className="relative w-full aspect-square bg-zinc-950 border border-zinc-900 rounded-2xl flex items-center justify-center p-8 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
          
          {produkt.tag && (
            <span className="absolute top-6 left-6 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
              {produkt.tag}
            </span>
          )}
          
          <img 
            src={produkt.image} 
            alt={produkt.name} 
            className="h-[85%] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* PRAVÝ SLOUPEC: Detaily, cena, konfigurátor */}
        <div className="flex flex-col justify-center">
          {/* Drobečky */}
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4 font-mono">
            <Link to="/" className="hover:text-white transition">Home</Link> / 
            <Link to={`/${produkt.category}`} className="hover:text-white transition"> {produkt.category}</Link> / 
            <span className="text-zinc-300"> {produkt.name}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2">
            {produkt.name}
          </h1>
          
          {produkt.headline && (
            <p className="text-yellow-400 text-xs md:text-sm font-black uppercase tracking-widest mb-6">
              {produkt.headline}
            </p>
          )}

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
            {produkt.description || "Tento prémiový produkt představuje absolutní špičku ve své kategorii. Navržen pro nekompromisní výkon, odolnost a maximální kontrolu v jakýchkoliv podmínkách."}
          </p>

          {/* VÝBĚR VELIKOSTÍ (Pokud v datech jsou) */}
          {produkt.sizes && produkt.sizes.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-3 font-mono">
                Dostupné velikosti:
              </h3>
              <div className="flex flex-wrap gap-2">
                {produkt.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setVybranaVelikost(size)}
                    className={`px-4 py-2 text-xs font-black font-mono border transition-all cursor-pointer rounded ${
                      vybranaVelikost === size 
                        ? "border-yellow-400 bg-yellow-400 text-black" 
                        : "border-zinc-800 bg-zinc-950 text-white hover:border-zinc-500"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CENA A KOŠÍK */}
          <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Maloobchodní cena</p>
              <p className="text-3xl md:text-4xl font-black font-mono text-white mt-1">
                {produkt.price.toLocaleString('cs-CZ')} Kč
              </p>
            </div>
            
            <button className="bg-white text-black font-black uppercase text-xs tracking-widest px-10 py-5 hover:bg-yellow-400 transition duration-300 cursor-pointer text-center">
              Přidat do košíku
            </button>
          </div>
        </div>
      </div>

      {/* 2. TECHNICKÁ SEKCE (Vychytávky a Specifikace - Černé panely na pozadí) */}
      <section className="bg-zinc-950 border-t border-b border-zinc-900 mt-24 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* SLOUPEC 1 & 2: Hlavní technologické features */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-yellow-400 text-xs font-black uppercase tracking-widest mb-1">High-Tech Innovation</p>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Technologické vlastnosti</h2>
            </div>

            {produkt.features && produkt.features.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {produkt.features.map((feature, index) => (
                  <div key={index} className="bg-black border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition">
                    <h4 className="text-base font-black uppercase tracking-tight text-white mb-2 flex items-center gap-2">
                      <span className="text-yellow-400 text-xs font-mono">/ 0{index + 1}</span> {feature.title}
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-zinc-500 text-sm">Specifické technologické detaily pro tento model budou brzy doplněny.</p>
            )}
          </div>

          {/* SLOUPEC 3: Technická specifikace a Větrný rozsah */}
          <div className="bg-black border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight text-white mb-6 border-b border-zinc-900 pb-3">
                Technická data
              </h3>

              {/* Větrný rozsah (Pokud je definován) */}
              {produkt.windRange && (
                <div className="mb-6 bg-zinc-950 border border-zinc-900 p-4 rounded-xl">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Doporučený větrný rozsah</p>
                  <p className="text-xl font-black uppercase tracking-tight text-yellow-400 mt-1">
                    {produkt.windRange}
                  </p>
                </div>
              )}

              {/* Tabulka specifikací */}
              {produkt.specs ? (
                <div className="space-y-3">
                  {Object.entries(produkt.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs py-1.5 border-b border-zinc-900/50">
                      <span className="text-zinc-500 font-medium">{key}</span>
                      <span className="text-zinc-300 font-mono font-bold text-right pl-4">{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-500 text-xs">Tabulková data nejsou k dispozici.</p>
              )}
            </div>

            <div className="text-[10px] text-zinc-600 font-mono tracking-wider uppercase pt-6 border-t border-zinc-900 mt-6">
              CORE LABS • GERMAN ENGINEERING
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}