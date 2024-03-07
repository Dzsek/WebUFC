import {WebSocketServer, WebSocket} from 'ws';
import net from 'net';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    exchange:{
        port: 18808
    },
    dcs:{
        host: 'localhost',
        port: 18809
    },
    webserver:{
        port: 3010
    }
}


const wss = new WebSocketServer({ port: config.exchange.port});
let clients = {};
let interuptMessage = false;

function startSocket(){
    let sc = new net.Socket();
    
    sc.on('error', ()=>{
        if(!interuptMessage) {
            interuptMessage = true;
            console.log('connection to dcs interrupted');
        }

        socket.destroy();
    })
    
    sc.on('close', ()=>{
        socket.destroy();
        setTimeout(() => socket = startSocket(), 1000);
    });

    sc.on('data', (data)=>{
        for(let c in clients){
            const client = clients[c];
            if(client.readyState == WebSocket.OPEN)
            {
                client.send(data, {binary: false, compress: true});
            }
        }
    })
    
    sc.on('connect', ()=>{
        interuptMessage = false;
        console.log('connected to dcs')
    });

    sc.connect(config.dcs.port, config.dcs.host);
    return sc;
}

var socket = startSocket();
function writeSocket(data){
    socket.write(data+"\n");
}

wss.on('connection', (ws, req)=>{
    console.log("new connection", req.socket.remoteAddress);
    clients[ws._socket.remoteAddress] = ws;
    ws.on('message',(data)=>{
        console.log('send data: %s',data)
        writeSocket(data);
    });
})

if(process.argv[2] != '--noweb')
{
    var web = express();
    const root = path.join(__dirname, "build")
    web.use(express.static(root))
    web.listen(config.webserver.port, function(){
        console.log(`WebUFC running on http://localhost:${config.webserver.port}`);
        open(`http://localhost:${config.webserver.port}`);
    })
}
