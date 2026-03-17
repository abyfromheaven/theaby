
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-t from-emerald-900/20 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase mb-6 opacity-90">
            Let's Talk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-6xl md:text-8xl">Security</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Saat ini sedang mencari peluang untuk menerapkan rekayasa defensif dan penelitian ofensif dalam lingkungan profesional.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href="mailto:aby@example.com" 
            className="flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] w-full md:w-auto justify-center"
          >
            <Mail size={24} />
            Reach Out Securely
          </a>

          <div className="flex items-center gap-4 w-full md:w-auto justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl text-slate-400 hover:text-emerald-400 transition-all hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl text-slate-400 hover:text-cyan-400 transition-all hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 border border-slate-700 hover:border-white/50 rounded-xl text-slate-400 hover:text-white transition-all hover:-translate-y-1"
              aria-label="Medium Blog"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
