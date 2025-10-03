import { createApp } from 'vue'
import './style.css'
import './base.css'
import App from './App.vue'

createApp(App).mount('#app')


// 主题切换
function toggleTheme() {
  const html = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");

  if (html.getAttribute("data-theme") === "light") {
    html.removeAttribute("data-theme");
    themeIcon.textContent = "🌙";
  } else {
    html.setAttribute("data-theme", "light");
    themeIcon.textContent = "☀️";
  }
}

// 复制邮箱到剪贴板
function copyToClipboard(text, ctt) {
  navigator.clipboard.writeText(text).then(() => {
    // 创建提示元素
    const toast = document.createElement("div");
    toast.textContent = ctt;
    toast.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #4caf5080;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    z-index: 9999;
                    animation: slideUp 0.3s ease;
                `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  });
}

// 滚动动画
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

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

// 添加CSS动画
const style = document.createElement("style");
style.textContent = `
            @keyframes slideUp {
                from {
                    transform: translate(-50%, 100%);
                    opacity: 0;
                }
                to {
                    transform: translate(-50%, 0);
                    opacity: 1;
                }
            }
        `;
document.head.appendChild(style);