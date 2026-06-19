interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  hasMultipleVariants?: boolean;
  tag?: string;
}

function ProductCard({ name, price, image, hasMultipleVariants = false, tag }: ProductProps) {
  return (
    /* 
      KLÍČOVÁ ZMĚNA ZDE:
      - min-w-[230px] shrink-0 snap-start -> zařídí zmenšení a swipe chování na mobilu
      - md:min-w-0 md:shrink -> na desktopu tyto vlastnosti zruší a nechá pracovat grid z App.tsx
    */
    <div className="group relative bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-800 hover:shadow-2xl hover:shadow-yellow-400/5 min-w-[230px] shrink-0 snap-start md:min-w-0 md:shrink">
      
      {/* ÚPRAVA: Výška obrázku na mobilu h-48, na desktopu h-72, aby se karta pěkně zmenšila */}
      <div className="relative h-48 md:h-72 w-full overflow-hidden bg-zinc-900">
        {tag && (
          <span className="absolute top-4 left-4 z-10 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
            {tag}
          </span>
        )}
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
          <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-white leading-tight">
            {name}
          </h3>
          
          <p className="text-sm font-bold text-zinc-400 whitespace-nowrap">
            {hasMultipleVariants && <span className="text-zinc-500 text-xs font-normal lowercase mr-0.5">od</span>} {price.toLocaleString('cs-CZ')} Kč
          </p>
        </div>
        
        <p className="text-xs text-zinc-500 uppercase tracking-wider mt-2">
          Core Premium Series
        </p>

        <button 
          className="mt-6 w-full bg-zinc-900 text-white border border-zinc-800 text-xs font-black uppercase tracking-widest py-3 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 cursor-pointer"
        >
          Více info
        </button>
      </div>

    </div>
  );
}

export default ProductCard;