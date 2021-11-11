console.log('app: test');

const foo1 = require('@alekseyleshko/foo');

const foo = (text) => {
  console.log('---');
  foo1(text);
};
foo('test-app');
