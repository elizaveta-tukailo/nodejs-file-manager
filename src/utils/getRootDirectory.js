import { dirname } from 'node:path';
import { homedir } from 'node:os';

export const getRootDirectory = () => {
    return dirname(dirname(homedir()));
};