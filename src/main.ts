import minimist from "minimist";
import path from "path"
import { FileOperation } from "./file_actions_obj/fileOperation";
import { Copy } from "./file_actions_obj/copy";
import { Move } from "./file_actions_obj/move";
import { Delete } from "./file_actions_obj/delete";
import { Operation } from "./file_actions_obj/operation"


console.log(`process.argv : ${process.argv}`)

const args = minimist(process.argv.slice(2)); // Parse CLI arguments



// Define arguments
const sourceFolder = args.source || path.join(__dirname, "../source");
const destinationFolder = args.destination || path.join(__dirname, "../destination");
// We put the COPY operation as the default.
const operation = args.operation || Operation.Copy ;

let operationObject : FileOperation;

if(operation == Operation.Copy) {
  operationObject = new Copy(sourceFolder, destinationFolder);

} else if (operation == Operation.Move) {
  operationObject = new Move(sourceFolder, destinationFolder);
  
} else if (operation == Operation.Delete) {
  operationObject = new Delete(sourceFolder, destinationFolder);
  
} else {
    let list_operation = ""
    for (let op in Operation) {
      list_operation += Operation[op as keyof typeof Operation] + '\n\t';
    }
    console.error(`The operation ${operation} is not a valid one.\n\t${list_operation}`);
    process.exit(1);
}

operationObject.execute();