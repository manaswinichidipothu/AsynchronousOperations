import { readFile, writeFile } from 'node:fs/promises';
// Read the file asynchronously
const content = await readFile('input2.txt', 'utf-8');
console.log("File Content:");
console.log(content);
// Convert the content to uppercase
const modifiedContent = content.toUpperCase();
// Write the modified content asynchronously
await writeFile('output2.txt', modifiedContent, 'utf-8');
console.log("File written successfully!");