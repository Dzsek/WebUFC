import regedit from 'regedit'
import fs from 'fs'
import path from 'path'

const exportStr = "local WebUFCLfs=require('lfs'); dofile(WebUFCLfs.writedir()..'Scripts/WebUFC.lua')"
const shellFolders = 'HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders'
const saveGames = '{4C5C32FF-BB9D-43B0-B5B4-2D72E54EAAA4}'


var results = await regedit.promisified.list(shellFolders);

let success = false;
const dcsFolders = [];
if(results && results[shellFolders] && results[shellFolders]['values'] && results[shellFolders]['values'][saveGames])
{
    const saveFolder = results[shellFolders]['values'][saveGames].value;
    const folders = fs.readdirSync(saveFolder).map((f)=> path.join(saveFolder, f));
    for(let fd of folders)
    {
        if(fd.indexOf("DCS") > 0)
        {
            const configFile = fs.existsSync(path.join(fd, 'Config', 'appSettings.lua'))
            if(configFile){
                dcsFolders.push(fd);
            }
        }
    }
}

for(let fd of dcsFolders)
{
    const efile = path.join(fd, 'Scripts', 'Export.lua')
    const wufcfolder = path.join(fd, 'Scripts', 'WebUFC')
    const wufcfile = path.join(fd, 'Scripts', 'WebUFC.lua')
    const exportFile = fs.existsSync(efile)
    const webufcFolder = fs.existsSync(wufcfolder)
    const webufc = fs.existsSync(wufcfile)

    if(!exportFile)
    {
        continue;
    }

    if(webufcFolder)
    {
        fs.rmSync(wufcfolder, {recursive: true});
    }

    if(webufc)
    {
        fs.rmSync(wufcfile);
    }

    let exportContents = fs.readFileSync(efile);
    if(exportContents.indexOf(exportStr) > 0)
    {
        exportContents = exportContents.toString().replace(exportStr, "");
        fs.writeFileSync(efile, exportContents);
    }

    success = true
}

if(success)
{
    console.log('Export scripts uninstalled')
}
else
{
    console.log('Failed to find Save games folder, please uninstall export scripts manually')
}