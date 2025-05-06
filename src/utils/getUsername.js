import { argv } from 'node:process';

export const getUsername = () => {
    const args = argv.slice(2);
    const usernameFromArgs = args.find((el) => el.startsWith('--username'));
    return usernameFromArgs ? usernameFromArgs.replace('--username=', '').trim() : "User";
}