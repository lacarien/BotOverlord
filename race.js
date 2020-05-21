if(message.content === préfix + "Race" || message.content === préfix + "race"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Liste des races disponibles, ?[Nom de la race] ou bien ?PCP [Nom de la race]")
    .addField(":smile: **Humain**", "Vous êtes un humain normal sans malus ni bonus")
    .addField(":japanese_ogre: **Démon**", "Vous êtes un Démon, un être diabolique")
    .addField(":detective: **Vampire**","Vous êtes un vampire qui peut s'averer être très dangereux")
    .addField(":dragon_face: Lézard", "Vous êtes un lézard, vous avez une bonne défense")
    .addField(":elf: **Elf**", "Vous êtes un Elf, une espece noble et rare")
    .addField(":woman_elf:**Nymphe**", "Vous êtes une Nymphe, une espece beauté de la nature")
    .addField(":robot: **Automaton**", "Vous êtes un Automaton, intérieurement vous ressemblez fortement à une machine mais extérieurement...")
    .addField(":skull: **Liche**", "Vous êtes un ancien sorcier mort qui se maintient dans un état de mort-vivant grâce à ses pouvoirs magiques")
    .addField(":bat: **Beastman**","Vous êtes un homme ou une femme animal")
    .addField(":face_with_symbols_over_mouth: **Demi démon**","Cette race ne peut pas être pris lors de la création d'un personnage")
    .addField(":angel: **Demi ange**","Cette race ne peut pas être pris lors de la création d'un personnage")
    .setFooter("Menu des races RP")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Humain" || message.content === préfix + "humain"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("Humain")
    .addField(":notepad_spiral: **Description**", "Vous êtes un humain ''lambda''.")
    .addField(":trident: **Bonus**", "Aucun")
    .addField(":fleur_de_lis: **Malus**", "Aucun")
    .setImage("https://vignette.wikia.nocookie.net/overlord8371/images/d/dc/Blue_Rose.jpg/revision/latest?cb=20180803234950&path-prefix=fr")
    .setFooter("Menu Humain")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Beastman" || message.content === préfix + "beastman"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("Beastman")
    .addField(":notepad_spiral: **Description**", "Vous êtes un mi homme, mi animal...Mais vous pouvez très bien avoir 90% d'animal pour 10% d'humain et inversement.")
    .addField(":trident: **Bonus**", "Vous avez 5% d'HP en plus")
    .addField(":fleur_de_lis: **Malus**", "Vous avez un malus de 5% de mana")
    .setImage("https://66.media.tumblr.com/31d60f3fc6d1a1012c5b336a14cbf1f0/tumblr_ol1vuqCWt51u68pxro1_640.png")
    .setFooter("Menu Humain")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Vampire" || message.content === préfix + "vampire"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#dc322f")
    .setTitle("Vampire")
    .addField(":notepad_spiral: **Description**", "Vous êtes un ou une vampire, vous aimez plus que particulièrement le sang")
    .addField(":trident: **Bonus**", "Si le soleil n'est pas présent, vous avez 5% d'HP en plus")
    .addField(":fleur_de_lis: **Malus**", "Si le soleil ou la lune est présente, vous avez 5% d'HP en moins")
    .setImage("https://img-9gag-fun.9cache.com/photo/a47NvYd_700b.jpg")
    .setFooter("Menu Vampire")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Liche" || message.content === préfix + "liche"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a65fe2")
    .setTitle("Liche")
    .addField(":notepad_spiral: **Description**", "Vous êtes un ou une Liche, Vous avez une intéligence surdéveloppé, un vraie surdoué. Vous pouvez vous transformer en humanoïde pendant 6h d'affilés.")
    .addField(":trident: **Bonus**", "Vous avez 15% de mana en plus")
    .addField(":fleur_de_lis: **Malus**", "Vous avez 15% d'HP en moins")
    .setImage("https://i.pinimg.com/originals/4a/79/24/4a79245a91bf71321c25d624f6ff0163.jpg")
    .setFooter("Menu Liche")
    message.channel.sendMessage(help_embed);
}

 

if(message.content === préfix + "Lézard" || message.content === préfix + "lézard"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#20ff00")
    .setTitle("Lézard")
    .addField(":notepad_spiral: **Description**", "Vous êtes un Lézard, une espèce qui en vaut le coup d'oeil")
    .addField(":trident: **Bonus**", "Vous avez 10% d'HP en plus")
    .addField(":fleur_de_lis: **Malus**", "Vous avez un malus de 10% de mana")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/7/72/Overlord_II_EP03_101.png/revision/latest?cb=20180127052134")
    .setFooter("Menu Lézard")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Demi démon" || message.content === préfix + "demi démon"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Demi démon")
    .addField(":notepad_spiral: **Description**", "Vous êtes un demi démon...Une race uniquement obtenable inRP mais dans les conditions sont inconnus")
    .addField(":trident: **Bonus**", "???")
    .addField(":fleur_de_lis: **Malus**", "???")
    .setImage("https://secure.static.tumblr.com/899b832161b8465d4c6bb8d704e3079a/ep3tyma/BBqni62m4/tumblr_static_tumblr_static__640.jpg ")
    .setFooter("Menu Demi démon")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Demi ange" || message.content === préfix + "demi ange"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Demi ange")
    .addField(":notepad_spiral: **Description**", "Vous êtes un demi ange...Une race uniquement obtenable inRP mais dans les conditions sont inconnus")
    .addField(":trident: **Bonus**", "???")
    .addField(":fleur_de_lis: **Malus**", "???")
    .setImage("https://images-na.ssl-images-amazon.com/images/I/71Z4BD8jVuL._SY500_.jpg")
    .setFooter("Menu Demi ange")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Automaton" || message.content === préfix + "automaton"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#7c7c70")
    .setTitle("Automaton")
    .addField(":notepad_spiral: **Description**", "Vous êtes un Automaton, une machine à l'apparence humaine anciennement crée par l'homme...Aujourd'hui vous recherchez un maître à qui servir.")
    .addField(":trident: **Bonus**", "Vous avez une résistance parfaite au poison et au saignement (si vous n'avez pas de maître, vous n'avez pas le bonus)")
    .addField(":fleur_de_lis: **Malus**", "Les attaques de foudre vous envoie le double de dégâts")
    .setImage("https://images6.alphacoders.com/818/818999.png")
    .setFooter("Menu Automaton")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Elf"  || message.content === préfix + "elf"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#90c830")
    .setTitle("Elf")
    .addField(":notepad_spiral: **Description**", "Vous êtes un Elf, Vous êtes une race plutôt rare")
    .addField(":trident: **Bonus**", "Vous avez 10% de mana en plus.")
    .addField(":fleur_de_lis: **Malus**", "Vous avez 10% d'HP en moins")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/0/07/Overlord_EP01_097.png/revision/latest?cb=20150713021025")
    .setFooter("Menu Elf")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Nymphe"  || message.content === préfix + "nymphe"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#81b4bc")
    .setTitle("Nymphe")
    .addField(":notepad_spiral: **Description**", "Vous êtes la représentation de ce qui pourrait se rapprocher d'une déesse. Vous avez de grande chance d'avoir des yeux et des cheveux argentés")
    .addField(":trident: **Bonus**", "Vous avez 20% de mana en plus")
    .addField(":fleur_de_lis: **Malus**", "Vous avez 20% d'HP en moins")
    .setImage("https://media.discordapp.net/attachments/534758707561496580/585846279977041948/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.webp?width=373&height=560")
    .setFooter("Menu Nymphe")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Démon"  || message.content === préfix + "démon"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#20ff00")
    .setTitle("Démon")
    .addField(":notepad_spiral: **Description**", "Vous êtes un Démon, vous avez une forme humanoïde bien que certain trait de votre apparence peuvent être différents que celui d'un humain")
    .addField(":trident: **Bonus**", "Vous régénèrez 2 fois plus vite votre mana et vos HP")
    .addField(":fleur_de_lis: **Malus**", "Vous ne pouvez pas recevoir de heal alliée")
    .setImage("https://c4.wallpaperflare.com/wallpaper/220/315/675/anime-demon-wallpaper-preview.jpg")
    .setFooter("Menu Démon")
    message.channel.sendMessage(help_embed);
}



//// CIBLAGE ////
    //// CIBLAGE ////
        //// CIBLAGE ////
            //// CIBLAGE ////
                //// CIBLAGE ////
                //// CIBLAGE ////
                //// CIBLAGE ////
            //// CIBLAGE ////
        //// CIBLAGE ////
    //// CIBLAGE ////
//// CIBLAGE ////


if(message.content === préfix + "Ciblage 2") {
    var result = Math.floor((Math.random() * 2) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}

if(message.content === préfix + "Ciblage 3") {
    var result = Math.floor((Math.random() * 3) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}




if(message.content === préfix + "Ciblage 4") {
    var result = Math.floor((Math.random() * 4) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}

if(message.content === préfix + "Ciblage 5") {
    var result = Math.floor((Math.random() * 5) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}

if(message.content === préfix + "Ciblage 6") {
    var result = Math.floor((Math.random() * 6) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}
if(message.content === préfix + "Ciblage 7") {
    var result = Math.floor((Math.random() * 7) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}
  