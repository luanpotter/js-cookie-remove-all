const assert = require('assert');
const mock = require('mock-cookie');

document = new mock.Document();

describe('Cookies', function () {
  describe('#removeAll()', function () {
    it('should remove all cookies', function () {
      const Cookies = require('../src/index.js');

      Cookies.set('a', '1');
      Cookies.set('b', '2');
      assert.equal('1', Cookies.get('a'));
      assert.equal('2', Cookies.get('b'));

      Cookies.removeAll();

      let actual = Cookies.get('a');
      let expected = undefined;
      assert.strictEqual(actual, expected);

      actual = Cookies.get('b');
      expected = undefined;
      assert.strictEqual(actual, expected);
    });
    it('should change the original Cookies API', function() {
      const Cookies = require('js-cookie');
      require('../src/index.js');
      assert.ok(!!Cookies.removeAll);
    });
    it('should make the API available for a new Cookies.withConverter() instance', function () {
      const Cookies = require('../src/index.js');
      const newInstance = Cookies.withConverter();
      assert.ok(!!newInstance.removeAll, 'api should be available for new instance');
      assert.ok(!function(){}.removeAll, 'api should not be available for all functions');
    });
  });
});
