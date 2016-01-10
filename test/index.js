var assert = require('assert');
var Cookies = require('js-cookie');
var mock = require('mock-cookie');

require('../src/index.js');

document = new mock.Document();

describe('Cookies', function () {
  describe('#removeAll()', function () {
    it('should remove all cookies', function () {
      Cookies.set('a', '1');
      Cookies.set('b', '2');
      assert.equal('1', Cookies.get('a'));
      assert.equal('2', Cookies.get('b'));

      Cookies.removeAll();
      assert.equal(undefined, Cookies.get('a'));
      assert.equal(undefined, Cookies.get('b'));
    });
  });
});
