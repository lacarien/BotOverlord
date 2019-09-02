
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
