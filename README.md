# showdown-xss-config

[Showdown](https://github.com/showdownjs/showdown) extension to filter XSS, using [leizongmin/js-xss](https://github.com/leizongmin/js-xss).

[![npm](https://img.shields.io/npm/v/showdown-xss-config.svg)](https://www.npmjs.com/package/showdown-xss-config)
[![dependencies Status](https://david-dm.org/jackymancs4/showdown-xss-config/status.svg)](https://david-dm.org/jackymancs4/showdown-xss-config) [![devDependencies Status](https://david-dm.org/jackymancs4/showdown-xss-config/dev-status.svg)](https://david-dm.org/jackymancs4/showdown-xss-config?type=dev)

## Client-side

```html
<script src="/path/to/showdown/src/showdown.js"></script>
<script src="/path/to/xss/dist/xss.min.js"></script>
<script src="/path/to/showdown-xss-config.js"></script>
```

```javascript
var converter = new showdown.Converter({ extensions: [xssfilter()] })
var text = "<script>alert('xss!')</script>";
console.log(converter.makeHtml(text));
```

Note: be sure to include the dependency on [leizongmin/js-xss](https://github.com/leizongmin/js-xss) before this extension.

## Server-side (node)

```javascript
var showdown = require('showdown');
var xssFilter = require('showdown-xss-filter');
var converter = new showdown.Converter({extensions: [xssFilter()]});

var text = "<script>alert('xss!')</script>";
console.log(converter.makeHtml(text));
```
