# typescript-demo
typescript demonstration - first practice


## useful commands

to compile:

    tsc consoleLog.ts

to run:

    node consoleLog.js 


### bugs

'AbortSignal' was also declared here: (https://github.com/microsoft/TypeScript/issues/51567)

Delete the pacakge-lock.json file and run the below to re-install dependencies

    npm i -d @types/node

You should be able to compile without the error now.