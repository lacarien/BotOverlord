

 if(message.content === préfix + "Achat epee en fer") {
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
            .setcolor("#898989")
            .setImage("http://wallpapersdsc.net/wp-content/uploads/2017/04/Sword-HD-Desktop.jpg")
            .addField("Vous achetez une épée en fer", ":crossed_swords: 3") 
            message.channel.send(result);

        } 
        if(message.content === préfix + "Achat dague en fer") {
            var result = Math.floor((Math.random() * 100) + 1);
            if(result < 30)
            var result = new Discord.RichEmbed() 
            .setColor("#898989")
            .setImage("http://cdn.miscellaneoushi.com/1920x1440/20140310/weapons%20swords%20celtic%20albion_www.miscellaneoushi.com_14.jpg")
            .addField("Vous achetez une dague en fer", ":crossed_swords: 1")
            if(result < 80)
            var result = new Discord.RichEmbed()
            .setColor("#898989")
            .setImage("http://cdn.miscellaneoushi.com/1920x1440/20140310/weapons%20swords%20celtic%20albion_www.miscellaneoushi.com_14.jpg")
            .addField("Vous achetez une dague en fer", ":crossed_swords: 2")
            else if(result < 101)
            var result = new Discord.RichEmbed() 
            .setColor("#898989")
            .setImage("http://cdn.miscellaneoushi.com/1920x1440/20140310/weapons%20swords%20celtic%20albion_www.miscellaneoushi.com_14.jpg")
            .addField("Vous achetez une dague en fer", ":crossed_swords: 3") 
            message.channel.send(result);

        }     
        if(message.content === préfix + "Achat casque de rat") {
            var minM = Math.floor(Math.min(5));
            var maxM = Math.floor(Math.max(15)); 
            var HP = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
            var result = new Discord.RichEmbed() 
            .setColor("#62A140")
            .setImage("http://s1.1zoom.net/big0/715/DOTA_2_Legion_Commander_442254.jpg")
            .addField("Vous achetez un casque de rat", ":gift_heart: " + HP) 
            message.channel.send(result);

        } 
        if(message.content === préfix + "Achat plastron de rat") {
            var minM = Math.floor(Math.min(5));
            var maxM = Math.floor(Math.max(15)); 
            var HP = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
            var result = new Discord.RichEmbed() 
            .setColor("#62A140")
            .setImage("http://s1.1zoom.net/big0/715/DOTA_2_Legion_Commander_442254.jpg")
            .addField("Vous achetez un plastron de rat", ":gift_heart: " + HP) 
            message.channel.send(result);

        }     
        if(message.content === préfix + "Achat bottes de rat") {
            var minM = Math.floor(Math.min(5));
            var maxM = Math.floor(Math.max(15)); 
            var HP = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
            var result = new Discord.RichEmbed() 
            .setColor("#62A140")
            .setImage("http://s1.1zoom.net/big0/715/DOTA_2_Legion_Commander_442254.jpg")
            .addField("Vous achetez des bottes de rat", ":gift_heart: " + HP) 
            message.channel.send(result);

        }     


if(message.content === préfix + "Peaux de crocro"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00148f")
    .addField("Location du loot", "Crocro\nChemin du palier 1")
    .addField("Achat", "?")
    .setImage("https://lh4.googleusercontent.com/-0X3phCZZsfo/Tz4X2duAU_I/AAAAAAAAGEM/LLdJ5aqGzIw/Cape%20de%20l%27Homme%20Ours.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
    message.channel.sendMessage(help_embed);
}
