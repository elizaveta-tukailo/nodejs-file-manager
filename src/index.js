import * as readline from 'node:readline/promises';
import { getUsername } from './utils/getUsername.js';
import { showUserMessage } from './utils/showUserMessage.js';
import { stdin as input, stdout as output } from 'node:process';

const init = async () => {
    const username = getUsername();
    showUserMessage(username, "greeting");

    //test work with interface
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('What do you think of Node.js? ');

    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
}
await init();