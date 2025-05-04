import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

export const compressFile = async ([pathToFile, pathToDestination]) => {
    try {
        if (!pathToFile) { throw new Error('Enter currect path to the file!'); }
        if (!pathToDestination) { throw new Error('Enter destination path for compression file!'); }
        await pipeline(
            createReadStream(pathToFile),
            createBrotliCompress(),
            createWriteStream(pathToDestination)
        );
        console.log(`File ${pathToFile} has been successfully compressed!\n`);
    } catch (error) {
        console.log(`Compress file operation failed! ${error.message}\n`);
    }
}
