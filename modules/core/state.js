// modules/core/state.js - Centrální stav, immutable updates

let state = {
    version: '1.0',
    users: [],
    currentUser: null,
    entries: [],
    timer: { running: false, startTime: null },
    // Další
};

// Inicializace state - načtení z storage, migrace
export function initState() {
    // Výchozí uživatel pokud prázdné
    if (state.users.length === 0) {
        state.users.push({ id: '1', name: 'Marty', rate: 400, currency: 'CZK' });
        state.currentUser = '1';
    }
    // TODO: Schéma validace, migrace
}

export function getState() {
    return Object.freeze(state); // Immutable
}

export function updateState(updater) {
    state = { ...state, ...updater(state) }; // Immutable update
    // TODO: Trigger re-render via router or events
    saveData(); // Uložit do storage
}
