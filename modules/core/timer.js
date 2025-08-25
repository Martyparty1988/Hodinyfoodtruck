// modules/core/timer.js - Logika časovače

let timerInterval = null;
let wakeLock = null;

export function startTimer() {
    const state = getState();
    if (!state.timer.running) {
        state.timer.startTime = Date.now();
        state.timer.running = true;
        timerInterval = setInterval(updateTimer, 1000);
        requestWakeLock();
    }
    updateState(() => ({})); // Trigger save
}

export function pauseTimer() {
    clearInterval(timerInterval);
    // TODO: Calculate duration
}

export function resumeTimer() {
    // TODO: Implement
}

export function stopTimer() {
    clearInterval(timerInterval);
    releaseWakeLock();
    // TODO: Save entry
}

// Retro-start: Nastavit start time do minulosti
export function retroStart(offset) {
    // TODO: offset in minutes
}

// Update funkce
function updateTimer() {
    // TODO: Update UI
}

// Wake lock handling
async function requestWakeLock() {
    if ('wakeLock' in navigator) {
        wakeLock = await navigator.wakeLock.request('screen');
    }
}

function releaseWakeLock() {
    if (wakeLock) wakeLock.release();
}
