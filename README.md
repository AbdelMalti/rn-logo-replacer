# rn-logo-replacer
This is a project aiming at remplacing the logo of a react native app with a single npx command

## How to run it
### From your nodeJS project
```
npm i rn-logo-replacer
npx rn-logo-replacer Copy --platform android,ios --source <SOME PATH>
```
### Cloning it from github
```
git clone https://github.com/AbdelMalti/rn-logo-replacer.git
cd rn-logo-replacer
npm run change-icon
```

## CLI
### All commands
Commands:
  Copy [options]
  Move [options]
  Delete [options]
  help [command]    display help for command
#### Move & Copy
```
Options:
  -p, --platform <platform>
            Default value : android,ios (both)
            Put one of theose values : android,ios
           (default: "android,ios")
  -s, --source <sourceFolderCli>
            Must be a valid path or it will be created

  -d, --destination <path>
              Must be a valid path or it will be created
              But be careful with this option, because if
              you don't set the option platform to only 1
              value, it will put both images of android and
              ios in the same folder.
```
#### Delete
```
Options:
  -p, --platform <platform>
            Default value : android,ios (both)
            Put one of theose values : android,ios
           (default: "android,ios")
  -s, --source <sourceFolderCli>
            Must be a valid path or it will be created
```
### All arguments
```
source             : Must be a valid path or it will be created
destination        : Must be a valid path or it will be created
platform           : android,ios
``` 
### Example
```
npm run change-icon -- Copy --platform android,ios --source <SOME PATH> --destination <SOME OTHER PATH>
```