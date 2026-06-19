import ProductCard from '../components/ProductCard';
import CategoryGrid from '../components/CategoryGrid';
import BlogSection from '../components/BlogSection';
import EventsSection from '../components/EventsSection';

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface CoreEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
  tag: string;
}

const nejnovejsiClanky: Article[] = [
  {
    id: "1",
    category: "Travel",
    title: "Norsko: Měsíc na snowkitu v nekonečném prašanu",
    excerpt: "Reportáž z expedice za polární kruh. Jak obstojí komorové kity v extrémních podmínkách?",
    date: "18. 06. 2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600"
  },
  {
    id: "2",
    category: "Test",
    title: "Recenze: Nový XR X a jeho limity v 40 uzlech",
    excerpt: "Vzali jsme nový Big Air benchmark na Fehmarn a pořádně ho protáhli v poryvovém větru.",
    date: "10. 06. 2026",
    image: "https://images.unsplash.com/photo-1510227272981-87123e259b17?q=80&w=600"
  },
  {
    id: "3",
    category: "Big Air",
    title: "Jak správně načasovat kiteloop pro maximální lift",
    excerpt: "Technický rozbor od našich team riderů. Kdy přesně zatáhnout za bar, aby tě kiteloop chytil?",
    date: "28. 05. 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600"
  },
  {
    id: "4",
    category: "Drone",
    title: "Jak natáčet kiteboarding z FPV dronu a neztopit ho",
    excerpt: "Tipy pro commercial sports videography. Jak nastavit Betaflight a bezpečně létat nad slanou vodou.",
    date: "14. 05. 2026",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=600"
  },
  {
    id: "5",
    category: "Innovation",
    title: "Vývoj karbonových technologií u desek Roode",
    excerpt: "Nahlédnutí pod pokličku vývoje. Jak vrstvení high-modulus karbonu ovlivňuje pop a tvrdost dopadů.",
    date: "02. 05. 2026",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600"
  }
];

const vsechnyAkce: CoreEvent[] = [
  {
    id: "1",
    day: "25",
    month: "ČVN",
    title: "CORE Demo Day & Testování novinek",
    location: "Rujána, Německo – Kitesurf centrum",
    time: "10:00 - 18:00",
    tag: "Test Day"
  },
  {
    id: "2",
    day: "12",
    month: "ČVC",
    title: "Big Air Clinic: Jak skočit tvůj první board-off",
    location: "Fehmarn, Německo – South Beach",
    time: "09:00 - 16:00",
    tag: "Camp"
  },
  {
    id: "3",
    day: "05",
    month: "SRA",
    title: "Hydrofoil & Wing foil akademie",
    location: "Nechranice, Česko – Yacht Club",
    time: "11:00 - 17:00",
    tag: "Workshop"
  },
  {
    id: "4",
    day: "18",
    month: "SRA",
    title: "King of the Lake – Lokální Big Air Race",
    location: "Nové Mlýny, Česko",
    time: "13:00 - 19:00",
    tag: "Race"
  },
  {
    id: "5",
    day: "02",
    month: "ZÁŘ",
    title: "Ukončení sezóny a CORE BBQ spojené s testováním",
    location: "Rujána, Německo",
    time: "14:00 - 22:00",
    tag: "Community"
  }
];

export default function Home() {
  return (
    <>
      {/* HERO SEKCE S LOKÁLNÍM VIDEEM */}
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
          <div className="snap-start min-w-[280px] shrink-0 md:min-w-0 md:shrink">
            <ProductCard 
              id="1"
              name="Core XR X"
              price={44900}
              image="https://ridecore.com/_img/elmrv4iFMuxqg6-iSoPo2SpR5CjYUzU3SSgVxk0vVds/fn:CORE_xr10_9_clipping_black/q:75/rs:fit:960:2000:1:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50L2RlMjJhODA4ZTZkNzkxYmMyYTAyZjc3NGI0MzJhN2MxM2I3YjI5N2E"
              tag="Big Air"
              hasMultipleVariants={true}
            />
          </div>

          <div className="snap-start min-w-[280px] shrink-0 md:min-w-0 md:shrink">
            <ProductCard 
              id="2"
              name="Core Fusion 7"
              price={27900}
              image="https://ridecore.com/_img/6u3prnOS2LJbK3vmxShZ1XB9Ko-D5-82zYJGTjw3kHk/fn:top_bottom_web/q:75/rs:fit:960:2000:1:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50LzYwOWNmZDI2NWUyMTI4N2MzYjVlZDM3ZjYzZDYyOGY3MTQ0MzIwMDY"
              tag="Nejprodávanější"
            />
          </div>

          <div className="snap-start min-w-[280px] shrink-0 md:min-w-0 md:shrink">
            <ProductCard 
              id="3"
              name="Core Sensor 4 Bar"
              price={18200}
              image="https://ridecore.com/_img/cYKvBT9G8LanApyktuE0QIWr7JFYzJu7RPMCzcQOiTU/fn:CORE-Sensor-4-Clipping-Side-View_transparent/q:75/rs:fit:960:2000:1:0/czM6Ly9jb3Jla2l0ZXMtbmVvcy9uZW9zL3Jlc291cmNlcy9wZXJzaXN0ZW50L2I4NGE3ZDkzMThlMDlkMjRhNzQ4ZjZkNGNmZTA3NjE5ODJjNmI0ZTQ"
            />
          </div>
        </div>
      </main>

      <CategoryGrid />
        
      <BlogSection 
        title="Nejnovější příspěvky" 
        subtitle="Core Journal"
        articles={nejnovejsiClanky}
        magazineLink="/magazin"
      />

      <EventsSection 
        title="Upcoming Events & Test Days" 
        events={vsechnyAkce} 
      />
    </>
  );
}