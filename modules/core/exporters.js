// modules/core/exporters.js - Exporty

export function exportCSV() {
    const state = getState();
    let csv = 'ID,Date,Duration,Earnings\n';
    state.entries.forEach(e => {
        csv += `${e.id},${e.date},${e.duration},${e.duration * (state.users.find(u => u.id === e.userId).rate / 60)}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'worktime.csv';
    a.click();
    URL.revokeObjectURL(url);
}

// Rozhraní pro Excel/PDF
export function exportExcel() {
    // TODO: Implement using some library or pure - but spec says TODO
    console.log('TODO: Excel export');
}

export function exportPDF() {
    // TODO
    console.log('TODO: PDF export');
}
