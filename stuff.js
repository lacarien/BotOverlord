if(message.content === préfix + "Potion HP" || message.content === préfix + "potion HP"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setTitle("Créer par la force d'un petit alchimiste...Qualité médiocre")
    .setDescription(":heartpulse: " + y)
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/23/06/14/2306148a6826c3849554ff6e82f358c0.jpg")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Potion MA" || message.content === préfix + "potion MA"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setTitle("Créer par la force d'un jeune elf...Qualité médiocre")
    .setDescription(":cyclone: " + y)
    .setColor("#00aaf8")
    .setImage("https://i.pinimg.com/originals/cc/b2/d9/ccb2d9b3bdd7ddb210123658e66a846d.jpg")
    message.channel.sendMessage(y);
}   

if(message.content === préfix + "Achat armure HP" || message.content === préfix + "achat armure HP"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 95){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/1b/7b/cd/1b7bcd2103063d66999586f614e95c00.jpg")
    } else if (nombre < 101){
        y = y*2;
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/1b/7b/cd/1b7bcd2103063d66999586f614e95c00.jpg")
    }
    message.channel.sendMessage(y);
}  

if(message.content === préfix + "Achat armure MA" || message.content === préfix + "achat armure MA"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 95){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", "🌀 " + y)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/736x/77/89/4f/77894f0ae9fb36caf3c95c7474b8e13d.jpg")
    } else if (nombre < 101){
        y = y*2;
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", "🌀 " + y)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/736x/77/89/4f/77894f0ae9fb36caf3c95c7474b8e13d.jpg")
    }
    message.channel.sendMessage(y);
}  

if(message.content === préfix + "Achat armure" || message.content === préfix + "achat armure"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(4)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 95){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", ":shield: " + y)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/89/9b/f9/899bf9bc4e5099698447f7bc56748ac5.jpg")
    } else if (nombre < 101){
        y = y*2;
        if(y==4){
            y=5;
        }
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", ":shield: " + y)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/89/9b/f9/899bf9bc4e5099698447f7bc56748ac5.jpg")
    }
    message.channel.sendMessage(y);
}  