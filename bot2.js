

if(message.content === préfix + "Faction" || message.content === préfix + "faction"){     
    var result = Math.floor((Math.random() * 100) + 1);
    if(result <50){
    var y = new Discord.RichEmbed()
    .setColor("#E80027")
    .setTitle("🌆 Bienvenue dans l'Empire Sirius 🌆")
    .setDescription("> Hey hey ! Vous avez rejoins l'Empire Sirius même si vous n'avez pas vraiment eu le choix ! Mais n'ayez crainte, on a des chouettes divinités comparés à ces pauvres nazes d'Alphard !")
    .setImage("https://cdn.discordapp.com/attachments/733318288330719294/733339577535692830/27965776_p0_master1200.jpg")
    }else if(result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#6CB3D9")
    .setTitle("🏙 Bienvenue dans la Dynastie d'Alphard 🏙")
    .setDescription("> Hey hey ! Vous avez rejoins la Dysnatie d'Alphard, vous avez fait le bon choix ! C'est la meilleur faction et la plus classe comparé à l'autre !")
    .setImage("https://cdn.discordapp.com/attachments/733318288330719294/733340338344689686/pixiv-fantasia-anime-army-wallpaper-preview.jpg")
    message.channel.sendMessage(y);
}


/// Divinité ///
if(message.content === préfix + "Sirius divinité" || message.content === préfix + "sirius divinité"){     
    var result = Math.floor((Math.random() * 100) + 1);
    if(result <25){
    var y = new Discord.RichEmbed()
    .setColor("#F2D7D5")
    .setTitle("Xeeyar")
    .addField(":crown: __**Bénédiction :**__","> Les élus de cette divinité ont pour bénédiction d'avoir une résistance aux températures extrêmement basses tout comme aux sorts de glace.")
    .setDescription("> Une divinité guerrière à l'épée, Xeeyar est née des lieux les plus froid de ce monde, entité en charge de l'hiver et gardienne des montagnards. Elle possède une armure qu'elle n'a jamais enlevé, sa présence congèlerait quiconque dans les alentours qui croiserait sa route sans se soumettre, il parait que ses pouvoirs peuvent atteindre le zéro absolue.")
    .setImage("https://images-ext-2.discordapp.net/external/2HDXomSD0g1vVEkM9lj1iE68kP2QlcvrWiYamYh0OR0/%3Fwidth%3D400%26height%3D560/https/media.discordapp.net/attachments/733316430899970078/733359403515904171/953b89784cb92cbe85fb235f516c883f.jpg")
    }else if(result < 50){
    var y = new Discord.RichEmbed()
    .setColor("#641E16")
    .setTitle("Fenymex")
    .setDescription("> il est l'incarnation même de la chaleur, il est l’être le plus chaud, si vous voyez ce que je veux dire. Certaines légendes à son propos disent qu’il serait apparu une fois devant un de ces élus en sortant de la lave, de sa taille gigantesque où deux énormes cornes massives trônaient sur le haut de son crâne mais malheureusement on n’en sait pas plus à son sujet pour le moment.")
    .addField(":crown: __**Bénédiction :**__","> la divinité qu’il et octroie à ces élue une résistante a tout épreuve contre le feu ou les chaleurs supérieure à la moyenne que sa soit au combat ou en passif")
    .setImage("https://cdn.discordapp.com/attachments/733316430899970078/733421293562626229/image0.jpg")
    } else if(result < 75){
    var y = new Discord.RichEmbed()
    .setColor("#CD6155")
    .setTitle("Argonosite")
    .setDescription("> c’est une divinité qui reste bien mystérieuse mes certaines légendes les plus connues disent que c’est celle qui a été le plus aperçu entre tous sur c’est un serpent géant ou plutôt un mixte entre un dragon et serpent d’une couleur blanchâtre apparemment quand celui-ci s’adresse à un mortel on peut sentir une grande sagesse inégalable")
    .setImage("https://cdn.discordapp.com/attachments/733316430899970078/733439274187227206/image0.png")
    .addField(":crown: __**Bénédiction :**__","> il octroie à ses élues la capacité de ce téléporter dans une autre région....Une tornade entourera donc votre protagoniste avant qu'il ne disparaisse ''étrangement''.")
    } else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#B03A2E")
    .setTitle("Holyora")
    .addField(":crown: __**Bénédiction :**__","> sa bénédiction permet permet aux élues rester éveillé 3 jours consécutifs sans dormir et en restant en grande forme.(prend 1 semaine de recharge)**")
    .setDescription("> c’est une divinité qui ne se montre que pour des occasions bien définies, mais personne ne connait sa véritable forme, certaines légendes racontent que l'on l'aurait aperçu sous forme d’une gigantesque chouette flamboyant dans les airs mais à vrai dire cela n’est qu'une légende parmi tant d’autres.")
    .setImage("https://cdn.discordapp.com/attachments/733316430899970078/733327060109492264/image0.jpg")
    }
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Alphard divinité" || message.content === préfix + "alphard divinité"){     
    var result = Math.floor((Math.random() * 100) + 1);
    if(result <25){
    var y = new Discord.RichEmbed()
    .setColor("#1A5276")
    .setTitle("Gurus")
    .addField(":crown: __**Bénédiction :**__","> Les élus de cette divinité ont pour bénédiction d'avoir une affiliation aux ombres. Dans une zone d'ombre l'élu peut régénérer rapidement son endurance.")
    .setDescription("> Créateur et né dans les ombres, Gurus n'a connu que cela et a su s'adapter aux conditions de  vie les plus compliquées. Un guerrier solitaire dans une armure et une épée faites d'ombre et un corps lumineux grâce aux quelques trous donnant vue sur ce que contient l'armure, mais personne ne sait ce qui se cache réellement derrière l'armure de ce guerrier.")
    .setImage("https://cdn.discordapp.com/attachments/733316430899970078/733359294631903332/a414b488221a9f3c14ad615f9a237e8c.jpg")
    }else if(result < 50){
    var y = new Discord.RichEmbed()
    .setColor("#5499C7")
    .setTitle("Ximlos")
    .setDescription("> Une entité particulière, sa provenance est inconnue ou en tout cas celui-ci a fait en sorte que personne ne sache son origine, rien n'a de secret pour lui, son pouvoir est l'obtention de connaissances, rien ne lui est inconnu ; il est presque impossible de le rencontrer sur la terre ferme sauf si il est demandé par ses Elus pour quelque chose d'une importance capitale.")
    .addField(":crown: __**Bénédiction :**__","> Les élus de cette divinité ont pour bénédiction d'avoir une facilité d'apprentissage et de décryptage d'objets magiques ou de runes.")
    .setImage("https://media.discordapp.net/attachments/733316430899970078/733359568587063296/0c35c81671514fe93a71b9d3148463bc.jpg?width=400&height=560")
    } else if(result < 75){
    var y = new Discord.RichEmbed()
    .setColor("#5DADE2")
    .setTitle("Uara")
    .setDescription("> Malgré l'apparence habituelle que prend cette divinité, celle d'une jeune fille tout à fait normale, sa puissance n'est cependant pas inférieure aux autres divinités et elle est très respectée par les mortels, étant considérée comme une divinité bienveillante et protectrice. Gardienne des orphelins et de la médecine, aucune maladie ne lui résiste ainsi qu'aucune attaque n'arrive à passer ses sorts de défense.")
    .setImage("https://cdn.discordapp.com/attachments/733316430899970078/733360037636079716/70651761_p0_master1200.jpg")
    .addField(":crown: __**Bénédiction :**__","> Les élus de cette divinité ont pour bénédiction un sort de protection à l'épreuve de tout. Ce sort viendra créer un cube de 4m au cube et cela pendant bien 3 secondes (le temps d'une attaque). La compétence est utilisable une fois toutes les semaines.")
    } else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("2874A6")
    .setTitle("Le Malin")
    .addField(":crown: __**Bénédiction :**__","> sa bénédiction permet permet aux élues de revenir à la vie une fois (Utilisation unique). Vous aurez donc ''trompé'' la mort.**")
    .setDescription("> comme son nom l’indique c’est un(e) divinité assez fourbe en soit mais qui peut être assez pratique avec sa bénédiction, pour le coup on ne sait vraiment rien à son sujet. Cette divinité a toujours été un mystère aux yeux de l’humanité que ce soit dans le passé ou dans le présent, mais certaines rumeurs disent qu’il aurait été aperçu un jour ; il serait un peu plus grand qu'un homme et il possèderait plusieurs bras ainsi que deux cornes au sommet d’un visage noir.")
    .setImage("https://cdn.discordapp.com/attachments/733316430899970078/733435811286089728/image0.jpg")
    }
    message.channel.sendMessage(y);
}


/// CLasse ///
if(message.content === préfix + "Spécialité" || message.content === préfix + "spécialité"){     
    var result = Math.floor((Math.random() * 100) + 1);
    if(result <10){
    var y = new Discord.RichEmbed()
    .setTitle("Assassin")
    .setImage("https://i.pinimg.com/originals/f1/48/ed/f148edc2ea7cf4dbf86e01188f7fe7c6.gif")
    .setDescription("> 🗡 **Vous êtes un assassin, vous pourrez avoir un pouvoir liée à la discrétion ou à la mobilité !**")
    .setColor("#17202A")
    }else if(result < 20){
    var y = new Discord.RichEmbed()
    .setTitle("Paladin")
    .setDescription("> 🛡 **Vous êtes un paladin, vous pourrez avoir un pouvoir liée à la ''défense''**")
    .setImage("https://i.kym-cdn.com/photos/images/original/001/743/005/f0b.png")
    .setColor("#1F618D")
    } else if(result < 30){
    var y = new Discord.RichEmbed()
    .setTitle("Chevalier")
    .setDescription("> ⚔️ **Vous êtes un chevalier, vous pourrez avoir un pouvoir liée à ''votre épée et au combat''**")
    .setImage("https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/body_image/public/saber.gif?itok=iBgcU8nO&mtime=1520485369")
    .setColor("#5DADE2")
    } else if(result < 40){
    var y = new Discord.RichEmbed()
    .setTitle("Berserk")
    .setDescription("> 🩸 **Vous êtes un Berserk, vous pourrez avoir un pouvoir liée a la ''brutalité'' ou au ''vol de vie''**")
    .setImage("https://art.ngfiles.com/images/1197000/1197131_rul663_berserk-armor.gif?f1583807385")
    .setColor("#A93226")
    } else if(result < 50){
    var y = new Discord.RichEmbed()
    .setTitle("Sorcier")
    .setDescription("> 🌌 **Vous êtes un Sorcier, vous pourrez avoir un pouvoir lié à votre ''élément choisie''**")
    .setImage("https://pa1.narvii.com/6824/508e5c0853fc8117a9bd15ff653d2a5ce2cb8659_hq.gif")
    .setColor("#BB8FCE")
    } else if(result < 60){
    var y = new Discord.RichEmbed()
    .setTitle("Archer")
    .setDescription("> 🏹 **Vous êtes un Archer, vous pourrez avoir un pouvoir liée a vos ''yeux'' ou directement à votre ''arc''**")
    .setImage("https://media1.tenor.com/images/30ab695b7950b39345bc79d57693b188/tenor.gif?itemid=13124794")
    .setColor("#1ABC9C")
    }else if(result < 70){
    var y = new Discord.RichEmbed()
    .setTitle("Druid")
    .setDescription("> 💗 **Vous êtes un Druid, vous pourrez avoir un pouvoir liée au soin**")
    .setImage("https://i.pinimg.com/originals/40/b2/2b/40b22bf9f3e630be46aeb0169ca3ed9e.gif")
    .setColor("#82E0AA")
    } else if(result < 80){
    var y = new Discord.RichEmbed()
    .setTitle("Nécromancien")
    .setDescription("> ☠️ **Vous êtes un Nécromancien, vous pourrez avoir un pouvoir liée à la nécromancie**")
    .setImage("https://cdn.discordapp.com/attachments/733285064796012661/733350864017817720/1587573853_FocusedPoliticalBluegill-size_restricted.gif")
    .setColor("#34495E")
    } else if(result < 90){
    var y = new Discord.RichEmbed()
    .setTitle("Pugiliste")
    .setDescription("> 👊 **Vous êtes un pugiliste, vous pourrez avoir un pouvoir liée à votre force physique ou bien à votre corps**")
    .setImage("https://media.discordapp.net/attachments/733318288330719294/733353822172479659/giphy_3.gif")
    .setColor("#A6ACAF")
    } else if(result < 110){
    var y = new Discord.RichEmbed()
    .setTitle("Enchanteur")
    .setDescription("> 🔮 **Vous êtes un enchanteur, vous pourrez avoir un pouvoir liée à vos enchantements**")
    .setImage("https://i.pinimg.com/originals/4e/d8/39/4ed8392b48334fd2663c9e79b20b9f74.gif")
    .setColor("#7D3C98")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Puissance" || message.content === préfix + "puissance"){     
    var min = Math.min(950);
    var max = Math.floor(1050); 
    var result = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#5B2C6F")
    .setTitle("Votre puissance est estmié à : :beginner: ``" + result + "`` points")
    .setImage("https://i.pinimg.com/originals/41/e0/03/41e0030005ae24bc574cea8965a1b325.gif")
   
    message.channel.sendMessage(y);
}


if(message.content === préfix + "lvl up inactif" || message.content === préfix + "Lvl up inactif"){     
    var min = Math.min(5);
    var max = Math.floor(15); 
    var result = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#5B2C6F")
    .setTitle("Votre puissance a augmenté...Ridiculement mais a augmenté de : :beginner: ``" + result + "`` points")
    .setImage("https://apprentiotaku.files.wordpress.com/2019/05/soma.gif?w=344&h=194")
   
    message.channel.sendMessage(y);
}
if(message.content === préfix + "lvl up peu actif" || message.content === préfix + "Lvl up peu actif"){     
    var min = Math.min(30);
    var max = Math.floor(40); 
    var result = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#5B2C6F")
    .setTitle("Vous gagnez en puissance...Est-ce une bonne chose ? Totalement, elle a même augmenté de :beginner: ``" + result + "`` points")
    .setImage("https://68.media.tumblr.com/23a80e9e30332f9a2c32a3c67057c82a/tumblr_onz5bxAn5p1sznfdio1_500.gif")
   
    message.channel.sendMessage(y);
}

if(message.content === préfix + "lvl up actif" || message.content === préfix + "Lvl up actif"){     
    var min = Math.min(60);
    var max = Math.floor(80); 
    var result = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#5B2C6F")
    .setTitle("Votre puissance a explosé et a augmenté de : :beginner: ``" + result + "`` points")
    .setImage("https://i.pinimg.com/originals/bd/6f/c0/bd6fc07095edd5bbde78ebb862f0c3d1.gif")
   
    message.channel.sendMessage(y);
}

