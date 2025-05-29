import supabase from './client';
import { 
  Project, 
  Skill, 
  TimelineItem, 
  BlogPost, 
  Recommendation,
  Stat,
  GuestbookEntry
} from '../types';

// Projeler
export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Projeler alınırken hata:', error);
    return [];
  }
  
  return data || [];
};

export const getProjectsByCategory = async (category: Project['category']): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error(`${category} kategorisindeki projeler alınırken hata:`, error);
    return [];
  }
  
  return data || [];
};

// Yetenekler
export const getSkills = async (): Promise<Skill[]> => {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('level', { ascending: false });
  
  if (error) {
    console.error('Yetenekler alınırken hata:', error);
    return [];
  }
  
  return data || [];
};

export const getSkillsByType = async (type: Skill['type']): Promise<Skill[]> => {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .eq('type', type)
    .order('level', { ascending: false });
  
  if (error) {
    console.error(`${type} tipindeki yetenekler alınırken hata:`, error);
    return [];
  }
  
  return data || [];
};

// Zaman Çizelgesi
export const getTimelineItems = async (): Promise<TimelineItem[]> => {
  const { data, error } = await supabase
    .from('timeline')
    .select('*')
    .order('year', { ascending: false });
  
  if (error) {
    console.error('Zaman çizelgesi alınırken hata:', error);
    return [];
  }
  
  return data || [];
};

// Blog Yazıları
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Blog yazıları alınırken hata:', error);
    return [];
  }
  
  return data || [];
};

// Referanslar
export const getRecommendations = async (): Promise<Recommendation[]> => {
  const { data, error } = await supabase
    .from('recommendations')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Referanslar alınırken hata:', error);
    return [];
  }
  
  return data || [];
};

// İstatistikler
export const getStats = async (): Promise<Stat[]> => {
  const { data, error } = await supabase
    .from('stats')
    .select('*')
    .order('updated_at', { ascending: false });
  
  if (error) {
    console.error('İstatistikler alınırken hata:', error);
    return [];
  }
  
  return data || [];
};

// Ziyaretçi Defteri
export const getGuestbookEntries = async (): Promise<GuestbookEntry[]> => {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Ziyaretçi defteri kayıtları alınırken hata:', error);
    return [];
  }
  
  return data || [];
};

export const addGuestbookEntry = async (name: string, message: string): Promise<GuestbookEntry | null> => {
  const { data, error } = await supabase
    .from('guestbook')
    .insert([{ name, message }])
    .select()
    .single();
  
  if (error) {
    console.error('Ziyaretçi defterine kayıt eklenirken hata:', error);
    return null;
  }
  
  return data;
}; 