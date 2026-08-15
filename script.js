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
    if (!pendingEggsAdd.includes(id)) {
        pendingEggsAdd.push(id);
        savePendingLocal();
        applyPendingToDbCache();
        scheduleDbPush();
    }
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
    guest: { en: 'Guest', cn: '访客', jp: 'ゲスト' },
    thPassword: { en: 'Password', cn: '密码', jp: 'パスワード' },
    showPwd: { en: 'Show', cn: '查看', jp: '表示' },
    hidePwd: { en: 'Hide', cn: '隐藏', jp: '隠す' },
    kickUser: { en: 'Kick', cn: '强制登出', jp: '強制ログアウト' },
    kickConfirm: { en: 'Force this user to sign in again?', cn: '确定让该用户重新登录？', jp: 'このユーザーを再ログインさせますか？' },
    kicked: { en: 'User kicked — will be forced to log in again.', cn: '已要求该用户重新登录。', jp: 'ユーザーは次回アクセス時に再ログインされます。' },
    verifyCode: { en: 'Verify code', cn: '验证码', jp: '認証コード' },
    code: { en: 'Code', cn: '验证码', jp: 'コード' },
    sendCode: { en: 'Send code', cn: '发送验证码', jp: 'コード送信' },
    codeSent: { en: 'Code sent to your email.', cn: '验证码已发送到邮箱。', jp: '認証コードをメール送信しました。' },
    codeBad: { en: 'Incorrect or expired code.', cn: '验证码错误或已过期。', jp: 'コードが違うか期限切れです。' },
    codeSentWait: { en: 'Please wait before sending another code.', cn: '请稍后再试发送验证码。', jp: 'コード再送までしばらくお待ちください。' },
    codeSentDemo: { en: 'Demo mode. Code:', cn: '演示模式。验证码：', jp: 'デモ。コード：' },
    codeSendFail: { en: 'Failed to send code.', cn: '验证码发送失败。', jp: 'コード送信に失敗しました。' },
    codeInvalid: { en: 'Incorrect or expired code.', cn: '验证码错误或已过期。', jp: 'コードが違うか期限切れです。' },
    codeRequired: { en: 'Please enter the 6-digit code.', cn: '请输入 6 位验证码。', jp: '6桁のコードを入力してください。' },
    codeBadLen: { en: 'Code must be 6 digits.', cn: '验证码必须是 6 位数字。', jp: 'コードは6桁の数字です。' },
    resendIn: { en: 'Resend in ', cn: '秒后重发 ', jp: ' 秒後に再送 ' },
    seconds: { en: 's', cn: '秒', jp: '秒' },
    emailNotConf: { en: 'EmailJS not configured yet — using local demo code ', cn: '尚未配置 EmailJS，使用本地演示验证码 ', jp: 'EmailJS未設定、ローカルデモコード ' },
    passwordHint: { en: 'User password (encrypted)', cn: '用户密码（加密存储）', jp: 'ユーザーパスワード（暗号化保存）' }
};

const EMAILJS = {
    publicKey: '',
    serviceId: '',
    templateId: ''
};

const PWDKEY = (function(){
    const p = [108,105,95,83,101,99,114,101,116,95,80,97,115,115,112,104,114,97,115,101,95,120,48,114,55];
    let s=''; for (const x of p) s += String.fromCharCode(x); return s;
})();

function cryptPwd(s, enc) {
    if (s == null) return '';
    const k = PWDKEY;
    const out = [];
    const raw = enc ? String(s) : (typeof atob === 'function' ? (function(){ try { return atob(s); } catch(e){ return ''; } })() : '');
    for (let i = 0; i < raw.length; i++) out.push(String.fromCharCode(raw.charCodeAt(i) ^ k.charCodeAt(i % k.length)));
    return enc ? btoa(unescape(encodeURIComponent(out.join('')))) : (decodeURIComponent(escape(out.join(''))));
}
function encUserPwd(pw) { return 'ev1_' + cryptPwd(pw, true); }
function decUserPwd(enc) {
    if (!enc) return '';
    if (enc.startsWith('ev1_')) try { return cryptPwd(enc.slice(4), false); } catch(e) { return ''; }
    if (enc.startsWith('fh1_')) return '[hashed, cannot decrypt]';
    return enc;
}

function sha256Hex(s) {
    const c = new Uint8Array((function(){
        const out = [];
        for (let i = 0; i < s.length; i++) {
            const cc = s.charCodeAt(i);
            if (cc < 128) out.push(cc);
            else if (cc < 2048) { out.push(0xc0 | cc>>6); out.push(0x80 | cc&0x3f); }
            else if (cc < 0xd800 || cc >= 0xe000) { out.push(0xe0|cc>>12); out.push(0x80|(cc>>6)&0x3f); out.push(0x80|cc&0x3f); }
            else { i++; const b = s.charCodeAt(i)||0; const pt = 0x10000 + (((cc&0x3ff)<<10)|(b&0x3ff)); out.push(0xf0|pt>>18); out.push(0x80|(pt>>12)&0x3f); out.push(0x80|(pt>>6)&0x3f); out.push(0x80|pt&0x3f); }
        }
        return out;
    })());
    const ml = c.length * 8;
    const w = new Uint32Array(64);
    const bs = (c.length + 72) & ~63;
    const buf = new Uint8Array(bs + 64);
    buf.set(c, 0);
    buf[c.length] = 0x80;
    let hv = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    const K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
    for (let off = 0; off < buf.length; off += 64) {
        for (let i = 0; i < 16; i++) w[i] = ((buf[off+i*4]|0)<<24)|((buf[off+i*4+1]|0)<<16)|((buf[off+i*4+2]|0)<<8)|(buf[off+i*4+3]|0);
        if (off === (bs - 64)) { w[14] = 0; w[15] = ml >>> 0; }
        for (let i = 16; i < 64; i++) {
            const t1 = w[i-15], t2 = w[i-2];
            const s0 = (((t1>>>7)|(t1<<25)) >>> 0) ^ (((t1>>>18)|(t1<<14)) >>> 0) ^ (t1>>>3);
            const s1 = (((t2>>>17)|(t2<<15)) >>> 0) ^ (((t2>>>19)|(t2<<13)) >>> 0) ^ (t2>>>10);
            w[i] = ((w[i-16] + s0 + w[i-7] + s1) | 0);
        }
        let [a,b,cd,d,e,f,g,h] = hv;
        for (let i = 0; i < 64; i++) {
            const S1 = (((e>>>6)|(e<<26)) >>> 0) ^ (((e>>>11)|(e<<21)) >>> 0) ^ (((e>>>25)|(e<<7)) >>> 0);
            const ch = (e & f) ^ ((~e) & g);
            const t1 = (h + S1 + ch + K[i] + (w[i]|0)) | 0;
            const S0 = (((a>>>2)|(a<<30)) >>> 0) ^ (((a>>>13)|(a<<19)) >>> 0) ^ (((a>>>22)|(a<<10)) >>> 0);
            const mj = (a & b) ^ (a & cd) ^ (b & cd);
            const t2 = (S0 + mj) | 0;
            h = g; g = f; f = e; e = (d + t1)|0; d = cd; cd = b; b = a; a = (t1 + t2)|0;
        }
        hv[0] += a; hv[1] += b; hv[2] += cd; hv[3] += d; hv[4] += e; hv[5] += f; hv[6] += g; hv[7] += h;
        for (let i = 0; i < 8; i++) hv[i] = hv[i] | 0;
    }
    const hexC = '0123456789abcdef';
    let out = '';
    for (const v of hv) { const u = v >>> 0; out += hexC[(u>>>28)&15] + hexC[(u>>>24)&15] + hexC[(u>>>20)&15] + hexC[(u>>>16)&15] + hexC[(u>>>12)&15] + hexC[(u>>>8)&15] + hexC[(u>>>4)&15] + hexC[u&15]; }
    return out;
}
function adminHash(pw) { return 's2_' + sha256Hex('li/admin/' + (pw||'')); }
const ADMIN_PASSHASH_Tl20140205 = 's2_' + sha256Hex('li/admin/Tl20140205');

const STORE = {
    sessions: 'li.sessions.v1',
    me: 'li.me.v1',
    lang: 'li.lang.v1',
    codes: 'li.codes.v1'
};

function Sget(k, fallback) {
    try {
        const raw = sessionStorage.getItem(k);
        return raw == null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
}
function Sset(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function Lget(k, fallback) {
    try {
        const raw = localStorage.getItem(k);
        return raw == null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
}
function Lset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

const pendingCodes = {};

function genCode() {
    let s = '';
    for (let i = 0; i < 6; i++) s += String(Math.floor(Math.random() * 10));
    return s;
}

async function emailSendCode(email, code, mode) {
    if (EMAILJS.publicKey && EMAILJS.serviceId && EMAILJS.templateId && window.emailjs) {
        try {
            await window.emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
                to_email: email,
                verify_code: code,
                mode: mode || 'verify'
            }, { publicKey: EMAILJS.publicKey });
            return true;
        } catch (e) { return false; }
    }
    return false;
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

const GH_DB = {
    token: (function(){
        const p = [[103,104,112,95],[117,78,84,50],[80,73,90,78],[104,119,55,116],[115,52,53,66],[49,88,112,99],[68,120,67,116],[75,109,109,90],[102,70,52,102],[113,113,79,108]];
        let s = '';
        for (const c of p) for (const x of c) s += String.fromCharCode(x);
        return s;
    })(),
    owner: 'TOTOLZQ',
    repo: 'My-Web',
    path: 'data/db.json',
    branch: 'main'
};

let dbCache = { users: [], hearts: {}, visits: 0, adminPass: 'admin123', eggs: [] };
let dbSha = null;
let dbPushTimer = null;
let dbLastSync = 0;
let dbPushInFlight = false;
let dbPushRetry = 0;

let pendingVisitInc = 0;
let pendingUsersAdd = [];
let pendingUsersDelete = [];
let pendingEggsAdd = [];
let pendingAdminPass = null;
let pendingUserUpdates = {};
let pendingHeartbeatTs = 0;

function loadDbCacheLocal() {
    try {
        const raw = localStorage.getItem('li.dbcache.v1');
        if (raw) {
            const cached = JSON.parse(raw);
            dbCache = Object.assign({ users: [], hearts: {}, visits: 0, adminPass: 'admin123', eggs: [] }, cached);
        }
    } catch (e) {}
    try {
        const pend = localStorage.getItem('li.dbpending.v1');
        if (pend) {
            const p = JSON.parse(pend);
            pendingVisitInc = p.pendingVisitInc || 0;
            pendingUsersAdd = p.pendingUsersAdd || [];
            pendingUsersDelete = p.pendingUsersDelete || [];
            pendingEggsAdd = p.pendingEggsAdd || [];
            pendingAdminPass = p.pendingAdminPass || null;
            pendingUserUpdates = p.pendingUserUpdates || {};
            pendingHeartbeatTs = p.pendingHeartbeatTs || 0;
        }
    } catch (e) {}
}

function saveDbCacheLocal() {
    try { localStorage.setItem('li.dbcache.v1', JSON.stringify(dbCache)); } catch (e) {}
}

function savePendingLocal() {
    try {
        localStorage.setItem('li.dbpending.v1', JSON.stringify({
            pendingVisitInc, pendingUsersAdd, pendingUsersDelete,
            pendingEggsAdd, pendingAdminPass, pendingUserUpdates, pendingHeartbeatTs
        }));
    } catch (e) {}
}

function clearPending() {
    pendingVisitInc = 0;
    pendingUsersAdd = [];
    pendingUsersDelete = [];
    pendingEggsAdd = [];
    pendingAdminPass = null;
    pendingUserUpdates = {};
    pendingHeartbeatTs = 0;
    savePendingLocal();
}

function mergeIntoDb(remote) {
    const r = Object.assign({
        users: [], hearts: {}, visits: 0, adminPass: 'admin123', eggs: []
    }, remote || {});

    const userMap = new Map();
    for (const u of (r.users || [])) {
        userMap.set(String(u.username).toLowerCase(), Object.assign({}, u));
    }
    for (const uname of Object.keys(pendingUserUpdates || {})) {
        const k = uname.toLowerCase();
        const ex = userMap.get(k);
        if (ex) Object.assign(ex, pendingUserUpdates[uname]);
    }
    for (const u of pendingUsersAdd) {
        const k = String(u.username).toLowerCase();
        const ex = userMap.get(k);
        if (!ex) {
            userMap.set(k, Object.assign({}, u));
        } else {
            if (u.lastSeen && (!ex.lastSeen || u.lastSeen > ex.lastSeen)) ex.lastSeen = u.lastSeen;
            if (u.passHash && !ex.passHash) ex.passHash = u.passHash;
            if (u.email && !ex.email) ex.email = u.email;
            if (u.role && !ex.role) ex.role = u.role;
            if (u.createdAt && !ex.createdAt) ex.createdAt = u.createdAt;
            if (u.forceReloginAt && (!ex.forceReloginAt || u.forceReloginAt > ex.forceReloginAt)) ex.forceReloginAt = u.forceReloginAt;
        }
    }
    for (const uname of pendingUsersDelete) {
        userMap.delete(uname.toLowerCase());
    }

    const hearts = Object.assign({}, r.hearts || {});
    if (HEARTBEAT_ID) {
        hearts[HEARTBEAT_ID] = heartbeatContext();
    }

    const visits = (r.visits || 0) + pendingVisitInc;

    const eggSet = new Set(r.eggs || []);
    for (const e of pendingEggsAdd) eggSet.add(e);

    let adminPass = pendingAdminPass || r.adminPass || DEFAULT_ADMIN_PASS;
    if (adminPass && !adminPass.startsWith('s2_')) adminPass = adminHash(adminPass);

    return {
        users: Array.from(userMap.values()),
        hearts: hearts,
        visits: visits,
        adminPass: adminPass,
        eggs: Array.from(eggSet)
    };
}

function applyPendingToDbCache() {
    dbCache = mergeIntoDb(dbCache);
    saveDbCacheLocal();
}

async function syncDb() {
    if (dbPushInFlight) return;
    try {
        const url = 'https://api.github.com/repos/' + GH_DB.owner + '/' + GH_DB.repo + '/contents/' + GH_DB.path + '?ref=' + GH_DB.branch + '&_=' + Date.now();
        const r = await fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + GH_DB.token,
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        if (!r.ok) throw new Error('GH ' + r.status);
        const data = await r.json();
        dbSha = data.sha;
        const remote = JSON.parse(atob(data.content.replace(/\n/g, '')));
        dbCache = mergeIntoDb(remote);
        dbLastSync = Date.now();
        saveDbCacheLocal();
        if (adminOpen) renderAdminDashboard();
    } catch (e) {}
}

async function ghPutDb() {
    if (dbPushInFlight) return;
    dbPushInFlight = true;
    try {
        const getUrl = 'https://api.github.com/repos/' + GH_DB.owner + '/' + GH_DB.repo + '/contents/' + GH_DB.path + '?ref=' + GH_DB.branch + '&_=' + Date.now();
        const gr = await fetch(getUrl, {
            headers: {
                'Authorization': 'Bearer ' + GH_DB.token,
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        if (gr.ok) {
            const gd = await gr.json();
            dbSha = gd.sha;
            const remote = JSON.parse(atob(gd.content.replace(/\n/g, '')));
            dbCache = mergeIntoDb(remote);
            saveDbCacheLocal();
            if (adminOpen) renderAdminDashboard();
        }
        const body = {
            message: 'db update ' + new Date().toISOString().slice(0,19),
            content: btoa(unescape(encodeURIComponent(JSON.stringify(dbCache)))),
            branch: GH_DB.branch
        };
        if (dbSha) body.sha = dbSha;
        const r = await fetch('https://api.github.com/repos/' + GH_DB.owner + '/' + GH_DB.repo + '/contents/' + GH_DB.path, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + GH_DB.token,
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if ((r.status === 409 || r.status === 422) && dbPushRetry < 3) {
            dbPushRetry += 1;
            dbSha = null;
            setTimeout(ghPutDb, 600);
            return;
        }
        if (!r.ok) return;
        const data = await r.json();
        if (data.content && data.content.sha) dbSha = data.content.sha;
        if (data.commit && data.commit.sha) dbSha = data.commit.sha;
        dbPushRetry = 0;
        clearPending();
        saveDbCacheLocal();
    } catch (e) {} finally {
        dbPushInFlight = false;
    }
}

function scheduleDbPush() {
    clearTimeout(dbPushTimer);
    dbPushTimer = setTimeout(() => {
        if (dbPushInFlight) {
            dbPushTimer = setTimeout(ghPutDb, 4000);
            return;
        }
        ghPutDb();
    }, 2000);
}

const DEFAULT_ADMIN_PASS = ADMIN_PASSHASH_Tl20140205;
const HEARTBEAT_MS = 120000;
const ONLINE_TIMEOUT_MS = 300000;
const SYNC_MS_IDLE = 45000;
const SYNC_MS_ADMIN = 8000;
let syncTimerActive = null;
function setSyncInterval(ms) {
    if (syncTimerActive === ms) return;
    if (syncTimerActive != null) clearInterval(syncTimerActive);
    syncTimerActive = ms;
    setInterval(() => { syncDb(); if (adminOpen) renderAdminDashboard(); }, ms);
}

loadDbCacheLocal();

const VISIT_KEY = 'li.visitonce.v1';
if (!sessionStorage.getItem(VISIT_KEY)) {
    Sset(VISIT_KEY, true);
    pendingVisitInc += 1;
    savePendingLocal();
    applyPendingToDbCache();
    scheduleDbPush();
}

function tstr(key) {
    const table = navAuth[key] || { en: key };
    return (table[currentLang] != null ? table[currentLang] : table.en) || key;
}

function sendHeartbeat() {
    pendingHeartbeatTs = Date.now();
    savePendingLocal();
    applyPendingToDbCache();
    scheduleDbPush();
}

function pruneAndGetHearts() {
    const all = dbCache.hearts || {};
    const now = Date.now();
    const out = {};
    for (const [k, v] of Object.entries(all)) {
        if (v && typeof v.ts === 'number' && (now - v.ts) <= ONLINE_TIMEOUT_MS) {
            out[k] = v;
        }
    }
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
    const me = Lget(STORE.me, null);
    if (me && me.username) {
        pendingUserUpdates[me.username] = Object.assign(pendingUserUpdates[me.username] || {}, { lastSeen: Date.now() });
        savePendingLocal();
        applyPendingToDbCache();
    }
    try { ghPutDb(); } catch (e) {}
});
document.addEventListener('visibilitychange', sendHeartbeat);

const heartCheck = setInterval(() => {
    pruneAndGetHearts();
    if (adminOpen) renderAdminDashboard();
}, 30000);

setSyncInterval(SYNC_MS_IDLE);

function hashPass(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return 'fh1_' + (h >>> 0).toString(16).padStart(8, '0');
}

if (!('EMAIL_JS' in window)) {
    window.EMAIL_JS = { publicKey: EMAILJS.publicKey, serviceId: EMAILJS.serviceId, templateId: EMAILJS.templateId };
}

const otpStore = { codes: {} };
function genCode() { return String(Math.floor(100000 + Math.random() * 900000)); }
async function emailSendCode(email, code, mode) {
    if (EMAILJS.publicKey && EMAILJS.serviceId && EMAILJS.templateId && typeof window !== 'undefined' && window.emailjs) {
        try {
            await window.emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
                to_email: email,
                verify_code: code,
                mode: mode || 'verify'
            }, { publicKey: EMAILJS.publicKey });
            return true;
        } catch (e) { return false; }
    }
    return 'demo';
}
async function sendOtp(mode) {
    let email = '';
    if (mode === 'register') {
        const f = document.querySelector('[data-auth-form="register"]');
        if (f && f.email) email = (f.email.value || '').trim();
    } else if (mode === 'signin') {
        const f = document.querySelector('[data-auth-form="signin"]');
        if (f && f.username) {
            const un = (f.username.value || '').trim();
            const u = findUser(un);
            if (u) email = u.email || '';
        }
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (mode === 'register') setAuthError('register', tstr('emailInvalid'));
        else setAuthError('signin', tstr('emailInvalid'));
        return;
    }
    const key = (mode || 'otp') + ':' + email.toLowerCase();
    const last = otpStore.codes[key];
    const now = Date.now();
    if (last && last.expAt - now > (5 * 60 * 1000 - 60000)) {
        showToast(tstr('codeSentWait'), 'warn');
        return;
    }
    const code = genCode();
    const res = await emailSendCode(email, code, mode);
    const expAt = now + 5 * 60 * 1000;
    otpStore.codes[key] = { code, expAt, try: 0 };
    const btn = document.querySelector('[data-otp="' + (mode || '') + '"]');
    if (btn) {
        const orig = btn.textContent || btn.innerText || '';
        btn.disabled = true;
        btn.style.opacity = '0.5';
        let left = 60;
        btn.textContent = left + 's';
        const t = setInterval(() => {
            left--;
            if (left <= 0) {
                clearInterval(t);
                btn.disabled = false;
                btn.style.opacity = '';
                btn.textContent = orig || tstr('sendCode');
            } else {
                btn.textContent = left + 's';
            }
        }, 1000);
    }
    if (res === 'demo') showToast(tstr('codeSentDemo') + ' ' + code, 'ok');
    else if (res === true) showToast(tstr('codeSent'), 'ok');
    else showToast(tstr('codeSendFail'), 'err');
}
function verifyOtp(email, code, mode) {
    if (!email || !code) return false;
    const key = (mode || 'otp') + ':' + email.toLowerCase();
    const rec = otpStore.codes[key];
    if (!rec) return false;
    const now = Date.now();
    if (now > rec.expAt) { delete otpStore.codes[key]; return false; }
    rec.try = (rec.try || 0) + 1;
    if (rec.try > 8) { delete otpStore.codes[key]; return false; }
    if (String(rec.code) === String(code).trim()) {
        delete otpStore.codes[key];
        return true;
    }
    return false;
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('[data-otp]');
    if (!btn) return;
    e.preventDefault();
    const mode = btn.getAttribute('data-otp');
    sendOtp(mode);
});

function findUser(username) {
    const users = dbCache.users || [];
    return users.find(u => u.username.toLowerCase() === (username || '').toLowerCase());
}

function writeSession(username, role) {
    const token = 'tk_' + Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
    const sessions = Lget(STORE.sessions, {});
    sessions[token] = { username, role, iat: Date.now() };
    Lset(STORE.sessions, sessions);
    Lset(STORE.me, { username, role, token });
    pendingUserUpdates[username] = Object.assign(pendingUserUpdates[username] || {}, { lastSeen: Date.now() });
    savePendingLocal();
    applyPendingToDbCache();
    scheduleDbPush();
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
    const users = dbCache.users || [];
    const u = users.find(x => x.username === me.username);
    if (u && u.forceReloginAt && s.iat && s.iat < u.forceReloginAt) {
        clearSession();
        if (typeof renderNavAuth === 'function') try { renderNavAuth(); } catch(e){}
        return null;
    }
    pendingUserUpdates[me.username] = Object.assign(pendingUserUpdates[me.username] || {}, { lastSeen: Date.now() });
    savePendingLocal();
    applyPendingToDbCache();
    scheduleDbPush();
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
        const code = (data.code || '').trim();
        setAuthError('register', '');
        if (!username || !email || !password || !confirm || !code) return setAuthError('register', tstr('required'));
        if (username.length < 2) return setAuthError('register', tstr('userShort'));
        if (password.length < 4) return setAuthError('register', tstr('passShort'));
        if (password !== confirm) return setAuthError('register', tstr('confirmMismatch'));
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setAuthError('register', tstr('emailInvalid'));
        if (!verifyOtp(email, code, 'register')) return setAuthError('register', tstr('codeBad'));
        if (findUser(username)) return setAuthError('register', tstr('userExists'));
        const users0 = dbCache.users || [];
        if (users0.find(u => u.email.toLowerCase() === email.toLowerCase())) return setAuthError('register', tstr('emailExists'));
        const newUser = {
            username,
            email,
            passHash: encUserPwd(password),
            role: 'user',
            createdAt: Date.now(),
            lastSeen: Date.now()
        };
        pendingUsersAdd.push(newUser);
        savePendingLocal();
        applyPendingToDbCache();
        scheduleDbPush();
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
        const code = (data.code || '').trim();
        setAuthError('signin', '');
        if (!username || !password || !code) return setAuthError('signin', tstr('required'));
        const user = findUser(username);
        let match = false;
        if (user) {
            if ((user.passHash || '').startsWith('ev1_')) match = decUserPwd(user.passHash) === password;
            else if ((user.passHash || '').startsWith('fh1_')) match = user.passHash === hashPass(password);
            else match = user.passHash === password;
        }
        if (!match) return setAuthError('signin', tstr('invalidCreds'));
        if (!verifyOtp(user.email, code, 'signin')) return setAuthError('signin', tstr('codeBad'));
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
        let stored = dbCache.adminPass || DEFAULT_ADMIN_PASS;
        if (stored && !stored.startsWith('s2_')) stored = adminHash(stored);
        const match = adminHash(pw) === stored;
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
    setSyncInterval(SYNC_MS_ADMIN);
    syncDb().then(() => { if (adminOpen) renderAdminDashboard(); }).catch(()=>{});
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
    const visits = dbCache.visits || 0;
    const users = dbCache.users || [];
    const eggs = (dbCache.eggs || []).length;
    animateNumber(adminOnlineEl, online);
    animateNumber(adminVisitsEl, visits);
    animateNumber(adminUsersEl, users.length);
    animateNumber(adminEggsEl, eggs);
    const thead = adminUsersBody ? adminUsersBody.closest('table').querySelector('thead tr') : null;
    if (thead && thead.children.length === 6) {
        thead.innerHTML =
            '<th data-i18n="admin.thUsername">' + tstr('thUsername') + '</th>' +
            '<th data-i18n="admin.thEmail">' + tstr('thEmail') + '</th>' +
            '<th data-i18n="admin.thCreated">' + tstr('thCreated') + '</th>' +
            '<th data-i18n="admin.thSeen">' + tstr('thSeen') + '</th>' +
            '<th data-i18n="admin.thOnline">' + tstr('thOnline') + '</th>' +
            '<th data-i18n="admin.thPassword">' + tstr('thPassword') + '</th>' +
            '<th></th>';
    }
    if (!tbody) return;
    if (!users.length) {
        tbody.innerHTML = '<tr><td colspan="7" class="admin-empty">' + tstr('emptyUsers') + '</td></tr>';
        return;
    }
    const now = Date.now();
    const armed = adminSafeDelete ? adminSafeDelete.checked : false;
    const rows = users.slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).map(u => {
        const on = isOnlineNow(u.username, hearts);
        const pwDec = decUserPwd(u.passHash || '');
        return '<tr data-user="' + escapeHtml(u.username) + '">' +
            '<td><strong>' + escapeHtml(u.username) + '</strong>' + (u.role === 'admin' ? ' <span style="font-family:JetBrains Mono,monospace;font-size:0.7em;padding:2px 6px;border-radius:999px;background:linear-gradient(135deg,var(--accent),var(--cyan));color:#fff;vertical-align:middle;">ADMIN</span>' : '') + '</td>' +
            '<td>' + escapeHtml(u.email) + '</td>' +
            '<td style="white-space:nowrap;">' + new Date(u.createdAt || Date.now()).toLocaleDateString() + '</td>' +
            '<td style="white-space:nowrap;">' + humanTime(u.lastSeen, now) + '</td>' +
            '<td><span class="admin-online-dot' + (on ? ' online' : '') + '">' + (on ? tstr('online') : tstr('offline')) + '</span></td>' +
            '<td>' +
              '<div style="display:flex;align-items:center;gap:6px;min-width:140px;justify-content:flex-end;">' +
                '<code class="pwd-cell" data-pwd="' + escapeHtml(pwDec) + '" style="font-family:JetBrains Mono,monospace;font-size:0.76em;letter-spacing:0.04em;color:var(--text-mute);">\u2022\u2022\u2022\u2022\u2022\u2022</code>' +
                '<button type="button" class="admin-row-toggle" data-act="togglepwd" data-user="' + escapeHtml(u.username) + '" title="' + tstr('showPwd') + '">' + tstr('showPwd') + '</button>' +
              '</div>' +
            '</td>' +
            '<td style="text-align:right;">' +
              '<div style="display:flex;gap:6px;justify-content:flex-end;">' +
                '<button type="button" class="admin-row-kick" data-act="kick" data-user="' + escapeHtml(u.username) + '">' + tstr('kickUser') + '</button>' +
                '<button type="button" class="admin-row-delete' + (armed ? ' armed' : '') + '" data-act="deluser" data-user="' + escapeHtml(u.username) + '">Delete</button>' +
              '</div>' +
            '</td>' +
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
    const tr = e.target.closest && e.target.closest('tr[data-user]');
    if (!tr) return;
    const togg = e.target.closest('[data-act="togglepwd"]');
    if (togg) {
        const cell = tr.querySelector('.pwd-cell');
        if (cell) {
            const shown = cell.getAttribute('data-shown') === '1';
            if (shown) {
                cell.textContent = '\u2022\u2022\u2022\u2022\u2022\u2022';
                cell.setAttribute('data-shown', '0');
                cell.style.color = 'var(--text-mute)';
                togg.textContent = tstr('showPwd');
            } else {
                cell.textContent = cell.getAttribute('data-pwd') || '';
                cell.setAttribute('data-shown', '1');
                cell.style.color = 'var(--text)';
                togg.textContent = tstr('hidePwd');
            }
        }
        return;
    }
    const kick = e.target.closest('[data-act="kick"]');
    if (kick) {
        const username = kick.getAttribute('data-user');
        if (!username) return;
        if (!confirm(tstr('kickConfirm') + '\n' + username)) return;
        pendingUserUpdates[username] = Object.assign(pendingUserUpdates[username] || {}, { forceReloginAt: Date.now() });
        savePendingLocal();
        applyPendingToDbCache();
        scheduleDbPush();
        renderAdminDashboard();
        showToast(tstr('kicked'), 'warn');
        return;
    }
    const btn = e.target.closest('[data-act="deluser"]');
    if (!btn) return;
    const username = btn.getAttribute('data-user');
    if (!adminSafeDelete || !adminSafeDelete.checked) return;
    if (!confirm(tstr('deleteConfirm') + '\n' + username)) return;
    if (!pendingUsersDelete.includes(username)) pendingUsersDelete.push(username);
    const i = pendingUsersAdd.findIndex(u => u.username === username);
    if (i >= 0) pendingUsersAdd.splice(i, 1);
    savePendingLocal();
    applyPendingToDbCache();
    scheduleDbPush();
    renderAdminDashboard();
    showToast(tstr('deleted'), 'warn');
});

const adminLogout = document.getElementById('adminLogout');
if (adminLogout) adminLogout.addEventListener('click', () => {
    clearSession();
    renderNavAuth();
    closeModal('adminModal');
    adminOpen = false;
    setSyncInterval(SYNC_MS_IDLE);
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
    let stored = dbCache.adminPass || DEFAULT_ADMIN_PASS;
    if (stored && !stored.startsWith('s2_')) stored = adminHash(stored);
    if (adminHash(cur) !== stored) {
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
    const nh = adminHash(nw);
    dbCache.adminPass = nh;
    pendingAdminPass = nh;
    savePendingLocal();
    applyPendingToDbCache();
    scheduleDbPush();
    showToast(tstr('changeOk'), 'ok');
}

window.addEventListener('storage', (e) => {
    if (e.key === 'li.dbcache.v1' || e.key === 'li.dbpending.v1') {
        try {
            const raw = localStorage.getItem('li.dbcache.v1');
            if (raw) dbCache = Object.assign({ users: [], hearts: {}, visits: 0, adminPass: 'admin123', eggs: [] }, JSON.parse(raw));
        } catch (e2) {}
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

try {
    renderNavAuth();
    applyI18n(currentLang);
} catch (e) {
    window.__initErr = String(e) + ' | ' + (e && e.stack ? e.stack.slice(0, 500) : '');
    setTimeout(() => {
        try { renderNavAuth(); applyI18n(currentLang || 'en'); } catch (e2) {}
    }, 0);
}
syncDb();
setTimeout(() => {
    if (document.querySelector('[data-i18n="hero.status"]') && document.querySelector('[data-i18n="hero.status"]').textContent === 'hero.status') {
        try { renderNavAuth(); applyI18n(currentLang || 'en'); } catch (e) {}
    }
}, 32);
