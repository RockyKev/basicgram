# Feedback

## Things I really appreciate

* You wrote comments about what specific commands/params are. 
* Broke it up in multiple pages which made it easy to keep track of where I was.
* It was very well organized. 
* You also acknowledged some non-best practices (the ignore typescript parts). Good to know stuff!

Scale from 1 - 10, this is easily a 9/10!  
I picked up so much.

## PART 1 - 

NOTE:tutorial-part 1 branch already has a lot of things set up.

From initial reading, I thought I was supposed to pull it! 
Maybe a comment about how you can pull that branch to check your work. 

### Folder Structure 
** screenshot **
cd 
Am I supposed to make a 'view' folder?

### 3. Code conversion and type declarations

** "does not have, TypeScript will bitch about it."** 

As Im getting close to having kids, I'm really watching how I speak and create a environment of inclusivity. While I will slip and say it (obviously channeling my inner Jessie from Breaking Bad), I'd never write it. It's your tutorial and all. But just something I wanted to point out.  


**"And now you runn `npm run tsc` again, you should get no errors"**

I actually got an error!
```
src/app.ts:4:10 - error TS2616: 'path' can only be imported by using 'import path = require("path")' or a default import.
```

### Linux -> Win

```
"dev": "nodemon --ext js,ts,json --watch src --exec 'ts-node' ./src/bin/www",
```
Was using Ubuntu 18.04 when I started. Everything worked fine.

Switched to my Win10 computer. Had to re-write this.
```
"dev": "nodemon --ext js,ts,json --watch src --exec ts-node ./src/bin/www",
```
https://stackoverflow.com/questions/44764004/ts-node-is-not-recognized-as-an-internal-or-external-command-operable-program

Just wanted to share. Not your job to deal with us Window weirdos. :-) 


### Routing
https://i.imgur.com/MZKH1Pz.png

https://i.imgur.com/whbjCKU.png
When I GET from localhost:3000/users/, I get 404s from a Win10. 
But on my linux, I have no issues. 


## Part 2

### 3. Start Building

**Continue to add more tabs by duplicating homepage.vue. We name the files camera.vue and profile.vue:
VueJS file structure
Import them into home.vue:**

The codeblock labels are inaccurate. All three tabs say `label: 'Home',`


## Part 3

** We will change the "routes/user.js" file to ".ts", and set up a /add route so that we can add users: **

typo. It's `routes/users.js`, which will be converting to `routes/users.ts`. 