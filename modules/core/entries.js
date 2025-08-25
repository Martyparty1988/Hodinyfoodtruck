// modules/core/entries.js - CRUD záznamů, parser

export function createEntry(entryData) {
    const parsed = parseInput(entryData.input);
    const newEntry = { id: generateUID(), ...parsed, userId: getState().currentUser };
    updateState(state => ({ entries: [...state.entries, newEntry] }));
    // Historie verzí: Push do array changes
}

export function updateEntry(id, data) {
    // TODO: Add to history
    updateState(state => ({
        entries: state.entries.map(e => e.id === id ? { ...e, ...data } : e)
    }));
}

export function deleteEntry(id) {
    updateState(state => ({
        entries: state.entries.filter(e => e.id !== id)
    }));
    // Undo: Use snackbar with timeout
}

// Parser vstupů
export function parseInput(input) {
    // Příklady: '2:30', '150', '3h15m', '0830–1210', '+45m', '2,5h'
    // TODO: Implement robustní parser
    return { duration: 150 }; // Minutes example
}

// Undo: Poslední změna z historie
export function undoLastChange() {
    // TODO: Implement
}
