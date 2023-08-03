
const gas = require('gas-local');
const lib = gas.require('./src');

global.skip = () => {};

global.describe( 'utils', () => {
  global.describe( 'parseSender', () => {
    global.it( 'if string is null', () => {
      const expected = ['', '', ''];
      const str = null;
      const results = lib.parseSender(str);
      global.expect(results).toStrictEqual(expected);
    });
    global.it( 'if the string is empty', () => {
      const expected = ['', '', ''];
      const str = '';
      const results = lib.parseSender(str);
      global.expect(results).toStrictEqual(expected);
    });
    global.it( 'google calender', () => {
      const expected = ['Google Calendar', 'calendar-notification@google.com', 'google.com'];
      const str = 'Google Calendar <calendar-notification@google.com>';
      const results = lib.parseSender(str);
      global.expect(results).toStrictEqual(expected);
    });
    global.it( 'icloud', () => {
      const expected = ['Paul Roth', 'paulroth3d@icloud.com', 'icloud.com'];
      const str = 'Paul Roth <paulroth3d@icloud.com>';
      const results = lib.parseSender(str);
      global.expect(results).toStrictEqual(expected);
    });
  });
});