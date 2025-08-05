// 初始化 AOS 動畫庫
AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // 排除 #back-to-top 按鈕
    if (!anchor.hasAttribute('id') || anchor.getAttribute('id') !== 'back-to-top') {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// 控制 "回到頂部" 按鈕的顯示與隱藏
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // 當頁面滾動超過 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// "回到頂部" 按鈕的點擊事件
backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});