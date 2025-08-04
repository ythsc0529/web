// 初始化 AOS 動畫庫
AOS.init({
    duration: 1000, // 動畫持續時間 (毫秒)
    once: true,     // 動畫只播放一次
    offset: 50,     // 觸發動畫的偏移量 (像素)
});

// 你未來可以將更多互動功能寫在這裡
// 例如：點擊導覽列連結時平滑滾動到目標區塊
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});