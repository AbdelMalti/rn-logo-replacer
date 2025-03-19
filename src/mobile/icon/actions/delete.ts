import { FileOperation } from "../../../file_actions_obj/fileOperation";
import path from "path";
import { formAllPaths } from "./basic";
import { Delete } from "../../../file_actions_obj/delete";

export function executeDelete(source: string, platform: string): void {
    let paths: string[] = formAllPaths(platform);
    let action: FileOperation;

    paths.forEach(subFolder => {
        const fullSourceSubPath: string = path.join(source, subFolder)
        action = new Delete(fullSourceSubPath);
        action.execute();
    });
}
