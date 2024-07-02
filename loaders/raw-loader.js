// const loaderUtils = require("loader-utils");
const fs = require("fs");
const path = require("path");

module.exports = function (source) {
	// const { name } = loaderUtils.getOptions(this);
	// console.log("🚀 ~ name:", name);
	this.cacheable(false);
	const callback = this.async();
	const json = JSON.stringify(source).replace("foo", "");
	"./src/demo.txt".replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
	// throw new Error("132");
	fs.readFile(
		path.join(__dirname, "../src/async.txt"),
		"utf-8",
		(err, data) => {
			console.log(data);
			callback(null, data);
		}
	);

	// this.callback(new Error("132"), json);
	// return `export default ${json}`;
};
