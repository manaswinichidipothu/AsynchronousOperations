import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const content = await readFile('input2.txt', 'utf-8');

        const modifiedContent = content.toUpperCase();

        await writeFile('output2.txt', modifiedContent, 'utf-8');

        res.send(`
            <h1>Asynchronous Operations</h1>
            <h2>Original Content:</h2>
            <p>${content}</p>
            <h2>Uppercase Content:</h2>
            <p>${modifiedContent}</p>
            <h3>File written successfully!</h3>
        `);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
