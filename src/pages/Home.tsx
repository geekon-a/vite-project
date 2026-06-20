// src/pages/Home.tsx
import ProductCard from '../components/ProductCard';
import CategoryGrid from '../components/CategoryGrid';
import BlogSection from '../components/BlogSection';
import EventsSection from '../components/EventsSection';

// IMPORTY DAT
import { vsechnyProdukty } from './ProductsData';
import { nejnovejsiClanky } from './BlogData';
import { vsechnyAkce } from './EventsData';

export default function Home() {
  // FILTROVÁNÍ PRO UTRAŠTÍHLOU HLAVNÍ STRÁNKU
  const homeProdukty = vsechnyProdukty.filter(p => p.showOnHome === true);
  const homeClanky = nejnovejsiClanky.filter(c => c.showOnHome === true);
  const homeAkce = vsechnyAkce.filter(e => e.showOnHome === true);

  return (
    <>
      {/* HERO SEKCE S VIDEEM */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/70 z-10 pointer-events-none" />
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 filter contrast-125 brightness-50 object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl w-full h-full flex flex-col justify-end pb-24 md:pb-32">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            RIDE THE <span className="text-yellow-400">XR X</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 uppercase tracking-widest mb-10 max-w-xl mx-auto leading-relaxed">
            3 years of uncompromising refinement. Increased lift & extended hangtime.
          </p>
          <div className="mb-4">
            <button className="bg-white text-black font-black uppercase text-xs tracking-widest px-8 py-4 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
              Objevte kolekci
            </button>
          </div>
        </div>
      </header>

      {/* SEKCE S PRODUKTY */}
      <main className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">
          Nejprodávanější produkty
        </h2>
        
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
          {homeProdukty.map((produkt) => (
            <div key={produkt.id} className="snap-start min-w-[280px] shrink-0 md:min-w-0 md:shrink">
              <ProductCard 
                id={produkt.id}
                name={produkt.name}
                price={produkt.price}
                image={produkt.image}
                tag={produkt.tag}
              />
            </div>
          ))}
        </div>
      </main>

      {/* ROZCESTNÍK DISCIPLÍN */}
      <CategoryGrid />
        
      {/* SEKCE ČLÁNKŮ - NYNÍ PŘEDÁVÁME POUZE HOME ČLÁNKY */}
      <BlogSection 
        title="Nejnovější příspěvky" 
        subtitle="Core Journal"
        articles={homeClanky}
        magazineLink="/magazin"
      />

      {/* SEKCE AKCÍ - NYNÍ PŘEDÁVÁME POUZE HOME AKCE */}
      <EventsSection 
        title="Upcoming Events & Test Days" 
        events={homeAkce} 
      />
    </>
  );
}