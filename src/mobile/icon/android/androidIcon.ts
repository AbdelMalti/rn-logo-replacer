import { Icon } from "../icon";

const androidIconPaths: string[] = [
    "mipmap-hdpi",
    "mipmap-mdpi",
    "mipmap-xhdpi",
    "mipmap-xxhdpi",
    "mipmap-xxxhdpi"
]

export class AndroidIcon extends Icon{

    constructor() {
        super(androidIconPaths);
    }
}
