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
