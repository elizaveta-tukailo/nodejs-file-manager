import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { pipeline } from 'stream/promises';

export const calcHash = async ([pathToFile]) => {
    try {
        if (!pathToFile) {
            console.log("Provide path to file!");
        }
        const hash = createHash('sha256');
        const stream = createReadStream(pathToFile);
        await pipeline(stream, hash);
        console.log(`Hash for the file ${pathToFile}: ${hash.digest('hex')}`);
    } catch (error) {
        console.error(`Calc hash operation failed! ${error.message}\n`);
    }
}
