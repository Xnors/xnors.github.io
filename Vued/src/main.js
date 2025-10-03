import { createApp } from 'vue'
import './style.css'
import './base.css'
import App from './App.vue'
import router from './router'

// 主题切换和复制邮箱是全局功能，可以保留在这里，或者也做成Composable
// 这里我们先保留在 main.js，因为它们不依赖特定页面的DOM

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
// 将函数挂载到全局，方便在任何地方调用
window.toggleTheme = toggleTheme;


// 复制邮箱到剪贴板
function copyToClipboard(text, ctt) {
  navigator.clipboard.writeText(text).then(() => {
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
// 同样挂载到全局
window.copyToClipboard = copyToClipboard;


// 添加CSS动画（这个只需要一次，放在main.js没问题）
const style = document.createElement("style");
style.textContent = `
  @keyframes slideUp {
    from { transform: translate(-50%, 100%); opacity: 0; }
    to { transform: translate(-50%, 0); opacity: 1; }
  }
`;
document.head.appendChild(style);


createApp(App).use(router).mount('#app')
