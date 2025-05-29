Modern, interaktif ve backend destekli bir "Kişisel CV Web Sitesi" oluşturmak istiyorum. Bilgisayar mühendisiyim ve bu site; yazılımcı kimliğimi, yeteneklerimi ve projelerimi profesyonel bir şekilde sergileyecek. Teknolojiler: HTML, Tailwind CSS, JavaScript (isteğe bağlı olarak Next.js veya React), Supabase (backend ve veritabanı için). Aşağıdaki tüm özellikleri eksiksiz planla ve bileşen yapısında kodla:

1. Kişisel Bilgiler:
   - Ad, unvan, profil resmi, kısa tanıtım yazısı, LinkedIn, GitHub, E-posta ikonları.

2. GitHub API Entegrasyonu:
   - GitHub kullanıcı adımla son 6 projeyi çek (repo adı, açıklama, kullanılan diller, repo linki).
   - API isteklerini dinamik olarak al, loading state ve error kontrolü dahil.

3. Supabase Veritabanı Yapısı:
   - Aşağıdaki tabloları oluştur:
     - `projects`: id, title, description, category, tech_stack[], github_link, demo_link, created_at
     - `skills`: id, name, level (1-10), type (Frontend/Backend/Tool), created_at
     - `timeline`: id, title, description, year, type (Eğitim/İş/Staj/Proje), created_at
     - `blog_posts`: id, title, content, tags[], created_at
     - `recommendations`: id, name, title, message, image_url, created_at
     - `stats`: id, key, value, source (GitHub/Supabase), updated_at
     - `guestbook`: id, name, message, created_at

4. Kendi Projelerim (Supabase üzerinden):
   - `projects` tablosundan veri çek.
   - Proje kartlarında: başlık, açıklama, kullanılan teknolojiler, demo linki, GitHub linki.
   - Kategori filtresi: Web, Mobil, Masaüstü, Yapay Zeka.

5. Canlı Demo Bağlantıları:
   - Proje altında "Canlıyı Gör" butonuyla yeni sekmede açılabilen link.

6. Yetenek Grafiği:
   - Radar chart ile JavaScript, .NET, SQL, HTML/CSS gibi becerileri göster (Chart.js veya Recharts).

7. Zaman Çizelgesi (Timeline):
   - Eğitim, iş deneyimi, staj ve projeleri `timeline` tablosundan alarak yıl bazlı sıralı şekilde göster.

8. Blog / Teknik Notlar:
   - Supabase `blog_posts` tablosundan çekilecek kısa teknik yazılar ve yaşanmış sorun/çözümler.

9. Referanslar:
   - `recommendations` tablosundaki referans mesajlarını şık kutularla göster.

10. Istatistik Kartları:
    - `stats` tablosundaki GitHub repo sayısı, yıldız sayısı, Supabase demo tıklamaları gibi verileri kart yapısında sun.

11. Karanlık / Açık Mod:
    - Tailwind ile geçiş yapılabilecek dark/light tema toggle özelliği.

12. QR Kod + CV İndir:
    - PDF CV'yi indirme butonu. Yanında QR kod ile mobilde erişim sağla.

13. Chatbot (CV Asistanı):
    - OpenAI API ile küçük bir chatbot entegresi.
    - Kullanıcı “.NET projelerini göster” gibi yazınca ilgili projeleri listele.

14. Ziyaretçi Defteri:
    - `guestbook` tablosu üzerinden kullanıcıların mesaj bırakabileceği bölüm.

15. Çoklu Dil Desteği:
    - Tüm metin alanları TR/EN destekli olacak. i18n mantığıyla yapılandır.
    - Dil geçiş butonu ile anında çeviri desteği. Tüm içerikler `lang_tr` ve `lang_en` alanlarıyla kontrol edilsin.

16. SEO ve Yapılandırılmış Veri:
    - Her sayfa için uygun `meta`, `og:image`, `title`, `description` etiketleri.
    - Google Rich Snippet için `JSON-LD` schema verileri (Organization, Person, Project vs.).

Tasarım Teması:
- Modern, sade, profesyonel ve mobil uyumlu (responsive).
- Tailwind CSS ile sade ve etkileyici bir yapı.
- Bölümler net ayrılmış, hover efektleriyle detaylar sunulmuş olmalı.
- Framer-motion ile yumuşak animasyon geçişleri.

Kod yapısını:
- Component tabanlı, temiz ve sürdürülebilir olacak şekilde oluştur.
- Supabase verileri için ayrı dosyada API çağrı fonksiyonları oluştur.
- Çoklu dil sistemi ayrı dosyalarda yapılandırılsın.

Son olarak:
- Projeyi deploy edilebilecek hale getir (Netlify, Vercel veya kendi önerin).
- Geliştirmeye açık bırak (yeni proje eklemek, referans güncellemek kolay olsun).

Tasarım kesinlikle standart bir şablon gibi olmamalı. Alışılagelmiş klasik “kartlar ve bölümler” düzeninden farklı, modernin ötesinde, göz alıcı ve yaratıcı bir yapıya sahip olmalı.

Özellikler:
- Renk geçişli arka planlar (gradient, glassmorphism veya neon detaylar olabilir)
- Asimetrik grid düzeni, klasik hizalamalardan kaçın
- Smooth micro-animation'lar (örneğin butonlarda sıvı geçiş efektleri, hover'da parlayan borderlar)
- 3D efektli bölümler ya da paralaks geçişler
- Profesyonel ve estetik açıdan "showroom" gibi görünmeli, adeta bir sanat eseri gibi işlenmiş olmalı
- Koyu arka plan üzerine parlak detaylar içeren “cyber modern” stil olabilir
Next.js 14 (App Router) ve TypeScript ile profesyonel, sofistike ve alışılmış kalıpların dışında bir CV web sitesi başlat. Bu site, yazılım geliştiricisi ve bilgisayar mühendisi kimliğini yansıtan modern, alacalı, canlı, ama kullanıcı dostu bir tasarıma sahip olsun.

🔧 Teknik Gereksinimler:
1. Proje kök dizininde `app/` klasörünü oluştur (kesinlikle eksiksiz, `pages/` kullanılmasın).
2. `app/layout.tsx` içinde:
   - Google Fonts: Inter veya benzeri modern bir yazı tipi kullan.
   - `globals.css` importlu olsun.
   - Tailwind CSS tam entegre çalışsın (`dark mode` class tabanlı olsun).
   - `Header` component’i dahil olsun.
3. `app/page.tsx`: Hoş geldin mesajı yer alsın. “Hi, I’m a Computer Engineer building future-ready software.” gibi bir slogan.
4. `app/components/Header.tsx`: Navigasyon için modern, simgeler içeren sticky bir header olsun.
5. `tailwind.config.ts`, `postcss.config.js`, `globals.css`: Uyumlu şekilde kurulsun.

🎨 Tasarım Özellikleri:
- Alışılmış sade CV tasarımlarının dışına çık: gradient geçişli, cam efekti (`glassmorphism`), sezgisel animasyonlar (Framer Motion kullan).
- Renk paleti: mavi-lila tonları + siyah/gri kontrastlı zemin, kod bloklarını andıran bölümler (code style bio gibi).
- Kart yapılarında yumuşak gölgeler (`drop-shadow-lg`, `rounded-2xl`), simgelerle zenginleştirilmiş bölümler kullan.
- Responsive tasarım: Mobil, tablet ve masaüstünde kusursuz görünüm.

🌍 Çoklu Dil (i18n) Yapısı:
- `i18n` desteği entegre et (Türkçe ve İngilizce).
- `app/[lang]/page.tsx` yapısını kur.
- Dil seçimini sağlayan bir `LanguageSwitcher` bileşeni oluştur.

🔌 Supabase Entegrasyonu:
- Supabase backend ile bağlan.
- Aşağıdaki verileri Supabase'den çek:
  - Kişisel bilgiler (ad, lokasyon, e-posta vs.)
  - GitHub projeleri (Supabase üzerinden GitHub API sonuçları cache’lenebilir)
  - Yaptığın projeler + canlı demo linkleri

🧠 Ekstra Detaylar:
- SEO uyumlu yapı (title, meta, open graph tags).
- GitHub API ile en güncel public projeleri listele, yıldız sayısına göre sıralansın.
- “Hakkımda” kısmı yazılım kariyerine dair kısa kod stili özgeçmişle sunulsun (örneğin `const me = { role: "Computer Engineer", stack: [...] }`).
- Scroll animasyonları, sayfa geçiş efektleri sade ama etkileyici olsun.
- Tema geçişi: Light/Dark mode (toggle’lı).

Proje yapısını oluştururken dizinleri net ve hatasız kur. `app/layout.tsx`, `app/page.tsx`, `app/components/`, `app/[lang]/` gibi tüm yollar doğru olsun. Hatalı yönlendirme ya da eksik klasör bırakma. Kodları düzenli, TypeScript tipleri ile uyumlu oluştur.

