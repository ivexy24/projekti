module.exports = function(RED) {
    function mathOperationNode(config) {
        RED.nodes.createNode(this,config);  
        this.options = config.options;
        var node = this;
        
        node.on('input', function(msg) {
            let options = node.options
            switch(options){
                case('ZHT0062_2.System.LeadPump.Selection'): {
                    if(msg.payload.name === options){
                        msg.payload = msg.payload.value;
                        msg.topic = "LeadPump";
                        var globalContext = node.context().global;
                        globalContext.set("LeadPump", msg.payload)
                        node.status({
                            fill:"blue",
                            shape:"ring",
                            text:msg.payload
                        })
                        node.send(msg)
                    }
                    break; 
                    
                }
                case('ZHT0062_2.Pump.1.DPT.Pressure'): {
                    if(msg.payload.name === options){
                        msg.payload = msg.payload.value;
                        msg.topic = "setpoint";
                        var globalContext = node.context().global;
                        globalContext.set("Pressure1", msg.payload)
                        node.status({
                            fill:"blue",
                            shape:"ring",
                            text:msg.payload
                        })
                        node.send(msg)
                    }
                    break;
                }
                case('ZHT0062_1.System.Command.Run'): {
                    if(msg.payload.name === options){
                        msg.payload = msg.payload.value;
                        msg.topic = "SystemRunCmd";
                        var globalContext = node.context().global;
                        globalContext.set("SystemRunCmd", msg.payload)
                        node.status({
                            fill:"blue",
                            shape:"ring",
                            text:msg.payload
                        })
                        node.send(msg)
                    }
                    break;
                }
                // case('one'):{
                //     if(msg.payload.name === "ZHT0062_2.System.LeadPump.Selection"){
                //         msg.payload = msg.payload.value;
                //         msg.topic = "LeadPump";
                //         node.send(msg)
                //     }
                // }
                // case('two'):{
                //     if(msg.payload.name === "ZHT0062_2.Pump.1.DPT.Pressure"){
                //         msg.payload = msg.payload.value;
                //         msg.topic = "setpoint";
                        
                //         node.send(msg)
                //     }
                //     break;
                }
                // case('three'): {
                //     if(msg.payload.name === "ZHT0062_1.System.Command.Run"){
                //         msg.payload = msg.payload.value;
                //         msg.topic = "SystemRunCmd";
                //         node.send(msg)
                //     }
                //     break;
                // }
            
        });
    }
    RED.nodes.registerType("math-operation",mathOperationNode);
    
}
