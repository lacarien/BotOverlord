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
        else if (result < 90)
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