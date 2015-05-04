### Auto-install all missing node modules, required for running some program

Well, guess you have to run some node project...
You clone the repo, do 'npm install' as usual, run everything described for that project and... boom. 
Missing module, blah blah... you install it manually. Then run the program again and... boom. 
Missing module blah blah. And who knows how many times? 

Have you ever faced that problem? Here is a simple script to automate that. 

#### How to use this script?
No npm package created yet, so...

- Clone the repo

```bash
$ git clone https://github.com/Y-LyN-10/npm-auto-installer
$ cd npm-auto-installer
```

- Change the permissions of the script to make it executable and run it just as you would any script

```bash
$ chmod 755 auto-install-modules.js
```

- Link the module to make it available system-wide

```bash
$ npm link
```

#### Done! :)

Now you can use the 'nai' command to run it wherever you are. And also, add the command, that insolently crashes, because you have some missing module(s) 

(eg. you execute 'gulp' and it says 'Error: Cannot find module ... then do)

```bash
$ nai gulp
```

If there is no output, then... you simply don't need this anymore, because your script is running fine.

Tested only with 'gulp' and 'npm start' for now. 
If you have nothing else to do, you're welcome to contribute :3

Any feedback is welcome. Thanks!
