export class Icon {
    private readonly paths: string[];

    constructor();
    constructor(paths: string[]);

    constructor(paths?: string[]) {
        if(paths){
            this.paths = paths;
        } else {
            this.paths = []
        }
    }

    getPaths(): string[]{
        return this.paths;
    }
}
