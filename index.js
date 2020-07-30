const discord = require("discord.js");

const ClientDiscord = new discord.Client();
const PREFIX = "?";

var i = 2000;

ClientDiscord.on("Ready", () => {
    console.log("Let's go !");
    ClientDiscord.channels.get("733285065122906144").send("Let's go");
});

ClientDiscord.on("message", message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "?SalutBg"){
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
});



ClientDiscord.login(process.env.TOKEN);

