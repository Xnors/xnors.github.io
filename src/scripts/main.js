function cookieExists(name) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        console.log(cookie);
        if (cookie[0] == name) {
            return true;
        }
    }
    return false;
}
import authClient from './client'

async function logined() {
    try {
        const res = await authClient.get('islogined');
        return Boolean(res.data?.data?.islogined);
    } catch {
        return false;
    }
}

export default logined;