const Discord = require('discord.js')
const client = new Discord.Client()



    client.login(process.env.TOKENS);

var préfix = "?";




client.on("message",message =>{

    if (!message.content.startsWith(préfix) || message.author.bot) return;

    const args = message.content.slice(préfix.length).split(' ');
    const command = args.shift().toLowerCase();

    

    if(command === 'roll'){
        if (!args.length) {
        return message.channel.send(`Il faut mettre un nombre, ${message.author}!`);
        }

        var max_value =  Math.floor(`${args}`)
        var min_value = Math.floor(`${args}` / 2);
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value; 
        var y = new Discord.RichEmbed()
        .setColor("#1fff00")
        .addField("**__Roll :__**", ":cyclone: " + result)
        message.channel.send(y);
    }


    

    if(message.content === préfix + "Météo") {
        var result = Math.floor((Math.random() * 100) + 1);
        if(result < 30){
        var result = new Discord.RichEmbed() 
        .setColor("#f0ff00")
        .setImage("https://i.ytimg.com/vi/_I2ESdlkKFQ/maxresdefault.jpg")
        .addField("**Météo du jour**", "**Plein soleil !**\nAujourd'hui, nous avons un grand soleil qui se montre, aucun nuage et aucun vent frais ! Une météo formidable pour pleinement profiter d'une petite ballade entre amis ou bien pour faire diverses activités dans la bonne humeur.")
        }else if(result < 50){
        var result = new Discord.RichEmbed() 
        .setColor("#0095ff")
        .setImage("https://revelwallpapers.net/media/wallpapers/the-rain-in-night-forest.jpg")
        .addField("**Météo du jour**", "**Forte pluie !**\nAujourd'hui une forte pluie est présente ! Il ne fait pas bon à se promener dehors, néanmoins les activités quotidiennes continuent, pensez simplement à prendre au moins un parapluie pour protéger votre petite tête !")
        }else if(result < 70){
        var result = new Discord.RichEmbed() 
        .setColor("#ffffff")
        .setImage("https://hdwallpaperim.com/wp-content/uploads/2017/08/23/471903-mountains-landscape-painting-Photoshop-house-snow-winter-spring-green-grass.jpg")
        .addField("**Météo du jour**", "**Petit vent !**\nAujourd'hui un petit vent s'installe dans la ville, mais surtout dans les zones exterieures de la ville comme dans les montagnes. Pensez à vous couvrir un petit peu pour ne pas tomber malade !")
        } else if(result < 101){
        var result = new Discord.RichEmbed() 
        .setColor("#ffffff")
        .setImage("https://i.ytimg.com/vi/qm-Gek2TXrk/maxresdefault.jpg")
        .addField("**Météo du jour**", "**Petite brume !**\nAujourd'hui une petite brume apparait et surtout à l'exterieure de la ville ! Bien qu'elle ne peut paraitre très légère, prennez garde ! Le mal est partout et il ne faudrait pas qu'il arrive dans votre dos sans vous prévenir !")
        }
        else if(result < 101){
        var result = new Discord.RichEmbed() 
        .setColor("#ffffff")
        .setImage("https://i.ytimg.com/vi/qm-Gek2TXrk/maxresdefault.jpg")
        .addField("**Météo du jour**", "**Neige douce !**\nno")
        }
    


        message.channel.send(result);
    }    

    
})
client.on('ready', function () {
    console.log("Je suis connecté !")
    client.user.setGame("©[LCR] Production");

    })
