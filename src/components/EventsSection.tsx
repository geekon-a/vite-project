import { useState } from "react";

export interface CoreEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
  tag: string;
}

interface EventsSectionProps {
  title: string;
  subtitle?: string;
  events: CoreEvent[];
}

function EventsSection({ title, subtitle = "Join the Community", events }: EventsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!events || events.length === 0) {
    return null;
  }

  const nextSlide = () => {
    if (events.length <= 3) return;
    setCurrentIndex((prev) => (prev + 1) % (events.length - 2));
  };

  const prevSlide = () => {
    if (events.length <= 3) return;
    setCurrentIndex((prev) => (prev - 1 + (events.length - 2)) % (events.length - 2));
  };

  const visibleEvents = events.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-zinc-950 py-24 text-white border-t border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HLAVIČKA SEKCE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-yellow-400 text-xs font-black uppercase tracking-widest mb-2">
              {subtitle}
            </p>
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              {title}
            </h2>
          </div>

          {/* Šipky pro posun - skryté na mobilu */}
          {events.length > 3 && (
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-md hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer active:scale-95"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-md hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer active:scale-95"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* HORIZONTÁLNÍ MŘÍŽKA - ULTRA ULTRA COMPACT SLIDER */}
        <div 
          key={currentIndex} 
          className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-none md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 animate-in fade-in duration-300"
        >
          {visibleEvents.map((event) => (
            <div 
              key={event.id}
              // ÚPRAVA: Šířka stažena na min-w-[185px], min-h upraveno na 290px kvůli vertikálnímu řazení dole
              className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-4 flex flex-col justify-between items-start min-h-[290px] min-w-[185px] snap-start shrink-0 md:min-w-0 md:shrink hover:bg-zinc-900/60 hover:border-yellow-400 transition-all duration-300 group"
            >
              {/* Horní část: Datum a Tag */}
              <div className="w-full">
                <div className="flex justify-between items-start w-full mb-3">
                  {/* Kompaktnější kostka s datem */}
                  <div className="text-center bg-zinc-900 border border-zinc-800 w-11 py-1 rounded text-white group-hover:border-yellow-400 transition-colors duration-300">
                    <span className="block text-sm font-black leading-none">{event.day}</span>
                    <span className="text-[7px] text-zinc-500 font-bold uppercase">{event.month}</span>
                  </div>
                  
                  {/* Tag */}
                  <span className="text-[8px] bg-yellow-400/10 text-yellow-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                    {event.tag}
                  </span>
                </div>
                
                {/* Nadpis a detaily - upraveno na text-sm */}
                <h3 className="text-sm md:text-base font-black uppercase tracking-tight text-white group-hover:text-yellow-400 transition-colors duration-300 leading-snug line-clamp-3">
                  {event.title}
                </h3>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1.5 truncate">
                  {event.location}
                </p>
              </div>

              {/* Spodní část: Čas a Tlačítko poskládané pod sebou (kvůli úzké kartě) */}
              <div className="w-full mt-4 pt-3 border-t border-zinc-900/80 flex flex-col items-stretch gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
                <span className="text-[10px] font-mono text-zinc-500 md:text-xs">{event.time}</span>
                <button className="bg-zinc-900 text-white border border-zinc-800 text-[9px] font-black uppercase tracking-widest py-2 rounded text-center w-full md:w-auto md:px-3 md:py-1.5 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 cursor-pointer">
                  Více info
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default EventsSection;