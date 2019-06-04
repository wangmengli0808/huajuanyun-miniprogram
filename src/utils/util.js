// 封装
import Http from "./http";

// 获取个人信息
export function getUser() {
    return new Promise((resolve, reject) => {
        Http.POST({
            url: Http.API_URL.UserIDEX
        }).then(res => {
            if (res.code == 1) {
                resolve(res.data);
            } else {
                wx.showToast({
                    title: res.msg,
                    icon: "none",
                    duration: 1000
                });
            }
        });
    });
}

// 判断手机号是否绑定
export function bindmobile() {
    const bindmobile = wx.getStorageSync("app").small_bindmobile_switch;
    if (bindmobile == 1) {
        const userIndex = wx.getStorageSync("userIndex");
        if (userIndex && !userIndex.mobile || !userIndex) {
            getUser().then(res => {
                wx.setStorage({
                    key: "isBindmobile",
                    data: res.mobile ? 1 : 0,
                    success() {
                        wx.navigateTo({
                            url: '../userfiles/bindmobile/main'
                        });
                    }
                })
            });
        }
    }
}

// 获取小程序相关信息
export function getApp() {
    Http.POST({
        url: Http.API_URL.MINIINFO
    }).then(res => {
        if (res.code === 1) {
            wx.setStorage({
                key: "app",
                data: res.data
            });
        } else {
            wx.showToast({
                title: res.msg,
                icon: "none",
                duration: 2000
            });
        }
    });
}

// 授权登录
export function getUserInfo() {
    wx.login({
        success: function (res1) {
            wx.getUserInfo({
                success(res2) {
                    Http.GET({
                        url: Http.API_URL.WXLOGIN,
                        data: {
                            code: res1.code,
                            signature: res2.signature,
                            rawData: res2.rawData,
                            iv: res2.iv,
                            encryptedData: res2.encryptedData,
                            invite_code: wx.getStorageSync('invite_code')
                        }
                    }).then(res => {
                        wx.hideLoading();
                        if (res.code == 1) {
                            wx.setStorageSync("phpUserinfo", res.data.userinfo);
                            if (res.data.token) {
                                wx.setStorageSync("token", res.data);
                                wx.showToast({
                                    title: "授权成功",
                                    icon: "none",
                                    duration: 1000
                                });
                                // 判断后台是否要求绑定手机号
                                const bindmobile = wx.getStorageSync('app').small_bindmobile_switch;
                                if (bindmobile == 1) {
                                    getUser().then((response) => {
                                        wx.setStorageSync("userIndex", response);
                                        wx.setStorage({
                                            key: "isBindmobile",
                                            data: response.mobile ? 1 : 0,
                                            success() {
                                                wx.navigateBack();
                                            }
                                        })
                                    });
                                } else {
                                    setTimeout(() => {
                                        wx.navigateBack();
                                    }, 1000)
                                }
                            } else {
                                wx.showToast({
                                    title: "无token信息",
                                    icon: "none",
                                    duration: 1000
                                });
                            }
                        } else {
                            wx.showToast({
                                title: res.msg,
                                icon: "none",
                                duration: 1000
                            });
                        }
                    });
                }
            });
        }
    });
}

// 绑定手机号
export function getBindMobile(code, info) {
    let phpUserinfo = JSON.stringify(wx.getStorageSync("phpUserinfo"));
    Http.POST({
        url: Http.API_URL.WXBINGDMOBILE,
        data: {
            code: code,
            userinfo: phpUserinfo,
            encryptedData: info.encryptedData,
            iv: info.iv
        }
    }).then(res => {
        if (res.code === 1) {
            wx.setStorage({
                key: "token",
                data: res.data.userinfo,
                success() {
                    wx.setStorage({
                        key: "isBindmobile",
                        data: 1,
                        success() {
                            wx.showToast({
                                title: "绑定成功",
                                icon: "none",
                                duration: 1000
                            });
                            setTimeout(() => {
                                wx.navigateBack();
                            }, 1000);
                        }
                    });
                }
            });
        } else {
            wx.showToast({
                title: res.msg,
                icon: "none",
                duration: 2000
            });
        }
    });
}

// 获取京东信息
export function getJdList(opt_id, page) {
    return new Promise((resolve, reject) => {
        Http.POST({
            url: Http.API_URL.JdList,
            data: {
                sort_type: 0,
                opt_id: opt_id,
                page: page
            }
        }).then(res => {
            if (res.code === 1) {
                resolve(res.data);
            } else {
                reject(res);
            }
        });
    });
}

export function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: "none",
        duration: 2000
    });
}

// 色值转rgba格式
export function hexToRgba(hex, al) {
    var hexColor = /^#/.test(hex) ? hex.slice(1) : hex,
        alp = hex === "transparent" ? 0 : al,
        r,
        g,
        b;
    hexColor = /^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(hexColor) ? hexColor : "fffff";
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
