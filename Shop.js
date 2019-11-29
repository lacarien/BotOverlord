


if(message.content === préfix + "Boutique CSM"){
    const filter = (reaction, user) => ['1️⃣','2️⃣','🔙'].includes(reaction.emoji.name) &&user.id === message.author.id;
    let embed = new Discord.RichEmbed()
        .addField("Sommaire :","**Page 1:** 1️⃣ || **Page 2:** 2️⃣",true)
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
    message.channel.send(embed).then(async message => 
        {
            await message.react('1️⃣');
            await message.react('2️⃣');

            //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
            collector.on('collect', (reaction, collector) =>  {
                    //const reaction = collected.first();

                    switch (reaction.emoji.name) {
                        case '1️⃣':
                            let embed = new Discord.RichEmbed()
                            .addField("**__Kevlar__**", "```Protection qui augmente votre vitalité. Vous ne pouvez en porter qu'un``` ")
                            .addField("Kevlar soldat","**HP :** :heart: 2 || **Prix :** :money_with_wings: 70€ ",true)
                            .addField("Kevlar caporal","**HP :** :heart: 3 || **Prix :** :money_with_wings: 100€ ",true)
                            .addField("Kevlar sergent","**HP :** :heart: 4 || **Prix :** :money_with_wings: 130€ ",true)
                            .addField("Kevlar adjudant","**HP :** :heart: 5 || **Prix :** :money_with_wings: 160€ ",true)
                            .addField("Kevlar lieutenant","**HP :** :heart: 6 || **Prix :** :money_with_wings: 200€ ",true)
                            .addField("**__Seringue__**", "```Utilisable hors d'un combat lorsque vous avez peur de ne pas assez vite récupérer, vous ne pouvez en utiliser qu'une tout les 12h``` ")
                            .addField("Seringue de soldat","**HP :** :heart: 3 || **Prix :** :money_with_wings: 50€ ",true)
                            .addField("Seringue de haut gradé","**HP :** :heart: 6 || **Prix :** :money_with_wings: 170€ ",true)
                            .addField("Seringue ultime","**HP :** :heart: 10 || **Prix :** :money_with_wings: 300€ ")
                            .addField("**__Trousse de secours__**", "```Pour pouvoir remettre en êtat quelqu'un en situation critique (1HP(En gros pour évitez qu'il meurt d'hémoragie))``` ")
                            .addField(":heart_decoration: Medikit","**Prix :** : :money_with_wings: 50€")
                            .addField("**__Pistolet de détresse__**", "```Si vous n'avez plus votre radio, le pistolet de détresse est visible à 2 channel à la ronde(inutilisable dans un batiment)``` ")
                            .addField(":gun:  Lance fusé","**Prix :** : :money_with_wings: 15€")
                            .setColor("#efed13")
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
                        case '2️⃣':
                                let embed2 = new Discord.RichEmbed()
                                .addField("**__Amnésique__**", "```Amnésie résérvé au grade minimum de caporal``` ")
                                .addField("Classe A","**Gratuite pour les SGT et plus sinon :syringe: 50€** / éfficacité : 12h",true)
                                .addField("Classe B","**Obtention :** Après validation d'un LTN / éfficacité : 7jours",true)
                                .addField("Classe C","**HP :**Obtention :** Après demande directe au directeur et validation des 4 Héroes du CSM(LTN) / éfficacité : ???",true)
                                .setColor("#efed13")
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
