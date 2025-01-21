<template>
    <div class="home">
        <article>
            <div style="font-size: calc(4.8vw + 0.9vh);">Hi! 这里是 <a href="https://github.com/Xnors/">异或科技工作室 !</a><br>
            </div>
            <div style="color: #ffffffe4;">我们是一个充满活力的技术开发工作室</div>
            <div>致力于制作一些<br></div>
            <a href="https://github.com/orgs/Xnors/repositories" style="font-size: calc(3.9vw + 1.5vh); "
                class="hvr-sweep-to-right">
                “有趣的东西”</a>
        </article>
    </div>
</template>

<style scoped>
.home {
    background-color: rgb(12, 12, 14);
    width: 100%;
    height: 100vh;
    padding: calc(1.2vw + 1.3vh);

    display: flex;
    justify-content: center;
    align-items: center;
}

article {
    font-family: deyihei;

    text-align: center;

    font-size: calc(2.2vw + 1.1vh);

    transition: all 0.3s ease-in-out;
}

a {
    color: #b2b4ff;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #d4b2ff;
    }

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: max(0.2vw, 0.2vh);
        background-color: #e4e4e4;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }
    &:hover::before {
        transform: scaleX(1);
    }
}
</style>
