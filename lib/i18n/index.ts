export type Locale = 'tr' | 'en';

export const locales: Locale[] = ['tr', 'en'];
export const defaultLocale: Locale = 'tr';

export interface Dictionary {
  common: {
    title: string;
    description: string;
    welcome: string;
    about: string;
    projects: string;
    skills: string;
    timeline: string;
    blog: string;
    recommendations: string;
    stats: string;
    guestbook: string;
    contact: string;
    darkMode: string;
    lightMode: string;
    switchLanguage: string;
    downloadCV: string;
    rights: string;
  };
  home: {
    greeting: {
      tr: string;
      en: string;
    };
    hero: {
      greeting: string;
      title: string;
      subtitle: string;
      cta: string;
    };
    about: {
      title: string;
      description: string;
    };
    projects: {
      title: string;
      description: string;
      viewAll: string;
      categories: {
        all: string;
        web: string;
        mobile: string;
        desktop: string;
        ai: string;
      };
      viewLive: string;
      viewCode: string;
      items: Array<{
        id: number;
        title: string;
        description: string;
        category: string;
        tech_stack: string[];
        github_link: string;
        demo_link?: string;
        created_at: string;
        imageUrl: string;
        tags?: string[];
      }>;
    };
    skills: {
      title: string;
      description: string;
      frontend: string;
      backend: string;
      tools: string;
    };
    timeline: {
      title: string;
      description: string;
      education: string;
      work: string;
      internship: string;
      project: string;
      readMore: string;
    };
    blog: {
      title: string;
      description: string;
      readMore: string;
      tags: string;
    };
    recommendations: {
      title: string;
      description: string;
    };
    stats: {
      title: string;
      description: string;
      repos: string;
      stars: string;
      visits: string;
    };
    guestbook: {
      title: string;
      description: string;
      form: {
        name: string;
        message: string;
        submit: string;
        thanks: string;
      };
    };
    contact: {
      title: string;
      description: string;
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
        thanks: string;
        copied: string;
      };
    };
  };
  terminal: {
    title: string;
    commands: {
      tr: string;
      en: string;
    };
    results: {
      tr: string;
      en: string;
    };
  };
  navigation: {
    scrollDown: string;
  };
  socials: {
    github: {
      url: string;
      label: string;
    };
    linkedin: {
      url: string;
      label: string;
    };
    email: {
      url: string;
      label: string;
    };
  };
}

export const getDictionary = (locale: Locale): Dictionary => {
  if (!locale || !dictionaries[locale] || locale === 'tr') {
    return dictionaries.tr;
  }
  
  return dictionaries.en;
};

const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    common: {
      title: 'FIRAT ENGIN',
      description: 'Bilgisayar Mühendisi kişisel web sitesi',
      welcome: 'Hoş Geldiniz',
      about: 'Hakkımda',
      projects: 'Projeler',
      skills: 'Yetenekler',
      timeline: 'Zaman Çizelgesi',
      blog: 'Blog',
      recommendations: 'Referanslar',
      stats: 'İstatistikler',
      guestbook: 'Ziyaretçi Defteri',
      contact: 'İletişim',
      darkMode: 'Karanlık Mod',
      lightMode: 'Aydınlık Mod',
      switchLanguage: 'Switch to English',
      downloadCV: 'CV İndir',
      rights: 'Tüm hakları saklıdır.',
    },
    home: {
      greeting: {
        tr: 'Merhaba ben Fırat ENGİN, geleceğe hazır yazılımlar geliştiriyorum.',
        en: 'Hello, I am Fırat ENGİN, I build future-ready software.'
      },
      hero: {
        greeting: 'Merhaba, ben',
        title: 'Bilgisayar Mühendisi',
        subtitle: 'Geleceğe hazır yazılımlar geliştiriyorum.',
        cta: 'Projelerimi Keşfet',
      },
      about: {
        title: 'Hakkımda',
        description: 'Modern teknolojilerle kullanıcı dostu, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.',
      },
      projects: {
        title: 'Projelerim',
        description: 'Kişisel ve profesyonel projelerim',
        viewAll: 'Tümünü Gör',
        categories: {
          all: 'Tümü',
          web: 'Web',
          mobile: 'Mobil',
          desktop: 'Masaüstü',
          ai: 'Yapay Zeka',
        },
        viewLive: 'Canlıyı Gör',
        viewCode: 'Kodu Gör',
        items: [
          {
            id: 1,
            title: 'E-Ticaret Web Sitesi',
            description: 'Müşteri için ürün yönetimi, sepet sistemi ve güvenli ödeme entegrasyonu özelliklerine sahip, tamamen işlevsel ve duyarlı bir e-ticaret web sitesi geliştirdim.',
            category: 'Mobil',
            tech_stack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
            github_link: 'https://github.com/firat404engin/fitness-tracker',
            demo_link: 'https://mainticaret.vercel.app/',
            created_at: '2022-11-05',
            imageUrl: '/images/eticaret.png',
          },
          {
            id: 2,
            title: 'Vizyoner Bakış Danışmanlık',
            description: 'Hizmet arama, randevu rezervasyonu ve güvenli iletişim formları içeren, tamamen duyarlı danışmanlık web sitesi.',
            category: 'Web',
            tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
            github_link: 'https://github.com/firat404engin/vizyoner-website',
            demo_link: 'https://www.vizyonerbakis.com.tr/',
            created_at: '2023-08-15',
            imageUrl: '/images/vizyoner.png',
          },
          {
            id: 3,
            title: 'Gerçek Zamanlı Deprem İzleyici',
            description: 'Türkiye\'deki gerçek zamanlı deprem verilerini görselleştiren, kullanıcı dostu arayüze sahip, tamamen duyarlı bir web uygulaması geliştirdim.',
            category: 'Web',
            tech_stack: ['Vue.js', 'Firebase', 'WebSockets', 'Vuex'],
            github_link: 'https://github.com/firat404engin/earthquake',
            demo_link: 'https://earthquaketurkiye.vercel.app/',
            created_at: '2023-02-10',
            imageUrl: '/images/earthquaketurkiye.png',
          },
          {
            id: 4,
            title: 'Kişisel Portföy',
            description: 'İnteraktif proje bölümleri ve kusursuz bir iletişim deneyimi sunan modern, mobil uyumlu kişisel portföy web sitesi tasarladım ve geliştirdim.',
            category: 'Web',
            tech_stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
            github_link: 'https://github.com/firat404engin/firatportfolio',
            demo_link: 'https://firatengin-henna.vercel.app/',
            created_at: '2023-05-22',
            imageUrl: '/images/portfolio.png',
          }
        ]
      },
      skills: {
        title: 'Yeteneklerim',
        description: 'Teknik becerilerim ve uzmanlık alanlarım',
        frontend: 'Ön Uç Geliştirme',
        backend: 'Arka Uç Geliştirme',
        tools: 'Araçlar',
      },
      timeline: {
        title: 'Zaman Çizelgesi',
        description: 'Eğitim ve deneyim geçmişim',
        education: 'Eğitim',
        work: 'İş',
        internship: 'Staj',
        project: 'Proje',
        readMore: 'Daha fazla bilgi',
      },
      blog: {
        title: 'Blog',
        description: 'Teknik yazılar ve deneyimler',
        readMore: 'Devamını Oku',
        tags: 'Etiketler',
      },
      recommendations: {
        title: 'Referanslar',
        description: 'Birlikte çalıştığım kişilerin yorumları',
      },
      stats: {
        title: 'İstatistikler',
        description: 'Sayılarla yazılım yolculuğum',
        repos: 'GitHub Repo',
        stars: 'GitHub Yıldız',
        visits: 'Site Ziyaretleri',
      },
      guestbook: {
        title: 'Ziyaretçi Defteri',
        description: 'Bir mesaj bırakın',
        form: {
          name: 'İsim',
          message: 'Mesajınız',
          submit: 'Gönder',
          thanks: 'Mesajınız için teşekkürler!',
        },
      },
      contact: {
        title: 'İletişim',
        description: 'Benimle iletişime geçin',
        form: {
          name: 'İsim',
          email: 'E-posta',
          message: 'Mesajınız',
          submit: 'Gönder',
          thanks: 'Mesajınız için teşekkürler, en kısa sürede dönüş yapacağım!',
          copied: 'Kopyalandı!',
        },
      },
    },
    terminal: {
      title: 'terminal',
      commands: {
        tr: 'Console.WriteLine("Bilgisayar Mühendisi!");',
        en: 'Console.WriteLine("Software Engineer!");'
      },
      results: {
        tr: 'Bilgisayar Mühendisi!',
        en: 'Software Engineer!'
      }
    },
    navigation: {
      scrollDown: 'Aşağı kaydır'
    },
    socials: {
      github: {
        url: 'https://github.com/firat404engin',
        label: 'GitHub'
      },
      linkedin: {
        url: 'https://www.linkedin.com/in/firatengin404/',
        label: 'LinkedIn'
      },
      email: {
        url: 'mailto:fengin7321@gmail.com',
        label: 'E-posta'
      }
    }
  },
  en: {
    common: {
      title: 'Personal CV',
      description: 'Computer Engineer personal website',
      welcome: 'Welcome',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      timeline: 'Timeline',
      blog: 'Blog',
      recommendations: 'Recommendations',
      stats: 'Stats',
      guestbook: 'Guestbook',
      contact: 'Contact',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      switchLanguage: 'Türkçe\'ye Geç',
      downloadCV: 'Download CV',
      rights: 'All rights reserved.',
    },
    home: {
      greeting: {
        tr: 'Merhaba ben Fırat ENGİN, geleceğe hazır yazılımlar geliştiriyorum.',
        en: 'Hello, I am Fırat ENGİN, I build future-ready software.'
      },
      hero: {
        greeting: 'Hello, I\'m',
        title: 'Computer Engineer',
        subtitle: 'Building future-ready software.',
        cta: 'Explore My Projects',
      },
      about: {
        title: 'About Me',
        description: 'I develop user-friendly, performant, and scalable applications with modern technologies.',
      },
      projects: {
        title: 'My Projects',
        description: 'Personal and professional projects',
        viewAll: 'View All',
        categories: {
          all: 'All',
          web: 'Web',
          mobile: 'Mobile',
          desktop: 'Desktop',
          ai: 'AI',
        },
        viewLive: 'View Live',
        viewCode: 'View Code',
        items: [
          {
            id: 1,
            title: 'Custom E-Commerce Website Development',
            description: 'Developed a fully functional and responsive e-commerce website for a client, featuring product management, cart system, and secure checkout integration.',
            category: 'Mobile',
            tech_stack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
            github_link: 'https://github.com/firat404engin/fitness-tracker',
            demo_link: 'https://mainticaret.vercel.app/',
            created_at: '2022-11-05',
            imageUrl: '/images/eticaret.png',
          },
          {
            id: 2,
            title: 'Vizyoner Bakış Consulting',
            description: 'Fully responsive consulting website with service search, appointment booking, and secure contact forms.',
            category: 'Web',
            tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
            github_link: 'https://github.com/firat404engin/vizyoner-website',
            demo_link: 'https://www.vizyonerbakis.com.tr/',
            created_at: '2023-08-15',
            imageUrl: '/images/vizyoner.png',
          },
          {
            id: 3,
            title: 'Real-time Earthquake Tracker',
            description: 'Developed a fully responsive web application that visualizes real-time earthquake data in Turkey using public APIs, with an interactive and user-friendly interface.',
            category: 'Web',
            tech_stack: ['Vue.js', 'Firebase', 'WebSockets', 'Vuex'],
            github_link: 'https://github.com/firat404engin/earthquake',
            demo_link: 'https://earthquaketurkiye.vercel.app/',
            created_at: '2023-02-10',
            imageUrl: '/images/earthquaketurkiye.png',
          },
          {
            id: 4,
            title: 'Personal Portfolio',
            description: 'Designed and developed a modern, mobile-friendly personal portfolio website featuring interactive project sections and a seamless contact experience.',
            category: 'Web',
            tech_stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
            github_link: 'https://github.com/firat404engin/firatportfolio',
            demo_link: 'https://firatengin-henna.vercel.app/',
            created_at: '2023-05-22',
            imageUrl: '/images/portfolio.png',
          }
        ]
      },
      skills: {
        title: 'My Skills',
        description: 'Technical skills and expertise',
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        tools: 'Tools',
      },
      timeline: {
        title: 'Timeline',
        description: 'My education and experience history',
        education: 'Education',
        work: 'Work',
        internship: 'Internship',
        project: 'Project',
        readMore: 'Read more',
      },
      blog: {
        title: 'Blog',
        description: 'Technical articles and experiences',
        readMore: 'Read More',
        tags: 'Tags',
      },
      recommendations: {
        title: 'Recommendations',
        description: 'Feedback from people I\'ve worked with',
      },
      stats: {
        title: 'Stats',
        description: 'My software journey in numbers',
        repos: 'GitHub Repos',
        stars: 'GitHub Stars',
        visits: 'Site Visits',
      },
      guestbook: {
        title: 'Guestbook',
        description: 'Leave a message',
        form: {
          name: 'Name',
          message: 'Your Message',
          submit: 'Submit',
          thanks: 'Thank you for your message!',
        },
      },
      contact: {
        title: 'Contact',
        description: 'Get in touch with me',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Your Message',
          submit: 'Submit',
          thanks: 'Thank you for your message, I\'ll get back to you as soon as possible!',
          copied: 'Copied!',
        },
      },
    },
    terminal: {
      title: 'terminal',
      commands: {
        tr: 'Console.WriteLine("Bilgisayar Mühendisi!");',
        en: 'Console.WriteLine("Software Engineer!");'
      },
      results: {
        tr: 'Bilgisayar Mühendisi!',
        en: 'Software Engineer!'
      }
    },
    navigation: {
      scrollDown: 'Scroll down'
    },
    socials: {
      github: {
        url: 'github.com/firat404engin',
        label: 'GitHub'
      },
      linkedin: {
        url: 'www.linkedin.com/in/firatengin404',
        label: 'LinkedIn'
      },
      email: {
        url: 'mailto:you@example.com',
        label: 'Email'
      }
    }
  },
}; 