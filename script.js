document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // --- Theme Switching Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Icons
    const sunIcon = `<svg class="sun-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line></svg>`;
    const moonIcon = `<svg class="moon-icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        htmlElement.setAttribute('data-theme', savedTheme);
        if (themeToggle) {
            themeToggle.innerHTML = sunIcon + moonIcon;
        }
    }

    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    if (themeToggle) {
        initTheme();
        themeToggle.addEventListener('click', toggleTheme);
    }

    // --- Multi-language Logic ---
    const langDropBtn = document.querySelector('.lang-dropbtn');
    const globeIcon = `<svg class="globe-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    
    const translations = {
        'zh': {
            'logo': '隨便你工作室',
            'nav-works': '作品',
            'nav-future': '預告',
            'nav-contact': '聯絡我們',
            'nav-about': '關於我們',
            'hero-title': '創意，<br>隨便你想。',
            'hero-subtitle': '我們是隨便你工作室。在這裡，工具是藝術，遊戲是體驗，而創意是唯一的信仰。',
            'cta-explore': '探索作品',
            'cta-future': '未來計畫',
            'core-title': '我們的核心',
            'core-value': '核心價值',
            'util-title': '實用工具',
            'util-desc': '網站、程式、應用。我們打造貼心的工具，讓每一次操作都流暢自然。',
            'exp-label': '體驗設計',
            'game-title': '互動與遊戲',
            'game-desc': '從想法到上線，我們注入動畫與細節。',
            'svc-label': '專業服務',
            'svc-title': '專業接案',
            'svc-desc': '結合創意與技術，讓你的專案脫穎而出。',
            'det-label': '細節堅持',
            'det-title': '動畫美學',
            'det-desc': '每一次轉場都是對細節的堅持。',
            'works-title': '精選作品',
            'ai-label': 'AI 模型',
            'huson-desc': '來自台灣，為世界而生。台灣獨立開發的生成式人工智慧。',
            'div-label': '占卜與象徵',
            'animora-title': '靈獸牌',
            'animora-desc': '獨家靈獸牌，以象徵與智慧帶來解答。',
            'trans-label': '語言翻譯',
            'trans-title': '隨便你翻',
            'trans-desc': '結合 Huson AI 的即時翻譯與學習。',
            'game-label': '遊戲體驗',
            'game2048-title': '2048 全球對戰',
            'game2048-desc': '經典遊戲，嶄新體驗。與全球玩家同場對決。',
            'util-label': '實用工具',
            'mahjong-title': '麻將工具箱',
            'weather-label': '天氣氣象',
            'weather-title': '專業氣象預報',
            'edu-label': '學習教育',
            'yanyan-title': '雁雁球',
            'psy-label': '人格心理',
            'mbti-title': 'MBTI 測試',
            'esport-label': '電競動態',
            'val-title': '特戰隨便你',
            'footer-copy': '&copy; 2025 隨便你工作室. All Rights Reserved.',
            // Secondary pages
            'about-us': '關於我們',
            'team-title': '核心團隊',
            'founder-role': '創立人',
            'founder-desc': '我希望可以透過我們的技術來實現大家的創意，因此創立此工作室。',
            'values-title': '我們的價值',
            'contact-title': '聯絡我們',
            'contact-subtitle': '有任何專案想法或合作需求？歡迎隨時與我們聯繫！',
            'email-label': '聯絡信箱',
            'email-desc': '我們的電子信箱，隨時為您敞開。',
            'msg-title': '或直接留言給我們',
            'btn-send': '傳送訊息'
        },
        'en': {
            'logo': 'Up To You Studio',
            'nav-works': 'Works',
            'nav-future': 'Future',
            'nav-contact': 'Contact',
            'nav-about': 'About',
            'hero-title': 'Creative,<br>Defined by You.',
            'hero-subtitle': 'We are Up To You Studio. Where tools are art, games are experiences, and creativity is our only creed.',
            'cta-explore': 'Explore',
            'cta-future': 'Future',
            'core-title': 'Our Core',
            'core-value': 'Core Value',
            'util-title': 'Utility',
            'util-desc': 'Web, apps, and software. We build thoughtful tools for a seamless experience.',
            'exp-label': 'Experience',
            'game-title': 'Games & Interaction',
            'game-desc': 'From concept to launch, we inject life with animation and detail.',
            'svc-label': 'Services',
            'svc-title': 'Contracting',
            'svc-desc': 'Blending creativity with tech to make your projects stand out.',
            'det-label': 'Detail',
            'det-title': 'Aesthetics',
            'det-desc': 'Every transition is a commitment to perfection.',
            'works-title': 'Featured Works',
            'ai-label': 'AI Models',
            'huson-desc': 'Born in Taiwan for the world. An independent generative AI project.',
            'div-label': 'Divination',
            'animora-title': 'Animora Cards',
            'animora-desc': 'Exclusive cards bringing wisdom and answers.',
            'trans-label': 'Translation',
            'trans-title': 'UpToTranslate',
            'trans-desc': 'Real-time smart translation powered by Huson AI.',
            'game-label': 'Gaming',
            'game2048-title': '2048 Global',
            'game2048-desc': 'Classic game, new experience. Battle players worldwide.',
            'util-label': 'Utility',
            'mahjong-title': 'Mahjong Toolbox',
            'weather-label': 'Weather',
            'weather-title': 'Professional Forecast',
            'edu-label': 'Education',
            'yanyan-title': 'Yanyan Ball',
            'psy-label': 'Psychology',
            'mbti-title': 'MBTI Test',
            'esport-label': 'Esports',
            'val-title': 'UpToVal',
            'footer-copy': '&copy; 2025 Up To You Studio. All Rights Reserved.',
            // Secondary pages
            'about-us': 'About Us',
            'team-title': 'Core Team',
            'founder-role': 'Founder',
            'founder-desc': 'I founded this studio to bring everyone\'s creative ideas to life through technology.',
            'values-title': 'Our Values',
            'contact-title': 'Contact Us',
            'contact-subtitle': 'Have a project or partnership in mind? Get in touch!',
            'email-label': 'Email',
            'email-desc': 'Our inbox is always open for you.',
            'msg-title': 'Leave a Message',
            'btn-send': 'Send Message'
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
        localStorage.setItem('lang', lang);
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    function initLanguage() {
        if (langDropBtn) {
            langDropBtn.innerHTML = globeIcon;
        }
        
        const savedLang = localStorage.getItem('lang') || 'zh';
        setLanguage(savedLang);

        // Attach listeners to dropdown items
        const langItems = document.querySelectorAll('.lang-content button');
        langItems.forEach(item => {
            item.addEventListener('click', () => {
                const lang = item.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    initLanguage();

    // --- Bento Card Mouse Follow Effect ---
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});