import { cwd } from 'node:process';

export const showCurrentDirectory = () => {
    console.log(`You are currently in ${cwd()}:`);
}