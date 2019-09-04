
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
    .addField("Mort de l'écureuil", "Du level [1-4] ?M1 écureuil \n Du level [5-15] ?M2 écureuil \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
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
    .setColor("#0a6930")
    .addField("L'écureuil vole en l'air et vous craches dessus. Il est intouchable au prochain tours", ":dagger: " +y)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "écureuil défense"){
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("L'écureuil étant probablement un atardé ne se défendait pas, préférant hurler comme un dégénéré", ":shield: " +y)
    .setColor("#0a6930")
    message.channel.send(y);
}


if(message.content === préfix + "Beastman fou"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a14d00")
    .addField("Point de vie", "120")
    .addField("Attaque", "?BF attaque")
    .addField("Défense", "?BF défense")
    .addField("Mort du Beastman", "Du level [1-4] ?M1 beastman \n Du level [5-15] ?M2 beastman \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618186388021575680/Screenshot_20190902_162856.jpg?width=385&height=468 ")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "M1 beastman"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(4)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(4));
    var maxs = Math.floor(Math.max(8)); 
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
    .addField("Le Beastman utilise toute ses forces pour vous envoyer une lance à toute vitesse", ":dagger: " +y)
    .setColor("#a14d00")
    if(result < 90)
    var y = new Discord.RichEmbed()
    .addField("Le Beastman vous donnes un coups de griffe", ":dagger:  " + y)
    .setColor("#a14d00")
    message.channel.send(y);
}



if(message.content === préfix + "Zonchi"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#8ea452")
    .addField("Point de vie", "70")
    .addField("Attaque", "?ZO attaque")
    .addField("Défense", "?ZO défense")
    .addField("Mort du Beastman", "Du level [1-9] ?M1 zonchi \n Du level [10-15] ?M2 zonchi \n Du level [16-20] ?M3 zonchi \n du level [21-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618188948723990548/a259a74fc03d40811d5b67ae15d8e522.png ")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "ZO défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(20)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    var y = new Discord.RichEmbed()
    .addField("Le Zonchi essaye de se protéger avec son arme au corps à corps",":shield: " + y)
    .setColor("#8ea452")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "ZO attaque"){
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le Zonchi vous donne un coups de bois en plein dans votre face", ":dagger: " +y)
    .setColor("#8ea452")
    if(result < 90)
    var y = new Discord.RichEmbed()
    .addField("L'attaque est imblocable,, le Zonchi vous envoies des champignons explosifs en plein sur la première ligne ", ":bomb: " + y)
    .setColor("#8ea452")
    message.channel.send(y);
}



if(message.content === préfix + "M1 zonchi"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(3));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(5));
    var maxs = Math.floor(Math.max(9)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#8ea452")
    message.channel.sendMessage(y);
}    

if(message.content === préfix + "M2 zonchi"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(3));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(2));
    var maxs = Math.floor(Math.max(4)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#8ea452")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "M3 zonchi"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(3));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(1));
    var maxs = Math.floor(Math.max(3)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#8ea452")
    message.channel.sendMessage(y);
}    



if(message.content === préfix + "Golemo"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#8b8b8b")
    .addField("Point de vie", "150")
    .addField("Attaque", "?GO attaque")
    .addField("Défense", "Aucune")
    .addField("Passifs : '':shield: Golem un jours, golem toujours :shield: ''", "Il ne peu pas prendre plus de 50 de dégats")
    .addField("Mort du Beastman", "Du level [1-9] ?M1 golemo \n Du level [10-15] ?M2 golemo \n Du level [16-20] \n du level [21-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618188796453847050/2e841f9f92db96ed42cb53ca7113b2c4.png?width=504&height=585")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "GO attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    var y = new Discord.RichEmbed()
    .addField("Le golemo se postionne en boule et fonce sur vous pour vous ecraser ou bien vous projeter au loin. C'est inesquivable",":elephant: " + y)
    .setColor("#8b8b8b")
    message.channel.sendMessage(y);
}



if(message.content === préfix + "M1 golemo"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(4));
    var max = Math.floor(Math.max(6)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(8));
    var maxs = Math.floor(Math.max(11)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#8ea452")
    message.channel.sendMessage(y);
}    

if(message.content === préfix + "M2 golemo"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(4));
    var max = Math.floor(Math.max(6)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(3));
    var maxs = Math.floor(Math.max(5)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#8ea452")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "M3 golemo"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(4));
    var max = Math.floor(Math.max(6)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(2));
    var maxs = Math.floor(Math.max(3)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de cuivre")
    .addField("Gain d'expérience :exclamation: ", x + "XP")
    .setColor("#8ea452")
    message.channel.sendMessage(y);
}    

/// SPAWN PALIER 1 ////// SPAWN PALIER 1 ///
/// SPAWN PALIER 1 ////// SPAWN PALIER 1 ///
/// SPAWN PALIER 1 ////// SPAWN PALIER 1 ///
/// SPAWN PALIER 1 ////// SPAWN PALIER 1 ///

if(message.content === préfix + "Petite plaine"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#0a6930")
    .addField("Point de vie", "100")
    .addField("Attaque", "?écureuil attaque")
    .addField("Défense", "?écureuil défense")
    .addField("Mort de l'écureuil", "Du level [1-4] ?M1 écureuil \n Du level [5-15] ?M2 écureuil \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618186387560333312/Screenshot_20190902_225052.jpg?width=479&height=585")
    message.channel.sendMessage(help_embed);
}

/// PLAINE NORMAL ///

if(message.content === préfix + "Plaine") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 30){
    var result = new Discord.RichEmbed() 
    .setColor("#0a6930")
    .addField("Point de vie", "100")
    .addField("Attaque", "?écureuil attaque")
    .addField("Défense", "?écureuil défense")
    .addField("Mort de l'écureuil", "Du level [1-4] ?M1 écureuil \n Du level [5-15] ?M2 écureuil \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618186387560333312/Screenshot_20190902_225052.jpg?width=479&height=585")}
    else if(result < 101){
    var result = new Discord.RichEmbed() 
    .setColor("#a14d00")
    .addField("Point de vie", "120")
    .addField("Attaque", "?BF attaque")
    .addField("Défense", "?BF défense")
    .addField("Mort du Beastman", "Du level [1-4] ?M1 beastman \n Du level [5-15] ?M2 beastman \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618186388021575680/Screenshot_20190902_162856.jpg?width=385&height=468 ")}
    

    message.channel.send(result);

}

/// GRANDE PLAINE /// 


if(message.content === préfix + "Grande plaine") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 10){
    var result = new Discord.RichEmbed() 
    .setColor("#0a6930")
    .addField("Point de vie", "100")
    .addField("Attaque", "?écureuil attaque")
    .addField("Défense", "?écureuil défense")
    .addField("Mort de l'écureuil", "Du level [1-4] ?M1 écureuil \n Du level [5-15] ?M2 écureuil \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618186387560333312/Screenshot_20190902_225052.jpg?width=479&height=585")}
    else if(result < 30){
    var result = new Discord.RichEmbed() 
    .setColor("#a14d00")
    .addField("Point de vie", "120")
    .addField("Attaque", "?BF attaque")
    .addField("Défense", "?BF défense")
    .addField("Mort du Beastman", "Du level [1-4] ?M1 beastman \n Du level [5-15] ?M2 beastman \n Du level [16-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
    .setImage("https://media.discordapp.net/attachments/298430080936443904/618186388021575680/Screenshot_20190902_162856.jpg?width=385&height=468 ")}
    else if(result < 75){
        var result = new Discord.RichEmbed() 
        .setColor("#8ea452")
        .addField("Point de vie", "70")
        .addField("Attaque", "?ZO attaque")
        .addField("Défense", "?ZO défense")
        .addField("Mort du Beastman", "Du level [1-9] ?M1 zonchi \n Du level [10-15] ?M2 zonchi \n Du level [16-20] ?M3 zonchi \n du level [21-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
        .setImage("https://media.discordapp.net/attachments/298430080936443904/618188948723990548/a259a74fc03d40811d5b67ae15d8e522.png ")}
        else if(result < 101){
            var result = new Discord.RichEmbed() 
            .setColor("#8b8b8b")
            .addField("Point de vie", "150")
            .addField("Attaque", "?GO attaque")
            .addField("Défense", "Aucune")
            .addField("Passifs : '':shield: Golem un jours, golem toujours :shield: ''", "Il ne peu pas prendre plus de 50 de dégats")
            .addField("Mort du Beastman", "Du level [1-9] ?M1 golemo \n Du level [10-15] ?M2 golemo \n Du level [16-20] \n du level [21-???] XP = 0 \n si vous êtes en groupe, votre récompense = Votre xp gagné / Nombre de joueur")
            .setImage("https://media.discordapp.net/attachments/298430080936443904/618188796453847050/2e841f9f92db96ed42cb53ca7113b2c4.png?width=504&height=585")}  
    message.channel.send(result);

}


