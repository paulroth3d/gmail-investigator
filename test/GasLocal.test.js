
const gas = require('gas-local');
const lib = gas.require('./src');

global.describe( 'gasLocal', () => {
  global.it( 'has lib', () => {
    global.expect(lib).not.toBeNull();
  });
});
