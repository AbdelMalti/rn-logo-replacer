import { Operation } from "../../../file_actions_obj/operation"
import { executeCopy } from "./copy";
import { executeDelete } from "./delete";
import { executeMove } from "./move";
import { validatedIconPath } from "../pathValidator"

export function execute(source: string, destination: string, platform: string[], operation: string) {
    // This step validated if the icons paths are in the source folder or not
    const sources: Map<string, string[]> = validatedIconPath(source, platform);

    sources.forEach( (sourcesSubPaths, platformInSource) => {
        console.log(`platformInSource : ${platformInSource} => sourcesSubPaths: ${sourcesSubPaths}`)
        sourcesSubPaths.forEach( sourcesSubPath => 
            {
                if(operation == Operation.Copy) {
                    executeCopy(sourcesSubPath, destination, platformInSource);
                } else if (operation == Operation.Move) {
                    executeMove(sourcesSubPath, destination, platformInSource);
                } else if (operation == Operation.Delete) {
                    executeDelete(sourcesSubPath, platformInSource);
                } else {
                    let list_operation = ""
                    for (let op in Operation) {
                        list_operation += Operation[op as keyof typeof Operation] + '\n\t';
                    }
                    console.error(`The operation ${operation} is not a valid one.\n\t${list_operation}`);
                    process.exit(1);
                }
            }
        )
    });
}