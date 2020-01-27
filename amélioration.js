if(message.content === préfix + "Couture peau de crocro" || message.content === préfix + "couture peau de crocro"){
        if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(1));
    var maxM = Math.floor(Math.max(3)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier couturier**", "Vous venez utiliser la peau de crocro afin de vous entrainer dans le méier de couturier\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/667035755725455361/1659613-bigthumbnail.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");

    message.channel.send(y);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}

if(message.content === préfix + "Couture queue de crocro" || message.content === préfix + "couture queue de crocro"){
    var minM = Math.floor(Math.min(2));
    var maxM = Math.floor(Math.max(3)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier couturier**", "Vous venez utiliser la queu de crocro afin de vous entrainer dans le méier de couturier\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/667035755725455361/1659613-bigthumbnail.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}

/// ALCHIMIE ///


if(message.content === préfix + "Alchimie aile d'argnator" || message.content === préfix + "alchimie aile d'argnator"){
    var minM = Math.floor(Math.min(3));
    var maxM = Math.floor(Math.max(5)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier d'alchimiste**", "Vous venez utiliser l'aile d'argnator afin de vous entrainer au métier d'alchimiste\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("http://www.fondsecran.eu/a/get_photo/546707/4000/2500")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}
if(message.content === préfix + "Alchimie corne de gnome" || message.content === préfix + "alchimie corne de gnome"){
    var minM = Math.floor(Math.min(3));
    var maxM = Math.floor(Math.max(4)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier d'alchimiste**", "Vous venez utiliser les cornes de gnome afin de vous entrainer au métier d'alchimiste\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("http://www.fondsecran.eu/a/get_photo/546707/4000/2500")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachment  s/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}

