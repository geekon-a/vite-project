// src/components/ProductCard.tsx
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
}

export default function ProductCard({ id, name, price, image, tag }: ProductCardProps) {
  const nameParts = name.split(' ');
  const brand = nameParts[0];
  const model = nameParts.slice(1).join(' ');

  return (
    <Link 
      to={`/produkt/${id}`} 
      // OPRAVA: V základu je klasický border-zinc-900. Při hoveru natvrdo měníme na border-2 a plnou jasnou žlutou border-yellow-400
      className="group relative w-full h-[450px] bg-zinc-950/40 transition-all duration-300 flex flex-col justify-between p-6 overflow-hidden border border-zinc-900 hover:z-30 hover:border-2 hover:border-yellow-400 cursor-pointer rounded-xl"
    >
      {/* 1. KONTRASTNÍ TYPOGRAFICKÉ POZADÍ */}
      <div className="absolute inset-x-0 top-16 text-center select-none pointer-events-none z-0 overflow-hidden leading-none whitespace-nowrap">
        <span className="text-[12rem] font-black uppercase tracking-tighter inline-block text-yellow-400/20 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out font-sans">
          {model || brand}
        </span>
      </div>

      {/* 2. TOP PANEL */}
      <div className="relative z-15 flex justify-between items-start w-full">
        {tag ? (
          <span className="bg-yellow-400 text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-md font-sans border border-yellow-500">
            {tag}
          </span>
        ) : (
          <span className="text-[9px] font-mono tracking-widest text-zinc-750">CR_EQ // 2026</span>
        )}
      </div>

      {/* 3. STŘEDOVÝ PRODUKT */}
      <div className="relative z-10 w-full h-56 flex items-center justify-center">
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <img 
          src={image} 
          alt={name} 
          className="h-full w-auto object-contain transition-all duration-700 ease-out group-hover:scale-115 group-hover:-translate-y-4 filter drop-shadow-[0_25px_20px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* 4. BOTTOM PANEL */}
      <div className="relative z-10 w-full border-t border-zinc-900/80 pt-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-0.5">
            {brand} // Series
          </p>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-yellow-400 transition-colors duration-300">
            {model}
          </h3>
        </div>
        
        <div className="text-right font-mono">
          <span className="text-[8px] text-zinc-600 uppercase block tracking-wider mb-0.5">
            MOC S DPH
          </span>
          <p className="text-lg font-black text-zinc-300 group-hover:text-white transition-colors">
            {price.toLocaleString('cs-CZ')} Kč
          </p>
        </div>
      </div>
    </Link>
  );
}