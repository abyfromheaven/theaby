
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Calendar, ShieldCheck, Bookmark } from 'lucide-react';

// Import Assets with web-friendly names
import certCS from '../assets/certificates/badge_cs_tutorial.png';
import certCyber1 from '../assets/certificates/bootcamp_cyber_1m.png';
import certCyber3 from '../assets/certificates/bootcamp_cyber_3m.png';
import certAdvent from '../assets/certificates/advent_of_cyber_2025.png';
import certCompBasics from '../assets/certificates/computer_basics.png';
import certCTFIntrusion from '../assets/certificates/ctf_industrial_intrusion.png';
import certInternetBasics from '../assets/certificates/internet_basics.png';
import certKID2 from '../assets/certificates/kid2_cyber_heist.png';
import certOlimEmas from '../assets/certificates/olimpiade_emas.png';
import certOlimJabar from '../assets/certificates/olimpiade_jabar.png';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Medali Emas - Olimpiade Informatika Nasional",
    issuer: "University ID Educational",
    date: "2024",
    description: "Meraih Medali Emas dan Peringkat 80 Nasional dalam Kompetisi Informatika tingkat Nasional, menunjukkan penguasaan algoritma dan logika pemrograman yang kuat.",
    image: certOlimEmas,
  },
  {
    id: 2,
    title: "Peringkat 17 Jawa Barat - Olimpiade Informatika",
    issuer: "University ID Educational",
    date: "2024",
    description: "Pencapaian luar biasa dengan menempati Peringkat 17 di tingkat Provinsi Jawa Barat pada cabang Informatika.",
    image: certOlimJabar,
  },
  {
    id: 3,
    title: "Cyber Security Bootcamp (3 Bulan)",
    issuer: "ID-Networkers",
    date: "2024",
    description: "Program intensif selama 3 bulan yang mencakup pemahaman mendalam tentang pertahanan jaringan, keamanan sistem, dan mitigasi serangan siber.",
    image: certCyber3,
  },
  {
    id: 4,
    title: "Clash of Cyber Heist (KID#2) - Peserta",
    issuer: "Telkom CorpU",
    date: "2024",
    description: "Partisipasi aktif dalam event kompetisi keamanan siber bertajuk Clash of Cyber Heist.",
    image: certKID2,
  },
  {
    id: 5,
    title: "CTF Challenge: Industrial Intrusion",
    issuer: "TryHackMe",
    date: "2024",
    description: "Menyelesaikan tantangan Capture The Flag (CTF) yang berfokus pada kerentanan sistem industri dan eksploitasi keamanan.",
    image: certCTFIntrusion,
  },
  {
    id: 6,
    title: "Advent of Cyber 2025",
    issuer: "TryHackMe",
    date: "2025",
    description: "Penyelesaian tantangan keamanan harian yang mencakup berbagai topik mulai dari forensik hingga keamanan web selama periode Advent of Cyber.",
    image: certAdvent,
  },
  {
    id: 7,
    title: "Cyber Security Bootcamp (1 Bulan)",
    issuer: "ID-Networkers",
    date: "2024",
    description: "Kursus intensif dasar-dasar keamanan siber, fokus pada operasional keamanan dan prinsip dasar perlindungan data.",
    image: certCyber1,
  },
  {
    id: 8,
    title: "Computer Science Tutorial Badge",
    issuer: "GCFGlobal",
    date: "2024",
    description: "Lencana penyelesaian untuk dasar-dasar ilmu komputer, mencakup teori komputasi dan struktur data.",
    image: certCS,
  },
  {
    id: 9,
    title: "Computer Basics",
    issuer: "GCFGlobal",
    date: "2024",
    description: "Sertifikasi yang memvalidasi pemahaman fundamental tentang perangkat keras komputer dan sistem operasi.",
    image: certCompBasics,
  },
  {
    id: 10,
    title: "Internet Basics Certification",
    issuer: "GCFGlobal",
    date: "2024",
    description: "Validasi keahlian dalam penggunaan internet, keamanan online, dan komunikasi digital.",
    image: certInternetBasics,
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // For the infinite marquee effect, we duplicate the list
  const duplicatedCerts = [...certificates, ...certificates, ...certificates];

  const handlePointerDown = () => setIsDragging(false);
  const handleDragStart = () => setIsDragging(true);
  
  const handleCertClick = (cert: Certificate) => {
    if (!isDragging) {
      setSelectedCert(cert);
    }
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px bg-emerald-500/50 flex-1 max-w-[50px]"></div>
          <h2 className="text-emerald-400 font-mono text-sm tracking-wider uppercase">Credentials & Achievements</h2>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Verified <span className="text-slate-500">Expertise</span>
        </motion.h3>
      </div>

      {/* Marquee Container */}
      <div className="relative group cursor-grab active:cursor-grabbing overflow-hidden py-8">
        <motion.div 
          className="flex gap-6 w-max"
          animate={{
            x: ["-33.33%", "-66.66%"]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
            pauseOnHover: true
          }}
          drag="x"
          onPointerDown={handlePointerDown}
          onDragStart={handleDragStart}
          dragConstraints={{ left: -10000, right: 10000 }} // Allow more freedom for dragging
          whileTap={{ cursor: "grabbing" }}
        >
          {duplicatedCerts.map((cert, index) => (
            <motion.div
              key={`${cert.id}-${index}`}
              onPointerUp={() => handleCertClick(cert)}
              className="w-[300px] md:w-[400px] shrink-0 glass-card p-4 group/card hover:border-emerald-500/30 transition-all duration-500 cursor-pointer select-none"
            >
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-4 border border-white/5 bg-slate-900 pointer-events-none">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 opacity-80 group-hover/card:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-emerald-400" />
                    <span className="text-xs font-medium text-white uppercase tracking-wider">{cert.issuer}</span>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white group-hover/card:text-emerald-400 transition-colors line-clamp-1 pointer-events-none">{cert.title}</h4>
              <p className="text-slate-400 text-sm mt-1 pointer-events-none">{cert.date}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Modal / Certificate Detail Window */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Bookmark size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Achievement Profile</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Formal recognition details</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-slate-800 shadow-lg cursor-zoom-in">
                    <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-contain bg-slate-950" />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-emerald-400 font-medium">
                          <ShieldCheck size={16} />
                          <span>{selectedCert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Calendar size={14} />
                          <span>Year: {selectedCert.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 bg-slate-950/50 border-t border-white/5 text-center">
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">End of credential display</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
