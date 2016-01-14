var Cookies = require('js-cookie');

var extend = function () {
	var i = 0;
	var result = function() {};
	for (; i < arguments.length; i++) {
		var argument = arguments[ i ];
		var argumentKeys= Object.keys(argument)
		argumentKeys.forEach(function(key) {
			result[key] = argument[key];
		});
	}
	return result;
};

var removeAll = function (attributes) {
	Object.keys(Cookies.get()).forEach(function (cookie) {
		Cookies.remove(cookie, attributes);
	});
};

var decorate = function (api) {
	return extend(api, {
		withConverter: function() {
			var apiWithConverter = Cookies.withConverter.apply(this, arguments);
			return decorate(apiWithConverter);
		},
		removeAll: removeAll
	});
};

Cookies.removeAll = removeAll;

module.exports = decorate(Cookies);
