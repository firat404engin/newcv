'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { TimelineItem } from '../../lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Briefcase, GraduationCap, Code, Clipboard, CheckCircle, ExternalLink } from 'lucide-react';

interface TimelineSectionProps {
  dict: any;
  timelineItems?: TimelineItem[];
  lang?: 'tr' | 'en';
}

interface Reference {
  id: number;
  name: string;
  title: string;
  email: string;
  photoUrl: string;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ dict, timelineItems = [], lang = 'tr' }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  
  // Kullanıcının dil tercihini belirle
  const langValue = lang;
  
  // Varsayılan zaman çizelgesi öğeleri (props olarak gelmezse)
  const defaultTimelineItems: TimelineItem[] = useMemo(() => [
    {
      id: 1,
      title: 'SERANİT',
      title_en: 'SERANIT',
      description: 'İnsan kaynakları süreçlerini dijitalleştirmek amacıyla C# ve .NET Framework ile masaüstü uygulamalar geliştirdim. Excel dosyalarından otomatik veri aktarımı ve Outlook entegrasyonu ile e-posta gönderimi gibi işlemleri kolaylaştırarak operasyonel verimlilik sağladım. Ayrıca Bimser CSP platformunda dijital form ve onay süreçlerinin tasarlanmasına katkıda bulundum.',
      description_en: 'Developed desktop applications using C# and .NET Framework to digitize HR processes. Improved operational efficiency by automating data transfers from Excel files and integrating Outlook email functionalities. Also contributed to digital form and approval process design using the Bimser CSP platform.',
      year: 2025,
      year_end: 2025,
      type: 'İş',
      created_at: new Date().toISOString(),
      location: 'İstanbul'
    },
    {
      id: 2,
      title: 'SERANİT',
      title_en: 'SERANIT',
      description: 'IFS sisteminde veri akışını sağlama ve gelen taleplere çözüm üretme üzerine çalışarak, Oracle SQL kullanarak çeşitli sorgular yazdım ve veri işlemleri gerçekleştirdim. Bu süreçte, operasyonel verimliliği artırmaya yönelik çözümler geliştirirken, Bimser CSP ile şirket içi süreçler de yazdım.',
      description_en: 'Worked on ensuring data flow in the IFS system and providing solutions to requests. Wrote various queries and performed data operations using Oracle SQL. Developed internal workflows using Bimser CSP to enhance operational efficiency.',
      year: 2024,
      year_end: 2024,
      type: 'İş',
      created_at: new Date().toISOString(),
      location: 'İstanbul'
    },
    {
      id: 3,
      title: 'Namık Kemal Üniversitesi - Bilgisayar Mühendisliği (GANO: 3.25)',
      title_en: 'Namık Kemal University - Computer Engineering (GPA: 3.25)',
      description: 'Bilgisayar mühendisliği alanında lisans eğitimimi tamamladım.',
      description_en: 'Completed my bachelor\'s degree in computer engineering.',
      year: 2022,
      year_end: 2025,
      type: 'Eğitim',
      created_at: new Date().toISOString()
    },
    {
      id: 4,
      title: 'Maltepe Üniversitesi - Bilgisayar Programcılığı (GANO: 3.00)',
      title_en: 'Maltepe University - Computer Programming (GPA: 3.00)',
      description: 'Bilgisayar programcılığı alanında ön lisans eğitimimi tamamladım.',
      description_en: 'Completed my associate degree in computer programming.',
      year: 2018,
      year_end: 2020,
      type: 'Eğitim',
      created_at: new Date().toISOString()
    }
  ], []);

  // Varsayılan referanslar
  const defaultReferences: Reference[] = useMemo(() => [
    {
      id: 1,
      name: 'Bayram ELPE',
      title: 'Yazılım Uzmanı, SERANİT',
      email: 'bayramelpe1@gmail.com',
      photoUrl: 'https://i.hizliresim.com/hz19zoj.jpg?_gl=1*bvnirx*_ga*MTIyODEzODcxNS4xNzQxMjA2NDQw*_ga_M9ZRXYS2YN*czE3NDg1MzcwMTUkbzEzJGcxJHQxNzQ4NTM3MDQ1JGozMCRsMCRoMA..'
    },
    {
      id: 2,
      name: 'Ayşe Kaya',
      title: 'Proje Yöneticisi, DEF Yazılım',
      email: 'ayse.kaya@gmail.com',
      photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Mehmet Demir',
      title: 'Öğretim Üyesi, Massachusetts Teknoloji Enstitüsü',
      email: 'mehmet.demir@gmail.com',
      photoUrl: 'https://randomuser.me/api/portraits/men/68.jpg'
    }
  ], []);

  // Timeline items ve references eşleştirmesi
  const timelineReferences = useMemo(() => ({
    1: defaultReferences[0], // İş -> Bayram ELPE
    2: defaultReferences[0], // Eğitim -> Mehmet Demir
    3: defaultReferences[1], // Staj -> Ayşe Kaya
    4: null // Projeye referans yok
  }), [defaultReferences]);

  const displayItems = useMemo(() => 
    timelineItems.length > 0 ? timelineItems : defaultTimelineItems
  , [timelineItems, defaultTimelineItems]);
  
  // Zaman çizelgesini yıla göre sırala (en yeniden en eskiye)
  const sortedItems = useMemo(() => 
    [...displayItems].sort((a, b) => b.year - a.year)
  , [displayItems]);

  // Tip simgesi seçimi
  const getItemIcon = useCallback((type: string) => {
    switch (type) {
      case 'İş':
      case 'Work':
        return <Briefcase className="w-5 h-5" />;
      case 'Eğitim':
      case 'Education':
        return <GraduationCap className="w-5 h-5" />;
      case 'Staj':
      case 'Internship':
        return <Calendar className="w-5 h-5" />;
      case 'Proje':
      case 'Project':
        return <Code className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  }, []);

  // Tip rengini belirleme
  const getItemColor = useCallback((type: string) => {
    switch (type) {
      case 'İş':
      case 'Work':
        return 'from-green-700 to-green-800';
      case 'Eğitim':
      case 'Education':
        return 'from-green-500 to-green-600';
      case 'Staj':
      case 'Internship':
        return 'from-amber-500 to-amber-600';
      case 'Proje':
      case 'Project':
        return 'from-[#6B8E23] to-green-700';
      default:
        return 'from-green-700 to-green-800';
    }
  }, []);
  
  // E-posta kopyalama işlevi
  const copyEmail = useCallback((email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  }, []);
  
  // Animasyon varyantları
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }), []);
  
  const referenceVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }), []);
  
  // IntersectionObserver hook'ları
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [referencesRef, referencesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Referans ID'si alımı
  const getReferenceId = useCallback((itemId: number): number | null => {
    return itemId in timelineReferences ? (timelineReferences as any)[itemId]?.id || null : null;
  }, [timelineReferences]);

  // Zaman çizelgesi öğesi render fonksiyonu
  const renderTimelineItem = useCallback((item: TimelineItem, index: number) => {
    const isLeft = index % 2 === 0;
    const referenceId = getReferenceId(item.id);
    const reference = referenceId ? defaultReferences.find(r => r.id === referenceId) : null;

    // Dile göre başlık ve açıklama seçimi
    const itemTitle = langValue === 'en' && item.title_en ? item.title_en : item.title;
    const itemDescription = langValue === 'en' && item.description_en ? item.description_en : item.description;
    
    // Yıl aralığını gösterme
    const yearDisplay = item.year_end && item.year_end !== item.year 
      ? `${item.year} - ${item.year_end}` 
      : item.year.toString();

    return (
      <motion.div 
        key={item.id}
        variants={itemVariants}
        className="relative"
      >
        {/* Zaman Noktası */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20 top-0 mt-1.5">
          <div className="w-4 h-4 rounded-full bg-[#6B8E23] border-4 border-zinc-900 shadow-glow-md" />
        </div>
        
        {/* İçerik */}
        <div className={`flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} w-full pt-8 md:pt-0`}>
          {/* Tarih */}
          <div className={`flex flex-col items-center ${isLeft ? 'md:items-end' : 'md:items-start'} w-full md:w-[120px]`}>
            <span className="text-sm font-bold text-green-300 bg-zinc-800 px-3 py-1 rounded-full mb-4 md:mb-0 z-10">
              {yearDisplay}
            </span>
          </div>
          
          {/* Kart */}
          <motion.div
            className="bg-zinc-800 p-4 md:p-5 rounded-lg shadow-md border border-zinc-700 w-full md:w-[calc(100%-140px)] md:mt-4 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            whileHover={{ boxShadow: "0 0 20px 2px rgba(107, 142, 35, 0.15)" }}
          >
            <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getItemColor(item.type)} flex items-center justify-center`}>
                  {getItemIcon(item.type)}
                </div>
                <h3 className="text-lg font-bold text-white">{itemTitle}</h3>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                bg-gradient-to-r ${getItemColor(item.type)} text-white`}>
                {langValue === 'en' ? 
                  (item.type === 'Eğitim' ? 'Education' : 
                   item.type === 'İş' ? 'Work' : 
                   item.type === 'Staj' ? 'Internship' : 
                   item.type === 'Proje' ? 'Project' : item.type) : 
                  item.type}
              </span>
            </div>
            
            {item.location && (
              <div className="flex items-center gap-1 text-sm text-white/70 mb-2">
                <span className="text-green-300">@</span> {item.location}
              </div>
            )}
            
            <p className="text-base text-white/70 leading-relaxed mb-4">{itemDescription}</p>
            
            {item.link && (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#6B8E23] hover:text-green-300 transition-colors mb-4"
              >
                <ExternalLink size={16} />
                <span>{dict.home.timeline.readMore}</span>
              </a>
            )}
            
            {/* İnce Ayraç */}
            {reference && (
              <>
                <div className="border-t border-zinc-700 my-4" />
                
                {/* Referans */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-green-500/30">
                    <img 
                      src={reference.photoUrl} 
                      alt={reference.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-grow min-w-[150px]">
                    <p className="text-sm font-semibold text-white">{reference.name}</p>
                    <p className="text-sm text-green-300 mb-0 md:mb-3">{reference.title}</p>
                  </div>
                  <button
                    onClick={() => copyEmail(reference.email)}
                    className="mt-2 sm:mt-0 flex items-center gap-1 px-2 py-1 rounded-md bg-green-500/10 hover:bg-green-500/20 text-white/80 text-xs transition-colors duration-300"
                  >
                    {copiedEmail === reference.email ? (
                      <>
                        <CheckCircle size={12} className="text-green-400" />
                        <span>{dict.home.contact.form.copied}</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={12} />
                        <span className="truncate max-w-[150px]">{reference.email}</span>
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  }, [itemVariants, getReferenceId, defaultReferences, getItemColor, getItemIcon, copiedEmail, copyEmail, dict, langValue]);

  // Referans kartı render fonksiyonu
  const renderReferenceCard = useCallback((reference: Reference) => (
    <motion.div
      key={reference.id}
      variants={referenceVariants}
      className="bg-zinc-800 p-5 md:p-6 rounded-xl border border-zinc-700 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      whileHover={{ boxShadow: "0 0 20px 2px rgba(107, 142, 35, 0.15)" }}
    >
      {/* Profil Fotoğrafı */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-full mb-4 overflow-hidden ring-4 ring-green-500/20 shadow-xl">
        <img 
          src={reference.photoUrl} 
          alt={reference.name} 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Referans Bilgileri */}
      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{reference.name}</h3>
      <p className="text-xs sm:text-sm text-green-300 mb-3">{reference.title}</p>
      
      {/* E-posta Kopyalama Butonu */}
      <button
        onClick={() => copyEmail(reference.email)}
        className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-white/80 text-xs sm:text-sm transition-colors duration-300"
      >
        {copiedEmail === reference.email ? (
          <>
            <CheckCircle size={16} className="text-green-400" />
            <span>{dict.home.contact.form.copied}</span>
          </>
        ) : (
          <>
            <Clipboard size={16} />
            <span className="truncate max-w-[120px] sm:max-w-[180px]">{reference.email}</span>
          </>
        )}
      </button>
    </motion.div>
  ), [referenceVariants, copiedEmail, copyEmail, dict]);

  return (
    <section id="timeline" className="py-20 w-full relative overflow-hidden">
      <div className="absolute top-40 left-20 w-[30vw] h-[30vw] bg-[#6B8E23]/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-40 right-20 w-[30vw] h-[30vw] bg-green-700/5 rounded-full filter blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-sm font-medium">
            {dict.common.timeline}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-[#6B8E23] to-green-700">
            {dict.home.timeline.title}
          </h2>
        </div>

        {/* Modern Dikey Zaman Çizelgesi */}
        <div className="relative mx-auto max-w-4xl">
          {/* Orta Çizgi */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-700 transform -translate-x-1/2" />
          
                  <motion.div 
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {sortedItems.map(renderTimelineItem)}
                  </motion.div>
                </div>

        {/* Referanslar Bölümü */}
                <motion.div 
          ref={referencesRef}
          variants={containerVariants}
          initial="hidden"
          animate={referencesInView ? "visible" : "hidden"}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-sm font-medium">
              {dict.common.recommendations}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-[#6B8E23] to-green-700">
              {dict.home.recommendations.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {defaultReferences.map(renderReferenceCard)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(TimelineSection); 