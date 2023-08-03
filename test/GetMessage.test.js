
const gas = require('gas-local');
const lib = gas.require('./src');

global.skip = () => {};

global.describe( 'GetMessage', () => {
  global.skip( 'gasLocal is found', () => {
    global.expect(lib).not.toBeNull();
    console.log(Object.keys(lib));
  });
  global.it( 'getPromptTitle', () => {
    const expected = `GMail Search Query`;
    const results = lib.getPromptTitle();
    global.expect(results).toBe(expected);
  });
  global.it( 'getPromptMessage', () => {
    const expected = `Default is: "is:unread"`;
    const results = lib.getPromptMessage();
    global.expect(results).toBe(expected);
  });
  global.it( 'getDefaultQuery', () => {
    const expected = `is:unread`;
    const results = lib.getDefaultQuery();
    global.expect(results).toBe(expected);
  });
});
