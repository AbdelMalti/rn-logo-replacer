import { Operation } from "../../../file_actions_obj/operation"
import { executeCopy } from "./copy";
import { executeDelete } from "./delete";
import { executeMove } from "./move";
import { validatedIconPath } from "../pathValidator"
import { Platform } from "../platform";
import { defaultRNDestination } from "../destination"

export function execute(platform: string[], operation: string, source?: string, destination?: string) {
    if(isNullOrEmpty(source)){
        console.error(`Variable source is null or empty.`);
        process.exit(1);
    }
    // This step validated if the icons paths are in the source folder or not
    const sources: Map<string, string[]> = validatedIconPath(source!, platform);

    sources.forEach( (sourcesSubPaths, platformInSource) => {

        let iconsDestination = destination;
        if(isNullOrEmpty(destination)){
            if(platformInSource == Platform.Android){
                iconsDestination = defaultRNDestination.Android
            }
            if(platformInSource == Platform.Ios) {
                iconsDestination = defaultRNDestination.Ios
            }
        }

        console.log(`platformInSource : ${platformInSource} => 
                                                                sourcesSubPaths: ${sourcesSubPaths}
                                                                destination    : ${iconsDestination}
                                                                `)

        sourcesSubPaths.forEach( sourcesSubPath => 
            {
                if(operation == Operation.Copy) {
                    executeCopy(sourcesSubPath, iconsDestination!, platformInSource);
                } else if (operation == Operation.Move) {
                    executeMove(sourcesSubPath, iconsDestination!, platformInSource);
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

function isNullOrEmpty(value: any): boolean {
    return value === null || value === undefined || value === "";
}