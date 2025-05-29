export interface Skill {
  id: number;
  name: string;
  level: number;
  type: 'Frontend' | 'Backend' | 'Tool' | 'Database';
  created_at: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  description: string;
  year: number;
  type: string;
  created_at: string;
  link?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Web' | 'Mobil' | 'Masaüstü' | 'Yapay Zeka' | 'Veri Bilimi' | 'Blockchain' | 'IoT';
  tech_stack: string[];
  github_link?: string;
  demo_link?: string;
  created_at: string;
  imageUrl?: string;
  tags?: string[];
} 