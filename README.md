# HTML Space Cleaner

[![npm version](https://img.shields.io/npm/v/html-space-cleaner.svg)](https://www.npmjs.com/package/html-space-cleaner)
[![npm downloads](https://img.shields.io/npm/dm/html-space-cleaner.svg)](https://www.npmjs.com/package/html-space-cleaner)
[![License](https://img.shields.io/npm/l/html-space-cleaner.svg)](https://github.com/nati-grossman/html-space-cleaner/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14.0.0-green.svg)](https://nodejs.org/)

A TypeScript library that provides functions to normalize HTML strings by removing extra spaces and ensuring consistent formatting. This library is perfect for cleaning up HTML output, ensuring consistent attribute formatting, and preparing HTML for comparison or processing.

## Features

- 🧹 Remove extra spaces from HTML attributes
- 🔄 Normalize attribute formatting
- 🎯 Remove extra spaces within HTML tags
- 📦 Written in TypeScript with full type support
- ✅ Comprehensive test coverage
- 🚀 Zero dependencies

## Installation

```bash
npm install html-space-cleaner
```

## Usage

```typescript
import {
  normalizeAttributes,
  removeExtraSpacesInTags,
  normalizeAttributesAndTags,
} from 'html-space-cleaner';

// Normalize specific attributes
const html = '<div class="  test   class  " id="  my-id  ">';
const normalized = normalizeAttributes(html, ['class', 'id']);
// Result: '<div class="test class" id="my-id">'

// Remove extra spaces in tags
const htmlWithSpaces = '<div   class="test"   >';
const cleaned = removeExtraSpacesInTags(htmlWithSpaces);
// Result: '<div class="test">'

// Combine both operations
const htmlToClean = '<div   class="  test  "   id="  my-id  ">';
const fullyNormalized = normalizeAttributesAndTags(htmlToClean, ['class', 'id']);
// Result: '<div class="test" id="my-id">'
```

## API

### `normalizeAttributes(html: string, attributes: string[]): string`

Normalizes specified attributes in an HTML string by removing extra spaces and ensuring consistent formatting.

```typescript
const html = '<div class="  test  " id="  my-id  ">';
const result = normalizeAttributes(html, ['class', 'id']);
// Result: '<div class="test" id="my-id">'
```

#### Parameters

- `html`: The HTML string to normalize
- `attributes`: Array of attribute names to normalize

#### Returns

- The normalized HTML string

### `removeExtraSpacesInTags(html: string): string`

Normalizes an HTML string by removing extra spaces inside tags.

```typescript
const html = '<div   class="test"   >';
const result = removeExtraSpacesInTags(html);
// Result: '<div class="test">'
```

#### Parameters

- `html`: The HTML string to normalize

#### Returns

- The normalized HTML string

### `normalizeAttributesAndTags(html: string, attributes: string[]): string`

Combines both functions to normalize specified attributes and remove extra spaces within HTML tags.

```typescript
const html = '<div   class="  test  "   id="  my-id  ">';
const result = normalizeAttributesAndTags(html, ['class', 'id']);
// Result: '<div class="test" id="my-id">'
```

#### Parameters

- `html`: The HTML string to normalize
- `attributes`: Array of attribute names to normalize

#### Returns

- The normalized HTML string

## Examples

### Basic Usage

```typescript
import { normalizeAttributes } from 'html-space-cleaner';

const html = `
  <div class="  container  " id="  main  ">
    <p style="  color:  red  ;">Hello, world!</p>
  </div>
`;

const result = normalizeAttributes(html, ['class', 'style']);
console.log(result);
// Output:
// <div class="container" id="  main  ">
//   <p style="color: red;">Hello, world!</p>
// </div>
```

### Advanced Usage

```typescript
import { normalizeAttributesAndTags } from 'html-space-cleaner';

const html = `
  <div      class="   container  "            id=" main  ">
    <p style="  color:  red  ;"      >Hello, world!</p>
  </div>
`;

const result = normalizeAttributesAndTags(html, ['class', 'style']);
console.log(result);
// Output:
// <div class="container" id="main">
//   <p style="color: red;">Hello, world!</p>
// </div>
```

## Development

This project is written in TypeScript and uses Jest for testing.

```bash
# Install dependencies
npm install

# Run tests
npm test
npm run test:watch  # Run tests in watch mode

# Build the project
npm run build

# Format code
npm run format

# Lint code
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
