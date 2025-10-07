import apiClient from "./client";


/**
 * 刷新访问令牌。
 * 如果刷新令牌不存在, 则返回 false。
 * 如果刷新成功，存储新的访问令牌。
 * @returns {Promise<boolean>} 是否刷新成功。
 */
async function refreshAccessToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        return false;
    }

    try {
        // 使用apiClient而不是直接使用axios，确保基础URL一致
        const response = await apiClient.post('/token/refresh/', { refresh: refreshToken });
        if (response.data.access) {
            localStorage.setItem('accessToken', response.data.access);
            return true;
        }
        return false;
    } catch (error) {
        console.error('刷新 Token 失败', error);
        clearAuthData();
        return false;
    }
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
        return false;
    }

    try {
        const response = await apiClient.get('/islogin/');
        return response.data.is_login === true;
    } catch (error) {
        console.error('登录状态检查失败', error);

        // 如果是401错误，尝试刷新token
        if (error.response && error.response.status === 401) {
            const refreshed = await refreshAccessToken();
            if (refreshed) {
                // 使用新的token重新检查登录状态
                try {
                    const response = await apiClient.get('/islogin/');
                    return response.data.is_login === true;
                } catch (retryError) {
                    console.error('重试登录状态检查失败', retryError);
                    clearAuthData();
                    return false;
                }
            }
        }

        clearAuthData();
        return false;
    }
};

export { checkLoginStatus }