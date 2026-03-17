
import { motion } from 'framer-motion';
import { Shield, Code2, Users } from 'lucide-react';

const Philosophy = () => {
  const cards = [
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: "Reliable Foundations",
      description: "Membangun dengan standar kualitas tinggi sejak baris kode pertama. Saya percaya bahwa keandalan bukan sekadar fitur, melainkan prinsip dasar yang harus dijaga."
    },
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Performance Driven",
      description: "Mengoptimalkan setiap detail untuk kecepatan dan efisiensi. Menciptakan solusi yang tidak hanya fungsional, tetapi juga memberikan pengalaman yang responsif."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "Collaborative Growth",
      description: "Percaya pada kekuatan kolaborasi dan berbagi pengetahuan. Fokus pada komunikasi yang jelas untuk mengubah kompleksitas teknis menjadi solusi nyata."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Philosophy</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Bagi saya, teknologi adalah tentang membangun solusi yang berkelanjutan dan terpercaya. Saya menggabungkan presisi teknis dengan pemikiran strategis untuk menciptakan karya digital yang bermakna dan berdampak.
            </p>
          </motion.div>
        </div>

        {/* Value Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-8 relative overflow-hidden group"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-slate-800/50 border border-white/5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
