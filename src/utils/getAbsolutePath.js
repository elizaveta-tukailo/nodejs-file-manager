import { isAbsolute, join, normalize } from 'node:path';
import { getRootDirectory } from './getRootDirectory.js';
import { homedir } from 'node:os';
import { cwd } from 'node:process';

export const getAbsolutePath = (path) => {
    const rootDir = getRootDirectory();
    const currentDir = cwd();

    if (path === rootDir) {
        return homedir();
    }

    return normalize(isAbsolute(path) ? path : join(currentDir, path));
};