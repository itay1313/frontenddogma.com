# frontenddogma.com

[Eleventy](https://www.11ty.dev/) source of the website of [Frontend Dogma (FD)](https://frontenddogma.com/).

## How to Contribute

For the moment, please help yourself and [explore this repository](https://github.com/j9t/frontenddogma.com).

ℹ You can try the unofficial [front matter generator](https://hell.meiert.org/aux/generate-front-matter/) to create and then propose posts to be featured on Frontend Dogma.

## Technical Setup

Frontend Dogma is based on [Eleventy](https://www.11ty.dev/). Please see [the Eleventy documentation](https://www.11ty.dev/docs/) for details.

For a quick start, you should be able to get Frontend Dogma running locally by forking this repository, then invoking `npx eleventy --serve`.

### Front Matter

Sort all front matter data alphabetically. (Tags should follow the order content type, features, topics.)

```
---
author: TWITTER_HANDLE # required; not to be confused with `publisher`
coauthor: TWITTER_HANDLE # optional
date: YYYY-MM-DD # required
description: DESCRIPTION # optional
image: PATH # preferred (path is based on /media—see note in “Content Types” section)
image_url: URL # optional for an image for which there is no target_url fallback
original_url: URL # required for cross-posted entries
permalink: false # required for linked, i.e., external content
publisher: TWITTER_HANDLE # if the item was published by a third party
tags:
  - CONTENT_TYPE # required if not an article
  - (FEATURES) # optional
  - (TOPICS) # preferred
target_url: URL # required for linked content
title: TITLE # required
vg_wort: VG_WORT_ID # required for exclusive content, or external content tagged with VG WORT
```

Pages can be temporarily or permanently hidden with `draft: true` (preferred for posts) or `hidden: true` (aliases for standard `eleventyExcludeFromCollections: true`).

## Content Documentation

A general note, although Frontend Dogma started in 2021, excellent articles from 2020 may also be covered. At the moment, no older content is to be featured.

### Tags

If countable, tags always use the plural. Have a look at [existing tags](https://frontenddogma.com/tags/).

#### 1. Content Types

Each post needs to have one (and only one) tag describing the content type.

`articles` is the implied fallback and does _not_ need to be set.

* _`announcements`_ (Frontend Dogma only)
* _`books`_
* _`code`_ (as with “pens”)
* `companies`
* `courses`
* `developers`
* _`discussions`_
* _`guides`_
* _`interviews`_
* _`link-lists`_
* `magazines`
* `organizations`
* _`packages`_
* _`podcasts`_
* `rfcs`
* _`services`_
* `specifications`
* _`studies`_
* _`surveys`_ 
* _`videos`_
* _`websites`_

(Content types in italics are currently in use.)

Any linked external source should specify a `target_url`.

If there’s an image, it should be hosted under [/media](https://github.com/j9t/frontenddogma.com/tree/main/media) and be referenced via `image`.

#### 2. Features

In addition, a content piece can be one or more of the following:

* `featured`, for homepage promotion (not implemented yet)
* _`cross-posted`_, for content that was already posted elsewhere (specify `original_url`)
* `sponsored` (not implemented yet)

(Features in italics are currently in use.)

#### 3. Topics

For additional topics:

* Name just the main topics (like `html` or `css` or any of [the existing tags](https://frontenddogma.com/tags/))
* Keep it simple (less is more; don’t tag-stuff)