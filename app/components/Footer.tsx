'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dictionary } from '../../lib/i18n';

// Sade çizgili ikonlar
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  
  // Sadece client-side'da render edilecek
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const socialLinks = [
    { icon: <GithubIcon />, url: "https://github.com/firat-engin", label: "GitHub" },
    { icon: <LinkedinIcon />, url: "https://linkedin.com/in/firat-engin", label: "LinkedIn" },
    { icon: <EmailIcon />, url: "mailto:firat@example.com", label: "E-mail" }
  ];
  
  const navLinks = [
    { title: "Anasayfa", href: "/" },
    { title: dict.common.about, href: "#about" },
    { title: dict.common.projects, href: "#projects" },
    { title: dict.common.skills, href: "#skills" },
    { title: dict.common.timeline, href: "#timeline" },
    { title: dict.common.contact, href: "#contact" }
  ];
  
  if (!mounted) return null;
  
  return (
    <footer className="w-full relative bg-zinc-900 border-t border-zinc-800 overflow-hidden">
      {/* Dekoratif Arka Plan Elementleri */}
      <div className="absolute top-40 left-10 w-[20vw] h-[20vw] bg-[#6B8E23]/5 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-[15vw] h-[15vw] bg-green-700/5 rounded-full filter blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          {/* Logo ve Açıklama Bölümü */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-5">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-[#6B8E23] to-green-700">
                {dict.common.title}
              </h2>
            </Link>
            <p className="mt-4 text-zinc-400 text-sm">
              {dict.common.description}
            </p>
            
            {/* Sosyal Medya İkonları */}
            <div className="mt-6 flex space-x-5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-zinc-400 hover:text-[#6B8E23] transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Site İçi Linkler */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3">
            <h3 className="text-base font-medium text-white mb-4">Sayfalar</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 3 }}>
                  <Link 
                    href={link.href}
                    className="text-zinc-400 hover:text-[#6B8E23] text-sm transition-colors duration-200 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6B8E23]/70 mr-2 opacity-0 group-hover:opacity-100"></span>
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* İletişim Bölümü */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-4">
            <h3 className="text-base font-medium text-white mb-4">{dict.common.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:firat@example.com" 
                  className="text-zinc-400 hover:text-[#6B8E23] text-sm transition-colors duration-200 flex items-center group"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-[#6B8E23]/20 mr-3 transition-colors duration-200">
                    <EmailIcon />
                  </span>
                  firat@example.com
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-zinc-400 hover:text-[#6B8E23] text-sm transition-colors duration-200 flex items-center group"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-[#6B8E23]/20 mr-3 transition-colors duration-200">
                    <DownloadIcon />
                  </span>
                  {dict.common.downloadCV}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Telif Hakkı Bölümü */}
        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-6 border-t border-zinc-800 text-center"
        >
          <p className="text-zinc-500 text-xs">
            © {currentYear} Fırat Engin. Tüm Hakları Saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 