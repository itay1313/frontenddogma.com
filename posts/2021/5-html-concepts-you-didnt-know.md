---
author: j9t
date: 2021-12-19
tags:
  - html
  - concepts
title: 5 HTML Concepts You Didn’t Know
vg_wort: 464b1b7019134665941709879746a2eb
---
HTML is so important, large, and complex, it warrants [a pilgrimage](https://meiert.com/en/blog/web-developer-pilgrimage/). The specification includes many gems, whether it’s dark humor or esoteric edge cases. It also contains concepts that not everyone is familiar with. Borrowing from [the “HTML Concepts” series](https://cse.google.com/cse?cx=007435340685329731950%3Auo6twvdbp_m&q=%22html+concepts%22), here are five of them.

## 1. [“Body-Ok”](https://meiert.com/en/blog/html-body-ok/)

“Body-ok” relates to link type keywords, and denotes what `link` elements are okay to be used in the document body (as opposed to its head).

## 2. [The “Nothing” Content Model](https://meiert.com/en/blog/html-nothing-content-model/)

“When an element’s content model is nothing, the element must contain no `Text` nodes (other than inter-element whitespace) and no element nodes.” Most HTML elements whose content model is “nothing” are also, for convenience, void elements. (The `template` element is an exception.)

## 3. [Constraint Validation](https://meiert.com/en/blog/html-constraint-validation/)

When a `form` element (like `input`) has attributes that define requirements for the element’s value (like being `required`, or setting a `minlength`, or following a `pattern`), then these requirements (constraints) are being validated by the user agent. Constraints are being validated as long as the element is not barred from it.

## 4. [Indicators for Layout Tables](https://meiert.com/en/blog/html-layout-table-indicators/)

In order to navigate a table, user agents “are encouraged to find heuristics to determine which tables actually contain data and which are merely being used for layout.” The HTML spec then offers a few heuristics. For example, if there is a `role` attribute with a value of `presentation`, a `border` attribute with a (non-conforming) value of `0`, or if there are (also non-conforming) `cellspacing` and `cellpadding` attributes with a value of `0`, a table is—probably a layout table.

## 5. [Common Idioms](https://meiert.com/en/blog/html-common-idioms/)

HTML doesn’t have elements for a number of popular design patterns—but for four of them (as of 2021), it gives recommendations: [breadcrumbs](https://html.spec.whatwg.org/multipage/semantics-other.html#rel-up), [tag clouds](https://html.spec.whatwg.org/multipage/semantics-other.html#tag-clouds), [conversations](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations), and [footnotes](https://html.spec.whatwg.org/multipage/semantics-other.html#footnotes).

—Now you know more, when you hear about “body-ok,” the “nothing” content model, constraint validation, indicators for layout tables, and common idioms. To be continued.