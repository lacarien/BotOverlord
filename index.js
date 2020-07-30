const discord = require("discord.js");

const ClientDiscord = new discord.Client();
const PREFIX = "?";




ClientDiscord.on("message", message => {

    if(message.content[0] === PREFIX) {
        if(message.content === "?Calibre 12"){
            var i = 2000;
            while(i>0){
            message.channel.send("A");
            //Première vague
            ClientDiscord.channels.get("737600558273134646").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            //Deuxième vague
            ClientDiscord.channels.get("737610983689814027").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            //Troisième vague
            ClientDiscord.channels.get("737612209362042940").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            //quatrième vague
            ClientDiscord.channels.get("737614178839298068").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            // 5ele
            ClientDiscord.channels.get("737614702795948082").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            // 6eme vague
            ClientDiscord.channels.get("737630084738842646").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            // 7eme vague
            ClientDiscord.channels.get("737630567662878801").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            // 8eme vague 
            ClientDiscord.channels.get("737652683925749782").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            //9eme vague
            ClientDiscord.channels.get("737643471720153099").send("<@everyone>" +"Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            i--
            }
        }
    }

    if(message.content[0] === PREFIX) {
        if(message.content === "?Calibre 6"){
            var i = 2000;
            while(i>0){
            message.channel.send("A");
            //Première vague
            ClientDiscord.channels.get("737600558273134646").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            //Deuxième vague
            ClientDiscord.channels.get("737610983689814027").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            //Troisième vague
            ClientDiscord.channels.get("737612209362042940").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            //quatrième vague
            ClientDiscord.channels.get("737614178839298068").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            // 5ele
            ClientDiscord.channels.get("737614702795948082").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            // 6eme vague
            ClientDiscord.channels.get("737630084738842646").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            // 7eme vague
            ClientDiscord.channels.get("737630567662878801").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            // 8eme vague 
            ClientDiscord.channels.get("737652683925749782").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            //9eme vague
            ClientDiscord.channels.get("737643471720153099").send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            i--
            }
        }
    }

    if(message.content[0] === PREFIX) {
        if(message.content === "?Petit joueur"){
            var i = 2000;
            while(i>0){
            message.channel.send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            i--
            }
        }
    }

    if(message.content[0] === PREFIX) {
        if(message.content === "?Grand joueur"){
            var i = 2000;
            while(i>0){
            message.channel.send("Bon, la prochaine fois tu apprendras qu'on s'attaque pas à des loups.");
            i--
            }
        }
    }



});


ClientDiscord.login(process.env.TOKEN);

