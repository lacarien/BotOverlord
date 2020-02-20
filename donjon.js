if(message.content === préfix + "Donjon volcan" || message.content === préfix + "donjon volcan"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff3d3d")
    .addField("Donjon étage -1", "Vous commencez donc à entrer dans la zone du donjon...Vous pouvez revenir sur vos pas quand vous le souhaitez sans aucun risque mais il faudra refaire tout le chemin épée en main..Vous commencez à l'étage 1")
    .addField("Déplacement", "?Donjon_volcan [numéro de l'étage]")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/673610773498560553/Dwarf20City-6.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
    message.channel.sendMessage(help_embed);
}

client.on("message",message2 =>{

    if (!message2.content.startsWith(préfix) || message2.author.bot) return;
    const command = args.shift().toLowerCase();

    if(command === 'donjon_volcan') {
        if (!args.length) {
        return message2.channel.send(`Il faut mettre le numéro de l'étage !, ${message2.author}!`);
        }
        if (talkedRecently2.has(message2.author.id)) {
            message2.channel.send("Attendre 15 minutes" + message2.author);
        } else {
            var nombre = 100;
            var result = Math.floor((Math.random() * 100) + 1);
            var multiple = multiple*`${args}`;
            nombre = nombre+10-multiple;
            if(result<nombre){
                var result2 = Math.floor((Math.random() * 100) + 1);
                if(result2<71){
                    message2.channel.send("``Durant votre longue marche vous tomberez face à 2 Crocro garde ! attention ! Voici donc les nobles crocro avec un QI moyen comme tout homme qui se respecte !``")
                    var mes = new Discord.RichEmbed() 
                    .setColor("#ff3d3d")
                    .addField("Nom du monstre", "**__Garde Crocro__**")
                    .addField(":heart: HP","170")
                    .addField(":beginner: Passif", "Un QI lambda")
                    .addField(":crossed_swords: Attaque", "?gcrocro_attaque")
                    .addField(":shield: Défense", "?gcrocro_défense  [dégats reçu]")
                    .addField(":moneybag: Récompenses", "?Récompenses_gcrocro [lvl]")
                    .setImage("https://i.pinimg.com/originals/6f/5c/ec/6f5cecbd063fae6cff51c36eb284fb84.jpg")
                    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                }else{
                    message2.channel.send("``Durant votre longue marche un poids plume tombe du ciel en face de vous....Bonne chance...``")
                    var mes = new Discord.RichEmbed() 
                    .setColor("#ff3d3d")
                    .addField("Nom du monstre", "**__Crocro d'élite__**")
                    .addField(":heart: HP","400")
                    .addField(":beginner: Passif", "Peu attaquer la 2eme ligne dans son ciblage")
                    .addField(":crossed_swords: Attaque", "?ecrocro_attaque")
                    .addField(":shield: Défense", "?ecrocro_défense  [dégats reçu]")
                    .addField(":moneybag: Récompenses", "?Récompenses_ecrocro [lvl]")
                    .setImage("https://66.media.tumblr.com/31d60f3fc6d1a1012c5b336a14cbf1f0/tumblr_ol1vuqCWt51u68pxro1_400.png")
                    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                    
                }
            } else {
                var mes = new Discord.RichEmbed() 
                .addField("TODO", "TODO")
            }
            message2.channel.send(mes);
            talkedRecently2.add(message2.author.id);
                setTimeout(() => {
                // Removes the user from the set after a minute
                talkedRecently2.delete(message2.author.id);
                },  600000);
                }
            }    

});
