
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
    var min = Math.floor(Math.min(70));
    var max = Math.floor(Math.max(90)); 
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


/// Coups spéciaux race  ///
/// Coups spéciaux race  ///
/// Coups spéciaux race ///

if(message.content === préfix + "CS Humain"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .addField("Liste des coups spéciaux", "lvl 10 : ?Sainte bénédiction \n lvl 30 : ?Multi classe \n lvl 40 : Réanimation")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "CS Vampire"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#dc322f")
    .addField("Liste des coups spéciaux", "lvl 10 : ?Drain de vie \n lvl 15 : ?Drain de vie 2 \n lvl 20 : ?Drain de vie 3 \n lvl 25 : ?Drain de vie 4 + ?Blocage surhumain \n lvl 30 : ?Drain de vie 5 \n lvl 35 : ?Drain de vie 6 \n lvl 40 : ?Drain de vie 7 + ?Transformation vampirique \n lvl 40 : ?Drain de vie 8")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "CS Automaton"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#7c7c70")
    .addField("Liste des coups spéciaux", "lvl 10 : ?Magic gun \n lvl 20 : ?Magic gun 2 (si vous avez prit la classe archer) \n lvl 25 : ?Réparation automatique \n lvl 35 : ?Magic gun 3 (si vous avez prit la classe automaton) \n lvl 40: Tire pleine puissance")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "CS Liche"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a65fe2")
    .addField("Liste des coups spéciaux", "lvl 10 : ?Invocation mini squelette \n lvl 20 : ?Invocation mini squelette 2 \n lvl 30 : ?Coquille squelettique \n lvl 35 : ?Invocation mini squelette 3 \n lvl 40 : ?Cimetiere ambulant")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "CS Lézard"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#20ff00")
    .addField("Liste des coups spéciaux", "lvl 10 : ?écailles renforcées \n lvl 30 : ?Vous obtenez 300HP \n lvl 40 : ?La survie ou la mort")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "CS Elf"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#90c830")
    .addField("Liste des coups spéciaux", "lvl 10 : ?Soins de la nature \n lvl 30 : ?Mana de la nature \n lvl 40 : ?Baiser de mère nature")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "CS Nymphe"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#81b4bc")
    .addField("Liste des coups spéciaux", "lvl 10 : ?Appell de la nature \n lvl 30 : ?Connaissance onirique \n lvl 40 : ?Mimétisme élémentaire")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "CS Démon"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#20ff00")
    .addField("Liste des coups spéciaux", "lvl 10 : ?Vague négative \n lvl 30 : ?Saignement démoniaque \n lvl 40 : ?Transformation démoniaque")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "CS Beastman"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a94329")
    .addField("Liste des coups spéciaux", "lvl 10 : ?Violente morsure \n lvl 20 : ?Violente morsure 2 \n lvl 25 : ?Regarde féroce \n lvl 35 : ?Violente morsure 3 \n lvl 40 : Appelle à la meute")
    message.channel.sendMessage(help_embed);
}

/// Attaque des races palier 1 ! ///
/// Attaque des races palier 1 ! ///
/// Attaque des races palier 1 ! ///


if(message.content === préfix + "Sainte bénédiction"){
    var y = new Discord.RichEmbed()
    .setColor("#939696")
    .setImage("https://png2.cleanpng.com/sh/7fa8d046b0ab32908a2ac106f25e2c8f/L0KzQYm3VcMyN5x1fpH0aYP2gLBuTgRpbV5qhNZucj32c8P2jPx0Nacyi91EcnnwPbX5gfdwdpN0itC2bXHqebS0gb02amI1UaY8MUDlSbLoVL46PmU2S6YCM0G4QoiBUcMyPmo1TKkALoDxd1==/kisspng-the-elder-scrolls-v-skyrim-dragonborn-magic-a-5b1094310b9aa4.9641347315278131690475.png")
    .setAuthor("Une lumière vous enveloppes et vous fais disparaître juste avant de subir le coup, vous réapparaissez juste après (Cooldown : 24h)")
    message.channel.sendMessage(y);
      
}


if(message.content === préfix + "Drain de vie"){
    var mins = Math.floor(Math.min(40));
    var maxs = Math.floor(Math.max(65)); 
    var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var w = new Discord.RichEmbed()
    .setColor("#dc322f")
    .addField("Les points de dégâts que vous infligez vous font également régénérer de la santé (-40 Mana)", w)
    .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
    message.channel.send(w);
}

if(message.content === préfix + "Drain de vie 2"){
    var mins = Math.floor(Math.min(50));
    var maxs = Math.floor(Math.max(75)); 
    var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var w = new Discord.RichEmbed()
    .setColor("#dc322f")
    .addField("Les points de dégâts que vous infligez vous font également régénérer de la santé (-50 Mana)", w)
    .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
    message.channel.send(w);
}

if(message.content === préfix + "Magic gun"){
    var min = Math.floor(Math.min(80));
    var max = Math.floor(Math.max(90)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#7c7c70")
    .addField("Vous pouvez uniquement utiliser cette compétence à longue porté. Vous visez un point vital et infligez de lourd dégats(-60 de mana)", ":gun: "+y)
    .setImage("https://media.giphy.com/media/vgvVcpHvIEjO9yPQqg/giphy.gif")
    message.channel.send(y);
}

if(message.content === préfix + "Invocation mini squelette"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a65fe2")
    .setDescription("Vous invoquez un mini squelette qui se place devant vous en première ligne (-50 mana)")
    .addField("HP", "60")
    .addField("Attaque", "?ms attaque")
    .addField("Défense", "?ms défense")
    .setImage("https://i.pinimg.com/564x/94/b8/9e/94b89e75a8ba88213ae74cd222339354.jpg")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "ms attaque"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le mini squelette attaque, c'est imblocable", y)
    .setColor("#a65fe2")
    message.channel.send(y);
}

if(message.content === préfix + "ms défense"){
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le mini squelette bloque l'attaque", y)
    .setColor("#a65fe2")
    message.channel.send(y);
}

if(message.content === préfix + "écailles renforcées"){
    var y = new Discord.RichEmbed()
    .setColor("#859900")
    .setImage("http://33.media.tumblr.com/eb728f63a9481148b5432b7bdc343a86/tumblr_neantpDeML1su5akfo2_1280.jpg")
    .addField("Vous diminuez les dégats de 25% pendant 3 tours(ce tours est compris dedans (-50 mana)). Vous avez juste à faire **Dégats prit X 0.75**", ":shield: "+y)
    message.channel.send(y);
}

if(message.content === préfix + "Soins de la nature"){
    var y = new Discord.RichEmbed()
    .setColor("#90c830")
    .addField("Vous rénérez 50% de votre santé ou celle d'un alliée graçe à la nature qui vous entoures. Si ce dernier a au dessus de 1000 HP alors cela régène 25% d'HP", y)
    .setImage("https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/vlies-wallpaper-mural-green-forest-10112-[2]-27940-p.jpg")
    message.channel.send(y);
      
}  

if(message.content === préfix + "Appell à la nature"){
    var y = new Discord.RichEmbed()
    .setColor("#81b4bc")
    .setImage("http://images3.wikia.nocookie.net/__cb20110531165556/bestiaire-dofus/fr/images/a/a0/La_bloqueuse.jpg")
    .addField("Invocation (-80 mana)", "Vous invoquez une petite bouboule de mère nature qui se tue en un coups et qui est en deuxième ligne. Vous pouvez choisir de passer en première ligne pour la protéger si vous êtes seul.")
    .addField("Attaque", "?Défense de bouboule")
    message.channel.sendMessage(y); }
      


if(message.content === préfix + "Défense de bouboule"){
    var min = Math.floor(Math.min(70));
    var max = Math.floor(Math.max(90)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#81b4bc")
    .addField("La bouboule de mère nature fait un mur de liane devant vous et cela réduira les dégats que vous subirez(-40 de mana)", ":shield: "+y)
    .setImage("https://cdn.discordapp.com/attachments/499161815549476864/587937711814475776/derya-kocaurlu-poupee.png")
    message.channel.send(y);
}

if(message.content === préfix + "Vague négative"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#20ff00")
    .addField("Vous diminuez la défense ennnemie de 25% pendant 3 tours(ce tours est compris dedans (-50 mana)). Vous avez juste à faire **Dégats envoyé X 1.25**", ":skull_crossbones:  "+y)
    .setImage("https://www.journaldugeek.com/wp-content/blogs.dir/1/files/2017/05/ETD-1.png")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Violente morsure"){
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous donnez un gros coups de griffe qui sonne votre ennemie l'empêchant d'attaquer(-60 de mana)", y)
    .setColor("#a94329")
    .setImage("https://cache.desktopnexus.com/thumbseg/1616/1616662-bigthumbnail.jpg")
    message.channel.send(y);
}
