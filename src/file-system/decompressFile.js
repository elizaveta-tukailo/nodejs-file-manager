import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

export const decompressFile = async ([pathToFile, pathToDestination]) => {
    try {
        if (!pathToFile) { throw new Error('Enter currect path to the file!'); }
        if (!pathToDestination) { throw new Error('Enter destination path for copying file!'); }
        await pipeline(
            createReadStream(pathToFile),
            createBrotliDecompress(),
            createWriteStream(pathToDestination)
        );
        console.log(`File ${pathToFile} has been successfully decompressed!\n`);
    } catch (error) {
        console.log(`Decompress file operation failed! ${error.message}\n`);
    }
}
