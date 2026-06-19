import { Link } from 'react-router-dom';

export default function Magazin() {
  return (
    <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col justify-center items-center px-4">
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">Core Journal</h2>
      <p className="text-zinc-400 mb-8 max-w-md">Všechny články, kite triky, FPV návody a reporty z tripů na jednom místě.</p>
      <Link to="/" className="text-xs font-bold uppercase tracking-widest bg-white text-black px-6 py-4 hover:bg-yellow-400 transition">
        Zpět na hlavní stránku
      </Link>
    </div>
  );
}