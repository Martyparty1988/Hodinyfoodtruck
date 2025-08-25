// app.js - Hlavní orchestrátor aplikace
// Architektura a pořadí inicializace:
// 1. Import modulů
// 2. Inicializace storage a state
// 3. Registrace service workeru
// 4. Inicializace routeru a UI
// 5. Inicializace zařízeníových funkcí (notifications, haptics, wakelock, pulltorefresh)
// 6. Bootstrap app - render inicial view
// 7. Event listeners pro klávesové zkratky atd.

import { initState, getState } from './modules/core/state.js';
import { initRouter, navigate } from './modules/router.js';
import { initStorage, loadData, saveData } from './modules/storage.js';
import { generateIcons } from './modules/icons.js';
import { registerComponents } from './modules/ui/components.js';
import { initNotifications } from './modules/devices/notifications.js';
import { initHaptics } from './modules/devices/haptics.js';
import { initWakeLock } from './modules/devices/wakelock.js';
import { initPullToRefresh } from './modules/devices/pulltorefresh.js';
import { initAccessibility } from './modules/accessibility.js';
import { debounce } from './modules/utils.js';

// Globální konstanty
const APP_VERSION = '1.0.0';

// Bootstrap funkce
async function bootstrap() {
    // 1. Generovat ikony runtime
    generateIcons();

    // 2. Inicializace storage a state
    await initStorage();
    await loadData();
    initState();

    // 3. Registrace service workeru
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('SW registered:', reg))
            .catch(err => console.error('SW registration failed:', err));
    }

    // 4. Registrace web components
    registerComponents();

    // 5. Inicializace routeru
    initRouter();

    // 6. Inicializace zařízeníových funkcí
    initNotifications();
    initHaptics();
    initWakeLock();
    initPullToRefresh(document.querySelector('.main-content'));
    initAccessibility();

    // 7. Inicial render
    navigate(location.pathname || '/timer');

    // Event listeners
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            // Obnova wake lock atd.
            initWakeLock();
        }
    });

    // Auto měsíční export - check při startu
    checkMonthlyExport();
}

// Klávesové zkratky
function handleKeydown(e) {
    if (e.code === 'Space') {
        // Start/stop timer
        // TODO: Implement based on current view
    } else if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
        // Focus search
        // TODO: Implement
    }
}

// Příklad funkce pro monthly export
function checkMonthlyExport() {
    const state = getState();
    const today = new Date();
    if (today.getDate() === 1 && !state.lastMonthlyExport) {
        // Nabídnout export
        // TODO: Use exporters
    }
}

// Spustit bootstrap
document.addEventListener('DOMContentLoaded', bootstrap);
