const foo = require('@alekseyleshko/foo');

console.log('baz: module:');

const baz = (text) => {
  foo(test);
  console.log(`baz: module: ${text}`);
};
foo('test-baz');

module.exports = baz;
