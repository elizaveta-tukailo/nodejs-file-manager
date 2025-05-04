import { showCurrentDirectory } from '../utils/showCurrentDirectory.js';
import { join, basename } from 'node:path';
import { unlink } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

export const moveFile = async ([pathToFile, pathToNewDirectory]) => {
    try {
        if (!pathToFile) {
            throw new Error('Enter currect path to the file!');
        }
        if (!pathToNewDirectory) {
            throw new Error(
              'Enter target path for moving file!'
            );
        }
        const fileName = basename(pathToFile);
        const targetPath = join(pathToNewDirectory, pathToFile);
        await pipeline(
            createReadStream(pathToFile),
            createWriteStream(targetPath)
        );
        await unlink(pathToFile);
        console.log(`The file ${fileName} has been successfully moved to ${pathToNewDirectory}\n`);
        showCurrentDirectory();
    } catch (error) {
        console.log(`Mv operation failed! ${error.message}`);
    }
}