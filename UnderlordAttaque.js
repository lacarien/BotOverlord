
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
    .addField("Les points de dégâts que vous infligez vous font également régénérer de la santé (-40 Mana et Cooldown : une fois par combat)", w)
    .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
    message.channel.send(w);
}

if(message.content === préfix + "Drain de vie 2"){
    var mins = Math.floor(Math.min(50));
    var maxs = Math.floor(Math.max(75)); 
    var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var w = new Discord.RichEmbed()
    .setColor("#dc322f")
    .addField("Les points de dégâts que vous infligez vous font également régénérer de la santé (-50 Mana et Cooldown : une fois par combat)", w)
    .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
    message.channel.send(w);
}

if(message.content === préfix + "Magic gun"){
    var min = Math.floor(Math.min(80));
    var max = Math.floor(Math.max(90)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#7c7c70")
    .addField("Vous pouvez uniquement utiliser cette compétence à longue porté. Vous visez un point vital et infligez de lourd dégats(-60 de mana et Cooldown : une fois par combat)", ":gun: "+y)
    .setImage("https://media.giphy.com/media/vgvVcpHvIEjO9yPQqg/giphy.gif")
    message.channel.send(y);
}

if(message.content === préfix + "Invocation mini squelette"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a65fe2")
    .setDescription("Vous invoquez un mini squelette qui se place devant vous en première ligne (-50 mana et Cooldown : une fois par combat)")
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
    .setTitle(":shield: Vous diminuez les dégats de 25% pendant 3 tours(ce tours est compris dedans (-50 mana et Cooldown : une fois par combat)). Vous avez juste à faire **Dégats prit X 0.75**")
    message.channel.send(y);
}

if(message.content === préfix + "Soins de la nature"){
    var y = new Discord.RichEmbed()
    .setColor("#90c830")
    .setTitle(":heart: Vous rénérez 50% de votre santé ou celle d'un alliée graçe à la nature qui vous entoures. Si ce dernier a au dessus de 1000 HP alors cela régène 25% d'HP (Cooldown : 24h)")
    .setImage("https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/vlies-wallpaper-mural-green-forest-10112-[2]-27940-p.jpg")
    message.channel.send(y);
      
}  

if(message.content === préfix + "Appel à la nature"){
    var y = new Discord.RichEmbed()
    .setColor("#81b4bc")
    .setImage("http://images3.wikia.nocookie.net/__cb20110531165556/bestiaire-dofus/fr/images/a/a0/La_bloqueuse.jpg")
    .addField("Invocation (-60 mana)", "Vous invoquez une petite bouboule de mère nature qui se tue en un coups et qui est en deuxième ligne. Vous pouvez choisir de passer en première ligne pour la protéger si vous êtes seul (Cooldown : une fois par combat)")
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
    .addField("Vous diminuez la défense ennnemie de 25% pendant 3 tours(ce tours est compris dedans (-50 mana et Cooldown : une fois par combat)). Vous avez juste à faire **Dégats envoyé X 1.25**", ":skull_crossbones:  "+y)
    .setImage("https://www.journaldugeek.com/wp-content/blogs.dir/1/files/2017/05/ETD-1.png")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Violente morsure"){
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous donnez un gros coups de griffe qui sonne votre ennemie l'empêchant d'attaquer(-60 de mana et Cooldown : une fois par combat)", y)
    .setColor("#a94329")
    .setImage("https://cache.desktopnexus.com/thumbseg/1616/1616662-bigthumbnail.jpg")
    message.channel.send(y);
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

if(message.content === préfix + "Coups bas"){
        
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
