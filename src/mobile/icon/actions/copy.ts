import { FileOperation } from "../../../file_actions_obj/fileOperation";
import { Copy } from "../../../file_actions_obj/copy";
import path from "path";
import { formAllPaths } from "./basic";

export function executeCopy(source: string, destination: string, platform: string): void {
    let paths: string[] = formAllPaths(platform);
    let action: FileOperation;

    paths.forEach(subFolder => {
        const fullSourceSubPath: string = path.join(source, subFolder)
        const fullDestinationSubPath: string = path.join(destination, subFolder)
        action = new Copy(fullSourceSubPath, fullDestinationSubPath);
        action.execute();
    });
}
