'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { Skill } from '../../lib/types';
import { motion } from 'framer-motion';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';

interface SkillsSectionProps {
  dict: any;
  skills?: Skill[];
}

interface SkillRadarData {
  subject: string;
  Frontend?: number;
  Backend?: number;
  Database?: number;
  Tool?: number;
  fullMark: number;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ dict, skills = [] }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Varsayılan beceriler (props olarak gelmezse)
  const defaultSkills: Skill[] = useMemo(() => [
    { id: 1, name: 'JavaScript', level: 9, type: 'Frontend', created_at: new Date().toISOString() },
    { id: 2, name: 'TypeScript', level: 8, type: 'Frontend', created_at: new Date().toISOString() },
    { id: 3, name: 'React', level: 9, type: 'Frontend', created_at: new Date().toISOString() },
    { id: 4, name: 'Next.js', level: 8, type: 'Frontend', created_at: new Date().toISOString() },
    { id: 5, name: 'Node.js', level: 7, type: 'Backend', created_at: new Date().toISOString() },
    { id: 6, name: 'C#', level: 8, type: 'Backend', created_at: new Date().toISOString() },
    { id: 7, name: 'SQL', level: 8, type: 'Database', created_at: new Date().toISOString() },
    { id: 8, name: 'TailwindCSS', level: 9, type: 'Frontend', created_at: new Date().toISOString() },
    { id: 9, name: 'Git', level: 9, type: 'Tool', created_at: new Date().toISOString() },
    { id: 10, name: 'Docker', level: 7, type: 'Tool', created_at: new Date().toISOString() }
  ], []);

  const displaySkills = useMemo(() => 
    skills.length > 0 ? skills : defaultSkills
  , [skills, defaultSkills]);
  
  // Becerileri gruplayıp tek bir veri seti haline getirme
  const prepareRadarData = useCallback((): SkillRadarData[] => {
    const uniqueSkillNames = Array.from(new Set(displaySkills.map(skill => skill.name)));
    
    return uniqueSkillNames.map(skillName => {
      const skillsByName = displaySkills.filter(skill => skill.name === skillName);
      const data: SkillRadarData = {
        subject: skillName,
        fullMark: 100
      };
      
      skillsByName.forEach(skill => {
        data[skill.type as keyof Omit<SkillRadarData, 'subject' | 'fullMark'>] = skill.level * 10;
      });
      
      return data;
    });
  }, [displaySkills]);
  
  const radarData = useMemo(() => prepareRadarData(), [prepareRadarData]);
  
  // Beceri tipine göre renk belirleme
  const getColorByType = useCallback((type: string): string => {
    switch (type) {
      case 'Frontend':
        return '#6B8E23'; // haki yeşil
      case 'Backend':
        return '#2E8B57'; // deniz yeşili
      case 'Database':
        return '#008B45'; // koyu yeşil
      case 'Tool':
        return '#3CB371'; // orta yeşil
      default:
        return '#6B8E23';
    }
  }, []);

  const handleMouseEnter = useCallback((skillName: string) => {
    setHoveredSkill(skillName);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);
  
  // Kategoriler için badge'ler
  const CategoryBadges = useMemo(() => {
    const categories = ['Frontend', 'Backend', 'Database', 'Tool'];
    
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(category => (
          <div 
            key={category}
            className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2"
          >
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: getColorByType(category) }}
            ></div>
            <span className="text-white font-medium text-sm">{category}</span>
          </div>
        ))}
      </div>
    );
  }, [getColorByType]);
  
  // Tooltip içeriği için özelleştirilmiş component
  const CustomTooltip = useCallback(({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/10 text-white">
          <p className="font-semibold text-center mb-2">{data.subject}</p>
          {payload.map((entry: any, index: number) => (
            entry.value !== undefined && entry.value !== null && (
              <div key={index} className="flex items-center gap-2 mb-1">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-sm">{entry.dataKey}:</span>
                <span className="text-sm font-medium text-green-300">{entry.value}%</span>
              </div>
            )
          ))}
        </div>
      );
    }
    return null;
  }, []);

  // Hover optimizasyonu ile birlikte beceri badge'leri
  const SkillBadges = useMemo(() => (
    <div className="mt-8 mb-4 flex flex-wrap gap-2 justify-center">
      {displaySkills.map(skill => (
        <motion.div
          key={skill.id}
          className={`px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 
            ${hoveredSkill === skill.name ? 'border-[#6B8E23]' : ''}`}
          whileHover={{ 
            scale: 1.05,
            borderColor: 'rgba(107, 142, 35, 0.8)',
            boxShadow: '0 0 8px rgba(107, 142, 35, 0.4)'
          }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => handleMouseEnter(skill.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: getColorByType(skill.type) }}
            ></div>
            <span className="text-white text-sm font-medium">{skill.name}</span>
            <span className="text-xs font-semibold px-1.5 py-0.5 bg-[#6B8E23]/20 rounded-md text-green-300">
              {skill.level * 10}%
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  ), [displaySkills, hoveredSkill, handleMouseEnter, handleMouseLeave, getColorByType]);

  const renderRadarChart = useMemo(() => (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="70%" data={radarData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
        <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ fill: 'rgba(255, 255, 255, 0.8)', fontSize: 14, fontWeight: 500 }} 
          stroke="rgba(255, 255, 255, 0.3)"
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 100]} 
          tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }} 
          stroke="rgba(255, 255, 255, 0.3)"
        />
        
        <Radar
          name="Frontend"
          dataKey="Frontend"
          stroke={getColorByType('Frontend')}
          fill={getColorByType('Frontend')}
          fillOpacity={0.5}
          animationDuration={1500}
        />
        
        <Radar
          name="Backend"
          dataKey="Backend"
          stroke={getColorByType('Backend')}
          fill={getColorByType('Backend')}
          fillOpacity={0.5}
          animationDuration={1500}
        />
        
        <Radar
          name="Database"
          dataKey="Database"
          stroke={getColorByType('Database')}
          fill={getColorByType('Database')}
          fillOpacity={0.5}
          animationDuration={1500}
        />
        
        <Radar
          name="Tool"
          dataKey="Tool"
          stroke={getColorByType('Tool')}
          fill={getColorByType('Tool')}
          fillOpacity={0.5}
          animationDuration={1500}
        />
        
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          wrapperStyle={{ 
            position: 'relative',
            marginTop: '20px',
            color: 'white'
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  ), [radarData, getColorByType, CustomTooltip]);

  return (
    <section id="skills" className="py-20 w-full relative overflow-hidden">
      <div className="absolute top-40 right-20 w-[30vw] h-[30vw] bg-[#6B8E23]/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-40 left-20 w-[30vw] h-[30vw] bg-green-700/5 rounded-full filter blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-sm font-medium">
            {dict.common.skills}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-[#6B8E23] to-green-700">
            {dict.home.skills.title}
          </h2>
        </div>
        
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-[#6B8E23]/30">
          {CategoryBadges}
          
          <div className="h-[500px] w-full">
            {renderRadarChart}
          </div>
          
          {SkillBadges}
        </div>
      </div>
    </section>
  );
};

export default React.memo(SkillsSection); 