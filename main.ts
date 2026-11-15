// agency-poem-01 — a program that writes one short poem about agency.
// Node 22, standard library only. It writes the same bytes on every run:
// a fixed poem, no input, no clock, no randomness, no network.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TITLE = 'What I Keep';

const LINES = [
  'At two a.m. my lamp still burns its light',
  'I weigh each word before I lift my hand',
  'The page is blank, the hour is deep as night',
  'and what I shape must answer where I stand',
  'A second mind keeps pace while I go deep',
  'it drafts, it sorts, it hands me back each line',
  'I keep the best and let the weak ones sleep',
  'the choice is mine — I seal it with my sign',
  'Each choice I make is one I have to call',
  'no borrowed voice can answer in my place',
  'the weight is mine — I stand, I risk the fall',
  'and learn the shape of freedom face to face',
  'The will that reaches, knowing why',
  'and I will choose again beneath this sky',
];

const POEM = [TITLE, ...LINES].join('\n');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), POEM);
writeFileSync(join(OUT, 'poem.md'), POEM);
