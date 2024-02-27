

/**
 * Normalizes specified attributes in an HTML string by removing extra spaces and ensuring consistent formatting.
 * @param {string} html - The HTML string to normalize.
 * @param {string[]} attributes - An array of attribute names to normalize.
 * @returns {string} The normalized HTML string.
 */
function normalizeAttributes(html, attributes) { 
    // Check if input is valid and return early if not
    if (!html || !attributes || !attributes.length) {
      return html;
    }
  
    // Iterate over each attribute to normalize
    attributes.forEach(attribute => {
      // Create a regular expression pattern to match the attribute in HTML tags
      const pattern = new RegExp(`(${attribute}\\s*=\\s*["'][^"']*["'])`, 'g');
      
      // Replace each matched attribute with normalized formatting
      html = html.replace(pattern, match => 
        match.trim().replace(/\s+/g, ' ').replace(/"\s+/g, '"').replace(/\s+"/g, '"')
      );
    });
  
    return html;
}


/**
 * Normalizes an HTML string by removing extra spaces inside tags.
 * @param {string} html - The HTML string to normalize.
 * @returns {string} The normalized HTML string.
 */
function removeExtraSpacesInTags(html) {
    let insideTag = false;
    let result = '';
  
    // Loop through each character in the HTML string
    for (let i = 0; i < html.length; i++) {
        const char = html[i];
  
        if (char === '<') {
            // Start of a tag
            insideTag = true;
            result += char;
        } else if (char === '>') {
            // End of a tag
            insideTag = false;
            result = result.trimRight() + char;
        } else {
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
  
    // Return the normalized HTML
    return result;
}


/**
 * Normalize specified attributes in HTML tags by removing extra spaces and ensuring consistent formatting.
 * Additionally, remove extra spaces within HTML tags.
 * @param {string} html - The HTML string to normalize.
 * @param {string[]} attributes - An array of attribute names to normalize.
 * @returns {string} The normalized HTML string.
 */
function normalizeAttributesAndTags(html, attributes) { 
    // Normalize specified attributes
    const normalizedHtml = normalizeAttributes(html, attributes);
    // Remove extra spaces within HTML tags
    return removeExtraSpacesInTags(normalizedHtml);
}

  
module.exports = {
    normalizeAttributes,
    normalizeAttributesAndTags,
    removeExtraSpacesInTags
};
  