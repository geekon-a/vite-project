import { useState } from "react";

// Definice struktury pro menu
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

// Data pro náš velký rozcestník
const menuCategories: MainCategory[] = [
  {
    id: "kite",
    name: "Kiteboarding",
    allLink: "/kiteboarding",
    subcategories: [
      { name: "Kity / Draky", link: "/kiteboarding/kity" },
      { name: "Bary & Šňůry", link: "/kiteboarding/bary" },
      { name: "Kiteboardy", link: "/kiteboarding/desky" },
      { name: "Trapézy & Příslušenství", link: "/kiteboarding/trapezy" },
    ]
  },
  {
    id: "wing",
    name: "Wingfoil",
    allLink: "/wingfoil",
    subcategories: [
      { name: "Wingy / Křídla", link: "/wingfoil/wingy" },
      { name: "Wing Boardy", link: "/wingfoil/desky" },
      { name: "Foily & Mastové sety", link: "/wingfoil/foily" },
    ]
  },
  {
    id: "foil",
    name: "Hydrofoil",
    allLink: "/hydrofoil",
    subcategories: [
      { name: "Complete Foils", link: "/hydrofoil/komplety" },
      { name: "Front Wings", link: "/hydrofoil/predni-kridla" },
      { name: "Stabilizers & Fuselages", link: "/hydrofoil/doplnky" },
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
        
        {/* LEVÁ ČÁST: Hamburger tlačítko (3 čárky pod sebou) */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 justify-center items-center w-8 h-8 rounded border border-zinc-900 bg-zinc-950 hover:border-yellow-400 group transition-all duration-300 cursor-pointer"
          >
            <span className="w-5 h-0.5 bg-white group-hover:bg-yellow-400 transition-colors"></span>
            <span className="w-5 h-0.5 bg-white group-hover:bg-yellow-400 transition-colors"></span>
            <span className="w-5 h-0.5 bg-white group-hover:bg-yellow-400 transition-colors"></span>
          </button>
          
          {/* Logo (Předpokládám, že ho máš vedle nebo na středu, necháme ho vlevo u menu) */}
          <a href="/" className="text-xl font-black tracking-tighter uppercase">
            Core<span className="text-yellow-400">.</span>
          </a>
        </div>

        {/* STŘEDNÍ ČÁST: Rychlé odkazy (volitelné, klidně můžeš smazat, pokud chceš mít vše v hamburgeru) */}
        <div className="hidden md:flex items-center gap-8 text-base font-black uppercase tracking-widest text-zinc-400">
          <a href="/kiteboarding" className="hover:text-yellow-400 transition-colors">Kiteboarding</a>
          <a href="/wingfoil" className="hover:text-yellow-400 transition-colors">Wingfoil</a>
          <a href="/hydrofoil" className="hover:text-yellow-400 transition-colors">Hydrofoil</a>
          <a href="/magazin" className="hover:text-yellow-400 transition-colors">Magazín</a>
          <a href="/akce" className="hover:text-yellow-400 transition-colors">Akce</a>
        </div>

        {/* PRAVÁ ČÁST: Ikony / Košík */}
        <div className="text-lg font-mono text-zinc-500 pr-6">
          <a href="/kosik" className="hover:text-yellow-400 transition-colors">Košík</a>
        </div>
      </nav>

      {/* BOČNÍ VYJÍŽDĚCÍ ROZCESTNÍK (DRAWER) */}
      {/* Pozadí (overlay), které ztmaví zbytek webu */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Samotný vyjížděcí panel */}
        <div 
          className={`absolute top-0 left-0 h-full w-full max-w-md bg-zinc-950 border-r border-zinc-900 p-8 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Zabrání zavření při kliknutí dovnitř panelu
        >
          <div>
            {/* Hlavička menu se zavíracím křížkem */}
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
                return (
                  <div key={category.id} className="border-b border-zinc-900 pb-4">
                    {/* Hlavní řádek kategorie */}
                    <button
                      onClick={() => toggleSubcategory(category.id)}
                      className="w-full flex justify-between items-center text-xl font-black uppercase tracking-tighter text-white hover:text-yellow-400 transition-colors text-left cursor-pointer py-2"
                    >
                      {category.name}
                      <span className={`text-xs font-mono text-zinc-600 transition-transform duration-300 ${isOpen ? "rotate-90 text-yellow-400" : ""}`}>
                        {isOpen ? "▼" : "▶"}
                      </span>
                    </button>

                    {/* PODKATEGORIE (Zobrazí se po rozbalení) */}
                    <div className={`mt-2 pl-4 space-y-2.5 overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
                    }`}>
                      {category.subcategories.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.link}
                          className="block text-sm text-zinc-400 hover:text-white transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                      
                      {/* Odkaz Zobrazit vše */}
                      <a
                        href={category.allLink}
                        className="block text-xs font-black uppercase tracking-wider text-yellow-400 pt-2 border-t border-zinc-900/50 hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Zobrazit vše z {category.name} →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Spodní info v menu */}
          <div className="text-[10px] text-zinc-600 font-mono tracking-wider uppercase border-t border-zinc-900 pt-6">
            CORE KITEBOARDING CZ/SK • 2026
          </div>

        </div>
      </div>
    </>
  );
}

export default NavBar;