export class FileOperation {
    protected source: string;
    protected destination: string;

    constructor(source: string, destination: string) {
        this.source = source;
        this.destination = destination;
    }

    // Common method that could be overridden
    async execute(): Promise<void> {
        console.log(`Executing ${this.constructor.name} from ${this.source} to ${this.destination}`);
    }
}
