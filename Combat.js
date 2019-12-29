

    if (!message.content.startsWith(préfix) || message.author.bot) return;

    const args = message.content.slice(préfix.length).split(' ');
    const command = args.shift().toLowerCase();

if(command === 'coup-epee'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*2.5);
    var min_value = Math.floor(`${args}`*0.5)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 81)
    var y = new Discord.RichEmbed()
    .addField("**Vous infligez un bon coup d'épée dans le torse de votre adversaire**",":crossed_swords:" + result)
    .setImage("https://i.pinimg.com/originals/d5/23/c5/d523c5604de784ddd5c0758b3a8c4145.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setAuthor("**Votre épée ne touche pas la cible**")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
}

if(command === 'coup-epee'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*2.5);
    var min_value = Math.floor(`${args}`*0.5)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 81)
    var y = new Discord.RichEmbed()
    .addField("**Vous infligez un bon coup d'épée dans le torse de votre adversaire**",":crossed_swords:" + result)
    .setImage("https://i.pinimg.com/originals/d5/23/c5/d523c5604de784ddd5c0758b3a8c4145.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setAuthor("**Votre épée ne touche pas la cible**")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
}

if(command === 'coup-dague'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*2.5);
    var min_value = Math.floor(`${args}`*0.5)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 81)
    var y = new Discord.RichEmbed()
    .addField("**Vous infligez un bon coup d'épée dans le torse de votre adversaire**",":crossed_swords:" + result)
    .setImage("https://i.pinimg.com/originals/d5/23/c5/d523c5604de784ddd5c0758b3a8c4145.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setAuthor("**Votre épée ne touche pas la cible**")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
}

if(command === 'coup-masse'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*2);
    var min_value = Math.floor(`${args}`*0.8)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 81)
    var y = new Discord.RichEmbed()
    .addField("**Vous infligez un bon coup dans le visage de votre adversaire**",":crossed_swords:" + result)
    .setImage("https://img4.goodfon.com/wallpaper/nbig/8/1e/japanese-power-monter-blade-manga-man-warrior-fight-armor-as.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setAuthor("**Votre arme ne touche pas la cible**")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
}
if(command === 'coup-dague'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*3);
    var min_value = Math.floor(`${args}`*1)
    var result = Math.floor((Math.random() * max_value) + min_value);
    if(nombre < 65)
    var y = new Discord.RichEmbed()
    .addField("**Vous infligez un coup précis et puissant à votre adversaire**",":crossed_swords:" + result)
    .setImage("https://i.ytimg.com/vi/O_0CTVFL_Ns/maxresdefault.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setAuthor("**Votre arme ne touche pas la cible**")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
}



if(message.content === préfix + "Roll") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor(result)
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor(result)
    message.channel.send(result);

}
