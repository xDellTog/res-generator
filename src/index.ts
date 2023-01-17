import { readFileSync } from "fs";
import path from "path";
import Colorize from "./colors";
import sharp from "sharp";

console.log(
  Colorize.brightYellow(
    `✨ Resources Generator ${process.env.npm_package_version}`
  )
);

const tauriIcons = [
  {
    name: "icon.icns",
    size: 1024,
  },
  {
    name: "icon.ico",
    size: 256,
  },
  {
    name: "32x32.png",
    size: 32,
  },
  {
    name: "128x128.png",
    size: 128,
  },
  {
    name: "128x128@2x.png",
    size: 256,
  },
  {
    name: "icon.png",
    size: 1024,
  },
  {
    name: "Square30x30Logo.png",
    size: 30,
  },
  {
    name: "Square44x44Logo.png",
    size: 44,
  },
  {
    name: "Square71x71Logo.png",
    size: 71,
  },
  {
    name: "Square89x89Logo.png",
    size: 89,
  },
  {
    name: "Square107x107Logo.png",
    size: 107,
  },
  {
    name: "Square142x142Logo.png",
    size: 142,
  },
  {
    name: "Square150x150Logo.png",
    size: 150,
  },
  {
    name: "Square284x284Logo.png",
    size: 284,
  },
  {
    name: "Square310x310Logo.png",
    size: 310,
  },
  {
    name: "StoreLogo.png",
    size: 50,
  },
];

const sourceFile = readFileSync(
  path.join(__dirname, "..", "assets", "icon.png")
);

console.log(
  Colorize.brightMagenta(
    `✨ Generating files in ${path.join(__dirname, "..", "output")}`
  )
);

for (const file of tauriIcons) {
  sharp(sourceFile)
    .resize(file.size, file.size)
    .png()
    .toFile(path.join(__dirname, "..", "output", file.name))
    .then(() => {
      console.log(Colorize.brightGreen(`+ File created: ${file.name}`));
    })
    .catch((err) => {
      console.log(Colorize.brightRed(`- Error: ${err}`));
    });
}