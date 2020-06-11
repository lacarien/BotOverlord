
const Discord = require('discord.js')
const client = new Discord.Client()
const talkedRecently = new Set()
const talkedRecently2 = new Set()
const talkedRecently3 = new Set()




client.login(process.env.TOKEN);

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
    eval(fs.readFileSync(__dirname + '/pcp.js')+''); 
    eval(fs.readFileSync(__dirname + '/shop.js')+''); 
    eval(fs.readFileSync(__dirname + '/stuff.js')+'');
    eval(fs.readFileSync(__dirname + '/donjon.js')+'');
 

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
        .addField("**Les thermes**", "**Lvl :**Level, vous commencez au lvl 0, petit à petit vous allez monter en lvl et débloquer des nouvelles compétences ``?PC [Nom de classe]\n**PC :** Point de caractéristique, quand vous augmentais un level vous pourrez les dépenser dans une stats\n\n__**Comment augmenter de lvl et à quoi cela sert ? :**__ Plus vous allez RP, plus vous allez augmenter de"
        + "level via un bot (Mee6 ou autre, je verrais). Les Lvl vont vous faires débloquer des bonus actifs comme des nouvelles compétences ou un simple ''bonus''.\n\n__**Comment utiliser ses ''PC'' :**__ Lorsque vous montez de lvl vous obtenez des points que vous pourrez attribuer dans votre fiche, soit dans ''attaque'', soit dans __''mana'', soit dans ''HP'', ou bien dans ''armure''__."
        +" Pour savoir combien vous gagnez de PC par level : ``?Gain``. Pour savoir les bonus de stats sur vos classes : ``?Bonus [Nom de la classe]``")
        .setFooter("Menu Lvl")
         message.channel.sendMessage(help_embed);
    }


    if(message.content === préfix + "Gain" || message.content === préfix + "gain"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ffd100")
        .setImage("https://i.imgur.com/qgpcufH.gif")
        .addField("**Gain de level par classe**", "**Du level 1 à 15 :** ``+2 points de compétence``\n**Du level 16 à 30 :** ``+3 points de compétence``\n**Du level 31 à 45 :** ``+5 points de compétence``")
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
    if(nombre < 85)
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
        if(nombre < 85)
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
    
    if(command === 'poison'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*0.40);
        var min_value = Math.floor(`${args}`*0.35);
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 85)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("**Vous donnez un coup de dague sur votre ennemi, vous viendrais alors lui infliger des dégâts de poison pendant 3 tours(-20 de mana)**",":green_heart: " + result)
        .setImage("https://cdn.discordapp.com/attachments/712345553895424011/716984369360928798/Gif.gif")
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
        if(nombre < 90)
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


    if(command === 'atir'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.4);
        var min_value = Math.floor(`${args}`*1.2)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 81)
        var y = new Discord.RichEmbed()
        .setColor("#019521")
        .addField("**Vous infligez envoyez une flèche dans un point non vital de votre adversaire**",":crossed_swords:" + result)
        .setImage("https://www.nautiljon.com/images/description/00/34/1437580520027_image.jpg")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Votre flèche ne touche pas la cible")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
        }

    if(command === 'flecheempoisonne'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.3);
        var min_value = Math.floor(`${args}`*1.1)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var max_value = Math.floor(`${args}`*0.4);
        var min_value = Math.floor(`${args}`*0.3)
        var Z = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 85)
        var y = new Discord.RichEmbed()
        .setColor("#019521")
        .addField("**Vous viendrez à tirer une flèche lui infligeant des dégâts lambdas. Néanmoins, vous lui infligez un poison pendant 3 tours (-50 de mana)**",":crossed_swords: " + result +"\n:green_heart: " + Z)
        .setImage("https://24.media.tumblr.com/1980eacaab2929954387023985d34a99/tumblr_mv4kg0ZVGT1sawx0po1_500.gif")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Votre flèche ne touche pas la cible")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
        }  
        
    if(command === 'archerultime'){
        if (talkedRecently3.has(message.author.id)) {
            message.channel.send("Attendre 24H" + message.author);
        } else {

        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*3.2);
        var min_value = Math.floor(`${args}`*2.5)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var y = new Discord.RichEmbed()
        .setColor("#019521")
        .addField("**Vous venez à viser la ciel avant de lancer une grande charge de flèches...Ces dernières viendront se répartir sur ''tout les ennemies''**",":bow_and_arrow: " + result)
        .setImage("https://cdn.discordapp.com/attachments/712353987797713016/714128529662410782/PhoebusFAAOE.gif")
        message.channel.send(y);
        talkedRecently3.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
    }

    if(command === 'tirrapide'){
        if (!args.length) {
            return message.channel.send(`Merci d'écrire votre attaque, ${message.author}!`);
        }
        var nombre = 70;
        var i = 1;
       
        var max_value = Math.floor(`${args}`*0.60);
        var min_value = Math.floor(`${args}`*0.45)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        while(nombre>35){
        var y = new Discord.RichEmbed()
        .setColor("#e21700")
        .addField("**Vous venez donc tirer une fèche sur un adversaire** " + i + " **fois**",":bow_and_arrow: " + result)
        message.channel.send(y);
         var max_value = Math.floor(`${args}`*0.60);
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

    if(command === 'coupmultiple'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var max_value = Math.floor(`${args}`*2.2);
        var min_value = Math.floor(`${args}`*1.4)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var y = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("**Vous venez infliger un combo à votre adversaire (-35 de mana)**",":crossed_swords:" + result)
        .setImage("https://media.discordapp.net/attachments/534758707561496580/541557069506150420/Chevalier_Hish_Hish_lequipe_est_toka.gif")
        message.channel.send(y);
    }

    if(command === 'chevalierultime'){
        if (talkedRecently3.has(message.author.id)) {
            message.channel.send("Attendre 24H" + message.author);
        } else {

        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*2.1);
        var min_value = Math.floor(`${args}`*1.7)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var y = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("**Vous infligez lourd combo sur votre adversaire venant l'empecher de bloquer au prochain coup**",":crossed_swords:" + result)
        .setImage("https://thumbs.gfycat.com/JampackedAjarJuliabutterfly-size_restricted.gif")
        message.channel.send(y);
        talkedRecently3.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
    }

    if(command === 'pcoupepee'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.35);
        var min_value = Math.floor(`${args}`*1.1)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 85)
        var y = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("**Vous infligez un bon coup d'épée lourd en plein dans le corps de votre adversaire**",":crossed_swords:" + result)
        .setImage("https://cdnb.artstation.com/p/assets/images/images/008/680/477/large/jason-kang-battleofthetrident1-5000.jpg")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Votre épée ne touche pas la cible")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
    }

    if(command === 'provocation'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.6);
        var min_value = Math.floor(`${args}`*1.35)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 90)
        var y = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("**Vous venez infliger un gros coup d'épée contre la tête de votre cible. Ce dernier sera provoqué pendant un tour. (-30 Mana)**",":crossed_swords:" + result)
        .setImage("https://images8.alphacoders.com/895/895034.png")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Votre épée ne touche pas la cible")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
    }

    if(command === 'paladinultime'){
        if (talkedRecently3.has(message.author.id)) {
            message.channel.send("Attendre 24H" + message.author);
        } else {

        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*0.4);
        var min_value = Math.floor(`${args}`*0.2)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var y = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("**Vous venez à régéner une partie de vos HP**","💗 " + result)
        .setImage("https://i.pinimg.com/originals/15/01/da/1501dae0620f3629be8758057b0d88d8.gif")
        message.channel.send(y);
        talkedRecently3.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
    }

    if(command === 'coupdague'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.45);
        var min_value = Math.floor(`${args}`*1.15);
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 85)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("**Vous donnez un coup de dague sur votre ennemi**",":crossed_swords:" + result)
        .setImage("https://i.pinimg.com/600x315/6b/4d/0f/6b4d0f7ef72fa52f273b7944bd8f6588.jpg")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Vous ratez votre attaque.")
        .setImage("https://media.discordapp.net/attachments/708297061841240064/712656080655876226/131-1311442_anime-facepalm-png-download-facepalm-itachi.png?width=823&height=560")
        message.channel.send(y);
    }
    if(command === 'backstab'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.15);
        var min_value = Math.floor(`${args}`*0.85);
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("**Soudainement, vous venez donner un coup de dague dans le dos de votre ennemie. Si vous visez une personne en deuxieme ligne, elle poura bloquer. Si elle est en première ligne, elle ne pourra pas bloquer l'attaque.**",":crossed_swords:" + result)
        .setImage("https://media.giphy.com/media/ghN7IO4Yegk5EykJy0/giphy.gif")
        message.channel.send(y);
    }
    if(command === 'assassinultime'){
        if (talkedRecently3.has(message.author.id)) {
            message.channel.send("Attendre 24H" + message.author);
        } else {

        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*2.8);
        var min_value = Math.floor(`${args}`*2.3)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("**Vous venez à utiliser votre compétence ultime...Cette derniere ne prend pas en compte l'armure et elle fait mal...Très mal...**",":crossed_swords:" + result)
        .setImage("https://media1.giphy.com/media/W6L04hmDMSOvnZSpLu/giphy.gif")
        message.channel.send(y);
        talkedRecently3.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
    }

    if(command === 'sort'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.5);
        var min_value = Math.floor(`${args}`*1.3)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 91)
        var y = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField("**Vous vennez à envoyer une attaque magique sur votre adversaire(-10 de mana)**",":crossed_swords:" + result)
        .setImage("https://i.ytimg.com/vi/tZaw6kOfrJM/maxresdefault.jpg")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Votre sort ne touche pas la cible")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
    }

    if(message.content === préfix + "Msoin" || message.content === préfix + "msoin" ){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(65)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous soignez une personne au choix, ou bien vous même grâce à votre mana intérieur (-50 de mana)", ":heartpulse: "+y)
        .setImage("https://vignette.wikia.nocookie.net/segashareduniverse/images/7/76/Yuri_casting_your_healing_spell.png/revision/latest?cb=20181218234411")
        .setColor("#00ffe7")
        message.channel.send(y);
    }

    if(command === 'tornade'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.9);
        var min_value = Math.floor(`${args}`*1.6);
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var max_value = Math.floor(`${args}`*0.4);
        var min_value = Math.floor(`${args}`*0.2);
        var fire = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 60)
        var y = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField("**Vous venez à invoquer une tornade de flamme sur votre adversaire (-200 Mana)**",":crossed_swords: " + result)
        .setImage("https://cdn.discordapp.com/attachments/706480568350539799/714424585445048330/youtube-video-gif.gif")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField("**Vous venez à invoquer une tornade de flamme sur votre adversaire (-200 Mana). La personne subira également des dégâts pendant 2 tours.**", ":crossed_swords: " + result +"\n:fire: "+ fire)
        .setImage("https://cdn.discordapp.com/attachments/706480568350539799/714424585445048330/youtube-video-gif.gif")
        message.channel.send(y);
    }

    if(message.content === préfix + "SorcierUltime" || message.content === préfix + "Sorcierultime"  || message.content === préfix + "sorcierultime"){
        if (talkedRecently3.has(message.author.id)) {
            message.channel.send("Attendre 24H" + message.author);
        } else {
        var y = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .setTitle("Invocation totem d'armure")
        .setDescription("``Le Totem viendra à se placer en première ligne(Il est compris dans le ciblage et est immortel). Ce dernier réduira de moitié les deux prochaines attaques de l'adversaire. Suite à quoi il disparaitra``")
        .setImage("https://images.squarespace-cdn.com/content/v1/54f4e2c7e4b0f594d25f45c4/1457717565636-HQRRG7ZKS9BI4MIT10TJ/ke17ZwdGBToddI8pDm48kMw3l0E24p07yHIbz4CHF117gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmEZprBMNaW6dUYQUrCwR2cRPwEuHaDROCWqP6EPqVv8Oh4bRKvO-vD_TOgKDNw0Pw/LeeshaHannigan_Paladins")
        message.channel.send(y);
        talkedRecently3.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
    }

    if(command === 'sortnaturel'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*1.4);
        var min_value = Math.floor(`${args}`*1.2)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 61)
        var y = new Discord.RichEmbed()
        .setColor("#8aff61")
        .addField("**Vous vennez à utiliser une attaque magique de la classe de druid(-10 de mana)**",":crossed_swords:" + result)
        .setImage("https://vistapointe.net/images/druid-3.jpg")
        else if(nombre < 90)
        var y = new Discord.RichEmbed()
        .setColor("#8aff61")
        .addField("**Vous vennez à utiliser une attaque magique de la classe de druid(-10 de mana). Vous avez au passage drainé la cible offrant 10 :heartpulse: à la personne de votre choix.**",":crossed_swords:" + result + "")
        .setImage("https://vistapointe.net/images/druid-3.jpg")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#8aff61")
        .setAuthor("Votre sort ne touche pas la cible")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
    }

    if(command === 'dsoins'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*0.25);
        var min_value = Math.floor(`${args}`*0.15)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        if(nombre < 95)
        var y = new Discord.RichEmbed()
        .setColor("#8aff61")
        .addField("**Vous venez à envoyer un sort de soins sur une cible, cette dernière viendra voir ses HP régénerer (-200 de mana)**",":heartbeat:" + result)
        .setImage("https://pa1.narvii.com/6991/d57009e7948e65b55d1657073ff902317dd87370r1-640-360_hq.gif")
        else if(nombre < 101)
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .setAuthor("Votre sort ne prend pas effet")
        .setImage("https://hugelolcdn.com/i/64163.jpg")
        message.channel.send(y);
    }

    if(command === 'druidultime'){
        if (talkedRecently3.has(message.author.id)) {
            message.channel.send("Attendre 24H" + message.author);
        } else {

        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var delta =Math.floor(`${args}` / 2);
        if(delta>300){
            delta=300;
        }
        var y = new Discord.RichEmbed()
        .setColor("#8aff61")
        .setTitle("Invocation cerf magique")
        .addField("--------------------------", ":hearts: **HP :** " + delta+"\n:shield: **Blocage :** Aucun\n:heartbeat: **Attaque :** ?csoins [nombre d'HP max]")
        .setImage("https://i.pinimg.com/originals/72/7c/df/727cdf96bd1f4343140dd937de5391a6.gif")
        message.channel.send(y);
        talkedRecently3.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
    }
    if(command === 'csoins'){
        if (!args.length) {
            return message.channel.send(`Vous avez oublié de mettre vos dégâts, ${message.author}!`);
        }
        var nombre = Math.floor((Math.random() * 100) + 1);
        var max_value = Math.floor(`${args}`*0.15);
        var min_value = Math.floor(`${args}`*0.10)
        var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
        var y = new Discord.RichEmbed()
        .setColor("#8aff61")
        .addField("**le cerf va donc régénérer les HP d'une cible.**",":heartbeat:" + result)
        message.channel.send(y);
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
    // Palier 2 //
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
        var min = Math.floor(Math.min(`${args}`*0.75));
        var max = Math.floor(Math.max(`${args}`*0.90)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00d5ef")
        .addField(":shield: ** Vous bloquez l'attaque difficilement et ne prenez qu'une partie des dégâts**",":anger: " + result)
        .setImage("https://a-static.besthdwallpaper.com/knight-battle-wallpaper-2048x1152-15041_49.jpg")
        message.channel.send(y);
        }

    if(command === 'cblocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.70));
        var max = Math.floor(Math.max(`${args}`*0.95)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField(":shield: ** Vous bloquez l'attaque difficilement et ne prenez qu'une partie des dégâts**",":anger: " + result)
        .setImage("https://wallpaperaccess.com/full/311544.jpg")
        message.channel.send(y);
        }
    
    if(command === 'parade'){
            if (!args.length) {
                return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
            }
            var min = Math.floor(Math.min((args [1])*0.8));
            var max = Math.floor(Math.max((args [1])*1.2)); 
            var result = Math.floor(Math.random() * (max - min + 1) ) + min;

            var mins = Math.floor(Math.min((args [0])*1.35));
            var maxs = Math.floor(Math.max((args [0])*1.7)); 
            var results = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;

            var roll = Math.floor((Math.random() * 100) + 1);
            if (roll < 30){
            var y = new Discord.RichEmbed()
            .setColor("#1a00ff")
            .addField(":shield: ** Vous venez réussir la parade, venez donc renvoyer une partie des dégâts sur l'adversaire**",":crossed_swords: " + result)
            .setImage("https://j.gifs.com/5QWDJB.gif")
            }else if(roll < 101){
            var y = new Discord.RichEmbed()
            .setColor("#ff0000")
            .addField(":fearful: **Pas de chance, vous loupez votre parade...**",":anger: " + results)
            .setImage("http://i.imgur.com/Lpv5HId.jpg") 
            }
            message.channel.send(y);
        }
    

    if(command === 'esquive'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.9));
        var max = Math.floor(Math.max(`${args}`*1.1)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var roll = Math.floor((Math.random() * 100) + 1);
        if (roll < 50){
        var y = new Discord.RichEmbed()
        .setColor("#00ff27")
        .setTitle("Votre esquive est réussie, mais attention...Ne prenez pas trop la confiance")
        .setImage("https://i.pinimg.com/originals/c5/d9/b5/c5d9b5cc51f04fba8d890e4b7b4589f4.gif")
        }else if(roll < 101){
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Vous subissez une grande partie des dégâts", ":anger: " + result)
        }
        message.channel.send(y);
    }
    if(command === 'aesquive'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.9));
        var max = Math.floor(Math.max(`${args}`*1.1)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var roll = Math.floor((Math.random() * 100) + 1);
        if (roll < 35){
        var y = new Discord.RichEmbed()
        .setColor("#019521")
        .setTitle("Votre esquive est réussie, mais attention...Vous avez eu de la chance")
        .setImage("https://24.media.tumblr.com/2caaf9b15cac964dc2e02c9af01fbfce/tumblr_msyrxfLKVc1sintffo1_500.gif")
        }else if(roll < 101){
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Vous subissez une grande partie des dégâts", ":anger: " + result)
        }
        message.channel.send(y);
    }
    if(command === 'dblocage'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.75));
        var max = Math.floor(Math.max(`${args}`*0.90)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField(":shield: ** Vous venez utiliser votre mana afin de réduire les dégâts que vous subissez (-10 de mana)**",":anger: " + result)
        .setImage("https://s2.best-wallpaper.net/wallpaper/1920x1080/1512/Fate-Stay-Night-blue-eyes-anime-girl-magic_1920x1080.jpg")
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

    if(command === 'bsquelette'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.9));
        var max = Math.floor(Math.max(`${args}`*1.35)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#808080")
        .addField(":shield: **Le squellete viendra alors utiliser son bouclier pour se défendre, néanmoins il a tendance à être fragile et prend une grande partie des dégâts.**",":anger: " + result)
        message.channel.send(y);
    }

    if(command === 'basquelette'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.8));
        var max = Math.floor(Math.max(`${args}`*1.25)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#808080")
        .addField(":shield: **Le squellete viendra alors essayé de faire une roulade sur le côté afin de réduire les dégâts, malheureusement vous arriverez à le toucher tant bien que mal !**",":anger: " + result)
        message.channel.send(y);
    }

    if(command === 'bcsquelette'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.6));
        var max = Math.floor(Math.max(`${args}`*0.8)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var ch = Math.floor((Math.random() * 100) + 1);
        if(ch<85){
            var y = new Discord.RichEmbed()
            .setColor("#808080")
            .addField(":shield: **Le chevalier squelette viendra alors bloquer le coup à l'aide de son épée**",":anger: " + result)
        }else if(ch < 101){
            var min = Math.floor(Math.min(`${args}`*1.1));
            var max = Math.floor(Math.max(`${args}`*1.3)); 
            var result = Math.floor(Math.random() * (max - min + 1) ) + min;
            var y = new Discord.RichEmbed()
            .setColor("#808080")
            .addField(":shield: **Coup critique ! Le chevalier subira de grand dégâts !**",":anger: " + result)
        }
        message.channel.send(y);
    }
    if(command === 'bmsquelette'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.7));
        var max = Math.floor(Math.max(`${args}`*0.85)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var ch = Math.floor((Math.random() * 100) + 1);
        if(ch<85){
            var y = new Discord.RichEmbed()
            .setColor("#808080")
            .addField(":shield: **Le mage ne réduira que très peu les dégâts...**",":anger: " + result)
        }else if(ch < 101){
            var min = Math.floor(Math.min(`${args}`*1.1));
            var max = Math.floor(Math.max(`${args}`*1.25)); 
            var result = Math.floor(Math.random() * (max - min + 1) ) + min;
            var y = new Discord.RichEmbed()
            .setColor("#808080")
            .addField(":shield: **Coup critique ! Le mage subit de grand dégâts !**",":anger: " + result)
        }
        message.channel.send(y);
    }


    if(command === 'bsergent'){
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }
        var min = Math.floor(Math.min(`${args}`*0.7));
        var max = Math.floor(Math.max(`${args}`*0.9)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var ch = Math.floor((Math.random() * 100) + 1);

        if(ch<70){
        var y = new Discord.RichEmbed()
        .setColor("#4A007E")     
        .addField(":shield: **Notre Sergent viendra alors placer ses bras en croix, réduisant alors les dégâts.**",":anger: " + result)
        }else if(ch < 101){
            var min = Math.floor(Math.min(`${args}`*1.2));
            var max = Math.floor(Math.max(`${args}`*1.45)); 
            var result = Math.floor(Math.random() * (max - min + 1) ) + min;
            var y = new Discord.RichEmbed()
            .setColor("#4A007E")
            .setImage("https://66.media.tumblr.com/9ac90c3915ea4c29db6d3f11ad84f5bd/tumblr_pwj2zgZlEd1yr3jfno2_500.png")
            .addField(":shield: **Coup critique ! Le sergent viendra alors serrer les dents avant de faire un bond en arrière, montrant des marques de douleurs**",":anger: " + result)    
        }
        message.channel.send(y);
    }

 /*   if(command === 'test'){   
        if (!args.length) {
            return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
        }

        message.channel.send(args [0] args[1] );
    } */
    

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
    
    if(command === 'spawnmarecagesafe') {
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
        x=0;
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

        if(command === 'spawnforetsafe') {
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
            x=0;
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
