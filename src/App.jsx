import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMount } from "solid-js";

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

function App() {
  // 在组件加载时初始化动画
  onMount(() => {
    gsap.to(".box", {
      x: "50vw", 
      scrollTrigger: {
        trigger: ".rootbox", // 触发动画的容器
        start: "top top", // 滚动到容器顶部到达视口中心时开始动画
        end: "bottom bottom", // 滚动到容器底部到达视口中心时结束动画
        scrub: true, // 动画随滚动条平滑过渡
        // markers: true, // 显示调试标记（可选）
        pin: false, // 固定元素位置
      },
    });
  });
  return (
    <>
      <div class="rootbox">
        <div class="logo-box">
          <div class="box">
            <img src="src\assets\lg-name.svg" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
