import { Project, Skill, TimelineItem } from './types';

// Mock Skills Data
export const mockSkills: Skill[] = [
  { id: 1, name: "JavaScript", level: 9, type: "Frontend", created_at: "2023-01-01" },
  { id: 2, name: "TypeScript", level: 8, type: "Frontend", created_at: "2023-01-01" },
  { id: 3, name: "React", level: 9, type: "Frontend", created_at: "2023-01-01" },
  { id: 4, name: "Next.js", level: 8, type: "Frontend", created_at: "2023-01-01" },
  { id: 5, name: "Node.js", level: 7, type: "Backend", created_at: "2023-01-01" },
  { id: 6, name: "Express", level: 7, type: "Backend", created_at: "2023-01-01" },
  { id: 7, name: "PostgreSQL", level: 6, type: "Backend", created_at: "2023-01-01" },
  { id: 8, name: "MongoDB", level: 7, type: "Backend", created_at: "2023-01-01" },
  { id: 9, name: "GraphQL", level: 6, type: "Backend", created_at: "2023-01-01" },
  { id: 10, name: "Tailwind CSS", level: 8, type: "Frontend", created_at: "2023-01-01" },
  { id: 11, name: "Docker", level: 6, type: "Tool", created_at: "2023-01-01" },
  { id: 12, name: "AWS", level: 5, type: "Tool", created_at: "2023-01-01" },
];

// Mock Timeline Data
export const mockTimeline: TimelineItem[] = [
  {
    id: 1,
    title: "SERANİT",
    title_en: "SERANIT",
    description: "İnsan kaynakları süreçlerini dijitalleştirmek amacıyla C# ve .NET Framework ile masaüstü uygulamalar geliştirdim. Excel dosyalarından otomatik veri aktarımı ve Outlook entegrasyonu ile e-posta gönderimi gibi işlemleri kolaylaştırarak operasyonel verimlilik sağladım. Ayrıca Bimser CSP platformunda dijital form ve onay süreçlerinin tasarlanmasına katkıda bulundum.",
    description_en: "Developed desktop applications using C# and .NET Framework to digitize HR processes. Improved operational efficiency by automating data transfers from Excel files and integrating Outlook email functionalities. Also contributed to digital form and approval process design using the Bimser CSP platform.",
    year: 2025,
    year_end: 2025,
    type: "İş",
    created_at: new Date().toISOString(),
    location: "İstanbul"
  },
  {
    id: 2,
    title: "SERANİT",
    title_en: "SERANIT",
    description: "IFS sisteminde veri akışını sağlama ve gelen taleplere çözüm üretme üzerine çalışarak, Oracle SQL kullanarak çeşitli sorgular yazdım ve veri işlemleri gerçekleştirdim. Bu süreçte, operasyonel verimliliği artırmaya yönelik çözümler geliştirirken, Bimser CSP ile şirket içi süreçler de yazdım.",
    description_en: "Worked on ensuring data flow in the IFS system and providing solutions to requests. Wrote various queries and performed data operations using Oracle SQL. Developed internal workflows using Bimser CSP to enhance operational efficiency.",
    year: 2024,
    year_end: 2024,
    type: "İş",
    created_at: new Date().toISOString(),
    location: "İstanbul"
  },
  {
    id: 3,
    title: "Namık Kemal Üniversitesi - Bilgisayar Mühendisliği (GANO: 3.25)",
    title_en: "Namık Kemal University - Computer Engineering (GPA: 3.25)",
    description: "Bilgisayar mühendisliği alanında lisans eğitimimi tamamladım.",
    description_en: "Completed my bachelor's degree in computer engineering.",
    year: 2022,
    year_end: 2025,
    type: "Eğitim",
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    title: "Maltepe Üniversitesi - Bilgisayar Programcılığı (GANO: 3.00)",
    title_en: "Maltepe University - Computer Programming (GPA: 3.00)",
    description: "Bilgisayar programcılığı alanında ön lisans eğitimimi tamamladım.",
    description_en: "Completed my associate degree in computer programming.",
    year: 2018,
    year_end: 2020,
    type: "Eğitim",
    created_at: new Date().toISOString()
  }
]; 