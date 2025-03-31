/**
 * Normalizes specified attributes in an HTML string by removing extra spaces and ensuring consistent formatting.
 * @param html - The HTML string to normalize.
 * @param attributes - An array of attribute names to normalize.
 * @returns The normalized HTML string.
 */
export declare function normalizeAttributes(html: string, attributes: string[]): string;
/**
 * Normalizes an HTML string by removing extra spaces inside tags.
 * @param html - The HTML string to normalize.
 * @returns The normalized HTML string.
 */
export declare function removeExtraSpacesInTags(html: string): string;
/**
 * Normalize specified attributes in HTML tags by removing extra spaces and ensuring consistent formatting.
 * Additionally, remove extra spaces within HTML tags.
 * @param html - The HTML string to normalize.
 * @param attributes - An array of attribute names to normalize.
 * @returns The normalized HTML string.
 */
export declare function normalizeAttributesAndTags(html: string, attributes: string[]): string;
