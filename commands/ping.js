module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(client, message, args, Discord){
        setTimeout(function(){ 
        message.channel.send('pong ig');
        }, 3000);
        console.log("Command executed");
    }
}