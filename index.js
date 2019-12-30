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

            
            
        

        /* eval(fs.readFileSync(__dirname + '/Combats.js')+'');
        /* eval(fs.readFileSync(__dirname + '/Shop.js')+'');
        /* eval(fs.readFileSync(__dirname + '/attaque.js')+'');
            eval(fs.readFileSync(__dirname + '/pnj.js')+'');
            eval(fs.readFileSync(__dirname + '/Economie.js')+''); */

        



            if(message.content === préfix + "Help"){
                var y = new Discord.RichEmbed()
                .addField(":book:  ?Histoire", "Ici vous aurez un résumé du thème du serveur")
                .addField(":man_detective: ?Classe", "Ici vous aurez la liste des classes")
                .addField(":eyes: ?Espece", "Ici vous aurez la liste des especes")
                .addField(":crossed_swords: ?Coup special", "Lors de la création de votre personnage, vous ne pourrez choisir qu'un seul coup spécial !")
                .addField("")
                .addField(":video_game: ?Liste d'attaque")
                .addField(":video_game: ?Fiche RP", "Ici vous aurez le model de la fiche RP")
                .addField(":chart_with_upwards_trend: ?Level", "Ici vous aurez les paliers entre chaque level")
                .addField(":bar_chart: ?Bonus [nom de la classe]", "Pour savoir le gain de caracthéristique à chaque level up")
                .addField(":nazar_amulet: ?Point cara", "Ici vous trouverez l'utilité des points de caracthéristiques")
                .setColor("#ff4600")
                .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
                message.channel.send(y);
            }

            if(message.content === préfix + "Point cara"){
                var y = new Discord.RichEmbed()
                .addField("__**Les points de caracthéristiques**__"," à chaque level vous gagnerez un point de caracthéristique, chaque ''stats'' apport différent bonus.")
                .addField("__**Répartition des points**__","**puissance :** ``1 point dans puissance c'est 1 de dégats en plus !``\n**résistance physique :** ``1 point dans résistance physique c'est 0.5 en armure !``\n**résistance magique :** ``1 point dans résistance magique c'est 0.5 en armure magique !``\n**vitalité :** ``1 point dans vitalité c'est 5HP en plus !``\n**agilité :** ``1 point dans l'agilité c'est 0.5 en esquive !``")
                message.channel.send(y);
            }


            if(message.content === préfix + "Level"){
                message.channel.send(`${message.author} Voici le tableau des levels`);
                message.channel.send("```fix\n-Du Lvl 1 à 10 vous gagnez à chaque level 3 points de caracthéristique```")
                message.channel.send("```markdown\n#-Lvl  1 : 0 XP\n#-LVl  2 : 100 XP\n#-Lvl  3 : 300 XP\n#-Lvl  4 : 400 XP\n#-LVl  5 : 500 XP\n#-Lvl  6 : 600 XP\n#-Lvl  7 : 700 XP\n#-Lvl  8 : 800 XP\n#-Lvl  9 : 900 XP\n#-Lvl  10 : 1000 XP```");
            }
            if(message.content === préfix + "Bonus épéiste"){
                var y = new Discord.RichEmbed()
                .addField("**__Du Lvl 1 à 10 pour chaque level__**", "**+2AT** :crossed_swords: \n**+10HP** :heartpulse: \n **+0.5AR** :shield:")
                .addField("**__Du Lvl 11 à 20 pour chaque level__**","**+4AT** :crossed_swords: \n**+15HP** :heartpulse: \n **+1AR** :shield: ")
                .setImage("https://wallpaperaccess.com/full/141779.jpg")
                message.channel.send(y);
            }
            if(message.content === préfix + "Bonus voleur"){
                var y = new Discord.RichEmbed()
                .addField("**__Du Lvl 1 à 10 pour chaque level__**", "**+3AT** :crossed_swords: \n**+5HP** :heartpulse: \n **+0.5ES** :man_running: ")
                .addField("**__Du Lvl 11 à 20 pour chaque level__**","**+6AT** :crossed_swords: \n**+5HP** :heartpulse: \n **+1ES** :man_running: ")
                .setImage("https://i.pinimg.com/originals/5d/ff/3a/5dff3a4218e9cd05ac9e54da8f73741e.jpg")
                message.channel.send(y);
            }
            if(message.content === préfix + "Bonus paladin"){
                var y = new Discord.RichEmbed()
                .addField("**__Du Lvl 1 à 10 pour chaque level__**", "**+1AT** :crossed_swords: \n**+15HP** :heartpulse: \n **+0.5AR** :shield:")
                .addField("**__Du Lvl 11 à 20 pour chaque level__**","**+3AT** :crossed_swords: \n**+20HP** :heartpulse: \n **+0.5AR** :shield: \n **+0.5ARM** :beginner: ")
                .setImage("https://images.alphacoders.com/522/thumb-1920-522947.jpg")
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
                .addField("?Rafale_de_coups", "__Prérequis :__ Aucun \nVous envoyez une rafale d'attaque physique à un seul ennemie")
                .setColor("#ff4600")
                .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
                message.channel.send(y);
            }

            if(message.content === préfix + "Liste d'attaque"){
                message.channel.send("**Ici vous trouverez les passifs des éspèces mais égalements la liste des attaques par classe**");
                var y = new Discord.RichEmbed()
                .addField("**?Humain**", "__Passif__ : Vos HP se bloque une premiere fois à 1HP avant de subir un autre coups et de réelment mourir")
                .addField("?Demon", "__Passif__ : Régénération 2 fois plus rapide")
                .addField("?Automate", "__Passif__ :Imunisé au poison")
                .addField("**===================================**", "**===================================**")
                .addField("**Voleur**", "LVL 1 : ?Coup-dague [Vos dégats] + ?Esquive [Points d'agilité] [Dégats reçu]\nLVL 5 ?VBlocage [Dégats reçu]\n LVL10 Evolution ?Assassin")
                .addField("**épéiste**", "LVL 1 : ?Coup-epee [Vos dégats] + ?Esquive [Points d'agilité] [Dégats reçu]\nLVL 2 ?Blocage [Dégats reçu]\n LVL10 Evolution ?Chevalier")
                .addField("**Paladin**", "LVL 1 : ?Coup-masse [Vos dégats] + ?PBlocage [Dégats reçu]\nLVL 5 ?Esquive [Points d'agilité] [Dégats reçu]\n LVL10 Evolution ?Juggernaut")
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
        
    if(command === 'coup_epee'){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*2);
        var min_value = Math.floor(`${args}`*0.8)
        var result = Math.floor((Math.random() * max_value) + min_value);
        if(nombre < 81)
        var y = new Discord.RichEmbed()
        .addField("**Vous infligez un bon coup d'épée dans le torse de votre adversaire**",":crossed_swords:" + result)
        .setImage("https://i.pinimg.com/originals/d5/23/c5/d523c5604de784ddd5c0758b3a8c4145.jpg")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setAuthor("Votre épée ne touche pas la cible")
        .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
        message.channel.send(y);
    }



    if(command === 'coup_masse'){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.8);
        var min_value = Math.floor(`${args}`*1)
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
    if(command === 'coup_dague'){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*2.2);
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
    if(message.content === préfix + "Final slash") {
    var result = new Discord.RichEmbed() 
    .setColor("#0012ff")
    .setImage("https://thumbs.gfycat.com/IdleDefiantGrouse-size_restricted.gif")
    .addField(":trident: **__Final slash__**", "Arme en main, vous venez foncer sur votre adversaire, vous avez prit connaissance de son êtat vital et sachez qu'il n'en a plus pour très longtemps, vous venez abréger ses souffrances !")
    message.channel.send(result)
}
if(command === 'rafale_de_coups'){
    if (!args.length) {
        return message.channel.send(`Il faut mettre un nombre, ${message.author}!`);
    }
   
    var max_value = Math.floor(`${args}`*3.5);
    var min_value = Math.floor(`${args}`*2.5)
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    var y = new Discord.RichEmbed()
    .setColor("#0012ff")
    .addField("**Vous teniez votre arme fermement en main...Vous vous concentrez sur votre force physique ainsi que votre determination avant d'infliger de lourd dégats à la cible **",":crossed_swords:" + result)
    .setImage("https://media1.tenor.com/images/e26e70a652ded0851347808067873e38/tenor.gif?itemid=14687288")
    message.channel.send(y);
}
    

    // ESQUIVE /////////////////////////////
    // ESQUIVE /////////////////////////////
    // ESQUIVE /////////////////////////////
    // ESQUIVE /////////////////////////////

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
 
    // blocage /////////////////////////////
    // BLOCAGE /////////////////////////////
    // blocage /////////////////////////////
    // BLOCAGE /////////////////////////////

    if(command === 'blocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.3));
        var max = Math.floor(Math.max(`${args}`*1.2)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField(":shield: **Vous bloquez l'attaque difficilement et ne prennez qu'une partie des dégats**",":anger: " + result)
        .setImage("https://watchmojo.blog/wp-content/uploads/2017/10/03783e5db8d66964aecfa2ec007a687b7c4166f897af06179b85463c6db77c93.jpg")
        message.channel.send(y);
    }
    /// MONSTRE //////////////////////////
        /// MONSTRE //////////////////////////
            /// MONSTRE //////////////////////////
                /// MONSTRE //////////////////////////
                    /// MONSTRE //////////////////////////
                        /// MONSTRE //////////////////////////
                            /// MONSTRE //////////////////////////
                                /// MONSTRE //////////////////////////
                                    /// MONSTRE //////////////////////////
                                        /// MONSTRE //////////////////////////
                                            /// MONSTRE //////////////////////////

   

if(message.content === préfix + "Crocro") {
    var result = new Discord.RichEmbed() 
    .addField("Nom du monstre", "**__Crocro__**")
    .setColor("#ff8300")
    .setImage("https://media.discordapp.net/attachments/641785123590635520/660925278540922920/Crocro.jpg?width=559&height=559")
    .addField(":heart: HP","25")
    .addField(":beginner: Passifs", "Aucune")
    .addField(":crossed_swords: Attaque", "?croco_attaque")
    .addField(":shield: Défense", "?croco_défense  [dégats reçu]")
    .addField(":moneybag: Récompenses", "?Récompenses_crocro [lvl]")
    message.channel.send(result)
}
if(command === 'récompenses_crocro'){
    if (!args.length) {
        return message.channel.send(`Il faut mettre les dégats que prends le crocro, ${message.author}!`);
    }
    if(`${args}`==1){
    var minXP = Math.floor(Math.min(-5));
    var maxXP = Math.floor(Math.max(5)); 
    var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
    }
    if(`${args}`==2){
    var minXP = Math.floor(Math.min(0));
    var maxXP = Math.floor(Math.max(5)); 
    var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
    }
    if(`${args}`==3){
    var minXP = Math.floor(Math.min(-2));
    var maxXP = Math.floor(Math.max(3)); 
    var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
    }
    if(`${args}`<4){ 
    var XP = Math.floor(30/`${args}`)
    var XP = Math.floor(XP + XXP)
    } else if (`${args}`== 4) {
    var minXP = Math.floor(Math.min(0));
    var maxXP = Math.floor(Math.max(3)); 
    var XP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
    } else if (`${args}`> 4) {
    var XP = 0;
    }
    var minM = Math.floor(Math.min(10));
    var maxM = Math.floor(Math.max(20)); 
    var Mercure = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
    var y = new Discord.RichEmbed()
    .addField("Récompenses du crocro", "**XP :** " + XP +"\n**Mercure :** " + Mercure + "\n**SOON**")
    .setImage("https://static.ankama.com/dofus/www/game/items/200/15243.png")
    message.channel.send(y);
}



if(message.content === préfix + "crocro_attaque"){
    var min = Math.floor(Math.min(7));
    var max = Math.floor(Math.max(20)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 80)
    var y = new Discord.RichEmbed()
    .setColor("#ff8300")
    .addField("Le crocro vous fonces dessus venant vous infliger des petits dégats", ":crossed_swords:" + y)
        else if (result < 101)
    var y = new Discord.RichEmbed()
    .setTitle("Le crocro adversaire rate son attaque")
    .setColor("#ff8300")
    message.channel.sendMessage(y);
}
if(command === 'crocro_défense'){
    if (!args.length) {
        return message.channel.send(`Il faut mettre les dégats que prends le crocro, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*1);
    var min_value = Math.floor(`${args}`*0.8)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 91)
    var y = new Discord.RichEmbed()
    .addField(":shield: Le crocro ne peu pas bloquer l'attaque, seul sa chaire réduire les dégats",":anger: " + result)
    else if (nombre< 101)
    var y = new Discord.RichEmbed()
    .addField("Le crocro vient donc rapidement se déplacer sur le côté, venant éviter votre attaque",":man_running:  ")
    message.channel.send(y);
}



if(message.content === préfix + "Nid'rats") {
    var result = new Discord.RichEmbed() 
    .addField("Nom du monstre", "**__Nid'rats__**")
    .setColor("#ff8300")
    .setImage("https://media.discordapp.net/attachments/641785123590635520/660925652085637147/Roi_des_Rats.png?width=990&height=560")
    .addField(":heart: HP","40")
    .addField(":beginner: Passifs", "Aucune")
    .addField(":crossed_swords: Attaque", "?Nidrats_attaque")
    .addField(":shield: Défense", "Aucune")
    .addField(":moneybag: Récompenses", "?Récompenses_Nidrats [lvl]")
    message.channel.send(result)
}
if(message.content === préfix + "Nidrats_attaque"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 95)
    var y = new Discord.RichEmbed()
    .setColor("#ff8300")
    .addField("Un grand nombre de bébé rats déscendes du Nid venant se jeter sur vous !", ":crossed_swords:" + y)
        else if (result < 101)
    var y = new Discord.RichEmbed()
    .setTitle("Un Crocro sort du Nid'rats")
    .setImage("https://media.discordapp.net/attachments/641785123590635520/660925278540922920/Crocro.jpg?width=559&height=559")
    .setColor("#ff8300")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Aragnator") {
    var result = new Discord.RichEmbed() 
    .addField("Nom du monstre", "**__Aragnator__**")
    .setColor("#ff8300")
    .setImage("https://cdn.discordapp.com/attachments/641785123590635520/660927665192173638/215387ac70dda5e6b97acb390da2e505.png")
    .addField(":heart: HP","100")
    .addField(":beginner: Passifs", "Aucune")
    .addField(":crossed_swords: Attaque", "?Aragnator_attaque")
    .addField(":shield: Défense", "?Aragnator_défense  [dégats reçu]")
    .addField(":moneybag: Récompenses", "?Récompenses_Aragnator [lvl]")
    message.channel.send(result)
}  
if(message.content === préfix + "Gnome pyromane") {
    var result = new Discord.RichEmbed() 
    .addField("Nom du monstre", "**__Gnome pyromane__**")
    .setColor("#ff8300")
    .setImage("https://media.discordapp.net/attachments/641785123590635520/660928322817228800/03837f895424ab2c5ae6987a2404e383.png?width=447&height=559")
    .addField(":heart: HP","100")
    .addField(":beginner: Passifs", "Aucune")
    .addField(":crossed_swords: Attaque", "?Gnome_attaque")
    .addField(":shield: Défense", "?Gnome_défense  [dégats reçu]")
    .addField(":moneybag: Récompenses", "?Récompenses_Gnome_pyromane [lvl]")
    message.channel.send(result)
}    
if(message.content === préfix + "Rongeurs") {
    var result = new Discord.RichEmbed() 
    .addField("Nom du monstre", "**__Rongeurs__**")
    .setColor("#ff8300")
    .setImage("https://media.discordapp.net/attachments/641785123590635520/660929529170362415/Cranium-rats-5e-e1539179461219.png")
    .addField(":heart: HP","100")
    .addField(":beginner: Passifs", "Aucune")
    .addField(":crossed_swords: Attaque", "?Rongeurs_attaque")
    .addField(":shield: Défense", "?Rongeurs_défense  [dégats reçu]")
    .addField(":moneybag: Récompenses", "?Récompenses_Rongeurs [lvl]")
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
            
