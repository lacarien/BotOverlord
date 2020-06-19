    


/// MARCHE NOIR



if(message.content === préfix + "Test"){
    const filter = (reaction, user) => ['🛡️','📜','❤️','🔙','🍖','➡️'].includes(reaction.emoji.name) &&user.id === message.author.id;
    let embed = new Discord.RichEmbed()
        .setColor("#ff4600")
        .addField("**Sommaire du commerce**","**Armure :** 🛡️\n**Utilitaire :** 📜\n**Potion :** ❤️")
        .setImage("https://cdn.discordapp.com/attachments/712345553895424011/715284476334178424/anime_sword_blacksmith_anime_boys_ponytail_Japanese_clothes_original_characters-65281.png")
    message.channel.send(embed).then(async message => 
        {
            await message.react('🛡️');
            await message.react('📜');
            await message.react('❤️');

            //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
            collector.on('collect', (reaction, collector) =>  {
                    //const reaction = collected.first();

                    switch (reaction.emoji.name) {
                        case '🛡️':
                            let embed = new Discord.RichEmbed()
                            .setTitle("**__Liste des armures__**")
                            .setDescription("```Armure du palier 1```")
                            .addField(":hearts: __**Armure d'HP**__","\n:moneybag: **Prix :** 40 de bronze\n:money_with_wings: **Revente : ** 25 de bronze\n:shopping_cart: **Achat : **?Achat armure HP", true)
                            .addField(":cyclone: __**Armure de Mana**__","\n:moneybag: **Prix :** 40 de bronze\n:money_with_wings: **Revente : ** 25 de bronze\n:shopping_cart: **Achat : **?Achat armure MA", true)
                            .addField(":shield: __**Armure basique**__","\n:moneybag: **Prix :** 40 de bronze\n:money_with_wings: **Revente : ** 25 de bronze\n:shopping_cart: **Achat : **?Achat armure")
                            .setColor("#ff4600")
                             message.channel.send(embed).then(async message => 
                                    { 
                                        await message.react('🔙')
                                        await message.react('➡️')
                                        let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                        collector.on('collect', (reaction, collector) =>
                                            {
                                                //const reaction = collected.first();

                                                if(reaction.emoji.name === '🔙')
                                                {
                                                    message.delete()
                                                
                                                    //message.channel.bulkDelete(2);
                                                }

                                                if(reaction.emoji.name === '➡️')
                                                {
                                                    message.delete() 
                                                    
                                                    let embed = new Discord.RichEmbed()
                                                    .setTitle("**__Liste des armures__**")
                                                    .setDescription("```Armure du palier 2```")
                                                    .addField(":hearts: __**Super armure d'HP**__","\n:moneybag: **Prix :** 100 de bronze + 40 pièces d'argent\n:money_with_wings: **Revente : ** 45 de bronze + 10 pièces d'argen\n:abacus: **prérequis :** Avoir 10 points dans les HP\n:shopping_cart: **Achat : **?Achat Sarmure HP", true)
                                                    .addField(":cyclone: __**Super armure de Mana**__","\n:moneybag: **Prix :** 100 de bronze + 40 pièces d'argent\n:money_with_wings: **Revente : ** 45 de bronze + 10 pièces d'argent\n:abacus: **prérequis :** Avoir 10 points dans le mana\n:shopping_cart: **Achat : **?Achat Sarmure MA", true)
                                                    .addField(":shield: __**Super armure basique**__","\n:moneybag: **Prix :** 100 de bronze + 40 pièces d'argent\n:money_with_wings: **Revente : ** 45 de bronze + 10 pièces d'argent\n:abacus: **prérequis :** Avoir 10 points dans l'armure'\n:shopping_cart: **Achat : **?Achat Sarmure")
                                                    .addField("（ミ◕‿◕ミ）  ","█████████████████████████████████████████████████",)
                                                    .addField(":hearts: :shield: __**Armure polyvalente Alpha**__","\n:moneybag: **Prix :** 100 de bronze + 40 pièces d'argent\n:money_with_wings: **Revente : ** 45 de bronze + 10 pièces d'argent\n:shopping_cart: **Achat : **?Achat poly AL", true)
                                                    .addField(":cyclone: :hearts: __**Armure polyvalente Beta**__","\n:moneybag: **Prix :** 100 de bronze + 40 pièces d'argent\n:money_with_wings: **Revente : ** 45 de bronze + 10 pièces d'argent\n:shopping_cart: **Achat : **?Achat poly BE", true)
                                                    .addField(":cyclone: :shield: __**Armure polyvalente Charlie**__","\n:moneybag: **Prix :** 100 de bronze + 40 pièces d'argent\n:money_with_wings: **Revente : ** 45 de bronze + 10 pièces d'argent\n:shopping_cart: **Achat : **?Achat poly CH")
                                                    .setColor("#ff4600")
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
                                                    
                                                    
                                                }


                                            });
                                    });
                        break;
                        case '📜':
                                let embed2 = new Discord.RichEmbed()
                                .setTitle("**__Liste des utilitaires__**")
                                .setDescription("```Tout les paliers```")
                                .addField(":chains: __**Grappin magique**__","\n:moneybag: **Prix :** 10 de bronze\n:money_with_wings: **Revente : ** 5 de bronze\n:shopping_cart: **Utilité :** Après utilisation, vous pourrez essayé de fuir. Si votre fuite réussit, alors vous pourrez emporter quelqu'un de votre choix dans votre fuite.", true)
                                .addField(":scroll: __**Parchemin de message**__","\n:moneybag: **Prix :** 5 de bronze\n:money_with_wings: **Revente : ** 2 de bronze\n:shopping_cart: **Utilité : **Après avoir écrit votre message, ce dernier viendra apparaître devant le destinaire (sans même que vous ne connaissiez la position de la personne).", true)
                                .addField("（ミ◕‿◕ミ）  ","█████████████████████████████████████████████████",)
                                .addField(":champagne: __**Potion d'apparence**__","\n:moneybag: **Prix :** 80 de bronze et 20 d'argent\n:money_with_wings: **Revente : ** 30 de bronze et 7 d'argent\n:shopping_cart: **Utilité : **Après avoir consommé la potion, vous venez à prendre une apparence humanoïde de votre choix pendant 12h. Vous ne pouvez pas copier l'apparence de quelqu'un déjà existant.", true)
                                .addField(":warning: __**Balise de sauvetage**__","\n:moneybag: **Prix :** 20 de bronze et 15 d'argent\n:money_with_wings: **Revente : ** 10 de bronze et 5 d'argent\n:shopping_cart: **Utilité : **Après avoir utilisé la balise, cette dérnière viendra créer une intense lumière dans la zone...Si vous êtes dans un donjon ou une zone à étage, les personnes avant ou après votre chanel viendront voir la lumière..", true)
                                .setColor("#ff4600")
                                    message.channel.send(embed2).then(async message => 
                                        { 
                                            await message.react('🔙')
                                            await message.react('➡️')
                                            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                            collector.on('collect', (reaction, collector) =>
                                                {
                                                    //const reaction = collected.first();
    
                                                    if(reaction.emoji.name === '🔙')
                                                    {
                                                        message.delete()
                                                    
                                                        //message.channel.bulkDelete(2);
                                                    }
    
                                                    if(reaction.emoji.name === '➡️')
                                                    {
                                                        message.delete() 
                                                        
                                                        let embed = new Discord.RichEmbed()
                                                        .setTitle("**__Liste des utilitaires__**")
                                                        .setDescription("```Tout les paliers```")
                                                        .addField(":sparkles: __**Poussière féerique**__","\n:moneybag: **Prix :** 10 de bronze et 7 d'argent\n:money_with_wings: **Revente : ** 5 de bronze et 2 d'argent\n:shopping_cart: **Utilité : **Après avoir lancé la poussière devant vous, vous venez à attirer ''1'' mobs de votre choix**", )
                                                        .setColor("#ff4600")
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
                                                        
                                                        
                                                    }
    
    
                                                });
                                        });
                            break;
                        case '❤️':
                                let embed3 = new Discord.RichEmbed()
                                .setColor("#ff4600")
                                .setTitle("**__Liste des potions__**")
                                .setDescription("```Potion du palier 1```")
                                .addField(":heartpulse: __**Potion d'HP**__","\n:moneybag: **Prix :** 15 de bronze\n:money_with_wings: **Revente : ** 8 de bronze\n:shopping_cart: **Utilisation : **?Potion HP", true)
                                .addField(":cyclone: __**Potion de Mana**__","\n:moneybag: **Prix :** 15 de bronze\n:money_with_wings: **Revente : ** 8 de bronze\n:shopping_cart: **Utilisation : **?Potion MA", true)
                                    message.channel.send(embed3).then(async message => 
                                        { 
                                            await message.react('🔙')
                                            await message.react('➡️')
                                            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                            collector.on('collect', (reaction, collector) =>
                                                {
                                                    //const reaction = collected.first();
    
                                                    if(reaction.emoji.name === '🔙')
                                                    {
                                                        message.delete()
                                                    
                                                        //message.channel.bulkDelete(2);
                                                    }
    
                                                    if(reaction.emoji.name === '➡️')
                                                    {
                                                        message.delete() 
                                                        
                                                        let embed = new Discord.RichEmbed()
                                                        .setTitle("**__Liste des potions__**")
                                                        .setDescription("```Potion du palier 2```")
                                                        .addField(":heartpulse: __**Super potion d'HP**__","\n:moneybag: **Prix :** 30 de bronze et 10 pièces d'argent\n:money_with_wings: **Revente : ** 15 de bronze et 5 pièces d'argent\n:shopping_cart: **Utilisation : **?Potion SHP", true)
                                                        .addField(":cyclone: __**Super potion de Mana**__","\n:moneybag: **Prix :** 30 de bronze et 10 pièces d'argent\n:money_with_wings: **Revente : ** 15 de bronze et 5 pièces d'argent\n:shopping_cart: **Utilisation : **?Potion SMA", true)
                                                        .setColor("#ff4600")
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

