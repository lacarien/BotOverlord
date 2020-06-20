if(message.content === préfix + "Donjon en ruine" || message.content === préfix + "donjon en ruine"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#808080")
    .setTitle("**Donjon**")
    .setDescription("```Niveau requis : Débutant```")
    .setImage("https://i.pinimg.com/originals/ac/de/e6/acdee674d76b7863f1844d493a352314.jpg")
    .addField(":map: **carte du donjon**", "Le donjon comporte 3 étages et une salle de boss. Il ne contient aucun loot sauf pour la salle final")
    .addField(":scroll: **Règle du donjon**", "Vous devez attendre minimum 1h à chaque salle de repos.\nSi vous revenez en arrière, vous devrez retaper la commande.\nLe donjon est faisable qu'une fois par semaine.")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Donjon étage 1" || message.content === préfix + "donjon étage 1"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    var sql = Math.floor((Math.random() * 5) + 1);
    if(sql ==1){
        sql = sql +2;
    }
    if(sql ==2){
        sql = sql +1;
    }
    if(nombre < 50){
    var help_embed = new Discord.RichEmbed()
    .setColor("#808080")
    .setTitle("Horde de squelette")
    .setImage("https://i.pinimg.com/originals/a3/c8/67/a3c8671ffa1504fc7b3b7fa23fb0f485.jpg")
    .addField(":busts_in_silhouette: Nombre de squelettes",sql)
    .addField(":heart: HP par mobs","70")
    .addField(":beginner: Passif", "Ne peut pas mourir en un coup.")
    .addField(":crossed_swords: Attaque", "?Squelette attaque")
    .addField(":shield: Défense", "?bsquelette [dégâts reçu]")
    .addField(":moneybag: Récompenses", "Aucune")
    }else if (nombre < 101){
    var help_embed = new Discord.RichEmbed()
    .setColor("#808080")
    .setTitle("Horde de squelette archer")
    .setImage("https://i.pinimg.com/originals/61/00/f4/6100f4bf5fb47165f908a57557f664b0.jpg")
    .addField(":busts_in_silhouette: Nombre de squelettes",sql)
    .addField(":heart: HP par mobs","50")
    .addField(":beginner: Passif", "Ne peut pas mourir en un coup.")
    .addField(":crossed_swords: Attaque", "?ASquelette attaque")
    .addField(":shield: Défense", "?basquelette [dégâts reçu]")
    .addField(":moneybag: Récompenses", "Aucune")
    }
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Squelette attaque"  || message.content === préfix + "squelette attaque"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(y*1.1);
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70){
    var y = new Discord.RichEmbed()
    .setColor("#808080")
    .addField("Le squelette viendra vous donner un coup d'épée en plein dans votre torse", ":crossed_swords:" + y)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#808080")
    .addField("Le squelette viendra vous donner un coup d'épée en plein dans votre main. __Vous aurez une douleur au prochain tours et vos dégâts seront réduit de moitié.__", ":crossed_swords:" + y)
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "ASquelette attaque"  || message.content === préfix + "Asquelette attaque"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(35)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(y*1.1);
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 85){
    var y = new Discord.RichEmbed()
    .setColor("#808080")
    .addField("le squelette vient tirer une flèche dans votre direction", ":bow_and_arrow: " + y)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#808080")
    .addField("L'archer vient vous tirer dessus en plein dans une zone sensible. __Votre armure n'est pas prise en compte.__", ":bow_and_arrow: " + y)
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Donjon étage 2" || message.content === préfix + "donjon étage 2"){
    var sql = Math.floor((Math.random() * 5) + 1);
    if(sql ==2){
        sql = sql +1;
    }
    if(sql ==1){
        sql = sql +2;
    }

    var ep = 0
    var ar = 0
    var i = sql
    
    while(i != 0){
        var nombre = Math.floor((Math.random() * 100) + 1);
        if(nombre <50){
            ep = ep +1
        } else if (nombre < 101){
            ar = ar +1
        }
        i--
    }
    var help_embed = new Discord.RichEmbed()
    .setColor("#808080")
    .setTitle("Horde de squelette mix")
    .setImage("https://cdn.discordapp.com/attachments/706480568350539799/717446884209197106/Pohot_montage_de_dinue.PNG")
    .addField(":busts_in_silhouette: :crossed_swords: Nombre de squelette en première ligne",ep)
    .addField(":busts_in_silhouette: :bow_and_arrow: Nombre d'archer en deuxieme ligne",ar)
    .addField(":heart: HP par mobs","Archer : 50\nSquelette : 70")
    .addField(":beginner: Passif", "Ne peut pas mourir en un coup.")
    .addField(":crossed_swords: Attaque", "?Squelette attaque\n?ASquelette attaque")
    .addField(":shield: Défense", "?bsquelette [dégâts reçu]\n?basquelette [dégâts reçu]")
    .addField(":moneybag: Récompenses", "Aucune")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Donjon étage 3" || message.content === préfix + "donjon étage 3"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 50){
    var help_embed = new Discord.RichEmbed()
    .setColor("#808080")
    .setTitle("Squelette chevalier")
    .setImage("https://i.pinimg.com/originals/ce/3c/90/ce3c90f8918ff598144ac96fec0f131e.jpg")
    .addField(":heart: HP par mobs","250")
    .addField(":beginner: Passif", "Ne peut pas mourir en un coup.\n Ne peut pas mourir le premier tour")
    .addField(":crossed_swords: Attaque", "?CSquelette attaque")
    .addField(":shield: Défense", "?bcsquelette [dégâts reçu]")
    .addField(":moneybag: Récompenses", "Aucune")
    }else if (nombre < 101){
    var help_embed = new Discord.RichEmbed()
    .setColor("#808080")
    .setTitle("Squelette mage")
    .setImage("https://i.pinimg.com/originals/2f/81/4b/2f814baa5b18b98a67672611b8426792.jpg")
    .addField(":heart: HP par mobs","150")
    .addField(":beginner: Passif", "Ne peut pas mourir en un coup.")
    .addField(":crossed_swords: Attaque", "?MSquelette attaque")
    .addField(":shield: Défense", "?bmsquelette [dégâts reçu]")
    .addField(":moneybag: Récompenses", "Aucune")
    }
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "CSquelette attaque"  || message.content === préfix + "Csquelette attaque"){
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(y*1.1);
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#808080")
    .addField("le chevalier squelette viendra donner un coup d'épée sur son adversaire", ":crossed_swords: " + y)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/ce/3c/90/ce3c90f8918ff598144ac96fec0f131e.jpg")
    .addField("Le chevalier levera son épée en l'air, cette derniere viendra prendre une lumière éblouissante. Abatant sa lame sur vous, vous viendrez à être maudit.", ":crossed_swords: " + y)
    .addField(":full_moon_with_face:**__Malediction solaire__**", "Vous ne voyez pas à plus de 3mètre pendant 2 jours, vous empechant donc de faire des grands déplacement seul.")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "MSquelette attaque"  || message.content === préfix + "Msquelette attaque"){
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(y*1.1);
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70){
    var y = new Discord.RichEmbed()
    .setColor("#808080")
    .addField("Le mage lira des incantations sur son grimoir, suite à quoi des flèches viendront vous foncer droit dessus ! ", ":crossed_swords: " + y)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#808080")
    .addField("Si vous avez une deuxieme ligne, sachez que c'est pour vous...Le mage va en effet envoyer son attaque favorite sur la figure des joueurs à distances !(ciblage uniquement pour la deuxieme ligne)", ":crossed_swords: " + y)
    }
    message.channel.sendMessage(y);
}


/// LOOT DONJON GROTTE ///
    /// LOOT DONJON GROTTE ///
        /// LOOT DONJON GROTTE ///
            /// LOOT DONJON GROTTE ///
            /// LOOT DONJON GROTTE ///
        /// LOOT DONJON GROTTE ///
    /// LOOT DONJON GROTTE ///
/// LOOT DONJON GROTTE ///

if(message.content === préfix + "Loot grotte 1" || message.content === préfix + "loot grotte 1"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(12));
    var max = Math.floor(Math.max(20)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(4));
    var maxs = Math.floor(Math.max(6)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    if(nombre<97){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    } else if(nombre < 101){
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("Dague sinistre")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/e2/6d/30/e26d30cb6fa2a606bc0ed250385e2d70.png")
    .addField(":trident: **__Compétence__**","Pendant 4 tours vous débloquez la compétence : ?Mesquive [dégâts reçu]")
    .addField(":beginner: **__Passif__**", "La première semaine vous perdrez votre voix...La deuxième semaine vous ne pourrez plus utiliser la gestuelle pour parler ressemblant plus à une ''âme vide'' qu'autre chose...")
    .addField(":beginner: **__Passif (suite)__**","arrivé au stade où vous ne pourrez plus comuniquer avec la gestuelle et la voix, vous pourrez uniquement chuchoter dans les oreilles auprès des autres personnes qui sont de la classe voleur, ou bien d'une seul personne au choix(c'est parmanent, donc ne choisisez pas n'importe qui).")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot grotte 2" || message.content === préfix + "loot grotte 2"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(5));
    var maxs = Math.floor(Math.max(7)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    if(nombre<97){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    } else if(nombre < 101){
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("L'arc du serpent")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/46/ee/80/46ee802e45537168f7198d278c244f7a.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Tir de zone [Vos dégâts]")
    .addField(":beginner: **__Passif__**", "Le malus de l'arc est simple...Au bout de deux semaines vous deviendrez aveugle en contre partie d'une ''super ouïe''.")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot grotte 3" || message.content === préfix + "loot grotte 3"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre<96){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .setTitle("Vous gagnez une potion d'HP et une potion de MANA (non revendable)")
    } else if(nombre < 98){
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("Dague sinistre")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/e2/6d/30/e26d30cb6fa2a606bc0ed250385e2d70.png")
    .addField(":trident: **__Compétence__**","Pendant 4 tours vous débloquez la compétence : ?Mesquive [dégâts reçu]")
    .addField(":beginner: **__Passif__**", "La première semaine vous perdrez votre voix...La deuxième semaine vous ne pourrez plus utiliser la gestuelle pour parler ressemblant plus à une ''âme vide'' qu'autre chose...")
    .addField(":beginner: **__Passif (suite)__**","arrivé au stade où vous ne pourrez plus comuniquer avec la gestuelle et la voix, vous pourrez uniquement chuchoter dans les oreilles auprès des autres personnes qui sont de la classe voleur, ou bien d'une seul personne au choix(c'est parmanent, donc ne choisisez pas n'importe qui).")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    } else if(nombre <101) {
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("L'arc du serpent")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/46/ee/80/46ee802e45537168f7198d278c244f7a.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Tir de zone [Vos dégâts]")
    .addField(":beginner: **__Passif__**", "Le malus de l'arc est simple...Au bout de deux semaines vous deviendrez aveugle en contre partie d'une ''super ouïe''.")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot grotte 4" || message.content === préfix + "loot grotte 4"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(7));
    var maxs = Math.floor(Math.max(10)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    if(nombre<97){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    } else if(nombre < 101){
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("Le grimoire du petit druid")
    .setColor("#4A007E")
    .setImage("https://img5.goodfon.com/wallpaper/nbig/5/4e/elena-kondratova-grimoire-cg-art-fentezi-kniga-magiia.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Invocation groop [Votre mana max]")
    .addField(":beginner: **__Passif__**", "Le malus de cette arme légendaire est de vous rendre extremement peureux au bout de deux semaine. Vous serez au stade de vous laissez vous faire victimiser en se mettant en boule au sol et en pleurant(on parle d'un coup de poinge en RP passifs, si il vous attaque avec une vraie attaque vous pourrez vous défendre).")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot grotte 5" || message.content === préfix + "loot grotte 5"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(8));
    var maxs = Math.floor(Math.max(10)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    if(nombre<97){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    } else if(nombre < 101){
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("Le grimoire du grand sorcier")
    .setColor("#4A007E")
    .setImage("https://66.media.tumblr.com/09a3a46b8c2b0a6035ac7297a1543d8e/tumblr_piic463vSM1x4rh9bo1_1280.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Tornade ténébreuse [Vos dégâts]")
    .addField(":beginner: **__Passif__**", "Le malus de cette arme légendaire est de vous faire croire que vous ''voyez l'avenir'', voir même que vous êtes le héro d'une grande histoire liée à une prophétie (qui n'a jamais existé, car dans la réalité ~~tu restes une petite merde~~)")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot grotte 6" || message.content === préfix + "loot grotte 6"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre<96){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .setTitle("Vous gagnez deux potions d'HP et deux potions de MANA (non revendable)")
    } else if(nombre < 98){
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("Le grimoire du petit druid")
    .setColor("#4A007E")
    .setImage("https://img5.goodfon.com/wallpaper/nbig/5/4e/elena-kondratova-grimoire-cg-art-fentezi-kniga-magiia.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Invocation groop [Votre mana max]")
    .addField(":beginner: **__Passif__**", "Le malus de cette arme légendaire est de vous rendre extremement peureux au bout de deux semaine. Vous serez au stade de vous laissez vous faire victimiser en se mettant en boule au sol et en pleurant(on parle d'un coup de poinge en RP passifs, si il vous attaque avec une vraie attaque vous pourrez vous défendre).")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    } else if(nombre <101) {
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("Le grimoire du grand sorcier")
    .setColor("#4A007E")
    .setImage("https://66.media.tumblr.com/09a3a46b8c2b0a6035ac7297a1543d8e/tumblr_piic463vSM1x4rh9bo1_1280.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Tornade ténébreuse [Vos dégâts]")
    .addField(":beginner: **__Passif__**", "Le malus de cette arme légendaire est de vous faire croire que vous ''voyez l'avenir'', voir même que vous êtes le héro d'une grande histoire liée à une prophétie (qui n'a jamais existé, car dans la réalité ~~tu restes une petite merde~~)")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot grotte 7" || message.content === préfix + "loot grotte 7"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(10));
    var maxs = Math.floor(Math.max(15)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    if(nombre<96){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    } else if(nombre < 101){
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("Bouclier lichien")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/34/1f/48/341f482aaa1f2deed465239d124ce936.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Crie squelettique")
    .addField(":beginner: **__Passif__**", "Le malus du bouclier est simple, plus vous allez passer du temps avec votre bouclier, plus vous allez finir schizophrène. Au bout de 2 semaines vous ferez limite plus confiance à votre bouclier qu'à vos proches et vous vous renfermerez sur vous même.")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot grotte 8" || message.content === préfix + "loot grotte 8"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(60));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(12));
    var maxs = Math.floor(Math.max(15)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    if(nombre<96){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    } else if(nombre < 101){
    var x = new Discord.RichEmbed()
    .setTitle("Vous trouvez un petit coffre avec une arme à l'intérieur...")
    .setColor("#223300")
    message.channel.sendMessage(x);
    var y = new Discord.RichEmbed()
    .setTitle("épée de folie")
    .setColor("#4A007E")
    .setImage("https://cdna.artstation.com/p/assets/images/images/021/026/414/large/francois-cannels-brightswordfinal-lowres.jpg?1570090378")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Mparade [dégâts reçu]")
    .addField(":beginner: **__Passif__**", "L'épée de folie comme son nom l'indique vous rendras fou...La première semaine cela vient à se montrer uniquement via l'oral et la deuxième semaine vous commencez à frapper physiquement autrui...Votre folie atteint son ''maximum'' au bout d'un mois.")
    .addField(":beginner: **__Passif (suite)__**","Il est à noter que ce comportement ''violent et impulsif'' peut-être sur 3 variantes : Vous protégez quelqu'un et vous n'hésitez pas à frapper la personne pour qu'elle vous écoutes (car vous avez toujours raison askip) et ne laissez personne l'approcher. Vous n'hésitez pas à frapper quelqu'un qui vous parle car celon vous ''il vous agresse''. Ou bien vous êtes juste '' extremement impulsif'' dans votre quotidien. ")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot grotte finale" || message.content === préfix + "loot grotte finale"){
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre<50){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place: 100")
    .addField("Vous gagnez des pièces d'argent", ":second_place: 20" )
    .addField("Vous gagnez des pièces d'or", ":first_place: 5")
    } else if(nombre < 95){
    var y = new Discord.RichEmbed()
    .setTitle("Vous gagnez 2 potions SMA et 2 potions SHP non revendable.")
    .setColor("#223300")
    } else if(nombre < 101){
        var y = new Discord.RichEmbed()
        .setColor("#4A007E")
        .setImage("https://i.pinimg.com/originals/ba/f7/05/baf705990e172623bfbfbb1375b5de4c.jpg")
        .setTitle("L'anneau du Sergent")
        .setDescription("L'anneau du sergent peut-être stocké uniquement au nombre de 1. Si dans un combat vous venez à vous faire tuer, alors vos HP viendront se bloquer à 1. Une fois le combat finit, vous reviendrais à la vie et l'anneau se ''brisera'', le rendant donc inutile et utilisable une seul fois...Sachez néanmoins que cette version est inférieur à celle d'origine. Si vous n'avez pas frollé la mort 1 mois après l'avoir obtenu, elle se brisera.")
    }
    message.channel.sendMessage(y);
}




