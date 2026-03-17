
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xl tracking-tight"
        >
          <Terminal size={24} />
          <span>aby.sec</span>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex gap-8 text-sm font-medium text-slate-300"
        >
          <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#projects" className="hover:text-white transition-colors">Ventures</a>
          <a href="#experience" className="hover:text-white transition-colors">Operations</a>
          <a href="#documents" className="hover:text-emerald-400 transition-colors">Write-ups</a>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
