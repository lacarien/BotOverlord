if(message.content === prefix + "MineurNovice")
{
    const filter = (reaction, user) => ['💎','❌'].includes(reaction.emoji.name) &&user.id === message.author.id;

    let embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setAuthor("Vous commencez à miner afin de récolter des minerais")
        .setDescription("Pour miner cliquez sur l'émoji, vous avez une chance de tomber sois sur du minerais, sois sur un événement aléatoire.")
        .addField("**Réussite**", "Si vous trouvez un minerais alors vous pouvez sois continuez et prendre le risque de tout perdre sois vous arreter et partir avec le butin")
        .addField("**échec**", "Si vous tombez sur un événement aléatoire alors vous subissez l'effet et perdez tout votre butin")
        .setImage("https://cdn.discordapp.com/attachments/610241216738492448/622707045828657181/0779f446a023ce3d4c53c911797ab73c.jpg")
    message.channel.send(embed).then(async message => 
    {
            await message.react('💎');

        message.awaitReactions(filter, 
        {
            max: 1,
            time: 10000,
            errors:['time']
        }).then(collected => 
        {
           const reaction = collected.first();

           if(reaction.emoji.name === '💎')
           {
                //message.delete();
                mine = Math.floor((Math.random() * 100) + 1);
                if(mine >= 0 && mine <= 9 )
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#a4a4a4")
                        .setDescription("***Vous récoltez 1 minerais sans problème***")
                        .addField(":gem:", "continuer",true)
                        .addField(":x:", "S'arrêter",true)
                    message.channel.send(embed).then(async message => 
                    {
                            await message.react('💎');
                            await message.react('❌');

                            message.awaitReactions(filter, 
                                {
                                    max: 1,
                                    time: 10000,
                                    errors:['time']
                                }).then(collected => 
                                {
                                   const reaction = collected.first();
                                   if(reaction.emoji.name === '💎')
                                   {
                                    //message.delete();
                                    mine2 = Math.floor((Math.random() * 100) + 1);
                                    if(mine2 >= 0 && mine <= 9)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 2 minerais de bronze supplémentaire ainsi qu'un minerais de fer***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 10 && mine <= 24)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 2 minerais de bronze supplémentaire***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 25 && mine2 <= 49)
                                    {
                                        let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 1 minerais de bronze supplémentaire***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 50 && mine2 <= 100)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#bf0000")
                                             .setDescription("***La galerie s'éffondre et dans la fuite vous perdez tout vos minerais ainsi que 10% de vos hp***")
                                         message.channel.send(embed);
                                    }
                                   }else if(reaction.emoji.name === '❌')
                                   {
                                       let embed = new Discord.RichEmbed()
                                            .setColor("#00bf00")
                                            .setDescription("***Vous arrêtez de miner après avoir obtenu au total 1 minerais de bronze***")
                                        message.channel.send(embed);
                                   }
                                }).catch(collected => {
                                    let embed = new Discord.RichEmbed()
                                        .setDescription("**Vous avez mis trop de temps, refaite la commande !miner **")
                                    message.channel.send(embed);
                                });
                    });
                }else if (mine >= 10 && mine <= 74)
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#a4a4a4")
                        .setDescription("***Vous récoltez 1 minerais avez quelques difficultés***")
                        .addField(":gem:", "continuer",true)
                        .addField(":x:", "S'arrêter",true)
                    message.channel.send(embed).then(async message => 
                        {
                                await message.react('💎');
                                await message.react('❌');

                                message.awaitReactions(filter, 
                                {
                                    max: 1,
                                    time: 10000,
                                    errors:['time']
                                }).then(collected => 
                                {
                                   const reaction = collected.first();
                                   if(reaction.emoji.name === '💎')
                                   {
                                    //message.delete();
                                    mine2 = Math.floor((Math.random() * 100) + 1);
                                       if(mine2 >= 0 && mine2 <= 4)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 2 minerais de bronze supplémentaire ainsi qu'un minerais de fer***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 5 && mine <= 19)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 2 minerais de bronze supplémentaire***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 20 && mine2 <= 54)
                                       {
                                           let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 1 minerais de bronze supplémentaire***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 55 && mine2 <= 100)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#bf0000")
                                                .setDescription("***La galerie s'éffondre et dans la fuite vous perdez tout vos minerais ainsi que 10% de vos hp***")
                                            message.channel.send(embed);
                                       }
                                   }else if(reaction.emoji.name === '❌')
                                   {
                                       let embed = new Discord.RichEmbed()
                                            .setColor("#00bf00")
                                            .setDescription("***Vous arrêtez de miner après avoir obtenu au total 1 minerais de bronze***")
                                        message.channel.send(embed);
                                   }
                                }).catch(collected => {
                                    let embed = new Discord.RichEmbed()
                                        .setDescription("**Vous avez mis trop de temps, refaite la commande !miner **")
                                    message.channel.send(embed);
                                });
                        });
                }else if (mine >= 75 && mine <= 100)
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .setDescription("***La galerie s'éffondre vous fessant perdre 10% de vos hp***")
                    message.channel.send(embed);
                }
           }
          
            
        }).catch(collected => {
            let embed = new Discord.RichEmbed()
                .setDescription("**Vous avez mis trop de temps, refaite la commande !miner **")
            message.channel.send(embed);
        });
    });
}














//Mineur 

if(message.content === prefix + "Mineur")
{
    const filter = (reaction, user) => ['💎','❌'].includes(reaction.emoji.name) &&user.id === message.author.id;

    let embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setAuthor("Vous commencez à miner afin de récolter des minerais")
        .setDescription("Pour miner cliquez sur l'émoji, vous avez une chance de tomber sois sur du minerais, sois sur un événement aléatoire.")
        .addField("**Réussite**", "Si vous trouvez un minerais alors vous pouvez sois continuez et prendre le risque de tout perdre sois vous arreter et partir avec le butin")
        .addField("**échec**", "Si vous tombez sur un événement aléatoire alors vous subissez l'effet et perdez tout votre butin")
        .setImage("https://cdn.discordapp.com/attachments/610241216738492448/622707045828657181/0779f446a023ce3d4c53c911797ab73c.jpg")
    message.channel.send(embed).then(async message => 
    {
            await message.react('💎');

        message.awaitReactions(filter, 
        {
            max: 1,
            time: 10000,
            errors:['time']
        }).then(collected => 
        {
           const reaction = collected.first();

           if(reaction.emoji.name === '💎')
           {
                //message.delete();
                mine = Math.floor((Math.random() * 100) + 1);
                if(mine >= 0 && mine <= 14 )
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#a4a4a4")
                        .setDescription("***Vous récoltez 2 minerais sans problème***")
                        .addField(":gem:", "continuer",true)
                        .addField(":x:", "S'arrêter",true)
                    message.channel.send(embed).then(async message => 
                    {
                            await message.react('💎');
                            await message.react('❌');

                            message.awaitReactions(filter, 
                                {
                                    max: 1,
                                    time: 10000,
                                    errors:['time']
                                }).then(collected => 
                                {
                                   const reaction = collected.first();
                                   if(reaction.emoji.name === '💎')
                                   {
                                    //message.delete();
                                    mine2 = Math.floor((Math.random() * 100) + 1);
                                    if(mine2 >= 0 && mine <= 9)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 3 minerais de bronze supplémentaire ainsi que 3 minerais de fer ainsi qu'un minerais d'ébonite***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 10 && mine <= 29)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 2 minerais de bronze supplémentaire ainsi que 2 minerais de fer***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 30 && mine2 <= 59)
                                    {
                                        let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 1 minerais de bronze supplémentaire ainsi qu'un minerais de fer***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 60 && mine2 <= 100)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#bf0000")
                                             .setDescription("***La galerie s'éffondre et dans la fuite vous perdez tout vos minerais ainsi que 10% de vos hp***")
                                         message.channel.send(embed);
                                    }
                                   }else if(reaction.emoji.name === '❌')
                                   {
                                       let embed = new Discord.RichEmbed()
                                            .setColor("#00bf00")
                                            .setDescription("***Vous arrêtez de miner après avoir obtenu au total 2 minerais de bronze***")
                                        message.channel.send(embed);
                                   }
                                }).catch(collected => {
                                    let embed = new Discord.RichEmbed()
                                        .setDescription("**Vous avez mis trop de temps, refaite la commande !miner **")
                                    message.channel.send(embed);
                                });
                    });
                }else if (mine >= 15 && mine <= 79)
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#a4a4a4")
                        .setDescription("***Vous récoltez 2 minerais avez quelques difficultés***")
                        .addField(":gem:", "continuer",true)
                        .addField(":x:", "S'arrêter",true)
                    message.channel.send(embed).then(async message => 
                        {
                                await message.react('💎');
                                await message.react('❌');

                                message.awaitReactions(filter, 
                                {
                                    max: 1,
                                    time: 10000,
                                    errors:['time']
                                }).then(collected => 
                                {
                                   const reaction = collected.first();
                                   if(reaction.emoji.name === '💎')
                                   {
                                    //message.delete();
                                    mine2 = Math.floor((Math.random() * 100) + 1);
                                       if(mine2 >= 0 && mine2 <= 4)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 3 minerais de bronze supplémentaire ainsi que 2 minerais de fer et 1 minerais d'ébonite***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 5 && mine <= 19)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 2 minerais de bronze supplémentaire ainsi que 2 minerais de fer***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 20 && mine2 <= 59)
                                       {
                                           let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 1 minerais de bronze supplémentaire ainsi qu'un minerais de fer***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 60 && mine2 <= 100)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#bf0000")
                                                .setDescription("***La galerie s'éffondre et dans la fuite vous perdez tout vos minerais ainsi que 10% de vos hp***")
                                            message.channel.send(embed);
                                       }
                                   }else if(reaction.emoji.name === '❌')
                                   {
                                       let embed = new Discord.RichEmbed()
                                            .setColor("#00bf00")
                                            .setDescription("***Vous arrêtez de miner après avoir obtenu au total 2 minerais de bronze***")
                                        message.channel.send(embed);
                                   }
                                }).catch(collected => {
                                    let embed = new Discord.RichEmbed()
                                        .setDescription("**Vous avez mis trop de temps, refaite la commande !miner **")
                                    message.channel.send(embed);
                                });
                        });
                }else if (mine >= 80 && mine <= 100)
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .setDescription("***La galerie s'éffondre vous fessant perdre 10% de vos hp***")
                    message.channel.send(embed);
                }
           }
          
            
        }).catch(collected => {
            let embed = new Discord.RichEmbed()
                .setDescription("**Vous avez mis trop de temps, refaite la commande !miner **")
            message.channel.send(embed);
        });
    });
}











//Herboriste novice

if(message.content === prefix + "HerboristeNovice")
{
    const filter = (reaction, user) => ['🍀','❌'].includes(reaction.emoji.name) &&user.id === message.author.id;

    let embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setAuthor("Vous commencez a chercher dans les environs afin de récolter des herbes rares")
        .setDescription("Pour récolter cliquez sur l'émoji, vous avez une chance de tomber sois sur des herbes, sois sur un événement aléatoire.")
        .addField("**Réussite**", "Si vous trouvez une plante alors vous pouvez sois continuez et prendre le risque de tout perdre sois vous arreter et partir avec le butin")
        .addField("**échec**", "Si vous tombez sur un événement aléatoire alors vous subissez l'effet et perdez tout votre butin")
        .setImage("https://cdn.discordapp.com/attachments/610241216738492448/622834757545230384/1024x768-px-alone-fantasy-art-forest-women-740368.jpg")
    message.channel.send(embed).then(async message => 
    {
            await message.react('🍀');

        message.awaitReactions(filter, 
        {
            max: 1,
            time: 10000,
            errors:['time']
        }).then(collected => 
        {
           const reaction = collected.first();

           if(reaction.emoji.name === '🍀')
           {
                //message.delete();
                mine = Math.floor((Math.random() * 100) + 1);
                if(mine >= 0 && mine <= 9 )
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#22b548")
                        .setDescription("***Vous trouvez et récoltez 1 lys de sang sans le moindre soucis***")
                        .addField(":four_leaf_clover:", "continuer",true)
                        .addField(":x:", "S'arrêter",true)
                    message.channel.send(embed).then(async message => 
                    {
                            await message.react('🍀');
                            await message.react('❌');

                            message.awaitReactions(filter, 
                                {
                                    max: 1,
                                    time: 10000,
                                    errors:['time']
                                }).then(collected => 
                                {
                                   const reaction = collected.first();
                                   if(reaction.emoji.name === '🍀')
                                   {
                                    //message.delete();
                                    mine2 = Math.floor((Math.random() * 100) + 1);
                                    if(mine2 >= 0 && mine <= 9)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 2 lys de sang supplémentaire ainsi qu'un obscurcine***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 10 && mine <= 24)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 2 lys de sang supplémentaire***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 25 && mine2 <= 49)
                                    {
                                        let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 1 lys de sang supplémentaire***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 50 && mine2 <= 100)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#bf0000")
                                             .setDescription("***Soudainement la plante que vous étiez sur le point de récolter se met à vous attaquez car ce n'était qu'un monstre déguiser en plante. Vous perdez 10% de vos hp ainsi que tout le loot obtenu***")
                                         message.channel.send(embed);
                                    }
                                   }else if(reaction.emoji.name === '❌')
                                   {
                                       let embed = new Discord.RichEmbed()
                                            .setColor("#00bf00")
                                            .setDescription("***Vous arrêtez de récolter après avoir obtenu au total 1 lys de sang***")
                                        message.channel.send(embed);
                                   }
                                }).catch(collected => {
                                    let embed = new Discord.RichEmbed()
                                        .setDescription("**Vous avez mis trop de temps, refaite la commande**")
                                    message.channel.send(embed);
                                });
                    });
                }else if (mine >= 10 && mine <= 74)
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("##22b548")
                        .setDescription("***Vous récoltez 1 lys de sang après avoir cherché pendant un moment***")
                        .addField(":four_leaf_clover: ", "continuer",true)
                        .addField(":x:", "S'arrêter",true)
                    message.channel.send(embed).then(async message => 
                        {
                                await message.react('🍀');
                                await message.react('❌');

                                message.awaitReactions(filter, 
                                {
                                    max: 1,
                                    time: 10000,
                                    errors:['time']
                                }).then(collected => 
                                {
                                   const reaction = collected.first();
                                   if(reaction.emoji.name === '🍀')
                                   {
                                    //message.delete();
                                    mine2 = Math.floor((Math.random() * 100) + 1);
                                       if(mine2 >= 0 && mine2 <= 4)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 2 lys de sang supplémentaire ainsi qu'un obscurcine***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 5 && mine <= 19)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 2 lys de sang supplémentaire***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 20 && mine2 <= 54)
                                       {
                                           let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 1 lys de sang supplémentaire***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 55 && mine2 <= 100)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#bf0000")
                                                .setDescription("***Soudainement la plante que vous étiez sur le point de récolter se met à vous attaquez car ce n'était qu'un monstre déguiser en plante. Vous perdez 10% de vos hp ainsi que tout le loot obtenu***")
                                            message.channel.send(embed);
                                       }
                                   }else if(reaction.emoji.name === '❌')
                                   {
                                       let embed = new Discord.RichEmbed()
                                            .setColor("#00bf00")
                                            .setDescription("***Vous arrêtez de récolter après avoir obtenu au total 1 lys de sang***")
                                        message.channel.send(embed);
                                   }
                                }).catch(collected => {
                                    let embed = new Discord.RichEmbed()
                                        .setDescription("**Vous avez mis trop de temps, refaite la commande **")
                                    message.channel.send(embed);
                                });
                        });
                }else if (mine >= 75 && mine <= 100)
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .setDescription("***Soudainement la plante que vous étiez sur le point de récolter se met à vous attaquez car ce n'était qu'un monstre déguiser en plante. Vous perdez 10% de vos hp ainsi que tout le loot obtenu***")
                    message.channel.send(embed);
                }
           }
          
            
        }).catch(collected => {
            let embed = new Discord.RichEmbed()
                .setDescription("**Vous avez mis trop de temps, refaite la commande **")
            message.channel.send(embed);
        });
    });
}






//Herboriste

if(message.content === prefix + "Herboriste")
{
    const filter = (reaction, user) => ['🍀','❌'].includes(reaction.emoji.name) &&user.id === message.author.id;

    let embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setAuthor("Vous commencez a chercher dans les environs afin de récolter des herbes rares")
        .setDescription("Pour récolter cliquez sur l'émoji, vous avez une chance de tomber sois sur des herbes, sois sur un événement aléatoire.")
        .addField("**Réussite**", "Si vous trouvez une plante alors vous pouvez sois continuez et prendre le risque de tout perdre sois vous arreter et partir avec le butin")
        .addField("**échec**", "Si vous tombez sur un événement aléatoire alors vous subissez l'effet et perdez tout votre butin")
        .setImage("https://cdn.discordapp.com/attachments/610241216738492448/622834757545230384/1024x768-px-alone-fantasy-art-forest-women-740368.jpg")
    message.channel.send(embed).then(async message => 
    {
            await message.react('🍀');

        message.awaitReactions(filter, 
        {
            max: 1,
            time: 10000,
            errors:['time']
        }).then(collected => 
        {
           const reaction = collected.first();

           if(reaction.emoji.name === '🍀')
           {
                //message.delete();
                mine = Math.floor((Math.random() * 100) + 1);
                if(mine >= 0 && mine <= 14 )
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#00bf00")
                        .setDescription("***Vous trouvez et récoltez 2 lys de sang sans le moindre soucis***")
                        .addField(":four_leaf_clover:", "continuer",true)
                        .addField(":x:", "S'arrêter",true)
                    message.channel.send(embed).then(async message => 
                    {
                            await message.react('🍀');
                            await message.react('❌');

                            message.awaitReactions(filter, 
                                {
                                    max: 1,
                                    time: 10000,
                                    errors:['time']
                                }).then(collected => 
                                {
                                   const reaction = collected.first();
                                   if(reaction.emoji.name === '🍀')
                                   {
                                    //message.delete();
                                    mine2 = Math.floor((Math.random() * 100) + 1);
                                    if(mine2 >= 0 && mine <= 9)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 3 lys de sang supplémentaire ainsi que 3 obscurcine et 1 rose des vents***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 10 && mine <= 29)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 2 lys de sang supplémentaire ainsi que 2 obscurcine***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 30 && mine2 <= 59)
                                    {
                                        let embed = new Discord.RichEmbed()
                                             .setColor("#00bf00")
                                             .setDescription("***Vous récoltez 1 lys de sang supplémentaire ainsi qu'une obscurcine***")
                                         message.channel.send(embed);
                                    }else if(mine2 >= 60 && mine2 <= 100)
                                    {
                                         let embed = new Discord.RichEmbed()
                                             .setColor("#bf0000")
                                             .setDescription("***Soudainement la plante que vous étiez sur le point de récolter se met à vous attaquez car ce n'était qu'un monstre déguiser en plante. Vous perdez 10% de vos hp ainsi que tout le loot obtenu***")
                                         message.channel.send(embed);
                                    }
                                   }else if(reaction.emoji.name === '❌')
                                   {
                                       let embed = new Discord.RichEmbed()
                                            .setColor("#00bf00")
                                            .setDescription("***Vous arrêtez de récolter après avoir obtenu au total 2 lys de sang***")
                                        message.channel.send(embed);
                                   }
                                }).catch(collected => {
                                    let embed = new Discord.RichEmbed()
                                        .setDescription("**Vous avez mis trop de temps, refaite la commande**")
                                    message.channel.send(embed);
                                });
                    });
                }else if (mine >= 15 && mine <= 79)
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#bf0000")
                        .setDescription("***Vous récoltez 2 lys de sang après avoir cherché pendant un moment***")
                        .addField(":four_leaf_clover: ", "continuer",true)
                        .addField(":x:", "S'arrêter",true)
                    message.channel.send(embed).then(async message => 
                        {
                                await message.react('🍀');
                                await message.react('❌');

                                message.awaitReactions(filter, 
                                {
                                    max: 1,
                                    time: 10000,
                                    errors:['time']
                                }).then(collected => 
                                {
                                   const reaction = collected.first();
                                   if(reaction.emoji.name === '🍀')
                                   {
                                    //message.delete();
                                    mine2 = Math.floor((Math.random() * 100) + 1);
                                       if(mine2 >= 0 && mine2 <= 4)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 3 lys de sang supplémentaire ainsi que 3 obscurcine***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 5 && mine <= 19)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 2 lys de sang supplémentaire ainsi que 2 obscurcine***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 20 && mine2 <= 59)
                                       {
                                           let embed = new Discord.RichEmbed()
                                                .setColor("#00bf00")
                                                .setDescription("***Vous récoltez 1 lys de sang supplémentaire ainsi qu'une obscurcine***")
                                            message.channel.send(embed);
                                       }else if(mine2 >= 60 && mine2 <= 100)
                                       {
                                            let embed = new Discord.RichEmbed()
                                                .setColor("#bf0000")
                                                .setDescription("***Soudainement la plante que vous étiez sur le point de récolter se met à vous attaquez car ce n'était qu'un monstre déguiser en plante. Vous perdez 10% de vos hp ainsi que tout le loot obtenu***")
                                            message.channel.send(embed);
                                       }
                                   }else if(reaction.emoji.name === '❌')
                                   {
                                       let embed = new Discord.RichEmbed()
                                            .setColor("#00bf00")
                                            .setDescription("***Vous arrêtez de récolter après avoir obtenu au total 2 lys de sang***")
                                        message.channel.send(embed);
                                   }
                                }).catch(collected => {
                                    let embed = new Discord.RichEmbed()
                                        .setDescription("**Vous avez mis trop de temps, refaite la commande **")
                                    message.channel.send(embed);
                                });
                        });
                }else if (mine >= 80 && mine <= 100)
                {
                    let embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .setDescription("***Soudainement la plante que vous étiez sur le point de récolter se met à vous attaquez car ce n'était qu'un monstre déguiser en plante. Vous perdez 10% de vos hp ainsi que tout le loot obtenu***")
                    message.channel.send(embed);
                }
           }
          
            
        }).catch(collected => {
            let embed = new Discord.RichEmbed()
                .setDescription("**Vous avez mis trop de temps, refaite la commande **")
            message.channel.send(embed);
        });
    });
}





