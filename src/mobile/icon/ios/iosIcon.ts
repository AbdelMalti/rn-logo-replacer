import { Icon } from "../icon";

const IosIconPaths: string[] = [
    "AppIcon.appiconset"
]

export class IosIcon extends Icon{

    constructor() {
        super(IosIconPaths);
    }
}
