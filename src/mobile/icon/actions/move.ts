import { FileOperation } from "../../../file_actions_obj/fileOperation";
import path from "path";
import { formAllPaths } from "./basic";
import { Move } from "../../../file_actions_obj/move";

export function executeMove(source: string, destination: string, platform: string): void {
    let paths: string[] = formAllPaths(platform);
    let action: FileOperation;

    paths.forEach(subFolder => {
        const fullSourceSubPath: string = path.join(source, subFolder)
        const fullDestinationSubPath: string = path.join(destination, subFolder)
        action = new Move(fullSourceSubPath, fullDestinationSubPath);
        action.execute();
    });
}
