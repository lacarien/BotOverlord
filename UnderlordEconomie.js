//Shop underlord

if(message.content === prefix + "Shop underlord")
{
    const filter = (reaction, user) => ['📜','🛡','💉','📦','❤','💙','🔙','📃','📝','📄','🍷','🍶','💎','🍀'].includes(reaction.emoji.name) &&user.id === message.author.id;

    let embed = new Discord.RichEmbed()
        .setColor('#b8b8b8')
        .setAuthor('Une fois dans la boutique un vendeur viens vous rejoindre')
        .setDescription('`Bonjour, nous avons une large gamme de produit, \n que désirez-vous ? `')
        .addField('Parchemins', '📜', true)
        .addField('Armures', '🛡', true)
        .addField('Potion', '💉', true)
        .addField('Matériaux', '📦', true)
        .setImage("https://cdn.discordapp.com/attachments/610241216738492448/623483105042497546/631e524f61e78e80088d26a03d2d882b.png")
    message.channel.send(embed).then(async message => 
        {
            await message.react('📜');
            await message.react('🛡');
            await message.react('💉');
            await message.react('📦');

            //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
            let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
            collector.on('collect', (reaction, collector) =>
                {
                    //const reaction = collected.first();

                    switch (reaction.emoji.name)
                    {
                        case '🛡':
                            let embed = new Discord.RichEmbed()
                                .setColor("#b8b8b8")
                                .setAuthor("Les armures")
                                .setDescription("Les classes à distance(mage/ranger), ne peuvent s'équiper que d'armures de mana, sinon elles auront un malus sur le loot de -25%. Et inversement pour les combattants et les voleurs qui ne peuvent s'équiper que d'armures d'Hp.")
                                .addField("Armure d'Hp", "❤", true)
                                .addField("Armure de mana", "💙", true)
                                .addField("Retour au shop", "🔙")
                            message.channel.send(embed).then(async message => 
                                {
                                    await message.react('❤');
                                    await message.react('💙');
                                    await message.react('🔙');
                            
                                    //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
                                    let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                    collector.on('collect', (reaction, collector) =>
                                    {
                                        //const reaction = collected.first();
                                        switch(reaction.emoji.name)
                                        {
                                            case '❤': 
                                                let embed = new Discord.RichEmbed()
                                                    .setColor("#b8b8b8")
                                                    .setAuthor("Armure en bronze / level 5 minimum")
                                                    .setDescription("Prix : 250\n?Armure en bronze")
                                                    .addField("Armure en fer /level 25 minimum", "Prix: ????\n?Amure en fer")
                                                    .addField("Armure en plate /level 40 minimum", "Prix: ????\n?Armure en plate")
                                                    .addField("Retour au shop", "🔙")
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

                                            case '💙': 
                                                let embed1 = new Discord.RichEmbed()
                                                    .setColor("#b8b8b8")
                                                    .setAuthor("Armure en tissus fin / level 5 minimum")
                                                    .setDescription("Prix : 250\n?Armure en tissus fin")
                                                    .addField("Armure de sorcier traditionnel / level 25 minimum", "Prix: ????\n?Armure de sorcier traditionnel")
                                                    .addField("Armure de sorcier reconnu /level 40 minimum", "Prix: ????\n?Armure de sorcier reconnu")
                                                    .addField("Retour au shop", "🔙")
                                                message.channel.send(embed1).then(async message => 
                                                    { 
                                                        await message.react('🔙')

                                                        message.awaitReactions(filter,{max: 1, time: 3600000,errors:['time']}).then(collected =>
                                                            {
                                                                const reaction = collected.first();

                                                                if(reaction.emoji.name === '🔙')
                                                                {
                                                                    message.delete()
                                                                    //message.channel.bulkDelete(2);
                                                                }
                                                            });
                                                    });
                                            break;
                                            case '🔙':
                                                message.delete();
                                            break;
                                        }
                                    });
                                });
                        break;

                        case '📜':
                          let embed0 = new Discord.RichEmbed()
                            .setColor("#b8b8b8")
                            .setAuthor("Parchemin")
                            .setDescription("Ils sont tous à utilisation unique")
                            .addField("Parchemin de fuite", "📝", true)
                            .addField("Parchemin d'invocation", "📃", true)
                            .addField("?Parchemin de message", "📄", )
                            .addField("Retour au shop", "🔙")
                            message.channel.send(embed0).then(async message => 
                              {
                                  await message.react('📝');
                                  await message.react('📃');
                                  await message.react('📄');
                                  await message.react('🔙');
                          
                                  //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
                                  let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                  collector.on('collect', (reaction, collector) =>
                                  {
                                      //const reaction = collected.first();
                                      switch(reaction.emoji.name)
                                      {
                                          case '📄': 
                                              let embed4 = new Discord.RichEmbed()
                                                  .setColor("#b8b8b8")
                                                  .setAuthor("Parchemin de fuite simple")
                                                  .setDescription("Prix : 60\n?Parchemin de fuite simple")
                                                  .addField("Parchemin de fuite", "Prix: ????\n?Parchemin de fuite")
                                                  .addField("Parchemin de fuite haut", "Prix: ????\n?Parchemin de fuite haut")
                                                  .addField("Retour au shop", "🔙")
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

                                          case '📃': 
                                              let embed1 = new Discord.RichEmbed()
                                                  .setColor("#b8b8b8")
                                                  .setAuthor("Invocation divine")
                                                  .setDescription("Prix : ????\n????")
                                                  .addField("invocation d'ange", "Prix: ????\n????")
                                                  .addField("Retour au shop", "🔙")
                                              message.channel.send(embed1).then(async message => 
                                                  { 
                                                      await message.react('🔙')

                                                      message.awaitReactions(filter,{max: 1, time: 3600000,errors:['time']}).then(collected =>
                                                          {
                                                              const reaction = collected.first();

                                                              if(reaction.emoji.name === '🔙')
                                                              {
                                                                  message.delete()
                                                                  //message.channel.bulkDelete(2);
                                                              }
                                                          });
                                                  });
                                          break;
                                          case '📝': 
                                              let embed2 = new Discord.RichEmbed()
                                                  .setColor("#b8b8b8")
                                                  .setAuthor("Parchemin de message faible")
                                                  .setDescription("Prix : 15\n?Parchemin de message faible")
                                                  .addField("Parchemin de message", "Prix: 50\n?Parchemin de message")
                                                  .addField("Retour au shop", "🔙")
                                              message.channel.send(embed2).then(async message => 
                                                  { 
                                                      await message.react('🔙')

                                                      message.awaitReactions(filter,{max: 1, time: 3600000,errors:['time']}).then(collected =>
                                                          {
                                                              const reaction = collected.first();

                                                              if(reaction.emoji.name === '🔙')
                                                              {
                                                                  message.delete()
                                                                  //message.channel.bulkDelete(2);
                                                              }
                                                          });
                                                  });
                                          break;
                                          case '🔙':
                                              message.delete();
                                          break;
                                      }
                                  });
                              });
                      break;
                      case '💉':
                          let embed2 = new Discord.RichEmbed()
                            .setColor("#b8b8b8")
                            .setAuthor("Liste des potions")
                            .setDescription("Vous ne pouvez pas utiliser une potion et en même temps attaquer")
                            .addField("Potion d'Hp", "🍷", true)
                            .addField("Potion mana", "🍶", true)
                            .addField("Retour au shop", "🔙")
                            message.channel.send(embed2).then(async message => 
                              {
                                  await message.react('🍷');
                                  await message.react('🍶');
                                  await message.react('🔙');
                          
                                  //message.awaitReactions(filter,{max: 1, time: 10000,errors:['time']}).then(collected =>
                                  let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                  collector.on('collect', (reaction, collector) =>
                                  {
                                      //const reaction = collected.first();
                                      switch(reaction.emoji.name)
                                      {
                                          case '🍷': 
                                              let embed4 = new Discord.RichEmbed()
                                                  .setColor("#b8b8b8")
                                                  .setAuthor("Potion d'HP faible")
                                                  .setDescription("Prix : 40")
                                                  .addField("Potion d'HP", "Prix: ????",true)
                                                  .addField("Potion d'HP haute", "Prix: ????",true)
                                                  .addField("Retour au shop", "🔙")
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

                                          case '🍶': 
                                              let embed1 = new Discord.RichEmbed()
                                                  .setColor("#b8b8b8")
                                                  .setAuthor("?Potion de mana faible")
                                                  .setDescription("Prix : 40")
                                                  .addField("Potion de mana", "Prix: ????",true)
                                                  .addField("Potion de mana haute", "Prix: ????",true)
                                                  .addField("Retour au shop", "🔙")
                                              message.channel.send(embed1).then(async message => 
                                                  { 
                                                      await message.react('🔙')

                                                      message.awaitReactions(filter,{max: 1, time: 3600000,errors:['time']}).then(collected =>
                                                          {
                                                              const reaction = collected.first();

                                                              if(reaction.emoji.name === '🔙')
                                                              {
                                                                  message.delete()
                                                                  //message.channel.bulkDelete(2);
                                                              }
                                                          });
                                                  });
                                          break;
                                          case '🔙':
                                              message.delete();
                                          break;
                                      }
                                  });
                              });
                      break;

                      case '📦':
                          let embed4 = new Discord.RichEmbed()
                            .setColor("#b8b8b8")
                            .setAuthor("Liste des potions")
                            .setDescription("Vous ne pouvez pas utiliser une potion et en même temps attaquer")
                            .addField("Herbe", "🍀", true)
                            .addField("Minerais", "💎", true)
                            .addField("Retour au shop", "🔙")
                            message.channel.send(embed4).then(async message => 
                              {
                                  await message.react('🍀');
                                  await message.react('💎');
                                  await message.react('🔙');
                        
                                  let collector = message.createReactionCollector(filter,{time: 3600000,errors:['time']});
                                  collector.on('collect', (reaction, collector) =>
                                  {
                                      switch(reaction.emoji.name)
                                      {
                                          case '🍀': 
                                              let embed4 = new Discord.RichEmbed()
                                                  .setColor("#b8b8b8")
                                                  .setAuthor("Achats de matériaux")
                                                  .addField("Cuivre", "Prix: 3",true)
                                                  .addField("Fer", "Prix: 4",true)
                                                  .addField("ébonite", "Prix: ???",true)
                                                  .addField("Malachite", "Prix: ???",true)
                                                  .addField("Reventes de matériaux", "****")
                                                  .addField("Cuivre", "Prix: 2",true)
                                                  .addField("Fer", "Prix: 3",true)
                                                  .addField("ébonite", "Prix: ???",true)
                                                  .addField("Malachite", "Prix: ???",true)
                                                  .addField("Retour au shop", "🔙")
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

                                          case '💎': 
                                              let embed1 = new Discord.RichEmbed()
                                                  .setColor("#b8b8b8")
                                                  .setAuthor("Achats de matériaux")
                                                  .addField("Lys", "Prix: 3",true)
                                                  .addField("Obscurcine", "Prix: 4",true)
                                                  .addField("Rose des vents", "Prix: ???",true)
                                                  .addField("Reventes de matériaux", "****")
                                                  .addField("Lys", "Prix: 2",true)
                                                  .addField("Obscurcine", "Prix: 3",true)
                                                  .addField("Rose des vents", "Prix: ???",true)
                                                  .addField("Retour au shop", "🔙")
                                              message.channel.send(embed1).then(async message => 
                                                  { 
                                                      await message.react('🔙')

                                                      message.awaitReactions(filter,{max: 1, time: 3600000,errors:['time']}).then(collected =>
                                                          {
                                                              const reaction = collected.first();

                                                              if(reaction.emoji.name === '🔙')
                                                              {
                                                                  message.delete()
                                                                  //message.channel.bulkDelete(2);
                                                              }
                                                          });
                                                  });
                                          break;
                                          case '🔙':
                                              message.delete();
                                          break;
                                      }
                                  });
                              });
                      break;
                    }  
                });
        });
}