---
author: j9t
date: 2021-12-25
draft: true
original_url: https://calendar.perfplanet.com/2021/faster-websites-by-using-less-html/
tags:
  - html
  - performance
  - optimization
title: Faster Websites by Using Less HTML
vg_wort: 05a94eac4a934912bc0dade1a6d480a5
---
As a rule of thumb, you can say that the smaller the payload of a website or application, [the faster it is](https://meiert.com/en/blog/html-performance/). While we are used to reducing payload by identifying critical and minifying all code, compressing files “at rest” and in transit, and bundling resources, we don’t pay that much attention to HTML payload. We miss that, even though an overly large HTML payload unnecessarily delays subsequent requests.

Fortunately, HTML comes with a great option to reduce its weight: Not all of the tags, not all of the quotes (around attribute values), not all of the attribute–value combinations are needed.

## Tags, Quotes, Attribute–Value Pairs

There are [about two dozen tags](https://meiert.com/en/blog/optional-html/#toc-tags) that can be omitted. In large documents this can lead to a significant payload reduction. ([“10–20%”](https://web.archive.org/web/20090628095100/http://code.google.com/speed/articles/optimizing-html.html) was an early number, and we still need a larger study to provide mean and median of to-be-expected savings.)

For quotes around attribute values, you can apply a rule of thumb: When an attribute value doesn’t contain an equal sign or a space, it’s likely okay to skip the quotes. (As always, the devil is [in the details](https://html.spec.whatwg.org/multipage/parsing.html#attribute-name-state).)

There are also [more than a dozen attribute–value combinations](https://meiert.com/en/blog/optional-html/#toc-attribute-values) that can be omitted, too. `type=submit` on `button` elements, for example, or `method=get` on forms—that last one may be the most popular unneeded attribute–value pair there is.

## HTML Minimalism

An HTML professional and purist would argue that one should know all of this by heart. They might also argue to write production HTML like this, because HTML documents can be amazingly concise:

```html
<!DOCTYPE html>
<title>Hello World</title>
<h1>Hello World</h1>
<p>This is only an example.
```

This is a perfectly valid document. It’s much easier to learn and write HTML like this—but many have learned HTML “the XHTML way” and are not aware of how much of it isn’t actually needed. (The author is writing a book about learning HTML this easier way. [Stay in touch!](https://twitter.com/j9t))

## Tooling

If you choose to use less HTML but don’t like to do that yourself, there’s of course tooling available. The go-to solution is [html-minifier](https://www.npmjs.com/package/html-minifier) ([free input version](https://kangax.github.io/html-minifier/)) by Juriy Zaytsev, which allows for removal of all this optional markup, and more.

The “MVP” approach is to use tooling like html-minifier to automatically remove all optional HTML from your output. If you want more, you remove optional HTML also from your development code. And if that isn’t enough, you can also adopt using [only required](https://meiert.com/en/blog/the-ways-of-writing-html/#toc-required-only) HTML, by writing it by hand.

Whatever your preference: Removing optional HTML helps you build faster sites.