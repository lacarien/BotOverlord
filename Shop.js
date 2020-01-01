client.on("message",message =>{



if(message.content === préfix + "Commerce"){
    const filter = (reaction, user) => ['1️⃣','2️⃣','🔙'].includes(reaction.emoji.name) &&user.id === message.author.id;
    let embed = new Discord.RichEmbed()
        .setColor("#ff4600")
        .addField("**Sommaire du commerce**","**Armure :** 🛡️\n**Arme :** ⚔️\n**Potion :** ❤️")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
    message.channel.send(embed).then(async message => 
        {
            await message.react('🛡️');
            await message.react('⚔️');
            await message.react('❤️');

            //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
            collector.on('collect', (reaction, collector) =>  {
                    //const reaction = collected.first();

                    switch (reaction.emoji.name) {
                        case '🛡️':
                            let embed = new Discord.RichEmbed()
                            .addField("**__Liste des armures__**", "```Attention à bien respecter les conditions d'utilisation d'une armure``` ")
                            .addField("``Casque de rat``","?Achat casque de rat\n:dollar: **Prix :** ??")
                            .addField("``Plastron de rat``","?Achat plastron de rat\n:dollar: **Prix :** ??")
                            .addField("``Botte de rat``","?Achat botte de rat\n:dollar: **Prix :** ??")
                            .setColor("#8c8c8c")
                            .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                             message.channel.send(embed).then(async message => 
                                    { 
                                        await message.react('🔙')

                                        let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                        collector.on('collect', (reaction, collector) =>
                                            {
                                                //const reaction = collected.first();

                                                if(reaction.emoji.name === '🔙')
                                                {
                                                    message.delete()
                                                
                                                    //message.channel.bulkDelete(2);
                                                }
                                            });
                                    });
                        break;
                        case '⚔️':
                                let embed2 = new Discord.RichEmbed()
                                .addField("**__Liste des armes__**", "```Attention à bien respecter les conditions d'utilisation d'une arme ``` ")
                                .addField("``Epee en fer``","?Achat epee en fer\n:dollar: **Prix :** ??\n**/!\** Interdit pour les voleurs !")
                                .addField("``Dague en fer``","?Achat dague en fer\n:dollar: **Prix :** ??\n **/!\** Résérvé aux voleurs !")
                                .setColor("#8c8c8c")
                                .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                                    message.channel.send(embed2).then(async message => 
                                        { 
                                            await message.react('🔙')
    
                                            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                            collector.on('collect', (reaction, collector) =>
                                                {
                                                    //const reaction = collected.first();
    
                                                    if(reaction.emoji.name === '🔙')
                                                    {
                                                        message.delete()
                                                    
                                                        //message.channel.bulkDelete(2);
                                                    }
                                                });
                                        });
                        break;
                        case '❤️':
                                let embed3 = new Discord.RichEmbed()
                                .addField("**__Liste des potions__**", "```Attention à bien respecter les conditions d'utilisation d'une potion !``` ")
                                .addField("``Potion faible de MP``","?Achat MPF \n:dollar: **Prix :** ??")
                                .addField("``Potion faible d'HP``","?Achat HPF\n:dollar: **Prix :** ??")
                                .setColor("#8c8c8c")
                                .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                                    message.channel.send(embed2).then(async message => 
                                        { 
                                            await message.react('🔙')
    
                                            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                            collector.on('collect', (reaction, collector) =>
                                                {
                                                    //const reaction = collected.first();
    
                                                    if(reaction.emoji.name === '🔙')
                                                    {
                                                        message.delete()
                                                    
                                                        //message.channel.bulkDelete(2);
                                                    }
                                                });
                                        });
                        break;
                    
                    }  
                });
        });
}
})
/// MARCHE NOIR

