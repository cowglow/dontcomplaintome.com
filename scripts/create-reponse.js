import * as fs from "fs";
import * as path from "path";

const outputDir = "response";
const response = process.argv.slice(2).join(" ");
const files = fs.readdirSync(outputDir);
const filePath = path.join(outputDir, `${files.length + 1}.json`);

fs.writeFileSync(filePath, JSON.stringify({ response }, null, 2));
