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
            'mahjong-desc': '專屬於麻將愛好者的全能助手。',
            'weather-label': '天氣氣象',
            'weather-title': '專業氣象預報',
            'weather-desc': '提供最可靠、直覺的天氣指南。',
            'edu-label': '學習教育',
            'yanyan-title': '雁雁球',
            'yanyan-desc': '專為考生打造的 7000 單字學習平台。',
            'psy-label': '人格心理',
            'mbti-title': 'MBTI 測試',
            'mbti-desc': '真正精準、深入的人格分析網站。',
            'esport-label': '電競動態',
            'val-title': '特戰隨便你',
            'val-desc': '為您的特戰添增許多色彩。',
            'footer-copy': '&copy; 2025 隨便你工作室. All Rights Reserved.',
            // About Page
            'about-us': '關於我們',
            'about-hero-subtitle': '一個喜歡把想法變成產品的學生與創作者。專注於工具、遊戲與 AI 體驗設計。',
            'team-title': '核心團隊',
            'team-desc': '以下為主要成員。我們的設計著重於使用者體驗、效能與細節。',
            'founder-role': '創立人',
            'founder-desc': '我希望可以透過我們的技術來實現大家的創意，因此創立此工作室。',
            'team-member': '團隊成員',
            'values-title': '我們的價值',
            'values-v1-t': '用心設計',
            'values-v1-d': '每個互動都經過思考，追求流暢與直覺。',
            'values-v2-t': '技術為本',
            'values-v2-d': '以可維護、可擴展的方式實作，重視效能與穩定性',
            'values-v3-t': '社群與分享',
            'values-v3-d': '讓作品與社群一起成長。',
            'about-join': '想加入我們或有合作想法？<br><a href="contact.html" style="color: white; text-decoration: underline;">立即聯絡</a>，一起把創意變成現實。',
            // Contact Page
            'contact-title': '聯絡我們',
            'contact-subtitle': '有任何專案想法或合作需求？<br>歡迎隨時與我們聯繫！',
            'email-label': '聯絡信箱',
            'email-desc': '我們的電子信箱，隨時為您敞開。',
            'msg-title': '或直接留言給我們',
            'btn-send': '傳送訊息',
            'contact-placeholder-name': '您的稱呼',
            'contact-placeholder-email': '您的電子信箱',
            'contact-placeholder-msg': '您的訊息',
            // Coming Soon Page
            'future-title': '即將登場',
            'future-subtitle': '我們正在打造的下一個驚喜，敬請期待。',
            'future-rpg-cat': '角色扮演專案',
            'future-rpg-title': '長篇文字 RPG',
            'future-rpg-quote': '「故事，從文字開始。」',
            'future-rpg-desc': '我們即將推出一款前所未有的長篇文字 RPG。不只是閱讀，而是親身參與的冒險。',
            'future-rpg-f1-t': '謎題與探索：',
            'future-rpg-f1-d': '線索隱藏在文字之中，每一次選擇，都將改變故事的走向。',
            'future-rpg-f2-t': '戰鬥與成長：',
            'future-rpg-f2-d': '面對怪物，戰鬥、升級，寫下專屬於你的傳奇。',
            'future-rpg-f3-t': '沉浸體驗：',
            'future-rpg-f3-d': '用文字構築的世界，卻比想像更真實。',
            'future-rpg-final-1': '這不只是故事。',
            'future-rpg-final-2': '這是 你的冒險。',
            'future-rpg-final-3': '「你的選擇，就是故事。」',
            // Yanyanball Page
            'yanyan-tagline': '「學英文，回到本質。」',
            'yanyan-start': '開始學習',
            'yanyan-hero-main': '專為考生而生的英文學習網站',
            'yanyan-hero-sub': '簡單、專注、有效。',
            'yanyan-description': '我們深信，學習不應該被繁雜的介面或額外的負擔給干擾。雁雁球的誕生，就是為了讓每一位考生都能在最純粹的環境中，發揮最高效的學習力。',
            'yanyan-f1-t': '7000 單字庫',
            'yanyan-f1-d': '完整收錄大考中心公布之學測 7000 單字。來自權威來源，讓你學得更安心。',
            'yanyan-f2-t': '單字測驗',
            'yanyan-f2-d': '即時檢視學習成果。讓記憶不再只是死背，而是透過實戰真正掌握。',
            'yanyan-f3-t': '單字劃記',
            'yanyan-f3-d': '標記重點、整理弱點。打造專屬於你的單字清單，哪裡不會補哪裡。',
            'yanyan-f4-t': '功能全面',
            'yanyan-f4-d': '從理解到應用。讓單字不再只是字母的組合，而是真正轉化為你的能力。',
            'yanyan-f5-t': '完全免費',
            'yanyan-f5-d': '沒有訂閱，沒有付費牆。我們致力於打破教育資源的不平等，所有功能全面開放。',
            'yanyan-quote': '這不只是單字網站。',
            'yanyan-quote-highlight': '這是 雁雁球。',
            'yanyan-quote-sub': '「因為學習，不該有門檻。」',
            'yanyan-copy': '&copy; 2025 隨便你工作室 & 雁雁球. All Rights Reserved.',
            // UpToTranslate Page
            'trans-tagline': '「翻譯，從未如此聰明。」',
            'trans-btn': '立即體驗',
            'trans-hero-desc': '我們打造的不只是翻譯工具，<br>而是一款結合 Huson AI 的智慧軟體。',
            'trans-f1-t': '即時翻譯',
            'trans-f1-d': '跨越語言隔閡，每一句話都能被精準傳達。',
            'trans-f2-t': '智慧學習',
            'trans-f2-d': '不只是看懂，AI 會在翻譯過程中陪伴你學習，讓語言能力隨時進步。',
            'trans-f3-t': '個人化體驗',
            'trans-f3-d': 'Huson AI 了解你的習慣與需求，給予最貼近你的建議與解釋。',
            'trans-f4-t': '直覺設計',
            'trans-f4-d': '簡潔的介面、流暢的動畫，每一次操作，都是享受。',
            'trans-quote-1': '這不只是翻譯。',
            'trans-quote-2': '這是 懂你的翻譯。',
            'trans-quote-3': '「因為語言，不該成為阻礙。」',
            // Huson AI Page
            'ai-tagline': '「來自台灣，為世界而生。」',
            'ai-btn': '立即體驗',
            'ai-hero-desc': '我們相信，最好的科技，不只要強大，更要懂你。<br>Huson AI —— 台灣獨立開發的生成式人工智慧。',
            'ai-pro-cat': '精準模型',
            'ai-pro-title': '3.0 Pro',
            'ai-pro-desc': '程式設計的極致利器，推理精準而全面。無論是演算法、代碼，還是複雜的系統設計，Pro，為你打造專業級的未來。',
            'ai-mini-cat': '極速體驗',
            'ai-mini-title': '3.0 Mini',
            'ai-mini-desc': '快，更快。文字生成的極致體驗。一瞬之間，創意與靈感躍然成形。Mini，用最短的時間，給你最強的文字力。',
            'ai-future-title': '未來展望',
            'ai-future-desc': '我們持續擴展 Huson AI 的能力，下一步將加入多種創新功能，讓 AI 不只是工具，而是真正的協作夥伴。',
            'ai-future-f1-cat': '次世代功能',
            'ai-future-f1-title': '隨便問 — 推理模式',
            'ai-future-f1-desc': '針對複雜問題，Huson AI 會像專家一樣逐步推理、拆解假設並給出可執行建議。適用於程式偵錯與策略規劃。',
            'ai-future-f2-cat': '創意影像',
            'ai-future-f2-title': '圖片生成',
            'ai-future-f2-desc': '從文字描述到視覺作品，產出高解析圖像。',
            'ai-future-test': '若想參與測試，請透過 <a href="contact.html" style="color: white; text-decoration: underline;">聯絡我們</a>。',
            'ai-final-1': '這不只是人工智慧。',
            'ai-final-2': '這是 Huson AI。',
            'ai-final-3': '「滿滿台灣味，走向全世界。」',
            // Animora Card Page
            'animora-tagline': '「占卜，重新定義。」',
            'animora-btn': '立即體驗',
            'animora-hero-desc': '我們打造一副前所未有的牌組。不是塔羅，而是獨一無二的靈獸牌。每一張牌，都承載著象徵與啟示。每一次抽牌，都是專屬於你的答案。',
            'animora-f1-t': '專業占卜',
            'animora-f1-d': '以靈獸為引導，探索未來與自己。',
            'animora-f2-t': '智慧解答',
            'animora-f2-d': '結合 Huson AI，帶來最客製化、最貼近心靈的占卜體驗。',
            'animora-f3-t': '直覺介面',
            'animora-f3-d': '精緻互動，流暢細節，讓神秘與科技完美融合。',
            'animora-final-1': '這不只是占卜。',
            'animora-final-2': '這是 靈獸牌。',
            'animora-final-3': '「未知，從此清晰。」',
            // 2048 Page
            'game2048-tagline': '「經典遊戲，嶄新體驗。」',
            'game2048-hero-desc': '2048，不只是單機挑戰。我們重新定義這款經典，<br>讓你可以登入帳號，即時與來自世界各地的玩家同場對決。',
            'game2048-f1-t': '實力對抗',
            'game2048-f1-d': '不再只是無止境的拼湊方塊，而是一場場刺激的競技。分數、速度、策略，每一步都攸關勝負。',
            'game2048-f2-t': '全球排名',
            'game2048-f2-d': '即刻登入，挑戰世界。用你的智慧與手速，登上排行榜的頂端。',
            'game2048-f3-t': '全新社群體驗',
            'game2048-f3-d': '朋友、對手、戰場。這不再只是單人遊戲，而是一個屬於所有玩家的競技舞台。',
            'game2048-final-1': '這不只是遊戲。',
            'game2048-final-2': '這是 2048 全球對戰。',
            'game2048-final-3': '「經典，從此不同。」',
            // Mahjong Toolbox Page
            'mahjong-tagline': '「打牌，不只是運氣，還需要工具。」',
            'mahjong-hero-desc': '我們打造一款專屬於麻將愛好者的全能程式。<br>麻將工具箱 —— 讓你的每一局，都更有掌握。',
            'mahjong-f1-t': '聽牌計算',
            'mahjong-f1-d': '輸入手牌，即刻知道可以聽哪些牌。更能模擬打出不同選擇後的聽牌變化。精準、快速，給你最專業的分析。',
            'mahjong-f2-t': '自我測驗',
            'mahjong-f2-d': '想挑戰自己？透過練習模式，一眼就能判斷聽什麼。從此不只是運氣，而是實力。',
            'mahjong-f3-t': '麻將骰子',
            'mahjong-f3-d': '忘了帶骰子？沒關係。內建麻將骰子功能，隨時隨地，一鍵抓牌。',
            'mahjong-f4-t': '財神功能',
            'mahjong-f4-d': '今日運勢，一看便知。還能招財神，讓你打牌更添吉祥。',
            'mahjong-f5-t': '找牌咖',
            'mahjong-f5-d': '透過我們的伺服器，你可以輕鬆找到牌友，隨時開桌，麻將不再孤單',
            'mahjong-final-1': '這不只是輔助工具。',
            'mahjong-final-2': '這是 麻將工具箱。',
            'mahjong-final-3': '「因為打牌，值得更專業。」',
            // MBTI Page
            'mbti-tagline': '「了解自己，是最重要的能力。」',
            'mbti-hero-desc': '我們打造了一款真正精準的 MBTI 人格分析網站。<br>不只是分類，而是深入理解。',
            'mbti-f1-t': '高精度人格分析',
            'mbti-f1-d': '透過嚴謹設計的測驗邏輯，提供穩定且一致的 MBTI 結果，讓分析不再流於表面。',
            'mbti-f2-t': '完整結果解析',
            'mbti-f2-d': '每一種人格，都有清楚的性格結構、優勢與盲點說明，讓你真正看懂自己。',
            'mbti-f3-t': '職業建議',
            'mbti-f3-d': '根據人格特質，提供適合發展的職業方向，幫助你做出更清醒的選擇。',
            'mbti-f4-t': '名人對照',
            'mbti-f4-d': '探索與你擁有相同人格的知名人物，看見這種人格在世界中的可能性。',
            'mbti-f5-t': '人際相處指南',
            'mbti-f5-d': '清楚列出適合相處、以及容易產生衝突的人格類型，讓關係不再只是靠運氣。',
            'mbti-final-1': '這不只是一個測驗。',
            'mbti-final-2': '這是 精準 MBTI。',
            'mbti-final-3': '「理解自己，才能走得更遠。」',
            // Weather Page
            'weather-tagline': '「天氣，不只是預測。」',
            'weather-hero-desc': '我們打造全新的專業氣象預報軟體，結合中央氣象署的資料，讓資訊更可靠、更精準。',
            'weather-f1-t': '36 小時完整預報',
            'weather-f1-d': '清晰呈現未來一天半的天氣走向，無論晴雨，都能提前掌握。',
            'weather-f2-t': '動態動畫效果',
            'weather-f2-d': '以精緻的視覺化呈現，讓預報不只是數字，而是流動的體驗。',
            'weather-f3-t': '專業 × 直覺',
            'weather-f3-d': '簡單的操作，專業的資訊，每一次打開，都能安心出門。',
            'weather-final-1': '這不只是天氣軟體。',
            'weather-final-2': '這是 氣象預報。',
            'weather-final-3': '「因為天氣，值得更清晰。」',
            // UpToVal Page
            'val-tagline': '「娛樂，從戰場開始。」',
            'val-hero-desc': '我們打造了一款專屬於 特戰英豪玩家 的全能輔助平台。<br>這不只是工具，而是你的遊戲夥伴。',
            'val-f1-t': '自訂對戰娛樂功能',
            'val-f1-d': '讓每一場對戰都更有創意。無論想限制武器、改變規則，還是挑戰朋友，一鍵設定，輕鬆開局。',
            'val-f2-t': '特戰新聞與職業賽事',
            'val-f2-d': '即時追蹤最新消息，掌握全球賽場動態，隨時與世界同步。',
            'val-f3-t': '專業攻略',
            'val-f3-d': '角色戰術、地圖分析、武器選擇，提供最完整的戰略建議，讓你在每一局都能打得更聰明。',
            'val-f4-t': '小遊戲與互動',
            'val-f4-d': '除了對戰，也有放鬆。多樣小遊戲，讓你的戰場生活更有趣。',
            'val-final-1': '這不只是工具。',
            'val-final-2': '這是 特戰隨便你。',
            'val-final-3': '「戰場，隨你定義。」'
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
            'mahjong-desc': 'The all-in-one assistant for Mahjong enthusiasts.',
            'weather-label': 'Weather',
            'weather-title': 'Professional Forecast',
            'weather-desc': 'Providing the most reliable and intuitive weather guide.',
            'edu-label': 'Education',
            'yanyan-title': 'Yanyan Ball',
            'yanyan-desc': 'A 7000-word vocabulary learning platform built for students.',
            'psy-label': 'Psychology',
            'mbti-title': 'MBTI Test',
            'mbti-desc': 'A truly precise and in-depth personality analysis website.',
            'esport-label': 'Esports',
            'val-title': 'UpToVal',
            'val-desc': 'Adding color to your VALORANT experience.',
            'footer-copy': '&copy; 2025 Up To You Studio. All Rights Reserved.',
            // About Page
            'about-us': 'About Us',
            'about-hero-subtitle': 'A student and creator who loves turning ideas into products. Focused on tools, games, and AI experience design.',
            'team-title': 'Core Team',
            'team-desc': 'Our main members. Our design focuses on user experience, performance, and detail.',
            'founder-role': 'Founder',
            'founder-desc': 'I founded this studio to bring everyone\'s creative ideas to life through our technology.',
            'team-member': 'Team Member',
            'values-title': 'Our Values',
            'values-v1-t': 'Design with Heart',
            'values-v1-d': 'Every interaction is thought out, pursuing smoothness and intuition.',
            'values-v2-t': 'Tech-Driven',
            'values-v2-d': 'Implemented in a maintainable, scalable way, emphasizing performance and stability.',
            'values-v3-t': 'Community & Sharing',
            'values-v3-d': 'Growing our works together with the community.',
            'about-join': 'Want to join us or have a project in mind?<br><a href="contact.html" style="color: white; text-decoration: underline;">Contact us now</a> and let\'s turn ideas into reality.',
            // Contact Page
            'contact-title': 'Contact Us',
            'contact-subtitle': 'Have a project or partnership in mind?<br>Get in touch anytime!',
            'email-label': 'Email',
            'email-desc': 'Our inbox is always open for you.',
            'msg-title': 'Leave an Message',
            'btn-send': 'Send Message',
            'contact-placeholder-name': 'Your Name',
            'contact-placeholder-email': 'Your Email',
            'contact-placeholder-msg': 'Your Message',
            // Coming Soon Page
            'future-title': 'Coming Soon',
            'future-subtitle': 'The next surprise we are building. Stay tuned.',
            'future-rpg-cat': 'RPG Project',
            'future-rpg-title': 'Epic Text RPG',
            'future-rpg-quote': '"The story begins with words."',
            'future-rpg-desc': 'We are about to launch an unprecedented epic text RPG. Not just reading, but an adventure you participate in.',
            'future-rpg-f1-t': 'Puzzles & Exploration:',
            'future-rpg-f1-d': 'Clues are hidden in the text. Every choice will change the course of the story.',
            'future-rpg-f2-t': 'Combat & Growth:',
            'future-rpg-f2-d': 'Face monsters, battle, level up, and write your own legend.',
            'future-rpg-f3-t': 'Immersive Experience:',
            'future-rpg-f3-d': 'A world built with words, yet more real than imagination.',
            'future-rpg-final-1': 'More than a story.',
            'future-rpg-final-2': 'This is your adventure.',
            'future-rpg-final-3': '"Your choice is the story."',
            // Yanyanball Page
            'yanyan-tagline': '"Learn English, return to the essence."',
            'yanyan-start': 'Start Learning',
            'yanyan-hero-main': 'English Learning for Students',
            'yanyan-hero-sub': 'Simple, Focused, Effective.',
            'yanyan-description': 'We believe learning shouldn\'t be distracted by complex interfaces. Yanyanball is born to let every student excel in the purest environment.',
            'yanyan-f1-t': '7000 Vocabulary',
            'yanyan-f1-d': 'Complete collection of 7000 words for the General Scholastic Ability Test. Trustworthy sources for peace of mind.',
            'yanyan-f2-t': 'Vocab Quiz',
            'yanyan-f2-d': 'Instant review of learning outcomes. Mastery through practice, not just rote memorization.',
            'yanyan-f3-t': 'Word Marking',
            'yanyan-f3-d': 'Mark key points and track weaknesses. Create your own personalized word list.',
            'yanyan-f4-t': 'Full Features',
            'yanyan-f4-d': 'From understanding to application. Transform words into your true ability.',
            'yanyan-f5-t': 'Completely Free',
            'yanyan-f5-d': 'No subscriptions, no paywalls. We are committed to breaking educational resource inequality.',
            'yanyan-quote': 'This is more than a vocab site.',
            'yanyan-quote-highlight': 'This is Yanyanball.',
            'yanyan-quote-sub': '"Because learning should have no barriers."',
            'yanyan-copy': '&copy; 2025 Up To You Studio & Yanyanball. All Rights Reserved.',
            // UpToTranslate Page
            'trans-tagline': '"Translation, never so smart."',
            'trans-btn': 'Try Now',
            'trans-hero-desc': 'We build more than just a translation tool;<br>it\'s smart software powered by Huson AI.',
            'trans-f1-t': 'Instant Translation',
            'trans-f1-d': 'Break language barriers with every sentence accurately delivered.',
            'trans-f2-t': 'Smart Learning',
            'trans-f2-d': 'Not just understanding; AI accompanies your learning during translation to improve your skills.',
            'trans-f3-t': 'Personalized Experience',
            'trans-f3-d': 'Huson AI understands your habits and needs, giving the most relevant suggestions.',
            'trans-f4-t': 'Intuitive Design',
            'trans-f4-d': 'Clean interface, smooth animations—every interaction is a pleasure.',
            'trans-quote-1': 'This is more than translation.',
            'trans-quote-2': 'This is software that understands you.',
            'trans-quote-3': '"Because language shouldn\'t be a barrier."',
            // Huson AI Page
            'ai-tagline': '"Born in Taiwan, for the World."',
            'ai-btn': 'Try Now',
            'ai-hero-desc': 'We believe the best tech should not only be powerful but also understand you.<br>Huson AI — Generative AI independently developed in Taiwan.',
            'ai-pro-cat': 'Precision Model',
            'ai-pro-title': '3.0 Pro',
            'ai-pro-desc': 'The ultimate tool for programming with precise reasoning. From algorithms to complex system design, Pro builds your professional future.',
            'ai-mini-cat': 'High Speed',
            'ai-mini-title': '3.0 Mini',
            'ai-mini-desc': 'Fast, even faster. The peak experience of text generation. Instant creativity and inspiration delivered with speed.',
            'ai-future-title': 'Future Outlook',
            'ai-future-desc': 'We continue to expand Huson AI\'s capabilities, adding innovative features for true collaboration.',
            'ai-future-f1-cat': 'Next-Gen Features',
            'ai-future-f1-title': 'Any Question — Reasoning Mode',
            'ai-future-f1-desc': 'For complex problems, Huson AI reasons like an expert, analyzing hypotheses and giving actionable suggestions.',
            'ai-future-f2-cat': 'Creative Imaging',
            'ai-future-f2-title': 'Image Generation',
            'ai-future-f2-desc': 'From text descriptions to visual works, generating high-resolution images.',
            'ai-future-test': 'To participate in testing, please <a href="contact.html" style="color: white; text-decoration: underline;">contact us</a>.',
            'ai-final-1': 'This is more than AI.',
            'ai-final-2': 'This is Huson AI.',
            'ai-final-3': '"Taiwan spirit, worldwide impact."',
            // Animora Card Page
            'animora-tagline': '"Divination, Redefined."',
            'animora-btn': 'Try Now',
            'animora-hero-desc': 'We’ve created an unprecedented deck. Not Tarot, but unique Animora Cards. Each card carries symbolism and revelation.',
            'animora-f1-t': 'Professional Divination',
            'animora-f1-d': 'Guided by spirit animals, explore the future and yourself.',
            'animora-f2-t': 'Smart Answers',
            'animora-f2-d': 'Combined with Huson AI for the most customized and soul-touching experience.',
            'animora-f3-t': 'Intuitive Interface',
            'animora-f3-d': 'Exquisite interactions and smooth details where mystery meets technology.',
            'animora-final-1': 'This is more than divination.',
            'animora-final-2': 'This is Animora Card.',
            'animora-final-3': '"The unknown becomes clear."',
            // 2048 Page
            'game2048-tagline': '"Classic Game, New Experience."',
            'game2048-hero-desc': '2048 is no longer just a solo challenge. We redefined this classic with global matchmaking.',
            'game2048-f1-t': 'Skill-Based Combat',
            'game2048-f1-d': 'No more endless tile sliding. Score, speed, and strategy matter in every move.',
            'game2048-f2-t': 'Global Ranking',
            'game2048-f2-d': 'Log in and challenge the world. Climb to the top of the leaderboard with your wisdom.',
            'game2048-f3-t': 'New Social Experience',
            'game2048-f3-d': 'Friends, rivals, battlefield. A competitive stage for all players.',
            'game2048-final-1': 'This is more than a game.',
            'game2048-final-2': 'This is 2048 Global Battle.',
            'game2048-final-3': '"Classic, yet different."',
            // Mahjong Toolbox Page
            'mahjong-tagline': '"Playing Mahjong requires skill and tools."',
            'mahjong-hero-desc': 'An all-in-one app for Mahjong enthusiasts. Mahcal — taking control of every round.',
            'mahjong-f1-t': 'Wait Calculation',
            'mahjong-f1-d': 'Input your hand and instantly see your winning tiles. Simulate different discards for precise analysis.',
            'mahjong-f2-t': 'Self-Test',
            'mahjong-f2-d': 'Challenge yourself in practice mode. Mastery through skill, not just luck.',
            'mahjong-f3-t': 'Mahjong Dice',
            'mahjong-f3-d': 'Forgot your dice? No problem. Built-in dice function for quick play anywhere.',
            'mahjong-f4-t': 'Fortune Feature',
            'mahjong-f4-d': 'Check your daily luck and summon the God of Wealth for a lucky game.',
            'mahjong-f5-t': 'Find Players',
            'mahjong-f5-d': 'Easily find teammates through our server. Open a table and play together.',
            'mahjong-final-1': 'More than an assistant.',
            'mahjong-final-2': 'This is Mahjong Toolbox.',
            'mahjong-final-3': '"Because the game deserves professionalism."',
            // MBTI Page
            'mbti-tagline': '"Understanding yourself is the most important skill."',
            'mbti-hero-desc': 'A truly precise MBTI analysis site. Not just classification, but deep understanding.',
            'mbti-f1-t': 'High-Precision Analysis',
            'mbti-f1-d': 'Stable and consistent MBTI results through rigorously designed test logic.',
            'mbti-f2-t': 'Full Disclosure',
            'mbti-f2-d': 'Clear breakdown of personality structure, strengths, and blind spots for every type.',
            'mbti-f3-t': 'Career Suggestions',
            'mbti-f3-d': 'Development directions based on personality traits to help you make clearer choices.',
            'mbti-f4-t': 'Celebrity Comparison',
            'mbti-f4-d': 'Explore famous figures with your type and see the possibilities in the world.',
            'mbti-f5-t': 'Relationship Guide',
            'mbti-f5-d': 'Insights into compatible types and potential conflicts for better relationships.',
            'mbti-final-1': 'More than a test.',
            'mbti-final-2': 'This is Precise MBTI.',
            'mbti-final-3': '"Understand yourself to go further."',
            // Weather Page
            'weather-tagline': '"Weather is more than just a forecast."',
            'weather-hero-desc': 'Professional weather software using CWA data for reliable and accurate information.',
            'weather-f1-t': '36-Hour Full Forecast',
            'weather-f1-d': 'Clearly track weather trends for the next day and a half. Stay ahead of rain or shine.',
            'weather-f2-t': 'Dynamic Visuals',
            'weather-f2-d': 'Exquisite visualization makes the forecast a flowing experience, not just numbers.',
            'weather-f3-t': 'Professional × Intuitive',
            'weather-f3-d': 'Simple operation, professional info. Go out with peace of mind every time.',
            'weather-final-1': 'More than weather software.',
            'weather-final-2': 'This is Weather Forecast.',
            'weather-final-3': '"Because weather deserves more clarity."',
            // UpToVal Page
            'val-tagline': '"Entertainment starts on the battlefield."',
            'val-hero-desc': 'An all-in-one assistant platform for VALORANT players. Not just a tool, but your partner.',
            'val-f1-t': 'Custom Match Fun',
            'val-f1-d': 'Creative matches. Limit weapons, change rules, or challenge friends with one-click setup.',
            'val-f2-t': 'VALORANT News & Pro Scenes',
            'val-f2-d': 'Real-time tracking of news and global tournament dynamics.',
            'val-f3-t': 'Pro Strategies',
            'val-f3-d': 'Agent tactics, map analysis, and weapon choices for smarter play in every round.',
            'val-f4-t': 'Mini Games & Interaction',
            'val-f4-d': 'Relax with mini games to make your tactical life more interesting.',
            'val-final-1': 'More than a tool.',
            'val-final-2': 'This is UpToVal.',
            'val-final-3': '"The battlefield, defined by you."'
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
        localStorage.setItem('lang', lang);
        
        // Handle regular text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Handle placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
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