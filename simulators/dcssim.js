import net from 'net';


const simdata = {
    "aircraft":"FA-18C_hornet",
    "com1":" 3",
    "com2":" 1",
    "option1":":T/R ",
    "option2":" RCV ",
    "option3":" A/A ",
    "option4":":   X",
    "option5":"    Y",
    "scratchpad":"ON      1"
}

var server = net.createServer();

let clients = [];
server.on('connection', function(sock) {
    console.log('connection', sock.remoteAddress);

    sock.on('data', function(data) {
        console.log("%s", data)
    });

    sock.on('error',()=> sock.destroy());
    clients.push(sock);
});

server.listen(18809, () => {
    console.log('server bound');
}); 

setInterval(()=>{
    simdata.com1 = Math.floor(Math.random()*10);
    simdata.com2 = Math.floor(Math.random()*10);

    for(let c of clients){
        c.write(JSON.stringify(simdata));
    }
}, 1000)