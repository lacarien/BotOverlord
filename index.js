const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.TOKENS);


var préfix = "?";
 var fs = require("fs")
 var vm = require('vm')

client.on("message",message =>{
     /*eval(fs.readFileSync(__dirname + '/combat.js')+'');
    eval(fs.readFileSync(__dirname + '/Shop.js')+'');
   /* eval(fs.readFileSync(__dirname + '/attaque.js')+'');
    eval(fs.readFileSync(__dirname + '/pnj.js')+'');
    eval(fs.readFileSync(__dirname + '/Economie.js')+''); */

  



    if(message.content === préfix + "Help"){
        var y = new Discord.RichEmbed()
        .addField(":book:  ?Histoire", "Ici vous aurez un résumé du thème du serveur")
        .addField(":man_detective: ?Classe", "Ici vous aurez la liste des classes")
        .addField(":eyes: ?Espece", "Ici vous aurez la liste des especes")
        .addField(":crossed_swords: ?Coup special")
        .addField(":video_game: ?Liste d'attaque")
        .addField(":video_game: ?Fiche RP", "Ici vous aurez le model de la fiche RP")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Classe"){
        var y = new Discord.RichEmbed()
        .addField(":dagger: Voleur", "Fort dégats pour faible HP !")
        .addField(":crossed_swords: épéiste", "Dégats moyen pour HP moyen !")
        .addField(":shield: Paladin", "Beaucoup d'HP pour faible dégats !")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Histoire"){
        var y = new Discord.RichEmbed()
        .setAuthor("SOON")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Espece"){
        var y = new Discord.RichEmbed()
        .addField("Liste des especes", ":upside_down: **Humain**\nBLABLABLA \n:imp: **Demon**\nBLABLABLA\n:robot: **Automate**\nBLABLABLA")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Coup special"){
        var y = new Discord.RichEmbed()
        .addField("Explication","Les coups spéciaux ne sont utilisé qu'une fois par combat, vous ne pouvez en choisir qu'une seul")
        .addField("?Final slash", "__Prérequis :__ Demon ou Automate \nSi la cible a moins de 10% d'HP, alors vous l'executez")
        .addField("?Tornade", "__Prérequis :__ Aucun \nVous attaquez plusieurs cible à la fois")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Liste d'attaque"){
        var y = new Discord.RichEmbed()
        .addField("Explication","Pour chaque classe et race vous avez des compétences différente selon le lvl")
        .addField("?Humain", "__Prérequis :__ Demon ou Automate \nSi la cible a moins de 10% d'HP, alors vous l'executez")
        .addField("?Demon", "__Prérequis :__ Aucun \nVous attaquez plusieurs cible à la fois")
        .addField("?Automate", "__Prérequis :__ Aucun \nVous attaquez plusieurs cible à la fois")
        .addField("**===================================**", "**===================================**")
        .addField("", "")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

   

})
client.on('ready', function () {
    console.log("Je suis connecté !")
     client.user.setGame("?Help");

    })
    
