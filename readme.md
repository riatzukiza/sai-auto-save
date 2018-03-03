# Auto save for sai

Simple, auto save every 2 minutes when ever the sai window is active when this script is running.

## requirements

+ Node.js 
+ git (for installation)

## installation
With git bash open, enter the following:

```
npm install --global --production windows-build-tools
npm install --global node-gyp
git clone https://github.com/riatzukiza/sai-auto-save.git
cd sai-auto-save;
npm install;
setx PYTHON "%USERPROFILE%\.windows-build-tools\python27\python.exe"
```

## Running

once its been installed, run:
```
cd sai-auto-save;
node index.js
```
