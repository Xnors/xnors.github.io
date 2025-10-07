<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '../scripts/client.js';

const errorMsg = ref("");
const successMsg = ref(""); // 新增成功消息状态
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const router = useRouter(); // 使用 Vue Router

const checkPasswdCanBeUsed = () => {
    /**
     * 最少包含8个字符
     * 不能全是数字或字母
     */
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password.value);
}

const checkEmailCanBeUser = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.value);
}

const submit = () => {
    if (password.value !== confirmPassword.value) {
        errorMsg.value = "两次输入的密码不一致";
        successMsg.value = ""; // 清空成功消息
        return;
    }

    if (!checkPasswdCanBeUsed(password.value)) {
        errorMsg.value = "密码长度最小为8位且必须包含数字和字母"
        return
    }

    if (!checkEmailCanBeUser(email.value)) {
        errorMsg.value = "请输入有效的邮箱地址"
        return
    }

    const data2post = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    apiClient.post('signup/', data2post)
        .then(response => {
            errorMsg.value = ""; // 清空错误信息
            if (response.status === 200) {
                successMsg.value = "注册成功！即将跳转到登录页面..."; // 显示成功消息
                setTimeout(() => {
                    router.push('/login'); // 跳转到 login 路由
                }, 1000);
            }
            else {
                errorMsg.value = response.data.error || '注册失败';
            }
        })
        .catch(error => {
            if (error.response && error.response.status != 200) {
                errorMsg.value = error.response.data.error || '注册失败';
            } else {
                errorMsg.value = "啊?"
            }
            successMsg.value = ""; // 清空成功消息
        });
};
</script>

<template>
    <div class="signup-container">
        <div class="background">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="circle circle3"></div>
        </div>
        <div class="form-card">
            <h2 class="form-title">注册</h2>

            <!-- 错误提示框 -->
            <div v-if="errorMsg" class="error-box">
                {{ errorMsg }}
            </div>

            <!-- 成功提示框 -->
            <div v-if="successMsg" class="success-box">
                {{ successMsg }}
            </div>

            <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" id="username" v-model="username" placeholder="请输入用户名" />
            </div>
            <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" id="email" v-model="email" placeholder="请输入邮箱" />
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" id="password" v-model="password" placeholder="请输入密码" />
            </div>
            <div class="form-group">
                <label for="confirmPassword">确认密码</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="请再次输入密码" />
            </div>
            <button @click="submit" class="btn-primary">注册</button>

            <p class="link-text">已有账号? <a @click="() => router.push('/login')">点击登录</a></p>
        </div>
    </div>
</template>

<style scoped>
.error-box {
    background-color: rgba(255, 0, 0, 0.1);
    color: #ff4d4f;
    border: 1px solid #ff4d4f;
    border-radius: 8px;
    padding: 0.75rem;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 0.9rem;
}

.success-box {
    background-color: rgba(0, 255, 0, 0.1);
    color: #52c41a;
    border: 1px solid #52c41a;
    border-radius: 8px;
    padding: 0.75rem;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 0.9rem;
}

.signup-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: float 5s infinite ease-in-out;
}

.circle1 {
    width: 300px;
    height: 300px;
    background-image: linear-gradient(138deg, rgba(106, 218, 255, 0.2), rgba(153, 102, 255, 0.2));
    top: 16%;
    left: 12%;
    animation-delay: 0s;
}

.circle2 {
    width: 400px;
    height: 400px;
    background-image: linear-gradient(315deg, rgba(112, 255, 219, 0.3), rgba(93, 169, 255, 0.4));

    top: 40%;
    left: 70%;
    animation-delay: 2s;
}

.circle3 {
    width: 250px;
    height: 250px;
    background-image: linear-gradient(214deg, rgba(93, 104, 255, 0.3), rgba(255, 100, 146, 0.4));

    /* 更淡的蓝色 */
    top: 70%;
    left: 30%;
    animation-delay: 4s;
}

@keyframes float {
    0% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-20px) scale(1.1);
    }

    100% {
        transform: translateY(0) scale(1);
    }
}

.form-card {
    background: rgba(30, 30, 30, 0.3);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
    padding: 2rem;
    max-width: 400px;
    width: 100%;
    text-align: center;
    animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.form-title {
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1rem;
    text-align: left;
}

label {
    display: block;
    font-size: 0.9rem;
    color: #bbbbbb;
    margin-bottom: 0.5rem;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #444444;
    border-radius: 8px;
    font-size: 1rem;
    background: #222222;
    color: #ffffff;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
    border-color: #b575ff2c;
    outline: none;
    box-shadow: 0 0 8px rgba(117, 149, 255, 0.5);
}

.btn-primary {
    background-color: #ef75ff17;
    color: #ffffff;
    border: 2px solid #ef75ff31;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    width: 100%;
}

.btn-primary:hover {
    background-color: #c45eff69;
    transform: scale(1.05);
}

.btn-primary:active {
    background-color: #f93eff71;
}

.btn-primary:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(147, 117, 255, 0.5);
}

.link-text {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #bbbbbb;
}

.link-text a {
    color: #ffffff;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.3s ease;
}

.link-text a:hover {
    color: #ef75ff;
}
</style>