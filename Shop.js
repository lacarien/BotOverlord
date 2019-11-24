


if(message.content === préfix + "Boutique CSM"){
    const filter = (reaction, user) => ['1️⃣','2️⃣',].includes(reaction.emoji.name) &&user.id === message.author.id;
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
                            message.delete()
                            let embed = new Discord.RichEmbed()
                                .setColor("#b8b8b8")
                                .setAuthor("TEST")
                                message.channel.send(embed).then(async message => 
                                    { 
                                        await message.react('2️⃣')

                                        let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                        collector.on('collect', (reaction, collector) =>
                                            {
                                                //const reaction = collected.first();

                                                if(reaction.emoji.name === '1️⃣')
                                                {
                                                    message.delete()
                                                
                                                    //message.channel.bulkDelete(2);
                                                }
                                            });
                                    });
                        break;
                        case '2️⃣':
                                message.delete()
                                let embed2 = new Discord.RichEmbed()
                                    .setColor("#b8b8b8")
                                    .setAuthor("TEST 2")
                                    message.channel.send(embed2).then(async message => 
                                        { 
                                            await message.react('1️⃣')
    
                                            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                            collector.on('collect', (reaction, collector) =>
                                                {
                                                    //const reaction = collected.first();
    
                                                    if(reaction.emoji.name === '1️⃣')
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
