<script setup>
import anime from 'animejs/lib/anime.es.js';
import { onMounted } from 'vue';


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
            targets: '.name',
            opacity: [0, 1],
            translateY: [-window.innerHeight / 2, 0],
            duration: 1000,
            // easing: 'linear'
        })
        .add({
            targets: '.logo',
            opacity: [0, 1],
            translateX: [-window.innerWidth / 2, 0],
            duration: 1000,
        }, '-=500')
        .add({
            targets: '.logo',
            translateY: [0, "-4vh"],
            duration: 1000,
            easing: 'easeOutExpo'
        }, '-=200')
        .add({
            targets: '.links',
            opacity: [0, 1],
            translateY: [window.innerHeight / 2, "-4vh"],
            duration: 1000,
        }, '-=800')
})

// anime({
//   targets: '.logo',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 2000,
//   direction: 'alternate'
// });



</script>

<template>
    <div class="set-center">
        <div class="name">
            <p>Xnors</p>
        </div>
        <img id="logox" class="logo" src="../assets/svgs/CENTER-logo-name-motto.svg" alt="" />
        <div class="links">
            <!-- <img src="../assets/GITHUBICON.jpg" alt="" class="github-icon">
            <img src="../assets/QQicon.jpg" alt="" class="QQ-icon"> -->
            <a href="https://github.com/orgs/Xnors/repositories" class="link-item" id="1">项目</a>
            <div class="splite-line"></div>

            <a href="https://github.com/xnors" class="link-item" id="2">Github</a>
            <div class="splite-line"></div>

            <div class="link-item email-link" onclick="alert('邮箱: xnors-studio@outlook.com');" id="3">邮箱</div>
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
    margin-top: 5vh;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;

    gap: 1vw;
}

.link-item {
    font-family: 'deyihei';
    color: rgba($color: #fff, $alpha: 0.8);
    font-size: 3vh;
}

.link-item:hover {
    color: #ffffff;
    box-shadow: #fff 0 0 8vw;
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
        font-size: 2vh;
    }

    .splite-line {
        background-color: rgba($color: #fff, $alpha: 0.8);
        width: 0.1vw;
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

.name {
    font-family: 'deyihei';
    position: absolute;

    text-align: center;
    color: rgba($color: #fff, $alpha: 0.04);
    font-size: 48vw;

    user-select: none;

    max-width: 100%;
}
</style>