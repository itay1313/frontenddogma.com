# frontenddogma.com

Source of the website of [Frontend Dogma (FD)](https://frontenddogma.com/).

## How to Contribute

For the moment, please help yourself and [explore this repository](https://github.com/j9t/frontenddogma.com).

## Technical Setup

Frontend Dogma is based on [Eleventy](https://www.11ty.dev/). Please see [the Eleventy documentation](https://www.11ty.dev/docs/) for details.

For a quick start, you should be able to get Frontend Dogma running locally by forking this repository, then invoking `npx eleventy --serve`.

### Front Matter

Sort all front matter data alphabetically. (Tags should follow the order content type, features, topics.)

```
---
author: TWITTER_HANDLE # not to be confused with `platform`
date: YYYY-MM-DD # preferred
description: DESCRIPTION # required for FD content, otherwise optional
image: PATH # preferred (path is based on /media—see note in “Content Types” section)
image_url: URL # optional for an image for which there is no target_url fallback
layout: post.njk # required
original_url: URL # required for cross-posted entries
publisher: TWITTER_HANDLE # preferred, point to individual if possible
tags:
  - CONTENT_TYPE # required
  - (FEATURES) # optional
  - (TOPICS) # preferred
target_url: URL # required for linked content
title: TITLE # required
vg_wort: VG_WORT_ID # required for exclusive content or external content tagged with VG WORT
```

Pages can be temporarily or permanently hidden with `eleventyExcludeFromCollections: true`.

## Content Documentation

### Tags

#### 1. Content Types

Each post needs to have one (and only one) tag describing the content type, for example:

* `announcement` (Frontend Dogma only)
* `article`
* `book`
* `company`
* `course`
* `developer`
* `interview`
* `magazine`
* `organization`
* `podcast`
* `rfc`
* `specification`
* `talk`

(Any linked external source should specify a `target_url`. If there’s an image, it should be hosted under [/media](https://github.com/j9t/frontenddogma.com/tree/main/media) and referenced via `image`.)

#### 2. Features

In addition, a content piece can be one or more of the following:

* `evergreen`, for important and long-lived posts
* `featured`, for homepage promotion
* `cross-posted`, for content that was already posted elsewhere (specify `original_url`)
* `sponsored`

#### 3. Topics

For additional topics:

* Name just the main topics (like `html` or `css`)
* Keep it simple (less is more; don’t do tag-stuffing)