
# html-space-cleaner

"This NPM package provides a versatile set of functions for sanitizing and normalizing HTML strings 🧼. The `normalizeAttributes` function normalizes specified attributes in HTML tags by removing extra spaces and ensuring consistent formatting. The `removeExtraSpacesInTags` function normalizes an HTML string by removing extra spaces inside tags. The `normalizeAttributesAndTags` function combines both functionalities, normalizing specified attributes in HTML tags and removing extra spaces within tags. These functions ensure that the output is safe and free of unwanted attributes 🔒, while preserving the original structure and styling of the HTML 💻. This package is ideal for developers looking to enhance the security and cleanliness of their HTML content effortlessly 👌."



## API

The function `removeExtraSpacesInTags` takes one parameter:

- `html` (string): The HTML string to normalize.

Returns:
- (string) The HTML string without extra spaces inside tags.

---

The function `normalizeAttributes` normalizes specified attributes in an HTML string by removing extra spaces and ensuring consistent formatting.

- `html` (string): The HTML string to normalize.
- `attributes` (string[]): An array of attribute names to normalize.

Returns:
- (string) The normalized HTML string.

---

The function `normalizeAttributesAndTags` normalizes specified attributes in HTML tags by removing extra spaces and ensuring consistent formatting. Additionally, it removes extra spaces within HTML tags.

- `html` (string): The HTML string to normalize.
- `attributes` (string[]): An array of attribute names to normalize.

Returns:
- (string) The normalized HTML string.

## Install

```
$ npm install html-space-cleaner
```

## Examples

#### Example 1
```js
const { removeExtraSpacesInTags } = require('html-space-cleaner');

const htmlString = `
    <div   class="   container  ">   
        <p>Hello, world!</p>   
    </div>   
`;

const normalizedHtml = removeExtraSpacesInTags(htmlString);
```
The resulting normalizedHtml string contains the same HTML structure but without extra spaces inside the `<div>` tag.

#### Example 2
```js
const { normalizeAttributes } = require('html-space-cleaner');

const htmlString = `
    <div class="   container  " id=" main  ">   
        <p style="  color:  red  ;">Hello, world!</p>   
    </div>   
`;

const normalizedHtml = normalizeAttributes(htmlString, ['class', 'style']);
```
The resulting normalizedHtml string contains the same HTML structure but with the specified attributes normalized,
without extra spaces inside `class` and `style` attribute in both the `<div>` and `<p>` tags.

#### Example 3
```js
const { normalizeAttributesAndTags } = require('html-space-cleaner');

const htmlString = `
    <div      class="   container  "            id=" main  ">   
        <p style="  color:  red  ;"      >Hello, world!</p>   
    </div>   
`;

const normalizedHtml = normalizeAttributesAndTags(htmlString, ['class', 'style']);

```
The resulting normalizedHtml string contains the same HTML structure but with the specified attributes normalized,
without extra spaces inside `class` and `style` attribute in both the `<div>` and `<p>` tags, as well as removes extra spaces within HTML tags."

