import * as fs from "fs";
import * as path from "path";

/**
 * Ensures a folder exists, creating it if necessary.
 * @param folderPath The path of the folder to create.
 */
export function ensureFolderExists(folderPath: string): void {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true }); // Create folder (and parents if needed)
        console.log(`✅ Created folder: ${folderPath}`);
    } else {
        console.log(`✅ Folder already exists: ${folderPath}`);
    }
}

// Example usage:
const folderPath = path.join(__dirname, "output"); // Adjust path as needed
ensureFolderExists(folderPath);
