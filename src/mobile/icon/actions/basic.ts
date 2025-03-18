import { Platform } from "../platform";
import { Icon } from "../icon";
import { AndroidIcon } from "../android/androidIcon";
import { IosIcon } from "../ios/iosIcon";

export function formAllPaths(platform: string): string[] {
    let paths: string[] = [];

    if(platform == Platform.Android) {
        let icon: Icon = new AndroidIcon();
        paths.push(...icon.getPaths());
    } 
    
    if(platform == Platform.Ios) {
        let icon: Icon = new IosIcon();
        paths.push(...icon.getPaths());
    }

    return paths;
}