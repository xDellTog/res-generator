import { readFileSync, writeFileSync } from "fs";
import path from "path";
import Colorize from "./colors";
import sharp from "sharp";
import tauriIcons from "./tauriIcons";

const toIco = require("to-ico");
const png2icns = require("png2icns");

console.log(
  Colorize.brightYellow(
    `✨ Resources Generator ${process.env.npm_package_version}`
  )
);

try {
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
        if (file.extension === "ico") {
          const image = readFileSync(
            path.join(__dirname, "..", "output", file.name)
          );
          toIco(image)
            .then((buf: any) => {
              writeFileSync(
                path.join(__dirname, "..", "output", file.name),
                buf
              );
              console.log(Colorize.brightGreen(`+ File created: ${file.name}`));
            })
            .catch((err: any) => {
              console.log(Colorize.brightRed(`- Error: ${err.toString()}`));
            });
          return;
        }

        if (file.extension === "icns") {
          png2icns(
            {
              in: path.join(__dirname, "..", "output", file.name),
              out: path.join(__dirname, "..", "output", file.name),
            },
            function () {
              console.log(Colorize.brightGreen(`+ File created: ${file.name}`));
            }
          );
          return;
        }

        console.log(Colorize.brightGreen(`+ File created: ${file.name}`));
        return;
      })
      .catch((err: any) => {
        console.log(Colorize.brightRed(`- Error: ${err.toString()}`));
      });
  }
} catch (error: any) {
  console.log(Colorize.brightRed(`- Error: ${error.toString()}`));
}
