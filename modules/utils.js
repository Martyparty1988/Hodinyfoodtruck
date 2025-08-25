// modules/utils.js - Common utils

export function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

export function formatTime(minutes) {
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

export function formatCurrency(amount, currency) {
    return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency }).format(amount);
}

export function generateUID() {
    return crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// Date helpers
export function getToday() {
    return new Date().toISOString().split('T')[0];
}

// Memoizace
export function memoize(fn) {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cache[key]) cache[key] = fn(...args);
        return cache[key];
    };
}
