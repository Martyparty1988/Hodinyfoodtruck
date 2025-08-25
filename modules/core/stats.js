// modules/core/stats.js - Výpočty statistik

export function calculateStats(period = 'day') {
    const state = getState();
    // Filtruj entries dle period
    // Agreguj sum time, earnings (rate * time)
    // TODO: Implement aggregation for graphs and heatmap
    return { totalTime: 0, totalEarnings: 0 };
}

// Pro heatmapu: Produktivita dle dnů
export function generateHeatmapData() {
    // TODO: 2D array or similar for canvas
}
