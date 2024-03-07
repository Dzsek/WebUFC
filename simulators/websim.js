import {WebSocket} from 'ws';
import readline from 'node:readline/promises';

let sock = null

function startWS()
{
    sock = new WebSocket("ws://localhost:18808");
    sock.addEventListener("message", (event) => console.log(event.data))
    sock.addEventListener("error", (event)=> {
        console.log('error');
        sock.close();
    });

    sock.addEventListener("close", (event)=> {
        console.log('close');
        process.exit()
    });
}

startWS();


let cli = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

async function start()
{
    while(true)
    {
        const command = await cli.question("> ");
        if(command == "exit"){
            process.exit();
        }

        if( sock.readyState == WebSocket.OPEN)
        {
            sock.send(command);
        }
        else
        {
            sock.close();
            startWS();
        }

        await new Promise((a) => setTimeout(a, 1000));
    }
}

start();