import apiClient from "./client";
import axios from "axios"; // 确保 axios 被正确导入

/**
 * 刷新访问令牌。
 * 如果刷新令牌不存在, 则返回 false。
 * 如果刷新成功，存储新的访问令牌。
 * @returns {Promise<boolean>} 是否刷新成功。
 */
async function refreshAccessToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        // redirectToLogin();
        return false;
    }

    try {
        const response = await axios.post('https://127.0.0.1:8000/api/token/refresh/', { refresh: refreshToken });
        localStorage.setItem('accessToken', response.data.access);
        return true;
    } catch (error) {
        console.error('刷新 Token 失败', error);
        clearAuthData();
        // redirectToLogin();
        return false;
    }
}

/**
 * 清除本地存储中的认证数据。
 * 删除访问令牌和刷新令牌。
 */
function clearAuthData() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}

/**
 * 检查用户的登录状态。
 * 如果访问令牌不存在或无效，尝试刷新令牌。
 * 如果刷新失败或用户未登录, 返回false
 * @returns {Promise<boolean>} 用户是否已登录。
 */
const checkLoginStatus = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        // redirectToLogin();
        return false;
    }

    try {
        const response = await apiClient.get('/islogin/');
        console.log("+++++++++++++++++++++++++++"+response.data);  
        if (response.data.is_login) {
            return true;
        } else {
            clearAuthData();
            return false;
        }
    } catch (error) {
        console.error('登录状态检查失败', error);
        const refreshed = await refreshAccessToken();
        if (refreshed) {
            return await checkLoginStatus(); // 重新检查登录状态
        }
        return false;
    }
};

export { checkLoginStatus };