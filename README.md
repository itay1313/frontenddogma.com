# frontenddogma.com

Source of the website of [Frontend Dogma](https://frontenddogma.com/).

## How to Contribute

For the moment, please help yourself and [explore this repository](https://github.com/j9t/frontenddogma.com).

## Technical Setup

Frontend Dogma is based on [Eleventy](https://www.11ty.dev/). Please see [the Eleventy documentation](https://www.11ty.dev/docs/) for details.

For a quick start, you should be able to get Frontend Dogma running locally by forking this repository, then invoking `npx eleventy --serve`.

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
* `how-to`
* `interview`
* `magazine`
* `op-ed`
* `organization`
* `podcast`
* `rfc`
* `specification`
* `talk`

(Any external source should specify a `target_url`. If there’s an image, it should be hosted under [/media](https://github.com/j9t/frontenddogma.com/tree/main/media) and referenced via `image`.)

#### 2. Features

In addition, a content piece can be one or more of the following:

* `evergreen`, for important and long-lived posts
* `featured`, for homepage promotion
* `cross-posted`, for content that was already posted elsewhere (specify `original_url`)
* `reference`, for anything with an external source
* `sponsored`

#### 3. Topics

For additional topics:

* Name just the main topics (like `html` or `css`)
* Keep it simple (less is more; don’t do tag-stuffing)