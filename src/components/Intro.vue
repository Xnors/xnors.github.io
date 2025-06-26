<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

let intro1 = ref(null);
let intro2 = ref(null);
let intro3 = ref(null);
let intro4 = ref(null);

onMounted(() => {
  gsap.set(intro1.value, { x: -300, opacity: 0 });
  gsap.set(intro2.value, { x: 300, opacity: 0 });
  gsap.set(intro3.value, { x: -300, opacity: 0 });
  gsap.set(intro4.value, { x: 300, opacity: 0 });

  // 监听滚动条,当超过 50vh时
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      gsap.to(intro1.value, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3 * 0.6,
      });
      gsap.to(intro2.value, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6 * 0.6,
      });
      gsap.to(intro3.value, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.9 * 0.6,
      });
      gsap.to(intro4.value, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2 * 0.6,
      });
    }
  });
});

onUnmounted(() => {
  gsap.set(intro1.value, { x: 0, opacity: 1 });
  gsap.set(intro2.value, { x: 0, opacity: 1 });
  gsap.set(intro3.value, { x: 0, opacity: 1 });
  gsap.set(intro4.value, { x: 0, opacity: 1 });

  window.removeEventListener("scroll");
});
</script>

<template>
  <div class="home">
    <article>
      <div id="i1" style="font-size: calc(5vw + 1vh)" ref="intro1">
        {{ $t("intro.i1._1")
        }}<a href="https://github.com/Xnors/">{{ $t("intro.i1._2") }}</a
        >!<br />
      </div>
      <div id="i2" style="color: #ffffffd4" ref="intro2">
        {{ $t("intro.i2") }}
      </div>
      <div id="i3" ref="intro3" style="color: #ffffffd4">{{ $t("intro.i3") }}<br /></div>
      <div ref="intro4" id="i4">
        <a
          href="https://github.com/orgs/Xnors/repositories"
          style="font-size: calc(5vw + 1.2vh)"
          class="hvr-sweep-to-right"
        >
          {{ $t("intro.i4") }}</a
        >
      </div>
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
  font-family: "deyihei", "楷体", "黑体", "微软雅黑", "Arial", "sans-serif";

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
