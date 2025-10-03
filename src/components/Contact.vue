<template>
    
    <!-- 联系区 -->
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="section-title fade-in">联系我们</h2>
        <div class="contact-methods">
          <div class="contact-method fade-in">
            <div
              class="contact-icon"
              onclick="copyToClipboard('xnors-studio@outlook.com', '邮箱已复制到剪贴板:\nxnors-studio@outlook.com')"
            >
              📧
            </div>
            <p class="contact-label">邮箱联系</p>
          </div>
          <div class="contact-method fade-in">
            <div
              class="contact-icon"
              onclick="window.open('https://github.com/xnors', '_blank')"
            >
              💻
            </div>
            <p class="contact-label">GitHub</p>
          </div>
          <div class="contact-method fade-in">
            <div
              class="contact-icon"
              onclick="copyToClipboard('2734664632', 'QQ号已复制到剪贴板:\n2734664632')"
            >
              💬
            </div>
            <p class="contact-label">QQ</p>
          </div>
        </div>
      </div>
    </section>

</template>

<style>
/* 联系区 */
.contact {
  padding: 5rem 0;
  background: var(--bg-secondary);
  text-align: center;
}

.contact-methods {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.contact-method {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg,
      var(--accent-primary),
      var(--accent-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

.contact-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 30px var(--hover-glow);
}

.contact-label {
  color: var(--text-secondary);
}
</style>