<template>
    
    <!-- 服务区 -->
    <section class="services" id="services">
      <div class="container">
        <h2 class="section-title fade-in">我们的服务</h2>
        <div class="services-grid">
          <div class="service-detail-card fade-in">
            <div class="service-detail-icon">🕷️</div>
            <h3>爬虫开发</h3>
            <p>
              定制化爬虫解决方案，支持反爬虫策略，高效稳定地采集各类网站数据。
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">Scrapy</span>
              <span class="tech-tag">Selenium</span>
            </div>
          </div>
          <div class="service-detail-card fade-in">
            <div class="service-detail-icon">📊</div>
            <h3>数据分析</h3>
            <p>从原始数据中提取有价值的信息，提供可视化报告和决策支持。</p>
            <div class="tech-tags">
              <span class="tech-tag">Pandas</span>
              <span class="tech-tag">NumPy</span>
              <span class="tech-tag">Matplotlib</span>
            </div>
          </div>
          <div class="service-detail-card fade-in">
            <div class="service-detail-icon">🌐</div>
            <h3>网页制作</h3>
            <p>响应式网站设计，注重用户体验，打造现代化的网络形象。</p>
            <div class="tech-tags">
              <span class="tech-tag">HTML5</span>
              <span class="tech-tag">CSS3</span>
              <span class="tech-tag">JavaScript</span>
            </div>
          </div>
          <div class="service-detail-card fade-in">
            <div class="service-detail-icon">⚙️</div>
            <h3>后端开发</h3>
            <p>构建高性能、可扩展的服务器架构，确保系统稳定运行。</p>
            <div class="tech-tags">
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Django</span>
              <span class="tech-tag">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<style>
/* 服务区 */
.services {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg,
      var(--accent-primary),
      var(--accent-secondary));
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-detail-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.service-detail-card:hover {
  transform: scale(1.02);
  border-color: var(--accent-primary);
}

.service-detail-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg,
      var(--accent-primary),
      var(--accent-secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  font-family: "Courier New", monospace;
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--accent-primary);
}
</style>