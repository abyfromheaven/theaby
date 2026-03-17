
import { motion } from 'framer-motion';
import { ShieldAlert, ServerCog, Lightbulb } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px bg-emerald-500/50 flex-1 max-w-[50px]"></div>
            <h2 className="text-emerald-400 font-mono text-sm tracking-wider uppercase">Real-World Impact</h2>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Core <span className="text-slate-500">Operations</span>
          </motion.h3>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Main Card: IT Club Founder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-card p-8 group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 inline-block">
                  <Lightbulb size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 border border-slate-700/50 rounded-full px-3 py-1 bg-slate-800/50">2023 - Present</span>
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-2">Founder & Lead Mentor</h4>
              <p className="text-emerald-400 font-medium mb-4">School IT Club</p>
              
              <p className="text-slate-400 leading-relaxed max-w-xl">
                Mendirikan inisiatif teknologi pertama yang dipimpin siswa dengan fokus pada rekayasa perangkat lunak pragmatis dan prinsip keamanan defensif. Mengembangkan kurikulum yang berpusat pada praktik pengkodean aman, dasar-dasar CTF, dan administrasi sistem. Membimbing 30+ siswa dalam bertransformasi dari konsumen pasif menjadi pembangun aktif.
              </p>
            </div>
          </motion.div>

          {/* Secondary Card 1: IT Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 group relative overflow-hidden"
          >
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
            
            <div className="mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 inline-block">
                <ServerCog size={24} />
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-2">Junior IT Support</h4>
            <p className="text-cyan-400 font-medium text-sm mb-4">Local Enterprise</p>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Memelihara infrastruktur jaringan, menyelesaikan anomali perangkat keras, dan menegakkan kepatuhan keamanan endpoint dasar. Mendapatkan pengalaman langsung dengan manajemen identitas dan triase insiden tier 1.
            </p>
          </motion.div>

          {/* Secondary Card 2: Security Researcher */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 lg:col-span-1 glass-card p-8 group overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Independent Researcher</h4>
                <p className="text-indigo-400 text-sm">Continuous Learning</p>
              </div>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-emerald-500 mt-1">▹</span>
                Peserta aktif dalam kompetisi Capture The Flag (CTF) lokal dan daring.
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-emerald-500 mt-1">▹</span>
                Melakukan uji penetrasi terkendali pada lingkungan lab pribadi (HackTheBox, TryHackMe).
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-emerald-500 mt-1">▹</span>
                Menganalisis sampel malware di lingkungan sandbox untuk memahami mekanisme persistensi.
              </li>
            </ul>
          </motion.div>
          
          {/* Stats/Highlight Card */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 lg:col-span-2 glass-card p-8 group overflow-hidden flex items-center justify-between"
          >
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full block">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">3+</div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">15+</div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">CTFs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">30+</div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Mentees</div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
