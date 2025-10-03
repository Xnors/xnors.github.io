<template>
    <!-- 页脚 -->
    <footer>
      <div class="footer-content">
        <p class="copyright">© 2024 Xnors Studio. All rights reserved.</p>
        <div class="theme-toggle" onclick="toggleTheme()">
          <span id="theme-icon">🌙</span>
        </div>
      </div>
    </footer>

</template>

<style>
/* 页脚 */
footer {
  padding: 2rem 0;
  background: var(--bg-primary);
  text-align: center;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: var(--accent-primary);
  color: white;
}
</style>