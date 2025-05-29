'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Locale, getDictionary } from '../../../lib/i18n';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  ChevronDown,
  Download
} from 'lucide-react';
import { Project, Skill, TimelineItem } from '../../../lib/types';
import Header from '../Header';
import AboutSection from '../AboutSection';
import ProjectsSection from '../../components/ProjectsSection';
import SkillsSection from '../../components/SkillsSection';
import TimelineSection from '../../components/TimelineSection';
import Footer from '../Footer';

// Animasyonlu Parçacık Bileşeni
const FloatingParticle = ({ size, color, delay, duration, xRange, yRange }: any) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-${color} bg-opacity-50 backdrop-blur-sm`}
      style={{ width: size, height: size }}
      animate={{
        x: xRange,
        y: yRange,
        opacity: [0.2, 0.7, 0.2],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

interface HomeClientProps {
  lang: Locale;
  dict: ReturnType<typeof getDictionary>;
  projects?: Project[];
  skills: Skill[];
  timelineItems: TimelineItem[];
}

export default function HomeClient({ lang, dict, skills, timelineItems }: HomeClientProps) {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 40]);
  
  // Arka plan opacity değişimi için
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 0.6]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.3], [5, 0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);
  
  const spotlightSize = 300;
  const spotlightColor = "rgba(107, 142, 35, 0.18)"; // Haki yeşil ton, daha belirgin ışık
  const spotlightStyle = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${smoothX}px ${smoothY}px, ${spotlightColor}, transparent 70%)`;
  
  // Parçacıklar için veri
  const particles = [
    { size: 20, color: 'green-700', delay: 0, duration: 15, xRange: ['-10%', '10%'], yRange: ['-5%', '5%'] },
    { size: 15, color: 'green-600', delay: 1.5, duration: 18, xRange: ['5%', '-5%'], yRange: ['-8%', '8%'] },
    { size: 25, color: 'green-800', delay: 3, duration: 22, xRange: ['8%', '-8%'], yRange: ['5%', '-5%'] },
    { size: 12, color: 'green-500', delay: 4.5, duration: 17, xRange: ['-7%', '7%'], yRange: ['7%', '-7%'] },
    { size: 18, color: 'green-600', delay: 6, duration: 20, xRange: ['6%', '-6%'], yRange: ['-6%', '6%'] },
  ];
  
  // Terminal animasyonu için state'ler
  const [terminalLineStage, setTerminalLineStage] = useState(0);
  const [commandText, setCommandText] = useState('');
  const [resultText, setResultText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTerminalComplete, setIsTerminalComplete] = useState(false);
  
  // Terminal için metinler
  const terminalCommands = {
    tr: dict.terminal.commands.tr,
    en: dict.terminal.commands.en
  };
  
  const terminalResults = {
    tr: dict.terminal.results.tr,
    en: dict.terminal.results.en
  };
  
  // Terminal animasyonu için
  useEffect(() => {
    // Komut yazma animasyonu
    if (terminalLineStage === 0) {
      const command = lang === 'tr' ? terminalCommands.tr : terminalCommands.en;
      
      if (commandText.length < command.length) {
        const timeout = setTimeout(() => {
          setCommandText(command.slice(0, commandText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Komut yazımı bitti, çalıştırma animasyonu için kısa bir bekleme
        const timeout = setTimeout(() => {
          setTerminalLineStage(1);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
    
    // Sonuç yazma animasyonu
    if (terminalLineStage === 1) {
      const result = lang === 'tr' ? terminalResults.tr : terminalResults.en;
      
      if (resultText.length < result.length) {
        const timeout = setTimeout(() => {
          setResultText(result.slice(0, resultText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Tamamlandı
        setIsTerminalComplete(true);
      }
    }
  }, [commandText, resultText, terminalLineStage, lang]);
  
  // Yanıp sönen cursor efekti
  useEffect(() => {
    if (isTerminalComplete) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, [isTerminalComplete]);
  
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = lang === 'tr' 
    ? dict.home.greeting.tr
    : dict.home.greeting.en;
  
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText, fullText]);
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        bounce: 0.4, 
        duration: 0.8 
      }
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-gradient-to-b from-black to-zinc-900">
      <Header lang={lang} />
      <div className="w-full flex-1 flex flex-col relative">
        {/* Hero Bölümü */}
        <section 
          className="relative flex flex-1 w-full min-h-screen items-center justify-center overflow-hidden"
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          {/* Arka plan görseli - Scroll ile opacity değişimi */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://i.hizliresim.com/7gretqk.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: bgOpacity,
              filter: useMotionTemplate`blur(${blurAmount}px)`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
          
          <motion.div 
            className="pointer-events-none absolute inset-0 w-screen z-1" 
            style={{ background: spotlightStyle }} 
          />
          
          {/* Animated Particles */}
          {particles.map((particle, i) => (
            <FloatingParticle key={i} {...particle} />
          ))}
          
          <motion.div
            className="text-center z-10 px-4 max-w-4xl mx-auto w-full relative"
            style={{ opacity, scale, y }}
          >
            {/* Terminal-style heading */}
            <motion.div 
              className="terminal-window relative mx-auto max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Terminal window header */}
              <div className="terminal-header">
                <div className="flex space-x-1.5">
                  <div className="terminal-btn terminal-btn-red"></div>
                  <div className="terminal-btn terminal-btn-yellow"></div>
                  <div className="terminal-btn terminal-btn-green"></div>
                </div>
                <div className="text-xs text-zinc-400 mx-auto">{dict.terminal.title}</div>
              </div>
              
              {/* Terminal content */}
              <div className="terminal-body">
                {/* Command line with prompt */}
                <div className="flex items-center flex-wrap terminal-text">
                  <span className="terminal-prompt mr-2">$</span>
                  <span className="text-[#6B8E23]">{commandText}</span>
                  {terminalLineStage === 0 && <span className={`terminal-cursor ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>}
                </div>
                
                {/* Result line */}
                {terminalLineStage > 0 && (
                  <div className="text-green-100 mt-1 terminal-text animate-fadeIn">
                    {resultText}
                    {!isTerminalComplete && <span className={`terminal-cursor ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>}
                  </div>
                )}
                
                {/* New prompt line after completion */}
                {isTerminalComplete && (
                  <div className="flex mt-1 animate-fadeIn">
                    <span className="terminal-prompt mr-2">$</span>
                    <span className={`terminal-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                  </div>
                )}
              </div>
            </motion.div>
            
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-10 text-[#6B8E23] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span>{displayText}</span>
              <span className={`typing-cursor ${isTypingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link 
                href={`/${lang}#projects`}
                className="bg-[#6B8E23] hover:bg-[#556B2F] text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 group transition-colors duration-300 shadow-md"
              >
                {dict.home.projects.title}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                href={`/${lang}#contact`}
                className="border border-[#6B8E23] hover:border-green-500 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 group transition-colors duration-300 shadow-md"
              >
                {dict.home.contact.title}
                <Mail size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            
            <motion.div
              className="flex justify-center mt-14 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <a 
                href={dict.socials.github.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-[#6B8E23]/30 flex items-center justify-center text-white/70 hover:text-[#6B8E23] hover:border-[#6B8E23] transition-all duration-300"
                aria-label={dict.socials.github.label}
              >
                <Github size={20} />
              </a>
              <a 
                href={dict.socials.linkedin.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-[#6B8E23]/30 flex items-center justify-center text-white/70 hover:text-[#6B8E23] hover:border-[#6B8E23] transition-all duration-300"
                aria-label={dict.socials.linkedin.label}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={dict.socials.email.url}
                className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-[#6B8E23]/30 flex items-center justify-center text-white/70 hover:text-[#6B8E23] hover:border-[#6B8E23] transition-all duration-300"
                aria-label={dict.socials.email.label}
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <Link href={`/${lang}#about`} aria-label={dict.navigation.scrollDown}>
              <ChevronDown size={32} className="text-[#6B8E23] hover:text-white transition-colors duration-300" />
            </Link>
          </motion.div>
        </section>
        
        {/* Diğer Bölümler */}
        <div className="futuristic-container mx-auto w-full">
          <AboutSection dict={dict} />
          <ProjectsSection dict={dict} />
          <SkillsSection dict={dict} skills={skills} />
          <TimelineSection dict={dict} timelineItems={timelineItems} lang={lang} />
          {/* Footer */}
          <Footer dict={dict} />
        </div>
      </div>
    </main>
  );
} 