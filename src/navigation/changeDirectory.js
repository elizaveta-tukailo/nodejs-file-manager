import { chdir } from 'node:process';
import { homedir } from 'node:os';
import { dirname } from 'node:path';
import { getAbsolutePath } from '../utils/getAbsolutePath.js';
import { showCurrentDirectory } from '../utils/showCurrentDirectory.js';
import { getRootDirectory } from '../utils/getRootDirectory.js';

export const changeDirectory = ([path]) => {
    if (!path.trim()) {
        throw new Error('Provide path to change directory');
    }

    const rootDirectory = getRootDirectory();
    const homeDirectory = homedir();
    let targetDirectory;
    try {
        targetDirectory = getAbsolutePath(path);
        const shouldUseHomeDirectory = 
            targetDirectory.toLowerCase() === dirname(homeDirectory).toLowerCase() ||
            targetDirectory.toLowerCase() === rootDirectory.toLowerCase();

        chdir(shouldUseHomeDirectory ? homeDirectory : targetDirectory);   
        showCurrentDirectory();
    } catch (error) {
        throw new Error(`CD operation error! ${error.message}`);
    }
};