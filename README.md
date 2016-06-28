# flexibility

<a href="https://github.com/10up/flexibility"><img src="https://10up.github.io/flexibility/logo.svg" alt="Flexibility Logo" width="60" height="60" align="right"></a>

> A JavaScript polyfill for Flexbox

[![npm][npm-image]][npm-url] [![bower][bower-image]][bower-url]
[![ci][ci-image]][ci-url] [![gitter][gitter-image]][gitter-url]

[Flexibility] is a polyfill for the [Flexible Box Layout], commonly known as
Flexbox. With Flexibility, you get to design beautiful, flexible layouts on the
web without sacrificing the experience in older browsers.

Flexbox is used to lay out, align, and distribute elements in a container, even
when their size is unknown or dynamic. To better understand Flexbox, read
[Chris Coyier]’s excellent [Complete Guide to Flexbox].

To start using Flexbox in Internet Explorer 8 & 9, download the
[flexibility.js] script and include it anywhere on your page.

```html
<script src="flexibility.js"></script>
```

If you’re only targeting Internet Explorer 10 and lower, add a
`-js-display: flex` declaration before any `display: flex` declarations in your
CSS, or use [PostCSS Flexibility] to automate this during your build process.

```css
.container {
	-js-display: flex;
	display: flex;
}
```

Finally, when you’re ready to polyfill flexbox with JavaScript, use the
`flexibility` method on the outermost element you would like to target.

```js
flexibility(document.documentElement);
```

## API

Flexibility creates a global `flexibility` object with hooks to be used by your
our framework.

##### `flexibility`

Argument: `Element`

##### `flexibility.read`

Argument: `Element`

Return flexbox related styles from an element.

##### `flexibility.readAll`

Argument: `Element`

Return a list of flexbox details from a matching element or its descendants.

##### `flexibility.write`

Argument: `Details`

Writes flexbox details back to their respective elements.

##### `flexibility.writeAll`

Argument: `Array`

Writes a list of flexbox details back to their respective elements.

---

To learn more about [Flexibility], read the [support] section.

If you experience an issue, read the [contributing] section before creating an
issue.

[bower-image]:  https://img.shields.io/bower/v/flexibility.svg?style=flat-square
[bower-url]:    https://libraries.io/bower/flexibility
[ci-image]:     https://img.shields.io/travis/10up/flexibility.svg?style=flat-square
[ci-url]:       https://travis-ci.org/10up/flexibility
[gitter-image]: https://img.shields.io/gitter/room/10up/flexibility.svg?style=flat-square
[gitter-url]:   https://gitter.im/10up/flexibility
[npm-image]:    https://img.shields.io/npm/v/flexibility.svg?style=flat-square
[npm-url]:      https://www.npmjs.com/package/flexibility

[contributing]: CONTRIBUTING.md
[Flexibility]: https://github.com/10up/flexibility
[flexibility.js]: flexibility.js
[support]: SUPPORT.md

[Chris Coyier]: https://twitter.com/chriscoyier
[Complete Guide to Flexbox]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[Flexible Box Layout]: http://www.w3.org/TR/css3-flexbox/
[PostCSS Flexibility]: https://github.com/7rulnik/postcss-flexibility
