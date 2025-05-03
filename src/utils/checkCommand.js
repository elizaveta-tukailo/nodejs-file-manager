const VALID_COMMANDS = new Set([
    'up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress', '.exit'
]);

export const checkCommand = (input) => {
    if (typeof input !== 'string' || input.trim() === '') throw new Error("Invalid command: empty string!");

    const [command, ...args] = input.trim().split(/\s+/);
    if (!VALID_COMMANDS.has(command)) {
        throw new Error(`Input invalid command: ${command}`);
    }
    
    return [command, ...args];
}