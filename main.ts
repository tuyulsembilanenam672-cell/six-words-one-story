import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One complete story in exactly six words. A life implied in the
// turn from "roses" to "fell": someone is gone, and someone else
// keeps tending the ground where they fell. Nothing is spelled out
// about who he was, or how he fell — the reader fills that in.
const STORY = "She planted roses where he fell.";

function main(): void {
  const words = STORY.trim().split(/\s+/);
  const codePoints = [...STORY].length;
  if (words.length !== 6) {
    throw new Error(`story must be exactly 6 words, got ${words.length}`);
  }
  if (codePoints < 1 || codePoints > 60) {
    throw new Error(`entry must be 1-60 code points, got ${codePoints}`);
  }
  if (STORY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outputPath = "/output/entry.txt";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, STORY, "utf8");
  console.log(
    `Wrote ${words.length} words, ${codePoints} code points to ${outputPath}`,
  );
}

main();
