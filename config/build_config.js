const path = require('path');

module.exports = {
  entryPaths: {
    app: path.resolve(process.cwd(), 'src/client.js')
  },
  output: {
    dirname: path.resolve(process.cwd(),'build'),
    javascriptFolderName: 'javascript',
    cssFolderName: 'css'
  },
  templatePath: path.resolve(process.cwd(), 'src/index.ejs')
};
