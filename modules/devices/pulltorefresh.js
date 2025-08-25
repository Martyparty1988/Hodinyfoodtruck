// modules/devices/pulltorefresh.js - PullToRefreshManager

export function initPullToRefresh(container) {
    let startY = 0;
    let pullDistance = 0;

    container.addEventListener('touchstart', e => {
        startY = e.touches[0].pageY;
    });

    container.addEventListener('touchmove', e => {
        pullDistance = e.touches[0].pageY - startY;
        if (pullDistance > 50 && container.scrollTop === 0) {
            // Show indicator
            // TODO: Visual
        }
    });

    container.addEventListener('touchend', () => {
        if (pullDistance > 100) {
            // Trigger refresh with 1s delay
            setTimeout(() => {
                // Refresh logic, e.g. reload data
                console.log('Refresh');
            }, 1000);
        }
        pullDistance = 0;
    });
}
