import { FileOperation } from './fileOperation';
import { ensureFolderExists } from "../utils/directoryManagement"
import fs from "fs-extra";

export class Copy extends FileOperation {

    constructor(source: string, destination: string) {
        super(source, destination)
    }

    // Method to display the source and destination
    displayPaths(): void {
        console.log(`Source: ${this.source}`);
        console.log(`Destination: ${this.destination}`);
    }
    
    async execute(): Promise<void> {
        await super.execute()
        // Making sure that the folders exists
        const isSourceFolder: boolean = ensureFolderExists(this.source, false)
        const isDestinationFolder: boolean = ensureFolderExists(this.destination, true)
        
        // Copying the files
        try {
            // Ensure the destination directory exists
            await fs.ensureDir(this.destination);
        
            // Copy files
            await fs.copy(this.source, this.destination);
          } catch (error) {
            console.error("Error copying files:", error);
          }
    }
    
}