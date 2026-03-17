
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Lock, Layout } from 'lucide-react';
import fastPreview from '../assets/fast_preview.jpg';

const Projects = () => {
  const projects = [
    {
      title: "FAST (Face Authentication System)",
      role: "Lead Developer",
      description: "Sistem autentikasi berbasis AI yang dirancang untuk presisi dan kecepatan. Menggunakan OpenCV untuk pengenalan wajah dengan fokus pada integritas data dan pemrosesan lokal yang efisien.",
      insight: "Mengoptimalkan algoritma pengenalan wajah untuk akurasi tinggi di berbagai kondisi pencahayaan, memastikan pengalaman login yang seamless namun tetap terjaga keandalannya.",
      tech: ["Python", "OpenCV", "SQLite", "Tkinter"],
      link: "https://abyfromheaven.github.io/FAST/",
      github: "https://github.com/abyfromheaven/FAST",
      image: fastPreview,
      // Representational image gradients for now
      bgGradient: "from-emerald-900/40 to-slate-900"
    },
    {
      title: "Learnify LMS Platform",
      role: "Full-Stack Developer",
      description: "Platform Manajemen Pembelajaran yang komprehensif, dibangun untuk menangani distribusi konten secara efisien dengan skalabilitas yang tinggi.",
      insight: "Merancang arsitektur database yang efisien dan manajemen akses pengguna yang terstruktur untuk mendukung ribuan pengguna tanpa mengorbankan performa sistem.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      link: "#",
      github: "#",
      bgGradient: "from-cyan-900/40 to-slate-900"
    },
    {
      title: "AmanDulu Application",
      role: "System Architect",
      description: "Dashboard pemantauan sistem proaktif yang menyajikan data performa dan laporan kesehatan infrastruktur secara real-time untuk tim operasional.",
      insight: "Mengimplementasikan enkripsi data end-to-end dan validasi input yang ketat untuk memastikan integritas laporan yang dihasilkan oleh sistem pemantauan.",
      tech: ["Vue.js", "Python", "Docker", "REST API"],
      link: "#",
      github: "#",
      bgGradient: "from-indigo-900/40 to-slate-900"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px bg-emerald-500/50 flex-1 max-w-[50px]"></div>
            <h2 className="text-emerald-400 font-mono text-sm tracking-wider uppercase">Project Portfolio</h2>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Selected <span className="text-slate-500">Works</span>
          </motion.h3>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              
              {/* Project Visual Presentation */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <a 
                  href={project.link} 
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                  className="block group relative rounded-2xl overflow-hidden aspect-video border border-white/10 bg-slate-800"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {project.image ? (
                    <motion.div 
                      animate={{ y: [0, -15, 0] }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute inset-4 rounded-xl border border-white/10 bg-slate-950 shadow-2xl flex flex-col overflow-hidden"
                    >
                      {/* macOS Window Header */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-900/50">
                         <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                         <div className="ml-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden sm:block">
                           {project.title.split(' ')[0]} Explorer
                         </div>
                      </div>
                      
                      {/* Window Content (Image) */}
                      <div className="flex-1 overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none"></div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Abstract UI representation */
                    <div className="absolute inset-4 rounded-xl border border-white/5 bg-slate-950/50 backdrop-blur-sm p-4 flex flex-col gap-4 transform group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                      <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                         <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                         <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                         <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                      </div>
                      <div className="flex-1 rounded border border-white/5 bg-white/5 flex items-center justify-center">
                         <Layout className="w-12 h-12 text-slate-600 opacity-50" />
                      </div>
                    </div>
                  )}
                </a>
              </motion.div>

              {/* Project Details */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-emerald-400 font-medium text-sm">{project.role}</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5 backdrop-blur-sm text-slate-300 leading-relaxed">
                  <p className="mb-4">{project.description}</p>
                  
                  {/* Technical Highlight Block */}
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Layout className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold text-sm">Technical Highlight</span>
                    </div>
                    <p className="text-sm text-slate-400">"{project.insight}"</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-700 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <a 
                    href={project.github} 
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a 
                    href={project.link} 
                    target={project.link !== "#" ? "_blank" : undefined}
                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    View Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

