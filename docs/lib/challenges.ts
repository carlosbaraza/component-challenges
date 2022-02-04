import fs from "fs";
import { join } from "path";

const challengesDirectory = join(process.cwd(), "../challenges");

export function getPostSlugs() {
  return fs.readdirSync(challengesDirectory);
}

export function getChallenge(challengeName: string): string {
  const fullPath = join(challengesDirectory, challengeName, `README.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return fileContents;
}
