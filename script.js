/* ==========================================
   ÖZGE ÖZEL BEAUTY - JAVASCRIPT & I18N
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initServiceTabs();
    initMobileMenu();
    initScrollHeader();
    initLanguageSwitcher();
});

/* 1. Translation Dictionary (TR / EN / AR / RU) */
const translations = {
    tr: {
        top_address: "Levent, Yosun Sokağı No:20, Beşiktaş / İstanbul",
        top_hours: "Pzt - Cmt: 10:00 - 19:00",
        top_wa: "WhatsApp",
        brand_sub: "BEAUTY • LEVENT & DUBАİ",
        nav_home: "Ana Sayfa",
        nav_branches: "Şubelerimiz",
        nav_services: "Hizmetlerimiz",
        nav_about: "Hakkımızda",
        nav_reviews: "Yorumlar",
        nav_contact: "İletişim",
        header_wa_levent: "Levent WhatsApp",
        header_wa_dubai: "Dubai WhatsApp",
        hero_badge: "İstanbul Levent Villa & Dubai Jumeirah Studio",
        hero_title: "Güzellikte İmza <br><span class=\"gold-gradient-text\">Özge Özel Dokunuşları</span>",
        hero_desc: "Kaş Kurtarma, Altın Oran Microblading, Hollywood Glow Cilt Bakımı, Dudak Vitamini ve Saç Kera-Botox uygulamaları ile kendinizi şımartın.",
        hero_btn_wa_levent: "Levent Randevu (0533 950 45 55)",
        hero_btn_wa_dubai: "Dubai Randevu (+971 58 299 3077)",
        hero_btn_maps: "Google Maps Levent Tarifi",
        stat_google: "Google Harita Yorumları",
        stat_branches: "Global Şube (TR & UAE)",
        stat_vip: "VIP & Ünlülerin Tercihi",
        hero_card_tag: "VIP Studio Deneyimi",
        hero_card_desc: "Özel Kaş Kurtarma protokolü, Altın Oran tasarımı ve Hollywood cilt ışıltısı.",
        mini_tag_1: "✨ Kaş Kurtarma",
        mini_tag_2: "👄 Dudak Vitamini",
        mini_tag_3: "🌟 Hollywood Glow",
        mini_tag_4: "👁️ İpek Kirpik",
        badge_reviews: "Gerçek Danışan Yorumları",
        badge_expert: "Uzman & Sertifikalı Kadro",
        branches_subtitle: "ULUSLARARASI LÜKS ŞUBELERİMİZ",
        branches_title: "İstanbul Levent Villa & Dubai Studio",
        branches_desc: "Özge Özel imzasını taşıyan iki özel lokasyonda profesyonel güzellik protokolleri.",
        btn_wa_levent_branch: "Levent WhatsApp Randevu",
        btn_maps_levent_branch: "Google Maps'te Yol Tarifi",
        btn_wa_dubai_branch: "Dubai WhatsApp Randevu",
        services_subtitle: "ÖZEL UYGULAMALAR",
        services_title: "Özel Hizmetlerimiz",
        services_desc: "En son estetik teknolojileri ve kişiye özel altın oran analizleriyle geliştirilmiş protokollerimiz.",
        tab_all: "Tümü",
        tab_brows: "Kaş & Microblading",
        tab_skin: "Cilt Bakımı & Vitamin",
        tab_lashes: "İpek Kirpik & Lifting",
        tab_hair: "Saç Kera-Botox & Lazer",
        badge_signature: "İmza İşlem",
        badge_popular: "En Çok Tercih Edilen",
        badge_special: "Özel İlgi",
        badge_trend: "Trend",
        badge_vip: "VIP Saç Bakımı",
        badge_precision: "Hassas İşlem",
        badge_comfort: "Konforlu",
        badge_hygiene: "Steril Spa",
        s1_name: "Kaş Kurtarma & Altın Oran Microblading",
        s1_info: "Yıpranmış, yanlış şekillendirilmiş kaşları özel kıl tekniği ve Altın Oran yüz çizimiyle yeniden yapılandırma.",
        s1_f1: "Kişiye Özel Yüz Altın Oran Çizimi",
        s1_f2: "Doğal Kıl Efekti Pigmentasyonu",
        s1_f3: "1.5 - 2 Yıl Uzun Kalıcılık",
        s2_name: "Hollywood Glow Cilt Bakımı",
        s2_info: "Derinlemesine gözenek temizliği, nem yükleme ve ışıltılı anti-aging serumlar ile kırmızı halı etkisi.",
        s2_f1: "Vakumlu Derin Gözenek Detoksu",
        s2_f2: "LED Terapi & Vitamin Kompleksi",
        s2_f3: "Anında Işıltılı & Canlı Görünüm",
        s3_name: "Dudak Vitamini & Lips Tinting",
        s3_info: "Solgun ve kuru dudaklara hyalüronik asit vitamin desteği ve doğal canlı renk uygulaması.",
        s3_f1: "Yoğun Hyalüronik Nem Deposu",
        s3_f2: "Doğal Canlı Dudak Tonlama",
        s3_f3: "Dolgun ve Pürüzsüz Doku",
        s4_name: "İpek Kirpik (Klasik, Volume, Mega)",
        s4_info: "Göz yapınıza özel kıvrım ve uzunluk tasarımı ile bakışlarınıza hacim ve derinlik kazandırın.",
        s4_f1: "Anti-Alerjenik Özel Yapıştırıcı",
        s4_f2: "1:1 Klasik, 3D & 5D Volume",
        s4_f3: "Hafif ve Doğal Hissiyat",
        s5_name: "Kera-Botox & Saç Renklendirme",
        s5_info: "Yıpranmış saçları kökten uca onaran keratin ve botoks terapileri ile ipeksi parlaklık.",
        s5_f1: "Yoğun Keratin & Onarıcı Botoks",
        s5_f2: "Trend Ombre, Sombre & Babylights",
        s5_f3: "Pürüzsüz ve Güçlü Saç Teli",
        s6_name: "Dipliner & Kalıcı Makyaj",
        s6_info: "Kirpik dibini belirginleştiren dipliner ve yüz hatlarınızı öne çıkaran kalıcı pigmentasyon.",
        s6_f1: "Organik Medikal Pigmentler",
        s6_f2: "Akma Yapmayan Kusursuz Çizgi",
        s6_f3: "Acısız ve Konforlu Uygulama",
        s7_name: "Acısız Lazer Epilasyon",
        s7_info: "Son teknoloji buz başlıklı cihaz ile 4 mevsin istenmeyen tüylerden acısız kurtulma.",
        s7_f1: "Soğutmalı Acısız Başlık",
        s7_f2: "Tüm Cilt Tiplerine Uygun",
        s7_f3: "Hızlı ve Etkili Seanslar",
        s8_name: "Medikal Manikür & Pedikür Spa",
        s8_info: "Medikal hijyen standartlarında el ve ayak bakımı, batık/nasır bakımı ve kalıcı oje.",
        s8_f1: "Otoklav Sterilize Ekipmanlar",
        s8_f2: "Peeling & Spa Masajı",
        s8_f3: "Trend Kalıcı Oje Kataloğu",
        about_subtitle: "ÖZGE ÖZEL AYRICALIĞI",
        about_title: "Neden Özge Özel Beauty?",
        about_lead: "İstanbul Levent Villa ve Dubai Jumeirah şubelerimizde estetik standartlarını en üst seviyeye taşıyoruz.",
        feat1_title: "Ünlülerin & VIP Misafirlerin Tercihi",
        feat1_desc: "Sanat, sahne ve cemiyet hayatının önde gelen isimlerine özel VIP bakım hizmeti veriyoruz.",
        feat2_title: "Özel Altın Oran Yüz Analizi",
        feat2_desc: "Kaş ve kalıcı makyaj işlemlerinde yüz yapınıza en çok yakışan milimetrik Altın Oran çizimi uyguluyoruz.",
        feat3_title: "Otoklav Sterilizasyon Standartı",
        feat3_desc: "Tüm medikal aletlerimiz her danışanımız sonrasında medikal standartlarda otoklav sterilizasyondan geçer.",
        salon_sub_desc: "Levent Yosun Sokak Villa & Dubai Jumeirah",
        day_levent: "🇹🇷 Levent Pzt - Cmt:",
        day_dubai: "🇦🇪 Dubai Salı - Pzr:",
        btn_maps_open: "Levent Konumu Aç",
        reviews_subtitle: "MUTLU DANIŞANLARIMIZ",
        reviews_title: "Gerçek Müşteri Deneyimleri",
        reviews_desc: "Özge Özel Beauty hakkındaki gerçek danışan değerlendirmeleri.",
        rev1_text: "\"Kaşlarımı daha önce başka yerde bozdurmuştum. Özge Hanım'ın Kaş Kurtarma protokolü ile kaşlarım yeniden doğdu. İlgileri ve hijyenleri mükemmel!\"",
        rev1_role: "Google Değerlendirmesi",
        rev2_text: "\"Hollywood Glow cilt bakımı yaptırdım, cildim inanılmaz bir parlaklık kazandı. Levent'teki villa konseptleri de çok huzurlu ve elit.\"",
        rev2_role: "Google Değerlendirmesi",
        rev3_text: "\"Dudak vitamini işlemi yaptırdım, hem rengi hem nemi harika oldu. Dubai ve Levent şubelerinin kalitesi tartışılmaz.\"",
        rev3_role: "Google Değerlendirmesi",
        contact_subtitle: "BİZE ULAŞIN",
        contact_title: "İletişim & Konum",
        contact_lead: "İstanbul Levent Yosun Sokak'taki villamızda ve Dubai Jumeirah şubemizde sizleri ağırlamaktan mutluluk duyarız.",
        c_address_title: "İstanbul Levent Adresi",
        c_dubai_title: "Dubai Jumeirah Adresi",
        c_phone_title: "Telefon & İletişim",
        direct_title: "Doğrudan İletişime Geçin",
        direct_desc: "Fiyat bilgisi, randevu ve danışmanlık talepleriniz için bize anında ulaşın.",
        btn_wa_levent_direct: "Levent WhatsApp (0533 950 45 55)",
        btn_wa_dubai_direct: "Dubai WhatsApp (+971 58 299 3077)",
        btn_maps_direct: "Google Maps Levent Tarifi",
        footer_desc: "İstanbul Levent Villa ve Dubai Jumeirah lokasyonlarında kişiye özel estetik ve güzellik dokunuşları.",
        footer_title_links: "Hızlı Bağlantılar",
        footer_title_services: "Öne Çıkanlar",
        footer_title_social: "İletişim & Sosyal Medya",
        footer_copyright: "© 2026 Özge Özel Beauty. Tüm Hakları Saklıdır. | İstanbul & Dubai"
    },
    en: {
        top_address: "Levent, Yosun St. No:20, Beşiktaş / Istanbul",
        top_hours: "Mon - Sat: 10:00 - 19:00",
        top_wa: "WhatsApp",
        brand_sub: "BEAUTY • LEVENT & DUBАİ",
        nav_home: "Home",
        nav_branches: "Branches",
        nav_services: "Services",
        nav_about: "About Us",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        header_wa_levent: "Levent WhatsApp",
        header_wa_dubai: "Dubai WhatsApp",
        hero_badge: "Istanbul Levent Villa & Dubai Jumeirah Studio",
        hero_title: "Signature Touch <br><span class=\"gold-gradient-text\">By Özge Özel</span>",
        hero_desc: "Pamper yourself with Brow Restoration, Golden Ratio Microblading, Hollywood Glow Skincare, Lip Vitamin, and Hair Kera-Botox.",
        hero_btn_wa_levent: "Levent Booking (0533 950 45 55)",
        hero_btn_wa_dubai: "Dubai Booking (+971 58 299 3077)",
        hero_btn_maps: "Google Maps Directions",
        stat_google: "Google Maps Reviews",
        stat_branches: "Global Locations (TR & UAE)",
        stat_vip: "Celebrity & VIP Choice",
        hero_card_tag: "VIP Studio Experience",
        hero_card_desc: "Exclusive Eyebrow Restoration, Golden Ratio Mapping, and Hollywood Glow.",
        mini_tag_1: "✨ Brow Restoration",
        mini_tag_2: "👄 Lip Vitamin",
        mini_tag_3: "🌟 Hollywood Glow",
        mini_tag_4: "👁️ Lash Extension",
        badge_reviews: "Real Client Feedback",
        badge_expert: "Certified Specialists",
        branches_subtitle: "LUXURY INTERNATIONAL BRANCHES",
        branches_title: "Istanbul Levent Villa & Dubai Studio",
        branches_desc: "Exclusive signature beauty protocols across two prime international locations.",
        btn_wa_levent_branch: "Levent WhatsApp Booking",
        btn_maps_levent_branch: "Get Directions on Maps",
        btn_wa_dubai_branch: "Dubai WhatsApp Booking",
        services_subtitle: "EXCLUSIVE PROCEDURES",
        services_title: "Signature Services",
        services_desc: "Tailored aesthetic procedures powered by advanced technology and golden ratio analysis.",
        tab_all: "All",
        tab_brows: "Brows & Microblading",
        tab_skin: "Skincare & Vitamin",
        tab_lashes: "Lashes & Lifting",
        tab_hair: "Hair Kera-Botox & Laser",
        badge_signature: "Signature",
        badge_popular: "Most Popular",
        badge_special: "Special Care",
        badge_trend: "Trending",
        badge_vip: "VIP Hair Care",
        badge_precision: "Precision",
        badge_comfort: "Comfortable",
        badge_hygiene: "Sterile Spa",
        s1_name: "Eyebrow Restoration & Microblading",
        s1_info: "Restoration of thin or damaged eyebrows using golden ratio mapping and hair-stroke microblading.",
        s1_f1: "Golden Ratio Eyebrow Mapping",
        s1_f2: "Natural Hair-Stroke Pigmentation",
        s1_f3: "1.5 - 2 Years Durability",
        s2_name: "Hollywood Glow Skincare",
        s2_info: "Deep pore detox, hydration boost, and anti-aging serum glow for red carpet skin.",
        s2_f1: "Vortex Pore Detox",
        s2_f2: "LED Therapy & Vitamin Complex",
        s2_f3: "Instant Radiant & Glowing Skin",
        s3_name: "Lip Vitamin & Tinting",
        s3_info: "Hyaluronic acid vitamin treatment for dry lips and natural vibrant color tinting.",
        s3_f1: "Hyaluronic Moisture Hydration",
        s3_f2: "Natural Lip Tinting",
        s3_f3: "Plump & Smooth Texture",
        s4_name: "Eyelash Extensions (Classic, Volume, Mega)",
        s4_info: "Tailored lash extension styles adding depth and elegance to your eyes.",
        s4_f1: "Hypoallergenic Premium Adhesive",
        s4_f2: "1:1 Classic, 3D & 5D Volume",
        s4_f3: "Lightweight & Natural Feel",
        s5_name: "Kera-Botox & Hair Coloring",
        s5_info: "Keratin and hair botox treatments restoring damaged hair for silky shine.",
        s5_f1: "Keratin & Hair Botox Therapy",
        s5_f2: "Trending Ombre, Sombre & Babylights",
        s5_f3: "Smooth & Strong Hair Structure",
        s6_name: "Dipliner & Permanent Makeup",
        s6_info: "Eyeliner pigmentation defining lash lines and enhancing facial features.",
        s6_f1: "Organic Medical Pigments",
        s6_f2: "Flawless Non-Smudging Line",
        s6_f3: "Painless & Comfortable Session",
        s7_name: "Painless Ice Laser Hair Removal",
        s7_info: "Comfortable cooling laser hair removal effective in all seasons.",
        s7_f1: "Ice Cooling Tip",
        s7_f2: "Suitable for All Skin Types",
        s7_f3: "Fast & Effective Sessions",
        s8_name: "Medical Pedicure & Spa Manicure",
        s8_info: "Medical-grade sterile nail care, spa pedicure, and gel polish options.",
        s8_f1: "Autoclave Sterilized Equipment",
        s8_f2: "Peeling & Spa Massage",
        s8_f3: "Gel Polish Catalog",
        about_subtitle: "THE ÖZGE ÖZEL DIFFERENCE",
        about_title: "Why Choose Özge Özel Beauty?",
        about_lead: "We elevate beauty and aesthetic standards to international excellence.",
        feat1_title: "Celebrity & VIP Preference",
        feat1_desc: "Trusted by renowned celebrities, artists, and international VIP guests.",
        feat2_title: "Golden Ratio Facial Analysis",
        feat2_desc: "Precision millimetric mapping customized to your exact facial proportions.",
        feat3_title: "Autoclave Medical Sterilization",
        feat3_desc: "100% medical-grade autoclave sterilization for every single instrument.",
        salon_sub_desc: "Levent Villa & Dubai Jumeirah Studio",
        day_levent: "🇹🇷 Levent Mon - Sat:",
        day_dubai: "🇦🇪 Dubai Tue - Sun:",
        btn_maps_open: "Open Levent Map Location",
        reviews_subtitle: "HAPPY CLIENTS",
        reviews_title: "Client Experiences",
        reviews_desc: "Real feedback from our clients at Özge Özel Beauty.",
        rev1_text: "\"My brows were ruined elsewhere. Özge's Eyebrow Restoration completely revived them. Hygiene is top-notch!\"",
        rev1_role: "Google Review",
        rev2_text: "\"Hollywood Glow skincare gave my skin incredible radiance. The villa location in Levent is so peaceful.\"",
        rev2_role: "Google Review",
        rev3_text: "\"Lip vitamin session was amazing! Color and hydration are perfect. Dubai and Levent studios are elite.\"",
        rev3_role: "Google Review",
        contact_subtitle: "GET IN TOUCH",
        contact_title: "Contact & Locations",
        contact_lead: "We look forward to welcoming you at our Levent Villa in Istanbul and Jumeirah Studio in Dubai.",
        c_address_title: "Istanbul Levent Address",
        c_dubai_title: "Dubai Jumeirah Address",
        c_phone_title: "Phone & Contact",
        direct_title: "Direct Contact",
        direct_desc: "Reach out to us instantly for prices, bookings, and consultations.",
        btn_wa_levent_direct: "Levent WhatsApp (0533 950 45 55)",
        btn_wa_dubai_direct: "Dubai WhatsApp (+971 58 299 3077)",
        btn_maps_direct: "Google Maps Directions",
        footer_desc: "Tailored aesthetic and luxury beauty care in Istanbul Levent Villa and Dubai Jumeirah.",
        footer_title_links: "Quick Links",
        footer_title_services: "Highlights",
        footer_title_social: "Contact & Social",
        footer_copyright: "© 2026 Özge Özel Beauty. All Rights Reserved. | Istanbul & Dubai"
    },
    ar: {
        top_address: "ليفينت، شارع يوسون رقم 20، بشكتاش / إسطنبول",
        top_hours: "الإثنين - السبت: 10:00 - 19:00",
        top_wa: "واتساب",
        brand_sub: "مركز تجميل • إسطنبول ودبي",
        nav_home: "الرئيسية",
        nav_branches: "فروعنا",
        nav_services: "خدماتنا",
        nav_about: "من نحن",
        nav_reviews: "التقييمات",
        nav_contact: "اتصل بنا",
        header_wa_levent: "واتساب إسطنبول",
        header_wa_dubai: "واتساب دبي",
        hero_badge: "فيلا إسطنبول ليفينت & استوديو دبي جميرا",
        hero_title: "لمسة التجميل السحرية <br><span class=\"gold-gradient-text\">مع أوزجي أوزيل</span>",
        hero_desc: "استمتعي بخدمات ترميم الحواجب، المايكروبليدنج بالنسبة الذهبية، العناية بالبشرة هوليوود جلو، وفيتامين الشفاه.",
        hero_btn_wa_levent: "حجز إسطنبول (0533 950 45 55)",
        hero_btn_wa_dubai: "حجز دبي (+971 58 299 3077)",
        hero_btn_maps: "خرائط جوجل ليفينت",
        stat_google: "تقييمات خرائط جوجل",
        stat_branches: "فرعان عالميان (تركيا والإمارات)",
        stat_vip: "خيار المشاهير والـ VIP",
        hero_card_tag: "تجربة تجميل VIP",
        hero_card_desc: "بروتوكول ترميم الحواجب الخاص، رسم النسبة الذهبية ونضارة هوليوود.",
        mini_tag_1: "✨ ترميم الحواجب",
        mini_tag_2: "👄 فيتامين الشفاه",
        mini_tag_3: "🌟 نضارة هوليوود",
        mini_tag_4: "👁️ رموش الحرير",
        badge_reviews: "آراء العميلات الحقيقية",
        badge_expert: "خبيرات معتمدات",
        branches_subtitle: "فروعنا العالمية الفاخرة",
        branches_title: "فيلا إسطنبول ليفينت واستوديو دبي",
        branches_desc: "بروتوكولات تجميل احترافية بتوقيع أوزجي أوزيل في موقعين مميزين.",
        btn_wa_levent_branch: "واتساب إسطنبول",
        btn_maps_levent_branch: "الاتجاهات على الخريطة",
        btn_wa_dubai_branch: "واتساب دبي",
        services_subtitle: "خدماتنا المميزة",
        services_title: "خدمات التجميل",
        services_desc: "بروتوكولات مخصصة مدعومة بأحدث التقنيات وتحليل النسبة الذهبية.",
        tab_all: "الكل",
        tab_brows: "الحواجب والمايكروبليدنج",
        tab_skin: "العناية بالبشرة والفيتامينات",
        tab_lashes: "الرموش والرفع",
        tab_hair: "كيرا بوتوكس الشعر والليزر",
        badge_signature: "الخدمة المميزة",
        badge_popular: "الأكثر طلباً",
        badge_special: "عناية خاصة",
        badge_trend: "تريند",
        badge_vip: "عناية VIP للشعر",
        badge_precision: "دقة عالية",
        badge_comfort: "مريح",
        badge_hygiene: "تعقيم طبي",
        s1_name: "ترميم الحواجب والمايكروبليدنج",
        s1_info: "ترميم الحواجب التالفة بتقنية شعرة شعرة ورسم النسبة الذهبية للوجه.",
        s1_f1: "رسم النسبة الذهبية للوجه",
        s1_f2: "صبغة شعرة شعرة طبيعية",
        s1_f3: "ثبات يدوم 1.5 - 2 سنة",
        s2_name: "العناية بالبشرة هوليوود جلو",
        s2_info: "تنظيف عميق للمسام، ترطيب مكثف وسيرومات النضارة لمظهر النجمات.",
        s2_f1: "تنظيف عميق للمسام بالشفط",
        s2_f2: "علاج بالضوء وفيتامينات",
        s2_f3: "نضارة فورية للبشرة",
        s3_name: "فيتامين الشفاه والتوريد",
        s3_info: "علاج فيتامين بحمض الهيالورونيك للشفاه الجافة مع توريد طبيعي.",
        s3_f1: "ترطيب مكثف بحمض الهيالورونيك",
        s3_f2: "توريد شفاه طبيعي",
        s3_f3: "ملمس ناعم وممتلئ",
        s4_name: "تركيب الرموش الحريرية",
        s4_info: "تصميم رموش مخصص يضيف عمقاً وجمالاً لنظرتك.",
        s4_f1: "لاصق طبي ضد الحساسية",
        s4_f2: "كلاسيك وفوليوم 3D & 5D",
        s4_f3: "مظهر خفيف وطبيعي",
        s5_name: "كيرا بوتوكس وتلوين الشعر",
        s5_info: "علاج البوتوكس واليراتين للشعر التالف لمعان حريري.",
        s5_f1: "علاج الكيراتين والبوتوكس المكثف",
        s5_f2: "أومبري وسومبري عصري",
        s5_f3: "شعر قوي وناعم",
        s6_name: "الديب لاينر والمكياج الدائم",
        s6_info: "تحديد خط الرموش والمكياج الدائم لإبراز ملامح الوجه.",
        s6_f1: "صبغات طبية عضوية",
        s6_f2: "خط دقيق لا يسيل",
        s6_f3: "جلسة مريحة بدون ألم",
        s7_name: "إزالة الشعر بالليزر بدون ألم",
        s7_info: "أحدث جهاز ليزر برأس تبريد للتخلص من الشعر في جميع الفصول.",
        s7_f1: "رأس تبريد مريح بدون ألم",
        s7_f2: "مناسب لجميع انواع البشرة",
        s7_f3: "جلسات سريعة وفعالة",
        s8_name: "بديكير ومنيكير طبي",
        s8_info: "عناية بالأظافر والاقدام وفق أعلى معايير التعقيم الطبي.",
        s8_f1: "أدوات معقمة بجهاز الأوتوكلاف",
        s8_f2: "تقشير ومساج سبا",
        s8_f3: "طلاء أظافر دائم",
        about_subtitle: "تميز أوزجي أوزيل",
        about_title: "لماذا تختارين أوزجي أوزيل؟",
        about_lead: "نقدم أعلى مستويات التجميل في إسطنبول ليفينت ودبي جميرا.",
        feat1_title: "خيار المشاهير والـ VIP",
        feat1_desc: "نحظى بثقة أبرز المشاهير والفنانات والعميلات المميزات.",
        feat2_title: "تحليل الوجه بالنسبة الذهبية",
        feat2_desc: "رسم دقيق بالمليمتر يناسب ملامح وجهك الفريدة.",
        feat3_title: "تعقيم طبي بالأوتوكلاف",
        feat3_desc: "تعقيم 100% لكل الأدوات بجهاز الأوتوكلاف الطبي.",
        salon_sub_desc: "فيلا ليفينت واستوديو دبي جميرا",
        day_levent: "🇹🇷 ليفينت الإثنين - السبت:",
        day_dubai: "🇦🇪 دبي الثلاثاء - الأحد:",
        btn_maps_open: "فتح موقع ليفينت",
        reviews_subtitle: "عميلاتنا السعيدات",
        reviews_title: "تجارب العميلات",
        reviews_desc: "آراء حقيقية من عميلات أوزجي أوزيل بيوتي.",
        rev1_text: "\"ترميم الحواجب عند أوزجي أوزيل أعاد لحواجبي جمالها بعد تلفها في مكان آخر. النظافة والاحترافية 10/10!\"",
        rev1_role: "تقييم خرائط جوجل",
        rev2_text: "\"جلسة هوليوود جلو أعطت بشرتي نضارة عجيبة. والفيلا في ليفينت راقية جداً ومريحة.\"",
        rev2_role: "تقييم خرائط جوجل",
        rev3_text: "\"فيتامين الشفاه رائع جداً، اللون والترطيب ممتازين. مستوى فروع دبي وإسطنبول لا يعلى عليه.\"",
        rev3_role: "تقييم خرائط جوجل",
        contact_subtitle: "تواصل معنا",
        contact_title: "التواصل والموقع",
        contact_lead: "يسعدنا استقبالكم في فيلا ليفينت بإسطنبول واستوديو جميرا بدبي.",
        c_address_title: "عنوان إسطنبول ليفينت",
        c_dubai_title: "عنوان دبي جميرا",
        c_phone_title: "الهاتف والتواصل",
        direct_title: "تواصل مباشر",
        direct_desc: "تواصل معنا فوراً للحجز واستفسارات الأسعار.",
        btn_wa_levent_direct: "واتساب إسطنبول (0533 950 45 55)",
        btn_wa_dubai_direct: "واتساب دبي (+971 58 299 3077)",
        btn_maps_direct: "اتجاهات خرائط جوجل",
        footer_desc: "لمسات تجميلية فاخرة في فيلا إسطنبول ليفينت واستوديو دبي جميرا.",
        footer_title_links: "روابط سريعة",
        footer_title_services: "الأبرز",
        footer_title_social: "التواصل والتواصل الاجتماعي",
        footer_copyright: "© 2026 Özge Özel Beauty. جميع الحقوق محفوظة. | إسطنبول ودبي"
    },
    ru: {
        top_address: "Левант, ул. Йосун №20, Бешикташ / Стамбул",
        top_hours: "Пн - Сб: 10:00 - 19:00",
        top_wa: "WhatsApp",
        brand_sub: "САЛОН КРАСОТЫ • СТАМБУЛ И ДУБАЙ",
        nav_home: "Главная",
        nav_branches: "Филиалы",
        nav_services: "Услуги",
        nav_about: "О нас",
        nav_reviews: "Отзывы",
        nav_contact: "Контакты",
        header_wa_levent: "WhatsApp Стамбул",
        header_wa_dubai: "WhatsApp Дубай",
        hero_badge: "Вилла Стамбул Левент & Студия Дубай Джумейра",
        hero_title: "Премиальная красота <br><span class=\"gold-gradient-text\">от Озге Озел</span>",
        hero_desc: "Восстановление бровей, микроблейдинг по Золотому Сечению, уход Hollywood Glow, витамины для губ и кератин для волос.",
        hero_btn_wa_levent: "Запись Стамбул (0533 950 45 55)",
        hero_btn_wa_dubai: "Запись Дубай (+971 58 299 3077)",
        hero_btn_maps: "Маршрут в Google Maps",
        stat_google: "Отзывы в Google Maps",
        stat_branches: "2 филиала (Турция и ОАЭ)",
        stat_vip: "Выбор VIP и знаменитостей",
        hero_card_tag: "VIP студия красоты",
        hero_card_desc: "Авторский протокол восстановления бровей, Золотое Сечение и голливудское сияние.",
        mini_tag_1: "✨ Реставрация бровей",
        mini_tag_2: "👄 Витамины для губ",
        mini_tag_3: "🌟 Hollywood Glow",
        mini_tag_4: "👁️ Ресницы",
        badge_reviews: "Реальные отзывы клиентов",
        badge_expert: "Сертифицированные мастера",
        branches_subtitle: "МЕЖДУНАРОДНЫЕ ФИЛИАЛЫ",
        branches_title: "Вилла Стамбул Левент & Студия Дубай",
        branches_desc: "Профессиональные протоколы красоты в двух элитных локациях.",
        btn_wa_levent_branch: "Запись в WhatsApp Стамбул",
        btn_maps_levent_branch: "Маршрут на карте",
        btn_wa_dubai_branch: "Запись в WhatsApp Дубай",
        services_subtitle: "АВТОРСКИЕ ПРОЦЕДУРЫ",
        services_title: "Наши Услуги",
        services_desc: "Передовые эстетические технологии и индивидуальный анализ пропорций лица.",
        tab_all: "Все",
        tab_brows: "Брови и Микроблейдинг",
        tab_skin: "Уход за кожей",
        tab_lashes: "Ресницы и Ламинирование",
        tab_hair: "Кератин и Лазер",
        badge_signature: "Авторская процедура",
        badge_popular: "Хит продаж",
        badge_special: "Особый уход",
        badge_trend: "Тренд",
        badge_vip: "VIP уход за волосами",
        badge_precision: "Точная работа",
        badge_comfort: "Комфортно",
        badge_hygiene: "Стерильно",
        s1_name: "Реставрация бровей & Микроблейдинг",
        s1_info: "Восстановление поврежденных бровей с эскизом по Золотому Сечению.",
        s1_f1: "Эскиз по Золотому Сечению лица",
        s1_f2: "Естественная волосковая техника",
        s1_f3: "Стойкость от 1.5 до 2 лет",
        s2_name: "Уход за кожей Hollywood Glow",
        s2_info: "Глубокая чистка пор, увлажнение и антивозрастные сыворотки для эффекта красной дорожки.",
        s2_f1: "Вакуумный детокс пор",
        s2_f2: "LED-терапия и витаминный комплекс",
        s2_f3: "Мгновенное сияние кожи",
        s3_name: "Витамины для губ & Перманент",
        s3_info: "Увлажнение гиалуроновой кислотой для сухих губ и естественный сочный оттенок.",
        s3_f1: "Интенсивное увлажнение",
        s3_f2: "Натуральное тонирование губ",
        s3_f3: "Гладкая и объемная текстура",
        s4_name: "Наращивание ресниц (Классика, Объем)",
        s4_info: "Индивидуальный подбор изгиба и длины ресниц для выразительного взгляда.",
        s4_f1: "Гипоаллергенный премиум клей",
        s4_f2: "1:1 Классика, 3D и 5D Объем",
        s4_f3: "Легкость и естественный вид",
        s5_name: "Кера-Ботокс & Окрашивание волос",
        s5_info: "Восстановление поврежденных волос кератином и ботоксом для шелковистого блеска.",
        s5_f1: "Интенсивная кератинотерапия",
        s5_f2: "Трендовое Омбре и Балаяж",
        s5_f3: "Гладкие и прочные волосы",
        s6_name: "Диплайнер & Перманентный макияж",
        s6_info: "Подчеркивание межресничного пространства и выразительные стрелки.",
        s6_f1: "Органические медицинские пигменты",
        s6_f2: "Идеально четкая линия",
        s6_f3: "Безболезненная процедура",
        s7_name: "Безболезненная лазерная эпиляция",
        s7_info: "Лазерная эпиляция с ледяным охлаждающим датчиком для любого сезона.",
        s7_f1: "Охлаждающий наконечник",
        s7_f2: "Для всех типов кожи",
        s7_f3: "Быстрые и эффективные сеансы",
        s8_name: "Медицинский педикюр & Маникюр Spa",
        s8_info: "Гигиенический уход за ногтями в стерильных условиях и покрытие гель-лаком.",
        s8_f1: "Стерилизация в автоклаве 100%",
        s8_f2: "Пилинг и СПА-массаж",
        s8_f3: "Каталог стойких гель-лаков",
        about_subtitle: "ПРЕИМУЩЕСТВА ÖZGE ÖZEL",
        about_title: "Почему выбирают Özge Özel Beauty?",
        about_lead: "Мы поднимаем стандарты красоты на международный уровень в Стамбуле и Дубае.",
        feat1_title: "Выбор VIP и знаменитостей",
        feat1_desc: "Нам доверяют известные артисты, звезды и эксклюзивные гостьи.",
        feat2_title: "Анализ лица по Золотому Сечению",
        feat2_desc: "Точный расчет формы бровей и перманентного макияжа под ваши пропорции.",
        feat3_title: "Медицинская стерилизация",
        feat3_desc: "100% стерилизация инструментов в автоклаве медицинского класса.",
        salon_sub_desc: "Вилла Левент и Студия Дубай Джумейра",
        day_levent: "🇹🇷 Левент Пн - Сб:",
        day_dubai: "🇦🇪 Дубай Вт - Вс:",
        btn_maps_open: "Открыть карту Левент",
        reviews_subtitle: "СЧАСТЛИВЫЕ КЛИЕНТЫ",
        reviews_title: "Отзывы Клиентов",
        reviews_desc: "Реальные отзывы наших клиентов о салоне Özge Özel Beauty.",
        rev1_text: "\"Реставрация бровей у Озге вернула к жизни мои брови после неудачной работы в другом месте. Чистота и сервис 10/10!\"",
        rev1_role: "Отзыв в Google",
        rev2_text: "\"Уход Hollywood Glow дал потрясающее сияние коже. А вилла в Левенте очень уютная и элитная.\"",
        rev2_role: "Отзыв в Google",
        rev3_text: "\"Витамины для губ просто супер! Цвет и увлажнение на высоте. Уровень Стамбула и Дубая бесспорен.\"",
        rev3_role: "Отзыв в Google",
        contact_subtitle: "СВЯЗАТЬСЯ С НАМИ",
        contact_title: "Контакты & Адреса",
        contact_lead: "Будем рады видеть вас на нашей вилле в Левенте (Стамбул) и в студии в Джумейре (Дубай).",
        c_address_title: "Адрес Стамбул Левент",
        c_dubai_title: "Адрес Дубай Джумейра",
        c_phone_title: "Телефон и контакты",
        direct_title: "Прямая связь",
        direct_desc: "Свяжитесь с нами для уточнения цен и записи.",
        btn_wa_levent_direct: "WhatsApp Стамбул (0533 950 45 55)",
        btn_wa_dubai_direct: "WhatsApp Дубай (+971 58 299 3077)",
        btn_maps_direct: "Маршрут в Google Maps",
        footer_desc: "Индивидуальный уход и премиальная красота на вилле в Левенте и в Дубае.",
        footer_title_links: "Быстрые ссылки",
        footer_title_services: "Популярные процедуры",
        footer_title_social: "Контакты и соцсети",
        footer_copyright: "© 2026 Özge Özel Beauty. Все права защищены. | Стамбул и Дубай"
    }
};

/* Current active language */
let currentLang = localStorage.getItem('ozge_ozel_lang') || 'tr';

function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    if (!langBtns.length) return;

    setLanguage(currentLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang && translations[lang]) {
                currentLang = lang;
                localStorage.setItem('ozge_ozel_lang', currentLang);
                setLanguage(currentLang);
            }
        });
    });
}

function setLanguage(lang) {
    document.documentElement.lang = lang;

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

/* 2. Service Filter Tabs */
function initServiceTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            serviceCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
}

/* 3. Mobile Nav Menu Toggle */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

/* 4. Sticky Header Scroll Effect */
function initScrollHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '14px 0';
        }
    });
}
