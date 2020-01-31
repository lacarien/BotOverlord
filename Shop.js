


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
                            .addField("``Casque de rat``","?Achat casque de rat\n:dollar: **Prix :** :moneybag: 200 Mercure\n:dollar: **Revente :** :moneybag: 50 Mercure")
                            .addField("``Plastron de rat``","?Achat plastron de rat\n:dollar: **Prix :** :moneybag: 200 Mercure\n:dollar: **Revente :** :moneybag: 50 Mercure")
                            .addField("``Botte de rat``","?Achat bottes de rat\n:dollar: **Prix :** :moneybag: 200 Mercure\n:dollar: **Revente :** :moneybag: 50 Mercure")
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
                                .addField("``Epée en fer``","?Achat epee en fer\n:dollar: **Prix :** :moneybag: 220 Mercure\n:dollar: **Revente :** :moneybag: 55 Mercure\n**/!\** Interdit pour les voleurs !")
                                .addField("``Dague en fer``","?Achat dague en fer\n:dollar: **Prix :** :moneybag: 220 Mercure\n:dollar: **Revente :** :moneybag: 55 Mercure\n **/!\** Résérvé aux voleurs !")
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
                                .addField("``Potion faible de MP``","?Achat MPF \n:dollar: **Prix :** 75 Mercure\n:dollar: **Revente :** 25 Mercure")
                                .addField("``Potion faible d'HP``","SOON\n:dollar: **Prix :** SOON Mercure\n:dollar: **Revente :** SOON Mercure")
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
                                .addField("``Soupe de crocro``","?Achat soupe crocro \n:dollar: **Prix :** 30 Mercure\n:dollar: **Revente :** 10 Mercure")
                                .addField("``Super soupe de crocro``","?Achat super soupe crocro \n:dollar: **Prix :** 50 Mercure\n:dollar: **Revente :** 25 Mercure")
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
                            .addField("``Casque de rat``","?Fabrication casque de rat\n:scales: **Ressource :** 5Peau de crocro /\ 9 Bois mediocre /\ 2 Aile d'aragnator \n:diamond_shape_with_a_dot_inside: Niveau de Couturier: 2")
                            .addField("``Plastron de rat``","?Fabrication plastron de rat\n:scales: **Ressource :** 5 Peau de crocro /\ 9 Bois commun /\ 2 Aile d'aragnator \n:diamond_shape_with_a_dot_inside: Niveau de Couturier : 2") 
                            .addField("``Botte de rat``","?Fabrication bottes de rat\n:scales: **Ressource :** 5 Peau de crocro /\ 2 Bois rare /\ 2 Aile d'aragnator \n:diamond_shape_with_a_dot_inside: Niveau de Couturier : 2")
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
                                .addField("``Epee en fer``","?Fabrication epee en fer\n**/!\** Interdit pour les voleurs !\n:scales: **Ressource :** 2 Adamin  /\ 3 Bois mediocre /\ 2 Corne de gnome\n:diamond_shape_with_a_dot_inside: Niveau de forgeron : 2")
                                .addField("``Dague en fer``","?Fabrication dague en fer\n **/!\** Résérvé aux voleurs !\n:scales: **Ressource :** 1 Rubis /\ 3 Bois commun /\ 2 Corne de gnome\n:diamond_shape_with_a_dot_inside: Niveau de forgeron : 2")
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
                                .addField("``Potion faible de HP``","?Fabrication potion faible de HP\n:scales: **Ressource :** 3 Oeil de crocro /\ 1 Cornes de gnome \n:diamond_shape_with_a_dot_inside: Niveau d'Alchimiste : 2")
                                .addField("``Potion faible d'MP``","SOON\n:scales: **Ressource :** SOON  \n:diamond_shape_with_a_dot_inside: Niveau d'Alchimiste : 3")
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
                                .addField("``Soupe de crocro``","?Fabrication soupe crocro\n:scales: **Ressource :** 3 Peau de crocro /\ 2 patte de larve\n:diamond_shape_with_a_dot_inside: Niveau de cuisinier : 2")
                                .addField("``Super soupe de crocro``","?Fabrication soupe crocro\n:scales: **Ressource :** 4 Peau de crocro /\ 2 aile de crofly\n:diamond_shape_with_a_dot_inside: Niveau de cuisinier : 2")
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

