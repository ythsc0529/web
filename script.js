document.addEventListener('DOMContentLoaded', () => {
	// --- Scroll Animations (Intersection Observer) ---
	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				// Optional: Stop observing once visible if you don't want it to fade out again
				// observer.unobserve(entry.target); 
			}
		});
	}, observerOptions);

	const fadeElements = document.querySelectorAll('.fade-in-section');
	fadeElements.forEach(el => observer.observe(el));

	// --- Liquid Glass Mouse Follow Effect ---
	const liquidCards = document.querySelectorAll('.liquid-glass');

	liquidCards.forEach(card => {
		card.addEventListener('mousemove', (e) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			card.style.setProperty('--mouse-x', `${x}px`);
			card.style.setProperty('--mouse-y', `${y}px`);
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

	// --- 更新公告 Modal (保留功能) ---
	const MODAL_KEY = 'sb_site_update_hidden_v1'; // localStorage key
	if (!localStorage.getItem(MODAL_KEY)) {
		showUpdateModal();
	}

	function showUpdateModal() {
		const overlay = document.createElement('div');
		overlay.className = 'site-update-overlay';
		overlay.setAttribute('role', 'presentation');

		const modal = document.createElement('div');
		modal.className = 'site-update-modal';
		modal.setAttribute('role', 'dialog');
		modal.setAttribute('aria-modal', 'true');
		modal.setAttribute('aria-label', '網站更新公告');

		modal.innerHTML = `
            <div class="site-update-dialog">
                <header class="site-update-header">
                    <h2>更新公告 / 歡迎使用 隨便你工作室</h2>
                </header>
                <main class="site-update-body">
                    <p>歡迎來到「隨便你工作室」的作品展示網站。這個網站由一群學生與創作者維護，呈現我們的工具、遊戲與 AI 相關作品。</p>
                    <ul>
                        <li>瀏覽作品：查看我們已上線的專案（例如 Huson AI、麻將工具箱、2048 等）。</li>
                        <li>最新功能：我們持續加入互動動畫、即時翻譯與工具功能。</li>
                        <li>想參與或合作：請前往「聯絡我們」頁面與我們聯繫。</li>
                    </ul>
                </main>
                <footer class="site-update-footer">
                    <label class="dont-show">
                        <input type="checkbox" id="site-update-dontshow"> 不再顯示（除非清除瀏覽器儲存）
                    </label>
                    <div class="site-update-actions">
                        <a href="about.html" class="btn btn-secondary" id="site-update-learn">瞭解本站</a>
                        <button class="btn btn-primary" id="site-update-close">知道了</button>
                    </div>
                </footer>
            </div>
        `;

		document.body.appendChild(overlay);
		document.body.appendChild(modal);

		window.requestAnimationFrame(() => {
			overlay.classList.add('visible');
			modal.classList.add('visible');
		});

		function closeModal(saveDontShow = false) {
			overlay.classList.remove('visible');
			modal.classList.remove('visible');
			setTimeout(() => {
				if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
				if (modal.parentNode) modal.parentNode.removeChild(modal);
			}, 260);
			if (saveDontShow) {
				localStorage.setItem(MODAL_KEY, '1');
			}
		}

		overlay.addEventListener('click', () => {
			const cb = document.getElementById('site-update-dontshow');
			closeModal(cb && cb.checked);
		});
		document.getElementById('site-update-close').addEventListener('click', () => {
			const cb = document.getElementById('site-update-dontshow');
			closeModal(cb && cb.checked);
		});

		function onKey(e) {
			if (e.key === 'Escape') {
				const cb = document.getElementById('site-update-dontshow');
				closeModal(cb && cb.checked);
				document.removeEventListener('keydown', onKey);
			}
		}
		document.addEventListener('keydown', onKey);
	}
});