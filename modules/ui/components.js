// modules/ui/components.js - Web Components pro UI prvky

// Segmented Control Component
class IosSegmentedControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Styly zde nebo import z CSS */
            </style>
            <div class="ios-segmented-control"></div>
        `;
    }
    // TODO: Implement logic for segments
}

customElements.define('ios-segmented-control', IosSegmentedControl);

// List Item with Swipe
class SwipeListItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // TODO: Implement swipe gesture, edit/delete actions, undo toast
    }
}

customElements.define('swipe-list-item', SwipeListItem);

// FAB
class FabButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<button class="fab">+</button>`;
    }
    // TODO: Context-based behavior
}

customElements.define('fab-button', Fab177Button);

// Modal Window
class ModalWindow extends HTMLElement {
    // TODO: Implement
}

customElements.define('modal-window', ModalWindow);

// Pull-to-Refresh Indicator
class PullIndicator extends HTMLElement {
    // TODO: Implement
}

customElements.define('pull-indicator', PullIndicator);

// Registrace všech components
export function registerComponents() {
    // Voláno v app.js
}
