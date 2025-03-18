import { Platform } from "./platform"
import * as fs from "fs";
import path from "path"

const androidPossiblePaths: string[] = [
    "mipmap-*",
    "android"
]

const iosPossiblePaths:string[] = [
    "ios",
    "Assets.xcassets",
    "Images.xcassets",
]

export function validatedIconPath(source: string, platform: string[]): Map<string, string[]> {
    let correctedSourcePath: Map<string, string[]> = new Map<string, string[]>();

    if(platform.includes(Platform.Android)){
        correctedSourcePath.set(
            Platform.Android, validatedAndroidIconPath(source)
        );
    }
    if(platform.includes(Platform.Ios)){
        correctedSourcePath.set(
            Platform.Ios, validatedIosIconPath(source)
        );
    }
    // If the specific subfolder are not found, we just return the original source path
    if(platform.length == 0){
        correctedSourcePath.set(platform[0], [source]);
    }
    return correctedSourcePath;
}

function validatedAndroidIconPath(source: string): string[] {
    return lookInSubFolder(source, androidPossiblePaths);
}

function validatedIosIconPath(source: string): string[] {
    return lookInSubFolder(source, iosPossiblePaths);
}

function lookInSubFolder(source: string, pathsToLookFor: string[]): string[] {
    let sources: string[] = [];
    // Read the contents of the source directory
    const allSubItems = fs.readdirSync(source, { withFileTypes: true });
    // Filter only the folders
    const allSubFolders = allSubItems.filter(
        (subItem) => subItem.isDirectory()
    ).map(
        (item) => item.name
    );
    // Get the folder associated with
    sources = allSubFolders.filter(
        (subFolder) => pathsToLookFor.includes(subFolder)
    ).map(
        (subFolder) => path.join(source, subFolder)
    );
    return sources;
}