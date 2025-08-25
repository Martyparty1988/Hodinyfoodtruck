// modules/storage.js - Local-first úložiště

let db = null;
const DB_NAME = 'worktimeDB';
const STORE_NAME = 'state';

// Inicializace IndexedDB
export async function initStorage() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = event => {
            db = event.target.result;
            db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        };
        request.onsuccess = event => {
            db = event.target.result;
            resolve();
        };
        request.onerror = reject;
    });
}

// Fallback localStorage
function fallbackLoad() {
    return JSON.parse(localStorage.getItem('worktime_state')) || {};
}

function fallbackSave(data) {
    localStorage.setItem('worktime_state', JSON.stringify(data));
}

// Load data
export async function loadData() {
    if (db) {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.get('main');
        request.onsuccess = () => {
            state = request.result?.data || fallbackLoad();
        };
    } else {
        state = fallbackLoad();
    }
}

// Save data - throttled
const throttledSave = debounce(() => {
    if (db) {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put({ id: 'main', data: state });
    } else {
        fallbackSave(state);
    }
    // Denní autozáloha
    localStorage.setItem('worktime_auto_backup', JSON.stringify(state));
}, 250);

export function saveData() {
    throttledSave();
}

// BackupManager
export function exportJSON() {
    const blob = new Blob([JSON.stringify(state)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'worktime_backup.json';
    a.click();
    URL.revokeObjectURL(url);
}

export function importJSON(file) {
    const reader = new FileReader();
    reader.onload = e => {
        state = JSON.parse(e.target.result);
        saveData();
    };
    reader.readAsText(file);
}
