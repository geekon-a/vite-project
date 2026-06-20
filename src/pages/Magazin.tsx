// src/pages/Magazin.tsx
import { useParams, Link } from 'react-router-dom';
import { nejnovejsiClanky } from './BlogData'; // Importujeme všechna data článků

export default function Magazin() {
  // Vytáhneme kategorii z URL (u /magazin je to undefined, u /magazin/travel je to "travel")
  const { blogCategory } = useParams<{ blogCategory?: string }>();

  // Filtrování článků podle URL adresy
  const vyfiltrovaneClanky = nejnovejsiClanky.filter((clanek) => {
    // Pokud v URL není podkategorie, ukaž VŠECHNY články z blogdata.ts
    if (!blogCategory) {
      return true;
    }
    // Pokud v URL je, porovnej ji s kategorií článku (převedeno na malé znaky pro jistotu)
    return clanek.category.toLowerCase() === blogCategory.toLowerCase();
  });

  // Dynamický nadpis podle toho, kde se zrovna nacházíš
  const ziskejNadpis = () => {
    if (!blogCategory) return 'Core Journal';
    
    switch (blogCategory.toLowerCase()) {
      case 'travel': return 'Expedice & Cestování';
      case 'test': return 'Recenze & Testy';
      case 'big air': return 'Big Air Škola';
      case 'drone': return 'FPV & Natáčení';
      case 'innovation': return 'Technologie & Vývoj';
      default: return `Články: ${blogCategory}`;
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 min-h-screen">
      
      {/* Drobečková navigace */}
      <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
        <Link to="/" className="hover:text-white transition">Home</Link> / 
        <Link to="/magazin" className="hover:text-white transition"> Magazín</Link>
        {blogCategory && ` / ${blogCategory}`}
      </div>

      {/* Hlavička magazínu */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          {ziskejNadpis()}
        </h1>
        <p className="text-zinc-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
          Nahlédni pod pokličku commercial sports videography, načasování kiteloopů nebo expedic od našich team riderů.
        </p>
      </div>

      {/* Grid s vyfiltrovanými články */}
      {vyfiltrovaneClanky.length === 0 ? (
        <p className="text-zinc-500 py-6">V této kategorii zatím nejsou žádné články.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vyfiltrovaneClanky.map((clanek) => (
            <article 
              key={clanek.id} 
              className="group flex flex-col bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
            >
              {/* Obrázek článku */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <img 
                  src={clanek.image} 
                  alt={clanek.title} 
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Odkaz přímo na danou kategorii blogu */}
                <Link 
                  to={`/magazin/${clanek.category.toLowerCase()}`}
                  className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-yellow-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded border border-zinc-800 hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  {clanek.category}
                </Link>
              </div>

              {/* Obsah článku */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-zinc-500 text-[11px] font-mono block mb-2">
                    {clanek.date}
                  </span>
                  <h2 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-yellow-400 transition-colors mb-3 line-clamp-2">
                    {clanek.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6">
                    {clanek.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex justify-end">
                  <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-yellow-400 transition-colors flex items-center gap-2">
                    Číst článek <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

    </div>
  );
}