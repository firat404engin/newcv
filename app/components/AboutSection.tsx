'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dictionary } from '../../lib/i18n';
import { FiCode, FiDatabase, FiLayers } from 'react-icons/fi';

interface AboutSectionProps {
  dict: Dictionary;
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Kişisel kod stili özgeçmiş
  const me = {
    role: "Computer Engineer",
    location: "Türkiye",
    experience: 5,
    education: "Computer Engineering, XYZ University",
    stack: [
      "JavaScript/TypeScript",
      "React",
      "Next.js",
      "Node.js",
      ".NET Core",
      "SQL",
      "NoSQL",
    ],
    interests: [
      "Web Development",
      "Mobile Apps",
      "AI/ML",
      "Cloud Computing"
    ]
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden w-full">
      {/* Arkaplan Efekti */}
      <div className="absolute inset-0 z-0" />
      
      {/* Dekoratif Arka Şekiller */}
      <div className="absolute top-40 right-20 w-[30vw] h-[30vw] bg-[#6B8E23]/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-40 left-20 w-[30vw] h-[30vw] bg-green-700/5 rounded-full filter blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Sol taraf - Metin */}
          <motion.div variants={itemVariants}>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-sm font-medium">
              {dict.common.about}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-[#6B8E23] to-green-700">{dict.home.about.title}</h2>
            <p className="text-lg mb-8 text-white/80">
              {dict.home.about.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center p-6 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#6B8E23] flex items-center justify-center mb-4">
                  <FiCode className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Frontend</h3>
                <p className="text-center text-white/60 text-sm">
                  React, Next.js, TypeScript
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center p-6 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center mb-4">
                  <FiDatabase className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Backend</h3>
                <p className="text-center text-white/60 text-sm">
                  Node.js, .NET Core, SQL
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center p-6 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#6B8E23] flex items-center justify-center mb-4">
                  <FiLayers className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Architecture</h3>
                <p className="text-center text-white/60 text-sm">
                  Microservices, API Design
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Sağ taraf - Kod stili biyografi */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 p-8 rounded-xl overflow-hidden">
              <pre className="font-mono text-sm md:text-base overflow-x-auto">
                <code className="language-javascript">
{`const me = {
  role: "${me.role}",
  location: "${me.location}",
  experience: ${me.experience} + " years",
  education: "${me.education}",
  stack: [
${me.stack.map(tech => `    "${tech}"`).join(',\n')}
  ],
  interests: [
${me.interests.map(interest => `    "${interest}"`).join(',\n')}
  ],
  contact: {
    email: "hello@example.com",
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourusername"
  }
}`}
                </code>
              </pre>
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Animasyonlu Parıltı Efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B8E23]/5 via-green-700/5 to-[#6B8E23]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Dekoratif Elemanlar */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#6B8E23]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-700/10 rounded-full blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 