import fly from './fly'
import qs from 'qs'

const Http = {
	APPKEY: '',
	APPID: '',
	API_URL: {
		'MINIINFO':'/api/wechat/wxSmallSetting',//小程序相关信 息
		'JdList': '/api/goods/JdList',
		'PddList': '/api/goods/PddList', //首页商品 拼多多
		'INDEX': '/api/wechat/wxSmallRoutine', //轮播 天眼 左一右三
		'PDDGOODSDETAIL': '/api/goods/PddGoodsInfo', //商品详情 多多
		'JDINFO': '/api/goods/JdGoodsInfo', //京东详情
		'LOGIN': '/api/user/login', //手机号登录
		'LOGOUT': '/api/user/logout', //注销
		'ORDERLIST': '/api/order/OrderList', //我的订单
		'INCOME': '/api/user/totalIncome', //收入结算
		'UserIDEX': '/api/user/index', //个人信息
		'INDEXDATA2': '/api/index/appcfg',
		'FANSORDER': '/api/order/FansOrder', //粉丝订单
		'FANS': '/api/agent/newfans', //粉丝
		'FANSLIST': '/api/agent/fansList', //粉丝lisit
		'AGENTJOIN': '/api/agent/join', //代理升级接口
		'AGENTJOINPAY':'/api/agent/join_pay', //代理升级支付接口
		'JION': '/api/team/join', //运营商
		'JIONPAY': '/api/team/join_pay', //运营商支付
		'LEVELJOIN': '/api/level/join', //代理等级升级接口
		'LEVELJOINPAY': '/api/level/join_pay', //代理等级升级支付接口
		'BEANSNUM': '/api/sign/bean', // 淘客豆数目
		'STOCKSINDEX': '/api/stocks/index',
		'STOCKRECORD': '/api/stocks/changeLog',
		'STOCKSTOJIFEN': '/api/stocks/stocksToJifenbao',
		'JIFENTOSTOCKS': '/api/stocks/jifenbaoToStocks',
		'INCOMELIST': '/api/agent/incomeList', //收入明细
		'WITHDRAWLIST': '/api/user/withdrawList', //提现记录
		'collectList': '/api/collect/index', //收藏列表
		'collect': '/api/collect/collect', //收藏
		'ISCOLLECT': '/api/collect/isCollect',
		'FOOTLIST': '/api/goods/FootList', //足迹
		'SMSSEND': '/api/sms/send', //验证码
		'register': '/api/user/register', //注册
		's_logo': '/api/user/mobilelogin', //验证码登录
		'resetpwd': '/api/user/resetpwd', //忘记密码
		'FulSearch': '/api/goods/FullSearch', //商品搜索
		'PddSearch': '/api/goods/PddSearch', //pdd搜索
		'jdSearch': '/api/goods/jdSearch', //JD搜索
		'PDDCOUPONURL': '/api/goods/GetPddUrl', //拼多多领券地址
		'HOTKEY': '/api/goods/HotKey', //热搜词汇
		'RULECONTENT': '/api/index/ruleContent', //用户协议接口改变
		'UPLOADNEW': '/api/common/uploadnew', //修改头像
		'EDITUSERINFO': '/api/user/profile', //编辑用户
		'ALIPAYACCOUNT': '/api/user/UserWithdraw', //输入金额提现
		'WITHDRAW': '/api/user/withdraw', //提现集分宝到支付宝
		'JDCOUPONCLICKURL': '/api/goods/GetJdUrl', //京东优惠券链接
		'NOTICE': '/api/message/notice', //系统通知
		'personalNews': '/api/message/personalNews', //个人信息
		'WXLOGIN': '/api/wechat/wxSmallRoutineLogin', // 微信登录
		'WXLOGINMOBILE': '/api/wechat/wxSmallLogin ', // 微信登录
		'WXBINGDMOBILE': '/api/wechat/wxSmallbindmobile', //微信绑定手机号
		'FANSTEAM': '/api/agent/fansTeam', //粉丝Detail
		'ALIPAYACCOUNTBIND': '/api/user/WithdrawUpdate', //绑定支付宝账户
		'USERCENTERCUSTOM':'/api/index/userCenterCustom',//个人中心三项装修
		'SHAREPIC':'/api/wechat/SharePic',// 生成分享图片
		'TEAMCENTER':'/api/team/teamcenter',// 生成分享图片
	},
	GET: (params) => {
		return fly.get(params.url, qs.stringify(params.data))
	},
	POST: (params) => {
		return fly.post(params.url, qs.stringify(params.data))
	},
	LOGIN: params => {
		return fly.post('auth/login', params)
	}
}

export default Http;