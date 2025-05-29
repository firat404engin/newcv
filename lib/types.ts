// Supabase veri tipleri

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Web' | 'Mobil' | 'Masaüstü' | 'Yapay Zeka' | 'Veri Bilimi' | 'Blockchain' | 'IoT';
  tech_stack: string[];
  github_link: string;
  demo_link?: string;
  created_at: string;
  imageUrl?: string;
  tags?: string[];
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 1-10
  type: 'Frontend' | 'Backend' | 'Tool' | 'Database';
  created_at: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  year: number;
  year_end?: number;
  type: 'Eğitim' | 'İş' | 'Staj' | 'Proje' | 'Education' | 'Work' | 'Internship' | 'Project';
  created_at: string;
  link?: string;
  location?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  created_at: string;
}

export interface Recommendation {
  id: number;
  name: string;
  title: string;
  message: string;
  image_url?: string;
  created_at: string;
}

export interface Stat {
  id: number;
  key: string;
  value: string | number;
  source: 'GitHub' | 'Supabase';
  updated_at: string;
}

export interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

// GitHub API tip tanımları
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
} 