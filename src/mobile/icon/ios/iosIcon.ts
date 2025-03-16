import { Icon } from "../icon";

const IosIconPaths: string[] = [
    "Images.xcassets"
]

export class IosIcon extends Icon{

    constructor() {
        super(IosIconPaths);
    }
}
