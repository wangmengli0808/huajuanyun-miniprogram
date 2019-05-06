function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

export function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join("/");
  const t2 = [hour, minute, second].map(formatNumber).join(":");

  return `${t1} ${t2}`;
}

function getCurrentPageUrl() {
  const pages = getCurrentPages(); //获取加载的页面
  const currentPage = pages[pages.length - 1]; //获取当前页面的对象
  return currentPage.route; //当前页面url
}

/*获取当前页带参数的url*/
function getCurrentPageUrlWithArgs() {
  const pages = getCurrentPages(); //获取加载的页面
  const currentPage = pages[pages.length - 1]; //获取当前页面的对象
  const url = currentPage.route; //当前页面url
  const options = currentPage.options; //如果要获取url中所带的参数可以查看options

  //拼接url的参数
  let urlWithArgs = url + "?";
  for (let key in options) {
    let value = options[key];
    urlWithArgs += key + "=" + value + "&";
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);
  return urlWithArgs;
}

export default {
  formatNumber,
  formatTime,
  getCurrentPageUrl,
  getCurrentPageUrlWithArgs
};
