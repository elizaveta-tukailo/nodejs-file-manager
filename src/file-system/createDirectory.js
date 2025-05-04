import { mkdir } from 'fs/promises';

export const createDirectory = async ([dirName]) => {
    try {
        await mkdir(dirName);
        console.log(`The directory ${dirName} has been successfully created!\n`);
    } catch (error) {
        console.error(`Mkdir operation failed! ${error.message}\n`);
    }
}