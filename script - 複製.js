// ==========================================
// JavaScript 程式碼：讓網頁能夠互動
// ==========================================

// 等待網頁完全載入後才執行程式
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 功能 1：深色模式切換
    // ==========================================
    
    // 取得主題切換按鈕
    const themeToggle = document.getElementById('themeToggle');
    
    // 檢查使用者之前是否選過深色模式
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    // 當按下主題切換按鈕時
    themeToggle.addEventListener('click', function() {
        // 切換深色模式
        document.body.classList.toggle('dark-mode');
        
        // 改變按鈕圖示
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';  // 深色模式：顯示太陽
            localStorage.setItem('theme', 'dark');  // 記住使用者選擇
        } else {
            themeToggle.textContent = '🌙';  // 淺色模式：顯示月亮
            localStorage.setItem('theme', 'light');  // 記住使用者選擇
        }
        
        // 加上按鈕點擊動畫
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
    
    
    // ==========================================
    // 功能 2：表單送出處理
    // ==========================================
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        // 阻止表單實際送出（因為這只是範例）
        event.preventDefault();
        
        // 顯示感謝訊息
        alert('感謝你的留言！這是一個範例網頁，留言不會真的被送出 😊');
        
        // 清空表單內容
        contactForm.reset();
    });
    
    
    // ==========================================
    // 功能 3：平滑捲動到區塊
    // ==========================================
    
    // 取得所有導覽連結
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // 取得連結指向的區塊 ID
            const targetId = this.getAttribute('href');
            
            // 如果是指向頁面內的錨點
            if (targetId.startsWith('#')) {
                event.preventDefault();
                
                // 找到目標區塊
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // 平滑捲動到目標區塊
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    
    // ==========================================
    // 功能 4：捲動時導覽列陰影效果
    // ==========================================
    
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        // 當使用者捲動超過 50px 時
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }
    });
    
    
    // ==========================================
    // 功能 5：照片點擊放大（簡易版）
    // ==========================================
    
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            // 在新分頁打開圖片
            window.open(this.src, '_blank');
        });
        
        // 改變滑鼠游標樣式，表示可以點擊
        image.style.cursor = 'pointer';
    });
    
    
    // ==========================================
    // 功能 6：為卡片加上序號動畫（進階範例）
    // ==========================================
    
    const cards = document.querySelectorAll('.card');
    
    // 設定每張卡片的動畫延遲
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-fade-in');
    });
    
    
    // ==========================================
    // 歡迎訊息（會在首次載入時顯示）
    // ==========================================
    
    // 檢查是否是第一次訪問
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
        // 延遲 1 秒後顯示歡迎訊息
        setTimeout(() => {
            alert('歡迎來到我的個人網頁！👋\n\n這個網頁是用 AI 輔助製作的唷！');
            localStorage.setItem('hasVisited', 'true');
        }, 1000);
    }
    
    
    // ==========================================
    // 在控制台顯示彩蛋訊息 🎉
    // ==========================================
    
    console.log('%c🎉 歡迎來到我的網頁！', 'font-size: 20px; color: #6366f1; font-weight: bold;');
    console.log('%c這個網頁是用 HTML、CSS 和 JavaScript 製作的', 'font-size: 14px; color: #8b5cf6;');
    console.log('%c如果你也想學習製作自己的網頁，可以試試用 AI 輔助學習！', 'font-size: 12px; color: #666;');
    
});


// ==========================================
// 實用函數：可以在其他地方重複使用
// ==========================================

/**
 * 動態改變主題顏色
 * 使用方法：changeThemeColor('#ff6b6b')
 */
function changeThemeColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
    console.log(`主題顏色已改為：${color}`);
}

/**
 * 隨機產生漸層背景
 */
function randomGradient() {
    const colors = [
        ['#6366f1', '#8b5cf6'],
        ['#ec4899', '#f43f5e'],
        ['#14b8a6', '#06b6d4'],
        ['#f59e0b', '#ef4444'],
        ['#10b981', '#3b82f6']
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.background = `linear-gradient(135deg, ${randomColor[0]} 0%, ${randomColor[1]} 100%)`;
    }
}

// 提示：在瀏覽器的開發者工具 Console 中輸入以下指令試試看：
// changeThemeColor('#ff6b6b')  // 改變主題顏色為紅色
// randomGradient()              // 隨機改變首頁背景漸層
