console.log('foo: module');
const packageJson = require('../package.json');

const foo = (text) => {
  console.log(packageJson.version);
  console.log(`foo: module: ${text}`);
};

module.exports = foo;
