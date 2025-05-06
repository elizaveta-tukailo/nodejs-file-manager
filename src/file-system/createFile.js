import { writeFile } from 'fs/promises';

export const createFile = async ([filename]) => {
    try {
        if (!filename) {
            throw new Error("Provide correct filename!");
        }
        await writeFile(filename, '');
        console.log(`The file ${filename} was succussfully created!`);
    } catch (error) {
        console.log(`Add operation failed! ${error.message}`);
    }
}