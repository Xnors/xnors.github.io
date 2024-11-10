<script setup>
import anime from 'animejs/lib/anime.es.js';
import { onMounted, ref } from 'vue';

let email = ref(' ');

function showEmail() {
    email.value = 'xnors-studio@outlook.com';
}

function unshowEmail() {
    email.value = ' ';
}


onMounted(() => {
    anime({
        targets: '.links',
        translateY: 500,
        opacity: 0,
        duration: 0,
    })
    // 获取元素
    var myTimeline = anime.timeline({
        // easing: 'easeOutExpo',
        duration: 0
    });

    myTimeline
        .add({
            targets: '.logo',
            opacity: [0, 1],
            translateX: [-window.innerWidth / 2, 0],
            duration: 1600,
        }, '-=500')
        .add({
            targets: '.logo',
            translateY: [0, "-4vh"],
            duration: 1000,
            easing: 'easeOutExpo'
        }, '-=600')
        .add({
            targets: ".links",
            translateY: [0, '-5.2vh'],
            opacity: 1,
            duration: 1000,
            easing: 'easeOutExpo'
        })
}
)

</script>

<template>
    <div class="set-center">
        <img id="logox" class="logo" src="../assets/svgs/CENTER-logo-name-motto.svg" alt="" />
        <div class="links">
            <!-- <img src="../assets/GITHUBICON.jpg" alt="" class="github-icon">
            <img src="../assets/QQicon.jpg" alt="" class="QQ-icon"> -->
            <a href="https://github.com/orgs/Xnors/repositories" class="link-item" id="1">项目</a>
            <div class="splite-line"></div>

            <a href="https://github.com/xnors" class="link-item" id="2">Github</a>
            <div class="splite-line"></div>

            <div class="link-item email-link" @mouseenter="showEmail()" id="3" @mouseleave="unshowEmail()">邮箱
            </div>
            <div class="splite-line"></div>

            <a class="link-item" onclick="alert('QQ群: 731499435');" id="4">QQ群</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}


.links {
    margin-top: 6vh;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;

    gap: 1.6vw;
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
    transform: scale(1.1) matrix(1, 0, -0.16, 1.02, 0, 0);
}

.splite-line {
    background-color: rgba($color: #fff, $alpha: 0.8);
    width: 0.1vw;
    height: 5vh;
}

@media screen and (max-width: 768px) {
    .link-item .splite-line:hover {
        color: #a31212;
    }

    .link-item {
        font-family: 'deyihei';
        color: rgba($color: #fff, $alpha: 0.8);
        font-size: 3.2vh;
    }

    .splite-line {
        background-color: rgba($color: #fff, $alpha: 0.8);
        width: 0.5vw;
        height: 3vh;
    }
}

.set-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}

.logo {
    width: auto;
    height: auto;
    max-width: 50%;
    max-height: 50%;
}
</style>