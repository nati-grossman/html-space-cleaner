"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeAttributes = normalizeAttributes;
exports.removeExtraSpacesInTags = removeExtraSpacesInTags;
exports.normalizeAttributesAndTags = normalizeAttributesAndTags;
/**
 * Normalizes specified attributes in an HTML string by removing extra spaces and ensuring consistent formatting.
 * @param html - The HTML string to normalize.
 * @param attributes - An array of attribute names to normalize.
 * @returns The normalized HTML string.
 */
function normalizeAttributes(html, attributes) {
    // Input validation
    if (typeof html !== 'string') {
        throw new TypeError('HTML parameter must be a string');
    }
    if (!Array.isArray(attributes)) {
        throw new TypeError('Attributes parameter must be an array');
    }
    if (!html || !attributes.length) {
        return html;
    }
    let result = html;
    // Iterate over each attribute to normalize
    attributes.forEach((attribute) => {
        if (typeof attribute !== 'string') {
            throw new TypeError('Each attribute must be a string');
        }
        // Escape special regex characters in attribute name for pattern matching
        const escapedAttribute = attribute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Create a regular expression pattern to match the attribute in HTML tags
        const pattern = new RegExp(`(${escapedAttribute}\\s*=\\s*["'][^"']*["'])`, 'g');
        // Replace each matched attribute with normalized formatting
        result = result.replace(pattern, (match) => {
            // Normalize the value part (everything between quotes)
            const normalizedValue = match
                .replace(/^[^=]+=\s*["']/, '') // Remove attribute name and opening quote
                .replace(/["']$/, '') // Remove closing quote
                .trim()
                .replace(/\s+/g, ' '); // Normalize spaces
            // Always use double quotes in the output for consistency
            return `${attribute}="${normalizedValue}"`;
        });
    });
    return result;
}
/**
 * Normalizes an HTML string by removing extra spaces inside tags.
 * @param html - The HTML string to normalize.
 * @returns The normalized HTML string.
 */
function removeExtraSpacesInTags(html) {
    // Input validation
    if (typeof html !== 'string') {
        throw new TypeError('HTML parameter must be a string');
    }
    if (!html) {
        return html;
    }
    let insideTag = false;
    let result = '';
    // Loop through each character in the HTML string
    for (let i = 0; i < html.length; i++) {
        const char = html[i];
        if (char === '<') {
            // Start of a tag
            insideTag = true;
            result += char;
        }
        else if (char === '>') {
            // End of a tag
            insideTag = false;
            result = result.trimEnd() + char;
        }
        else {
            // Inside a tag
            if (insideTag && char === ' ') {
                // Skip additional spaces inside tags
                while (html[i + 1] === ' ') {
                    i++;
                }
            }
            result += char;
        }
    }
    return result;
}
/**
 * Normalize specified attributes in HTML tags by removing extra spaces and ensuring consistent formatting.
 * Additionally, remove extra spaces within HTML tags.
 * @param html - The HTML string to normalize.
 * @param attributes - An array of attribute names to normalize.
 * @returns The normalized HTML string.
 */
function normalizeAttributesAndTags(html, attributes) {
    // Input validation
    if (typeof html !== 'string') {
        throw new TypeError('HTML parameter must be a string');
    }
    if (!Array.isArray(attributes)) {
        throw new TypeError('Attributes parameter must be an array');
    }
    if (!html || !attributes.length) {
        return html;
    }
    // Normalize specified attributes
    const normalizedHtml = normalizeAttributes(html, attributes);
    // Remove extra spaces within HTML tags
    return removeExtraSpacesInTags(normalizedHtml);
}
//# sourceMappingURL=index.js.map