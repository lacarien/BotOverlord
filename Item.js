

    if(message.content === préfix + "Achat epee en fer" || message.content === préfix + "achat epee en fer") {
                var result = Math.floor((Math.random() * 100) + 1);
                if(result < 40)
                var result = new Discord.RichEmbed() 
                .setColor("#898989")
                .setImage("http://wallpapersdsc.net/wp-content/uploads/2017/04/Sword-HD-Desktop.jpg")
                .addField("Vous achetez une épée en fer", ":crossed_swords: 1")
                if(result < 80)
                var result = new Discord.RichEmbed()
                .setColor("#898989")
                .setImage("http://wallpapersdsc.net/wp-content/uploads/2017/04/Sword-HD-Desktop.jpg")
                .addField("Vous achetez une épée en fer", ":crossed_swords: 2")
                else if(result < 101)
                var result = new Discord.RichEmbed() 
                .setColor("#898989")
                .setImage("http://wallpapersdsc.net/wp-content/uploads/2017/04/Sword-HD-Desktop.jpg")
                .addField("Vous achetez une épée en fer", ":crossed_swords: 3") 
                message.channel.send(result);

            } 
            if(message.content === préfix + "Achat dague en fer" || message.content === préfix + "achat dague en fer") {
                var result = Math.floor((Math.random() * 100) + 1);
                if(result < 30)
                var result = new Discord.RichEmbed() 
                .setColor("#898989")
                .setImage("https://cdn.discordapp.com/attachments/641778159464742942/664036348952313866/weapons20swords20celtic20albion_www.png")
                .addField("Vous achetez une dague en fer",  ":crossed_swords: 1")
                if(result < 80)
                var result = new Discord.RichEmbed()
                .setColor("#898989")
                .setImage("https://cdn.discordapp.com/attachments/641778159464742942/664036348952313866/weapons20swords20celtic20albion_www.png")
                .addField("Vous achetez une dague en fer", ":crossed_swords: 2")
                else if(result < 101)
                var result = new Discord.RichEmbed() 
                .setColor("#898989")
                .setImage("https://cdn.discordapp.com/attachments/641778159464742942/664036348952313866/weapons20swords20celtic20albion_www.png")
                .addField("Vous achetez une dague en fer", ":crossed_swords: 3") 
                message.channel.send(result);

            }     

            if(message.content === préfix + "Achat casque de rat" || message.content === préfix + "achat casque de rat") {
                var minM = Math.floor(Math.min(5));
                var maxM = Math.floor(Math.max(15)); 
                var HP = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
                var result = new Discord.RichEmbed() 
                .setColor("#62A140")
                .setImage("http://s1.1zoom.net/big0/715/DOTA_2_Legion_Commander_442254.jpg")
                .addField("Vous achetez un casque de rat", ":gift_heart: " + HP) 
                message.channel.send(result);

            } 

            if(message.content === préfix + "Achat plastron de rat" || message.content === préfix + "achat plastron de rat") {
                var minM = Math.floor(Math.min(5));
                var maxM = Math.floor(Math.max(15)); 
                var HP = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
                var result = new Discord.RichEmbed() 
                .setColor("#62A140")
                .setImage("http://s1.1zoom.net/big0/715/DOTA_2_Legion_Commander_442254.jpg")
                .addField("Vous achetez un plastron de rat", ":gift_heart: " + HP) 
                message.channel.send(result);

            }     
            if(message.content === préfix + "Achat bottes de rat" || message.content === préfix + "achat bottes de rat") {
                var minM = Math.floor(Math.min(5));
                var maxM = Math.floor(Math.max(15)); 
                var HP = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
                var result = new Discord.RichEmbed() 
                .setColor("#62A140")
                .setImage("http://s1.1zoom.net/big0/715/DOTA_2_Legion_Commander_442254.jpg")
                .addField("Vous achetez des bottes de rat", ":gift_heart: " + HP) 
                message.channel.send(result);

                }     


    if(message.content === préfix + "Peau de crocro" || message.content === préfix + "peau de crocro"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00148f")
        .addField("**Crocro du palier 1**", " :fire: **Localisation : Chemin**\n:dollar: **Prix d'achat : 20 Mercure**\n:moneybag: **Prix de revente : 10 Mercure**\n:third_place: **Appentissage du metier couturier :** ``?Couture peau de crocro``")
        .setImage("https://lh4.googleusercontent.com/-0X3phCZZsfo/Tz4X2duAU_I/AAAAAAAAGEM/LLdJ5aqGzIw/Cape%20de%20l%27Homme%20Ours.png")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
        message.channel.sendMessage(help_embed);
    }
    if(message.content === préfix + "Queu de crocro" || message.content === préfix + "queu de crocro"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00148f")
        .addField("**Crocro du palier 1**", " :fire: **Localisation : Chemin**\n:dollar: **Prix d'achat : 30 Mercure**\n:moneybag: **Prix de revente : 15 Mercure**\n:third_place: **Appentissage du metier couturier :** ``?Couture queu de crocro``")
        .setImage("https://i.pinimg.com/736x/cf/34/c9/cf34c94e2eab837d0e53465afe99bb15.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
        message.channel.sendMessage(help_embed);
    }
    if(message.content === préfix + "Aile d'aragnator" || message.content === préfix + "aile d'aragnator"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00148f")
        .addField("**Aragnator du palier 1**", " :fire: **Localisation : Plaine chaude**\n:dollar: **Prix d'achat : 40 Mercure**\n:moneybag: **Prix de revente : 20 Mercure**\n:third_place: **Appentissage du metier alchimiste :** ``?Alchimie aile d'argnator``")
        .setImage("https://fsa.zobj.net/crop.php?r=QsbtnwZ1KWq25jFJ6bf3wa2PWOfbWmSn0NV1_fpK9K2ht8lCex8cNrwDbQsgnLpW6HEKQLZJHHNOmlB3WKl2Ci0nG_n8_sWfXuP9LNjTN35HksvHEdQvk_FEgT9lKl9UmviWkVuHLWGKAbqT")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
        message.channel.sendMessage(help_embed);
    }
    if(message.content === préfix + "Corne de gnome" || message.content === préfix + "corne de gnome"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00148f")
        .addField("**Gnome pyromane du palier 1**", " :fire: **Localisation : Plaine chaude**\n:dollar: **Prix d'achat : 50 Mercure**\n:moneybag: **Prix de revente : 25 Mercure**\n:third_place: **Appentissage du metier alchimiste :** ``?Alchimie corne de gnome``")
        .setImage("https://www.boutique-majama.fr/Files/23099/Img/17/Prothese-de-cornes-3-zoom.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
        message.channel.sendMessage(help_embed);
    }
    
    




