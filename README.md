# frontenddogma.com

Source of the website of [Frontend Dogma](https://frontenddogma.com/).

## How to Contribute

For the moment, please help yourself and [explore this repository](https://github.com/j9t/frontenddogma.com).

## Technical Setup

Frontend Dogma is based on [Eleventy](https://www.11ty.dev/). Please see [the Eleventy documentation](https://www.11ty.dev/docs/) for details.

For a quick start, you should be able to get Frontend Dogma running locally by forking this repository, then invoking `npx eleventy --serve`.

## Content Documentation

### Content Types

#### 1. Core Tags

Each post needs to have one (and only one) of the following tags:

* `announcement` (Frontend Dogma only)
* `article`
* `book` (with `target_url` and `image`)
* `reference` (with `target_url`)

#### 2. Feature Tags

In addition, a content piece can be one or more of the following:

* `featured` (for homepage promotion)
* `cross-posted` (with `original_url`)
* `sponsored`

#### 3. Topic Tags

For additional topics:

* Name just the main topics
* Keep it simple