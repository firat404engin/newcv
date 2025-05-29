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
      title: 'Kişisel CV',
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
      },
      skills: {
        title: 'Yeteneklerim',
        description: 'Teknik yetenek ve bilgilerim',
        frontend: 'Önyüz',
        backend: 'Arkayüz',
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
        url: 'https://github.com/yourusername',
        label: 'GitHub'
      },
      linkedin: {
        url: 'https://linkedin.com/in/yourusername',
        label: 'LinkedIn'
      },
      email: {
        url: 'mailto:you@example.com',
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
      },
      skills: {
        title: 'My Skills',
        description: 'Technical skills and knowledge',
        frontend: 'Frontend',
        backend: 'Backend',
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
        url: 'https://github.com/yourusername',
        label: 'GitHub'
      },
      linkedin: {
        url: 'https://linkedin.com/in/yourusername',
        label: 'LinkedIn'
      },
      email: {
        url: 'mailto:you@example.com',
        label: 'Email'
      }
    }
  },
}; 