import { chdir, cwd } from 'node:process';
import { dirname } from 'node:path';
import { homedir } from 'node:os';
import { showCurrentDirectory } from '../utils/showCurrentDirectory.js';

export const navigateUp = () => {
    const homeDirectory = homedir();
    const currentDirectory = cwd();
  
    if (dirname(currentDirectory) !== dirname(homeDirectory) && currentDirectory !== homeDirectory) {
        chdir(dirname(currentDirectory));
    }
    showCurrentDirectory();
};