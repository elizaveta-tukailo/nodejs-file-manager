import { showCurrentDirectory } from '../utils/showCurrentDirectory.js';
import { createReadStream, createWriteStream } from 'node:fs';
import { join, basename } from 'node:path';
import { pipeline } from 'stream/promises';

export const copyFile = async ([pathToFile, pathToNewDirectory]) => {
    try {
        if (!pathToFile) {
            throw new Error('Enter currect path to the file!');
        }
        if (!pathToNewDirectory) {
            throw new Error(
              'Enter target path for copying file!'
            );
        }
        const fileName = basename(pathToFile);
        const targetPath = join(pathToNewDirectory, pathToFile);
        await pipeline(
            createReadStream(pathToFile),
            createWriteStream(targetPath)
        );
        console.log(`The file ${fileName} has been successfully copied to ${pathToNewDirectory}\n`);
        showCurrentDirectory();
    } catch (error) {
        console.error(`Copy file operation failed! ${error.message}\n`);
    }
}