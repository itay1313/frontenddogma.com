---
author: j9t
date: 2020-09-21
original_url: https://meiert.com/en/blog/questioning-root/
tags:
  - cross-posted
  - css
  - custom-properties
title: "Custom Properties: Questioning :root"
vg_wort: 483ef18f2583416fa8164179a9ae7379
---
For [custom properties](https://www.w3.org/TR/css-variables-1/) (aka CSS variables) we got into the habit of declaring variables in a rule with a `:root` selector.

This habit we probably inherited [from the spec](https://www.w3.org/TR/css-variables-1/#defining-variables), and it had then likely been picked up and promoted by the larger web development communities.

Here’s a basic example of `:root` in action:

```css
:root {
  --test: green;
}

body {
  background: var(--test);
}
```

What’s interesting about this use of `:root` is how rarely CSS is otherwise used to style non-HTML documents—whose targeting is [`:root`’s main selling point](https://www.w3.org/TR/selectors-3/#root-pseudo). Ask yourself, when have you last styled anything not HTML or SVG? (I did [until 2009](https://meiert.com/en/blog/optimization-measures-7/), for RSS feeds.)

What’s also interesting is how much emphasis is usually put on avoiding the universal selector, yet adding classes to everything.

All of this is rather ironic, and makes :root for custom properties look like a somewhat “hipster” response, when one had just found out that CSS can be used for languages other than HTML. No offense there—it just looks a little like someone had just found out. At this point many may be following a convention.

Use of :root for custom properties goes beyond irony, however, when it’s used exclusively for HTML. There the enthusiasm seems out of place:

The root element for HTML is `<html>`. That is well-known. If a web developer knows what they’re styling—if you know what you’re styling—, be specific. That means, use `html` as your selector, not `:root`. It works:

```css
html {
  --test: green;
}

body {
  background: var(--test);
}
```

Therefore, unless you’re working in an environment in which style sheets serve several document types (and roots) at the same time, question the use of `:root`, for custom properties. It could be argued to be an anti-pattern for HTML. Be specific.

(Many thanks to [Hannes Schluchtmann](https://twitter.com/escapedcat) for reviewing this post.)