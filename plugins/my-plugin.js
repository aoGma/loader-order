const { RawSource } = require("webpack-source");
module.exports = class MyPlugin {
	constructor(options) {
		this.options = options;
	}
	apply(compiler) {
		// console.dir("🚀 ~ MyPlugin ~ apply ~ compiler:", compiler);
		// compiler.warnings.push("测试warning信息");
		// compiler.errors.push("测试error信息");
		console.log("My plugin is executed");
		console.log("My plugin options ", this.options);
	}
};
