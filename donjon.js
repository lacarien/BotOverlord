if(message.content === préfix + "Donjon en ruine" || message.content === préfix + "gain"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#808080")
    .setTitle("**Donjon**")
    .setDescription("```Niveau requis : Débutant```")
    .setImage("https://i.pinimg.com/originals/ac/de/e6/acdee674d76b7863f1844d493a352314.jpg")
    .addField(":map: **carte du donjon**", "Le donjon comporte 3 étages et une salle de boss. Il ne contient aucun loot sauf pour la salle final")
    .addField(":man_walking: **Déplacement dans le donjon**", "?DonjonRuine 1")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Donjon étage 1" || message.content === préfix + "gain"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#808080")
    .setTitle("**Donjon**")
    .setDescription("```Niveau requis : Débutant```")
    .setImage("https://i.pinimg.com/originals/ac/de/e6/acdee674d76b7863f1844d493a352314.jpg")
    .addField(":map: **carte du donjon**", "Le donjon comporte 3 étages et une salle de boss. Il ne contient aucun loot sauf pour la salle final")
    .addField(":man_walking: **Déplacement dans le donjon**", "?DonjonRuine 1")
     message.channel.sendMessage(help_embed);
}


