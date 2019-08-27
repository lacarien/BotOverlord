if(message.content === prefix + "Analyse de CitrusTetra")
{

        if(roll >= 0 && roll <= 4)
        {
            //Garde impérial
                    if(roll2 >= 0 && roll2 <= 4 )
                    {
                        let EscouadeImperialCitrusClose = new Discord.RichEmbed()
                            .setColor("#049432")
                            .setAuthor("Votre radar vous indique un groupe de  forme de vie à proximité vous avez à peine le temps de réagir que les formes de vie vous tombe dessus")
                            .setDescription("Une escouade de garde impériaux vous pointe de leurs armes. Si vous êtes humain ou métamporhe, ils baisseront leurs armes sauf si vous êtes recherché (cependant les métamorphe ne seront pas apprécié). Si vous n'êtes pas humain ou métamorphe ils vous attaquent immédiatement (Faite attention à l'ordre d'attaque)")
                            .addField("**Nombre**"," 3 gardes + 1 officier")
                            .addField("**Point de vie garde**","3", true)
                            .addField("**Point de vie officier**","5", true)
                            .addField("**Attaque garde**","?G-ImperialAttaque", true)
                            .addField("**Attaque officier**","?O-ImpérialAttaque",true)
                            .addField("**Capacité Garde**" , "-1 dégats subit", true)
                            .addField("**Capacité officier**","-1 dégat subit + initiative",true)
                            .addField("**Récompense mort**", "?Mort EscouadeImpérial4")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610545586172592138/dc43654222c3ac87d997300caaffbb8e.jpg")
                        message.channel.send(EscouadeImperialCitrusClose)
                    }else if (roll2 >= 5 && roll2 <= 49)
                    {
                        let EscouadeImperialCitrus = new Discord.RichEmbed()
                            .setColor("#00bf0d")
                            .setAuthor("Votre radar vous indique un groupe de 3 forme de vie à proximité. Les formes de vie sont encore loin pour vous remarquez")
                            .setDescription("Si vous décidez d'aller à leurs rencontres faites que ça soit discrétement ou non (?Rencontre forme vie 3G) sinon rien ne se passe")
                        message.channel.send(EscouadeImperialCitrus)
                    }else if(roll2 >= 50 && roll2 <= 100)
                    {
                        let EscouadeImperialCitrus2 = new Discord.RichEmbed()
                            .setColor("#049432")
                            .setAuthor("Votre radar vous indique un groupe de 2 forme de vie à proximité vous avez à peine le temps de réagir que les formes de vie vous tombe dessus")
                            .setDescription("2 garde impériaux vous pointe de leurs armes. Si vous êtes humain ou métamporhe, ils baisseront leurs armes sauf si vous êtes recherché (cependant les métamorphe ne seront pas apprécié). Si vous n'êtes pas humain ou métamorphe ils vous attaquent immédiatement (Faite attention à l'ordre d'attaque)")
                            .addField("**Nombre**"," 2 gardes", true)
                            .addField("**Point de vie**","3", true)
                            .addField("**Attaque**","?G-ImperialAttaque", true)
                            .addField("**Capacité Garde**" , "-1 dégats subit", true)
                            .addField("**Récompense mort**", "?Mort EscouadeImpérial2")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610545586172592138/dc43654222c3ac87d997300caaffbb8e.jpg")
                        message.channel.send(EscouadeImperialCitrus2)
                    }

        }else if (roll >= 5 && roll <= 9)
        {
            //Garde Istaris
                    if(roll2 >= 0 && roll2 <= 4 )
                    {
                        let EscouadeIstarisCitrusClose = new Discord.RichEmbed()
                            .setColor("#7003a1")
                            .setAuthor("Votre radar vous indique un groupe de 4 forme de vie à proximité vous avez à peine le temps de réagir que les formes de vie vous tombe dessus")
                            .setDescription("Une escouade de garde istaris vous pointe de leurs armes. Si vous êtes autre qu'humain ils baisseront leurs armes, sauf si vous êtes recherché, sinon si vous êtes humains ils vous attaquent immédiatement (attention à l'odre d'attaque)")
                            .addField("**Nombre**"," 3 gardes + 1 officier")
                            .addField("**Point de vie garde**","5", true)
                            .addField("**Point de vie officier**","6", true)
                            .addField("**Attaque garde**","?G-IstarisAttaque", true)
                            .addField("**Attaque officier**","?O-IstarisAttaque",true)
                            .addField("**Capacité Garde**" , "initiative", true)
                            .addField("**Capacité officier**","?esquive + initiative",true)
                            .addField("**Récompense mort**", "?Mort EscouadeIstaris4")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611253613255327754/4d5f76bf5d6e4a5f345e2ac272673891.jpg")
                        message.channel.send(EscouadeIstarisCitrusClose)
                    }else if (roll2 >= 5 && roll2 <= 49)
                    {
                        let EscouadeIstarisCitrus = new Discord.RichEmbed()
                            .setColor("#a206fb")
                            .setAuthor("Votre radar vous indique un groupe de 3 forme de vie à proximité. Les formes de vie sont encore loin pour vous remarquez")
                            .setDescription("Si vous décidez d'aller à leurs rencontres, que ça soit discrétement ou non, faite (?Rencontre forme vie 3I) sinon rien ne se passe")
                        message.channel.send(EscouadeIstarisCitrus)
                    }else if(roll2 >= 50 && roll2 <= 100)
                    {
                        let EscouadeIstarisCitrusClose2 = new Discord.RichEmbed()
                            .setColor("#7003a1")
                            .setAuthor("Votre radar vous indique un groupe de 2 forme de vie à proximité vous avez à peine le temps de réagir que les formes de vie vous tombe dessus")
                            .setDescription("2 garde istaris vous pointe de leurs armes. Si vous êtes autre qu'humain ils baisseront leurs armes, sauf si vous êtes recherché, sinon si vous êtes humains ils vous attaquent immédiatement (attention à l'odre d'attaque)")
                            .addField("**Nombre**"," 2 gardes", true)
                            .addField("**Point de vie garde**","5", true)
                            .addField("**Attaque garde**","?G-IstarisAttaque", true)
                            .addField("**Capacité Garde**" , "initiative", true)
                            .addField("**Récompense mort**", "?Mort EscouadeIstaris2",true)
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611253613255327754/4d5f76bf5d6e4a5f345e2ac272673891.jpg")
                        message.channel.send(EscouadeIstarisCitrusClose2)
                    }
        }else if(roll >= 10 && roll <= 14)
        {
            //Garde androide
                    if(roll2 >= 0 && roll2 <= 4 )
                    {
                        let EscouadeAndroideCitrusClose = new Discord.RichEmbed()
                            .setColor("#0c06d8")
                            .setAuthor("Votre radar vous indique un groupe de 4 forme de vie non organique à proximité vous avez à peine le temps de réagir que les formes de vie vous tombe dessus")
                            .setDescription("Une escouade de garde androïde vous pointe de leurs armes. Si vous êtes autre qu'humain ils baisseront leurs armes, sauf si vous êtes recherché, sinon si vous êtes humains ils vous attaquent immédiatement (attention à l'odre d'attaque)")
                            .addField("**Nombre**"," 3 gardes + 1 officier")
                            .addField("**Point de vie garde**","2", true)
                            .addField("**Point de vie officier**","4", true)
                            .addField("**Attaque garde**","?G-AndroideAttaque", true)
                            .addField("**Attaque officier**","?O-AndroideAttaque",true)
                            .addField("**Capacité Garde**" , "-2 dégat subis", true)
                            .addField("**Capacité officier**","-2 dégat subis",true)
                            .addField("**Récompense mort**", "?Mort EscouadeAndroide4")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610547291308163102/valerian___ktron_by_benmauro_dbiwmjw-pre.png")
                        message.channel.send(EscouadeAndroideCitrusClose)
                    }else if (roll2 >= 5 && roll2 <= 49)
                    {
                        let EscouadeAndroideCitrus = new Discord.RichEmbed()
                            .setColor("#0c06d8")
                            .setAuthor("Votre radar vous indique un groupe de 3 forme de vie non organique à proximité. Les formes de vie sont encore loin pour vous remarquez")
                            .setDescription("Si vous décidez d'aller à leurs rencontres, que ça soit discrétement ou non, faite (?Rencontre forme vie 3A) sinon rien ne se passe")
                        message.channel.send(EscouadeAndroideCitrus)
                    }else if(roll2 >= 50 && roll2 <= 100)
                    {
                        let EscouadeAndroideCitrusClose2 = new Discord.RichEmbed()
                            .setColor("#0c06d8")
                            .setAuthor("Votre radar vous indique un groupe de 2 forme de vie non organique à proximité vous avez à peine le temps de réagir que les formes de vie vous tombe dessus")
                            .setDescription("2 garde androide vous pointe de leurs armes. Si vous êtes autre qu'humain ils baisseront leurs armes, sauf si vous êtes recherché, sinon si vous êtes humains ils vous attaquent immédiatement (attention à l'odre d'attaque)")
                            .addField("**Nombre**"," 2 gardes K-tron", true)
                            .addField("**Point de vie garde**","2", true)
                            .addField("**Attaque garde**","?G-AndroideAttaque", true)
                            .addField("**Capacité Garde**" , "-2 dégat subit", true)
                            .addField("**Récompense mort**", "?Mort EscouadeAndroide2",true)
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610547291308163102/valerian___ktron_by_benmauro_dbiwmjw-pre.png")
                        message.channel.send(EscouadeAndroideCitrusClose2)
                    }
                    
        }else if (roll >= 15 && roll <= 29)
        {
            //Monstre ailé citrus
                    if(roll2 >= 0 && roll2 <= 29)
                    {
                        let MonstreCitrus1Close = new Discord.RichEmbed()
                            .setColor("#bf0000")
                            .setAuthor("Votre radar se met à biper signalant une présence qui se dirige vers vous ! Vous avez à peine le temps de comprendre ce qu'il ce passe que la créature est sur vous ")
                            .addField("**Nombre**","1")
                            .addField("**Point de vie**","7",true)
                            .addField("**Attaque**","?G-MonstreCitrus",true)
                            .addField("**Récompense mort**","?Mort CréatureCitrus2")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610241283776315404/b9487ecb93d3b3e5256e05d0a14f7cd2.jpg")
                        message.channel.send(MonstreCitrus1Close)
                    }else if(roll2 >= 30 && roll2 <= 100)
                    {
                        let MonstreCitrus1 = new Discord.RichEmbed()
                            .setColor("#bf0000")
                            .setAuthor("Votre radar vous indique un groupe de une forme de vie à proximité. La forme de vie est encore loin")
                            .setDescription("Si vous décidez d'aller à ça rencontre, que cela soit discrétement ou non, faite (?Rencontre forme vie M2) sinon rien ne se passe")
                        message.channel.send(MonstreCitrus1)
                    }

        }else if (roll >= 30 && roll <= 59)
        {
                    if(roll2 == 0)
                    {
                        let MonstreCitrusHorde = new Discord.RichEmbed()
                            .setColor("#000000")
                            .setAuthor("Votre radar se met à s'alarmer et signale une horde qui se dirige droit vers vous ! Vous avez à peine le temps de comprendre ce qu'il ce passe que la horde est sur vous ")
                            .addField("**Nombre**","5")
                            .addField("**Point de vie**","3",true)
                            .addField("**Attaque**","?M-MonstreCitrus",true)
                            .addField("**Récompense mort**","?Mort HordeCréatureCitrus")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610241286745751576/monstre.jpg")
                        message.channel.send(MonstreCitrusHorde)
                    }else if(roll2 >= 1 && roll2 <= 15)
                    {
                        let Monstre2Citrus3 = new Discord.RichEmbed()
                            .setColor("#9c9c9c")
                            .setAuthor("Votre radar indique 3 formes de vie qui se dirige droit vers vous ! Vous avez à peine le temps de comprendre ce qu'il ce passe que les créatures sont sur vous ")
                            .addField("**Nombre**","3")
                            .addField("**Point de vie**","3",true)
                            .addField("**Attaque**","?M-MonstreCitrus",true)
                            .addField("**Récompense mort**","?Mort CréatureCitrus (à faire 3 fois)")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610241286745751576/monstre.jpg")
                        message.channel.send(Monstre2Citrus3)
                    }else if(roll2 >= 16 && roll2 <= 40)
                    {
                        let Monstre2Citrus2 = new Discord.RichEmbed()
                            .setColor("#9c9c9c")
                            .setAuthor("Votre radar indique 2 formes de vie qui se dirige droit vers vous ! Vous avez à peine le temps de comprendre ce qu'il ce passe que les créatures sont sur vous ")
                            .addField("**Nombre**","2")
                            .addField("**Point de vie**","3",true)
                            .addField("**Attaque**","?M-MonstreCitrus",true)
                            .addField("**Récompense mort**","?Mort CréatureCitrus (à faire 2 fois)")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610241286745751576/monstre.jpg")
                        message.channel.send(Monstre2Citrus2)
                    }else if(roll2 >= 41 && roll2 <= 100)
                    {
                        let Monstre2Citrus1 = new Discord.RichEmbed()
                            .setColor("#9c9c9c")
                            .setAuthor("Votre radar indique 1 forme de vie qui se dirige droit vers vous ! Vous avez à peine le temps de comprendre ce qu'il ce passe que la créature est sur vous ")
                            .addField("**Nombre**","1")
                            .addField("**Point de vie**","3",true)
                            .addField("**Attaque**","?M-MonstreCitrus",true)
                            .addField("**Récompense mort**","?Mort CréatureCitrus")
                            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610241286745751576/monstre.jpg")
                        message.channel.send(Monstre2Citrus1)
                    }
        }else if(roll >= 60 && roll <= 100)
        {
            let RASCitrus = new Discord.RichEmbed()
                .setColor("#ffffff")
                .setDescription("*** Aucune forme de vie à proximité selon votre radar. La zone est clean ***")
            message.channel.send(RASCitrus)
        }
}








//Garde impérial 
if(message.content === prefix + "Rencontre forme vie 3G")
{
    if(roll >= 0 && roll <= 64)
    {
        let EscouadeImperial = new Discord.RichEmbed()
            .setColor("#049432")
            .setAuthor("Vous rencontrez une escouade de 3 gardes impériaux entrain de fouiller la zone.")
            .setDescription("Si vous êtes arrivez discrètement alors l'escouade ne vous a pas remarqué. Sinon ils vous pointent de leurs fusils vous demandant ce que vous faites la, seulement si vous êtes humain ou métamporphe sinon ils vous tirent dessus (en fonction de l'ordre d'attaque)")
            .addField("Nombre de garde", "3",true)
            .addField("Point de vie"," 4 point de vie",true)
            .addField("**Attaque**","?G-ImperialAttaque", true)
            .addField("**Capacité Garde**" , "-1 dégats subit", true)
            .addField("**Récompense mort**", "?Mort EscouadeImpérial3")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610545586172592138/dc43654222c3ac87d997300caaffbb8e.jpg")
        message.channel.send(EscouadeImperial)
    }else if(roll >= 65 && roll <= 100)
    {
        let EscouadeImperial = new Discord.RichEmbed()
            .setColor("#049432")
            .setAuthor("Vous rencontrez une escouade de 3 gardes impériaux entrain de fouiller la zone.")
            .setDescription("Que vous soyez arrivé discrètement ou non les gardes vous remarquent et vous pointent de leurs fusils vous demandant ce que vous faites la, seulement si vous êtes humain ou métamporphe sinon ils vous tirent dessus (en fonction de l'ordre d'attaque)")
            .addField("Nombre de garde", "3",true)
            .addField("Point de vie"," 4 point de vie",true)
            .addField("**Attaque**","?G-ImperialAttaque", true)
            .addField("**Capacité Garde**" , "-1 dégats subit", true)
            .addField("**Récompense mort**", "?Mort EscouadeImpérial3")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610545586172592138/dc43654222c3ac87d997300caaffbb8e.jpg")
        message.channel.send(EscouadeImperial)
    }
}





//Garde istaris

if(message.content === prefix + "Rencontre forme vie 3I")
{
    if(roll >= 0 && roll <= 64)
    {
        let EscouadeIstaris = new Discord.RichEmbed()
            .setColor("#7003a1")
            .setAuthor("Vous rencontrez une escouade de 3 gardes istaris entrain de fouiller la zone.")
            .setDescription("Si vous êtes arrivez discrètement alors l'escouade ne vous a pas remarqué. Sinon ils vous pointent de leurs fusils vous demandant ce que vous faites la. Seulement si vous êtes autre qu'humain sinon ils vous tirent dessus (en fonction de l'ordre d'attaque)")
            .addField("Nombre de garde", "3",true)
            .addField("**Point de vie garde**","5", true)
            .addField("**Attaque garde**","?G-IstarisAttaque", true)
            .addField("**Capacité Garde**" , "initiative", true)
            .addField("**Récompense mort**", "?Mort EscouadeIstaris3")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611253613255327754/4d5f76bf5d6e4a5f345e2ac272673891.jpg")
        message.channel.send(EscouadeIstaris)
    }else if(roll >= 65 && roll <= 100)
    {
        let EscouadeImperial = new Discord.RichEmbed()
        .setColor("#7003a1")
        .setAuthor("Vous rencontrez une escouade de 3 gardes istaris entrain de fouiller la zone.")
        .setDescription("Que vous soyez arrivé discrètement ou non l'escouade vous a remarqué et vous pointent de leurs fusils vous demandant ce que vous faites la. Seulement si vous êtes autre qu'humain sinon ils vous tirent dessus (en fonction de l'ordre d'attaque)")
        .addField("Nombre de garde", "3",true)
        .addField("**Point de vie garde**","5", true)
        .addField("**Attaque garde**","?G-IstarisAttaque", true)
        .addField("**Capacité Garde**" , "initiative", true)
        .addField("**Récompense mort**", "?Mort EscouadeIstaris2",true)
        .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611253613255327754/4d5f76bf5d6e4a5f345e2ac272673891.jpg")
        message.channel.send(EscouadeImperial)
    }
}




//Garde androide


if(message.content === prefix + "Rencontre forme vie 3A")
{
    
    let EscouadeAndroide = new Discord.RichEmbed()
        .setColor("#0c06d8")
        .setAuthor("Vous rencontrez une escouade de 3 gardes istaris entrain de fouiller la zone.")
        .setDescription("Que vous soyez arrivé discrètement ou non l'escouade vous a remarqué et vous pointent de leurs fusils, faut pas déconner avec les K-tron. Les k-tron vous visent avec leurs fusils et vous scannent sans un mot. Si vous êtes autre qu'humain vous êtes chanceux, les k-tron repartent sans un mot. Sinon... Ils ouvrent le feu (en fonction de l'ordre d'attaque)")
        .addField("**Nombre**"," 2 gardes K-tron", true)
        .addField("**Point de vie garde**","2", true)
        .addField("**Attaque garde**","?G-AndroideAttaque", true)
        .addField("**Capacité Garde**" , "-2 dégat subit", true)
        .addField("**Récompense mort**", "?Mort EscouadeAndroide2",true)
        .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610547291308163102/valerian___ktron_by_benmauro_dbiwmjw-pre.png")
    message.channel.send(EscouadeAndroide)
}





//Monstre Citrus 
if(message.content === prefix + "Rencontre forme vie M2")
{
    if(roll >= 0 && roll <= 44)
    {
        let Monstre1Citrus1 = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Vous rencontrez une créature ailé entrain de dévorer un animal.")
            .setDescription("Si vous êtes arrivez discrètement alors la créature ne vous a pas remarqué, sinon elle relève la tête et fonce sur vous")
            .addField("**Nombre**","1")
            .addField("**Point de vie**","7",true)
            .addField("**Attaque**","?G-MonstreCitrus",true)
            .addField("**Récompense mort**","?Mort CréatureCitrus2")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610241283776315404/b9487ecb93d3b3e5256e05d0a14f7cd2.jpg")
        message.channel.send(Monstre1Citrus1)
    }else if(roll >= 45 && roll <= 100)
    {
        let Monstre1Citrus1 = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Vous rencontrez une créature ailé entrain de dévorer un animal.")
            .setDescription("la créature relève soudainement la tête et fonce sur vous peut importe que vous soyez arrivez discrétement ou non")
            .addField("**Nombre**","1")
            .addField("**Point de vie**","7",true)
            .addField("**Attaque**","?G-MonstreCitrus",true)
            .addField("**Récompense mort**","?Mort CréatureCitrus2")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610241283776315404/b9487ecb93d3b3e5256e05d0a14f7cd2.jpg")
        message.channel.send(Monstre1Citrus1)
    }
}