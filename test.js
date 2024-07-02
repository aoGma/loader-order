const Spritesmith = require("spritesmith");
const path = require("path");
const fs = require("fs");

// Generate our spritesheet
const sprites = ["./src/1.png", "./src/2.png"];
Spritesmith.run({ src: sprites }, function handleResult(err, result) {
	// result.image; // Buffer representation of image
	// result.coordinates; // Object mapping filename to {x, y, width, height} of image
	// result.properties; // Object with metadata about spritesheet {width, height}
	fs.writeFileSync(path.join(__dirname, "dist/sprite.png"), result.image);
});
