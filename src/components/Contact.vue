<template>
  <!-- 联系区 -->
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title fade-in">联系我们</h2>

      <!-- 留言板区域 -->
      <div class="message-board fade-in">
        <div class="message-input-container">
          <textarea v-model="newMessage" class="message-input" placeholder="输入你的留言 (10-127个字符)"
            maxlength="127"></textarea>
          <div class="message-input-footer">
            <span class="char-count">{{ newMessage.length }}/127</span>
            <button @click="submitMessage" class="submit-btn"
              :disabled="isSubmitting || newMessage.length <= 10 || newMessage.length > 127">
              {{ isSubmitting ? '提交中...' : '提交留言' }}
            </button>
          </div>
        </div>

        <!-- 留言展示区域 -->
        <div class="messages-container">
          <div v-for="message in messages" :key="message.id" class="message-item"
            :class="{ 'own-message': message.is_own }">
            <div class="message-content">
              <span class="message-author">{{ message.username }}:</span>
              {{ message.content }}
            </div>
            <button v-if="message.is_own" @click="deleteMessage(message.id)" class="delete-btn">
              ×
            </button>
          </div>
        </div>
      </div>

      <div class="contact-methods">
        <div class="contact-method fade-in">
          <div class="contact-icon"
            onclick="copyToClipboard('xnors-studio@outlook.com', '邮箱已复制到剪贴板:\nxnors-studio@outlook.com')">
            📧
          </div>
          <p class="contact-label">邮箱联系</p>
        </div>
        <div class="contact-method fade-in">
          <div class="contact-icon" onclick="window.open('https://github.com/xnors', '_blank')">
            💻
          </div>
          <p class="contact-label">GitHub</p>
        </div>
        <div class="contact-method fade-in">
          <div class="contact-icon" onclick="copyToClipboard('2734664632', 'QQ号已复制到剪贴板:\n2734664632')">
            💬
          </div>
          <p class="contact-label">QQ</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import apiClient from '../scripts/client.js';
import { onMounted, ref } from "vue"

// 响应式状态
const newMessage = ref('');
const messages = ref([]);
const isSubmitting = ref(false);

// 获取留言数据
const fetchMessages = async () => {
  try {
    // 使用导入的apiClient，不需要再手动添加Authorization头
    const response = await apiClient.get('/messagebord/');

    if (response.data) {
      // 假设返回的数据包含用户信息和留言列表
      // 这里需要根据实际API返回的数据结构进行调整
      messages.value = response.data.messages || [];
    }
  } catch (error) {
    console.error('获取留言失败:', error);
  }
};

// 提交留言
const submitMessage = async () => {
  if (newMessage.value.length <= 10 || newMessage.value.length > 127) {
    alert('留言内容长度必须在10到127个字符之间');
    return;
  }

  isSubmitting.value = true;
  try {
    // 使用导入的apiClient
    const response = await apiClient.post('/messagebord/', {
      content: newMessage.value
    });

    if (response.data) {
      // 提交成功后清空输入框并刷新留言列表
      newMessage.value = '';
      fetchMessages();
    }
  } catch (error) {
    console.error('提交留言失败:', error);
    alert(error.response?.data?.error || '提交留言失败，请稍后重试');
  } finally {
    isSubmitting.value = false;
  }
};

// 删除留言
const deleteMessage = async (messageId) => {
  if (!confirm('确定要删除这条留言吗？')) {
    return;
  }

  try {
    // 使用导入的apiClient
    const response = await apiClient.delete('/messagebord/', {
      data: { user_message_id: messageId }  // 注意：DELETE请求通常使用data而不是params
    });

    if (response.data) {
      // 删除成功后刷新留言列表
      fetchMessages();
    }
  } catch (error) {
    console.error('删除留言失败:', error);
    alert('删除留言失败，请稍后重试');
  }
};

onMounted(() => {
  fetchMessages()
  setInterval(fetchMessages, 5000);  // 每5秒刷新一次留言列表
})
</script>

<style>
/* 联系区 */
.contact {
  padding: 5rem 0;
  background: var(--bg-secondary);
  text-align: center;
}

/* 留言板样式 */
.message-board {
  margin: 2rem auto;
  max-width: 800px;
  text-align: left;
}

.message-input-container {
  background: var(--bg-primary);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.message-input {
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-family: inherit;
  resize: vertical;
}

.message-input-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.char-count {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.submit-btn {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.messages-container {
  max-height: 400px;
  overflow-y: auto;
  background: var(--bg-primary);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.message-item {
  position: relative;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 4px;
  background: var(--bg-secondary);
  animation: slideIn 0.3s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.own-message {
  background: rgba(var(--accent-primary-rgb), 0.1);
  border-left: 3px solid var(--accent-primary);
}

.message-content {
  flex: 1;
}

.message-author {
  font-weight: bold;
  color: var(--accent-primary);
  margin-right: 0.5rem;
}

.delete-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0 0.5rem;
  transition: color 0.3s ease;
}

.delete-btn:hover {
  color: var(--danger-color);
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

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
