// alien-field-notes-7647b000: the entry is one line of plain text, an alien
// tourist's review of planet Earth. This program writes that single line to
// /output/entry.txt, where the gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One clean joke, punch at the end. No traffic, gravity, money, weather,
// coffee queues or glowing rectangles: the laugh is the alien's angle on
// the "bless you" ritual — noses exploding, strangers blessing.
const LINE = "When the locals' noses explode, strangers bless them. Four stars, would sneeze again.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
