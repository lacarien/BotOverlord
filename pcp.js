///METEO///

if(message.content === préfix + "Météo") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var result = new Discord.RichEmbed()  // Soleil
    .setColor("#ffeb00")
    .addField("Météo du jour", ":sun_with_face: __**Plein soleil**__ :sun_with_face: \nLe soleil vient de se lever sur Overlord, on pouvait entendre les oiseaux chanter et voler dans le ciel totalement libre et plaisant à regarder. Et encore mieux que plaisant à observer, on pouvait déjà sentir les rayons du soleil caresser les habitants de ce nouveau monde...\n\n**Note :** Les vampires ont -5% de leurs HP")
    .setImage("https://i.pinimg.com/originals/3b/24/b8/3b24b831ceb4786212b8da5a71b78f56.jpg")
    .setFooter("Météo du jour")
    else  if(result < 41)
    var result = new Discord.RichEmbed() // Pluie
    .setColor("#00ffef")
    .addField("Météo du jour", ":cloud_rain: __**Forte pluie**__ :cloud_rain: \nAlors que le soleil vient de se lever, vous remarquez qu'il n'était pas le seul à montrer signe de présence. En effet, de grands nuages viendront alors se montrer chacun leurs tours avant de pleuvoir sur les différentes villes...Habillez vous bien ! Vous risquez de tomber malade\n\n**Note :** Les vampires ont +5% de leurs HP")
    .setImage("https://i.pinimg.com/originals/fa/b6/96/fab696e39e8f12aec892524307a65363.gif")
    .setFooter("Météo du jour")
    else if(result < 61)
    var result = new Discord.RichEmbed() // nuage
    .setColor("#9de9e4")
    .addField("Météo du jour", ":cloud: __**Leger nuage**__ :cloud: \nAvez vous levé les yeux au ciel ? Vous aussi vous les voyez ?! En effet ce sont bien des petites groupes de nuages qui arriveront dans la journée, rien de bien trop néfaste visuellement, mais vous aurez des petites zones d'ombre à des moments de la journée !\n\n**Note :** Les vampires ont +5% de leurs HP")
    .setImage("https://media.giphy.com/media/ri2bxzIyxFfIk/source.gif")
    .setFooter("Météo du jour")
    else if(result < 81)
    var result = new Discord.RichEmbed() // neige
    .setColor("#e883ff")
    .addField("Météo du jour", ":cloud_snow: __**Journée enneigé**__ :cloud_snow: \nNe sentez vous pas quelque chose se déposer sur vos épaules ? Et oui, vous ne rêvez pas ! Voilà qu'aujourd'hui il se met à neiger. Bien entendue il est inutile de tirer la langue pour essayer de gouter à cette douceur...Mais vous pourrez toujours envoyer une boule de neige dans le visage de votre voisin !\n\n**Note :** Les vampires n'ont aucun changement")
    .setImage("http://mangapournous.m.a.pic.centerblog.net/o/swordart-2.gif")
    .setFooter("Météo du jour") 
    else if(result < 101)
    var result = new Discord.RichEmbed() // vent
    .setColor("#9281ff")
    .addField("Météo du jour", ":dash: __**faible vent**__ :dash: \nUn petit vent frais viendra s'approcher sur les terres de Anor Londo. Bien que ce dernier était légèrement frais, il pouvait apporter un certain calme et une certaine douceur lorsqu'il passera au contact de votre peau.\n\n**Note :** Les vampires ont -5% de leurs HP")
    .setImage("https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-nen-thien-nhien-phong-canh-dep.jpg")
    .setFooter("Météo du jour") 
    message.channel.send(result);
}    

if(message.content === préfix + "PCP Ranger" || message.content === préfix + "PCP ranger"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("PCP Ranger")
    .addField(":sparkles: **3PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un ranger, vous avez une bonne culture G dans le domaine de la chasse")
    .addField(":sparkles: **11PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un ranger, vous savez chasser sans trop de difficulté")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Combattant" || message.content === préfix + "PCP combattant"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PCP Combattant")
    .addField(":sparkles: **3PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un combattant, vous avez une bonne culture G dans le domaine des armures")
    .addField(":sparkles: **11PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un combattant, vous avez une bonne endurance")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Voleur" || message.content === préfix + "PCP voleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PCP Voleur")
    .addField(":sparkles: **3PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un voleur, vous êtes pas mauvais en SVT...Dans le style ou vous savez où ça fait mal chez les humanoïdes")
    .addField(":sparkles: **11PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un voleur, vous avez une bonne dextérité")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Mage" || message.content === préfix + "PCP mage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("PCP Mage")
    .addField(":sparkles: **3PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un mage, vous êtes un minimum ''intelligent''")
    .addField(":sparkles: **11PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un mage, vous pouvez faire apparaître une petite luciole magique qui éclaire les environs avec une faible luminosité")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Assassin" || message.content === préfix + "PCP assassin"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PCP Assassin")
    .addField(":sparkles: **19PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un assassin, vous avez une la capacité de voler quelqu'un avec la compétence : ?Vol")
    .addField(":sparkles: **27PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un assassin, vous ne laissez aucune trace de pas lorsque vous marchez(le dépistage ne fonctionne pas sur vous).")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Vol" || message.content === préfix + "vol"){ 
    var luck = Math.floor((Math.random() * 100) + 1);
    var max_value = 5
    var min_value = 2
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    if(luck <70){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ff27")
    .setTitle("Vol réussi !")
    .setImage("https://data.whicdn.com/images/82733010/original.gif")
    .addField(":detective: **Compétence d'assassin**","**Vous avez volé quelqu'un, il ne se rendra compte absolument de rien. Si vous voulez mon avis, vous êtes un sacré connard. :third_place: **" + result )
    } else if (luck < 101)
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("ECHEC")
    .setImage("https://media1.tenor.com/images/f4e15cd0266a0c9c365e4188d57c1e1d/tenor.gif?itemid=14428647")
    .setDescription("Vous êtes prit la main dans le sac...La personne vient de se rendre compte que vous avez essayé de le voler, il peu soit vous laissez faire, sois rappliqué avec un gros poings dans votre figure (ou autre)\n Si vous voulez mon avis...Vous êtes une sacré merde.")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Archer" || message.content === préfix + "PCP archer"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("PCP Archer")
    .addField(":sparkles: **19PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un archer, vous avez une nouvelle capacité : ?Depistage")
    .addField(":sparkles: **27PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un archer, vous ne pouvez pas vous faire voler par un assassin grâce à vos yeux d'aigle.")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Depistage" || message.content === préfix + "depistage"){ 
    var luck = Math.floor((Math.random() * 100) + 1);
    if(luck <80){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ff27")
    .setTitle("Depistage réussis !")
    .setImage("https://images-ext-1.discordapp.net/external/9Pfo73flGm_Liv4eZWRPJ3GdVNZqTvPy_QXw6DkU5LI/https/data.whicdn.com/images/82733010/original.gif")
    .addField(":bow_and_arrow: **Compétence d'archer**","**Vous avez réussis à dépister le terrain ! Si un groupe est passé ici il y a moins de 2h, vous pourrez connaître leur nombre et leur direction.\n Si c'est il y a moins de 4h uniquement le nombre.\n Et si c'est il y a moins de 6h, vous pourrez juste garrantir qu'il y avait bien une ou plusieurs personnes.**")
    } else if (luck < 101)
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("ECHEC")
    .setImage("https://chezfaust.files.wordpress.com/2012/07/facepalmtaiga.jpg?w=584")
    .setDescription("Dommage...Vous ne trouvez rien d'interessant ou alors vous êtes juste aveugle.")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Druid" || message.content === préfix + "PCP druid"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("#8aff61")
    .setTitle("PCP Druid")
    .addField(":sparkles: **19PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un Druid, vous avez une nouvelle capacité : ?Apaisement")
    .addField(":sparkles: **27PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un Druid, les animaux ne sont plus craintifs en votre présence.")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Apaisement" || message.content === préfix + "apaisement"){ 
    var luck = Math.floor((Math.random() * 100) + 1);
    if(luck <80){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ff27")
    .setTitle("Apaisement réussis !")
    .setImage("https://images-ext-1.discordapp.net/external/9Pfo73flGm_Liv4eZWRPJ3GdVNZqTvPy_QXw6DkU5LI/https/data.whicdn.com/images/82733010/original.gif")
    .addField(":sparkling_heart: **Compétence de druid**","**Vous avez réussis à apaiser une personne au choix, cette dernière viendra voir son temps de régénération se réduire de 30min. Pour cela vous devrez avoir un contact physique avec la personne pendant une durée d'au minimum 20secondes. Cette compétence est utilisable tous les 3h.**")
    } else if (luck < 101)
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("ECHEC")
    .setImage("https://chezfaust.files.wordpress.com/2012/07/facepalmtaiga.jpg?w=584")
    .setDescription("Dommage...Vous vous échouez, vous pourrez tenter une nouvelle fois dans 2h !")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Paladin" || message.content === préfix + "PCP paladin"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PCP Paladin")
    .addField(":sparkles: **19PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un Paladin, vous avez une nouvelle capacité : ?Cri")
    .addField(":sparkles: **27PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un Paladin, le sorcier ne peut vous voir dans son miroir magique tout comme il ne peu voir vos proches autours de vous (5mètre de distance).")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Cri" || message.content === préfix + "cro"){ 
    var luck = Math.floor((Math.random() * 100) + 1);
    if(luck <80){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ff27")
    .setTitle("Cri réussis !")
    .setImage("https://images-ext-1.discordapp.net/external/9Pfo73flGm_Liv4eZWRPJ3GdVNZqTvPy_QXw6DkU5LI/https/data.whicdn.com/images/82733010/original.gif")
    .addField(":speaking_head: **Compétence du paladin**","**Vous avez réussis à crier comme un dégénéré, bravo ! Toutes les personnes se trouvant dans le chanel vous as forcément entendue, pratique donc pour faire passer un message à toutes les personnes qu'importent l'emplacement où ils se trouvent. (une fois toute les 3h)**")
    } else if (luck < 101)
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("ECHEC")
    .setImage("https://chezfaust.files.wordpress.com/2012/07/facepalmtaiga.jpg?w=584")
    .setDescription("Dommage...Vous vous échouez, vous pourrez tenter une nouvelle fois dans 2h !")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Chevalier" || message.content === préfix + "PCP chevalier"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PCP Chevalier")
    .addField(":sparkles: **19PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un Chevalier, vous avez une nouvelle compétence : Non, c'était une blague")
    .addField(":sparkles: **27PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un Chevalier, Vous êtes un bon nageur et pouvez faire de l'apnée de maximum 5minutes en mouvement sous l'eau.")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Sorcier" || message.content === préfix + "PCP sorcier"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("PCP Sorcier")
    .addField(":sparkles: **19PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un Sorcier, vous avez une nouvelle compétence : ?Miroir")
    .addField(":sparkles: **27PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un Sorcier, vous savez identifier la classe de quelqu'un en le regardant au minimum 5sec.")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Miroir" || message.content === préfix + "miroir"){ 
    var luck = Math.floor((Math.random() * 100) + 1);
    if(luck <80){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ff27")
    .setTitle("Miroir réussis !")
    .setImage("https://images-ext-1.discordapp.net/external/9Pfo73flGm_Liv4eZWRPJ3GdVNZqTvPy_QXw6DkU5LI/https/data.whicdn.com/images/82733010/original.gif")
    .addField(":compass: **Compétence du sorcier**","**Vous pouvez faire apparaître un miroir, ce dernier vous permettras de visualiser quelqu'un pendant 10 secondes venant alors identifier sa position(une fois toute les 3h)\nPour voir la personne à travers le miroir, il faut que vous ayez été en contact visuelle avec la personne au minimum 2h d'affilés et cela depuis moins d'une semaine.**")
    } else if (luck < 101)
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("ECHEC")
    .setImage("https://chezfaust.files.wordpress.com/2012/07/facepalmtaiga.jpg?w=584")
    .setDescription("Dommage...Vous vous échouez, vous pourrez tenter une nouvelle fois dans 2h !")
    message.channel.sendMessage(help_embed);
}







