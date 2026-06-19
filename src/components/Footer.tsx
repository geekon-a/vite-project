function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Sloupec 1: Brand / O nás */}
        <div className="space-y-4">
          <h3 className="text-white font-black text-lg tracking-tighter uppercase">
            Core<span className="text-yellow-400">.</span>
          </h3>
          <p className="text-zinc-500 leading-relaxed pr-4">
            Prémiové vybavení pro kiteboarding, wingfoiling a hydrofoil. Vyvinuto s německou precizností pro ty nejextrémnější podmínky na vodě i na sněhu.
          </p>
        </div>

        {/* Sloupec 2: Shop & Disciplíny */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase tracking-wider text-[10px]">E-shop</h4>
          <ul className="space-y-2.5 font-medium">
            <li><a href="#kite" className="hover:text-yellow-400 transition-colors">Kiteboarding</a></li>
            <li><a href="#wing" className="hover:text-yellow-400 transition-colors">Wingfoil</a></li>
            <li><a href="#foil" className="hover:text-yellow-400 transition-colors">Hydrofoil</a></li>
            <li><a href="#bestsellers" className="hover:text-yellow-400 transition-colors">Nejprodávanější</a></li>
          </ul>
        </div>

        {/* Sloupec 3: Podpora & Info */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase tracking-wider text-[10px]">Podpora</h4>
          <ul className="space-y-2.5 font-medium">
            <li><a href="#kontakt" className="hover:text-yellow-400 transition-colors">Kontaktujte nás</a></li>
            <li><a href="#servis" className="hover:text-yellow-400 transition-colors">Záruka a Servis</a></li>
            <li><a href="#obchodni-podminky" className="hover:text-yellow-400 transition-colors">Obchodní podmínky</a></li>
            <li><a href="#privacy" className="hover:text-yellow-400 transition-colors">Ochrana soukromí</a></li>
          </ul>
        </div>

        {/* Sloupec 4: Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white font-black uppercase tracking-wider text-[10px]">Newsletter</h4>
          <p className="text-zinc-500 leading-relaxed">
            Odebírej nejnovější testy vybavení, reporty z tripů a info o demo dnech.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex h-10 w-full rounded overflow-hidden border border-zinc-800 focus-within:border-yellow-400 transition-colors">
            <input 
              type="email" 
              placeholder="Tvůj e-mail" 
              className="bg-zinc-900/50 w-full px-3 text-white placeholder-zinc-600 focus:outline-none text-xs"
            />
            <button className="bg-zinc-900 text-white px-4 border-l border-zinc-800 text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all cursor-pointer">
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Spodní linka s copyrightem a sítěmi */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 font-medium">
        <p>© {currentYear} CORE Kiteboarding. Všechna práva vyhrazena.</p>
        
        {/* Sociální sítě */}
        <div className="flex items-center gap-6 text-zinc-500">
          <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
          <a href="#youtube" className="hover:text-white transition-colors">YouTube</a>
          <a href="#facebook" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;