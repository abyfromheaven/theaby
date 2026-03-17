
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, User, ShieldCheck } from 'lucide-react';
import abyPhoto from '../assets/aby_photo.jpg';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto-flip every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            <User size={16} />
            <span>Personal Portfolio</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Muhamad Abiyan Hafidz (Aby)</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-200 mb-6">
              Engineering High-Performance & Resilient Digital Solutions.
            </h2>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Seorang Software Engineer yang berdedikasi untuk membangun aplikasi web yang modern dan efisien. Saya fokus pada arsitektur yang kokoh dan pengalaman pengguna yang seamless, dengan perhatian mendalam pada integritas dan keandalan sistem.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-semibold transition-all group"
            >
              <Code2 size={20} />
              Explore My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
            >
              Connect with Me
            </a>
          </motion.div>
        </div>

        {/* Right Content - Floating Flip Card */}
        <div className="flex justify-center items-center relative lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:ml-auto w-full max-w-[320px]"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-[2rem] blur-3xl -z-10"></div>
            
            {/* The Card Container */}
            <div 
              className="relative aspect-[3/4] cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="w-full h-full relative"
                animate={{ 
                  rotateY: isFlipped ? 180 : 0,
                  y: [0, -15, 0] // Floating animation
                }}
                transition={{ 
                  rotateY: { duration: 0.8, ease: "easeInOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side - User Photo */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-md overflow-hidden shadow-2xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                   <img 
                     src={abyPhoto} 
                     alt="Muhamad Abiyan Hafidz (Aby)" 
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-white font-medium text-sm">Available for work</span>
                      </div>
                   </div>
                </div>

                {/* Back Side - Polos/Nickname Profile */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl border border-white/20 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center gap-6 shadow-2xl shadow-emerald-500/10"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                       <User size={64} className="text-emerald-500/50" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-2 rounded-lg shadow-lg">
                       <Code2 size={20} className="text-slate-900" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white tracking-widest uppercase font-mono">aby</h3>
                    <p className="text-emerald-400 text-sm mt-1 font-medium">Software Engineer</p>
                  </div>
                  <div className="mt-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
                     <p className="text-slate-400 text-xs font-mono italic">"Precision in every line"</p>
                  </div>
                </div>
              </motion.div>

              {/* Tap Indicator for Mobile */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-500 text-xs font-mono lg:hidden">
                Tap to flip
              </div>
            </div>
            
            {/* Floating Badge (Secondary) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-md z-30 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-emerald-400" />
                </div>
                <p className="text-sm font-medium text-slate-300">Resilient by Design</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
