#!/usr/bin/env node


import packageJson from "../package.json";

import { Operation } from "./file_actions_obj/operation"
import { execute } from "./mobile/icon/actions/actions";
import { Platform } from "./mobile/icon/platform";
import { defineCliActions } from "./utils/cliDefinition";

let sourceFolder: string;
let destinationFolder: string|null = null;
let operation: string = Operation.Copy ;
let platformInUse: string[] = [ Platform.Android, Platform.Ios ]


const [cliRnLogoReplacer, cliInput] = defineCliActions();
cliRnLogoReplacer
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version);

cliRnLogoReplacer.parse(process.argv);

execute(cliInput.platform, cliInput.operation, cliInput.source!, cliInput.destination!);


