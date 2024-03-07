const instance = {
    ws: null,
    callbacks: {},
    getInstance(){
        if(this.ws == null)
        {
        }

        return instance
    },
    addCallback(id, callback){
        instance.callbacks[id] = callback;
    },
    sendCommand(device, code, action){
        if(instance.ws && instance.ws.readyState == WebSocket.OPEN){
            instance.ws.send(JSON.stringify({
                type:'command',
                device: device,
                code: code,
                action: action
            }));
        }
    }
}

let startWS = function(self){
    console.log("DataAccess - connecting");
    const port = 18808;

    if(instance.ws){
        instance.ws.onopen = null;
        instance.ws.onclose = null;
        instance.ws.onmessage = null;
        instance.ws.onerror = null;
        instance.ws = null;
    }

    let host = 'localhost'
    try{
        host = document.location.hostname
    }
    catch{
    }

    instance.ws = new WebSocket(`ws://${host}:${port}`);
    
    instance.ws.onclose = ()=>{
        console.log("DataAccess - closed");
        setTimeout(() => self(self), 5000);
    };

    instance.ws.onerror = ()=>{
        console.log("DataAccess - error");
    }

    instance.ws.onmessage = (event)=>{
        for(let cb in instance.callbacks){
            const callb = instance.callbacks[cb]
            callb(event.data);
        }
    };

    instance.ws.onopen = ()=>{
        console.log("DataAccess - connected");
    };
}

startWS(startWS);
startWS = undefined;

export default instance;