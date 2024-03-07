@echo off
node -v 2> Nul
if "%errorlevel%" == "9009" (
    echo Node not installed, uninstall export scripts manually
)

call npm install --omit=dev

call node scripts\uninstall.js
pause