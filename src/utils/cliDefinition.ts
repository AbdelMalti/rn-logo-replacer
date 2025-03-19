import { Command } from "commander";
import { Platform } from "../mobile/icon/platform";
import { Operation } from "../file_actions_obj/operation"

export type CliInput = {
    source: string,
    destination: string|null,
    platform: string[],
    operation: string
}

export function defineCliActions(): [Command,CliInput] {
    let cliInput: CliInput = {
        source: "",
        destination: "",
        platform: [],
        operation: ""
    }
    const cliRn = new Command();
    Object.values(Operation).forEach(op => {
      const cliRnCommand = cliRn.command(op)
      cliRnCommand
        .option("-p, --platform <platform>", `
          Default value : android,ios (both)
          Put one of theose values : ${Object.values(Platform)}
        `, "android,ios")
        .option("-s, --source <sourceFolderCli>", `
          Must be a valid path or it will be created
        `)
      // destination
      if (op != Operation.Delete) {
        cliRnCommand
          .option("-d, --destination <path>", `
            Must be a valid path or it will be created
            But be careful with this option, because if 
            you don't set the option platform to only 1 
            value, it will put both images of android and
            ios in the same folder.
          `)
          .action((options) => {
            cliInput.operation = op;
            cliInput.platform = options.platform;
            cliInput.source = options.source;
            cliInput.destination = options.destination;
            console.log(`cliInput.operation : ${cliInput.operation}`);
          });
      } else {
        // Define the action of the command
            cliRnCommand
                .action((options) => {
                    cliInput.operation = op;
                    cliInput.platform = options.platform;
                    cliInput.source = options.source;
                })
      }
      
      const helperText = `
          source             : Must be a valid path or it will be created
          ${op != Operation.Delete ? "destination        : Must be a valid path or it will be created" : ""}
          operation          : ${Object.values(Operation)}
          platform           : ${Object.values(Platform)}
        `
      // help
      cliRnCommand
        .addHelpText(
          "afterAll",
          helperText
        );
    });
    return [cliRn, cliInput];
  }
