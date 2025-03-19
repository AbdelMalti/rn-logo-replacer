import { Copy } from './copy';
import { Delete } from './delete';
import { FileOperation } from './fileOperation';
import fs from "fs-extra";

export class Move extends FileOperation {
    constructor(source: string, destination: string) {
        super(source, destination);
    }

    async execute(): Promise<void> {
        await super.execute();

        try {
            const copyObj = new Copy(this.source, this.destination);
            const deleteObj = new Delete(this.source);
            // Move the file asynchronously using fs.promises.rename (it moves the file)
            await copyObj.execute();
            await deleteObj.execute();
            console.log('File moved successfully!');
        } catch (error) {
            console.error('Error while moving the file:', error);
        }
    }
}
