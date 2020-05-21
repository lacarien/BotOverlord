
const Discord = require('discord.js')
const client = new Discord.Client()
const talkedRecently = new Set()
const talkedRecently2 = new Set()
const talkedRecently3 = new Set()




client.login("TOKEN");

var préfix = "?";
var fs = require("fs")
var vm = require('vm')


client.on("message",message =>{

    if (!message.content.startsWith(préfix) || message.author.bot) return;

    const args = message.content.slice(préfix.length).split(' ');
    const command = args.shift().toLowerCase();

    
    eval(fs.readFileSync(__dirname + '/Classe.js')+'');
    eval(fs.readFileSync(__dirname + '/Attaque.js')+'');
    eval(fs.readFileSync(__dirname + '/PC.js')+'');
    eval(fs.readFileSync(__dirname + '/race.js')+'');
    eval(fs.readFileSync(__dirname + '/bestiaire.js')+''); 
    eval(fs.readFileSync(__dirname + '/quete.js')+''); 

    ////////////////// LES BASES ////////////////////
        ////////////////// LES BASES ////////////////////
            ////////////////// LES BASES ////////////////////
                ////////////////// LES BASES ////////////////////
                ////////////////// LES BASES ////////////////////
                ////////////////// LES BASES ////////////////////
            ////////////////// LES BASES ////////////////////
        ////////////////// LES BASES ////////////////////
    ////////////////// LES BASES ////////////////////

     if(message.content === préfix + "Help" || message.content === préfix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ffd100")
        .setImage("https://images.alphacoders.com/893/893791.png")
        .addField(":map: **Sommaire :**", ":closed_book: **?Contexte**\n:green_book: **?Classe** \n:orange_book: **?Race**\n:blue_book: **?Lvl**")
        .setFooter("Menu Help")
         message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Contexte" || message.content === préfix + "contexte"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ffd100")
        .setImage("https://images.alphacoders.com/893/893791.png")
        .addField("**SOON**", "**SOON**")
        .setFooter("Menu Contexte")
         message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Lvl" || message.content === préfix + "lvl"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ffd100")
        .setImage("https://i.pinimg.com/originals/aa/02/d4/aa02d477025b498c0e6a462c5c156f29.gif")
        .addField("**Les thermes**", "**Lvl :**Level (Il faut donc faire : ?Lvl [Nom de la race ou classe])\n**PC :** Point de caractéristique, quand vous augmentais un level vous pourrez les dépenser dans une stats\n\n__**Comment augmenter de lvl et à quoi cela sert ? :**__ Plus vous allez RP, plus vous allez augmenter de"
        + "level via un bot (Mee6 ou autre, je verrais). Les Lvl vont vous faires débloquer des bonus actifs comme des nouvelles compétences ou un simple ''bonus''.\n\n__**Comment utiliser ses ''PC'' :**__ Lorsque vous montez de lvl vous obtenez des points que vous pourrez attribuer dans votre fiche, soit dans ''attaque'', soit dans __''mana'', soit dans ''HP'', ou bien dans ''armure''__."
        +" Pour savoir combien vous gagnez de PC par level : ``?Gain``. Pour savoir les bonus de stats sur vos classes : ``?Bonus [Nom de la classe]``")
        .setFooter("Menu Lvl")
         message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Gain" || message.content === préfix + "gain"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ffd100")
        .setImage("https://i.imgur.com/qgpcufH.gif")
        .addField("**Gain de level par classe**", "**Du level 1 à 15 :** ``+2 points de compétence``\n**Du level 15 à 30 :** ``+4 points de compétence``\n**Du level 30 à 45 :** ``+6 points de compétence``")
        .addField("**Attribution des points**", "__1 PC dans mana =__ +5 :sparkles:\n__1 PC dans armure =__ +0.5 :shield:\n__1 PC dans attaque =__ +1 :crossed_swords:\n__1 PC dans HP =__ +5 :heart: ")
        .setFooter("Menu Gain")
         message.channel.sendMessage(help_embed);
    }

    //// ATTAQUE ////
        //// ATTAQUE ////
            //// ATTAQUE ////
                //// ATTAQUE ////
                //// ATTAQUE ////
            //// ATTAQUE ////
        //// ATTAQUE ////
    //// ATTAQUE ////

    if(command === 'coupepee'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.4);
        var min_value = Math.floor(`${args}`*1)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 91)
        var y = new Discord.RichEmbed()
        .setColor("#e21700")
        .addField("**Vous infligez un bon coup d'épée dans le torse de votre adversaire**",":crossed_swords:" + result)
        .setImage("https://i.pinimg.com/originals/97/02/44/970244ffa5cb5513ea43b710794c7559.jpg")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Votre épée ne touche pas la cible")
        .setImage("https://media.discordapp.net/attachments/708297061841240064/712656080655876226/131-1311442_anime-facepalm-png-download-facepalm-itachi.png?width=823&height=560")
        message.channel.send(y);
    }

    if(command === 'tir'){
    if (!args.length) {
        return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*1.3);
    var min_value = Math.floor(`${args}`*1.1)
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    if(nombre < 81)
    var y = new Discord.RichEmbed()
    .setColor("#019521")
    .addField("**Vous infligez envoyez une flèche dans le torse de votre adversaire**",":crossed_swords:" + result)
    .setImage("https://i.pinimg.com/originals/cf/8e/f7/cf8ef7916d8932293308e651876e0f7a.png")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .setAuthor("Votre flèche ne touche pas la cible")
    .setImage("https://hugelolcdn.com/i/64163.jpg")
    message.channel.send(y);
    }   

    if(command === 'dague'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.35);
        var min_value = Math.floor(`${args}`*1.05);
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 81)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("**Vous donnez un coup de dague sur votre ennemi**",":crossed_swords:" + result)
        .setImage("https://i.pinimg.com/736x/2f/0a/39/2f0a391b33d16504b99d5c94a9501900.jpg")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Vous ratez votre attaque.")
        .setImage("https://media.discordapp.net/attachments/708297061841240064/712656080655876226/131-1311442_anime-facepalm-png-download-facepalm-itachi.png?width=823&height=560")
        message.channel.send(y);
    }  

    if(command === 'magie'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.4);
        var min_value = Math.floor(`${args}`*1.2);
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 81)
        var y = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField("**Vous lancez un sort sur votre adversaire (-5 de mana)**",":crossed_swords:" + result)
        .setImage("https://reallifeanime.files.wordpress.com/2014/10/hitsugi-no-chaika-avenging-battle-episode-1-claudia-fighting.png")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Vous ratez votre attaque.")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
    }     
    // PALIER 2 //
    if(command === 'ccoupepee'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.5);
        var min_value = Math.floor(`${args}`*1.1)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 85)
        var y = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("**Vous infligez un bon coup d'épée dans le torse de votre adversaire**",":crossed_swords:" + result)
        .setImage("https://lh3.googleusercontent.com/proxy/RdozmZGwQhTzgRyHoJ_c2Uz8SnGkdmuX61tVphCkKXhScFVb3L8nZ0LVPuPYnSuLX_K5qHjEhZt1-XrPQ_esGsoCnbsaE7N2Eq5bW4qBPQ4G2GmphOE7ucbIkm65Q7xVtkHtM17h6wt2ijMT7C3MAS0dSdydmGCztToqp6-3tE4Joo4Jcg=s0-d")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Votre épée ne touche pas la cible")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
    }


    if(command === 'tirrapide'){
        if (!args.length) {
            return message.channel.send(`Merci d'écrire votre attaque, ${message.author}!`);
        }
        var nombre = 70;
        var i = 1;
       
        var max_value = Math.floor(`${args}`*0.55);
        var min_value = Math.floor(`${args}`*0.45)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        while(nombre>35){
        var y = new Discord.RichEmbed()
        .setColor("#e21700")
        .addField("**Vous venez donc tirer une fèche sur un adversaire** " + i + " **fois**",":bow_and_arrow: " + result)
        message.channel.send(y);
         var max_value = Math.floor(`${args}`*0.55);
        var min_value = Math.floor(`${args}`*0.45)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var nombre = Math.floor((Math.random() * 100) + 1);
        i++;
        if(i > 4){
            nombre = 20;
        }
        }
        var x = new Discord.RichEmbed()
        .setTitle("**Vous perdez 35 de mana**")
        .setImage("https://i.pinimg.com/originals/5a/30/4c/5a304c2cbf402ddad31e253121471b3a.gif")
        message.channel.send(x);
    }  

     //// BLOCAGE ////
        //// BLOCAGE ////
            //// BLOCAGE ////
                //// BLOCAGE ////
                //// BLOCAGE ////
            //// BLOCAGE ////
        //// BLOCAGE ////
    //// BLOCAGE ////
         
    
    
    if(command === 'blocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.7));
        var max = Math.floor(Math.max(`${args}`*1.05)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00d5ef")
        .addField(":shield: ** Vous bloquez l'attaque difficilement et ne prenez qu'une partie des dégâts**",":anger: " + result)
        .setImage("https://watchmojo.blog/wp-content/uploads/2017/10/03783e5db8d66964aecfa2ec007a687b7c4166f897af06179b85463c6db77c93.jpg")
        message.channel.send(y);
        }

    // Palier 2 //
    if(command === 'mblocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.65));
        var max = Math.floor(Math.max(`${args}`*0.85)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField(":shield: ** Vous venez utiliser votre mana afin de réduire les dégâts que vous subissez (-10 de mana)**",":anger: " + result)
        .setImage("https://vignette.wikia.nocookie.net/zetsuennotempest/images/a/a1/Mahiro_Fuwa_vs_Natsumura_Kusaribe.png/revision/latest?cb=20121013210203")
        message.channel.send(y);
        }

    if(command === 'pblocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.65));
        var max = Math.floor(Math.max(`${args}`*0.90)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00d5ef")
        .addField(":shield: ** Vous bloquez l'attaque difficilement et ne prenez qu'une partie des dégâts**",":anger: " + result)
        .setImage("https://a-static.besthdwallpaper.com/knight-battle-wallpaper-2048x1152-15041_49.jpg")
        message.channel.send(y);
        }
    
    //// BLOCAGE MONSTRE ////
        //// BLOCAGE MONSTRE ////
            //// BLOCAGE MONSTRE ////
                //// BLOCAGE MONSTRE ////
                //// BLOCAGE MONSTRE ////
            //// BLOCAGE MONSTRE ////
        //// BLOCAGE MONSTRE ////
    //// BLOCAGE MONSTRE ////

    if(command === 'bhibou'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.7));
        var max = Math.floor(Math.max(`${args}`*0.98)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00d5ef")
        .addField(":shield: **Le hibou viendra utiliser ses ailes afin de ce proteger de l'attaque. Suite à quoi cela réduira les dégâts**",":anger: " + result)
        message.channel.send(y);
        }

    

    //// SPAWN ////
        //// SPAWN ////
            //// SPAWN ////
                //// SPAWN ////
                //// SPAWN ////
            //// SPAWN ////
        //// SPAWN ////
    //// SPAWN ////

    if(command === 'spawnmarecage') {
        if (!args.length) {
        return message.channel.send(`Il faut mettre le nombre de joueur !, ${message.author}!`);
        }
        var A = 0; // Ccrocro
        var B = 0; // nid'rats
        var C = 0; // Alpha
        var D = 0; // crocro bipède
        var x = 0;
        var i=`${args}`;
        while(i!=0){
    
            var result = Math.floor((Math.random() * 100) + 1);
            if(result < 90){
            var x = x+1;
            } else if (result < 101){
            var x = x+2;
            } 
            i--;
            
        }
        while(x!=0){  
        var random = Math.floor((Math.random() * 100) + 1);
        if(random < 60){
            A = A+1;
        } else if (random < 90){
            B = B+1;
        } else if (random < 101){
            C = C+1;
        }
        x=x-1;
        } 
        var mes = new Discord.RichEmbed()
        .addField(":snake: __**Tigrou**__", "**Nombres :** " + A)
        .addField(":evergreen_tree: **__Arbros_**", "**Nombres :** "+B)
        .addField(":turtle: **__Tortank__**", "**Nombres :** "+C)
        .setColor("#223300")
        .setImage("https://i.pinimg.com/originals/14/c5/6b/14c56b6982992f51f1d2b54f775fe948.jpg")
        message.channel.send(mes);
        }

    if(command === 'spawnforet') {
            if (!args.length) {
            return message.channel.send(`Il faut mettre le nombre de joueur !, ${message.author}!`);
            }
            var A = 0; // Ccrocro
            var B = 0; // nid'rats
            var C = 0; // Alpha
            var D = 0; // crocro bipède
            var x = 0;
            var i=`${args}`;
            while(i!=0){
        
                var result = Math.floor((Math.random() * 100) + 1);
                if(result < 90){
                var x = x+1;
                } else if (result < 101){
                var x = x+2;
                } 
                i--;
                
            }
            while(x!=0){  
            var random = Math.floor((Math.random() * 100) + 1);
            if(random < 50){
                A = A+1;
            } else if (random < 95){
                B = B+1;
            } else if (random < 101){
                C = C+1;
            }
            x=x-1;
            } 
            var mes = new Discord.RichEmbed()
            .addField(":clown: __**Goblin**__", "**Nombres :** " + A)
            .addField(":bat: **__Hibou_**", "**Nombres :** "+B)
            .addField(":full_moon_with_face: **__Géant__**", "**Nombres :** "+C)
            .setColor("#58D68D")
            .setImage("https://i.pinimg.com/originals/b0/07/6c/b0076c06dc93229a327b95fc1a9a477f.jpg")
            message.channel.send(mes);
            }

        
        
   


});
client.on('ready', function () {
    console.log("Ptdr, je fou quoi ici")
    client.user.setGame("@~@");
  })
