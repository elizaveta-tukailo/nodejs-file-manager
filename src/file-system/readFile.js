import { createReadStream } from 'fs';
import { stdout } from 'node:process';
import { getAbsolutePath } from '../utils/getAbsolutePath.js';
import { showCurrentDirectory } from '../utils/showCurrentDirectory.js';

export const readFile = async ([path]) => {
    try {
        const currentPath = getAbsolutePath(path);
        const readStream = createReadStream(currentPath, 'utf-8');
        readStream.pipe(stdout);

        readStream.on('end', () => {
            console.log("\n");
            showCurrentDirectory();
        });
    } catch (error) {
        console.log(`CAT operation failed! ${error.message}`);
    }
}