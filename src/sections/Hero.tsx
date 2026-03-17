
import { motion } from 'framer-motion';
import { ArrowRight, Code2, User } from 'lucide-react';
import abyPhoto from '../assets/aby_photo.jpg';

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
              Crafting Secure & Robust Digital Experiences.
            </h2>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Seorang Web Developer dan Cybersecurity Enthusiast yang berdedikasi untuk menciptakan solusi digital yang aman. Berpengalaman dalam memimpin komunitas IT dan berkomitmen untuk terus meningkatkan integritas digital melalui kode yang tangguh.
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
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
            >
              Get In Touch
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
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40 z-10 pointer-events-none"></div>
             
             {/* Actual Image */}
             <img 
               src={abyPhoto} 
               alt="Muhamad Abiyan Hafidz (Aby)" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />

             {/* Text Overlay on hover/idle */}
             <div className="absolute inset-0 flex items-end p-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-slate-900/80 to-transparent">
                <p className="text-slate-200 font-mono text-sm">"Code with security in mind, build with passion."</p>
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
