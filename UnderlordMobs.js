
/// ZONE 1 LISTE DES MOBS ////// ZONE 1 LISTE DES MOBS ///
/// ZONE 1 LISTE DES MOBS ////// ZONE 1 LISTE DES MOBS ///
/// ZONE 1 LISTE DES MOBS ////// ZONE 1 LISTE DES MOBS ///
/// ZONE 1 LISTE DES MOBS ////// ZONE 1 LISTE DES MOBS ///
/// ZONE 1 LISTE DES MOBS ////// ZONE 1 LISTE DES MOBS ///

if(message.content === préfix + "écureuil mutante"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#0a6930")
    .addField("Point de vie", "100")
    .addField("Attaque", "?écureuil attaque")
    .addField("Défense", "?écureuil défense")
    .addField("Mort de l'écureuil", "Du level [1-5] ?M1 écureuil \n Du level [5-15] ?M2 écureuil \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618186387560333312/Screenshot_20190902_225052.jpg?width=479&height=585")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "M1 écureuil"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(1));
    var max = Math.floor(Math.max(3)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(5));
    var maxs = Math.floor(Math.max(3)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#0a6930")
    message.channel.sendMessage(y);
}    

if(message.content === préfix + "M2 écureuil"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(1));
    var max = Math.floor(Math.max(3)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(1));
    var maxs = Math.floor(Math.max(3)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#0a6930")
    message.channel.sendMessage(y);
}    

if(message.content === préfix + "écureuil attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 90)
    var y = new Discord.RichEmbed()
    .addField("L'écureuil mutant vous donnes un coups de pattes bien placé", ":dagger: " + y)
    .setColor("#0a6930")
        else if(result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#0a69304")
    .addField("L'écureuil vole en l'air et vous craches dessus. Il est intouchable au prochain tours", ":dagger: " +y)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "écureuil défense"){
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("L'écureuil étant probablement un atardé ne se défendait pas, préférant hurler comme un dégénéré", ":shield: " +y)
    .setColor("#0a69304")
    message.channel.send(y);
}


if(message.content === préfix + "Beastman fou"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a14d00")
    .addField("Point de vie", "120")
    .addField("Attaque", "?BF attaque")
    .addField("Défense", "?BF défense")
    .addField("Mort du Beastman", "Du level [1-5] ?M1 beastman \n Du level [5-15] ?M2 beastman \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618186388021575680/Screenshot_20190902_162856.jpg?width=385&height=468 ")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "M1 beastman"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(4)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(8));
    var maxs = Math.floor(Math.max(4)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#a14d00")
    message.channel.sendMessage(y);
}    

if(message.content === préfix + "M2 beastman"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(4)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(2));
    var maxs = Math.floor(Math.max(4)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#a14d00")
    message.channel.sendMessage(y);
}    


if(message.content === préfix + "BF défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 90)
    var y = new Discord.RichEmbed()
    .addField("Le beastman réduit les dégats",":shield: " + y)
    .setColor("#a14d00")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "BF attaque"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("L'écureuil étant probablement un atardé ne se défendait pas, préférant hurler comme un dégénéré", ":shield: " +y)
    .setColor("#0a69304")
    message.channel.send(y);
}














    
