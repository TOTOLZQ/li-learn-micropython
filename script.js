const i18n = {
    en: {
        'welcome.text': 'Welcome to my corner of the internet',
        'welcome.enter': 'Enter',
        'egg.collected': 'Eggs',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.timeline': 'Timeline',
        'nav.contact': 'Contact',
        'nav.signIn': 'Sign in',
        'nav.signUp': 'Sign up',
        'nav.admin': 'Admin',
        'auth.signin': 'Sign in',
        'auth.register': 'Register',
        'auth.admin': 'Admin',
        'auth.username': 'Username',
        'auth.email': 'Email',
        'auth.password': 'Password',
        'auth.confirm': 'Confirm password',
        'auth.adminPass': 'Admin password',
        'auth.submitSignin': 'Sign in',
        'auth.submitRegister': 'Create account',
        'auth.submitAdmin': 'Enter dashboard',
        'auth.hintRegister': 'New here?',
        'auth.hintSignin': 'Have an account?',
        'auth.goRegister': 'Create one',
        'auth.goSignin': 'Sign in',
        'auth.altOr': 'Or use admin access',
        'admin.title': 'Admin dashboard',
        'admin.online': 'Online now',
        'admin.visits': 'Total visits',
        'admin.users': 'Registered',
        'admin.eggs': 'Eggs found',
        'admin.userCol': 'User',
        'admin.emailCol': 'Email',
        'admin.regCol': 'Registered',
        'admin.lastCol': 'Last seen',
        'admin.statusCol': 'Status',
        'admin.actCol': 'Action',
        'admin.safe': 'Unlock delete actions',
        'admin.chpass': 'Change password',
        'admin.logout': 'Exit dashboard',
        'hero.status': 'Available for collaboration',
        'hero.greeting': "Hello, I'm",
        'hero.subtitle': 'Maker · MicroPython Developer',
        'hero.desc': 'Building fun projects with MicroPython on M5Stack Cardputer. Exploring buttons, screens, keyboards, and everything in between.',
        'hero.cta1': 'View Projects',
        'hero.cta2': 'Get in Touch',
        'about.title': 'About Me',
        'about.p1': "I'm a maker and developer passionate about embedded systems and MicroPython. I love turning small ideas into working hardware projects, from simple button interactions to animated screen displays.",
        'about.p2': 'My main playground is the M5Stack Cardputer 1.1 — a compact, hacker-friendly device with a keyboard, screen, and plenty of GPIO. I iterate on each feature in versions, documenting every step along the way.',
        'about.p3': 'I believe in open source and share everything under GPL-3.0. Whether you are a beginner or a fellow hardware enthusiast, feel free to explore, fork, and collaborate.',
        'about.stat1': 'Project Versions',
        'about.stat2': 'Modules',
        'about.stat3': 'Open Source',
        'about.stat4': 'Repositories',
        'projects.title': 'Projects',
        'projects.filterAll': 'All',
        'projects.filterEmbedded': 'Embedded',
        'projects.filterGame': 'Game',
        'projects.filterOther': 'Other',
        'projects.p1.desc': 'MicroPython learning project for Cardputer 1.1 — buttons, screens, keyboards, with version-tracked iterations.',
        'projects.p2.desc': 'Shake-to-roll dice with single/dual mode, tumbling animation, and sound feedback. GPL-3.0 licensed.',
        'projects.p3.desc': 'An answer book, coin flip, dice roller, daily fortune, and lucky number — all in one app for Cardputer 1.1.',
        'projects.p4.desc': 'A desktop companion robot project with interactive features.',
        'projects.p5.desc': 'A welcome repository — greeting everyone who follows and inviting collaboration.',
        'projects.p6.desc': 'Reference library collection for StackChan robot development.',
        'timeline.title': 'Version Timeline',
        'timeline.t1': '7-color rainbow cycle with precomputed 210-frame sequence and bitwise RGB optimization.',
        'timeline.t2': 'UI polish: blue header bar, large character display, real-time count on screen.',
        'timeline.t3': 'Rainbow color cycle with RGB fade transition animation between colors.',
        'timeline.t4': 'Keyboard input with real-time keypress counting and backspace correction.',
        'timeline.t5': 'Double-click to continue with bounce animation effect on screen.',
        'timeline.t6': 'First versions of all three modules — basic button, keyboard input, and rainbow display.',
        'contact.title': 'Get in Touch',
        'contact.intro': 'Always open to new ideas, collaborations, and friendly chats. Feel free to reach out!',
        'contact.wechat': 'WeChat',
        'contact.rednote': 'RedNote',
        'footer.backTop': 'Back to top \u2191'
    },
    cn: {
        'welcome.text': '欢迎来到我的互联网小角落',
        'welcome.enter': '进入',
        'egg.collected': '彩蛋',
        'nav.about': '关于',
        'nav.projects': '项目',
        'nav.timeline': '版本历程',
        'nav.contact': '联系',
        'nav.signIn': '登录',
        'nav.signUp': '注册',
        'nav.admin': '管理',
        'auth.signin': '登录',
        'auth.register': '注册',
        'auth.admin': '管理员',
        'auth.username': '用户名',
        'auth.email': '邮箱',
        'auth.password': '密码',
        'auth.confirm': '确认密码',
        'auth.adminPass': '管理员密码',
        'auth.submitSignin': '登录',
        'auth.submitRegister': '创建账户',
        'auth.submitAdmin': '进入后台',
        'auth.hintRegister': '还没有账户？',
        'auth.hintSignin': '已有账户？',
        'auth.goRegister': '去注册',
        'auth.goSignin': '去登录',
        'auth.altOr': '或者使用管理员登录',
        'admin.title': '管理员后台',
        'admin.online': '在线人数',
        'admin.visits': '总访问量',
        'admin.users': '注册用户',
        'admin.eggs': '彩蛋发现数',
        'admin.userCol': '用户',
        'admin.emailCol': '邮箱',
        'admin.regCol': '注册时间',
        'admin.lastCol': '最近活跃',
        'admin.statusCol': '状态',
        'admin.actCol': '操作',
        'admin.safe': '开启删除操作',
        'admin.chpass': '修改密码',
        'admin.logout': '退出后台',
        'hero.status': '欢迎合作',
        'hero.greeting': '你好，我是',
        'hero.subtitle': 'Maker · MicroPython 开发者',
        'hero.desc': '在 M5Stack Cardputer 上用 MicroPython 打造有趣的项目。探索按键、屏幕、键盘，以及一切可能。',
        'hero.cta1': '查看项目',
        'hero.cta2': '联系我',
        'about.title': '关于我',
        'about.p1': '我是一名嵌入式系统和 MicroPython 爱好者。我喜欢把小点子变成可运行的硬件项目，从简单的按键交互到动画屏幕显示。',
        'about.p2': '我的主要舞台是 M5Stack Cardputer 1.1 — 一台紧凑、黑客友好的设备，拥有键盘、屏幕和丰富的 GPIO。我按版本迭代每个功能，并记录每一步。',
        'about.p3': '我相信开源精神，所有项目均以 GPL-3.0 协议分享。无论你是初学者还是同好，欢迎探索、Fork 和协作。',
        'about.stat1': '项目版本',
        'about.stat2': '功能模块',
        'about.stat3': '开源协议',
        'about.stat4': '仓库数量',
        'projects.title': '项目',
        'projects.filterAll': '全部',
        'projects.filterEmbedded': '嵌入式',
        'projects.filterGame': '游戏',
        'projects.filterOther': '其他',
        'projects.p1.desc': 'Cardputer 1.1 的 MicroPython 学习项目 — 按键、屏幕、键盘，带有版本追踪迭代。',
        'projects.p2.desc': '摇一摇掷骰子，支持单/双骰模式、翻滚动画和音效反馈。GPL-3.0 开源。',
        'projects.p3.desc': '答案之书、抛硬币、投骰子、今日运势、幸运数字 — 全部集成在 Cardputer 1.1 上。',
        'projects.p4.desc': '带有交互功能的桌面陪伴机器人项目。',
        'projects.p5.desc': '一个欢迎仓库 — 向每一位关注者问好，邀请合作。',
        'projects.p6.desc': 'StackChan 机器人开发的参考资料库集合。',
        'timeline.title': '版本历程',
        'timeline.t1': '7 色彩虹循环，预计算 210 帧序列，位运算优化 RGB 拆分与合成。',
        'timeline.t2': 'UI 美化：蓝色标题栏、大字号字符显示、屏幕实时计数。',
        'timeline.t3': '彩虹色循环，颜色间通过 RGB 插值实现淡入淡出过渡动画。',
        'timeline.t4': '键盘输入，实时统计按键次数，支持退格修正。',
        'timeline.t5': '双击继续交互，带弹跳动画效果。',
        'timeline.t6': '三个模块的初版 — 基础按键、键盘输入、彩虹显示。',
        'contact.title': '联系我',
        'contact.intro': '始终欢迎新想法、合作和友好交流。随时联系！',
        'contact.wechat': '微信',
        'contact.rednote': '小红书',
        'footer.backTop': '返回顶部 \u2191'
    },
    jp: {
        'welcome.text': '私のインターネットの片隅へようこそ',
        'welcome.enter': '入る',
        'egg.collected': 'エッグ',
        'nav.about': '自己紹介',
        'nav.projects': 'プロジェクト',
        'nav.timeline': 'バージョン',
        'nav.contact': '連絡',
        'nav.signIn': 'ログイン',
        'nav.signUp': '新規登録',
        'nav.admin': '管理',
        'auth.signin': 'ログイン',
        'auth.register': '新規登録',
        'auth.admin': '管理者',
        'auth.username': 'ユーザー名',
        'auth.email': 'メールアドレス',
        'auth.password': 'パスワード',
        'auth.confirm': 'パスワード確認',
        'auth.adminPass': '管理者パスワード',
        'auth.submitSignin': 'ログイン',
        'auth.submitRegister': 'アカウント作成',
        'auth.submitAdmin': '管理画面へ',
        'auth.hintRegister': '初めてですか？',
        'auth.hintSignin': 'アカウントをお持ちですか？',
        'auth.goRegister': '新規登録',
        'auth.goSignin': 'ログイン',
        'auth.altOr': '管理者としてログイン',
        'admin.title': '管理ダッシュボード',
        'admin.online': 'オンライン',
        'admin.visits': '合計訪問',
        'admin.users': '登録ユーザー',
        'admin.eggs': '発見エッグ',
        'admin.userCol': 'ユーザー',
        'admin.emailCol': 'メール',
        'admin.regCol': '登録日',
        'admin.lastCol': '最終アクティブ',
        'admin.statusCol': 'ステータス',
        'admin.actCol': '操作',
        'admin.safe': '削除操作を有効化',
        'admin.chpass': 'パスワード変更',
        'admin.logout': '管理画面を終了',
        'hero.status': 'コラボ募集中',
        'hero.greeting': 'こんにちは、',
        'hero.subtitle': 'Maker · MicroPython開発者',
        'hero.desc': 'M5Stack CardputerでMicroPythonを使って楽しいプロジェクトを作成。ボタン、スクリーン、キーボードなど、あらゆる可能性を探検。',
        'hero.cta1': 'プロジェクトを見る',
        'hero.cta2': '連絡する',
        'about.title': '自己紹介',
        'about.p1': '組み込みシステムとMicroPythonに情熱を持つMaker兼開発者です。小さなアイデアを実動作するハードウェアプロジェクトに変えるのが好きです。',
        'about.p2': '主な作業場はM5Stack Cardputer 1.1 — キーボード、スクリーン、豊富なGPIOを備えたコンパクトでハッカー向けのデバイスです。',
        'about.p3': 'オープンソースを信じ、すべてをGPL-3.0で公開しています。初心者の方も経験者の方も、お気軽に探索・Fork・コラボしてください。',
        'about.stat1': 'プロジェクト版',
        'about.stat2': 'モジュール',
        'about.stat3': 'オープンソース',
        'about.stat4': 'リポジトリ',
        'projects.title': 'プロジェクト',
        'projects.filterAll': 'すべて',
        'projects.filterEmbedded': '組み込み',
        'projects.filterGame': 'ゲーム',
        'projects.filterOther': 'その他',
        'projects.p1.desc': 'Cardputer 1.1向けMicroPython学習プロジェクト — ボタン、スクリーン、キーボードのバージョン追跡あり。',
        'projects.p2.desc': '振って転がすダイス。シングル/デュアルモード、回転アニメーション、フィードバック音。GPL-3.0。',
        'projects.p3.desc': '答えの本、コイントス、ダイス、今日の運勢、ラッキーナンバー — すべてCardputer 1.1に。',
        'projects.p4.desc': 'インタラクティブ機能を備えたデスクトップコンパニオンロボットプロジェクト。',
        'projects.p5.desc': 'ウェルカムリポジトリ — フォロワー全員に挨拶し、コラボを招待。',
        'projects.p6.desc': 'StackChanロボット開発のための参照ライブラリコレクション。',
        'timeline.title': 'バージョン履歴',
        'timeline.t1': '7色レインボーサイクル、210フレームの事前計算、ビット演算によるRGB最適化。',
        'timeline.t2': 'UI美化：ブルーヘッダー、大文字フォント表示、リアルタイムカウント。',
        'timeline.t3': 'RGBフェード遷移アニメーション付きレインボーサイクル。',
        'timeline.t4': 'リアルタイムキーカウントとバックスペース補正付きキーボード入力。',
        'timeline.t5': 'バウンスアニメーション付きダブルクリック継続。',
        'timeline.t6': '3つのモジュールの初版 — 基本ボタン、キーボード入力、レインボー表示。',
        'contact.title': '連絡先',
        'contact.intro': '新しいアイデア、コラボ、フレンドリーなチャットを歓迎します。お気軽にどうぞ！',
        'contact.wechat': 'WeChat',
        'contact.rednote': 'RedNote',
        'footer.backTop': 'トップに戻る \u2191'
    }
};

let currentLang = 'en';

function applyI18n(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const dict = i18n[lang] || i18n.en;
        const text = dict[key];
        if (typeof text === 'string') {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });
    const langMap = { cn: 'zh-CN', jp: 'ja', en: 'en' };
    document.documentElement.lang = langMap[lang] || 'en';
}

const navbar = document.getElementById('navbar');
const langBtns = document.querySelectorAll('.lang-btn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.getAttribute('data-lang');
        applyI18n(currentLang);
    });
});

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
});

navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('mobile-open');
    });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.section-header, .about-text, .about-visual, .project-card, .timeline-item, .contact-card, .contact-intro, .project-filter').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

const welcomeScreen = document.getElementById('welcomeScreen');
const welcomeEnter = document.getElementById('welcomeEnter');
const welcomeRain = document.getElementById('welcomeRain');
const loaderFill = document.getElementById('loaderFill');
const loaderText = document.getElementById('loaderText');
const eggTracker = document.getElementById('eggTracker');
const eggCountEl = document.getElementById('eggCount');
const mouseTrail = document.getElementById('mouseTrail');

const foundEggs = new Set();
const TOTAL_EGGS = 6;
eggCountEl.nextElementSibling.textContent = '/6';

function markEgg(id) {
    if (foundEggs.has(id)) return;
    foundEggs.add(id);
    eggTracker.classList.add('visible');
    eggCountEl.textContent = foundEggs.size;
    eggCountEl.classList.add('bump');
    setTimeout(() => eggCountEl.classList.remove('bump'), 300);
    if (foundEggs.size === TOTAL_EGGS) {
        eggTracker.classList.add('egg-complete');
        launchConfetti(1.8);
        setTimeout(() => eggTracker.classList.remove('egg-complete'), 800);
    }
}

function runRain() {
    if (!welcomeRain) return;
    const ctx = welcomeRain.getContext('2d');
    const resize = () => {
        welcomeRain.width = welcomeScreen.offsetWidth;
        welcomeRain.height = welcomeScreen.offsetHeight;
    };
    resize();
    const fontSize = 14;
    let columns = Math.floor(welcomeRain.width / fontSize);
    let drops = new Array(columns).fill(0).map(() => Math.random() * welcomeRain.height);
    const chars = 'li01010101MicroPython<>{}[]/*+-=MicroPython';
    let running = true;
    window.addEventListener('resize', resize);

    function draw() {
        if (!running) return;
        const isDark = document.documentElement.classList.contains('dark');
        ctx.fillStyle = isDark ? 'rgba(15, 21, 48, 0.12)' : 'rgba(255, 255, 255, 0.14)';
        ctx.fillRect(0, 0, welcomeRain.width, welcomeRain.height);
        ctx.font = fontSize + 'px JetBrains Mono, monospace';
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            const x = i * fontSize;
            const y = drops[i];
            ctx.fillStyle = Math.random() > 0.97 ? '#22d3ee' : (isDark ? 'rgba(167, 139, 250, 0.85)' : 'rgba(124, 92, 252, 0.55)');
            if (Math.random() > 0.985) ctx.fillStyle = isDark ? '#ffffff' : '#1a1a2e';
            ctx.fillText(text, x, y);
            if (y > welcomeRain.height && Math.random() > 0.975) drops[i] = 0;
            drops[i] += fontSize;
        }
        if (welcomeScreen.classList.contains('hidden')) {
            running = false;
            return;
        }
        requestAnimationFrame(draw);
    }
    draw();
}

let progress = 0;
const enterBtn = welcomeEnter;
enterBtn.classList.add('disabled');
const progressTimer = setInterval(() => {
    progress += 1 + Math.random() * 3;
    if (progress >= 100) {
        progress = 100;
        clearInterval(progressTimer);
        enterBtn.classList.remove('disabled');
        enterBtn.classList.add('ready');
    }
    if (loaderFill) loaderFill.style.width = progress + '%';
    if (loaderText) loaderText.textContent = Math.floor(progress) + '%';
}, 30);

runRain();

welcomeEnter.addEventListener('click', () => {
    if (enterBtn.classList.contains('disabled')) return;
    welcomeScreen.classList.add('hidden');
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 800);
});

let lastTrailTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTrailTime < 30) return;
    lastTrailTime = now;
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.left = (e.clientX - 3) + 'px';
    dot.style.top = (e.clientY - 3) + 'px';
    const tx = (Math.random() - 0.5) * 30;
    const ty = (Math.random() - 0.5) * 30;
    dot.style.setProperty('--tx', tx + 'px');
    dot.style.setProperty('--ty', ty + 'px');
    mouseTrail.appendChild(dot);
    setTimeout(() => dot.remove(), 600);
});

function createRipple(e) {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

document.querySelectorAll('.btn, .btn-ghost, .welcome-enter, .filter-btn, .lang-btn, .back-top').forEach(el => {
    el.addEventListener('click', createRipple);
});

const particlesLayer = document.getElementById('particlesLayer');
const particleColors = ['#7c5cfc', '#a78bfa', '#22d3ee', '#4ade80', '#f59e0b', '#f472b6'];

document.addEventListener('click', (e) => {
    if (e.target.closest('a, button, input, .nav-links, .project-card, .contact-card')) return;
    const count = 12;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'click-particle';
        const size = 4 + Math.random() * 8;
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
        const distance = 40 + Math.random() * 60;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = (e.clientX - size / 2) + 'px';
        p.style.top = (e.clientY - size / 2) + 'px';
        p.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
        p.style.setProperty('--burst-end', `translate(${dx}px, ${dy}px)`);
        particlesLayer.appendChild(p);
        setTimeout(() => p.remove(), 900);
    }
});

const confettiCanvas = document.getElementById('confettiCanvas');
const cctx = confettiCanvas.getContext('2d');
let confettiPieces = [];
let confettiAnim = null;

function resizeConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}
resizeConfetti();
window.addEventListener('resize', resizeConfetti);

function launchConfetti(intensity = 1) {
    const colors = ['#7c5cfc', '#a78bfa', '#22d3ee', '#4ade80', '#f59e0b', '#f472b6', '#ef4444', '#fb923c', '#fde68a', '#a7f3d0'];
    const count = Math.floor(260 * intensity);
    const shapes = ['rect', 'circle', 'ribbon'];
    for (let i = 0; i < count; i++) {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const w = shape === 'ribbon' ? 4 : (6 + Math.random() * 8);
        const h = shape === 'ribbon' ? 18 + Math.random() * 14 : (4 + Math.random() * 8);
        const fromSide = Math.floor(Math.random() * 3);
        let sx, sy, vx, vy;
        if (fromSide === 0) {
            sx = -20; sy = confettiCanvas.height * (0.2 + Math.random() * 0.5);
            vx = 6 + Math.random() * 12; vy = -4 - Math.random() * 8;
        } else if (fromSide === 1) {
            sx = confettiCanvas.width + 20; sy = confettiCanvas.height * (0.2 + Math.random() * 0.5);
            vx = -6 - Math.random() * 12; vy = -4 - Math.random() * 8;
        } else {
            sx = confettiCanvas.width * (0.2 + Math.random() * 0.6); sy = -20;
            vx = (Math.random() - 0.5) * 10; vy = 2 + Math.random() * 4;
        }
        confettiPieces.push({
            x: sx, y: sy, w, h, shape,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx, vy,
            gravity: 0.18 + Math.random() * 0.08,
            rot: Math.random() * Math.PI * 2,
            vr: (Math.random() - 0.5) * 0.3,
            swing: 0.02 + Math.random() * 0.03,
            swingPhase: Math.random() * Math.PI * 2,
            life: 1
        });
    }
    if (!confettiAnim) {
        confettiAnim = requestAnimationFrame(tickConfetti);
    }
}

function tickConfetti() {
    cctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = 0;
    for (let i = confettiPieces.length - 1; i >= 0; i--) {
        const p = confettiPieces[i];
        p.vy += p.gravity;
        p.swingPhase += p.swing;
        p.vx += Math.sin(p.swingPhase) * 0.25;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= 0.003;
        if (p.y > confettiCanvas.height + 30 || p.life <= 0) {
            confettiPieces.splice(i, 1);
            continue;
        }
        alive++;
        cctx.save();
        cctx.globalAlpha = Math.min(1, p.life);
        cctx.translate(p.x, p.y);
        cctx.rotate(p.rot);
        cctx.fillStyle = p.color;
        if (p.shape === 'circle') {
            cctx.beginPath();
            cctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
            cctx.fill();
        } else if (p.shape === 'ribbon') {
            cctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            cctx.fillStyle = 'rgba(255,255,255,0.3)';
            cctx.fillRect(-p.w / 2, -p.h / 2, p.w / 3, p.h);
        } else {
            cctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        cctx.restore();
    }
    if (alive > 0) {
        confettiAnim = requestAnimationFrame(tickConfetti);
    } else {
        confettiAnim = null;
        cctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
}

const typeBuffer = [];
function triggerLiEgg() {
    markEgg('type-li');
    launchConfetti(0.6);
    typeBuffer.length = 0;
}

document.addEventListener('keydown', (e) => {
    if (e.key.length !== 1) return;
    typeBuffer.push(e.key.toLowerCase());
    if (typeBuffer.length > 6) typeBuffer.shift();
    const recent = typeBuffer.slice(-2).join('');
    if (recent === 'li') {
        triggerLiEgg();
    }
});

const heroName = document.querySelector('.hero .name');
if (heroName) {
    heroName.style.cursor = 'pointer';
    heroName.addEventListener('click', () => {
        triggerLiEgg();
        heroName.classList.remove('name-pulse');
        void heroName.offsetWidth;
        heroName.classList.add('name-pulse');
    });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.documentElement.classList.add('dark');

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.querySelectorAll('#themeToggle, #themeToggleWelcome').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
});


let logoClicks = 0;
let logoTimer = null;
const navLogo = document.querySelector('.nav-logo');
navLogo.addEventListener('click', (e) => {
    e.preventDefault();
    logoClicks++;
    navLogo.classList.remove('logo-wiggle');
    void navLogo.offsetWidth;
    navLogo.classList.add('logo-wiggle');
    clearTimeout(logoTimer);
    logoTimer = setTimeout(() => {
        if (logoClicks >= 5) {
            launchConfetti(2);
            markEgg('logo5');
            if (!document.querySelector('.surprise-overlay')) {
                const ov = document.createElement('div');
                ov.className = 'surprise-overlay';
                document.body.appendChild(ov);
                requestAnimationFrame(() => ov.classList.add('show'));
                setTimeout(() => {
                    ov.classList.remove('show');
                    setTimeout(() => ov.remove(), 500);
                }, 2000);
            }
        }
        logoClicks = 0;
    }, 1200);
});

if (window.DeviceMotionEvent) {
    let lastShake = 0;
    let shakeCount = 0;
    window.addEventListener('devicemotion', (e) => {
        const a = e.accelerationIncludingGravity;
        if (!a) return;
        const mag = Math.sqrt((a.x || 0) ** 2 + (a.y || 0) ** 2 + (a.z || 0) ** 2);
        if (mag > 22) {
            const now = Date.now();
            if (now - lastShake < 300) return;
            lastShake = now;
            shakeCount++;
            if (shakeCount >= 3) {
                markEgg('shake');
                launchConfetti(1.2);
                shakeCount = 0;
            }
        }
    });
}


const heroBadge = document.querySelector('.hero-badge');
if (heroBadge) {
    let badgeClicks = 0;
    let badgeTimer = null;
    heroBadge.style.cursor = 'pointer';
    heroBadge.addEventListener('click', () => {
        badgeClicks++;
        clearTimeout(badgeTimer);
        if (badgeClicks >= 2) {
            markEgg('badge2');
            launchConfetti(0.8);
            heroBadge.classList.remove('badge-pop');
            void heroBadge.offsetWidth;
            heroBadge.classList.add('badge-pop');
            badgeClicks = 0;
        } else {
            badgeTimer = setTimeout(() => { badgeClicks = 0; }, 600);
        }
    });
}

const thanksCloud = document.querySelector('.thanks-cloud');
if (thanksCloud) {
    let hoverCount = 0;
    thanksCloud.addEventListener('mouseenter', () => {
        hoverCount++;
        if (hoverCount >= 3) {
            markEgg('footer5');
            launchConfetti(0.7);
            thanksCloud.classList.remove('thanks-glow');
            void thanksCloud.offsetWidth;
            thanksCloud.classList.add('thanks-glow');
            hoverCount = 0;
        }
    });
}

document.querySelectorAll('.project-info h3').forEach(h3 => {
    let titleClicks = 0;
    let titleTimer = null;
    h3.style.cursor = 'pointer';
    h3.addEventListener('click', (e) => {
        e.stopPropagation();
        titleClicks++;
        clearTimeout(titleTimer);
        if (titleClicks >= 3) {
            markEgg('projectTitle3');
            launchConfetti(0.7);
            h3.classList.remove('title-bump');
            void h3.offsetWidth;
            h3.classList.add('title-bump');
            titleClicks = 0;
        } else {
            titleTimer = setTimeout(() => { titleClicks = 0; }, 1200);
        }
    });
});


const aboutCard = document.querySelector('.about-card');
if (aboutCard) {
    aboutCard.addEventListener('mousemove', (e) => {
        const rect = aboutCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (y - 0.5) * -10;
        const ry = (x - 0.5) * 10;
        aboutCard.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    aboutCard.addEventListener('mouseleave', () => {
        aboutCard.style.transform = '';
    });
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (y - 0.5) * -6;
        const ry = (x - 0.5) * 8;
        card.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

const heroDesc = document.querySelector('.hero-desc');
let typeTimer = null;

function typeHeroDesc() {
    const text = i18n[currentLang]['hero.desc'];
    if (!text || !heroDesc) return;
    heroDesc.textContent = '';
    heroDesc.classList.add('typing-cursor');
    let i = 0;
    clearInterval(typeTimer);
    typeTimer = setInterval(() => {
        if (i < text.length) {
            heroDesc.textContent += text[i++];
        } else {
            clearInterval(typeTimer);
            setTimeout(() => heroDesc.classList.remove('typing-cursor'), 1500);
        }
    }, 28);
}

const origApplyI18n = applyI18n;
applyI18n = function(lang) {
    origApplyI18n(lang);
    clearInterval(typeTimer);
    if (heroDesc) heroDesc.classList.remove('typing-cursor');
    setTimeout(typeHeroDesc, 120);
};

const navAuth = {
    signIn: { en: 'Sign in', cn: '登录', jp: 'ログイン' },
    signUp: { en: 'Sign up', cn: '注册', jp: '新規登録' },
    admin: { en: 'Admin', cn: '管理', jp: '管理' },
    account: { en: 'Account', cn: '账户', jp: 'アカウント' },
    profileView: { en: 'View profile', cn: '查看资料', jp: 'プロフィール' },
    signOut: { en: 'Sign out', cn: '退出', jp: 'ログアウト' },
    required: { en: 'Please fill in all fields.', cn: '请填写所有字段。', jp: 'すべての項目を入力してください。' },
    userExists: { en: 'Username already taken.', cn: '用户名已被使用。', jp: 'このユーザー名は既に使われています。' },
    emailInvalid: { en: 'Please enter a valid email.', cn: '请输入有效的邮箱。', jp: '有効なメールアドレスを入力してください。' },
    emailExists: { en: 'Email already registered.', cn: '邮箱已注册。', jp: 'このメールアドレスは既に登録されています。' },
    confirmMismatch: { en: 'Passwords do not match.', cn: '两次密码不一致。', jp: 'パスワードが一致しません。' },
    passShort: { en: 'Password must be at least 4 characters.', cn: '密码至少 4 个字符。', jp: 'パスワードは4文字以上必要です。' },
    userShort: { en: 'Username too short (2+).', cn: '用户名过短（≥ 2 个字符）。', jp: 'ユーザー名は2文字以上必要です。' },
    invalidCreds: { en: 'Incorrect username or password.', cn: '用户名或密码错误。', jp: 'ユーザー名またはパスワードが違います。' },
    registerOk: { en: 'Welcome aboard! Please sign in.', cn: '注册成功！请登录。', jp: '登録が完了しました。ログインしてください。' },
    signInOk: { en: 'Signed in.', cn: '已登录。', jp: 'ログインしました。' },
    adminWrong: { en: 'Admin password incorrect.', cn: '管理员密码错误。', jp: '管理者パスワードが違います。' },
    adminOk: { en: 'Welcome, admin.', cn: '欢迎，管理员。', jp: 'ようこそ、管理者。' },
    changePass: { en: 'Change admin password', cn: '修改管理员密码', jp: '管理者パスワード変更' },
    currentPass: { en: 'Current password', cn: '当前密码', jp: '現在のパスワード' },
    newPass: { en: 'New password (6+)', cn: '新密码（6 位以上）', jp: '新しいパスワード（6文字以上）' },
    confirmNew: { en: 'Confirm new', cn: '确认新密码', jp: '新パスワード確認' },
    confirm: { en: 'Confirm', cn: '确认', jp: '確定' },
    cancel: { en: 'Cancel', cn: '取消', jp: 'キャンセル' },
    changeOk: { en: 'Password updated.', cn: '密码已修改。', jp: 'パスワードを更新しました。' },
    changeFail: { en: 'Current password is wrong.', cn: '当前密码错误。', jp: '現在のパスワードが違います。' },
    deleteConfirm: { en: 'Delete this user?', cn: '确定删除该用户？', jp: 'このユーザーを削除しますか？' },
    deleted: { en: 'User removed.', cn: '用户已删除。', jp: 'ユーザーを削除しました。' },
    justNow: { en: 'Just now', cn: '刚刚', jp: 'たった今' },
    minAgo: { en: ' min ago', cn: ' 分钟前', jp: ' 分前' },
    hourAgo: { en: ' hour ago', cn: ' 小时前', jp: ' 時間前' },
    dayAgo: { en: ' day ago', cn: ' 天前', jp: ' 日前' },
    online: { en: 'Online', cn: '在线', jp: 'オンライン' },
    offline: { en: 'Offline', cn: '离线', jp: 'オフライン' },
    emptyUsers: { en: 'No registered users yet.', cn: '暂无注册用户。', jp: 'まだ登録ユーザーはいません。' },
    guest: { en: 'Guest', cn: '访客', jp: 'ゲスト' }
};

const STORE = {
    users: 'li.users.v1',
    sessions: 'li.sessions.v1',
    hearts: 'li.hearts.v1',
    visits: 'li.visits.v1',
    admin: 'li.admin.v1',
    me: 'li.me.v1',
    lang: 'li.lang.v1'
};

function Lget(k, fallback) {
    try {
        const raw = localStorage.getItem(k);
        return raw == null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
}
function Lset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function Sset(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function Sget(k, fallback) {
    try {
        const raw = sessionStorage.getItem(k);
        return raw == null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
}

const DEFAULT_ADMIN_PASS = 'admin123';
const HEARTBEAT_MS = 10000;
const ONLINE_TIMEOUT_MS = 25000;

if (!localStorage.getItem(STORE.admin)) {
    Lset(STORE.admin, DEFAULT_ADMIN_PASS);
}

const VISIT_KEY = 'li.visitonce.v1';
if (!sessionStorage.getItem(VISIT_KEY)) {
    Sset(VISIT_KEY, true);
    Lset(STORE.visits, (Lget(STORE.visits, 0) || 0) + 1);
}

function tstr(key) {
    const table = navAuth[key] || { en: key };
    return (table[currentLang] != null ? table[currentLang] : table.en) || key;
}

const HEARTBEAT_ID = (Sget('li.hbid.v1', null) || (crypto && crypto.randomUUID ? crypto.randomUUID() : ('h_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36))));
Sset('li.hbid.v1', HEARTBEAT_ID);

function heartbeatContext() {
    const me = Lget(STORE.me, null);
    return {
        id: HEARTBEAT_ID,
        ts: Date.now(),
        username: me ? me.username : null,
        kind: me ? (me.role === 'admin' ? 'admin' : 'user') : 'guest'
    };
}

function sendHeartbeat() {
    const all = Lget(STORE.hearts, {});
    all[HEARTBEAT_ID] = heartbeatContext();
    Lset(STORE.hearts, all);
}

function pruneAndGetHearts() {
    const all = Lget(STORE.hearts, {});
    const now = Date.now();
    const out = {};
    let changed = false;
    for (const [k, v] of Object.entries(all)) {
        if (v && typeof v.ts === 'number' && (now - v.ts) <= ONLINE_TIMEOUT_MS) {
            out[k] = v;
        } else {
            changed = true;
        }
    }
    if (changed) Lset(STORE.hearts, out);
    return out;
}

function countOnline(hearts) {
    const set = new Set();
    for (const v of Object.values(hearts || {})) {
        if (v && v.username) set.add('u:' + v.username);
        else if (v) set.add('g:' + v.id);
    }
    return set.size;
}

sendHeartbeat();
setInterval(sendHeartbeat, HEARTBEAT_MS);
window.addEventListener('beforeunload', () => {
    const all = Lget(STORE.hearts, {});
    delete all[HEARTBEAT_ID];
    Lset(STORE.hearts, all);
    const me = Lget(STORE.me, null);
    if (me && me.username) {
        const users = Lget(STORE.users, []);
        const idx = users.findIndex(u => u.username === me.username);
        if (idx >= 0) {
            users[idx].lastSeen = Date.now();
            Lset(STORE.users, users);
        }
    }
});
document.addEventListener('visibilitychange', sendHeartbeat);

const heartCheck = setInterval(() => {
    pruneAndGetHearts();
    if (adminOpen) renderAdminDashboard();
}, 5000);

function hashPass(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return 'fh1_' + (h >>> 0).toString(16).padStart(8, '0');
}

function findUser(username) {
    const users = Lget(STORE.users, []);
    return users.find(u => u.username.toLowerCase() === (username || '').toLowerCase());
}

function writeSession(username, role) {
    const token = 'tk_' + Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
    const sessions = Lget(STORE.sessions, {});
    sessions[token] = { username, role, iat: Date.now() };
    Lset(STORE.sessions, sessions);
    Lset(STORE.me, { username, role, token });
    const users = Lget(STORE.users, []);
    const idx = users.findIndex(u => u.username === username);
    if (idx >= 0) {
        users[idx].lastSeen = Date.now();
        Lset(STORE.users, users);
    }
    return token;
}

function clearSession() {
    const me = Lget(STORE.me, null);
    if (me && me.token) {
        const sessions = Lget(STORE.sessions, {});
        delete sessions[me.token];
        Lset(STORE.sessions, sessions);
    }
    localStorage.removeItem(STORE.me);
}

function restoreSession() {
    const me = Lget(STORE.me, null);
    if (!me || !me.token) return null;
    const sessions = Lget(STORE.sessions, {});
    const s = sessions[me.token];
    if (!s || s.username !== me.username || s.role !== me.role) {
        clearSession();
        return null;
    }
    const users = Lget(STORE.users, []);
    const idx = users.findIndex(u => u.username === me.username);
    if (idx >= 0) {
        users[idx].lastSeen = Date.now();
        Lset(STORE.users, users);
    }
    return me;
}

const navAuthBtn = document.getElementById('navAuthBtn');
const authModal = document.getElementById('authModal');
const adminModal = document.getElementById('adminModal');
const adminSafeDelete = document.getElementById('adminSafeDelete');
const adminUsersBody = document.getElementById('adminUsersBody');
const adminOnlineEl = document.getElementById('adminOnline');
const adminVisitsEl = document.getElementById('adminVisits');
const adminUsersEl = document.getElementById('adminUsers');
const adminEggsEl = document.getElementById('adminEggs');
let adminOpen = false;
let currentAdminToken = null;

function renderNavAuth() {
    const me = restoreSession();
    if (!navAuthBtn) return;
    if (!me) {
        navAuthBtn.className = 'nav-auth-btn nav-auth-guest';
        navAuthBtn.textContent = tstr('signIn');
        navAuthBtn.setAttribute('data-i18n', 'nav.signIn');
        return;
    }
    navAuthBtn.className = 'nav-auth-btn nav-auth-user';
    navAuthBtn.setAttribute('data-i18n', '');
    const initial = (me.username || '?').trim().charAt(0).toUpperCase();
    navAuthBtn.innerHTML = '<span class="nav-auth-avatar">' + initial + '</span><span class="nav-auth-text"></span>';
    navAuthBtn.querySelector('.nav-auth-text').textContent = me.username;
}

function openModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.add('open');
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const first = m.querySelector('input, button');
    setTimeout(() => first && first.focus(), 150);
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (!m || !m.classList.contains('open')) return;
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
    const closeId = e.target.getAttribute && e.target.getAttribute('data-close-modal');
    if (closeId) closeModal(closeId);
});
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (authModal && authModal.classList.contains('open')) closeModal('authModal');
    else if (adminModal && adminModal.classList.contains('open')) closeModal('adminModal');
});

function setAuthError(formKind, msg) {
    const map = { signin: 'authSigninError', register: 'authRegisterError', admin: 'authAdminError' };
    const el = document.getElementById(map[formKind]);
    if (!el) return;
    if (!msg) {
        el.classList.remove('show');
        el.textContent = '';
        return;
    }
    el.textContent = msg;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
}

document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const which = tab.getAttribute('data-auth-tab');
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.auth-panel').forEach(p => {
            p.classList.toggle('auth-panel-active', p.getAttribute('data-auth-panel') === which);
        });
        ['signin', 'register', 'admin'].forEach(k => setAuthError(k, ''));
    });
});

function switchAuthTabTo(which) {
    const tab = document.querySelector('.auth-tab[data-auth-tab="' + which + '"]');
    if (tab) tab.click();
}

if (navAuthBtn) {
    navAuthBtn.addEventListener('click', () => {
        const me = restoreSession();
        if (!me) {
            switchAuthTabTo('signin');
            openModal('authModal');
            return;
        }
        if (me.role === 'admin') {
            openAdminDashboard();
        } else {
            switchAuthTabTo('signin');
            openModal('authModal');
        }
    });
    navAuthBtn.addEventListener('contextmenu', (e) => {
        const me = restoreSession();
        if (me) {
            e.preventDefault();
            clearSession();
            renderNavAuth();
        }
    });
}

document.querySelectorAll('[data-auth-form="register"]').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const username = (data.username || '').trim();
        const email = (data.email || '').trim();
        const password = data.password || '';
        const confirm = data.confirm || '';
        setAuthError('register', '');
        if (!username || !email || !password || !confirm) return setAuthError('register', tstr('required'));
        if (username.length < 2) return setAuthError('register', tstr('userShort'));
        if (password.length < 4) return setAuthError('register', tstr('passShort'));
        if (password !== confirm) return setAuthError('register', tstr('confirmMismatch'));
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setAuthError('register', tstr('emailInvalid'));
        if (findUser(username)) return setAuthError('register', tstr('userExists'));
        const users = Lget(STORE.users, []);
        if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) return setAuthError('register', tstr('emailExists'));
        users.push({
            username,
            email,
            passHash: hashPass(password),
            role: 'user',
            createdAt: Date.now(),
            lastSeen: Date.now()
        });
        Lset(STORE.users, users);
        setAuthError('register', '');
        switchAuthTabTo('signin');
        const f = document.querySelector('[data-auth-form="signin"]');
        if (f) {
            f.username && (f.username.value = username);
            f.password && (f.password.value = '');
        }
        showToast(tstr('registerOk'), 'ok');
    });
});

document.querySelectorAll('[data-auth-form="signin"]').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const username = (data.username || '').trim();
        const password = data.password || '';
        setAuthError('signin', '');
        if (!username || !password) return setAuthError('signin', tstr('required'));
        const user = findUser(username);
        if (!user || user.passHash !== hashPass(password)) return setAuthError('signin', tstr('invalidCreds'));
        writeSession(user.username, user.role);
        renderNavAuth();
        showToast(tstr('signInOk') + ' · ' + user.username, 'ok');
        closeModal('authModal');
        if (user.role === 'admin') setTimeout(openAdminDashboard, 200);
    });
});

document.querySelectorAll('[data-auth-form="admin"]').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const pw = data.adminPass || '';
        setAuthError('admin', '');
        if (!pw) return setAuthError('admin', tstr('required'));
        const stored = Lget(STORE.admin, DEFAULT_ADMIN_PASS);
        const match = pw === stored || hashPass(pw) === stored;
        if (!match) return setAuthError('admin', tstr('adminWrong'));
        writeSession('admin', 'admin');
        renderNavAuth();
        closeModal('authModal');
        showToast(tstr('adminOk'), 'ok');
        setTimeout(openAdminDashboard, 150);
    });
});

function openAdminDashboard() {
    const me = restoreSession();
    if (!me || me.role !== 'admin') {
        switchAuthTabTo('admin');
        openModal('authModal');
        return;
    }
    openModal('adminModal');
    adminOpen = true;
    renderAdminDashboard();
}

function humanTime(ts, now) {
    if (!ts) return '—';
    now = now || Date.now();
    const diff = Math.max(0, now - ts);
    const sec = Math.floor(diff / 1000);
    if (sec < 60) return tstr('justNow');
    const m = Math.floor(sec / 60);
    if (m < 60) return m + tstr('minAgo');
    const h = Math.floor(m / 60);
    if (h < 48) return h + tstr('hourAgo');
    return Math.floor(h / 24) + tstr('dayAgo');
}

function isOnlineNow(username, hearts) {
    hearts = hearts || pruneAndGetHearts();
    for (const v of Object.values(hearts)) {
        if (v && v.username === username) return true;
    }
    return false;
}

function renderAdminDashboard() {
    if (!adminOpen) return;
    const hearts = pruneAndGetHearts();
    const online = countOnline(hearts);
    const visits = Lget(STORE.visits, 0) || 0;
    const users = Lget(STORE.users, []);
    const eggs = (typeof foundEggs !== 'undefined' && foundEggs && foundEggs.size) || 0;
    animateNumber(adminOnlineEl, online);
    animateNumber(adminVisitsEl, visits);
    animateNumber(adminUsersEl, users.length);
    animateNumber(adminEggsEl, eggs);
    const tbody = adminUsersBody;
    if (!tbody) return;
    if (!users.length) {
        tbody.innerHTML = '<tr><td colspan="6" class="admin-empty">' + tstr('emptyUsers') + '</td></tr>';
        return;
    }
    const now = Date.now();
    const armed = adminSafeDelete ? adminSafeDelete.checked : false;
    const rows = users.slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).map(u => {
        const on = isOnlineNow(u.username, hearts);
        return '<tr data-user="' + escapeHtml(u.username) + '">' +
            '<td><strong>' + escapeHtml(u.username) + '</strong>' + (u.role === 'admin' ? ' <span style="font-family:JetBrains Mono,monospace;font-size:0.7em;padding:2px 6px;border-radius:999px;background:linear-gradient(135deg,var(--accent),var(--cyan));color:#fff;vertical-align:middle;">ADMIN</span>' : '') + '</td>' +
            '<td>' + escapeHtml(u.email) + '</td>' +
            '<td style="white-space:nowrap;">' + new Date(u.createdAt || Date.now()).toLocaleDateString() + '</td>' +
            '<td style="white-space:nowrap;">' + humanTime(u.lastSeen, now) + '</td>' +
            '<td><span class="admin-online-dot' + (on ? ' online' : '') + '">' + (on ? tstr('online') : tstr('offline')) + '</span></td>' +
            '<td style="text-align:right;"><button type="button" class="admin-row-delete' + (armed ? ' armed' : '') + '" data-act="deluser" data-user="' + escapeHtml(u.username) + '">Delete</button></td>' +
            '</tr>';
    }).join('');
    tbody.innerHTML = rows;
}

function animateNumber(el, to, duration) {
    if (!el) return;
    to = Number(to) || 0;
    duration = duration || 600;
    const from = Number(el.dataset.value || '0') || 0;
    el.dataset.value = String(to);
    const t0 = performance.now();
    cancelAnimationFrame(el._raf);
    const step = (now) => {
        const k = Math.min(1, (now - t0) / duration);
        const e = 1 - Math.pow(1 - k, 3);
        const v = Math.round(from + (to - from) * e);
        el.textContent = v.toLocaleString();
        if (k < 1) el._raf = requestAnimationFrame(step);
    };
    el._raf = requestAnimationFrame(step);
}

function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const toast = (() => {
    let wrap = null;
    function ensure() {
        if (wrap) return wrap;
        wrap = document.createElement('div');
        wrap.className = 'toast-wrap';
        wrap.setAttribute('aria-live', 'polite');
        document.body.appendChild(wrap);
        const s = document.createElement('style');
        s.textContent = '.toast-wrap{position:fixed;left:50%;transform:translateX(-50%);bottom:84px;display:flex;flex-direction:column;gap:8px;z-index:10001;pointer-events:none;}' +
            '.toast{background:linear-gradient(135deg,var(--accent),var(--cyan));color:#fff;padding:10px 16px;border-radius:100px;font-family:Inter,sans-serif;font-size:0.84rem;font-weight:600;box-shadow:0 10px 28px var(--accent-glow-strong),0 4px 12px rgba(0,0,0,0.12);animation:toast-in 0.3s ease,toast-out 0.4s ease 2.3s forwards;opacity:0}' +
            '.toast.toast-warn{background:linear-gradient(135deg,#f59e0b,#f472b6);}' +
            '.toast.toast-err{background:linear-gradient(135deg,#ef4444,#f97316);}' +
            '@keyframes toast-in{from{opacity:0;transform:translateY(14px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}' +
            '@keyframes toast-out{to{opacity:0;transform:translateY(-10px) scale(0.98)}}';
        document.head.appendChild(s);
        return wrap;
    }
    return function showToast(message, kind) {
        const el = document.createElement('div');
        el.className = 'toast' + (kind === 'warn' ? ' toast-warn' : kind === 'err' ? ' toast-err' : '');
        el.textContent = message;
        ensure().appendChild(el);
        setTimeout(() => el.remove(), 2800);
    };
})();
const showToast = toast;

if (adminSafeDelete) {
    adminSafeDelete.addEventListener('change', renderAdminDashboard);
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('[data-act="deluser"]');
    if (!btn) return;
    const username = btn.getAttribute('data-user');
    if (!adminSafeDelete || !adminSafeDelete.checked) return;
    if (!confirm(tstr('deleteConfirm') + '\n' + username)) return;
    const users = Lget(STORE.users, []).filter(u => u.username !== username);
    Lset(STORE.users, users);
    renderAdminDashboard();
    showToast(tstr('deleted'), 'warn');
});

const adminLogout = document.getElementById('adminLogout');
if (adminLogout) adminLogout.addEventListener('click', () => {
    clearSession();
    renderNavAuth();
    closeModal('adminModal');
    adminOpen = false;
});

const adminChpass = document.getElementById('adminChpass');
if (adminChpass) adminChpass.addEventListener('click', () => {
    openChpassPrompt();
});

function openChpassPrompt() {
    const me = restoreSession();
    if (!me || me.role !== 'admin') return;
    const cur = prompt(tstr('currentPass'));
    if (cur == null) return;
    const stored = Lget(STORE.admin, DEFAULT_ADMIN_PASS);
    if (cur !== stored) {
        showToast(tstr('changeFail'), 'err');
        return;
    }
    const nw = prompt(tstr('newPass'));
    if (nw == null) return;
    if (nw.length < 6) {
        showToast(tstr('passShort'), 'warn');
        return;
    }
    const c2 = prompt(tstr('confirmNew'));
    if (c2 == null) return;
    if (nw !== c2) {
        showToast(tstr('confirmMismatch'), 'err');
        return;
    }
    Lset(STORE.admin, nw);
    showToast(tstr('changeOk'), 'ok');
}

window.addEventListener('storage', (e) => {
    if (e.key === STORE.hearts || e.key === STORE.users || e.key === STORE.visits) {
        if (adminOpen) renderAdminDashboard();
    }
});

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            typeHeroDesc();
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.5 });
if (heroDesc) heroObserver.observe(heroDesc);

renderNavAuth();
applyI18n(currentLang);
