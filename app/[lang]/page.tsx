import { Metadata } from 'next';
import { Locale, getDictionary } from '../../lib/i18n';
import HomeClient from '../components/home/HomeClient';
import { mockProjects, mockSkills, mockTimeline } from '../../lib/mock-data';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.lang);
  
  return {
    title: `${dict.common.title} | ${dict.home.hero.title}`,
    description: dict.common.description,
  };
}

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const dict = getDictionary(params.lang);
  
  return (
    <HomeClient 
      lang={params.lang} 
      dict={dict} 
      projects={mockProjects} 
      skills={mockSkills} 
      timelineItems={mockTimeline} 
    />
  );
} 