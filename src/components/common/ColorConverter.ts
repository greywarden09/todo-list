import parse from "color-parse";

interface RGB {
    r: number,
    g: number,
    b: number
}

const parseHex = (color: string): RGB => {
    const parsed = parse(color);
    return {
        r: parsed.values[0],
        g: parsed.values[1],
        b: parsed.values[2]
    }
}

const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}

export const lightenColor = (hex: string, percent: number): string => {
    const rgb: RGB = parseHex(hex);

    let r: number = rgb.r / 255;
    let g: number = rgb.g / 255;
    let b: number = rgb.b / 255;

    const max: number = Math.max(r, g, b), min: number = Math.min(r, g, b);
    let h: number = 0, s: number, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    l += percent;

    if (l > 1) {
        l = 1;
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
    g = Math.round(hue2rgb(p, q, h) * 255);
    b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



