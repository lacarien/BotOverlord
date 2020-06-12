if(message.content === préfix + "Potion HP" || message.content === préfix + "potion HP"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
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
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setTitle("Créer par la force d'un jeune elf...Qualité médiocre")
    .setDescription(":cyclone: " + y)
    .setColor("#00aaf8")
    .setImage("https://i.pinimg.com/originals/cc/b2/d9/ccb2d9b3bdd7ddb210123658e66a846d.jpg")
    message.channel.sendMessage(y);
}   

// POTION PALIER 2

if(message.content === préfix + "Potion SHP" || message.content === préfix + "potion SHP"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(60));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setTitle("Créer par la force d'un alchimiste...Bonne qualité")
    .setDescription(":heartpulse: " + y)
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/fa/10/a0/fa10a0ab203248f1e61d65b6aabd9235.png")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Potion SMA" || message.content === préfix + "potion SMA"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(60));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setTitle("Créer par la force d'un grand elf...Bonne qualité")
    .setDescription(":cyclone: " + y)
    .setColor("#00aaf8")
    .setImage("https://i.pinimg.com/originals/49/6f/f4/496ff4abab5aaa8ab7ac263d7cfc11ab.jpg")
    message.channel.sendMessage(y);
}   


// ARMURE PALIER 1

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


/// PALIER 2


if(message.content === préfix + "Achat Sarmure HP" || message.content === préfix + "achat sarmure HP"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 75){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 4HP**")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/736x/be/3c/21/be3c217b4740e03e70b69a3e7dd48d4f.jpg")
    } else if (nombre < 97){
        y = Math.floor(y*1.5);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une rare !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 4HP**")
    .setColor("#28B463")
    .setImage("https://i.pinimg.com/736x/be/3c/21/be3c217b4740e03e70b69a3e7dd48d4f.jpg")
    } else if (nombre < 101){
        y = Math.floor(y*2);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 5HP**")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/736x/be/3c/21/be3c217b4740e03e70b69a3e7dd48d4f.jpg")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Achat Sarmure MA" || message.content === préfix + "achat sarmure MA"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 75){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", "🌀 " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 4MA**")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/2d/b1/78/2db1789f5035fd0c91f431072d58a12c.jpg")
    } else if (nombre < 97){
        y = Math.floor(y*1.5);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une rare !")
    .addField(":trident: **Stats bonus : **", "🌀 " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 4MA**")
    .setColor("#28B463")
    .setImage("https://i.pinimg.com/736x/be/3c/21/be3c217b4740e03e70b69a3e7dd48d4f.jpg")
    } else if (nombre < 101){
        y = Math.floor(y*2);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", "🌀 " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 5MA**")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/2d/b1/78/2db1789f5035fd0c91f431072d58a12c.jpg")
    }
    message.channel.sendMessage(y);
}  

if(message.content === préfix + "Achat Sarmure" || message.content === préfix + "achat sarmure"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(8)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 75){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", ":shield: " + y)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/96/4b/4e/964b4e2080b9496fa4fa97fd6bacc839.jpg")

    } else if (nombre < 97){
    
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une rare !")
    .addField(":trident: **Stats bonus : **", ":shield: " + y)
    .addField(":fleur_de_lis: **Passif : **", "Le premier tour du poison vous infliges 0 dégâts")
    .setColor("#28B463")
    .setImage("https://i.pinimg.com/originals/96/4b/4e/964b4e2080b9496fa4fa97fd6bacc839.jpg")

    } else if (nombre < 101){

    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", ":shield: " + y)
    .addField(":fleur_de_lis: **Passif : **", "Le poison est réduit de moitié")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/96/4b/4e/964b4e2080b9496fa4fa97fd6bacc839.jpg")
    }
    message.channel.sendMessage(y);
}  

if(message.content === préfix + "Achat Sarmure HP" || message.content === préfix + "achat sarmure HP"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 75){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 4HP**")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/736x/be/3c/21/be3c217b4740e03e70b69a3e7dd48d4f.jpg")
    } else if (nombre < 97){
        y = Math.floor(y*1.5);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une rare !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 4HP**")
    .setColor("#28B463")
    .setImage("https://i.pinimg.com/736x/be/3c/21/be3c217b4740e03e70b69a3e7dd48d4f.jpg")
    } else if (nombre < 101){
        y = Math.floor(y*2);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y)
    .addField(":fleur_de_lis: **Passif : **", "**à chaque nouveau tour, vous récupérez 5HP**")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/736x/be/3c/21/be3c217b4740e03e70b69a3e7dd48d4f.jpg")
    }
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Achat poly AL" || message.content === préfix + "achat poly AL"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(4)); 
    var z = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 75){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y +"\n:shield: " + z)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/e6/a1/eb/e6a1eb16d6961c026704c2c2ce5e3f6c.jpg")
    } else if (nombre < 97){
        y = Math.floor(y*1.5);
        z = Math.floor(z*1.5);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une rare !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y +"\n:shield: " + z)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#28B463")
    .setImage("https://i.pinimg.com/originals/e6/a1/eb/e6a1eb16d6961c026704c2c2ce5e3f6c.jpg")
    } else if (nombre < 101){
        y = Math.floor(y*2);
        z = Math.floor(z*1.5);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y +"\n:shield: " + z)
    .addField(":fleur_de_lis: **Passif : **", "Vous ne subissez pas le premier dégâts de poison")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/e6/a1/eb/e6a1eb16d6961c026704c2c2ce5e3f6c.jpg")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Achat poly BE" || message.content === préfix + "achat poly BE"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var z = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 75){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y +"\n🌀 " + z)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/53/6c/58/536c58636b340689d0767be9539b4870.jpg")
    } else if (nombre < 97){
        y = Math.floor(y*1.5);
        z = Math.floor(y*1.5);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une rare !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y +"\n🌀 " + z)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#28B463")
    .setImage("https://i.pinimg.com/originals/53/6c/58/536c58636b340689d0767be9539b4870.jpg")
    } else if (nombre < 101){
        y = Math.floor(y*2);
        z = Math.floor(y*2);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", ":hearts: " + y +"\n🌀 " + z)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/53/6c/58/536c58636b340689d0767be9539b4870.jpg")
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Achat poly CH" || message.content === préfix + "achat poly CH"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(4)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var z = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 75){
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure !")
    .addField(":trident: **Stats bonus : **", ":shield: " + y +"\n🌀 " + z)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#ff0000")
    .setImage("https://i.pinimg.com/originals/d8/b1/41/d8b141ffd880b26f4605d37876f99e8a.jpg")
    } else if (nombre < 97){
        y = Math.floor(y*1.5);
        z = Math.floor(z*1.5);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une rare !")
    .addField(":trident: **Stats bonus : **", ":shield: " + y +"\n🌀 " + z)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#28B463")
    .setImage("https://i.pinimg.com/originals/d8/b1/41/d8b141ffd880b26f4605d37876f99e8a.jpg")
    } else if (nombre < 101){
        z = Math.floor(z*2);
        y = Math.floor(y*1.5);
    var y = new Discord.RichEmbed()
    .setTitle("Vous avez une nouvelle armure et par chance c'est une épique !")
    .addField(":trident: **Stats bonus : **", ":shield: " + y +"\n🌀 " + z)
    .addField(":fleur_de_lis: **Passif : **", "Aucune")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/d8/b1/41/d8b141ffd880b26f4605d37876f99e8a.jpg")
    }
    message.channel.sendMessage(y);
}
