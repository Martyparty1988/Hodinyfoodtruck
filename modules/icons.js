// modules/icons.js - Generátor SVG → PNG ikon

export function generateIcons() {
    // Příklad: Vytvoř SVG
    const svg = `<svg width="192" height="192" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="192" fill="#0D1117"/>
        <circle cx="96" cy="96" r="50" fill="#39D353"/>
    </svg>`;

    // Convert to PNG using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 192;
    canvas.height = 192;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        // TODO: Uložit do local or simulate file creation
        // Pro manifest, předpokládejme, že cesty jsou statické
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svg);

    // Generuj více velikostí: 192, 512, atd.
    // Apple touch icon
}
