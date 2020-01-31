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
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(2));
    var maxM = Math.floor(Math.max(3)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier couturier**", "Vous venez utiliser la queu de crocro afin de vous entrainer dans le méier de couturier\n**Gain d'XP dans le métier : **" + result)
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

/// ALCHIMIE ///


if(message.content === préfix + "Alchimie aile d'argnator" || message.content === préfix + "alchimie aile d'argnator"){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(3));
    var maxM = Math.floor(Math.max(5)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier d'alchimiste**", "Vous venez utiliser l'aile d'argnator afin de vous entrainer au métier d'alchimiste\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("http://www.fondsecran.eu/a/get_photo/546707/4000/2500")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}

if(message.content === préfix + "alchimie corne de gnome" || message.content === préfix + "Alchimie corne de gnome"){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(3));
    var maxM = Math.floor(Math.max(5)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier d'alchimiste**", "Vous venez utiliser les cornes de gnome afin de vous entrainer au métier d'alchimiste\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("http://www.fondsecran.eu/a/get_photo/546707/4000/2500")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}

if(message.content === préfix + "Cuisinier crofly" || message.content === préfix + "cuisinier crofly"){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(3));
    var maxM = Math.floor(Math.max(5)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier d'alchimiste**", "Vous venez utiliser les ailes de crofly afin de vous entrainer au métier de cuisinier\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/665603893606088704/8yGu6L.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}

if(message.content === préfix + "Cuisinier larve" || message.content === préfix + "cuisinier larve"){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(3));
    var maxM = Math.floor(Math.max(4)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier de cuisinier**", "Vous venez utiliser les pattes de larve afin de vous entrainer au métier de cuisinier\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/665603893606088704/8yGu6L.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachment  s/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}

if(message.content === préfix + "Forgeron coble" || message.content === préfix + "Forgeron coble"){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(3));
    var maxM = Math.floor(Math.max(4)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier de forgeron**", "Vous venez utiliser 5 bouts de coble afin de vous entrainer au métier de forgeron\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/665867066007355393/1189722-sans-titre-1-article_m-1.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachment  s/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}

if(message.content === préfix + "Forgeron adamin" || message.content === préfix + "forgeron adamin"){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(4));
    var maxM = Math.floor(Math.max(5)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier de forgeron**", "Vous venez utiliser 1 bout d'adamin afin de vous entrainer au métier de forgeron\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/665867066007355393/1189722-sans-titre-1-article_m-1.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachment  s/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}
if(message.content === préfix + "Forgeron rubi" || message.content === préfix + "forgeron rubi"){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
        } else {
    var minM = Math.floor(Math.min(5));
    var maxM = Math.floor(Math.max(6)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier de forgeron**", "Vous venez utiliser 1 bout de rubi afin de vous entrainer au métier de forgeron\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/665867066007355393/1189722-sans-titre-1-article_m-1.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachment  s/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}      



if(message.content === préfix + "Fabrication potion faible de HP" || message.content === préfix + "fabrication potion faible de HP") {
    var minM = Math.floor(Math.min(4));
    var maxM = Math.floor(Math.max(6)); 
    var XP = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var minM = Math.floor(Math.min(25));
    var maxM = Math.floor(Math.max(35)); 
    var HP = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("__**Réussite**__", "Vous obtenez donc une potion faible de HP et gagnez en plus de l'experience dans votre metier : :diamond_shape_with_a_dot_inside: " + XP + "\n:sparkling_heart: " + HP)
    .addField("__**Amélioration possible**__", "**Prérequis : ** ``Niveau d'Alchimiste : 2``\n**Matériaux : **``3 Peau d'aragnator /\  2Cornes de gnome``")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .addField("**__Echec__**","Vous échouez votre fabrication, mais gagnez de l'experience dans votre metier :\n :diamond_shape_with_a_dot_inside: " + XP)
    message.channel.send(result);
}   





