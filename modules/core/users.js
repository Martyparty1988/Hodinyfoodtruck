// modules/core/users.js - Správa uživatelů (CRUD)

export function createUser(userData) {
    const newUser = { id: generateUID(), ...userData };
    updateState(state => ({ users: [...state.users, newUser] }));
}

export function updateUser(id, data) {
    updateState(state => ({
        users: state.users.map(u => u.id === id ? { ...u, ...data } : u)
    }));
}

export function deleteUser(id) {
    updateState(state => ({
        users: state.users.filter(u => u.id !== id)
    }));
}

export function switchUser(id) {
    updateState(() => ({ currentUser: id }));
}

// Archivace: Přidat flag archived
export function archiveUser(id) {
    updateUser(id, { archived: true });
}
