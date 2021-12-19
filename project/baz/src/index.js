console.log('@baz module loaded');
const foo = require('@alekseyleshko/foo');
const packageJson = require('../package.json');

const baz = (text) => {
  console.log('@baz module version', packageJson.version);
  foo(text);
  console.log(`baz: module: ${text}`);
};
baz('test-baz');

module.exports = baz;
