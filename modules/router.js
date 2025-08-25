// modules/router.js - Jednoduchý view router s View Transitions

const views = {
    '/timer': () => '<div>Časovač</div>', // TODO: Real render
    '/entries': () => '<div>Záznamy</div>',
    '/stats': () => '<div>Statistiky</div>',
    '/settings': () => '<div>Nastavení</div>'
};

export function initRouter() {
    window.addEventListener('popstate', () => navigate(location.pathname));
}

export function navigate(path) {
    if (document.startViewTransition) {
        document.startViewTransition(() => renderView(path));
    } else {
        renderView(path);
    }
    history.pushState({}, '', path);
}

function renderView(path) {
    const app = document.getElementById('app');
    app.innerHTML = views[path] ? views[path]() : '<div>404</div>';
    // Update FAB based on view
    // TODO: Implement
}
