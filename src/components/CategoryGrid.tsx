// src/components/CategoryGrid.tsx
import { Link } from 'react-router-dom'; // Importujeme Link pro plynulé přechody

function CategoryGrid() {
  // Aktualizované odkazy (link) přesně podle naší nové struktury routeru
  const categories = [
    {
      id: 1,
      title: "Kite",
      subtitle: "Big Air, Freestyle a Freeride",
      image: "https://ridecore.com/_img/GYtV7Hq6MBEEkjV-RrA82FzVSzctM8jIDa0grlQJceA/fn:CORE_menu_item_Kites/q:75/rs:fill:480:480:1:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50LzkyMGJhZDA1ZTdiOGI3MzNkZWEyNjRkMmM0YTRhMTJkZmRmNjU5YmU",
      link: "/kiteboarding" // Nasere uživatele na kompletní kite gear
    },
    {
      id: 2,
      title: "Wing",
      subtitle: "Next-gen Wingfoiling",
      image: "https://ridecore.com/_img/5xxhhczEnDgXr7wgRFJ26i1BzIB6rNOT2s6HnmfgT0U/fn:WING_GaleryNavi/q:75/rs:fill:480:480:1:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50L2UzNDJkMzQwMmNiYjVjNTcwYjQ0OGM5ZGY0ZDEwNThjYzI3YzhiOWE",
      link: "/wing" // Nasere uživatele na kompletní wing gear
    },
    {
      id: 3,
      title: "Foil",
      subtitle: "Kitefoil, Wingfoil a Pumpfoil",
      image: "https://ridecore.com/_img/XS17WZUgTcNPdhwxYJXpSZ4uje0ynYbBLf2TcEaBWuo/fn:CORE_CFS_Ben_Beholz_by_Jan_Schroeder-2000px-72dpi-1092x614/q:75/rs:fit:::0:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50L2RkNDM0ZTBiMDMxNDc0NGZhNzk1Y2IyZDUyODQ4ODU3YzZhYWJlNGY",
      link: "/hydrofoil" // Nasere uživatele na kompletní hydrofoil gear
    }
  ];

  return (
    <section className="bg-zinc-950 py-12 md:py-24 border-t border-b border-zinc-900 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Nadpis sekce */}
        <div className="mb-12">
          <p className="text-yellow-400 text-xs font-black uppercase tracking-widest mb-2">
            Vyber kategorii
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
            Prozkoumejte disciplíny
          </h2>
        </div>

        {/* Mřížka kategorií - 3 sloupce */}
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {categories.map((category) => (
            // ZMĚNA: Přepsáno z <a> na <Link> a href na to={}
            <Link 
              key={category.id} 
              to={category.link}
              className="group relative h-52 md:h-[500px] w-full overflow-hidden rounded-lg border border-transparent block bg-black transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10"
            >
              {/* Obrázek na pozadí */}
              <img 
                src={category.image} 
                alt={category.title} 
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-75 contrast-112 grayscale group-hover:grayscale-0 transition-all"
              />

              {/* Tmavý přechod (overlay) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Textový obsah */}
              <div className="absolute inset-0 p-3 md:p-8 flex flex-col justify-end z-10">
                <p className="hidden sm:block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  {category.subtitle}
                </p>
                <h3 className="text-sm md:text-3xl font-black uppercase tracking-tighter text-white flex items-center gap-1 md:gap-2">
                  {category.title}
                  <span className="text-yellow-400 inline-block transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoryGrid;