
if(message.content === préfix + "Help underlord"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField("Préfix du bot", "?")
    .addField("Sommaire :", "?Race underlord \n ?Contexte underlord \n ?Classe underlord \n ?Race underlord ")
    .setFooter("Menu underlord")

    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Humain"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("Humain")
    .setDescription("Vous êtes un simple humain banale, c'est con dit comme ça mais...C'est bien le cas")
    .addField("Coups spéciaux", "?CS Humain")
    .setImage("https://vignette.wikia.nocookie.net/overlord8371/images/d/dc/Blue_Rose.jpg/revision/latest?cb=20180803234950&path-prefix=fr")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Vampire"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#dc322f")
    .addField("Vampire", "Vous êtes un ou une vampire, vous avez des capacités uniques qui se débloquent au fils du temps")
    .addField("Bonus", "Vous avez la possibilité de transformer une seule personne(humaine) en vampire tant qu'il soit inférieure à votre lvl. Ce dernier sera considéré comme votre serviteur et il ne pourra pas vous tuer bloqué par sa nouvelle nature")
    .addField("Malus", "Vous avez 10% d'HP en moins (simple calcule rapide à faire, n'hésitez pas à contacter le staff si vous y arrivez pas il n'y a aucune honte !)")
    .addField("Coups spéciaux", "?CS Vampire")
    .setImage("https://img-9gag-fun.9cache.com/photo/a47NvYd_700b.jpg")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Liche"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a65fe2")
    .addField("Liche", "Vous êtes une liche,  un ancien mage ayant tout sacrifié pour obtenir la vie éternelle par un état de ''Mort-vie''. Vous restez totalement conscient et surtout très intelligent.")
    .addField("Bonus", "Vous avez un bonus de 10% de mana et vous êtes immunisé au poison et au saignement (simple calcule rapide à faire, n'hésitez pas à contacter le staff si vous y arrivez pas il n'y a aucune honte !)")
    .addField("Malus", "Vous avez un roll de -40 en résistance physique et si vous prenez une autre classe que mage vous subirez un malus de -20% d'HP")
    .addField("Coups spéciaux", "?CS Liche")
    .setImage("https://i.imgur.com/ZaA9j6e.jpg")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Lézard"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#20ff00")
    .addField("Lézard", "Vous êtes un Lézard, une espèce qui en vaut le coup d'oeil")
    .addField("Bonus", "Vous avec un bonus de 10% d'HP (simple calcule rapide à faire, n'hésitez pas à contacter le staff si vous y arrivez pas il n'y a aucune honte !)")
    .addField("Malus", "Vous ne pouvez pas vous équiper d'armure")
    .addField("Coups spéciaux", "?CS Lézard")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/7/72/Overlord_II_EP03_101.png/revision/latest?cb=20180127052134")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Automaton"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#7c7c70")
    .addField("Automaton", "Vous êtes un Automate, vous avez le corps d'une machine à l'apparence humaine")
    .addField("Bonus", "Vous êtes immunisé au saignement et au poison")
    .addField("Malus", "Vous devez obligatoirement avoir un maître (joueur) et sa vie passe avant la votre")
    .addField("Coups spéciaux", "?CS Automaton")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/3/35/Overlord_III_EP01_011.png/revision/latest?cb=20180713084418")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Elf"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#90c830")
    .addField("Elf", "Vous êtes un Elf, Vous êtes une race plutôt rare")
    .addField("Bonus", "Vous avez un bonus de 10% de mana (simple calcule rapide à faire, n'hésitez pas à contacter le staff si vous y arrivez pas il n'y a aucune honte !)")
    .addField("Malus", "Vous avez un malus de 10% d'HP")
    .addField("Coups spéciaux", "?CS Elf")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/0/07/Overlord_EP01_097.png/revision/latest?cb=20150713021025")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Nymphe"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#81b4bc")
    .setTitle("Nymphe")
    .setDescription("Vous êtes la représentation de ce qui pourrait se rapprocher à une déesse féminine. Vous êtes la plus belle")
    .addField("Bonus", "10% de mana en plus et la capacité de faire rentrer en état de veille votre corps, venant à créer un esprit contrôlable qui peut se battre et qui a 1 HP")
    .addField("Malus", "Vous êtes obligatoirement une femme et votre éspèce est grandement recherché pour être vendue au marcher noir \n moins 20% d'HP")
    .addField("Coups spéciaux", "?CS Nymphe")
    .setImage("https://media.discordapp.net/attachments/534758707561496580/585846279977041948/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.webp?width=373&height=560")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Démon"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#20ff00")
    .addField("Démon", "Vous êtes un Démon, vous avez une forme humanoïde bien que certain trait de votre apparence peuvent être différents que celui d'un humain")
    .addField("Bonus", "Vous avez un bonus de 5% d'HP et de mana")
    .addField("Malus", "Les sorts de soins vous infliges des dégâts doublés")
    .addField("Coups spéciaux", "?CS Démon")
    .setImage("https://www.manga-news.com/public/images/vols/overlord-light-novel-12-jp.jpg")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Beastman"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a94329")
    .setTitle("Beastman")
    .setDescription("Vous êtes un homme ou une femme qui avait des ressemblances physiques à un animal")
    .addField("Bonus", "Vous avez un bonus unique à votre race précise (à voir avec le staff, par exemple ''Suivre les traces de pas jusqu'à 2 chanels''")
    .addField("Malus", "Vous avez donc également un malus unique (à voir avec le staff, par exemple ''ne sais pas nager''")
    .addField("Coups spéciaux", "?CS Beastman")
    .setImage("https://media.discordapp.net/attachments/536292650698014731/585798353187635210/thumb-1920-834932.png?width=936&height=585")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Race underlord"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField("Liste des races", "?Humain \n ?Vampire \n ?Beastman \n ?Démon \n ?Nymphe \n ?Elf \n ?Automaton \n ?Lézard \n ?Liche")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Classe underlord"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField("Liste des races", "?Humain \n ?Vampire \n ?Beastman \n ?Démon \n ?Nymphe \n ?Elf \n ?Automaton \n ?Lézard \n Liche")
    message.channel.sendMessage(help_embed);
}



if(message.content === préfix + "Combattant"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .addField("Combattant", "Vous avez 20HP en plus")
    .addField("Evolution lvl 15", "?Chevalier ou ?Paladin")
    .addField("Liste d'attaque", "?Attaque combattant")
    .addField("Bonus passifs", "?Passif combattant")
    .setImage("https://vignette.wikia.nocookie.net/douze-salopards/images/a/ac/Elite-knight-cover_dark-souls_1364x1600_marked.jpg/revision/latest?cb=20171124095832&path-prefix=fr")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Voleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Voleur", "Vous êtes une classe à faible HP mais qui fait de lourd dégats")
    .addField("Evolution lvl 15", "?Assassin")
    .addField("Liste d'attaque", "?Attaque voleur")
    .addField("Bonus passifs", "?Passif voleur")
    .setImage("https://vignette.wikia.nocookie.net/hai-to-gensou-no-grimgal/images/0/0c/Haruhiro%27s_anime_gallery.jpg/revision/latest/zoom-crop/width/320/height/320?cb=20160518071825")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Ranger"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .addField("Ranger", "Vous êtes une classe qui attaque à distance faisant de gros dégats")
    .addField("Evolution lvl 15", "?Archer")
    .addField("Liste d'attaque", "?Attaque ranger")
    .addField("Bonus passifs", "?Passif ranger")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/5/59/Overlord_EP07_015.png/revision/latest?cb=20150822091615")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Mage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .addField("Mage", "Vous avez 20HP en plus")
    .addField("Evolution lvl 15", "?Sorcier \n Les Nymphes et les Elfs peuvent evoluer en ?Druide")
    .addField("Liste d'attaque", "?Attaque mage")
    .addField("Bonus passifs", "?Passif mage")
    .setImage("https://static.zerochan.net/Evileye.%28Overlord%29.full.2317125.png")
    message.channel.sendMessage(help_embed);
}

/// LISTE D'ATTAQUE PALIER 1 ///
/// LISTE D'ATTAQUE PALIER 1 ///
/// LISTE D'ATTAQUE PALIER 1 ///



if(message.content === préfix + "Attaque combattant"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .addField("LVL 1", "?Coup d'épée + ?Blocage simple")
    .addField("LVL 7", "?Combattant ultime")
    .addField("LVL 12 si vous voudrez évoluer en tant que chevalier", "?C Coup d'épée")
    .addField("LVL 12 si vous voudrez évoluer en tant que paladin", "?Blocage supérieure")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Attaque mage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .addField("LVL 1", "?M Blocage simple + ?Magie simple")
    .addField("LVL 4", "?Soins de bas rang")
    .addField("LVL 9", "?Mage ultime")
    .addField("LVL 12 si vous voudrez évoluer en tant que Sorcier", "?Sort simple")
    .addField("LVL 12 si vous voudrez évoluer en tant que Sorcier", "?Sort naturel")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Attaque ranger"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .addField("LVL 1", "?Tire à l'arc + ?R Blocage simple")
    .addField("LVL 4", "Tire rapide")
    .addField("LVL 9", "?Ranger ultime")
    .addField("LVL 12", "?Blocage rapide")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Attaque voleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("LVL 1", "?Coup d'épée + ?V Blocage simple")
    .addField("LVL 4", "?Coups bas")
    .addField("LVL 9", "?Voleur ultime")
    .addField("LVL 12", "?Esquive")
    message.channel.sendMessage(help_embed);
}

/// PASSIFS PALIER 1 ///
/// PASSIFS PALIER 1 ///
/// PASSIFS PALIER 1 ///


if(message.content === préfix + "Passifs voleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("[!] ATTENTION [!]", "Ce système ne fonctionne non pas avec votre level d'XP, mais avec le level de Mee6. Merci")
    .addField("LVL 3", "+10 dans les Roll de discrétion (exemple: s'approcher dans le dos discrétement)")
    .addField("LVL 6", "+10 dans les Roll d'action d'agilité (exemple: esquiver un coup de poings ou escalader un arbre ou autre)")
    .addField("LVL 10", "+10 dans les Roll de discrétion (exemple: s'approcher dans le dos discrétement)")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Passifs ranger"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .addField("[!] ATTENTION [!]", "Ce système ne fonctionne non pas avec votre level d'XP, mais avec le level de Mee6. Merci")
    .addField("LVL 3", "+10 dans les Rolls visuelles (exemple: regarder au loin)")
    .addField("LVL 6", "Vous pouvez retrouver les traces de passage d'un joueur d'il y a 6heures (avec un Roll pour la recherche des traces). Mais vous ne pouvez pas encore reconnaitre leur nombre exacte")
    .addField("LVL 10", "+10 dans les Rolls visuelles (exemple: regarder au loin)")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Passifs mage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .addField("[!] ATTENTION [!]", "Ce système ne fonctionne non pas avec votre level d'XP, mais avec le level de Mee6. Merci")
    .addField("LVL 3", "Vous pouvez faires apparaitre une boule lumineuse de mana pour vous éclairer dans l'obscurité")
    .addField("LVL 6", "Vous pouvez vous méthamorphoser en humanoîde pendant 30minutes grand max(Si vous subisez des dégats, l'effet disparait)")
    .addField("LVL 10", "Vous pouvez voler en l'air pendant 10minutes grand maximum(Interdit en plein combat)")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Passifs combattant"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .addField("[!] ATTENTION [!]", "Ce système ne fonctionne non pas avec votre level d'XP, mais avec le level de Mee6. Merci")
    .addField("LVL 3", "+10 dans les Roll d'action de force (exemple: donner un coup de poings)")
    .addField("LVL 6", "Vous avez de bonnes connaissances sur les armures et les armes")
    .addField("LVL 10", "+10 dans les Roll d'action de force (exemple: donner un coup de poings)")
    message.channel.sendMessage(help_embed);
}



/// ATTAQUE CLASSE PALIER 1 ///
/// ATTAQUE CLASSE PALIER 1 ///
/// ATTAQUE CLASSE PALIER 1 ///

if(message.content === préfix + "Coup d'épée"){
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous lui infligez un coup d'épée rapide qui inflige", ":dagger: "+ y )
    .setImage("https://cdn.discordapp.com/attachments/534821670217711626/535086034459820042/Coup_depee.gif")
    message.channel.send(y);
}

if(message.content === préfix + "Combattant ultime"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#76ff00")
    .addField("Vous régénérez", y)
    message.channel.send(y);
    var mins = Math.floor(Math.min(20));
    var maxs = Math.floor(Math.max(40)); 
    var l = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var l = new Discord.RichEmbed()
    .setColor("#ff8b00")
    .addField("Vous executez un violent coup qui inflige de lourd dégats (-50 de mana)", ":crossed_swords: "+ l)
    .setImage("https://cdn.discordapp.com/attachments/532644881588551683/535086945420967937/Combattant_ultime.gif")
    message.channel.send(l);
}

if(message.content === préfix + "Blocage simple"){
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous executez un blocage simple et réussisez à bloquer", ":shield: "+y)
    .setImage("https://www.bestfunforall.com/wallpaperbetter/imgs/38%20knight%20medieval%20wallpaper%20%201.jpg")
    message.channel.send(y);
}

if(message.content === préfix + "Blocage supérieure"){
    var min = Math.floor(Math.min(35));
    var max = Math.floor(Math.max(45)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous executez un blocage supérieure et réussisez à bloquer", ":shield: "+y)
    .setImage("https://media.discordapp.net/attachments/499161815549476864/541320990614093825/2530.gif")
    message.channel.send(y);
}

/// MAGE ///
/// MAGE ///


if(message.content === préfix + "M Blocage simple"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous executez un blocage magique de faible rang (-10 mana)", ":shield: " + y)
    .setImage("https://i.pinimg.com/originals/eb/79/c4/eb79c4cc671a7b01a989809d1c7edbae.png")
    message.channel.send(y);
}

if(message.content === préfix + "Magie simple"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous envoyez un sort de bas rang (-10 mana)", ":sparkles: "+y)
    .setImage("https://media.giphy.com/media/lYfMRNGRIyOOQo9PKl/giphy.gif")
    message.channel.send(y);
}

if(message.content === préfix + "Soins de bas rang"){
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous soignez une personne au choix, ou bien vous même (-20 mana)", ":heartpulse: "+y)
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/7/71/Overlord_III_EP07_131.png/revision/latest/scale-to-width-down/640?cb=20180828050559")
    message.channel.send(y);
}


if(message.content === préfix + "Mage ultime"){
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#00f5ff")
    .addField("Vous régénérez du Mana", y)
    .setImage("https://media.giphy.com/media/Bp4Iz5pItPXI3ErsAf/giphy.gif")
    message.channel.send(y);
    var mins = Math.floor(Math.min(40));
    var maxs = Math.floor(Math.max(65)); 
    var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var w = new Discord.RichEmbed() 
    .setColor("#ff8b00")
    .addField("Vous executez un puissant sort su votre ennemie (-100 de mana)", ":crossed_swords: "+ w)
    message.channel.send(w);
}

/// Voleur ///
/// Voleur ///


if(message.content === préfix + "V Coup d'épée"){
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous lui infligez un coup d'épée rapide qui inflige", ":dagger: "+ y )
    .setImage("https://i.pinimg.com/originals/77/1f/13/771f13c36fa5bcb8847b285508f5e8c5.jpg")
    message.channel.send(y);
}


if(message.content === préfix + "V Blocage simple"){
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(10)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous executez un blocage magique de faible rang et réussisez à bloquer", ":shield: " + y)
    .setImage("https://i.pinimg.com/originals/77/1f/13/771f13c36fa5bcb8847b285508f5e8c5.jpg")
    message.channel.send(y);
}

if(message.content === préfix + "Coup bas"){
        
    var min = Math.floor(Math.min(30));
   var max = Math.floor(Math.max(40)); 
   var y = Math.floor(Math.random() * (max - min + 1) ) + min;
   var y = new Discord.RichEmbed()
   .addField("Vous lui infligé un coup de dague impossible à bloquer. Vous perdez 40 de mana", ":dagger: "+y)
   .setImage("https://media.giphy.com/media/XptviXceQG8pjLZ0FD/giphy.gif")
   message.channel.send(y);
}

if(message.content === préfix + "Voleur ultime"){   
    var min = Math.floor(Math.min(55));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#ff8b00")
    .addField("Vous executez un back stab qui inflige de lourd dégats (-50 de mana)", ":crossed_swords: "+ y)
    .setImage("https://media.giphy.com/media/1woWwqPRWY6xGVHQ8M/giphy.gif")
    message.channel.send(y);
}

if(message.content === préfix + "Esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var result = new Discord.RichEmbed() 
    .setColor("#00ff27")
    .setTitle("Votre esquive est réussie, mais attention...Ne prenez pas trop la confiance")
    .setImage("https://static.zerochan.net/Abyss.Watchers.full.2146072.jpg")
    if(50 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous subisez tout les dégats, sa fait mal...")
    message.channel.send(result);

}

/// Ranger ///
/// Ranger ///
/// Ranger ///

if(message.content === préfix + "Tir à l'arc"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(35)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous tirez une fleche rapide sur votre ennemie",":bow_and_arrow: "+y)
    .setImage("https://media.giphy.com/media/5QI6YQxisFehaLlQ8I/giphy.gif")
    message.channel.send(y);
}

if(message.content === préfix + "R Blocage simple"){
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(10)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous executez un blocage magique de faible rang et réussisez à bloquer", ":shield: " + y)
    .setImage("https://wallpapercave.com/wp/wp1954538.jpg")
    message.channel.send(y);
}

if(message.content === préfix + "Ranger ultime"){
    var min = Math.floor(Math.min(60));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#ff8b00")
    .addField("Vous effectuez un tir parfait(-70 de mana)", ":crossed_swords: "+ y)
    .setImage("https://media.giphy.com/media/uUl8lkfxMYLi5q9wp8/giphy.gif")
    message.channel.send(y);
}
if(message.content === préfix + "Tire rapide"){
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous tentez de lui envoyer une fleche rapide en direction de son torse, cherchant à viser un point vital(-50 de mana)", ":bow_and_arrow: "+y)
    .setImage("https://cdn.suwalls.com/wallpapers/fantasy/archer-girl-25615-1920x1080.jpg")
    message.channel.send(y);
}

if(message.content === préfix + "Blocage rapide"){
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous executez un blocage rapide et réussisez à bloquer", ":shield: "+y)
    .setImage("https://cdn.discordapp.com/attachments/499161815549476864/541313060917215253/BDci.gif")
    message.channel.send(y);
}


/// Coups spéciaux race palier 1 ///
/// Coups spéciaux race palier 1 ///
/// Coups spéciaux race palier 1 ///


