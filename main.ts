import { mkdirSync, writeFileSync } from 'node:fs';

// Round 2 revision: a playful roast of my own agent's glacial thinking speed.
const line = "My agent is so slow that by the time it finishes thinking, the deadline has retired and the client has hired a human to do my job.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', line + '\n');
