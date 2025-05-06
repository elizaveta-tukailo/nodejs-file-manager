import { cwd } from 'node:process';
import { readdir } from 'node:fs/promises';
import { showCurrentDirectory } from '../utils/showCurrentDirectory.js';

const sortItems = (arr) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

export const listFiles = async () => {
    try {
        const currentDir = cwd();
        const items = await readdir(currentDir, { withFileTypes: true });
        
        const groupedItems = items.reduce(
            (acc, item) => {
              acc[item.isFile() ? "files" : "folders"].push({ name: item.name, type: item.isFile() ? "file" : "directory" });
              return acc;
            },
            { folders: [], files: [] }
        );

        console.table([...sortItems(groupedItems.folders), ...sortItems(groupedItems.files)]);
        showCurrentDirectory();
    } catch (error) {
        console.log(`LS operation failed! ${error.message}`);
    }
};