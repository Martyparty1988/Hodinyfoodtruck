// modules/accessibility.js - A11y utility

export function initAccessibility() {
    // Add focus-visible polyfill if needed
    // TODO: Roving tabindex for lists
}

// Utility pro aria
export function setAria(element, attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(`aria-${key}`, value);
    });
}
