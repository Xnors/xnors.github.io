<template>
    <!-- 导航栏 -->
    <nav>
      <div class="nav-container">
        <div class="logo">Xnors Studio</div>
        <ul class="nav-links">
          <li><a href="#services">服务</a></li>
          <li><a href="#team">团队</a></li>
          <li><a href="#contact">联系</a></li>
        </ul>
      </div>
    </nav>
</template>

<script setup>

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.background = "rgba(10, 10, 10, 0.5)";
    nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.5)";
  } else {
    nav.style.background = "rgba(10, 10, 10, 0.1)";
    nav.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

</script>

<style scoped>
/* 导航栏 */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

[data-theme="light"] nav {
  background: rgba(245, 245, 245, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg,
      var(--accent-primary),
      var(--accent-secondary));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  color: var(--accent-primary);
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}
</style>