var codes2msgmap = {
    114514: "成功!",
    1001: "用户已存在",
    1002: "用户不存在",
    1003: "用户名或密码错误"
}


/**
 * @param {number} code 错误码
 * @returns {string} 错误信息
 */
function codes2msg(code) {
    return codes2msgmap[code] || `未知错误:${code}`;
}

export default codes2msg;
