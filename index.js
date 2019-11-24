const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.TOKENS);


var préfix = "?";
 var fs = require("fs")
 var vm = require('vm')

client.on("message",message =>{
     eval(fs.readFileSync(__dirname + '/combat.js')+'');
   /* eval(fs.readFileSync(__dirname + '/watson.js')+'');
    eval(fs.readFileSync(__dirname + '/attaque.js')+'');
    eval(fs.readFileSync(__dirname + '/pnj.js')+'');
    eval(fs.readFileSync(__dirname + '/Economie.js')+''); */

    if(message.content === préfix + "Help"){
        var y = new Discord.RichEmbed()
        .addField(":eye: Contexte en quelque ligne", "?Histoire")
        .addField(":busts_in_silhouette: Race de création de personnage", "?Race")
        .addField(":crossed_swords: Classe en fonction des races", "?Classe")
        .addField(":money_with_wings: Systeme d'argent", "?Argent")
        .addField(":beginner: Systeme d'évolution'", "?évolution")
        .setColor("#8c8989")
        .setImage("https://i.pinimg.com/originals/64/18/07/64180768c096a195e71482da9f0864c2.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "help"){
        var y = new Discord.RichEmbed()
        .addField(":eye: Contexte en quelque ligne", "?Histoire")
        .addField(":busts_in_silhouette: Race de création de personnage", "?Race")
        .addField(":crossed_swords: Classe en fonction des races", "?Classe")
        .addField(":money_with_wings: Systeme d'argent", "?Argent")
        .addField(":beginner: Systeme d'évolution", "?évolution")
        .setColor("#8c8989")
        .setImage("https://i.pinimg.com/originals/64/18/07/64180768c096a195e71482da9f0864c2.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "évolution"){
        var y = new Discord.RichEmbed()
        .addField(":bust_in_silhouette: Cher les humains", "Il faudra que votre personnage s'entraîne quotidiennement, patrouille, etc"
                   + ". Une fois que vous serez prêt, votre supérieur vous enverra dans un centre de formation durant plusieurs jours. \n Si"
                   + " vous n'êtes plus cher le CSM alors il faudra redoubler d'effort, sauf si 3eme faction...")
        .addField(":spy: Cher les mutants", "Vous avez faim ? Et bien mangez et entraînez vous. Un staff vous préviendras via une action RP"
                   +" lorsque votre personnage sera prêt. Puis quand l'évolution commencera, durant quelques jours votre personnage"
                   +" aura la moitié de ses HP et se sentira ultra faible avant de littéralement exploser dans sa nouvelle forme")
        .addField(":bangbang:  évolution épique", "Uniquement pour les mutants, à la fin de votre transformation vous aurez cette commande à faire ?Pouvoir épique. Attention, vous ne pourrez choisir qu'une seul compétence !")
        .setColor("#8c8989")
        .setImage("http://shortyawards.com.s3.amazonaws.com/entries/level-up-logo.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    
    if(message.content === préfix + "Pouvoir épique") {
        var result = Math.floor((Math.random() * 100) + 1);
        if(result < 26){
        var result = new Discord.RichEmbed() 
        .setColor("#af1616")
        .addField(":crossed_swords: Soifs de combats", "Choisissez une personne, durant 1 semaine vous lui infligerez le double des dégâts, renouvelable toutes les 1semaines")
        .addField(":detective: Flaire de prédateur", "Choisissez une personne, durant 1 semaine vous saurez exactement la position de la personne ainsi que les pulsions de son coeur")
        .setImage("https://data.whicdn.com/images/251651837/original.gif")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");}
        else if (result < 51){
        var result = new Discord.RichEmbed() 
        .setColor("#10d33b")
        .addField(":diamond_shape_with_a_dot_inside: Resurrection", "Quand vous serez mort(n'importe la manière), vous serez réanimé d'ici 12h n'importe où et devrez retaper la commande de pouvoir épique")
        .addField(":beginner: Instinct primaire", "Choisisez 3 personnes au choix. Quand vous tomberez contre eux, vous aurez un bonus de 5HP")
        .setImage("https://owips.com/sites/default/files/clipart/drawn-anger/448841/drawn-anger-anime-448841-3447811.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");}
        else if(result < 76){
        var result = new Discord.RichEmbed() 
        .setColor("#c5c5c5")
        .addField(":detective: Indetectable", "Quand vous tuez une personne(comme un PNJ par exemple), vous pouvez lui voler son apparence, mais vous serez dans l'impossibilité de revenir en arrière sauf pour reprendre votre apparence d'origine")
        .addField(":bust_in_silhouette: Invisibilité", "Vous pouvez devenir invisible 30min grand max(mais ne pourrais pas bouger), temps de recharge : 18h")
        .setImage("https://i.pinimg.com/originals/f2/c1/90/f2c190d4fec71cddb7dfae514aa05075.png")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");}
        else if (result < 101){
        var result = new Discord.RichEmbed() 
        .setColor("#ab2195")
        .addField(":trident: Flaire surdéveloppé", "Vous pouvez détécter à l'odeur du sang si la personne est un mutant ou non. Si le mutant a déjà évolué alors vous devrez faire un roll.")
        .addField(":eye: Ultrason", "Vous pouvez détecter toute les personnes du chanel(même si elles sont cachées) et vous pouvez savoirs sur quoi ils se focalisent. Temps de recharge : 12h")
        .setImage("https://images.hdqwalls.com/wallpapers/bthumb/elesis-elsword-anime-character-4k-7i.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");}
        message.channel.send(result);
    
    }




    if(message.content === préfix + "Roll") {
        var result = Math.floor((Math.random() * 100) + 1);
        if(result < 50)
        var result = new Discord.RichEmbed() 
        .setColor("#ff0000")
        .setAuthor(result)
        if(50 < result)
        var result = new Discord.RichEmbed() 
        .setColor("#1fff00")
        .setAuthor(result)
        message.channel.send(result);
    
    }

    if(message.content === préfix + "Histoire"){
        var y = new Discord.RichEmbed()
        .addField("L'ouverture d'un monde nouveau", "La science avançait à grands pas, bien que mélanger les ADN chez l’homme était interdit, "
                    +"rien ne pouvez interdire la curiosité de l’homme, une organisation s’en chargea et créera par"
                    +" la suite d’innombrable espèce humanoïdes garder dans le plus grand des secrets. Vampire, ghoul, harpie et j’en passe. "
                    +"\n Malheureusement un jour l’état ne pouvait plus cacher l’existence des centres d’expérimentations"
                    +" après que ces derniers finirent détruit chacun leurs tours de l’intérieure par leurs créations et que ces dernières attaquèrent des villes, ")
        .addField("(suite)", " il était devenu difficile de les cachées et l’état envoya les autorités qui étaient chargées d’eux.Mais la menace était bien trop importante. . ."
        +"  Les premières créations étaient devenues folles à cause des années passées sans voir la lumière du jour, "
        +" leur folie était tel qu’il était impossible de communiquer avec ces dernières. Un groupe nommé le CSM (Centre de sécurité militaire),"
        +" calma vite l’hostilité. . Une unité d’élite comme jamais vue au paravant avec des équipements adaptés à leurs ennemies une fois la menace calme,"
        +" le CSM dit placer au sommet comme les sauveurs de l’humanité.")
        .setColor("#8c8989")
        .setImage("https://wallpaperbro.com/img/470306.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "Histoire"){
        var y = new Discord.RichEmbed()           
        .addField("Un début d'anarchie...", "40ans après la nouvelle génération. Les mutants ont enfin un esprit lambda comme tout le monde parfois Même certains mutants sont plus humains que l’homme en général. Du côté du CSM, leur nombre a diminuer et leur puissance à augmenté, la nouvelle de génération de mutant est bien silencieuse et encore inconnue. . . Mais le CSM a encore besoin de troupe pour exterminer les mutants qui se montreraient hostiles. Le jeu du chat et la souris n’a clairement pas finit, le CSm compte bien traquer la vermine jusqu’au bout et pour cela le CSM a mis en place des couvres feux, des caméras de surveillances, ect. Le monde actuel se transforme en une forme de dictature crée par la peur de l’inconnue. . . Peut être qu’un jour un groupe vaincra ou bien une nouvelle organisation arrivera à calmer le jeu")
        .setColor("#8c8989")
        .setImage("https://wallpaperbro.com/img/470306.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Race"){
        var y = new Discord.RichEmbed()
        .addField(":bust_in_silhouette: Humain", "Les humains peuples 95% de la planète, Ils sont pour les 9/10 contre les mutants car ces derniers sont néfastes à l'humanité")
        .addField(":spy: Mutant", "Il y a de tout, ghoul, vampire, monstre à tentacule(calmez vous sur le hentai), etc, ces derniers vivent pour la plupart"
        + " dans la peur et se cache. Les mutants sont recherchés, car ces dernières sont obligées de se nourrir d'humain un minimum pour survivre"
        + ", la plupart sont solitaires mais certaines vivent en groupe, il en existe même qui ont un travail et arrive à cacher leur identité")
        .setColor("#8c8989")
        .setImage("https://i.pinimg.com/originals/18/80/21/188021fa61ba5f8a6d8d18288e65931c.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Argent"){
        var y = new Discord.RichEmbed()
        .addField(":money_mouth: Utilité de l'argent ?", "L'argent pourra vous être utile pour vous payer à manger(pour la profondeur du RP), "
                  +"ou bien vous loger... Mais également pour acheter des utilitaires ou de l'équipement qui seront utile pour le PVP")
        .addField(":briefcase: Gagner de l'argent", "Si vous ne faites pas partie du CSM vous demanderez au staff de vous créer un restaurant, "
                  +"une agence d'immobilier... Vous serez payé par les personnes qui voudront de vos services/bien \n Si vous faites partie du CSM"
                  +" vous aurez un salaire fixe et recevrez des primes en fonction de vos actions. \n Et si vous n'avez pas de travailler vous aurez"
                  +" juste à faire une commande quotidiennement pour gagner de l'argent (un peu comme le RSA)")
        .addField(":moneybag: Salaire CSM et RSA mais également quartier noir", "?Salaire")
        .addField(":credit_card: Shop", " ?Boutique CSM \n ?Marché noir")
        .setImage("http://goboiano.com/wp-content/uploads/2017/01/72E78042-5AD9-4524-9959-A0BB2EA45F55.png")
        .setColor("#efed13")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Salaire"){
        var y = new Discord.RichEmbed()
        .addField(":notepad_spiral: Règle pour avoir son salaire", "Vous devez obligatoire jouer au minimum 1h dans les 24h qui suivent")
        .addField(":smiley_cat: RSA", "Vous gagnez 10€/jours")
        .addField(":gun: CSM", "__Patrouilleur du CSM__ : 20€/jours \nCaporal : +5€/jours \nSergent : +10€/jours \nAdjudant : +15€/jours \n Lieutenant : +20€\jours")
        .addField(":gun: CSM", "__Gérant d'interrogatoire__ : 12€/jours \nCaporal : +5€/jours \nSergent : +10€/jours \nAdjudant : +15€/jours \n Lieutenant : +20€\jours")
        .addField(":gun: CSM", "__Netoyeur__ : 15€/jours \nCaporal : +5€/jours \nSergent : +10€/jours \nAdjudant : +15€/jours \n Lieutenant : +20€\jours")
        .addField(":crossed_swords: Quartier noir", "__Garde mercenaire__ : Vous devez repousser le CSM qui tenterait de rentrer dans le quartier noir et défendre les mercenaires \n **Salaire :** 15€ \nChevalier noir : +5€\jours")
        .addField(":crossed_swords: Quartier noir", "__Espion__ : Vous devez rapporter des informations à votre chef mercenaire \n **Salaire :** à voir directement avec votre mercenaire du coin")
        .addField(":crossed_swords: Quartier noir", "__Gérant immobilier du quartier noir__ : Vous pouvez fournir un lieu pour dormir mais...La sécurité n'est vraiment pas au rendez vous \n **Salaire :** RSA + 5€ par chambre par jour")
        .setColor("#efed13")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Boutique CSM"){
        const filter = (reaction, user) => ['⏭','⏮'].includes(reaction.emoji.name) &&user.id === message.author.id;
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
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(embed).then(async message => 
            { 
                await message.react('⏮');
                await message.react('⏭');

                switch (reaction.emoji.name){

                    case '⏭':
                            let embed = new Discord.RichEmbed()
                                .setColor("#b8b8b8")
                                .setAuthor("Test")
                                message.channel.send(embed).then(async message => 
                                    {
                                        await message.react('⏮'); 
                                        if(reaction.emoji.name === '⏮')
                                        {
                                            message.delete()
                                            //message.channel.bulkDelete(2);
                                           }
                                    });
                    break;  
                    case '⏮':
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
                            .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
                                message.channel.send(embed).then(async message => 
                                    {
                                        await message.react('⏮'); 
                                        if(reaction.emoji.name === '⏮')
                                                              {
                                                                  message.delete()
                                                                  //message.channel.bulkDelete(2);
                                                              }
                                    });
                    break;
                }


            });
    }

    if(message.content === préfix + "Marché noir"){
        var y = new Discord.RichEmbed()
        .addField("**__Kevlar__**", "```Protection qui augmente votre vitalité. Vous ne pouvez en porter qu'un``` ")
        .addField("Kevlar volé","**HP :** :heart: 1 || **Prix :** :money_with_wings: 60€ ",true)
        .addField("Kevlar robuste","**HP :** :heart: 3 || **Prix :** :money_with_wings: 140€ ",true)
        .addField("Kevlar pro","**HP :** :heart: 5 || **Prix :** :money_with_wings: 230€ ",true)
        .addField("**__talkys-walky__**", "```Vous permet de communiquer jusqu'à une certaine distance``` ")
        .addField("talkys-walky standart","**Porté de channel :** :loudspeaker: 3 || **Prix :** :money_with_wings: 50€ ",true)
        .addField("talkys-walky pro","**Porté de channel :** :loudspeaker: 5 || **Prix :** :money_with_wings: 100€",true)
        .addField("**__Trousse de secours__**", "```Pour pouvoir remettre en êtat quelqu'un en situation critique (1HP(En gros pour évitez qu'il meurt d'hémoragie))``` ")
        .addField(":heart_decoration: Medikit","**Prix :** : :money_with_wings: 50€")
        .addField("**__Pistolet de détresse__**", "```Si vous n'avez plus votre radio, le pistolet de détresse est visible à 1 channel à la ronde(inutilisable dans un batiment)``` ")
        .addField(":gun:  Lance fusé","**Prix :** : :money_with_wings: 10€")
        .setColor("#efed13")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }



    if(message.content === préfix + "Classe"){
        var y = new Discord.RichEmbed()
        .addField(":beginner: Classe initiale des humains", "?Investigateur \n?Soldat")
        .addField(":smiling_imp: Classe initiale des mutants", "?Monstre \n?Speed \n?Puissance")
        .setColor("#000000")
        .setImage("https://cdn.discordapp.com/attachments/641777958490472478/642418619942174750/Rush_B_syka.png")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Investigateur"){
        var y = new Discord.RichEmbed()
        .addField(":heart: HP", "10")
        .addField(":crossed_swords: Attaque", "?IN attaque")
        .addField(":shield: Blocage", "?IN blocage")
        .addField(":sparkles: Esquive", "aucune")
        .addField(":trident: Evolution","?Fighter \n?Slayer")
        .setColor("#001bff")
        .setImage("https://c4.wallpaperflare.com/wallpaper/274/562/510/anime-girls-katana-sword-pink-hair-wallpaper-preview.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Soldat"){
        var y = new Discord.RichEmbed()
        .addField(":heart: HP", "8")
        .addField(":crossed_swords: Attaque", "?SD attaque")
        .addField(":shield: Blocage", "?SD blocage")
        .addField(":sparkles: Esquive", "?SD esquive")
        .addField(":trident: Evolution","?Tank \n?Elite")
        .setColor("#0315ae")
        .setImage("https://cdn.discordapp.com/attachments/641770012746448901/642423175891648512/military_China_weapon_soldier_anime_girls_war_spec_ops-1152388.jpgd.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "Puissance"){
        var y = new Discord.RichEmbed()
        .addField(":heart: HP", "10")
        .addField(":crossed_swords: Attaque", "?P attaque")
        .addField(":shield: Blocage", "?P blocage")
        .addField(":sparkles: Esquive", "?P esquive")
        .addField(":trident: Evolution","?Destructeur")
        .setColor("#ff0000")
        .setImage("https://wallpapersite.com/images/wallpapers/tokyo-ghoul-1366x768-ken-kaneki-snow-artwork-4k-8k-10803.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Monstre"){
        var y = new Discord.RichEmbed()
        .addField(":heart: HP", "12")
        .addField(":crossed_swords: Attaque", "?M attaque")
        .addField(":shield: Blocage", "?M blocage")
        .addField(":sparkles: Esquive", "aucune")
        .addField(":trident: Evolution","?Colosse")
        .setColor("#8c0000")
        .setImage("https://www.ubackground.com/_ph/4/565127116.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Speed"){
        var y = new Discord.RichEmbed()
        .addField(":heart: HP", "9")
        .addField(":crossed_swords: Attaque", "?S attaque")
        .addField(":shield: Blocage", "?S blocage")
        .addField(":sparkles: Esquive", "?S esquive")
        .addField(":trident: Evolution","?Super speed")
        .setColor("#8c0000")
        .setImage("https://i.redd.it/ogqasdcwees11.jpg")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

// Palier 2

if(message.content === préfix + "Tank"){
    var y = new Discord.RichEmbed()
    .addField(":heart: HP", "20")
    .addField(":crossed_swords: Attaque", "?T attaque")
    .addField(":shield: Blocage", "?T blocage")
    .addField(":sparkles: Esquive", "Aucune")
    .addField(":fleur_de_lis: Passifs : ``Même pas mal``", ":shield: à partir de 5HP, réduit les dégats par 2 :shield: ")
    .addField(":trident: Evolution finale","???")
    .setColor("#010b61")
    .setImage("https://media.discordapp.net/attachments/641777958490472478/642664584636792832/Screenshot_20191106_171124.jpg?width=317&height=560")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}
if(message.content === préfix + "Elite"){
    var y = new Discord.RichEmbed()
    .addField(":heart: HP", "16")
    .addField(":crossed_swords: Attaque", "?E attaque")
    .addField(":shield: Blocage", "?E blocage")
    .addField(":sparkles: Esquive", "?E esquive")
    .addField(":fleur_de_lis: Passifs : ``Poussé d'adrénaline``", ":syringe: à partir de 5HP, vous infligez un bonus de +3 de dégats:syringe:")
    .addField(":trident: Evolution finale","???")
    .setColor("#010b61")
    .setImage("https://i.pinimg.com/564x/2d/73/d1/2d73d13653c710269edcd856ac1530bb.jpg")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}
if(message.content === préfix + "Fighter"){
    var y = new Discord.RichEmbed()
    .addField(":heart: HP", "18")
    .addField(":crossed_swords: Attaque", "?F attaque")
    .addField(":shield: Blocage", "?F blocage")
    .addField(":sparkles: Esquive", "?F esquive")
    .addField(":trident: Evolution finale","???")
    .addField(":fleur_de_lis: Passifs : ``Frère d'arme``", ":busts_in_silhouette: Vous avez un pouvoir vous permettant de désigner un mutant(si il l'accepte ou de force !) venant à lui créer une chaine qui le relit a vous, il sera dans l'impossibilité de vous attaquer :busts_in_silhouette:")
    .setColor("#5164ff")
    .setImage("https://cdn.discordapp.com/attachments/642675299825483779/642819778913763377/Saber_red_Astolfo_Fate_Apocrypha_manga_anime_girls_armor_sword_texture-1159348.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}
if(message.content === préfix + "Slayer"){
    var y = new Discord.RichEmbed()
    .addField(":heart: HP", "15")
    .addField(":crossed_swords: Attaque", "?SL attaque")
    .addField(":shield: Blocage", "?SL blocage")
    .addField(":sparkles: Esquive", "?SL esquive")
    .addField(":fleur_de_lis: Passifs : ``Reflexe accrue``", ":wave: Si votre blocage est réussir, vous aurez 75% de chance de contrer l'attaque :wave: ")
    .addField(":trident: Evolution finale","???")
    .setColor("#5164ff")
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/642819979422597140/anime_girl_dress_sword-578015.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}

// Colosse
if(message.content === préfix + "Colosse"){
    var y = new Discord.RichEmbed()
    .addField(":heart: HP", "30")
    .addField(":crossed_swords: Attaque", "?C attaque")
    .addField(":shield: Blocage", "?C blocage")
    .addField(":sparkles: Esquive", "aucune")
    .addField(":fleur_de_lis: Passifs : ``Corps indestructible``", ":gem: Les attaques à distances sont réduits de 1 point de dégats :gem:")
    .addField(":trident: Evolution","?Colosse")
    .setColor("#8c0000")
    .setImage("https://comicvine1.cbsistatic.com/uploads/original/11130/111303510/5516945-6796583427-boros.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}
// Super speed 

if(message.content === préfix + "Super speed"){
    var y = new Discord.RichEmbed()
    .addField(":heart: HP", "18")
    .addField(":crossed_swords: Attaque", "?SS attaque")
    .addField(":shield: Blocage", "?SS blocage")
    .addField(":sparkles: Esquive", "?SS esquive")
    .addField(":fleur_de_lis: Passifs : ``Agilité ultime``", ":hotsprings: L'attaque peu infliger des combos :hotsprings:")
    .addField(":trident: Evolution","???")
    .setColor("#8c0000")
    .setImage("https://sindarfrom.files.wordpress.com/2014/08/2014-08-11_1516.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}

// Destructeur

if(message.content === préfix + "Destructeur"){
    var y = new Discord.RichEmbed()
    .addField(":heart: HP", "20")
    .addField(":crossed_swords: Attaque", "?D attaque")
    .addField(":shield: Blocage", "?D blocage")
    .addField(":sparkles: Esquive", "?D esquive")
    .addField(":fleur_de_lis: Passifs : ``Force destructrice``", ":eight_pointed_black_star: A des chances de traverser le blocage :eight_pointed_black_star: ")
    .addField(":trident: Evolution","???")
    .setColor("#8c0000")
    .setImage("https://i.imgur.com/N9l3p6p.jpg")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}
if (message.content === préfix + "Play") {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }





    




})
client.on('ready', function () {
    console.log("Je suis connecté !")
     client.user.setGame("?Help");

    })
    
