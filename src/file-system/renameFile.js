import { showCurrentDirectory } from '../utils/showCurrentDirectory.js';
import { rename } from 'node:fs/promises';
import { cwd } from 'node:process';
import { join } from 'node:path';

export const renameFile = async ([pathToFile, newFilename]) => {
    try {
        if (!pathToFile) {
            throw new Error('Enter path to the file name');
        }
        if (!newFilename) {
            throw new Error('Enter a new file name');
        }
        const newFilePath = join(cwd(), newFilename);
        await rename(pathToFile, newFilePath);
        console.log(`The file ${pathToFile} has been renamed to ${newFilename} successfully.\n`);
        showCurrentDirectory();
    } catch (error) {
        console.log(`Rename file operation failed! ${error.message}\n`);
    }
}