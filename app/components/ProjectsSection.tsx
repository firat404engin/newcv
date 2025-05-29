'use client';

import React, { useMemo, useCallback } from 'react';
import { Project } from '../../lib/types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Hash, Layers } from 'lucide-react';
import Image from 'next/image';

interface ProjectsSectionProps {
  dict: any;
  projects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ dict, projects = [] }) => {
  // Varsayılan projeler (props olarak gelmezse)
  const defaultProjects: Project[] = useMemo(() => [
    {
      id: 1,
      title: 'Modern E-Ticaret Platformu',
      description: 'Next.js ile geliştirilmiş, tam kapsamlı bir e-ticaret çözümü. API entegrasyonları, ödeme işlemleri ve kullanıcı yönetimi bulunuyor.',
      category: 'Web',
      tech_stack: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Stripe'],
      github_link: 'https://github.com/username/ecommerce-platform',
      demo_link: 'https://ecommerce-demo.example.com',
      created_at: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
      tags: ['E-ticaret', 'Full-Stack', 'Responsive']
    },
    {
      id: 2,
      title: 'Mobil Fitness Uygulaması',
      description: 'Kişiselleştirilmiş fitness planları sunan ve kullanıcı gelişimini takip eden kapsamlı bir mobil uygulama.',
      category: 'Mobil',
      tech_stack: ['React Native', 'Firebase', 'Redux', 'Expo'],
      github_link: 'https://github.com/username/fitness-app',
      created_at: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=1932&auto=format&fit=crop',
      tags: ['Fitness', 'Mobil', 'Health-Tech']
    },
    {
      id: 3,
      title: 'Yapay Zeka Destekli Veri Analiz Aracı',
      description: 'Karmaşık veri setlerini analiz eden ve görselleştiren, makine öğrenimi algoritmaları kullanan web uygulaması.',
      category: 'Veri Bilimi',
      tech_stack: ['Python', 'TensorFlow', 'React', 'Flask', 'D3.js'],
      github_link: 'https://github.com/username/ai-data-analyzer',
      demo_link: 'https://ai-analyzer.example.com',
      created_at: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      tags: ['Yapay Zeka', 'Veri Analizi', 'ML']
    },
    {
      id: 4,
      title: 'Kişisel Finans Yönetim Sistemi',
      description: 'Gelir-gider takibi, bütçe planlaması ve finansal hedefler için geliştirilmiş modern bir web uygulaması.',
      category: 'Web',
      tech_stack: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js'],
      github_link: 'https://github.com/username/finance-manager',
      demo_link: 'https://finance-app.example.com',
      created_at: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?q=80&w=2070&auto=format&fit=crop',
      tags: ['Finans', 'Dashboard', 'CRUD']
    },
    {
      id: 5,
      title: 'Blockchain Tabanlı Oyun Platformu',
      description: 'NFT entegrasyonlu, blok zinciri altyapısını kullanan, çok oyunculu oyun deneyimi sunan platform.',
      category: 'Blockchain',
      tech_stack: ['Solidity', 'Ethereum', 'React', 'Web3.js', 'Three.js'],
      github_link: 'https://github.com/username/blockchain-game',
      demo_link: 'https://crypto-game.example.com',
      created_at: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop',
      tags: ['Blockchain', 'NFT', 'Web3', 'Oyun']
    },
    {
      id: 6,
      title: 'Akıllı Ev Otomasyon Sistemi',
      description: 'IoT cihazlarını kontrol eden, ses komutlarıyla çalışan ve enerji verimliliği sağlayan akıllı ev çözümü.',
      category: 'IoT',
      tech_stack: ['Arduino', 'Raspberry Pi', 'MQTT', 'React', 'Node.js'],
      github_link: 'https://github.com/username/smart-home',
      created_at: new Date().toISOString(),
      imageUrl: 'https://images.unsplash.com/photo-1585032767761-878270336a0e?q=80&w=2070&auto=format&fit=crop',
      tags: ['IoT', 'Smart Home', 'Otomasyon']
    }
  ], []);

  const displayProjects = useMemo(() => 
    projects.length > 0 ? projects : defaultProjects
  , [projects, defaultProjects]);
  
  // Badge renk haritası
  const getBadgeColor = useCallback((tech: string) => {
    const techColorMap: Record<string, string> = {
      'React': 'bg-blue-500',
      'Next.js': 'bg-black border border-white/20',
      'Vue.js': 'bg-emerald-500',
      'Angular': 'bg-red-500',
      'Node.js': 'bg-green-600',
      'Express': 'bg-gray-500',
      'MongoDB': 'bg-green-500',
      'PostgreSQL': 'bg-blue-600',
      'MySQL': 'bg-blue-500',
      'Firebase': 'bg-amber-500',
      'Tailwind CSS': 'bg-teal-500',
      'Bootstrap': 'bg-purple-500',
      'TypeScript': 'bg-blue-600',
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-blue-500',
      'Django': 'bg-green-700',
      'Flask': 'bg-gray-700',
      'PHP': 'bg-indigo-600',
      'Laravel': 'bg-red-600',
      'Ruby': 'bg-red-500',
      'Rails': 'bg-red-600',
      'Java': 'bg-amber-600',
      'Spring': 'bg-green-600',
      'C#': 'bg-green-600',
      '.NET': 'bg-blue-600',
      'Rust': 'bg-orange-600',
      'Go': 'bg-blue-500',
      'Swift': 'bg-orange-500',
      'Kotlin': 'bg-green-500',
      'Flutter': 'bg-blue-400',
      'React Native': 'bg-blue-600',
      'Expo': 'bg-black border border-white/20',
      'Redux': 'bg-green-600',
      'GraphQL': 'bg-green-600',
      'REST API': 'bg-green-500',
      'Docker': 'bg-blue-600',
      'Kubernetes': 'bg-blue-500',
      'AWS': 'bg-amber-600',
      'Azure': 'bg-blue-600',
      'GCP': 'bg-red-500',
      'Vercel': 'bg-black border border-white/20',
      'Netlify': 'bg-teal-600',
      'Heroku': 'bg-purple-600',
      'TensorFlow': 'bg-orange-500',
      'PyTorch': 'bg-red-600',
      'Stripe': 'bg-indigo-500',
      'Solidity': 'bg-gray-600',
      'Ethereum': 'bg-purple-400',
      'Web3.js': 'bg-amber-600',
      'D3.js': 'bg-orange-500',
      'Chart.js': 'bg-pink-500',
      'Three.js': 'bg-black border border-white/20',
      'MQTT': 'bg-green-600',
      'Arduino': 'bg-teal-600',
      'Raspberry Pi': 'bg-red-600'
    };
    
    return techColorMap[tech] || 'bg-indigo-500';
  }, []);
  
  // Animasyon varyantları
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);
  
  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }), []);
  
  // IntersectionObserver hook
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Placeholder görsel URL - Memo'lu versiyon
  const getPlaceholderImage = useCallback((category: string) => {
    const placeholders = {
      'Web': 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop',
      'Mobil': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
      'Masaüstü': 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop',
      'Yapay Zeka': 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2066&auto=format&fit=crop',
      'Veri Bilimi': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop',
      'Blockchain': 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2032&auto=format&fit=crop',
      'IoT': 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop',
    };
    
    return placeholders[category] || 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop';
  }, []);

  // Lazy loading ile proje kartları
  const renderProjectCard = useCallback((project: Project) => (
    <motion.div 
      key={project.id}
      variants={cardVariants}
      className="flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300"
    >
      {/* Proje Görseli - Sol Taraf */}
      <div className="relative w-full md:w-1/2 h-[250px] md:h-auto overflow-hidden">
        <div className="absolute inset-0 group">
          <div className="w-full h-full relative overflow-hidden">
            <div className="w-full h-full absolute transition-transform duration-500 group-hover:scale-110">
              <Image 
                src={project.imageUrl || getPlaceholderImage(project.category)}
                alt={project.title}
                className="w-full h-full object-cover"
                width={800}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdQI2QVbABQAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60" />
            
            {/* Kategori Etiket - Görselin Üzerinde */}
            <div className="absolute top-4 left-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#6B8E23]/90 text-white backdrop-blur-sm">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Proje Bilgileri - Sağ Taraf */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          {/* Başlık */}
          <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
          
          {/* Açıklama */}
          <p className="text-sm text-gray-400 mb-4">{project.description}</p>
          
          {/* Teknolojiler */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech_stack.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white ${getBadgeColor(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Etiketler */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="inline-flex items-center text-xs text-green-300">
                  <Hash size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Butonlar */}
        <div className="flex flex-wrap gap-3 mt-2">
          {project.github_link && (
            <a 
              href={project.github_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded bg-white text-black hover:bg-gray-200 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          
          {project.demo_link && (
            <a 
              href={project.demo_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded bg-[#6B8E23] text-white hover:bg-green-700 transition-colors"
            >
              <ExternalLink size={16} />
              <span>{dict.home.projects.viewLive}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  ), [getBadgeColor, getPlaceholderImage, cardVariants, dict]);

  return (
    <section id="projects" className="py-20 w-full relative overflow-hidden">
      <div className="absolute top-40 left-20 w-[30vw] h-[30vw] bg-[#6B8E23]/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-40 right-20 w-[30vw] h-[30vw] bg-green-700/5 rounded-full filter blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-sm font-medium">
            {dict.common.projects}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-[#6B8E23] to-green-700">
            {dict.home.projects.title}
          </h2>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-10"
        >
          {displayProjects.map(renderProjectCard)}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ProjectsSection); 