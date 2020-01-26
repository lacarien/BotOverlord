


/// MARCHE NOIR



if(message.content === préfix + "Commerce"){
    const filter = (reaction, user) => ['🛡️','⚔️','❤️','🔙','🍖'].includes(reaction.emoji.name) &&user.id === message.author.id;
    let embed = new Discord.RichEmbed()
        .setColor("#ff4600")
        .addField("**Sommaire du commerce**","**Armure :** 🛡️\n**Arme :** ⚔️\n**Potion :** ❤️\n**Consommable :** 🍖")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
    message.channel.send(embed).then(async message => 
        {
            await message.react('🛡️');
            await message.react('⚔️');
            await message.react('❤️');
            await message.react('🍖');

            //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
            collector.on('collect', (reaction, collector) =>  {
                    //const reaction = collected.first();

                    switch (reaction.emoji.name) {
                        case '🛡️':
                            let embed = new Discord.RichEmbed()
                            .addField("**__Liste des armures__**", "```Attention à bien respecter les conditions d'utilisation d'une armure``` ")
                            .addField("``Casque de rat``","?Achat casque de rat\n:dollar: **Prix :** :moneybag: 150 Mercure\n:dollar: **Revente :** :moneybag: 50 Mercure")
                            .addField("``Plastron de rat``","?Achat plastron de rat\n:dollar: **Prix :** :moneybag: 150 Mercure\n:dollar: **Revente :** :moneybag: 50 Mercure")
                            .addField("``Botte de rat``","?Achat bottes de rat\n:dollar: **Prix :** :moneybag: 150 Mercure\n:dollar: **Revente :** :moneybag: 50 Mercure")
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
                                .addField("``Epée en fer``","?Achat epee en fer\n:dollar: **Prix :** :moneybag: 170 Mercure\n:dollar: **Revente :** :moneybag: 55 Mercure\n**/!\** Interdit pour les voleurs !")
                                .addField("``Dague en fer``","?Achat dague en fer\n:dollar: **Prix :** :moneybag: 170 Mercure\n:dollar: **Revente :** :moneybag: 55 Mercure\n **/!\** Résérvé aux voleurs !")
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
                                .addField("``Potion faible de MP``","?Achat MPF \n:dollar: **Prix :** 200 Mercure\n:dollar: **Revente :** 75 Mercure")
                                .addField("``Potion faible d'HP``","?Achat HPF\n:dollar: **Prix :** 200 Mercure\n:dollar: **Revente :** 75 Mercure")
                                .setColor("#8c8c8c")
                                .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                                    message.channel.send(embed3).then(async message => 
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
                        case '🍖':
                                let embed4 = new Discord.RichEmbed()
                                .addField("**__Liste des consommables__**", "```Attention à bien respecter les conditions d'utilisation d'un consommable !``` ")
                                .addField("SOON","SOON")
                                .addField("SOON","SOON")
                                .setColor("#8c8c8c")
                                .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                                    message.channel.send(embed4).then(async message => 
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

if(message.content === préfix + "Artisanat"){
    const filter = (reaction, user) => ['🛡️','⚔️','❤️','🔙','🍖'].includes(reaction.emoji.name) &&user.id === message.author.id;
    let embed = new Discord.RichEmbed()
        .setColor("#ff4600")
        .addField("**Sommaire de l'artisanat**","**Armure :** 🛡️\n**Arme :** ⚔️\n**Potion :** ❤️\n**Consommable :** 🍖")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
    message.channel.send(embed).then(async message => 
        {
            await message.react('🛡️');
            await message.react('⚔️');
            await message.react('❤️');
            await message.react('🍖');

            //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
            collector.on('collect', (reaction, collector) =>  {
                    //const reaction = collected.first();

                    switch (reaction.emoji.name) {
                        case '🛡️':
                            let embed = new Discord.RichEmbed()
                            .addField("**__Liste des armures__**", "```Attention à bien respecter les conditions d'utilisation d'une armure``` ")
                            .addField("``Casque de rat``","?Fabrication casque de rat\n:scales: **Ressource :** 5Peau de crocro /\ 3 Queue de crocro /\ 2 Aile d'aragnator \n:diamond_shape_with_a_dot_inside: Niveau de Couturier: 2")
                            .addField("``Plastron de rat``","?Fabrication plastron de rat\n:scales: **Ressource :** 5 Peau de crocro /\ 3 Queue de crocro /\ 2 Aile d'aragnator \n:diamond_shape_with_a_dot_inside: Niveau de Couturier : 2") 
                            .addField("``Botte de rat``","?Fabrication bottes de rat\n:scales: **Ressource :** 5 Peau de crocro /\ 3 Queue de crocro /\ 2 Aile d'aragnator \n:diamond_shape_with_a_dot_inside: Niveau de Couturier : 2")
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
                                .addField("``Epee en fer``","?Fabrication epee en fer\n**/!\** Interdit pour les voleurs !\n:scales: **Ressource :** 2 Adamin  /\  /\ 2 Corne de gnome\n:diamond_shape_with_a_dot_inside: Niveau de forgeron : 2")
                                .addField("``Dague en fer``","?Fabrication dague en fer\n **/!\** Résérvé aux voleurs !\n:scales: **Ressource :** 5 Peau de crocro /\ 3 queue de Crocro /\ 2 Corne de gnome\n:diamond_shape_with_a_dot_inside: Niveau de forgeron : 2")
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
                                .addField("``Potion faible de MP``","?Fabrication potion faible de MP\n:scales: **Ressource :** 3 Oeil de crocro /\ 1 Cornes de gnome \n:diamond_shape_with_a_dot_inside: Niveau d'Alchimiste : 2")
                                .addField("``Potion faible d'HP``","?Fabrication potion faible de HP\n:scales: **Ressource :** 3 Oeil crocro /\ 1 Ailes d'aragnator  \n:diamond_shape_with_a_dot_inside: Niveau d'Alchimiste : 2")
                                .setColor("#8c8c8c")
                                .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                                    message.channel.send(embed3).then(async message => 
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
                        case '🍖':
                                let embed4 = new Discord.RichEmbed()
                                .addField("**__Liste des consommables__**", "```Attention à bien respecter les conditions d'utilisation d'un consommable !``` ")
                                .addField("SOON","SOON")
                                .addField("SOON","SOON")
                                .setColor("#8c8c8c")
                                .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                                    message.channel.send(embed4).then(async message => 
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


/// MARCHE NOIR

