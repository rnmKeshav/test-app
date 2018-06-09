const path = require("path");

module.exports = {
  entryPaths: {
    app: path.resolve(process.cwd(), "src/client.js")
    //style: path.resolve(process.cwd(), 'assets/stylesheets/main.scss')
  },
  output: {
    dirname: path.resolve(process.cwd(), "build"),
    javascriptFolderName: "javascripts",
    cssFolderName: "stylesheets",
    imageFolderName: "images"
  },
  templatePath: path.resolve(process.cwd(), "src/index.ejs"),
  imagesSourcePath: path.resolve(process.cwd(), "assets/images")
};
