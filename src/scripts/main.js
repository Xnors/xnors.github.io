function logined() {
    // 检查Cookie
    var user = getCookie("sessionid");
    if (user) {
        // 已登录
        console.log("已登录");
        return true;
    } else {
        // 未登录
        console.log("未登录");
        return false;
    }
}

export default logined;