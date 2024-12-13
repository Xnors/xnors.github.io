<script>
  import anime from "animejs/lib/anime.es.js";
  import { onMount } from "svelte";
  import { copy } from "svelte-copy";

  let showen = "";

  function showSth(text, t) {
    console.log(text);
    let index = 0;
    function myprint() {
      if (index < text.length) {
        showen = showen + text.charAt(index);
        index++;
      } else {
        clearInterval(c); //输出完后关闭定时器
      }
    }
    showen = "";
    var c = setInterval(myprint, t); //定时器
    return c;
  }

  var cc = showSth("Hi, there! Welcome to Xnors!", 42);

  class Shower {
    static showEmail() {
      // showen = "xnors-studio@outlook.com";
      var cc = showSth("xnors-studio@outlook.com", 20);
    }

    static showQQPD() {
      // showen = "xnors-studio@outlook.com";
      var cc = showSth("pdxnorscode", 26);
    }

    static unshow() {
      var cc = showSth("Hi, there! Welcome to Xnors!", 12);
    }

    static showGroupNumber() {
      var cc = showSth("731499435", 30);
    }
  }

  function showToast() {
    var toast = document.getElementById("toast");
    toast.style.display = "flex";
    // toast.innerHTML = t;
    // toast.className = "show";
    // // setTimeout(function () {
    // //   toast.className = toast.className.replace("show", "");
    // // }, 2000);
    let animline = anime.timeline({
      targets: toast,
      //   duration: 1000,
      easing: "easeOutExpo",
    });
    animline
      .add({
        opacity: [0, 1],
        scale: [0.1, 1],
        duration: 600,
      })
      .add({
        opacity: 0,
        scale: 0.1,
        duration: 500,
        delay: 600,
      });
  }

  //   function copy() {
  //     // 复制showen的值到剪切板

  //     if (showen == "Hi, there! Welcome to Xnors!") {
  //       showToast("(✿◡‿◡) 别点我 (*/ω＼*)");
  //       return;
  //     }

  //     copyText(showen, undefined, (error) => {
  //       if (error) {
  //         showToast(`!复制失败: ${error}!`);
  //       } else {
  //         showToast(`复制成功`);
  //       }
  //     });
  //     Shower.unshow();
  //   }

  onMount(() => {
    const delay = 500;

    anime({
      targets: ".links",
      translateY: 500,
      opacity: 0,
      duration: 0,
    });
    // 获取元素
    var myTimeline = anime.timeline({
      // easing: 'easeOutExpo',
      duration: 0,
      loop: false,
    });

    myTimeline
      .add(
        {
          targets: ".logo",
          opacity: [0, 1],
          translateY: ["100vh", 0],
          duration: 2000,
        },
        "-=500"
      )
      .add(
        {
          targets: ".links",
          translateY: ["60vh", 0],
          opacity: [0, 1],
          scale: [0.1, 1],
          duration: 1000,
          easing: "easeOutExpo",
        },
        "-=1000"
      )
      .add(
        {
          targets: ".showenBox",
          opacity: [0, 0.9],
          duration: 6000,
          easing: "easeOutExpo",
        },
        "-=3000"
      );
  });
</script>

<div>
  <div class="set-center">
    <div id="toast" class="toast">复制成功!</div>
    <img id="logox" class="logo" src="../assets/xlogo.svg" alt="" />
    <div class="showenBox">
      {showen}
      <button use:copy={"Hello from alert"} on:click={() => showToast()}
        ><img src="..\assets\copy-icon.svg" class="copy-icon" alt="" /></button
      >
    </div>
    <div class="links">
      <!-- <img src="../assets/GITHUBICON.jpg" alt="" class="github-icon">
            <img src="../assets/QQicon.jpg" alt="" class="QQ-icon"> -->
      <a
        href="https://github.com/orgs/Xnors/repositories"
        class="link-item"
        id="1">项目</a
      >
      <div class="splite-line"></div>
      <a href="https://xnors.github.io/docs" class="link-item" id="2">文档</a>
      <div class="splite-line"></div>

      <a href="https://github.com/xnors" class="link-item" id="2">Github</a>
      <div class="splite-line"></div>

      <button class="link-item" on:click={Shower.showEmail} id="3">邮箱</button>
      <div class="splite-line"></div>

      <!-- <a id="4" class="link-item" on:click={showGroupNumber">QQ群</a>
            <div class="splite-line"></div> -->

      <button class="link-item" on:click={Shower.showQQPD} id="5">QQ频道</button
      >
    </div>
    <!-- onclick="alert('QQ群: 731499435');" -->
  </div>
</div>

<style lang="scss">
  .toast {
    position: fixed;
    top: 2vh;
    color: #ffffff;

    backdrop-filter: blur(6px);
    background-image: linear-gradient(135deg, #08081a48, #4b192948);
    z-index: 1000;
    width: calc(20vw + 14vh);
    height: calc(2vh + 3vw);

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "deyihei";
    font-size: 1.29rem;
    letter-spacing: 2px;

    border: 2px solid;
    border-image: linear-gradient(to bottom, #463caf, #9b3959) 1;
    border-radius: 6%;

    display: none;
  }
  @media screen and (max-width: 768px) {
    .toast {
      font-size: 0.8rem;
    }
  }
  * {
    margin: 0;
    padding: 0;
    // mix-blend-mode: difference
  }

  a {
    text-decoration: none;
  }

  button {
    // 无样式,取消按钮样式
    /* 去掉默认边框 */
    border: none;
    outline: none;
    /* 去掉默认背景 */
    background-color: transparent;
    cursor: pointer;
  }

  .showenBox {
    .copy-icon {
      height: 2.4vh;
      margin-left: calc(0.3vw + 0.3vh);
      filter: invert(1);
    }
    .copy-icon:hover {
      filter: invert(0.5);
    }

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "deyihei";

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

    gap: 2.3vw;

    flex-wrap: wrap;
  }

  .link-item {
    font-family: "deyihei";
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
    width: 0.16vw;
    height: 5vh;
  }

  @media screen and (max-width: 768px) {
    .links {
      margin-top: 6vh;

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      width: auto;

      gap: 1.8vw;

      flex-wrap: wrap;
    }
    .link-item .splite-line:hover {
      color: #a31212;
    }

    .link-item {
      font-family: "deyihei";
      color: rgba($color: #fff, $alpha: 0.8);
      font-size: 2.2vh;
      margin: 2vw;
      white-space: nowrap;
    }

    .splite-line {
      background-color: rgba($color: #fff, $alpha: 0.8);
      width: 0.8vw;
      height: 3.3vh;
    }
  }

  .set-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

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
