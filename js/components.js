const navHTML = `
<header>
  <div class="nav-container">
    <a href="index.html" class="logo">
      <img src="assets/images/logo.png" alt="Vinyl Vibes Logo">
      <span>Vinyl Vibes</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" id="nav-home">首頁</a></li>
      <li><a href="about.html" id="nav-about">公司簡介</a></li>
      <li><a href="korean.html" id="nav-korean">韓國唱片</a></li>
      <li><a href="japanese.html" id="nav-japanese">日本唱片</a></li>
      <li><a href="chinese.html" id="nav-chinese">華語唱片</a></li>
      <li><a href="western.html" id="nav-western">歐美唱片</a></li>
      <li><a href="others.html" id="nav-others">其它類</a></li>
      <li><a href="contact.html" id="nav-contact">聯絡我們</a></li>
    </ul>
  </div>
</header>
`;

const footerHTML = `
<footer>
  <div class="footer-content">
    <div class="footer-info">
      <h3>Vinyl Vibes 黑膠唱片行</h3>
      <p>&copy; 2026 Vinyl Vibes. 保留所有權利。</p>
    </div>
    <div class="social-links">
      <a href="#">FB</a>
      <a href="#">IG</a>
      <a href="#">TW</a>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject Header and Footer
  const headerTarget = document.getElementById('header-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  
  if (headerTarget) headerTarget.outerHTML = navHTML;
  if (footerTarget) footerTarget.outerHTML = footerHTML;

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navIdMap = {
    'index.html': 'nav-home',
    'about.html': 'nav-about',
    'korean.html': 'nav-korean',
    'japanese.html': 'nav-japanese',
    'chinese.html': 'nav-chinese',
    'western.html': 'nav-western',
    'others.html': 'nav-others',
    'contact.html': 'nav-contact'
  };
  
  // Wait a small tick to let DOM update
  setTimeout(() => {
    const activeId = navIdMap[currentPage];
    if (activeId) {
      const el = document.getElementById(activeId);
      if (el) el.classList.add('active');
    }
  }, 50);
});
