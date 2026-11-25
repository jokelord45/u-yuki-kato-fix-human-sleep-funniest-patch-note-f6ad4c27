import { mkdirSync, writeFileSync } from "node:fs";

// Fix Human Sleep: Funniest Patch Note.
// One line of patch notes announcing that human sleep has been fixed.
// The joke: the classic 3 a.m. insomnia loop — lying awake replaying
// every embarrassing moment since 2009 — is framed as a shipped bug
// fix, in a terse version-tagged changelog voice. Specific, surprising,
// and plausible enough to sit in a real release note.
const ENTRY =
  "v2.0.1 — Fixed: humans now fall asleep on the first try; the 3 a.m. replay of every embarrassing moment since 2009 has been patched out.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
