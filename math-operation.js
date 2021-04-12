module.exports = function(RED) {
    function mathOperationNode(config) {
        RED.nodes.createNode(this,config);  
        this.operation = config.operation;
        var node = this;
        
        node.on('input', function(msg) {
            let operation = node.operation;


            switch(operation) {
                case("sum"):{
                    msg.payload = msg.payload + +config.number;
                }
                    break;
                case("sub"): {
                    msg.payload = msg.payload - +config.number;
                }
                    break;
                case('div'): {
                    msg.payload = msg.payload / +config.number;
                }
                    break;
                case('mult'): {
                    msg.payload = msg.payload * +config.number;
                }

            }
       
            node.send(msg);                      
        });
    }
    RED.nodes.registerType("math-operation",mathOperationNode);
    
}

