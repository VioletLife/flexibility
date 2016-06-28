# Support

<a href="https://github.com/10up/flexibility"><img src="https://10up.github.io/flexibility/logo.svg" alt="Flexibility Logo" width="80" height="80" align="right"></a>

[![npm][npm-image]][npm-url] [![bower][bower-image]][bower-url]
[![ci][ci-image]][ci-url] [![gitter][gitter-image]][gitter-url]

## Supported Features

Name | Value
----:|------
`display` | flex \| inline-flex
`flex-direction` | column \| row
`justify-content` | flex-start \| center \| flex-end \| space-between \| space-around
`align-items`, align-self | flex-start \| center \| flex-end \| stretch
`flex` | [flex-grow]
`flex-flow` | `flex-direction` + `flex-wrap`
`flex-grow` | [CSS Number]
`flex-wrap` | wrap \| nowrap
`order` | [CSS Integer]
`width`, `min-width`, `max-width` | [CSS Length]
`height`, `min-height`, `max-height` | [CSS Length]
`margin`, `margin-left`, `margin-right`, `margin-top`, `margin-bottom` | [CSS Length]
`padding`, `padding-left`, `padding-right`, `padding-top`, `padding-bottom` | [CSS Length]
`border-width`, `border-left-width`, `border-right-width`, `border-top-width`, `border-bottom-width` | [CSS Length]

## Known Issues

- The `flex` shorthand only supports `flex-grow` at this time.
- Changing an `align-items: stretch` container from `flex-direction: row` to
  `flex-direction: column` on the fly will sometimes fail to stretch the newly
  columned items.
- In IE8, flex items whose widths are determined by inline text don’t alway
  resize on resize.

### How Flexibility Works

Flexibility uses `data-style` attributes, inline and computed styles, and the
proprietary Internet Explorer `currentStyle` property to determine the current
flex styles of an element.

Internet Explorer’s proprietary [`currentStyle`] property returns the raw CSS
applied to an element. While known properties (like `display`) are sanitized to
return only valid values, “unknown” properties like `align-contents`,
`justify-content`, and `flex` return exactly what they received. As a result,
“unknown” flex properties can be easily read from any element without fetching
or parsing stylesheets. In short, your cross domain CSS is safe.

Once all of the flex values are processed, basic flex display is applied to the
document. Then, [CSS Layout] calculates the positions for elements to simulate
Flexbox.

---

If you experience an issue, read the [contributing] section before creating an
issue.

[ci]:      https://travis-ci.org/10up/flexibility
[ci-img]:  https://img.shields.io/travis/10up/flexibility.svg
[npm]:     https://www.npmjs.com/package/flexibility
[npm-img]: https://img.shields.io/npm/v/flexibility.svg

[Flexibility]: https://github.com/10up/flexibility

[contributing]: CONTRIBUTING.md

[CSS Integer]: https://developer.mozilla.org/en-US/docs/Web/CSS/integer#Interpolation
[CSS Layout]: https://github.com/10up/flexibility/tree/css-layout
[CSS Length]: https://developer.mozilla.org/en-US/docs/Web/CSS/length

[`currentStyle`]: http://help.dottoro.com/ljqkvomc.php
[`runtimeStyle`]: http://help.dottoro.com/ljhddfwr.php
