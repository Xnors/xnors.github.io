function cookieExists(name) {
    var cookies = document.cookie.split("; ");
    console.log(cookies);
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] == name) {
            return true;
        }
    }
    return false;
}


function logined() {
    // 检查Cookie
    var user = cookieExists("sid");
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