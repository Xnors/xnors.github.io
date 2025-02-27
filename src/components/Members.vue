<template>
    <div class="members">
        <div class="member">
            <div class="name">Fexcode</div>
            <div class="offices">
                <div class="office">Coder</div>
                <div class="office">Designer</div>
                <div class="office">Developer</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

$name-size: calc(1rem + 1.6vw + 1.2vh);
.member {
    position: relative;
    // width: 200px; /* 容器大小 */
    // height: 200px;
    width: 100vw;
    height: 100vh;
    margin: auto;
    /* 居中显示 */
    border: 1px solid #ffffff0f;
    background-color: #121212;
    overflow: hidden;
    /* 防止超出容器的内容显示 */
}

.name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    /* 确保 name 在上层 */
    font-size: $name-size;
    font-weight: bold;
}

.offices {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
}

.office {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    /* 旋转中心为元素自身左上角 */
    animation: circular 18s linear infinite;
    /* 定义圆周运动动画 */
    // font-size: 2.4rem;
    font-size: calc($name-size * 0.5);
}

.office:nth-child(2) {
    animation-delay: 6s;
    /* 让第二个元素延迟开始动画 */
}
.office:nth-child(3) {
    animation-delay: 12s;
    /* 让第二个元素延迟开始动画 */
}

$translateX-size: calc(18vw + 6vh);
@keyframes circular {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) translateX($translateX-size) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg) translateX($translateX-size) rotate(-360deg);
    }
}
</style>