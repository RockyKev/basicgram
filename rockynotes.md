
1. To build things: 
In `api`: 

* `npm start` runs the typescript parser. 
* `npm run dev` sets up the watcher
* `npm run build` compiles tsc

http://localhost:3000/

In `view`: 

* `npm run dev` 

2. 

`npm cpy-cli` 

```
    "postbuild": "cpy --cwd=src '**/*' '!**/*.ts' './../dist' --parents", 
    
    // --cwd=src means the Current Working Directory is set to "./src"
    // '**/*' means all files and folder in the cwd.
    // '!**/*.ts' means excluding all typescript files.
    // './../dist' means "basicgram/api/dist", and is relative to "src" folder
    // --parents will retain the folder structure in "src"

```

3. auto-recompiling is done with nodemon

it restarts the server on file changes.

```
    "dev": "nodemon --ext js,ts,json --watch src --exec 'ts-node' ./src/bin/www",

    --exec: We use --exec flag because nodemon will not use ts-node, instead will use node if the entry file is not ".ts". In this case www is not.
    --ext: When --exec is used, we also need to use --ext to manually specify the files to watch for changes.
    --watch: This defines which folder nodemon will watch for changes to do a restart.
    (Credits to this video) https://www.youtube.com/watch?v=zRo2tvQpus8
```

4. Component library onsenui 
https://onsen.io/vue/

portable to different frontneds like react, angular. It's a core package, Then you install a bindings pacakge for the specific framework.

By default, OnsenUI uses IOS/Android icons. It's a mobile app centric library. 
Change to fontawesome instead for webapp. 


4. Adding runtime checking

In part 3: 
1. Setting up runtime checking for your API
The first thing you want to do is to set up runtime checking for your API, because TypeScript does not do that. Also you may also need to produce comprehensible error messages for your requestors. A library that will serve this specific need is you-are-not:
npm install you-are-not --save