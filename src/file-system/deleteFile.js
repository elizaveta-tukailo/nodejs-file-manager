import { unlink } from 'fs/promises';

export const deleteFile = async ([pathToFile]) => {
    try {
        await unlink(pathToFile);
        console.log(`The file ${pathToFile} has been successfully deleted\n`);
    } catch (error) {
        console.error(`Rm operation failed! ${error.message}\n`);
    }
}
