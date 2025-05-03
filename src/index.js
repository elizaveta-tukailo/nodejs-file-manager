import { createInterface } from 'node:readline';
import { getUsername } from './utils/getUsername.js';
import { showUserMessage } from './utils/showUserMessage.js';
import { stdin as input, stdout as output } from 'node:process';
import { checkCommand } from './utils/checkCommand.js';
import { showCurrentDirectory } from './utils/showCurrentDirectory.js';

const init = async () => {
    const username = getUsername();
    showUserMessage(username, "greeting");
    showCurrentDirectory();
    const rl = createInterface({ input, output });
    rl.on('line', async (input) => {
        try {
            const [command, ...args] = checkCommand(input);
            switch (command) {
                case ".exit": rl.close(); break;
            }
        } catch (error) {
            console.log(error.message);
        }
    });
    rl.on('SIGINT', () => rl.close());
    rl.on('close', () => {
        showUserMessage(username, "goodbye");
        process.exit(0);
    });
}
await init();