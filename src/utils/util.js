// 封装
import Http from './http'
// export function get(url, data) {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: config.host + url,
//             data: data,
//             success(res) {
//                 if (res.data.code == 1) {
//                     resolve(res.data.data)
//                 } else {
//                     reject(res.data)
//                 }
//             },
//             fail(ret) {
//                 reject(ret)
//             }
//         });
//     })
// }

export function getUser() {
    return new Promise((resolve, reject) => {
        Http.POST({
            url: Http.API_URL.UserIDEX,
        }).then((res) => {
            resolve(res.data)
        })
    })
}

export function hexToRgba(hex, al) {
    var hexColor = /^#/.test(hex) ? hex.slice(1) : hex,
        alp = hex === "transparent" ? 0 : al,
        r,
        g,
        b;
    hexColor = /^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(hexColor)
        ? hexColor
        : "fffff";
    if (hexColor.length === 3) {
        hexColor = hexColor.replace(/(\w)(\w)(\w)/gi, "$1$1$2$2$3$3");
    }
    r = hexColor.slice(0, 2);
    g = hexColor.slice(2, 4);
    b = hexColor.slice(4, 6);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    return {
        hex: "#" + hexColor,
        rgba: "rgba(" + r + ", " + g + ", " + b + ", " + alp + ")"
    };
}

export function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: 'success'
    })
}