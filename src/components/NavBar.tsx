// src/components/NavBar.tsx
import { useState } from "react";
import { Link } from "react-router-dom"; 

interface SubCategory {
  name: string;
  link: string;
}

interface MainCategory {
  id: string;
  name: string;
  allLink: string;
  subcategories: SubCategory[];
}

const menuCategories: MainCategory[] = [
  {
    id: "kite",
    name: "Kiteboarding",
    allLink: "/kiteboarding",
    subcategories: [
      { name: "Kites", link: "/kiteboarding/kites" },
      { name: "Bars", link: "/kiteboarding/bars" },
      { name: "Boards", link: "/kiteboarding/boards" },
      { name: "Příslušenství", link: "/kiteboarding/accessories" }
    ]
  },
  {
    id: "wing",
    name: "Wing",
    allLink: "/wing",
    subcategories: [
      { name: "Wings", link: "/wing/wings" },
      { name: "WingFoil", link: "/wing/wingfoils" },
      { name: "Příslušenství", link: "/wing/accessories" }
    ]
  },
  {
    id: "foil",
    name: "Hydrofoil",
    allLink: "/hydrofoil",
    subcategories: [
      { name: "Foily & Mastové sety", link: "/hydrofoil/foils" },
    ]
  },
  {
    id: "magazine",
    name: "Magazín",
    allLink: "/magazin",
    subcategories: [
      { name: "Big Air Škola", link: "/magazin/big air" },
      { name: "Recenze & Testy", link: "/magazin/test" },
      { name: "Expedice & Travel", link: "/magazin/travel" },
      { name: "FPV & Natáčení", link: "/magazin/drone" },
    ]
  },
  {
    id: "events",
    name: "Akce",
    allLink: "/akce",
    subcategories: [
      { name: "Demo & Test Days", link: "/akce/test day" },
      { name: "Kite & Wing Kempy", link: "/akce/camp" },
      { name: "Workshopy & Výuka", link: "/akce/workshop" },
      { name: "Závody & Community", link: "/akce/race" }
    ]
  }
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleSubcategory = (id: string) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  return (
    <>
      {/* HLAVNÍ NAVIGAČNÍ LIŠTA */}
      <nav className="bg-black/90 backdrop-blur-md text-white fixed top-0 left-0 w-full z-40 border-b border-zinc-900 px-6 py-4 h-20 flex items-center justify-between">
        
        {/* LEVÁ ČÁST: Hamburger tlačítko */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 justify-center items-center w-8 h-8 rounded border border-zinc-900 bg-zinc-950 hover:border-yellow-400 group transition-all duration-300 cursor-pointer"
          >
            <span className="w-5 h-0.5 bg-white group-hover:bg-yellow-400 transition-colors"></span>
            <span className="w-5 h-0.5 bg-white group-hover:bg-yellow-400 transition-colors"></span>
            <span className="w-5 h-0.5 bg-white group-hover:bg-yellow-400 transition-colors"></span>
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-xl font-black tracking-tighter uppercase">
            Core<span className="text-yellow-400">.</span>
          </Link>
        </div>

        {/* STŘEDNÍ ČÁST: Rychlé odkazy (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-base font-black uppercase tracking-widest text-zinc-400">
          <Link to="/kiteboarding" className="hover:text-yellow-400 transition-colors">Kiteboarding</Link>
          <Link to="/wing" className="hover:text-yellow-400 transition-colors">Wing</Link>
          <Link to="/hydrofoil" className="hover:text-yellow-400 transition-colors">Hydrofoil</Link>
          
          {/* Doplňkové sekce: menší velikost text-sm, tlusté a uppercase */}
          <Link to="/magazin" className="hover:text-yellow-400 transition-colors text-sm font-black uppercase tracking-widest text-zinc-400">Magazín</Link>
          <Link to="/akce" className="hover:text-yellow-400 transition-colors text-sm font-black uppercase tracking-widest text-zinc-400">Akce</Link>
        </div>

        {/* PRAVÁ ČÁST: Košík */}
        <div className="text-lg font-mono text-zinc-500 pr-6">
          <Link to="/kosik" className="hover:text-yellow-400 transition-colors">Košík</Link>
        </div>
      </nav>

      {/* BOČNÍ VYJÍŽDĚCÍ ROZCESTNÍK (DRAWER) */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 left-0 h-full w-full max-w-md bg-zinc-950 border-r border-zinc-900 p-8 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-xs font-black tracking-widest uppercase text-zinc-500">Kategorie</h3>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-zinc-500 hover:text-yellow-400 text-xl font-mono cursor-pointer active:scale-95"
              >
                [ ESC ]
              </button>
            </div>

            {/* SEZNAM HLAVNÍCH KATEGORIÍ */}
            <div className="space-y-4">
              {menuCategories.map((category) => {
                const isOpen = activeCategory === category.id;
                
                // Určíme doplňkové sekce, které mají mít o něco menší písmo (text-base)
                const isSecondary = category.id === "magazine" || category.id === "events";

                return (
                  <div key={category.id} className="border-b border-zinc-900 pb-4">
                    {/* Hlavní řádek kategorie */}
                    <button
                      onClick={() => toggleSubcategory(category.id)}
                      className={`w-full flex justify-between items-center uppercase font-black text-white hover:text-yellow-400 transition-colors text-left cursor-pointer py-2 ${
                        isSecondary 
                          ? "text-base tracking-tight" 
                          : "text-xl tracking-tighter" 
                      }`}
                    >
                      {category.name}
                      <span className={`text-xs font-mono text-zinc-600 transition-transform duration-300 ${isOpen ? "rotate-90 text-yellow-400" : ""}`}>
                        {isOpen ? "▼" : "▶"}
                      </span>
                    </button>

                    {/* PODKATEGORIE */}
                    <div className={`pl-4 overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
                    }${(isOpen && " space-y-2.5") || ""}`}>
                      {category.subcategories.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.link}
                          className="block text-sm text-zinc-400 hover:text-white transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                      
                      <Link
                        to={category.allLink}
                        className="block text-xs font-black uppercase tracking-wider text-yellow-400 pt-2 border-t border-zinc-900/50 hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Zobrazit vše z sekce {category.name} →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-[10px] text-zinc-600 font-mono tracking-wider uppercase border-t border-zinc-900 pt-6">
            CORE KITEBOARDING CZ/SK • 2026
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;