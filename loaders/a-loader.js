const loaderUtils = require("loader-utils");

module.exports = function (source) {
	console.log(source, "a-loader");
	const url = loaderUtils.interpolateName(this, "[name].[ext]", source);
	console.log(url);
	this.emitFile(url, source);
	return source;
};
