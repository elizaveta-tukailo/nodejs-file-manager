import { argv } from 'node:process';

export const greetUser = () => {
    const args = argv.slice(2);
    const usernameFromArgs = args.find((el) => el.startsWith('--username'));
    const username = usernameFromArgs ? usernameFromArgs.replace('--username=', '').trim() : "User";
    console.log(`Welcome to the File Manager, ${username}!`);
    process.on('exit', () => console.log(`Thank you for using File Manager, ${username}, goodbye!`));
}
