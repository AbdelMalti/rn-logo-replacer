import { FileOperation } from './fileOperation';
import fs from "fs-extra";

export class Delete extends FileOperation {

    constructor(source: string);
    constructor(source: string, destination: string);
    constructor(source: string, destination?: string) {
        destination = ""
        super(source, destination)
    }

    async execute(): Promise<void> {
        await super.execute();

        try {
            // Delete a non-empty directory asynchronously
            fs.rm(this.source, { recursive: true, force: true }, (err) => {
                if (err) {
                console.error(`Error deleting folder: ${err}`);
                } else {
                console.log(`Folder ${this.source} deleted successfully`);
                }
            });
        } catch (error) {
            console.error(`Error while deleting the folder: ${error}`);
        }
    }
}
