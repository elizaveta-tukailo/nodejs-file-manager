import os from 'node:os';

export const operationSystem = ([args]) => {
    try {
        if (!args) {
            throw new Error('Enter argument with the command os!');
        }
        switch (args) {
            case "--EOL": console.log(`EOL: ${os.EOL}\n`); break;
            case "--cpus": 
                const cpus = os.cpus().map(({ model, speed }) => ({ 'CPU Model': model, 'Clock rate (GHz)': `${speed / 1000}`}));
                console.log(`Number of CPUs: ${os.cpus().length}\n`);
                console.table(cpus);
                break;
            case "--homedir": console.log(`Home directory: ${os.homedir()}\n`); break;
            case "--username": console.log(`Username: ${os.userInfo().username}\n`); break;
            case "--architecture": console.log(`CPU architecture: ${os.arch()}\n`); break;
            default: throw new Error("Invalid os command!\n");
        }
    } catch (error){
        console.log(`Os operation failed! ${error.message}\n`);
    }
}
