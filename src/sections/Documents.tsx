import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Download } from 'lucide-react';

const Documents = () => {
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  const docs = [
    {
      id: "pentest-01",
      title: "Web Application Pentest Report",
      type: "Vulnerability Assessment",
      date: "Oct 2025",
      pages: 14,
      desc: "Penilaian komprehensif dari platform e-commerce tiruan yang mengidentifikasi kontrol akses yang rusak dan kerentanan SQLi.",
      coverColor: "from-rose-500/20 to-slate-900",
      url: "/docs/sample.pdf" // Example PDF path
    },
    {
      id: "malware-01",
      title: "Malware Analysis: Ransomware X",
      type: "Reverse Engineering",
      date: "Aug 2025",
      pages: 8,
      desc: "Analisis statis dan dinamis dari sampel ransomware yang merinci mekanisme persistensi dan rutinitas enkripsi.",
      coverColor: "from-amber-500/20 to-slate-900",
      url: "/docs/sample.pdf"
    },
    {
      id: "ctf-01",
      title: "HackTheBox: Cyber Apocalypse",
      type: "CTF Write-up",
      date: "May 2025",
      pages: 12,
      desc: "Panduan mendetail tentang tantangan web dan pwn dari acara HTB Cyber Apocalypse.",
      coverColor: "from-emerald-500/20 to-slate-900",
      url: "/docs/sample.pdf"
    }
  ];

  const currentDoc = docs.find(d => d.id === activeDoc);

  return (
    <section id="documents" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-white/10 text-slate-300 text-sm font-medium mb-6"
          >
            <FileText size={16} className="text-emerald-400" />
            <span>Technical Write-ups</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Analytical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Deep Dives</span>
          </motion.h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dokumentasi penelitian saya, metodologi uji penetrasi, dan pendekatan penyelesaian masalah CTF.
          </p>
        </div>

        {/* Horizontal Scroll / Carousel Layout */}
        <div className="flex overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scrollbar gap-8 px-4 -mx-4">
          {docs.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveDoc(doc.id)}
              className="min-w-[300px] md:min-w-[350px] snap-center cursor-pointer group"
            >
              {/* Document Cover (Book-like) */}
              <div className="relative aspect-[3/4] rounded-r-2xl rounded-l-md bg-slate-800 border border-slate-700 shadow-2xl overflow-hidden mb-6 transform transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-1">
                {/* Book Binding/Spine Line */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent z-20"></div>
                <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 z-20"></div>
                
                {/* Cover Design */}
                <div className={`absolute inset-0 bg-gradient-to-b ${doc.coverColor} opacity-50`}></div>
                <div className="absolute inset-0 p-8 flex flex-col z-10">
                  <div className="mb-auto">
                    <p className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-4 opacity-80 border-b border-white/10 pb-2">Confidential / {doc.type}</p>
                    <h4 className="text-2xl font-bold text-white leading-tight">{doc.title}</h4>
                  </div>
                  <div className="mt-auto flex justify-between items-end border-t border-white/10 pt-4">
                    <span className="text-xs text-slate-400 font-mono">{doc.date}</span>
                    <span className="text-xs text-slate-400 font-mono">{doc.pages} Pages</span>
                  </div>
                </div>
              </div>
              
              {/* Document Meta below cover */}
              <div className="px-2">
                <h5 className="text-white font-medium mb-2 group-hover:text-emerald-400 transition-colors">{doc.title}</h5>
                <p className="text-sm text-slate-500 line-clamp-2">{doc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* PDF Modal Viewer */}
      <AnimatePresence>
        {activeDoc && currentDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Header / Actions */}
            <div className="w-full max-w-6xl flex justify-between items-center mb-4 px-2">
              <h3 className="text-xl font-bold text-white truncate max-w-[70%]">{currentDoc.title}</h3>
              <div className="flex gap-4">
                <a 
                  href={currentDoc.url}
                  download
                  className="p-2 md:px-4 md:py-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-full md:rounded-lg text-emerald-400 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Download size={18} /> <span className="hidden md:inline">Download</span>
                </a>
                <button 
                  onClick={() => setActiveDoc(null)}
                  className="p-2 md:px-4 md:py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full md:rounded-lg transition-colors flex items-center gap-2"
                >
                  <X size={20} /> <span className="hidden md:inline">Close</span>
                </button>
              </div>
            </div>

            {/* Embed PDF Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="w-full max-w-6xl flex-1 bg-slate-800 rounded-xl border border-white/10 shadow-2xl overflow-hidden relative"
            >
               <iframe 
                 src={`${currentDoc.url}#toolbar=0&navpanes=0&scrollbar=0`}
                 className="w-full h-full border-none"
                 title={currentDoc.title}
                 loading="lazy"
               />
               
               {/* Fallback for browsers that don't support iframe PDF viewing */}
               <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-center p-8 bg-slate-900">
                  <FileText className="w-16 h-16 text-slate-600 mb-4" />
                  <p className="text-slate-400 mb-6">Browser Anda mungkin tidak mendukung tampilan PDF langsung.</p>
                  <a 
                    href={currentDoc.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="px-6 py-3 bg-emerald-500 text-slate-950 rounded-lg font-medium hover:bg-emerald-400 transition-colors"
                  >
                    Open PDF Document
                  </a>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Documents;
