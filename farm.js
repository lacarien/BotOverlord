


if(command === 'chasser_plaine'){
    if (!args.length) {
    return message.channel.send(`Il faut mettre votre level de metier, ${message.author}!`);
    }
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendre 1 minutes==== " + message.author);
    } else {
        
        var minXP = Math.floor(Math.min(0));
        var maxXP = Math.floor(Math.max(1)); 
        var rubi = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(0));
        var maxXP = Math.floor(Math.max(3)); 
        var Adam = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(5));
        var maxXP = Math.floor(Math.max(30)); 
        var cobl = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(3));
        var maxXP = Math.floor(Math.max(5)); 
        var XP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
        var y = new Discord.RichEmbed()
        .addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:brown_circle:  **Coble :** " + cobl + "\n:black_circle:  **Adamin :** "+ Adam +"\n:bug: **Queu de crocro :** " + Queu + "\n:large_orange_diamond:  **Rubi :** " + rubi)
        .setImage("https://cdn.discordapp.com/attachments/641777958490472478/665929848182669361/Dr.png")
        message.channel.send(y);


    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 60000);
    }
}
