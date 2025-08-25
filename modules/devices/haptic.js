// modules/devices/haptics.js - EnhancedMobileFeatures (vibrace)

export function initHaptics() {
    // Nothing needed
}

export function vibrate(type) {
    if (navigator.vibrate) {
        switch (type) {
            case 'light': navigator.vibrate(10); break;
            case 'medium': navigator.vibrate(50); break;
            case 'heavy': navigator.vibrate(100); break;
            default: break;
        }
    }
    // Fallback: no-op
}
