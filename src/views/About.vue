<template>
  <div class="a">
    <div class="left">
      <h1>简介</h1>
      <p>
        Xonrs工作室于2024年8月8日成立，致力于在IT领域探索无限可能。我们以技术先进、充满活力和极客精神为核心特点，致力于为我们的客户提供最前沿的软件解决方案。<!-- <br /> -->
        展望未来，紧握未来，塑造未来 ——<!-- <br /> -->
        这不仅是口号，更是我们的行动指南。我们相信，通过不懈的努力和创新，我们可以共同创造一个更加美好的数字世界。<!-- <br /> -->
      </p>
    </div>

    <div class="right">
      <h1>我们的特点</h1>

      <h3>活力与创新</h3>

      <p>
        我们是一支充满活力的团队，始终站在技术的前沿。我们使用先进、现代化的技术栈，确保我们的解决方案既能满足当前需求，也能适应未来的挑战。<!-- <br /> -->
      </p>
      <h3>专业与保障</h3>
      <p>
        专业性是我们的承诺。我们的团队成员拥有丰富的行业经验和技术专长，为客户提供专业、可靠的服务。我们致力于成为您值得信赖的IT合作伙伴。<!-- <br /> -->
      </p>
      <!--     <h3>性价比</h3>
    <p>
      我们追求性价比的最大化。通过精准的需求分析和高效的项目管理，我们确保用最少的投入为您带来最大的商业价值。
    </p> -->
    </div>

    <div class="left2">
      <h1>联系方式</h1>
      <p>
        无论您是想探讨项目合作，还是对技术有疑问，我们都非常乐意与您交流。请通过以下方式与我们取得联系：<!-- <br /> -->
      </p>
    </div>


    <div class="contact">
      <li>QQ: 731499435</li>
      <li>
        邮箱：<a href="mailto:xnors-studio@outlook.com">xnors-studio@outlook.com</a>
      </li>
      <li>
        Github：<a href="https://github.com/xnors">https://github.com/xnors</a>
      </li>

      <li>
        反馈:
        <a href="mailto:xnors-studio@outlook.com?subject=反馈&body=请写下您的反馈内容">发送反馈</a>
      </li>
    </div>

  </div>

  <Projects />
</template>

<script>
import Projects from "./Projects.vue";
/* 导出组件 */
export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    Projects,
  },
};
</script>

<style type="text/css">
@import "../styles/about.scss";
</style>
