const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGE_DIR = path.join(__dirname, "../src/assets/images");

async function convertDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertDirectory(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (![".webp", ".jpg", ".jpeg"].includes(ext)) continue;

    const output = fullPath.replace(ext, ".webp");

    console.log(`Converting: ${file}`);

    await sharp(fullPath)
      .webp({
        quality: 80,
      })
      .toFile(output);

    console.log(`✔ ${output}`);
  }
}

convertDirectory(IMAGE_DIR)
  .then(() => console.log("Done"))
  .catch(console.error);