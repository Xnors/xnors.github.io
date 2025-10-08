<template>
  <!-- 页脚 -->
  <footer>
    <div class="footer-content">
      <p class="copyright">© 2024 Xnors Studio. All rights reserved.</p>

      <div class="friend-links">
        <p class="friend-links-title">友情链接</p>
        <a href="https://xnors.github.io/xblogs/" target="_blank" class="friend-link">异或博客/Xblogs</a>
        <a href="https://nizhiwu.top/" target="_blank" class="friend-link">逆之雨工作室</a>
        <a href="https://sxxyrry.github.io/" target="_blank" class="friend-link">23XR工作室</a>
      </div>

      <div class="theme-toggle" @click="toggleTheme">
        <img src="../../public/logo.png" id="theme-icon"></img>
      </div>
    </div>
  </footer>

</template>

<style scoped>
/* 页脚 */
footer {
  padding: 2rem 0;
  background: var(--bg-primary);
  text-align: center;
  border-top: 1px solid var(--border-color);
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.friend-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.friend-links-title {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  opacity: 0.8;
}

.friend-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: var(--bg-secondary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.friend-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, var(--accent-secondary), var(--accent-primary));
  opacity: 0.4;
  transition: left 0.3s ease;
  z-index: -1;
}

.friend-link:hover {
  color: rgb(255, 255, 255);
  transform: translateX(5px);
}

.friend-link:hover::before {
  left: 0;
}

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* background: var(--bg-secondary); */
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.theme-toggle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.theme-toggle:hover::after {
  width: 100%;
  height: 100%;
}

.theme-toggle:hover {
  background: var(--accent-primary);
  color: white;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: left;
  }

  .friend-links {
    align-items: flex-start;
  }
}
</style>
