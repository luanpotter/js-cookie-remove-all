var Cookies = require('js-cookie');
Cookies.removeAll = function (attributes) {
	Object.keys(Cookies.get()).forEach(function (cookie) {
		Cookies.remove(cookie, attributes);
	});
};
