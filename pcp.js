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
    .addField("**3PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un ranger, vous avez une bonne culture G dans le domaine de la chasse")
    .addField("**11PCP**","**Vous obtenez une nouvelle passif :** Vous êtes un ranger, vous savez chasser sans trop de difficulté")
    message.channel.sendMessage(help_embed);
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


