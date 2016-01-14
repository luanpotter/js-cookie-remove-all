## js-cookie-remove-all

[![Build Status](https://img.shields.io/travis/luanpotter/js-cookie-remove-all.svg)](https://travis-ci.org/luanpotter/js-cookie-remove-all)
[![npm](https://img.shields.io/npm/v/js-cookie-remove-all.svg)](https://www.npmjs.com/package/js-cookie-remove-all)

This is a lib that patches [js-cookie](https://www.github.com/js-cookie/js-cookie) to add a useful `removeAll` function that removes all the cookies accessible from the page.

Just drop into `package.json`

```bash
npm install --save js-cookie-remove-all
```

and require it:

```javascript
var Cookies = require('js-cookie-remove-all');

// ...

Cookies.removeAll(attributes);
```
