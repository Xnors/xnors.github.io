<script setup>
import anime from 'animejs/lib/anime.es.js';
import { copyText } from 'vue3-clipboard'
import { onMounted, ref } from 'vue';
import { alphaSliderProps } from 'element-plus/es/components/color-picker/src/props/alpha-slider.mjs';

let showen = ref("");

function showSth(text, t, cc) {
    let index = 0;
    function myprint() {
        if (index < text.length) {
            showen.value = showen.value + text.charAt(index);
            index++;
        } else {
            clearInterval(c);//输出完后关闭定时器
        }
    }
    if (cc != NaN) {
        clearInterval(cc);
    }
    showen.value = "";
    var c = setInterval(myprint, t);//定时器
    return c;
}

var cc = showSth("Hi, there! Welcome to Xnors!", 42, NaN)

class Shower {
    static showEmail() {
        // showen.value = "xnors-studio@outlook.com";
        var cc = showSth("xnors-studio@outlook.com", 20, cc)
    }

    static showQQPD() {
        // showen.value = "xnors-studio@outlook.com";
        var cc = showSth("pdxnorscode", 26, cc)
    }

    static unshow() {
        var cc = showSth("Hi, there! Welcome to Xnors!", 12, cc);
    }

    static showGroupNumber() {
        var cc = showSth("731499435", 30, cc)
    }
}

function showToast(t) {
    var toast = document.getElementById("toast");
    toast.innerHTML = t;
    toast.className = "toast show";
    setTimeout(
        function () {
            toast.className = toast.className.replace("show", "");
        }, 2000
    );
}

function copy() {
    // 复制showen的值到剪切板

    if (showen.value == "Hi, there! Welcome to Xnors!") {
        showToast("(✿◡‿◡) 别点我 (*/ω＼*)")
        return;
    }

    copyText(showen.value, undefined, (error) => {
        if (error) {
            showToast(`!复制失败: ${error}!`)
        } else {
            showToast(`复制成功`);
        }
    });
    Shower.unshow();
}

onMounted(() => {
    const delay = 500;


    anime({
        targets: '.links',
        translateY: 500,
        opacity: 0,
        duration: 0,
    })
    // 获取元素
    var myTimeline = anime.timeline({
        // easing: 'easeOutExpo',
        duration: 0,
        loop: false,
    });

    myTimeline
        .add({
            targets: '.logo',
            opacity: [0, 1],
            translateY: ['100vh', 0],
            duration: 2000,
        }, '-=500')
        .add({
            targets: ".links",
            translateY: ["60vh", 0],
            opacity: [0, 1],
            scale: [0.1, 1],
            duration: 1000,
            easing: 'easeOutExpo'
        }, '-=1000')
        .add({
            targets: ".showenBox",
            opacity: [0, 0.9],
            duration: 6000,
            easing: 'easeOutExpo'
        }, '-=3000')
})


</script>

<template>

    <div class="set-center">
        <div id="toast" class="toast">Xnors!</div>
        <img id="logox" class="logo" src="../assets/xlogo.svg" alt="" />
        <div class="showenBox" @click="copy()">
            {{ showen }}
            <img src="../assets/copy-icon.svg" class="copy-icon" />
        </div>
        <div class="links">
            <!-- <img src="../assets/GITHUBICON.jpg" alt="" class="github-icon">
            <img src="../assets/QQicon.jpg" alt="" class="QQ-icon"> -->
            <a href="https://github.com/orgs/Xnors/repositories" class="link-item" id="1">项目</a>
            <div class="splite-line"></div>

            <a href="https://github.com/xnors" class="link-item" id="2">Github</a>
            <div class="splite-line"></div>

            <div class="link-item" @click="Shower.showEmail()" id="3">邮箱
            </div>
            <div class="splite-line"></div>

            <!-- <a id="4" class="link-item" @click="showGroupNumber()">QQ群</a>
            <div class="splite-line"></div> -->

            <div class="link-item" @click="Shower.showQQPD()" id="5">QQ频道
            </div>

        </div>
        <!-- onclick="alert('QQ群: 731499435');" -->
    </div>
</template>

<style lang="scss" scoped>
@import url("../styles/toast.scss");

* {
    margin: 0;
    padding: 0;
    // mix-blend-mode: difference
}

a {
    text-decoration: none;
}


.showenBox {
    .copy-icon {
        height: 2.4vh;
        margin-left: calc(0.3vw + 0.3vh);
        filter: invert(1);
    }

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'deyihei';

    color: #ffffff;
    margin-top: 2vh;
    color: white;

    letter-spacing: 1px;

    font-size: 120%;

    min-height: 3.2%;
}

.links {
    margin-top: 6vh;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;

    gap: 2.2vw;
}

.link-item {
    font-family: 'deyihei';
    color: rgba($color: #fff, $alpha: 0.8);
    font-size: 3vh;
    text-align: center;

    transition: all 0.4s ease;
}

.link-item:hover {
    color: #ffffff;
    margin-left: 5vw;
    margin-right: 5vw;
    transform: scale(1.1) matrix(0.99, -0.01, -0.1, 1.12, 1, -1);
}

.splite-line {
    background-color: rgba($color: #fff, $alpha: 0.8);
    width: 0.12vw;
    height: 5vh;
}

@media screen and (max-width: 768px) {
    .link-item .splite-line:hover {
        color: #a31212;
    }

    .link-item {
        font-family: 'deyihei';
        color: rgba($color: #fff, $alpha: 0.8);
        font-size: 2.7vh;
        margin: 2vw;
    }

    .splite-line {
        background-color: rgba($color: #fff, $alpha: 0.8);
        width: 0.7vw;
        height: 3.3vh;
    }
}

.set-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background: linear-gradient(318deg, #0d1518, #0e111b, #14101f);
    background-size: 400% 400%;
    animation: gradient 12s ease infinite;
}

.logo {
    width: auto;
    height: auto;
    max-width: 50%;
    max-height: 50%;
    color: #ffffff;

    // mix-blend-mode: difference
}
</style>