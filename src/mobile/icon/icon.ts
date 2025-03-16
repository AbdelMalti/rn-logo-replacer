export class Icon {
    protected paths: string[];

    constructor();
    constructor(paths: string[]);

    constructor(paths?: string[]) {
        if(paths){
            this.paths = paths;
        } else {
            this.paths = []
        }
    }
}
