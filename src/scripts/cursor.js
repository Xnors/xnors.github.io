import { ref, onMounted, onUnmounted } from "vue";

export default function useCursor() {
    const cursor = ref(null);

    // 鼠标移动事件
    const handleMouseMove = (e) => {
        cursor.value.style.top = `${e.pageY - 15}px`;
        cursor.value.style.left = `${e.pageX - 15}px`;
    };

    // 鼠标点击事件
    const handleClick = () => {
        cursor.value.classList.add("expand");
        setTimeout(() => {
            cursor.value.classList.remove("expand");
        }, 400);
    };

    // 鼠标进入 <a> 标签时触发动画
    const handleMouseEnter = (e) => {
        if (e.target.tagName === "A") {
            cursor.value.classList.add("when-meet-a");
        }
    };

    // 鼠标离开 <a> 标签时移除动画
    const handleMouseLeave = (e) => {
        if (e.target.tagName === "A") {
            cursor.value.classList.remove("when-meet-a");
        }
    };

    // 在组件挂载时添加事件监听
    onMounted(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("click", handleClick);
        document.addEventListener("mouseover", handleMouseEnter);
        document.addEventListener("mouseout", handleMouseLeave);
    });

    // 在组件卸载时移除事件监听
    onUnmounted(() => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("click", handleClick);
        document.removeEventListener("mouseover", handleMouseEnter);
        document.removeEventListener("mouseout", handleMouseLeave);
    });

    return { cursor };
}