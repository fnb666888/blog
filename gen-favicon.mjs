// One-off favicon generator — renders a 512x512 RGBA tile and encodes PNG
// with zero external deps (Node zlib). Design matches the site's --grad.
import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';

const S = 512;
const SS = 4; // supersampling per axis

// palette (matches _variables-custom.scss accent / accent-2)
const BLUE = [20, 120, 235];
const CYAN = [13, 204, 242];
const INK = [251, 253, 255];

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

function sdRoundBox(px, py, cx, cy, hx, hy, r) {
    const qx = Math.abs(px - cx) - hx + r;
    const qy = Math.abs(py - cy) - hy + r;
    return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - r;
}

// F glyph = union of three rounded strokes (bbox centered on 256,256)
const STROKE_R = 14;
const F_PARTS = [
    { cx: 201, cy: 256, hx: 29, hy: 106 }, // stem
    { cx: 256, cy: 178, hx: 84, hy: 28 }, // top arm
    { cx: 243, cy: 269, hx: 71, hy: 27 } // mid arm
];
function insideF(px, py) {
    for (const p of F_PARTS) {
        if (sdRoundBox(px, py, p.cx, p.cy, p.hx, p.hy, STROKE_R) < 0) return true;
    }
    return false;
}

function sample(px, py) {
    // tile coverage
    if (sdRoundBox(px, py, 256, 256, 256, 256, 112) >= 0) return null; // transparent
    // diagonal gradient (135deg: top-left -> bottom-right)
    const t = clamp((px + py) / (2 * S), 0, 1);
    let r = lerp(BLUE[0], CYAN[0], t);
    let g = lerp(BLUE[1], CYAN[1], t);
    let b = lerp(BLUE[2], CYAN[2], t);
    // soft glass highlight, upper-left
    const hl = clamp(1 - Math.hypot(px - 150, py - 120) / 340, 0, 1);
    const add = hl * hl * 60;
    r = clamp(r + add, 0, 255);
    g = clamp(g + add, 0, 255);
    b = clamp(b + add, 0, 255);
    // glyph
    if (insideF(px, py)) return INK;
    return [r, g, b];
}

// render with supersampling
const buf = Buffer.alloc(S * S * 4);
for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
        let rr = 0,
            gg = 0,
            bb = 0,
            aa = 0;
        for (let sy = 0; sy < SS; sy++) {
            for (let sx = 0; sx < SS; sx++) {
                const px = x + (sx + 0.5) / SS;
                const py = y + (sy + 0.5) / SS;
                const c = sample(px, py);
                if (c) {
                    rr += c[0];
                    gg += c[1];
                    bb += c[2];
                    aa += 1;
                }
            }
        }
        const n = SS * SS;
        const i = (y * S + x) * 4;
        if (aa === 0) {
            buf[i] = buf[i + 1] = buf[i + 2] = buf[i + 3] = 0;
        } else {
            buf[i] = Math.round(rr / aa);
            buf[i + 1] = Math.round(gg / aa);
            buf[i + 2] = Math.round(bb / aa);
            buf[i + 3] = Math.round((aa / n) * 255);
        }
    }
}

// ---- PNG encode ----
const crcTable = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
        t[n] = c >>> 0;
    }
    return t;
})();
function crc32(b) {
    let c = 0xffffffff;
    for (let i = 0; i < b.length; i++) c = crcTable[(c ^ b[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const t = Buffer.from(type, 'ascii');
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
    return Buffer.concat([len, t, data, crc]);
}
const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(S, 0);
ihdr.writeUInt32BE(S, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 6; // RGBA
// add filter byte 0 per scanline
const raw = Buffer.alloc(S * (S * 4 + 1));
for (let y = 0; y < S; y++) {
    raw[y * (S * 4 + 1)] = 0;
    buf.copy(raw, y * (S * 4 + 1) + 1, y * S * 4, (y + 1) * S * 4);
}
const png = Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
writeFileSync(new URL('./assets/favicon.png', import.meta.url), png);
console.log('wrote assets/favicon.png', png.length, 'bytes');
