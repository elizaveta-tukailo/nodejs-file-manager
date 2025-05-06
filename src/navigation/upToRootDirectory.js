import { homedir } from 'node:os';
import { chdir } from 'node:process';

export const upToRootDirectory = () => {
    chdir(homedir());
} 