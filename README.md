# WebUFC

DCS aircraft control panels running in a browser.

## Supported aircraft

|Name|Panels|Status|
|:---:|:---|:---|
|AH-64D|KU(PLT & CPG)|Available|
|F/A-18C|UFC|Available|
|AV-8B|UFC, ODU|Available|
|M2000C|PCN|Available|
|AJS 37|CK-37|Available|
|Ka-50 III|PVI 800|Available|
|F-15E|UFC (PLT & WSO)|Available|

## Installation & Usage instructions

1. Download latest release from the [releases section](https://github.com/Dzsek/WebUFC/releases). (You only need WebUFC.zip)
2. Unpack to desired folder
3. Start `install.bat`. This will install node.js, if it is not already installed and copy the export scripts into your DCS SaveGames folder.
4. Start `run.bat` to start the server and open the application in your default browser.
5. Once you start DCS and enter your desired aircraft, the webpage will switch to the relevant panels.

> Note: You can open the webpage on any device within the same network by replacing the localhost part of the http://localhost:3010 url, with the ip address of the PC that is running WebUFC (Firewall rules may apply). You can find out your PCs internal ip address by opening a command prompt on it and running `ipconfig /all`.

> Note: Only a single connection is suported per device (per IP), but you can connect from as many devices as you wish.

> Note: You can run `uninstall.bat` to remove the export scripts from your DCS SaveGames folder. This will however not uninstall node.js, you will need to do so manually if you wish to remove it.

## Ports in use

|Port|Used by|
|:--:|:---|
|18809|DCS Export script for exposing cockpit data|
|18808|Exchange server WebSocket for transfering data between DCS and WebUFC|
|3010|Webserver hosting the WebUFC web app|
