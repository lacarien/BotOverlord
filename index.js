    const Discord = require('discord.js')
    const client = new Discord.Client()
    client.login(process.env.TOKENS);



    var fs = require("fs")
    var vm = require('vm')
    var préfix = "?";
    

    

    client.on("message",message =>{

        if (!message.content.startsWith(préfix) || message.author.bot) return;

        const args = message.content.slice(préfix.length).split(' ');
        const command = args.shift().toLowerCase();

        

        if (command === 'args-info') {
            if (!args.length) {
                return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            }
        
            message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        }

        
        
    

       /* eval(fs.readFileSync(__dirname + '/Combat.js')+'');
       /* eval(fs.readFileSync(__dirname + '/Shop.js')+'');
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
            .addField("Explication","Ici vous trouverez la liste d'attaque pour les classes et les races")
            .addField("**?Humain**", "__Passif__ : Vos HP se bloque une premiere fois à 1HP avant de subir un autre coups et de réelment mourir")
            .addField("?Demon", "__Passif__ : Régénération 2 fois plus rapide")
            .addField("?Automate", "__Passif__ :Imunisé au poison")
            .addField("**===================================**", "**===================================**")
            .addField("**Voleur**", "LVL 1 : ?coup-dague [Vos dégats] + ?VEsquive [Dégats reçu]\nLVL 5 ?Faible blocage [Dégats reçu]\n LVL10 Evolution ?Assassin")
            .addField("**épéiste**", "LVL 1 : ?Coup-epee [Vos dégats] + ?Esquive [Dégats reçu]\nLVL 2 ?Blocage [Dégats reçu]\n LVL10 Evolution ?Chevalier")
            .addField("**Paladin**", "LVL 1 : ?coup-masse [Vos dégats] + ?PBlocage [Dégats reçu]\nLVL 5 ?PEsquive [Dégats reçu]\n LVL10 Evolution ?Wall")
            .setColor("#ff4600")
            .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
            message.channel.send(y);
        }

        //// LISTE D'ATTAQUE ///////////////////////////////////
          //// LISTE D'ATTAQUE ///////////////////////////////////
            //// LISTE D'ATTAQUE ///////////////////////////////////
              //// LISTE D'ATTAQUE ///////////////////////////////////
                //// LISTE D'ATTAQUE ///////////////////////////////////
                  //// LISTE D'ATTAQUE ///////////////////////////////////
                    //// LISTE D'ATTAQUE ///////////////////////////////////
                      //// LISTE D'ATTAQUE ///////////////////////////////////
                        //// LISTE D'ATTAQUE ///////////////////////////////////
                          //// LISTE D'ATTAQUE ///////////////////////////////////
      
if(command === 'coup-epee'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*2.5);
    var min_value = Math.floor(`${args}`*0.5)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 81)
    var y = new Discord.RichEmbed()
    .addField("**Vous infligez un bon coup d'épée dans le torse de votre adversaire**",":crossed_swords:" + result)
    .setImage("https://i.pinimg.com/originals/d5/23/c5/d523c5604de784ddd5c0758b3a8c4145.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setAuthor("**Votre épée ne touche pas la cible**")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
}



if(command === 'coup-masse'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*2);
    var min_value = Math.floor(`${args}`*0.8)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 81)
    var y = new Discord.RichEmbed()
    .addField("**Vous infligez un bon coup dans le visage de votre adversaire**",":crossed_swords:" + result)
    .setImage("https://img4.goodfon.com/wallpaper/nbig/8/1e/japanese-power-monter-blade-manga-man-warrior-fight-armor-as.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setAuthor("**Votre arme ne touche pas la cible**")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
}
if(command === 'coup-dague'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*3);
    var min_value = Math.floor(`${args}`*1)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 65)
    var y = new Discord.RichEmbed()
    .addField("**Vous infligez un coup précis et puissant à votre adversaire**",":crossed_swords:" + result)
    .setImage("https://i.ytimg.com/vi/O_0CTVFL_Ns/maxresdefault.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setAuthor("**Votre arme ne touche pas la cible**")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
}



if(message.content === préfix + "Roll") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor(result)
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor(result)
    message.channel.send(result);

}                    

        
        

    

    })
    client.on('ready', function () {
        console.log("Je suis connecté !")
        client.user.setGame("?Help");

        })
        
