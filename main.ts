import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My smartwatch congratulates me for standing up, then watches me sit back down like a disappointed personal trainer.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.trim() !== line || line.length === 0) {
  throw new Error("entry must be a single non-empty line without surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
