document.addEventListener('DOMContentLoaded', () => {
    // 建立一個觀察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // 元素進入畫面 10% 時觸發
    });

    // 選取所有需要動畫的區塊
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});