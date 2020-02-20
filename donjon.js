if(message.content === préfix + "Donjon volcan" || message.content === préfix + "donjon volcan"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff3d3d")
    .addField("Donjon étage -1", "Vous commencez donc à entrer dans la zone du donjon...Vous pouvez revenir sur vos pas quand vous le souhaitez sans aucun risque mais il faudra refaire tout le chemin épée en main..Vous commencez à l'étage 1")
    .addField("Déplacement", "?Donjon_volcan [numéro de l'étage]")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/673610773498560553/Dwarf20City-6.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
    message.channel.sendMessage(help_embed);
}

client.on("message",message =>{
if (!message.content.startsWith(préfix) || message.author.bot) return;

if(command === 'test') {
    if (!args.length) {
    return message.channel.send(`Il faut mettre le numéro de l'étage !, ${message.author}!`);
    }
    if (talkedRecently2.has(message.author.id)) {
        message.channel.send("Attendre 15 minutes" + message.author);
    } else {
    message.channel.send("**__Test__**")
    var mes = new Discord.RichEmbed() 
    .addField("__**Test**__", "Test")
    message.channel.send(mes);

    talkedRecently2.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        },  600000);
        }
    }    

});
