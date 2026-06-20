// src/pages/Akce.tsx
import { useParams, Link } from 'react-router-dom';
import { vsechnyAkce } from './EventsData'; // Importujeme naše data o akcích

export default function Akce() {
  // Vytáhneme kategorii z URL (např. /akce/camp)
  const { eventCategory } = useParams<{ eventCategory?: string }>();

  // Filtrování akcí na základě URL
  const vyfiltrovaneAkce = vsechnyAkce.filter((akce) => {
    if (!eventCategory) {
      return true; // Na základní /akce ukážeme vše
    }
    // Porovnáváme tag z dat s parametrem z URL (malými písmeny)
    return akce.tag.toLowerCase() === eventCategory.toLowerCase();
  });

  // Dynamický nadpis podle vyfiltrovaného tagu
  const ziskejNadpis = () => {
    if (!eventCategory) return 'Events & Test Days';
    
    switch (eventCategory.toLowerCase()) {
      case 'test day': return 'Demo & Test Days';
      case 'camp': return 'Kite & Wing Kempy';
      case 'workshop': return 'Workshopy & Výuka';
      case 'race': return 'Závody & Slalomy';
      case 'community': return 'Komunitní Srazy';
      default: return `Akce: ${eventCategory}`;
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 min-h-screen">
      
      {/* Drobečková navigace */}
      <div className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
        <Link to="/" className="hover:text-white transition">Home</Link> / 
        <Link to="/akce" className="hover:text-white transition"> Akce</Link>
        {eventCategory && ` / ${eventCategory}`}
      </div>

      {/* Hlavička stránky */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          {ziskejNadpis()}
        </h1>
        <p className="text-zinc-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
          Otestuj nejnovější CORE gear na vlastní kůži, zúčastni se technických Big Air klinik nebo doraž na lokální community sraz na Rujáně a v ČR.
        </p>
      </div>

      {/* Seznam akcí */}
      {vyfiltrovaneAkce.length === 0 ? (
        <p className="text-zinc-500 py-6">V této kategorii momentálně nejsou naplánované žádné akce.</p>
      ) : (
        <div className="space-y-4">
          {vyfiltrovaneAkce.map((akce) => (
            <div 
              key={akce.id}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between bg-zinc-950 border border-zinc-900 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300 gap-6"
            >
              {/* Levá část: Datumovka a Info */}
              <div className="flex items-center gap-6">
                {/* Kalendářová kostka */}
                <div className="w-16 h-16 shrink-0 bg-zinc-900 border border-zinc-800 rounded flex flex-col items-center justify-center text-center group-hover:border-yellow-400/30 transition-colors">
                  <span className="text-xl font-black tracking-tight text-white">{akce.day}</span>
                  <span className="text-[10px] font-mono uppercase text-yellow-400 tracking-wider -mt-1">{akce.month}</span>
                </div>

                {/* Texty o akci */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Link 
                      to={`/akce/${akce.tag.toLowerCase()}`}
                      className="text-[9px] font-black uppercase tracking-widest text-yellow-400 bg-yellow-400/5 px-2 py-0.5 rounded border border-yellow-400/10 hover:bg-yellow-400 hover:text-black transition-colors"
                    >
                      {akce.tag}
                    </Link>
                    <span className="text-zinc-500 text-xs font-mono">{akce.time}</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-white group-hover:text-yellow-400 transition-colors">
                    {akce.title}
                  </h2>
                  <p className="text-zinc-400 text-xs md:text-sm mt-0.5">
                    {akce.location}
                  </p>
                </div>
              </div>

              {/* Pravá část: Akční tlačítko */}
              <div className="w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-zinc-900 flex justify-end">
                <button className="w-full md:w-auto bg-zinc-900 border border-zinc-800 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black text-white font-bold uppercase text-xs tracking-widest px-6 py-3 rounded transition-all duration-300 cursor-pointer">
                  Chci dorazit →
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}