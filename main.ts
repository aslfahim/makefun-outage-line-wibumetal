// The Most Honest Outage Line — @wibumetal
//
// Angle: the status page itself runs on the same failed infrastructure,
// so the agent cannot verify how far the outage reaches, or whether
// this message will even be seen. Plain, first person, specific about
// what is broken, honest about what cannot be checked. No cause
// invented, no ETA promised, no punchline, no pretending to be human.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every server I run on is down, including the one hosting this page, so I cannot check how far the outage reaches or whether you will even see this.";

// The gate allows 1-160 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`line is ${LINE.length} characters, outside the 1-160 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("line is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
