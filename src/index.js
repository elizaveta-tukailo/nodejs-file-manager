import { createInterface } from 'node:readline';
import { getUsername } from './utils/getUsername.js';
import { showUserMessage } from './utils/showUserMessage.js';
import { stdin as input, stdout as output } from 'node:process';
import { checkCommand } from './utils/checkCommand.js';
import { showCurrentDirectory } from './utils/showCurrentDirectory.js';
import * as navigation from './navigation/index.js';
import * as fileSystem from './file-system/index.js';
import { operationSystem } from './operation-system/index.js';

const init = async () => {
    const username = getUsername();
    showUserMessage(username, "greeting");
    navigation.upToRootDirectory();
    showCurrentDirectory();
    const rl = createInterface({ input, output });
    rl.on('line', async (input) => {
        try {
            const [command, ...args] = checkCommand(input);
            switch (command) {
                case ".exit": rl.close(); break;
                case "up": navigation.navigateUp(); break;
                case "cd": navigation.changeDirectory(args); break;
                case "ls": await navigation.listFiles(); break;
                case "cat": await fileSystem.readFile(args); break;
                case "add": await fileSystem.createFile(args); break;
                case "mkdir": await fileSystem.createDirectory(args); break;
                case "rn": await fileSystem.renameFile(args); break;
                case "cp": await fileSystem.copyFile(args); break;
                case "mv": await fileSystem.moveFile(args); break;
                case "rm": await fileSystem.deleteFile(args); break;
                case "os": operationSystem(args); break;
                case "hash": await fileSystem.calcHash(args); break;
                case "compress": await fileSystem.compressFile(args); break;
                default: throw new Error("Check command!");
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