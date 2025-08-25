// modules/devices/notifications.js - NotificationManager

export function initNotifications() {
    if ('Notification' in window && Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

export function notify(title, body, options = {}) {
    if (Notification.permission === 'granted') {
        new Notification(title, { body, ...options });
    }
}
