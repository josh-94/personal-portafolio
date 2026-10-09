import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

mkdirSync('public/brand', { recursive: true });

const jobs = [
  ['public/favicon.svg', 'public/brand/favicon-32.png', 32],
  ['public/favicon.svg', 'public/brand/apple-touch.png', 180],
  ['public/brand/favicon-green.svg', 'public/brand/favicon-32-green.png', 32],
  ['public/brand/favicon-green.svg', 'public/brand/apple-touch-green.png', 180],
  ['public/brand/og.svg', 'public/brand/og.png', 1200],
  ['public/brand/og-green.svg', 'public/brand/og-green.png', 1200],
];

for (const [input, output, width] of jobs) {
  const svg = readFileSync(input);
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: {
      fontFiles: [
        'scripts/fonts/Outfit-Medium.ttf',
        'scripts/fonts/Outfit-SemiBold.ttf',
        'scripts/fonts/IBMPlexMono-Regular.ttf',
      ],
      loadSystemFonts: false,
      defaultFontFamily: 'Outfit',
    },
  });
  writeFileSync(output, resvg.render().asPng());
  console.log(output);
}
