@echo off
node -v 2> Nul
if "%errorlevel%" == "9009" (
    echo Installing node
    msiexec /i "%CD%\dependencies\node-v20.11.1-x64.msi" /passive
    set "PATH=%PATH%;%programfiles%\nodejs"
) else (
    echo Node installed
)

call npm install --omit=dev

call node scripts\install.js
pause