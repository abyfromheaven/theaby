
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05)_0%,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium"
          >
            <Shield size={16} />
            <span>Security-First Mindset</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">secure</span> systems.
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Bersemangat dalam membangun aplikasi yang tangguh dan terus memperluas keahlian keamanan ofensif saya. Dari Pendiri Klub IT hingga Penggemar Keamanan Siber.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#documents" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-semibold transition-all group"
            >
              <Terminal size={20} />
              Read Write-ups
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
            >
              Let's Talk Security
            </a>
          </motion.div>
        </div>

        {/* Right Content - Profile Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-[2rem] blur-3xl -z-10"></div>
          
          <div className="relative aspect-[4/5] rounded-[2rem] border border-white/10 bg-slate-800/50 backdrop-blur-sm overflow-hidden flex items-center justify-center grouped-hover group">
             {/* Placeholder for actual image */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10"></div>
             
             {/* Replace with <img src="/profile.jpg" alt="Aby" className="w-full h-full object-cover" /> when available */}
             <div className="text-center z-20 space-y-4">
                <Shield size={64} className="mx-auto text-slate-600 group-hover:text-emerald-500/50 transition-colors duration-500" />
                <p className="text-slate-500 font-mono text-sm [text-wrap:balance] px-8">"Saya menghargai rasa ingin tahu Anda jika Anda melihat ke balik layar."</p>
             </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-md z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <p className="text-sm font-medium text-slate-300">Ready for Challenges</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
