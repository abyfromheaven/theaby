
import { motion } from 'framer-motion';
import { Code, Terminal, Layers } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Software Engineering",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      skills: [
        { name: "React / Vite / Tailwind", context: "Diterapkan pada: Platform LMS & Portfolio" },
        { name: "Python / OpenCV", context: "Diterapkan pada: Sistem Autentikasi AI" },
        { name: "Node.js / Express / REST", context: "Diterapkan pada: Arsitektur Backend" },
        { name: "Database Management", context: "Diterapkan pada: PostgreSQL & SQLite" }
      ]
    },
    {
      title: "Digital Integrity & Security",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      skills: [
        { name: "Security Auditing", context: "Diterapkan pada: Analisis Kerentanan Web" },
        { name: "Network Analysis", context: "Diterapkan pada: Monitoring Infrastruktur" },
        { name: "Security Research", context: "Diterapkan pada: Eksplorasi Ancaman Digital" },
        { name: "Open-Source Intelligence", context: "Diterapkan pada: Riset Data Publik" },
      ]
    },
    {
      title: "Systems & Infrastructure",
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      skills: [
        { name: "Linux Administration", context: "Diterapkan pada: Manajemen Server" },
        { name: "Docker Containerization", context: "Diterapkan pada: Deployment Aplikasi" },
        { name: "Git / Version Control", context: "Diterapkan pada: Kolaborasi Tim" },
        { name: "Bash & Automation", context: "Diterapkan pada: Optimasi Workflow" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-end gap-4 mb-4"
          >
            <h2 className="text-emerald-400 font-mono text-sm tracking-wider uppercase">Technical Stack</h2>
            <div className="h-px bg-emerald-500/50 flex-1 max-w-[50px]"></div>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white text-right"
          >
            Capabilities & <span className="text-slate-500">Context</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 group border border-white/5 bg-slate-800/20"
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                <div className="p-2 bg-slate-800 rounded-lg border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">{category.title}</h4>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="relative group/skill">
                    <div className="flex justify-between items-start">
                      <h5 className="text-slate-200 font-medium mb-1">{skill.name}</h5>
                    </div>
                    
                    {/* Context Badge (The "Wow" factor requested in blueprint) */}
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-sm bg-emerald-500/50"></div>
                      <p className="text-xs font-mono text-slate-500 leading-snug">{skill.context}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
