const discord = require("discord.js");

const ClientDiscord = new discord.Client();
const PREFIX = "?";


var i = 2000;

ClientDiscord.on("message", message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "?S"){
            while(i>0){
            message.channel.send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            i--
            }
        }
    }
});



ClientDiscord.login(process.env.TOKEN);

