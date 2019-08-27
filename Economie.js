//Shop

if(message.content === prefix + "Shop")
{
    let Shop = new Discord.RichEmbed()
        .setAuthor("Une fois dans la boutique un vendeur viens vous rejoindre")
        .setDescription("`Bonjour, nous avons une large gamme de produit, que désirez vous ? `")
        .addField("Armement à distance", "?Shop-ArmementDistance",true)
        .addField("Armement mêlée", "?Shop-ArmementClose",true)
        .addField("Armure intégrale", "?Shop-Armure",true)
        .addField("Utilitaire","?Shop-Utilitaire",true)
        .addField("Vaisseau","?Shop-Vaisseau",true)
        .setImage("https://cdn.discordapp.com/attachments/610241216738492448/614470962188124210/jeremie-valerius-cubby-concept2.png")
    message.channel.send(Shop)

}

if(message.content === prefix + "Shop-ArmementDistance")
{
    let Armement1 = new Discord.RichEmbed()
        .addField("**__Fusil laser__**", "```Les fusils laser sont des armes qui ont le parfait équillibre entre la précision et les dégats``` ")
        .addField("Fusil laser MK-1","**Dps :** 1.8 ||  **prix :** 350 Crédit Galactique ",true)
        .addField("Fusil laser MK-2","**Dps :** 2   ||  **prix :** 1000 Crédit Galactique ",true)
        .addField("Fusil laser MK-3","**Dps :** 2.3 ||  **prix :** 2600 Crédit Galactique ",true)
        .addField("Fusil laser MK-4","**Dps :** 2.7 ||  **prix :** 5000 Crédit Galactique ",true)
        .addField("**__Fusil plasma__**", "```Les fusils plasma inflige de lourd dégats mais la précision laisse à désirer```")
        .addField("Fusil plasmal MK-1","**Dps :** 1.5  ||  **Prix :** 400 Crédit Galactique ",true)
        .addField("Fusil plasmal MK-1","**Dps :** 1.9  ||  **Prix :** 1200 Crédit Galactique ",true)
        .addField("Fusil plasmal MK-1","**Dps :** 2.2  ||  **Prix :** 3000 Crédit Galactique ",true)
        .addField("Fusil plasmal MK-1","**Dps :** 2.4  ||  **Prix :** 6500 Crédit Galactique ",true)
        .addField("**__Fusil disruptif laser__**", "```Les fusils disruptif sont des fusils à pompes qui inflige de lourd dégat cependant la précision le laisse à désiré ``` ")
        .addField("Disruptif MK-1","**Dps :** 1.4  ||  **prix :** 400 Crédit Galactique ",true)
        .addField("Disruptif MK-2","**Dps :** 1.6  ||  **prix :** 1100 Crédit Galactique ",true)
        .addField("Disruptif MK-3","**Dps :** 1.9  ||  **prix :** 2800 Crédit Galactique ",true)
        .addField("Disruptif MK-4","**Dps :** 2.5  ||  **prix :** 5500 Crédit Galactique ",true)
        .addField("**__Fusil sniper__**", "```Les fusils sniper inflige des dégats considérable avec une bonne précision cependant inutilisable sur des courtes distances```")
        .addField("Fusil Gauss MK-1","**Dps :** 2  ||  **Prix :** 600 Crédit Galactique ",true)
        .addField("Fusil Gauss MK-2","**Dps :** 2.6  ||  **Prix :** 1850 Crédit Galactique ",true)
        .addField("Fusil Gauss MK-3","**Dps :** 3.2  ||  **Prix :** 4500 Crédit Galactique ",true)
        .addField("Fusil Gauss MK-4","**Dps :** 3.8  ||  **Prix :** 10000 Crédit Galactique ",true)
        .addField("**__Pistolet laser__**", "```Les pistolets laser sont des armes de point très efficaces dans les combats à distance réduite```")
        .addField("Pistolet MK-1","**Dps :** 1.1  ||  **Prix :** 150 Crédit Galactique ",true)
        .addField("Pistolet MK-2","**Dps :** 1.5  ||  **Prix :** 650 Crédit Galactique ",true)
        .addField("Pistolet MK-3","**Dps :** 1.6  ||  **Prix :** 2000 Crédit Galactique ",true)
        .addField("Pistolet MK-4","**Dps :** 1.9  ||  **Prix :** 4200 Crédit Galactique ",true)
    message.channel.send(Armement1)

}


if(message.content === prefix + "Shop-ArmementMêlée")
{
    let Armement2 = new Discord.RichEmbed()
        .addField("**__épée énergétique__**", "```Les épée énergétique sont les armes les plus couramment utilisé dans les combatsà distance réduite, elle ont un équillibre parfait entre dommage et maniement``` ")
        .addField("épée MK-1","**Dps :** 1.7 ||  **prix :** 350 Crédit Galactique ",true)
        .addField("épée MK-2","**Dps :** 1.9   ||  **prix :** 1000 Crédit Galactique ",true)
        .addField("épée MK-3","**Dps :** 2.3 ||  **prix :** 2600 Crédit Galactique ",true)
        .addField("épée MK-4","**Dps :** 2.8 ||  **prix :** 5000 Crédit Galactique ",true)
        .addField("**__Hache__**", "```Les haches sont plus difficile à manier mais sont conçues pour faire le plus de dommage possible et traverser le blindage```")
        .addField("Hache plasmal MK-1","**Dps :** 1.8  ||  **Prix :** 550 Crédit Galactique ",true)
        .addField("Hache plasmal MK-1","**Dps :** 1.9  ||  **Prix :** 1400 Crédit Galactique ",true)
        .addField("Hache plasmal MK-1","**Dps :** 2.3  ||  **Prix :** 3200 Crédit Galactique ",true)
        .addField("Hache plasmal MK-1","**Dps :** 2.7  ||  **Prix :** 6800 Crédit Galactique ",true)
        .addField("**__Lance__**", "```Les lances sont très difficile à manier mais elle sont extrémement meurtrière ``` ")
        .addField("Lance MK-1","**Dps :** 1.7  ||  **prix :** 550 Crédit Galactique ",true)
        .addField("Lance MK-2","**Dps :** 1.7  ||  **prix :** 1400 Crédit Galactique ",true)
        .addField("Lance MK-3","**Dps :** 2.2  ||  **prix :** 3400 Crédit Galactique ",true)
        .addField("Lance MK-4","**Dps :** 2.6  ||  **prix :** 6900 Crédit Galactique ",true)
        .addField("**__Couteau__**", "```Le couteau est une arme indispensable pour la précision ```")
        .addField("Couteau Gauss MK-1","**Dps :** 1.3  ||  **Prix :** 150 Crédit Galactique ",true)
        .addField("Couteau Gauss MK-2","**Dps :** 1.5  ||  **Prix :** 650 Crédit Galactique ",true)
        .addField("Couteau Gauss MK-3","**Dps :** 1.8  ||  **Prix :** 2000 Crédit Galactique ",true)
        .addField("Couteau Gauss MK-4","**Dps :** 2    ||  **Prix :** 4200 Crédit Galactique ",true)
    message.channel.send(Armement2)

}

if(message.content === prefix + "Shop-Armure")
{
    let ArmureShop = new Discord.RichEmbed()
        .addField("**__Armure Lourde__**", "```Les armures lourdes offrent une résistance sur toute forme de dommage```")
        .addField("Armure Lourde Mk-1", "**Dégats :** -1 || ** Prix : ** 1000 ",true)
        .addField("Armure Lourde Mk-2", "**Dégats :** -1 + 2Hp || **Prix :** 8500 ",true)
        .addField("Armure Lourde Mk-3", "**Dégats :** -2 + 2Hp || **Prix :** 15000 ",true)
        .addField("Armure Lourde Mk-4", "**Dégats :** -2 + 3Hp || **Prix :** 20000 ",true)
        .addField("**__Armure D'agilité__**", "```Les armures d'agilité sont fait pour assurer de prendre l'avantage dans les combats et augmenter les chances d'esquive```")
        .addField("Armure Agilité MK-1", "**Capacité :** ?Esquive            || **Prix :** 850",true)
        .addField("Armure Agilité MK-2", "**Capacité :** ?Esquive amélioré   || **Prix :** 9500",true)
        .addField("Armure Agilité MK-3", "**Capacité :** ?Esquive ultra      || **Prix :** 16500",true)
        .addField("Armure Agilité MK-4", "**Capacité :** ?Esquive ultra+     || **Prix :** 22500",true)
        .addField("**__Implant d'Armure__**", "```Les implants d'armure peuvent se rajouter à une armure afin de l'améliorer```")
        .addField("Implant de survie","En cas de décés réaparition dans l'hopital de votre zone natale  || **Prix :** 5600")
    message.channel.send(ArmureShop)

}

if(message.content === prefix + "Shop-Utilitaire")
{
    let UtilitaireShop = new Discord.RichEmbed()
        .addField("Medikit d'urgence", "Soigne une personne et la ramène à l'état égratignure, cependant les malus d'étât reste || **Prix :** 100 Crédit")
        .addField("Grenade plasma", "inflige de gros dégats de zone || **Prix :** 250 crédit")
    message.channel.send(UtilitaireShop)
}


//Récompense mort monstre

//Garde impérial 

if(message.content === prefix + "Mort EscouadeImpérial2")
{
    ArgentMinimum = 70;
    ArgentMaximum = 85;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let RecompenseImpérial1 = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("Vous avez défait l'escouade impérial.")
        .setDescription("Sur les cadavres frais des 2 gardes vous trouvez :")
        .addField("Crédit galactique", Credit)
    message.channel.send(RecompenseImpérial1)
}

if(message.content === prefix + "Mort EscouadeImpérial3")
{
    ArgentMinimum = 90;
    ArgentMaximum = 110;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let RecompenseImpérial2 = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("Vous avez défait l'escouade impérial.")
        .setDescription("Sur les cadavres frais des gardes vous trouvez :")
        .addField("Crédit galactique", Credit)
    message.channel.send(RecompenseImpérial2)
}

if(message.content === prefix + "Mort EscouadeImpérial4")
{
    ArgentMinimum = 180;
    ArgentMaximum = 210;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    if(roll == 0)
    {
        let RecompenseImpérial = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade impérial.")
            .setDescription("Sur les cadavres frais des gardes vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","Une armure Mk-2 de votre choix",true)
        message.channel.send(RecompenseImpérial)
    }else if(roll >= 1 && roll <= 4)
    {
        let RecompenseImpérial = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade impérial.")
            .setDescription("Sur les cadavres frais des gardes vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","Un médikit d'urgence || Une grenade à plasma",true)
        message.channel.send(RecompenseImpérial)
    }else if(roll >= 5 && roll <= 14)
    {
        let RecompenseImpérial = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade impérial.")
            .setDescription("Sur les cadavres frais des gardes vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","Un médikit d'urgence",true)
        message.channel.send(RecompenseImpérial)
    }else if(roll >= 15 && roll <= 100)
    {
        let RecompenseImpérial = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade impérial.")
            .setDescription("Sur les cadavres frais des gardes vous trouvez :")
            .addField("Crédit galactique", Credit)
        message.channel.send(RecompenseImpérial)
    }
}

//Garde Istaris

if(message.content === prefix + "Mort EscouadeIstaris2")
{
    ArgentMinimum = 60;
    ArgentMaximum = 80;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let Recompense = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("Vous avez défait l'escouade Istaris.")
        .setDescription("Sur les cadavres des gardes istaris vous trouvez :")
        .addField("Crédit galactique", Credit)
    message.channel.send(Recompense)
}

if(message.content === prefix + "Mort EscouadeIstaris3")
{
    ArgentMinimum = 80;
    ArgentMaximum = 100;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let Recompense = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("Vous avez défait l'escouade Istaris.")
        .setDescription("Sur les cadavres des gardes Istaris vous trouvez :")
        .addField("Crédit galactique", Credit)
    message.channel.send(Recompense)
}



if(message.content === prefix + "Mort EscouadeIstaris4")
{
    ArgentMinimum = 220;
    ArgentMaximum = 240;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    if(roll == 0)
    {
        let Recompense = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade istaris.")
            .setDescription("Sur les cadavres frais des gardes Istaris vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","Une arme de mêlée Mk-2 de votre choix",true)
        message.channel.send(Recompense)
    }else if(roll >= 1 && roll <= 4)
    {
        let Recompense = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade istaris.")
            .setDescription("Sur les cadavres frais des gardes istaris vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","2 médikit d'urgence",true)
        message.channel.send(Recompense)
    }else if(roll >= 5 && roll <= 14)
    {
        let Recompense = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade istaris.")
            .setDescription("Sur les cadavres frais des gardes istaris vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","Un médikit d'urgence",true)
        message.channel.send(Recompense)
    }else if(roll >= 15 && roll <= 100)
    {
        let Recompense = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade istaris.")
            .setDescription("Sur les cadavres frais des gardes istaris vous trouvez :")
            .addField("Crédit galactique", Credit)
        message.channel.send(Recompense)
    }
}

//Récompense garde androide

if(message.content === prefix + "Mort EscouadeAndroide2")
{
    ArgentMinimum = 60;
    ArgentMaximum = 80;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let Recompense = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("Vous avez défait l'escouade de K-tron.")
        .setDescription("Sur les cadavres des gardes fumant des K-tron vous trouvez :")
        .addField("Crédit galactique", Credit)
    message.channel.send(Recompense)
}

if(message.content === prefix + "Mort EscouadeAndroide3")
{
    ArgentMinimum = 100;
    ArgentMaximum = 120;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let Recompense = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("Vous avez défait l'escouade de K-tron.")
        .setDescription("Sur les cadavres des gardes k-Tron vous trouvez :")
        .addField("Crédit galactique", Credit)
    message.channel.send(Recompense)
}



if(message.content === prefix + "Mort EscouadeAndroide4")
{
    ArgentMinimum = 240;
    ArgentMaximum = 260;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    if(roll == 0)
    {
        let Recompense = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade de k-tron.")
            .setDescription("Sur les cadavres fumant des gardes K-tron vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","Une arme distance Mk-2 de votre choix",true)
        message.channel.send(Recompense)
    }else if(roll >= 1 && roll <= 4)
    {
        let Recompense = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade de k-tron.")
            .setDescription("Sur les cadavres fumant des gardes K-tron vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","2 Grenade plasma",true)
        message.channel.send(Recompense)
    }else if(roll >= 5 && roll <= 14)
    {
        let Recompense = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade de K-tron.")
            .setDescription("Sur les cadavres fumant des gardes k-tron vous trouvez :")
            .addField("Crédit galactique", Credit,true)
            .addField("Objet","Une grenade plasma",true)
        message.channel.send(Recompense)
    }else if(roll >= 15 && roll <= 100)
    {
        let Recompense = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Vous avez défait l'escouade de k-tron.")
            .setDescription("Sur les cadavres fumant des gardes k-tron vous trouvez :")
            .addField("Crédit galactique", Credit)
        message.channel.send(Recompense)
    }
}




//Créature Citrus

if(message.content === prefix + "Mort CréatureCitrus2")
{
    ArgentMinimum = 60;
    ArgentMaximum = 80;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let Recompense = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("La créature finit par s'éffondrer après avoir poussé un dernier cris de rage")
        .setDescription("Dans le ventre de la créature vous trouvez une bourse de Crédit galactique surement qu'un pauvre malheureux fut sont dernier repas")
        .addField("Crédit galactique", Credit)
    message.channel.send(Recompense)
}

if(message.content === prefix + "Mort CréatureCitrus")
{
    ArgentMinimum = 30;
    ArgentMaximum = 55;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let Recompense = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("La créature finit par s'éffondrer après avoir poussé un dernier cris de rage")
        .setDescription("Dans le ventre de la créature vous trouvez une bourse de Crédit galactique")
        .addField("Crédit galactique", Credit)
    message.channel.send(Recompense)
}


if(message.content === prefix + "Mort HordeCréatureCitrus")
{
    ArgentMinimum = 180;
    ArgentMaximum = 230;
    Credit = Math.floor(Math.random() * (ArgentMaximum - ArgentMinimum + 1)  + ArgentMinimum);

    let Recompense = new Discord.RichEmbed()
        .setColor("#00bf0d")
        .setAuthor("La dernière créature de la horde finit par succomber, vous avez réussis à survivre !")
        .setDescription("Après avoir fouillé toute les créatures vous trouvez :")
        .addField("Crédit galactique", Credit,true)
        .addField("Objet","Un médikit D'urgence",true)
    message.channel.send(Recompense)
}