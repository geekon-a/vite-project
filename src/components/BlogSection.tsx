import { useState, useEffect } from "react";

export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface BlogSectionProps {
  title: string;
  subtitle?: string;
  articles: Article[];
  magazineLink?: string;
  autoPlayInterval?: number;
}

function BlogSection({ 
  title, 
  subtitle = "Core Journal", 
  articles, 
  magazineLink = "/magazin",
  autoPlayInterval = 5000 
}: BlogSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval, articles.length]);

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="bg-black py-24 text-white border-t border-zinc-900 overflow-hidden">
      {/* Tady nadefinujeme CSS animace přímo pro tento komponent */}
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animace-zprava { animation: slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animace-zleva { animation: slideInFromLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HLAVIČKA SEKCE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-yellow-400 text-xs font-black uppercase tracking-widest mb-2">
              {subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              {title}
            </h2>
          </div>
                      
            <a 
              href={magazineLink} 
              className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest bg-zinc-950 border border-zinc-900 px-6 py-3.5 rounded hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
            >
              Všechny články 
              {/* Přidali jsme group-hover:text-black, aby šipka na žlutém pozadí zčernala */}
              <span className="text-yellow-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
                →
              </span>
            </a>
        </div>

        {/* CONTAINER SLIDERU S NATÍVNÍM CSS SLIDEM */}
        <div 
          key={currentIndex}
          className={`relative bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[450px] ${
            direction === 'next' ? 'animace-zprava' : 'animace-zleva'
          }`}
        >
          
          {/* Levá strana: Obrázek */}
          <div className="relative h-64 md:h-full w-full overflow-hidden bg-zinc-900">
            <span className="absolute top-6 left-6 z-10 bg-black/70 backdrop-blur-md text-yellow-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded border border-zinc-800">
              {articles[currentIndex].category}
            </span>
            <img 
              src={articles[currentIndex].image} 
              alt={articles[currentIndex].title} 
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
            />
          </div>

          {/* Pravá strana: Obsah a šipky */}
          <div className="p-8 md:p-12 flex flex-col justify-between relative bg-zinc-950">
            <div className="space-y-4">
              <p className="text-xs text-zinc-500 font-bold tracking-wider uppercase">
                {articles[currentIndex].date}
              </p>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-white hover:text-yellow-400 cursor-pointer transition-colors">
                {articles[currentIndex].title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                {articles[currentIndex].excerpt}
              </p>
            </div>

            

            {/* Navigace */}
            <div className="flex items-center gap-4 mt-8 md:mt-0">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded border border-zinc-900 bg-zinc-900/50 flex items-center justify-center text-xl hover:border-yellow-400 hover:text-yellow-400 transition-all cursor-pointer active:scale-95 z-20"
              >
                ←
              </button>
              <span className="text-xs font-mono text-zinc-500">
                {String(currentIndex + 1).padStart(2, '0')} / {String(articles.length).padStart(2, '0')}
              </span>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded border border-zinc-900 bg-zinc-900/50 flex items-center justify-center text-xl hover:border-yellow-400 hover:text-yellow-400 transition-all cursor-pointer active:scale-95 z-20"
              >
                →
              </button>

              <button className="bg-white text-black font-black uppercase text-xs tracking-widest px-8 py-4 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
                Více info
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default BlogSection;