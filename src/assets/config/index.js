module.exports = {
	jwtSecret: 'chf', // 秘钥
	expiresIn: 60 * 60 * 4, // 有效时间
	reIssueTime: 30 * 60, // 重新签发时间
	staticPath: '/src/assets', // 静态资源路径
	imgUrlPath: '/src/assets/static/avatar',
	imgUrl: 'http://localhost:3000/static/avatar/',
	nodemailer: {
		host: 'smtp.qq.com',
		secureConnection: true, // use SSL
		port: 465,
		secure: true, // secure:true for port 465, secure:false for port 587
		auth: {
			user: '825931062@qq.com',
			pass: 'fruulubmyywbbcge',
		},
	},
	mail: {
		// 发件人
		from: 'chfeng.top<825931062@qq.com>',
		// 收件人
		to: '',
		// 主题
		subject: '',
		// html: '',
		html: '',
	},
};
