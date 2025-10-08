<script setup>
import "sober"
</script>


<template>

  <!-- 团队区 -->
  <section class="team" id="team">
    <div class="container">
      <h2 class="section-title fade-in">我们的团队</h2>
      <div class="team-grid">
        <s-ripple class="team-member fade-in">
          <div class="member-avatar">
            <img src="../assets/imgs/fexcode.jpg" alt="Fexcode" width="100" height="100" />
          </div>
          <h3 class="member-name">Fexcode</h3>
          <p class="member-role">爬虫数据收集与数据分析员/后端工程师</p>
          <div class="social-links">
            <a href="#" class="social-link">📧</a>
            <a href="#" class="social-link">💼</a>
          </div>
        </s-ripple>
        <s-ripple class="team-member fade-in">
          <div class="member-avatar">
            <img src="../assets/imgs/skymaozi.jpg" alt="SkyMaoZi" width="100" height="100" />
          </div>
          <h3 class="member-name">SkyMaoZi</h3>
          <p class="member-role">全栈工程师</p>
          <div class="social-links">
            <a href="#" class="social-link">📧</a>
            <a href="#" class="social-link">💼</a>
          </div>
        </s-ripple>
        <s-ripple class="team-member fade-in">
          <div class="member-avatar">
            <img src="../assets/imgs/codeseed.jpg" alt="CodeSeed" width="100" height="100" />
          </div>
          <h3 class="member-name">CodeSeed</h3>
          <p class="member-role">测试工程师</p>
          <div class="social-links">
            <a href="#" class="social-link">📧</a>
            <a href="#" class="social-link">💼</a>
          </div>
        </s-ripple>
        <s-ripple class="team-member fade-in">
          <div class="member-avatar">
            <img src="../assets/imgs/xmtm.jpg" alt="xm" width="100" height="100" />
          </div>
          <h3 class="member-name">xm</h3>
          <p class="member-role">爬虫与数据分析员</p>
          <div class="social-links">
            <a href="#" class="social-link">📧</a>
            <a href="#" class="social-link">💼</a>
          </div>
        </s-ripple>
        <s-ripple class="team-member fade-in">
          <div class="member-avatar">
            <img src="../assets/imgs/Justwoofus.jpg" alt="Justthewoofus" width="100" height="100" />
          </div>
          <h3 class="member-name">Justthewoofus</h3>
          <p class="member-role">底层开发工程师</p>
          <div class="social-links">

            <router-link to="justwoofus" class="social-link">📧</router-link>
            <router-link to="justwoofus" class="social-link">💼</router-link>
          </div>
        </s-ripple>
        <s-ripple class="team-member fade-in">
          <div class="member-avatar">
            <img src="../assets/imgs/Narci.jpg" alt="Narci" width="100" height="100" />
          </div>
          <h3 class="member-name">Narci</h3>
          <p class="member-role">后端工程师</p>
          <div class="social-links">
            <a href="#" class="social-link">📧</a>
            <a href="#" class="social-link">💼</a>
          </div>
        </s-ripple>
        <s-ripple class="team-member fade-in">
          <div class="member-avatar">
            <img src="../assets/imgs/baichuanbyte.jpg" alt="BaiChuanByte" width="100" height="100" />
          </div>
          <h3 class="member-name">BaiChuanByte</h3>
          <p class="member-role">室长/策划/吉祥物</p>
          <div class="social-links">
            <a href="#" class="social-link">📧</a>
            <a href="#" class="social-link">💼</a>
          </div>
        </s-ripple>
      </div>
    </div>
  </section>

</template>

<style>
/* 团队区 */
.team {
  padding: 5rem 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-member {
  text-align: center;
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  border-color: var(--accent-primary);
}

.member-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg,
      var(--accent-primary),
      var(--accent-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}

.member-avatar>img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  /* 保持比例，裁剪多余部分 */
  border: 2px solid #cccccccc;
}

.member-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.member-role {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
}
</style>