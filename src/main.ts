import minimist from "minimist";
import path from "path"
// import { FileOperation } from "./file_actions_obj/fileOperation";
// import { Copy } from "./file_actions_obj/copy";
// import { Move } from "./file_actions_obj/move";
// import { Delete } from "./file_actions_obj/delete";
import { Operation } from "./file_actions_obj/operation"
import { execute } from "./mobile/icon/actions/actions";
import { Platform } from "./mobile/icon/platform";


const rnAndroidDestinationIconPath: string = "android/app/src/main/res"
const rnIosDestinationIconPath: string = "ios/WeddifyMobile/Images.xcassets"

console.log(`process.argv : ${process.argv}`)

const args = minimist(process.argv.slice(2)); // Parse CLI arguments



// Define arguments
const sourceFolder: string = args.source || path.join(__dirname, "../source");
const destinationFolder: string = args.destination || path.join(__dirname, "../destination");
// We put the COPY operation as the default.
const operation: string = args.operation || Operation.Copy ;
const platformInUse: string[] = args.platform || [ Platform.Android, Platform.Ios ] ;

if(args.help) {
  console.log(`------------------HELP--------------------`);
  console.log(`source             : Must be a valid path or it will be created`);
  console.log(`destination        : Must be a valid path or it will be created`);
  console.log(`operation          : ${Object.values(Operation)}`);
  console.log(`platform           : ${Object.values(Platform)}`);
  console.log(`------------------------------------------`);
  process.exit(0);
}

if( platformInUse.length > 1 && destinationFolder){
  console.warn(`⚠️ You chose many platform ${platformInUse} to use only one destination path ${destinationFolder} ... This might be not give the result you are expecting`);
}

console.log(`-----------------------------------------`);
console.log(`source             : ${sourceFolder}`);
console.log(`destination        : ${destinationFolder}`);
console.log(`operation          : ${operation}`);
console.log(`platform           : ${platformInUse}`);
console.log(`-----------------------------------------`);


execute(sourceFolder, destinationFolder, platformInUse, operation);
