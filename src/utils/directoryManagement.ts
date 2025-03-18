import * as fs from "fs";

/**
 * Ensures a folder exists, creating it if necessary.
 * @param folderPath The path of the folder to create.
 */
export function ensureFolderExists(folderPath: string, isCreate: boolean): boolean {
    if (!fs.existsSync(folderPath)) {
        if(isCreate){
            fs.mkdirSync(folderPath, { recursive: true }); // Create folder (and parents if needed)
            console.log(`✅ Created folder: ${folderPath}`);
        } else{
            console.log(`❌ Folder don't exists: ${folderPath}`);
            return false;
        }
        
    } else {
        console.log(`✅ Folder already exists: ${folderPath}`);
    }
    return true;
}
