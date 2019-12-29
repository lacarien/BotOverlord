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
                .addField("**Voleur**", "LVL 1 : ?Coup-dague [Vos dégats] + ?VEsquive [Dégats reçu]\nLVL 5 ?VBlocage [Dégats reçu]\n LVL10 Evolution ?Assassin")
                .addField("**épéiste**", "LVL 1 : ?Coup-epee [Vos dégats] + ?Esquive [Dégats reçu]\nLVL 2 ?Blocage [Dégats reçu]\n LVL10 Evolution ?Chevalier")
                .addField("**Paladin**", "LVL 1 : ?Coup-masse [Vos dégats] + ?PBlocage [Dégats reçu]\nLVL 5 ?PEsquive [Dégats reçu]\n LVL10 Evolution ?Wall")
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

    // ESQUIVE /////////////////////////////
    // ESQUIVE /////////////////////////////
    // ESQUIVE /////////////////////////////
    // ESQUIVE /////////////////////////////

    if(command === 'vesquive'){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*2);
        var min_value = Math.floor(`${args}`*1)
        var result = Math.floor((Math.random() * max_value) + min_value);
        if(nombre < 70)
        var y = new Discord.RichEmbed()
        .addField("**Vous n'arrivez pas à esquiver et prennez une grande partie des dégats**",":crossed_swords:" + result)
        .setImage("https://i.imgur.com/LQzeVqf.png")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setAuthor("Vous esquivez l'attaque")
        .setImage("https://qph.fs.quoracdn.net/main-qimg-884de075e24bf47b1e03cdbab5370296")
        message.channel.send(y);
    }
    if(command === 'esquive'){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*2);
        var min_value = Math.floor(`${args}`*1)
        var result = Math.floor((Math.random() * max_value) + min_value);
        if(nombre < 75)
        var y = new Discord.RichEmbed()
        .addField("**Vous n'arrivez pas à esquiver et prennez une grande partie des dégats**",":crossed_swords:" + result)
        .setImage("https://i.imgur.com/LQzeVqf.png")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setAuthor("Vous esquivez l'attaque")
        .setImage("https://cdn.discordapp.com/attachments/499161815549476864/643101853327818772/ezgif.com-gif-maker_4.gif")
        message.channel.send(y);
    }
    if(command === 'pesquive'){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*2);
        var min_value = Math.floor(`${args}`*1)
        var result = Math.floor((Math.random() * max_value) + min_value);
        if(nombre < 80)
        var y = new Discord.RichEmbed()
        .addField("**Vous n'arrivez pas à esquiver et prennez une grande partie des dégats**",":crossed_swords:" + result)
        .setImage("https://i.imgur.com/LQzeVqf.png")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setAuthor("Vous esquivez l'attaque")
        .setImage("https://cdn.discordapp.com/attachments/499161815549476864/643101853327818772/ezgif.com-gif-maker_4.gif")
        message.channel.send(y);
    }
    // blocage /////////////////////////////
    // BLOCAGE /////////////////////////////
    // blocage /////////////////////////////
    // BLOCAGE /////////////////////////////

    if(command === 'blocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.2);
        var min_value = Math.floor(`${args}`*0.6)
        var result = Math.floor((Math.random() * max_value) + min_value);
        if(nombre < 81)
        var y = new Discord.RichEmbed()
        .addField("**Vous bloquez l'attaque difficilement et ne prennez qu'une partie des dégats**",":shield: " + result)
        .setImage("https://watchmojo.blog/wp-content/uploads/2017/10/03783e5db8d66964aecfa2ec007a687b7c4166f897af06179b85463c6db77c93.jpg")
        message.channel.send(y);
    }

    if(command === 'vblocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.3);
        var min_value = Math.floor(`${args}`*0.7)
        var result = Math.floor((Math.random() * max_value) + min_value);
        if(nombre < 81)
        var y = new Discord.RichEmbed()
        .addField("**Vous bloquez l'attaque difficilement et ne prennez qu'une partie des dégats**",":shield: " + result)
        .setImage("https://qph.fs.quoracdn.net/main-qimg-09aba45d6fd4f04253e85a4f89127be2")
        message.channel.send(y);
    }

    if(command === 'pblocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.2);
        var min_value = Math.floor(`${args}`*0.5)
        var result = Math.floor((Math.random() * max_value) + min_value);
        if(nombre < 81)
        var y = new Discord.RichEmbed()
        .addField("**Vous bloquez l'attaque difficilement et ne prennez qu'une partie des dégats**",":shield: " + result)
        .setImage("https://vignette.wikia.nocookie.net/bleach/images/5/55/Ep231ByakuyaVsSenbonzakura.png/revision/latest?cb=20110419032710&path-prefix=en")
        message.channel.send(y);
    }

    if(message.content === préfix + "Crocro") {
        var result = new Discord.RichEmbed() 
        .addField("Nom du monstre", "**__Crocro__**")
        .setColor("#ff8300")
        .setImage("https://media.discordapp.net/attachments/641785123590635520/660925278540922920/Crocro.jpg?width=559&height=559")
        .addField(":heart: HP","100")
        .addField(":beginner: Passifs", "Aucune")
        .addField(":crossed_swords: Attaque", "?Croco_attaque")
        .addField(":shield: Défense", "?Croco_défense  [dégats reçu]")
        message.channel.send(result)
    }

    if(message.content === préfix + "Nid'rats") {
        var result = new Discord.RichEmbed() 
        .addField("Nom du monstre", "**__Nid'rats__**")
        .setColor("#ff8300")
        .setImage("https://media.discordapp.net/attachments/641785123590635520/660925652085637147/Roi_des_Rats.png?width=990&height=560")
        .addField(":heart: HP","100")
        .addField(":beginner: Passifs", "Aucune")
        .addField(":crossed_swords: Attaque", "?Nidrats_attaque")
        .addField(":shield: Défense", "?Nidrats_défense  [dégats reçu]")
        message.channel.send(result)
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
            
