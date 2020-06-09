if(message.content === préfix + "Quête cuivre" || message.content === préfix + "quête cuivre"){

    if (talkedRecently2.has(message.author.id)) {
        message.channel.send("Attendre 24H" + message.author);
    } else {

    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chasse aux monstres")
    .setDescription("éliminez 2 Tigrou aux marécages")
    .setImage("https://i.pinimg.com/originals/14/c5/6b/14c56b6982992f51f1d2b54f775fe948.jpg")
    .setColor("#000000")
    else if(result < 70)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde provisoire")
    .setDescription("Vous devez protéger la ville humaine en tant que mercenaire pendant 4 heurs")
    .setImage("https://i.pinimg.com/originals/c0/b5/29/c0b52986ec21e80456871487b26f6ae7.jpg")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("TreeSlayer")
    .setDescription("Vous devez tuer un Arbros aux marécages")
    .setImage("https://lh3.googleusercontent.com/proxy/I5dYoExTB5oJeoeLUTzybp5dpi7S-oDkPAxZ6cSRuZ-9yzCGv5nPfvzlBD85N5GUFtbH8sbi9MZA39vKqsplOrt61SH8PlI3Fk0o14Uc404g_Qr7gV010Bemg0mxHuyF5rAdBDGQI2c_0UsClmfmq6IYG9WAgxG468PWDTzTsQPHtT2lEPRkrWbqsQ")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
    talkedRecently2.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
}

if(message.content === préfix + "Quête cuivre accomplie"){
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(3));
    var maxs = Math.floor(Math.max(5)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  **Pièces de bronze :** " + x)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Quête fer" || message.content === préfix + "quête fer"){

    if (talkedRecently2.has(message.author.id)) {
        message.channel.send("Attendre 24H" + message.author);
    } else {

    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chasseur en fer")
    .setDescription("éliminez 4 monstres des marécages en moins de 24H")
    .setImage("https://i.pinimg.com/originals/14/c5/6b/14c56b6982992f51f1d2b54f775fe948.jpg")
    .setColor("#000000")
    else if(result < 70)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde provisoire")
    .setDescription("Vous devez protéger le petit village en tant que mercenaire pendant 4 heurs")
    .setImage("https://i.pinimg.com/originals/c0/b5/29/c0b52986ec21e80456871487b26f6ae7.jpg")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde du corps")
    .setDescription("Vous devez escorter quelqu'un dans une zone PVE pour une durée de 1 heurs")
    .setImage("https://besthqwallpapers.com/Uploads/3-7-2018/58159/thumb2-fire-keeper-dark-souls-3-action-art-dark-souls.jpg")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
    talkedRecently2.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
}

if(message.content === préfix + "Quête fer accomplie"){
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(5));
    var maxs = Math.floor(Math.max(10)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  **Pièce(s) de bronze :**" + x)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Quête argent" || message.content === préfix + "quête argent"){

    if (talkedRecently2.has(message.author.id)) {
        message.channel.send("Attendre 24H" + message.author);
    } else {

    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Le monstre des marées")
    .setDescription("éliminez 6 monstres des marécages en moins de 24h")
    .setImage("https://i.pinimg.com/originals/14/c5/6b/14c56b6982992f51f1d2b54f775fe948.jpg")
    .setColor("#000000")
    else if(result < 70)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde provisoire")
    .setDescription("Vous devez patrouiller dans les différentes zones civils, 8heurs (interdit de fast RP)")
    .setImage("https://i.pinimg.com/originals/c0/b5/29/c0b52986ec21e80456871487b26f6ae7.jpg")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Super garde du corps")
    .setDescription("Vous devez aider un aventurier plus faible à tuer un Tortank.")
    .setImage("https://i.pinimg.com/originals/da/6c/ac/da6cac0e71d4e78d48d38d3e93a133dc.jpg")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
    talkedRecently2.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
}

if(message.content === préfix + "Quête argent accomplie"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(1));
    var maxs = Math.floor(Math.max(3)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  Pièce(s) de bronze :" + y + "\n:second_place: Pièce(s) d'argent :" + x)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}

// PAS ENCORE FAIT///

if(message.content === préfix + "Quêtes rang Or"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Un petit pas pour l'homme...Mais un grand pas pour l'aventurier")
    .setDescription("Tuer deux monstre de la fôret")
    .setImage("https://images-ext-2.discordapp.net/external/pXQsej33bjF3UVMqUjWoOF8wRe49N1prCDBe9b_JW2c/https/i.pinimg.com/originals/b0/07/6c/b0076c06dc93229a327b95fc1a9a477f.jpg?width=996&height=560")
    .setColor("#000000")
    else if(result < 80)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde de terrain")
    .setDescription("Vous devez patrouiller au ruisseau pendant 2 heurs et de si possible capturer une race néfaste à l'humanité.  Mais attention...Un sorcier de la garde vous surveille à travers son miroir.")
    .setImage("https://besthqwallpapers.com/Uploads/3-7-2018/58159/thumb2-fire-keeper-dark-souls-3-action-art-dark-souls.jpg")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Un vraie aventurier !")
    .setDescription("Vous devez faire le donjon des ruines !")
    .setImage("https://images-ext-1.discordapp.net/external/ZwLJolXYLGt5k4Njh01KxLqPPXjR6kUC1OHLi9PGO0k/https/i.pinimg.com/originals/ac/de/e6/acdee674d76b7863f1844d493a352314.jpg?width=996&height=560")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Quête rang Or accomplie"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(1)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(15));
    var maxs = Math.floor(Math.max(20)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var minss = Math.floor(Math.min(3));
    var maxss = Math.floor(Math.max(4)); 
    var q = Math.floor(Math.random() * (maxss - minss + 1) ) + minss;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  Pièce(s) de bronze: " + x + "\n :second_place:  Pièce(s) d'argent: " + q + "\n XP dans le rang Or: " + y )
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}
