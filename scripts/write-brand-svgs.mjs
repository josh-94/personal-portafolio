import { mkdirSync, writeFileSync } from 'node:fs';
import { MARK_BLUE, MARK_NAVY, MARK_NAVY_STROKE, MARK_NODE } from './brand-paths.mjs';

const GREEN = '#22C55E';
const COBALT = '#1D4ED8';
const NAVY = '#0B1F3A';
const ICE = '#F8FAFC';

function mark({ cap = COBALT, body = NAVY, node = GREEN } = {}) {
  return `<path fill="${cap}" d="${MARK_BLUE}"/><path d="${MARK_NAVY}" fill="none" stroke="${body}" stroke-width="${MARK_NAVY_STROKE}" stroke-linecap="round" stroke-linejoin="round"/><circle fill="${node}" cx="${MARK_NODE.cx}" cy="${MARK_NODE.cy}" r="${MARK_NODE.r}"/>`;
}

function svg(viewBox, body, label = 'codewithjosh') {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="${label}">${body}</svg>\n`;
}

function lockup(body, word, node) {
  return svg(
    '0 0 340 64',
    `${mark({ body, node })}<text x="78" y="40" fill="${word}" font-family="Outfit" font-size="28" font-weight="600">codewithjosh</text>`,
  );
}

mkdirSync('public/brand', { recursive: true });

const files = {
  'public/favicon.svg': svg('0 0 64 64', mark()),
  'public/brand/favicon-green.svg': svg('0 0 64 64', mark({ node: GREEN })),
  'public/brand/isotipo.svg': svg('0 0 64 64', mark()),
  'public/brand/isotipo-green.svg': svg('0 0 64 64', mark({ node: GREEN })),
  'public/brand/isotipo-mono-navy.svg': svg('0 0 64 64', mark({ cap: NAVY, body: NAVY, node: NAVY })),
  'public/brand/isotipo-mono-ice.svg': svg('0 0 64 64', mark({ cap: ICE, body: ICE, node: ICE })),
  'public/brand/lockup-horizontal.svg': lockup(NAVY, NAVY, GREEN),
  'public/brand/lockup-horizontal-green.svg': lockup(NAVY, NAVY, GREEN),
  'public/brand/lockup-horizontal-ice.svg': lockup(ICE, ICE, GREEN),
  'public/brand/lockup-vertical.svg': svg(
    '0 0 220 140',
    `<g transform="translate(78 4)">${mark()}</g><text x="110" y="124" text-anchor="middle" fill="${NAVY}" font-family="Outfit" font-size="22" font-weight="600">codewithjosh</text>`,
  ),
};

const og = (node, word) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="codewithjosh">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <g transform="translate(88 168) scale(4.2)">${mark({ body: ICE, node })}</g>
  <text x="400" y="292" fill="${ICE}" font-family="Outfit" font-size="52" font-weight="600">codewithjosh</text>
  <text x="88" y="470" fill="${ICE}" font-family="Outfit" font-size="42" font-weight="500">Automatiza lo que sigue.</text>
  <text x="88" y="530" fill="${ICE}" font-family="Outfit" font-size="42" font-weight="500">Conecta lo que <tspan fill="${word}">importa.</tspan></text>
  <text x="88" y="582" fill="#E0F2FE" font-family="IBM Plex Mono" font-size="22">codewithjosh.codes</text>
</svg>
`;

files['public/brand/og.svg'] = og(GREEN, GREEN);
files['public/brand/og-green.svg'] = og(GREEN, GREEN);

for (const [file, contents] of Object.entries(files)) {
  writeFileSync(file, contents);
  console.log(file);
}
