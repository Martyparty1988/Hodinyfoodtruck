// modules/devices/wakelock.js - Wake Lock API

let wakeLock = null;

export function initWakeLock() {
    document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            wakeLock = await navigator.wakeLock.request('screen');
        }
    });
}

export async function requestWakeLock() {
    if ('wakeLock' in navigator) {
        wakeLock = await navigator.wakeLock.request('screen');
    }
}

export function releaseWakeLock() {
    if (wakeLock) {
        wakeLock.release();
        wakeLock = null;
    }
}
