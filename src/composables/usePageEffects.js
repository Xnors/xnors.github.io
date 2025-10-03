import { onMounted, onUnmounted } from "vue";

export function usePageEffects() {
  // 在组件挂载后执行
  onMounted(() => {
    console.log("Page effects mounted.");

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

    // 观察当前组件内的 .fade-in 元素
    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // 平滑滚动
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    document.body.addEventListener("click", handleSmoothScroll);

    // 导航栏滚动效果
    const handleNavScroll = () => {
      const nav = document.querySelector("nav");
      if (!nav) return; // 如果没有nav元素，则不执行
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        nav.style.background = "rgba(10, 10, 10, 0.5)";
        nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.5)";
      } else {
        nav.style.background = "rgba(10, 10, 10, 0.1)";
        nav.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", handleNavScroll);

    // 将清理函数存储起来，以便在 onUnmounted 中调用
    // 注意：IntersectionObserver 的清理比较特殊，我们只需要断开观察
    const cleanup = () => {
      console.log("Page effects unmounted.");
      observer.disconnect(); // 停止观察所有元素
      document.body.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleNavScroll);
    };

    // 返回清理函数
    return cleanup;
  });

  // 在组件卸载前执行清理
  onUnmounted(() => {
    // onMounted 返回的清理函数会自动被 onUnmounted 调用
    // 但为了清晰，我们也可以在这里手动处理（如果onMounted没有返回）
    // 这里我们依赖 onMounted 的返回值进行清理
  });
}
