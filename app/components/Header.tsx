'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale, getDictionary } from '../../lib/i18n';
import {
  Home,
  Code,
  Briefcase,
  Mail,
  LineChart,
  Clock,
  GraduationCap,
  Moon,
  Sun,
  Menu,
  X,
  Globe,
  Github,
  Linkedin,
  UserCircle
} from 'lucide-react';

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  
  const dict = getDictionary(lang);
  
  // Dark mode toggle'ın hydration problemini önlemek için
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menü dışı tıklamaları yakalamak için event listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const navItems = [
    { name: dict.common.about, path: `/${lang}/#about`, icon: <UserCircle size={20} /> },
    { name: dict.common.projects, path: `/${lang}/#projects`, icon: <Briefcase size={20} /> },
    { name: dict.common.skills, path: `/${lang}/#skills`, icon: <LineChart size={20} /> },
    { name: dict.common.timeline, path: `/${lang}/#timeline`, icon: <Clock size={20} /> },
    { name: dict.common.blog, path: `/${lang}/#blog`, icon: <GraduationCap size={20} /> },
    { name: dict.common.contact, path: `/${lang}/#contact`, icon: <Mail size={20} /> },
  ];

  const toggleLanguage = () => {
    const newLang = lang === 'tr' ? 'en' : 'tr';
    window.location.href = pathname.replace(`/${lang}`, `/${newLang}`);
  };

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Dairesel menü hesaplamaları
  const calculateCirclePosition = (index: number, total: number, radius: number = 120) => {
    // Yarım daire için açı (başlangıç 180°, bitiş 0°)
    const startAngle = Math.PI;
    const endAngle = 0;
    
    // İndekse göre açı hesapla
    const angle = startAngle - (index / (total - 1)) * (startAngle - endAngle);
    
    // Açıya göre konumu hesapla
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    return { x, y: -y }; // y koordinatını ters çeviriyoruz, çünkü CSS'te yukarı doğru negatif
  };

  return (
    <>
      {/* Masaüstü için Dairesel Menü */}
      <div className="fixed top-0 right-0 z-50 hidden lg:flex gap-4 p-6">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-primary-400 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-primary-400 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <button
          onClick={toggleLanguage}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-primary-400 transition-all duration-300"
          aria-label="Change language"
        >
          <Globe size={18} />
        </button>
      </div>
      
      {/* Mobil Menü Tetikleyici */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <motion.button
          onClick={toggleMenu}
          className="w-12 h-12 rounded-full glassmorphism-dark flex items-center justify-center text-white/80 hover:text-primary-400 hover:shadow-neon transition-all duration-300"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>
      
      {/* Mobil Menü Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              className="absolute top-20 left-4 right-4 bg-dark-lighter/20 border border-white/10 rounded-2xl overflow-hidden glassmorphism-dark"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  {/* Navigasyon Öğeleri */}
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center gap-3 p-3 rounded-lg text-white/80 hover:text-primary-400 hover:bg-white/5 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="w-8 h-8 rounded-full bg-dark-lighter/40 border border-white/10 flex items-center justify-center">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                  
                  <div className="h-px w-full bg-white/10 my-2" />
                  
                  {/* Dil Değiştirici */}
                  <div className="flex flex-col space-y-4">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-3 p-3 rounded-lg text-white/80 hover:text-primary-400 transition-all duration-300"
                    >
                      <span className="w-8 h-8 rounded-full bg-dark-lighter/40 border border-white/10 flex items-center justify-center">
                        <Globe size={18} />
                      </span>
                      <span className="font-medium">{dict.common.switchLanguage}</span>
                    </button>
                  </div>
                  
                  {/* Sosyal Linkler */}
                  <div className="flex justify-center space-x-4 pt-2">
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-dark-lighter/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-dark-lighter/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 