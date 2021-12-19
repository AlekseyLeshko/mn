console.log('@foo module loaded');
const packageJson = require('../package.json');

const foo = (text) => {
  console.log('@foo module version', packageJson.version);
  console.log('new version 2');
  console.log(`foo: module: test: ${text}`);
};

module.exports = foo;
