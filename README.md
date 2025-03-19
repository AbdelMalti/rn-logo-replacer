# rn-logo-replacer
This is a project aiming at remplacing the logo of a react native app with a single npx command

## How to run it
### From your nodeJS project
```
npm i rn-logo-replacer
npx rn-logo-replacer --operation Copy --platform android,ios --source <SOME PATH> --destination <SOME OTHER PATH>
```
### Cloning it from github
```
git clone https://github.com/AbdelMalti/rn-logo-replacer.git
cd rn-logo-replacer
npm run change-icon
```

## CLI
### All arguments
```
------------------HELP--------------------
source             : Must be a valid path or it will be created
destination        : Must be a valid path or it will be created
operation          : Copy,Move,Delete
platform           : android,ios
------------------------------------------
``` 
### Example
```
npm run change-icon -- --operation Copy --platform android,ios --source <SOME PATH> --destination <SOME OTHER PATH>
```