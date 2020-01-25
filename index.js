const Discord = require('discord.js')
const client = new Discord.Client()
const talkedRecently = new Set()



client.login(process.env.TOKENS);



var fs = require("fs")
var vm = require('vm')
var préfix = "?";




client.on("message",message =>{

    if (!message.content.startsWith(préfix) || message.author.bot) return;

    const args = message.content.slice(préfix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }

    
    


eval(fs.readFileSync(__dirname + '/Shop.js')+'');
eval(fs.readFileSync(__dirname + '/Item.js')+'');
eval(fs.readFileSync(__dirname + '/amélioration.js')+'');
/*  eval(fs.readFileSync(__dirname + '/pnj.js')+'');
    eval(fs.readFileSync(__dirname + '/Economie.js')+''); */


       


    if(message.content === préfix + "help" || message.content === préfix + "Help" ){
        var y = new Discord.RichEmbed()
        .addField(":book:  **?Histoire**", "Ici vous aurez un résumé du thème du serveur")
        .addField(":man_detective: **?Classe**", "Ici vous aurez simplement la liste des classes lors de la création de votre personnage")
        .addField(":eyes: **?Espece**", "Ici vous aurez la liste des espèces")  
        .addField(":crossed_swords: **?Ultime**", "Lors de la création de votre personnage, vous ne pourrez choisir qu'une seul ultime !")
        .addField(":video_game: **?Liste d'attaque**", "C'est le plus important ! Selon votre classe vous aurez différentes attaques !")
        .addField(":office: **?Etats**", "Ici vous trouverez les effets que font les êtats (exemple : paralysie)")
        .addField(":video_game: **?Fiche RP**", "Ici vous aurez le modèle de la fiche RP")
        .addField(":chart_with_upwards_trend: **?Level**", "Ici vous aurez les paliers entre chaque level")
        .addField(":bar_chart: **?Bonus [nom de la classe]**", "Pour savoir le gain de caractéristique à chaque level up")
        .addField(":nazar_amulet: **?Point cara**", "Ici vous trouverez l'utilité des points de caractéristiques")
        .addField(":park: **?étage**", "Ici vous aurez la liste des étages ainsi qu'un rapide résumé de leurs thèmes")
        .addField(":office: **?Commerce**", "Ici vous trouverez le shop inRP ")
        .addField(":hammer_pick: **?Artisanat**", "Ici vous trouverez la liste des différents type de fabrication ainsi que les ressources nécessaires.")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    
    if(message.content === préfix + "fiche RP" || message.content === préfix + "Fiche RP" ){
        message.channel.send("```!! ━―━―━👤 **__PERSONNEL__** 👤━―━―━ !!\n\n **Nom :**\n**Prénom :**\n**Âge : **\n\n**Race : **\n**Sexe :**\n**Orientation sexuelle :**\n\n**Poids :**\n **Taille :**\n\n**Personnalité :**\n\n**Histoire :**\n\n\n**__APPARENCE :__**\n\n**Caractéristique physique :** \n\n**Image :**\n\n\n!! ━―━―━🗡️ **__COMBAT__** 🗡️━―━―━ !!\n\n" 
        +"**Classe :** ?\n**Compétence spé :** ?\n\n**Niveau : ** 1\n**Exp :** 0/100\n\n**HP : ** 50/50\n**Armure : ** 0\n**Armure magique :** 0\n**MP :** 0/0\n10 **Attaque total**\n0 **Esquive total**\n\n\n!! ━―━―━💠 **__Caractéristiques__** 💠━―━―━ !!\n\n\n0/? **point libre restant**\n\n"
        +"0 **points de puissance**\n\n0 **points de résistance physique**\n\n0 **points de résistance magique**\n\n0 **points de vitalité**\n0 **points d'agilité**\n!! ━―━―━📚 **__Métiers__** 📚━―━―━ !!\n\n\n**Chasseur niveau 1 :** 0/50XP\n\n**Pêcheur niveau 1 :** 0/50XP\n\n**Cueilleur niveau 1 :** 0/50XP\n\n**Mineur niveau 1 :** 0/50XP\n\n**Bucheron niveau 1 :** 0/50XP\n\n**Cuisinier niveau 1 :** 0/50XP\n\n**Alchimiste niveau 1 :** 0/50XP\n\n"
        +"**Bijoutier niveau 1 : ** 0/50XP\n\n**Forgeron niveau 1 :** 0/50XP\n\n**Couturier niveau 1 :** 0/50XP\n\n\n!! ━―━―━💼 **__Inventaire__** 💼━―━―━ !!```");
    }

    if(message.content === préfix + "Point cara" || message.content === préfix + "point cara"){
        var y = new Discord.RichEmbed()
        .addField("__**Les points de caracthéristiques**__"," à chaque level vous gagnerez un point de caracthéristique, chaque ''stats'' apport différent bonus.")
        .addField("__**Répartition des points**__","**puissance :** ``1 point dans puissance c'est 1 de dégats en plus !``\n**résistance physique :** ``1 point dans résistance physique c'est 0.5 en armure``\n**résistance magique :** ``1 point dans résistance magique c'est 0.5 en armure magique !``\n**vitalité :** ``1 point dans vitalité c'est 5HP en plus !``\n**agilité :** ``1 point dans l'agilité c'est 0.1 en esquive !``")
        message.channel.send(y);
    }


    if(message.content === préfix + "Level" || message.content === préfix + "level"){
        message.channel.send(`${message.author} Voici le tableau des levels`);
        message.channel.send("```fix\n-Du Lvl 1 à 10 vous gagnez à chaque level 3 points de caracthéristique```")
        message.channel.send("```markdown\n#-Lvl  1 : 0 XP\n#-LVl  2 : 100 XP\n#-Lvl  3 : 200 XP\n#-Lvl  4 : 300 XP\n#-LVl  5 : 400 XP\n#-Lvl  6 : 500 XP\n#-Lvl  7 : 600 XP\n#-Lvl  8 : 700 XP\n#-Lvl  9 : 800 XP\n#-Lvl  10 : 900 XP```");
        message.channel.send(`${message.author} Voici le tableau des levels des metiers`);
        message.channel.send("```markdown\n#-Lvl  1 : 0 XP\n#-LVl  2 : 50 XP\n#-Lvl  3 : 100 XP\n#-Lvl  4 : 175 XP\n#-LVl  5 : 250 XP\n#-Lvl  6 : 350 XP\n#-Lvl  7 : 450 XP\n#-Lvl  8 : 600 XP\n#-Lvl  9 : 750 XP\n#-Lvl  10 : 950 XP```");
    }
    if(message.content === préfix + "Bonus épéiste" || message.content === préfix + "bonus épéiste"){
        var y = new Discord.RichEmbed()
        .addField("**__Du Lvl 1 à 10 pour chaque level__**", "**+1AT** :crossed_swords: \n**+5HP** :heartpulse:\n**+0.5AR** :shield:")
        .addField("**__Du Lvl 11 à 20 pour chaque level__**","**+3AT** :crossed_swords: \n**+10HP** :heartpulse: \n **+0.5AR** :shield: ")
        .setImage("https://wallpaperaccess.com/full/141779.jpg")
        message.channel.send(y);
    }
    if(message.content === préfix + "Bonus voleur" || message.content === préfix + "bonus Voleur" || message.content === préfix + "bonus voleur" || message.content === préfix + "Bonus Voleur"){
        var y = new Discord.RichEmbed()
        .addField("**__Du Lvl 1 à 10 pour chaque level__**", "**+2AT** :crossed_swords: \n**+5HP** :heartpulse:")
        .addField("**__Du Lvl 11 à 20 pour chaque level__**","**+5AT** :crossed_swords: \n**+5HP** :heartpulse: \n **+0.1ES** :man_running: ")
        .setImage("https://i.pinimg.com/originals/5d/ff/3a/5dff3a4218e9cd05ac9e54da8f73741e.jpg")
        message.channel.send(y);
    }
    if(message.content === préfix + "Bonus paladin" || message.content === préfix + "bonus Paladin" || message.content === préfix + "bonus paladin"  || message.content === préfix + "Bonus Paladin"){
        var y = new Discord.RichEmbed()
        .addField("**__Du Lvl 1 à 10 pour chaque level__**", "**+1AT** :crossed_swords: \n**+10HP** :heartpulse:")
        .addField("**__Du Lvl 11 à 20 pour chaque level__**","**+2AT** :crossed_swords: \n**+15HP** :heartpulse: \n **+0.5AR** :shield:")
        .setImage("https://images.alphacoders.com/522/thumb-1920-522947.jpg")
        message.channel.send(y);
    }

    if(message.content === préfix + "étage"){
        var y = new Discord.RichEmbed()
        .addField("Liste des étages", "__**Il est à noter que l'étage de base est le 0 et que plus vous avancerez plus vous descendrez.**__\n" 
        +":fire: **?étage -1 :** C'est l'étage de la lave, le Boss serait...Un poil trop cuit\n"
        +":ice_cube: **?étage -2 :** C'est l'étage de la glace, pensez à mettre un pull ! \n"
        +":classical_building: **?étage -3 :** C'est l'étage d'une ancienne ville maintenant abandonné....\n"
        +"**étage -4 :** SOON")
        .setColor("#ff4600")
        .setImage("https://media.discordapp.net/attachments/454694319396356128/661514404273324033/2f22e5e72a18ee90cc1074445838a082.png")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }


    if(message.content === préfix + "Etats" || message.content === préfix + "etats" || message.content === préfix + "êtats" || message.content === préfix + "Êtats"){
        var y = new Discord.RichEmbed()
        .addField("__**Liste des êtats**__", "**Paralysie : **``Vous ne pouvez pas vous défendres à la prochaine attaque que vous subissez.``\n**Saignement ou Poison :** ``Vous venez subir des dégâts bonus qui travèrse l'armure classique et magique (sauf si stuff particulier)``\n**SOON**")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    


    if(message.content === préfix + "Classe" || message.content === préfix + "classe"){
        var y = new Discord.RichEmbed()
        .addField(":dagger: Voleur", "Forts dégâts pour faibles HP !")
        .addField(":crossed_swords: Épéiste", "Dégâts moyens pour HP moyens !")
        .addField(":shield: Paladin", "Beaucoup d'HP pour faibles dégâts !")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Histoire" || message.content === préfix + "histoire"){
        var y = new Discord.RichEmbed()
        .addField("__**Histoire en bref**__", "Nous sommes en plein âge d'or du moyen âge, enfin...On l'était.\nIl y a de cela des années, les races s'entres-tuaient, ne prenant pas le temps d'évoluer leur style de combat ou autre, les guerres ne laissèrent le temps à personne de souffler un tant soit peu.\nLes Elus exterminaient des Démons qui eux dévoraient des humains pendant que ces derniers faisaient de l'esclavagisme sur les elfes qui...Vous l'aurez comprit, cela était sans fin.")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Histoire" || message.content === préfix + "histoire"){
        var y = new Discord.RichEmbed()
        .addField("__**Histoire en bref 2**__", "Malheureusement un jour les cieux ont agi venant exterminer probablement les 9/10 de la population dans le monde, ironiquement même les elus qui faisaient partie des cieux ont prit également tarifs venant également se faire décimer en grande partie, trahison ? Tout le monde l'ignore...\nNéanmoins, le reste du monde a du utiliser son cerveau venant faire une paix ''temporaire'' le temps de résoudre le problème même si tout le monde ne sera pas d'accord et certains continuerons leurs actes...\nSuite à l'énorme génocide certains pensèrent à écouter les paroles d'un ancien rois...Celle du gouffre sans fin....\n\n''Si les cieux nous ont trahis alors utilisons les abysses pour les détruire''.\nSuite à cela les plus curieux et courageux rejoignirent la petite île où si stiuait le gouffre et les plus fuyards la quittèrent...")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Espece" || message.content === préfix + "espece"){
        var y = new Discord.RichEmbed()
        .addField("Liste des especes", ":upside_down: **Humain**\n:imp: **Demon**\n:robot: **Automate**\n:elf: **Elfe**\n**Mi-humain**\n**Werebeast**\n**Draconien**\n**Vampire**\n**Elu**")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "Humain" || message.content === préfix + "humain"){
        var y = new Discord.RichEmbed()
        .addField("__**Humain**__", ":trident: **Bonus :** Aucun\n:fleur_de_lis: **Malus :** Aucun\n:notepad_spiral: **Description :** Race étant la plus courante dans ce monde, ils n'ont rien d'extraordinaire comparé autre race mais cependant ils ne sont pas faible pour autant")
        .setImage("https://media.discordapp.net/attachments/661225907578601472/661226564083515402/60195005_p0_master1200.jpg?width=484&height=559")
        .setColor("#acacac")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "Elfe" || message.content === préfix + "elfe"){
        var y = new Discord.RichEmbed()
        .addField("__**Elfe**__", ":trident: **Bonus :** +15% de MP\n:fleur_de_lis: **Malus :** -10% d'HP\n:notepad_spiral: **Description :** Race plutôt rare et beaucoup on était rendu en esclave par les humains du à leurs grande affinité avec la magie ainsi que leurs un grand lien avec la nature pouvant donc comprendre celle ci pour ainsi par exemple trouver son chemin dans un labyrinthe ils sont cependant plus faible physiquement que les humains")
        .setImage("https://www.nautiljon.com/images/description/00/07/1543596772591_image.jpg")
        .setColor("#5db234")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "Mi-humain" || message.content === préfix + "mi-humain"){
        var y = new Discord.RichEmbed()
        .addField("__**Mi-humain**__", ":trident: **Bonus :** +5% d'HP\n:fleur_de_lis: **Malus :** -10% d'MP\n:notepad_spiral: **Description :** Des hybrides . . . cette race vient de l'union entre un Werebeast et un Humain leurs sens sont beaucoup moins développé que celle d'un Werebeast mais le sont plus que les humains")
        .setImage("https://www.itl.cat/pngfile/big/136-1362573_photo-wallpaper-forest-girl-dark-anime-art-neko.jpg")
        .setColor("#8297e6")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "Werebeast" || message.content === préfix + "werebeast"){
        var y = new Discord.RichEmbed()
        .addField("__**Werebeast**__", ":trident: **Bonus :** +10% d'HP\n:fleur_de_lis: **Malus :** -20% d'MP\n:notepad_spiral: **Description :** : Des êtres à l'apparence bestiale que cela soit tigre, ours, chien la seul chose qui les différencie des animaux est qu'ils sont doué d'intelligence et sont civilisé tous comme n'importe qu'elle race, cependant la colère peuvent les faires devenir agressif facilement voir même leurs faire perdre la raison")
        .setImage("https://images-ext-1.discordapp.net/external/h94W9g2Bt4FJhoUXFmY8BgcAq2hEoklgxH8z9r12fkQ/%3Fwidth%3D445%26height%3D559/https/media.discordapp.net/attachments/661225907578601472/661226930548506624/2622507c6bb258d9e7995b2fec3ff1b9.jpg")
        .setColor("#4063e6")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "Draconien" || message.content === préfix + "draconien"){
        var y = new Discord.RichEmbed()
        .addField("__**Draconien**__", ":trident: **Bonus :** +20% d'armure\n:fleur_de_lis: **Malus :** -10% d'attaque\n:notepad_spiral: **Description :** : : Cette race est un mystère pour ce monde . . . des êtres à la fois humain et dragon mais ils n'existent pas de Werebeast dragon, cependant ils existent quand même, certain disent qu'ils sont les évolutions des Dragons, qu'ils se sont adapté, ce qui leurs on fait prendre forme humaine")
        .setImage("https://cdn.discordapp.com/attachments/661225907578601472/661227000488394774/darkchain_aka__harvey_by_darkavey_dcpzs0s-pre.jpg")
        .setColor("#f27e2e")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }   
    if(message.content === préfix + "Vampire" || message.content === préfix + "vampire"){
        var y = new Discord.RichEmbed()
        .addField("__**Vampire**__", ":trident: **Bonus :** +10% d'attaque\n:fleur_de_lis: **Malus :** -20% d'armure\n:notepad_spiral: **Description :** : Un être buveur de sang beaucoup repoussée par les humains du au on dit de la population disant que les vampires ne sont que des monstre assoiffé de sang, ce qui est vrai pour certain mais une petite partie d'entre eux cependant car même si la seul véritable nourriture qui les rassasies vraiment est le sang humain cependant ils ne sont pas méchant pour autant simplement si ils n'en boivent pas au moins 1L toute les semaine cela va leurs faire perdre la tête et les faires rentrer dans une rage de sang venant s'attaquer à n'importe qui pour boire son sang jusqu'à être rassasié")
        .setImage("https://cdn.discordapp.com/attachments/661225907578601472/661227116171362336/Remilia.png")
        .setColor("#ff0000")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }   
    if(message.content === préfix + "Elu" || message.content === préfix + "elu"){
        var y = new Discord.RichEmbed()
        .addField("__**Elu**__", ":trident: **Bonus :** +20% d'armure magique\n:fleur_de_lis: **Malus :** -10% d'attaque\n:notepad_spiral: **Description :** : Les Elus, une race que l'on pourrait comparer au ange et cela est le cas cependant les Elu sont née de parents humains ou de parents Elu ou d'un parents Humains et d'un parent Elu, ayant comme principale fonction de jouer les intermédiaires entre  les hommes et les démons à fin de protéger les humains de cette race corrompu il voue à leurs naissance une grande méfiance envers les démons ne pouvant donc jamais leurs faire confiance à 100% même si ils deviennent amis.")
        .setImage("https://cdn.discordapp.com/attachments/661225907578601472/661227221226356746/73696359_p0_master1200.jpg")
        .setColor("#ffffff")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    } 
    if(message.content === préfix + "Automate" || message.content === préfix + "automate"){
        var y = new Discord.RichEmbed()
        .addField("__**Automate**__", ":trident: **Bonus :** -50%  de dmg sur les changements d'états \n:fleur_de_lis: **Malus :** -10% d'attaque\n:notepad_spiral: **Description :** : Race créer par les humains, ce sont des êtres mécanique fait à partir de métal et animé par la magie, cette race est cependant considéré comme hérésie pour les croyants les plus extrêmes car les automates ne sont pas l'œuvre de dieu et que seul dieu à le pouvoir de donner la vie et qu'en créant un automate cela voudrait dire qu'on essaye de se faire passer pour dieu, leurs créations date d'il y a des millénaire et la façon d'en créer à était perdu voir même oublié de rare schéma sont trouvable  mais même avec cela il est très rare d'arriver à donner la vie à un Automate même en y consacrant toute sa vie certain n'y arrive pas ")
        .setImage("https://danbooru.donmai.us/data/__cz2128_delta_overlord_drawn_by_hh_101__3a474d29abe339371e5edf2fbdd421bb.jpg?download=1")
        .setColor("#717171")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    if(message.content === préfix + "Démon" || message.content === préfix + "démon" || message.content === préfix + "demon" || message.content === préfix + "Demon"){
        var y = new Discord.RichEmbed()
        .addField("__**Démon**__", ":trident: **Bonus :** +10% d'attaque\n:fleur_de_lis: **Malus :** -20% d'armure magique\n:notepad_spiral: **Description :** :  Des êtres maléfique . . . enfin d'après les saintes écritures car même si une grande majorité d'entre eux sont d'une nature maléfique ayant de mauvaise intention envers les autres races une petites partie d'entre eux ne sont cependant pas comme sa et peuvent tout aussi gentil que n'importe qui")
        .setImage("https://media.discordapp.net/attachments/661225907578601472/661227290587299870/60340737_p0_master1200.jpg?width=1183&height=559")
        .setColor("#a90000")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }  

    
 



    


    if(message.content === préfix + "Ultime" || message.content === préfix + "ultime"){
        var y = new Discord.RichEmbed()
        .addField("Explication","Les coups spéciaux ne sont utilisés qu'une fois par combat, vous ne pouvez en choisir qu'un seul et ce n'est utilisable qu'une fois toute les 12H")
        .addField("?Final slash", "__Prérequis :__ Aucun \nSi la cible a moins de 10% d'HP, alors vous l'exécutez")
        .addField("?Rafale_de_coups [Vos dégats]", "__Prérequis :__ Aucun \nVous envoyez une rafale d'attaques physiques à un seul ennemie")
        .addField("?Paralysie [Vos dégats]", "__Prérequis :__ Aucun \nVous venez paralyser plusieurs ennemies les empêchant de se défendre à la prochaine attaque")
        .addField("?Soif_de_sang [Vos HP]","__Prérequis :__ Aucun  \nVous venez vous faires saigner votre sang afin d'augmenter vos dégâts durant plusieurs tours")
        .addField("?Instinct de survie","__Prérequis :__ Aucun  \nVous venez esquiver l'attaque et recevez un boost d'agilité durant 3 tours")
        .addField("?Instinct de survie","__Prérequis :__ Aucun  \nVous venez esquiver l'attaque et recevez un boost d'agilité durant 3 tours")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }

    if(message.content === préfix + "Liste d'attaque" || message.content === préfix + "liste d'attaque"){
        message.channel.send("**Ici vous trouverez les passifs des espèces mais également la liste des attaques par classe**");
    }
    if(message.content === préfix + "Liste d'attaque"){
        var y = new Discord.RichEmbed()
        .addField("**===================================**", "**===================================**")
        .addField("**Voleur**", "LVL 1 : ?Coup-dague [Vos dégats] + ?Esquive [Dégâts reçu]\nLVL 2 ?Blocage [Dégats reçu]\n LVL 5 ?Coup_fatal [Vos dégâts] **ou** ?Coup_simple [Vos dégats]\nLVL10 Evolution ?Assassin ou ?Ninja")
        .addField("**épéiste**", "LVL 1 : ?Coup-epee [Vos dégats] + ?Esquive [Dégâts reçu]\nLVL 2 ?Blocage [Dégats reçu]\n LVL 5 ?Coup_perçant [Vos dégâts] **ou** ?Coup_saignant [Vos dégâts]  \nLVL10 Evolution ?Chevalier ou ?Samourai")
        .addField("**Paladin**", "LVL 1 : ?Coup-masse [Vos dégats] + ?Blocage [Dégâts reçu]\nLVL 2 ?Esquive [Dégats reçu]\n LVL 5 ?Coup_provocateur **ou** ?Blocage_supérieur [Vos dégâts] \nLVL10 Evolution ?Juggernaut ou ?Seigneur")
        .addField("**===================================**", "**===================================**")
        .addField("**Info pour les esquives", "Si vous avez 0 points en agilité : Esquive [dégats reçu]\n Si vous en avez 1 au total : Super_esquive [dégats reçu]\n Si 2 : Mega_esquive [dégats reçu]\n Si 3 : Supra_esquive [dégats reçu]\n Et si 4 : Divin_esquive [dégats_reçu]")
        .setColor("#ff4600")
        .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
        message.channel.send(y);
    }
    /// CLASSE /////////////////////////////////////////////////
    /// CLASSE /////////////////////////////////////////////////
    /// CLASSE /////////////////////////////////////////////////    
    /// CLASSE /////////////////////////////////////////////////
        /// CLASSE /////////////////////////////////////////////////
            /// CLASSE /////////////////////////////////////////////////
                /// CLASSE /////////////////////////////////////////////////
                    /// CLASSE /////////////////////////////////////////////////
                        /// CLASSE /////////////////////////////////////////////////

                        if(message.content === préfix + "Assassin" || message.content === préfix + "assassin"){
                            var help_embed = new Discord.RichEmbed()
                            .setColor("#d20000")
                            .addField("Assassin", "Vous êtes un assassin, vous êtes spécialisé dans les dégats physique et puissante, le plus grand des DPS")
                            .addField("Liste d'attaque", "?Assassin attaque")
                            .setImage("https://images3.alphacoders.com/673/673498.jpg")
                            .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                            message.channel.sendMessage(help_embed);
                        }
                        if(message.content === préfix + "Ninja" || message.content === préfix + "ninja"){
                            var help_embed = new Discord.RichEmbed()
                            .setColor("#000000")
                            .addField("Assassin", "Vous êtes un ninja, vous êtes spécialisé dans les dégats physique mais vous savez également manier la magie !, vous êtes un bon DPS utilisant la magie de manière sournoise !")
                            .addField("Liste d'attaque", "?Ninja attaque")
                            .setImage("https://wallup.net/wp-content/uploads/2017/05/29/402275-fantasy_art-Ninja-mask.jpg")
                            .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                            message.channel.sendMessage(help_embed);
                        }
                        if(message.content === préfix + "Samourai" || message.content === préfix + "samourai"){
                            var help_embed = new Discord.RichEmbed()
                            .setColor("#7e7e7e")
                            .addField("Samourai", "Vous êtes une classe polyvalente moins résistante qu'un chevalier en therme d'armure mais qui se rattrape sur une faible magie")
                            .addField("Liste d'attaque", "?Samourai attaque")
                            .setImage("https://images2.alphacoders.com/593/593884.jpg")
                            .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                            message.channel.sendMessage(help_embed);
                        }
                        if(message.content === préfix + "Chevalier" || message.content === préfix + "chevalier"){
                            var help_embed = new Discord.RichEmbed()
                            .setColor("#00148f")
                            .addField("Chevalier", "Vous êtes une classe polyvalente, vous avez une bonne résistance physique et avez des capacités également polyvalente, vous êtes un couteau suisse, quelqu'un d'utile dans de nombreuses situations !")
                            .addField("Liste d'attaque", "?Chevalier attaque")
                            .setImage("https://wallpapertag.com/wallpaper/full/3/6/8/905963-fantasy-knight-wallpaper-1920x1080-for-1080p.jpg")
                            .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                            message.channel.sendMessage(help_embed);
                        }

                        if(message.content === préfix + "Juggernaut" || message.content === préfix + "juggernaut"){
                            var help_embed = new Discord.RichEmbed()
                            .setColor("#000f6c")
                            .addField("Chevalier", "Vous êtes le tank avec la plus grande resistance physique")
                            .addField("Liste d'attaque", "?Juggernaut attaque")
                            .setImage("https://i.pinimg.com/originals/63/0b/b1/630bb129c3862047dbb320e751629f80.jpg")
                            message.channel.sendMessage(help_embed);
                        }
                        if(message.content === préfix + "Seigneur" || message.content === préfix + "seigneur"){
                            var help_embed = new Discord.RichEmbed()
                            .setColor("#e5e5e5")
                            .addField("Seigneur", "Vous êtes de la classe seigneur, vous avez un très bon support en plus d'être un bon sac à PV, un rôle important dans un gros groupe comparé à cette éghoïste de juggernaut !")
                            .addField("Liste d'attaque", "?Seigneur attaque")
                            .setImage("https://images8.alphacoders.com/722/thumb-1920-722470.png")
                            message.channel.sendMessage(help_embed);
                        }
    
    /// ETAGE /////////////////////////////////////
     /// ETAGE /////////////////////////////////////
       /// ETAGE /////////////////////////////////////
         /// ETAGE /////////////////////////////////////
           /// ETAGE /////////////////////////////////////
            /// ETAGE /////////////////////////////////////
              /// ETAGE /////////////////////////////////////
                /// ETAGE /////////////////////////////////////
                   /// ETAGE /////////////////////////////////////

                   if(message.content === préfix + "étage -1"){
                    var help_embed = new Discord.RichEmbed()
                    .setColor("#ff3d3d")
                    .addField("**__Les activités de l'étage -1__**", ":park: **?Chemin ardent**\n:sunrise_over_mountains: **?Plaine chaude**\n:evergreen_tree: **?Forêt brulée**\n:fire: **Rivière brulée**\n:volcano: **?Volcan actif**")
                    .setImage("https://wallpapertag.com/wallpaper/full/2/5/e/433913-amazing-volcano-wallpaper-1920x1200-for-iphone-5s.jpg")
                    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                    message.channel.sendMessage(help_embed);
                }
                if(message.content === préfix + "Chemin ardent" || message.content === préfix + "chemin ardent"){
                    var help_embed = new Discord.RichEmbed()
                    .setColor("#ff3d3d")
                    .addField("**__Les activités du chemin ardent__**", ":crossed_swords: **Zone de combat :** ``?apparition_chemin``\n:dagger: **Zone de métier :** ``?chasser_chemin [lvl du métier]``\n:compass: **Quête :** ``?Quête chemin``")
                    .setImage("https://i.pinimg.com/originals/11/dc/a5/11dca50156689001ae82ac2bcd6662ec.jpg")
                    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                    message.channel.sendMessage(help_embed);
                }
                if(message.content === préfix + "Plaine chaude" || message.content === préfix + "plaine chaude"){
                    var help_embed = new Discord.RichEmbed()
                    .setColor("#ff3d3d")
                    .addField("**__Les activités des plaines chaudes__**", ":crossed_swords: **Zone de combat :** ``apparition_plaine_chaude``\n:sunflower: **Zone de métier :** ``?Cueillir_plaine [lvl du métier]``\n:compass: **Quête :** ``?Quête plaine``")
                    .setImage("https://wallup.net/wp-content/uploads/2018/03/19/549710-digital_art-volcano-smoke-lava-painting-colourfull-748x421.jpg")
                    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                    message.channel.sendMessage(help_embed);
                }
                if(message.content === préfix + "Forêt brulée" || message.content === préfix + "forêt brulée"){
                    var help_embed = new Discord.RichEmbed()
                    .setColor("#ff3d3d")
                    .addField("**__Les activités de la forêt brulée__**", ":evergreen_tree: **Zone de métier :** ``?bucheronner_plaine [lvl du métier]``")
                    .setImage("https://lyraina.files.wordpress.com/2012/05/12burningforest.jpg")
                    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                    message.channel.sendMessage(help_embed);
                }
                if(message.content === préfix + "Rivière brulée" || message.content === préfix + "rivière brulée"){
                    var help_embed = new Discord.RichEmbed()
                    .setColor("#ff3d3d")
                    .addField("**__Les activités de la rivière__**", "__**Vous pensiez qu'on pouver pêcher ici ?**__")
                    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                    message.channel.sendMessage(help_embed);
                }
                if(message.content === préfix + "Volcan actif" || message.content === préfix + "Volcan actif"){
                    var help_embed = new Discord.RichEmbed()
                    .setColor("#ff3d3d")
                    .addField("**__Les activités du volcan actif__**",":crown: **Entrée du donjon :** ``?Donjon volcan``\n:sunflower: **Zone de métier :** ``?Miner_volcan [lvl du métier]``")
                    .setImage("https://i.pinimg.com/originals/84/0d/f3/840df3f6ab21e600b028b18c0c9fd36f.jpg")
                    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg")
                    message.channel.sendMessage(help_embed);
                }








    //// LISTE D'ATTAQUE ///////////////////////////////////
    //// LISTE D'ATTAQUE ///////////////////////////////////
        //// LISTE D'ATTAQUE ///////////////////////////////////
        //// LISTE D'ATTAQUE ///////////////////////////////////
            //// LISTE D'ATTAQUE ///////////////////////////////////
            //// LISTE D'ATTAQUE ///////////////////////////////////
                //// LISTE D'ATTAQUE ///////////////////////////////////
                //// LISTE D'ATTAQUE ///////////////////////////////////
                    //// LISTE D'ATTAQUE ///////////////////////////////////
                    //// LISTE D'ATTAQUE ///////////////////////////////////

if(command === 'coup_epee'){
if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*1.8);
var min_value = Math.floor(`${args}`*0.8)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 81)
var y = new Discord.RichEmbed()
.setColor("#e21700")
.addField("**Vous infligez un bon coup d'épée dans le torse de votre adversaire**",":crossed_swords:" + result)
.setImage("https://i.pinimg.com/originals/d5/23/c5/d523c5604de784ddd5c0758b3a8c4145.jpg")
else if(nombre < 101)
var y = new Discord.RichEmbed()
.setColor("#000000")
.setAuthor("Votre épée ne touche pas la cible")
.setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
message.channel.send(y);
}


if(command === 'coup_perçant'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*1);
    var min_value = Math.floor(`${args}`*0.5)
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    if(nombre < 41)
    var y = new Discord.RichEmbed()
    .setColor("#e21700")
    .addField("**__Votre épée transperce le blocage de votre adversaire lui infligeant de grand dégats brute__**",":crossed_swords:" + result)
    .setImage("http://progmonot.com/wp-content/uploads/2014/09/sao-II-episode-13-Kirito-DeathGun-Zaza-792x356.png")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Votre épée ne brise pas la défense armure, lui infligeant de faible dégats", ":crossed_swords:" + result)
    .setImage("http://progmonot.com/wp-content/uploads/2014/09/sao-II-episode-13-Kirito-DeathGun-Zaza-792x356.png")
    message.channel.send(y);
}
if(command === 'coup_saignant'){
    if (!args.length) {
        return message.channel.send(`Merci d'écrire vos dégâts, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*1.2);
    var min_value = Math.floor(`${args}`*0.8)
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    var max_value = Math.floor(`${args}`*0.3);
    var min_value = Math.floor(`${args}`*0.1)
    var saignement = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    if(nombre < 70){
    var y = new Discord.RichEmbed()
    .setColor("#e21700")
    .addField("**Votre épée touchera donc votre cible venant lui infliger des dégats en plus de lui infliger des dégâts sur 3 tours(Cumul possible)**",":crossed_swords: " + result + "\n:drop_of_blood: " + saignement)
    .setImage("https://i.pinimg.com/originals/2c/c6/d5/2cc6d59191b85bd7f108ad763b179f93.jpg")
     } else if(nombre < 101){   
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .setAuthor("Votre épée ne touche pas la cible")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
     }
    message.channel.send(y);
}


if(command === 'coup_masse'){
if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*1.6);
var min_value = Math.floor(`${args}`*1)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 81)
var y = new Discord.RichEmbed()
.setColor("#e21700")
.addField("**Vous infligez un bon coup dans le visage de votre adversaire**",":crossed_swords:" + result)
.setImage("https://img4.goodfon.com/wallpaper/nbig/8/1e/japanese-power-monter-blade-manga-man-warrior-fight-armor-as.jpg")
else if(nombre < 101)
var y = new Discord.RichEmbed()
.setColor("#000000")
.setAuthor("Votre arme ne touche pas la cible")
.setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
message.channel.send(y);
}
if(command === 'coup_provocateur'){
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*1.35);
    var min_value = Math.floor(`${args}`*1)
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    if(nombre < 55)
    var y = new Discord.RichEmbed()
    .setColor("#e21700")
    .addField("**Vous infligez un bon coup d'épée sur votre adversaire et vous le provoqué durant 1 tours.**",":crossed_swords:" + result)
    .setImage("https://img5.goodfon.com/wallpaper/nbig/5/e1/raymond-minnaar-by-raymond-minnaar-death-knight-mertvets-ryt.jpg")
    else if(nombre < 80)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("**Vous infligez un bon coup dans le visage de votre adversaire**",":crossed_swords:" + result)
    .setImage("https://img5.goodfon.com/wallpaper/nbig/5/e1/raymond-minnaar-by-raymond-minnaar-death-knight-mertvets-ryt.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .setAuthor("Votre arme ne touche pas la cible")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
    }

if(command === 'coup_dague'){
if (!args.length) {
    return message.channel.send(`Merci d'écrire votre attaque, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*2);
var min_value = Math.floor(`${args}`*1.35)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 65)
var y = new Discord.RichEmbed()
.setColor("#e21700")
.addField("**Vous utilisez votre dague venant planter l'ennemie**",":crossed_swords:" + result)
.setImage("https://i.ytimg.com/vi/O_0CTVFL_Ns/maxresdefault.jpg")
else if(nombre < 101)
var y = new Discord.RichEmbed()
.setColor("#000000")
.setAuthor("Votre arme ne touche pas la cible")
.setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
message.channel.send(y);
}


if(command === 'coup_fatal'){
    if (!args.length) {
        return message.channel.send(`Merci d'écrire votre attaque, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*2.3);
    var min_value = Math.floor(`${args}`*1.6)
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    if(nombre < 55)
    var y = new Discord.RichEmbed()
    .setColor("#e21700")
    .addField("**Vous utilisez votre dague venant planter l'ennemie**",":crossed_swords:" + result)
    .setImage("https://i.pinimg.com/originals/2c/c6/d5/2cc6d59191b85bd7f108ad763b179f93.jpg")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .setAuthor("Votre arme ne touche pas la cible")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
    }
if(command === 'coup_simple'){
    if (!args.length) {
        return message.channel.send(`Merci d'écrire votre attaque, ${message.author}!`);
    }
    var nombre = Math.floor((Math.random() * 100) + 1);
    var max_value = Math.floor(`${args}`*1.7);
    var min_value = Math.floor(`${args}`*0.7)
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    if(nombre < 80)
    var y = new Discord.RichEmbed()
    .setColor("#e21700")
    .addField("**Vous utilisez votre dague venant planter l'ennemie**",":crossed_swords:" + result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/664758075353464853/213802.png")
    else if(nombre < 101)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .setAuthor("Votre arme ne touche pas la cible")
    .setImage("https://risibank.fr/cache/stickers/d225/22594-full.png")
    message.channel.send(y);
    }




//// LISTE D'ATTAQUE ///////////////////////////////////
    //// LISTE D'ATTAQUE ///////////////////////////////////
        //// LISTE D'ATTAQUE ///////////////////////////////////
        //// LISTE D'ATTAQUE ///////////////////////////////////
            //// LISTE D'ATTAQUE ///////////////////////////////////
            //// LISTE D'ATTAQUE ///////////////////////////////////
                //// LISTE D'ATTAQUE ///////////////////////////////////
                //// LISTE D'ATTAQUE ///////////////////////////////////
                    //// LISTE D'ATTAQUE ///////////////////////////////////
                    //// LISTE D'ATTAQUE ///////////////////////////////////
if(message.content === préfix + "Final slash") {
var result = new Discord.RichEmbed() 
.setColor("#0012ff")
.setImage("https://media.giphy.com/media/XCsUilazvibQcuvXup/giphy.gif")
.addField(":trident: **__Final slash__**", "**Arme en main, vous venez foncer sur votre adversaire, vous avez pris connaissance de son état vital et sachez qu'il n'en a plus pour très longtemps, vous venez abréger ses souffrances !**")
message.channel.send(result)
}
if(command === 'rafale_de_coups'){
if (!args.length) {
return message.channel.send(`Il faut mettre un nombre, ${message.author}!`);
}

var max_value = Math.floor(`${args}`*3.5);
var min_value = Math.floor(`${args}`*2.8)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
var y = new Discord.RichEmbed()
.setColor("#0012ff")
.addField("**Vous tenez votre arme fermement en main...Vous vous concentrez sur votre force physique ainsi que votre détermination avant d'infliger de lourds dégâts à la cible **",":crossed_swords:" + result)
.setImage("https://media1.tenor.com/images/e26e70a652ded0851347808067873e38/tenor.gif?itemid=14687288")
message.channel.send(y);
}

if(command === 'paralysie'){
if (!args.length) {
return message.channel.send(`Il faut mettre un nombre, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*2.2);
var min_value = Math.floor(`${args}`*1.8)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 30){
var y = new Discord.RichEmbed()
.setColor("#0012ff")
.addField("**D'une grande inspiration, votre arme n'est plus que partie intégrante de votre corps.Vous la soulevez.. puis l'abattez avec véhémence à une puis deux reprises sur ceux qui se dressent devant vous comme si de rien était.**", ":crossed_swords:" + result)
.addField("**Vous venez infliger une paralysie à plusieurs adversaires**",":busts_in_silhouette: 1")
.setImage("https://media.giphy.com/media/KbZTktant06AvqUwZz/giphy.gif")
} else if(nombre < 70){
var y = new Discord.RichEmbed()
.setColor("#0012ff")
.addField("**D'une grande inspiration, votre arme n'est plus que partie intégrante de votre corps.Vous la soulevez.. puis l'abattez avec véhémence à une puis deux reprises sur ceux qui se dressent devant vous comme si de rien était.**", ":crossed_swords:" + result)
.addField("**Vous venez infliger une paralysie à plusieurs adversaires**",":busts_in_silhouette: 2")
.setImage("https://media.giphy.com/media/KbZTktant06AvqUwZz/giphy.gif")
} else if(nombre < 101){
var y = new Discord.RichEmbed()
.setColor("#0012ff")
.addField("**D'une grande inspiration, votre arme n'est plus que partie intégrante de votre corps.Vous la soulevez.. puis l'abattez avec véhémence à une puis deux reprises sur ceux qui se dressent devant vous comme si de rien était.**", ":crossed_swords:" + result)
.addField("**Vous venez infliger une paralysie à plusieurs adversaires**",":busts_in_silhouette: 3")
.setImage("https://media.giphy.com/media/KbZTktant06AvqUwZz/giphy.gif")
}
message.channel.send(y);
}

if(command === 'soif_de_sang'){
    if (!args.length) {
    return message.channel.send(`Il faut mettre vos HP, ${message.author}!`);
    }
    var max_value = Math.floor(`${args}`/1.2);
    var min_value = Math.floor(`${args}`/1.4);
    var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
    var HP = Math.floor(`${args}`- result);
    var max = Math.floor(HP/1.5);
    var min = Math.floor(HP/1.8);
    var degats = Math.floor(Math.random() * (max - min + 1) ) + min;
    var nombre = Math.floor((Math.random() * 100) + 1);
    if(nombre < 70){
        var tour = 3;
    } else if(nombre < 101){
        var tour = 4;
    }
    var y = new Discord.RichEmbed()
    .setColor("#0012ff")
    .addField(":face_with_symbols_over_mouth: __**Soif de sang**__","**Vous venez invoquer une dague bien aiguisé venant vous la planter dans une des parties de votre corps**\n**Vous avec un bonus de dégâts : :crossed_swords: " + "+"+degats + "\n Il ne vous restes plus beaucoup d'HP :** :heartbeat: " + HP + "\n **Nombre de tours : **" + tour)
    .setImage("https://wallpapercart.com/wp-content/uploads/2019/03/free-download-dark-souls-HD-wallpaper-1920x1080.jpg")
    message.channel.send(y);
}


if(message.content === préfix + "Instinct de survie") {
    var result = new Discord.RichEmbed() 
    .setColor("#0012ff")
    .setImage("https://i.pinimg.com/originals/ea/2f/23/ea2f238c841768542bfcc232bd4fd22c.gif")
    .addField(":eye: :eye: **__Instinct de survie__**", "**Remarquant l'attaque arrivé et craignant ne pas pouvoir l'éviter, votre instinct de survie viendra vous épauler, venant éviter l'attaque mais également augmenter de 2 points votre esquive durant 3 tours**")
    message.channel.send(result)
    }

// ESQUIVE /////////////////////////////
// ESQUIVE /////////////////////////////
// ESQUIVE /////////////////////////////
// ESQUIVE /////////////////////////////
if(command === 'esquive'){
if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*2);
var min_value = Math.floor(`${args}`*1)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 65)
var y = new Discord.RichEmbed()
.setColor("#ff0000")
.addField("**Vous n'arrivez pas à esquiver et prenez une grande partie des dégâts**",":crossed_swords:" + result)
.setImage("https://i.imgur.com/LQzeVqf.png")
else if(nombre < 101)
var y = new Discord.RichEmbed()
.setColor("#51fcfe")
.setAuthor("Vous esquivez l'attaque")
.setImage("https://cdn.discordapp.com/attachments/499161815549476864/643101853327818772/ezgif.com-gif-maker_4.gif")
message.channel.send(y);
}
if(command === 'super_esquive'){
if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*2);
var min_value = Math.floor(`${args}`*1)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 60)
var y = new Discord.RichEmbed()
.setColor("#ff0000")
.addField("**Vous n'arrivez pas à esquiver et prenez une grande partie des dégâts**",":crossed_swords:" + result)
.setImage("https://i.imgur.com/LQzeVqf.png")
else if(nombre < 101)
var y = new Discord.RichEmbed()
.setColor("#51fcfe")
.setAuthor("Vous esquivez l'attaque")
.setImage("https://tenor.com/view/samurai-champloo-gif-10886504")
message.channel.send(y);
}
if(command === 'mega_esquive'){
if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*2);
var min_value = Math.floor(`${args}`*1)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 55)
var y = new Discord.RichEmbed()
.setColor("#ff0000")
.addField("**Vous n'arrivez pas à esquiver et prenez une grande partie des dégâts**",":crossed_swords:" + result)
.setImage("https://i.imgur.com/LQzeVqf.png")
else if(nombre < 101)
var y = new Discord.RichEmbed()
.setColor("#51fcfe")
.setAuthor("Vous esquivez l'attaque")
.setImage("https://www.fightersgeneration.com/nf7/char/alucard-castlevania-netflix-fight.gif")
message.channel.send(y);
}
if(command === 'supra_esquive'){
if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*2);
var min_value = Math.floor(`${args}`*1)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 50)
var y = new Discord.RichEmbed()
.setColor("#ff0000")
.addField("**Vous n'arrivez pas à esquiver et prenez une grande partie des dégâts**",":crossed_swords:" + result)
.setImage("https://i.imgur.com/LQzeVqf.png")
else if(nombre < 101)
var y = new Discord.RichEmbed()
.setColor("#51fcfe")
.setAuthor("Vous esquivez l'attaque")
.setImage("https://i.pinimg.com/originals/ea/2f/23/ea2f238c841768542bfcc232bd4fd22c.gif")
message.channel.send(y);
}
if(command === 'divin_esquive'){
if (!args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*2);
var min_value = Math.floor(`${args}`*1)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 45)
var y = new Discord.RichEmbed()
.setColor("#ff0000")
.addField("**Vous n'arrivez pas à esquiver et prenez une grande partie des dégâts**",":crossed_swords:" + result)
.setImage("https://i.imgur.com/LQzeVqf.png")
else if(nombre < 101)
var y = new Discord.RichEmbed()
.setColor("#51fcfe")
.setAuthor("Vous esquivez l'attaque")
.setImage("https://cdn.discordapp.com/attachments/499161815549476864/643101853327818772/ezgif.com-gif-maker_4.gif")
message.channel.send(y);
}





// blocage /////////////////////////////
// BLOCAGE /////////////////////////////
// blocage /////////////////////////////
// BLOCAGE /////////////////////////////

if(command === 'blocage'){
if (!args.length) {
    return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
}
var min = Math.floor(Math.min(`${args}`*0.5));
var max = Math.floor(Math.max(`${args}`*1.2)); 
var result = Math.floor(Math.random() * (max - min + 1) ) + min;
var y = new Discord.RichEmbed()
.setColor("#00d5ef")
.addField(":shield: ** Vous bloquez l'attaque difficilement et ne prenez qu'une partie des dégâts**",":anger: " + result)
.setImage("https://watchmojo.blog/wp-content/uploads/2017/10/03783e5db8d66964aecfa2ec007a687b7c4166f897af06179b85463c6db77c93.jpg")
message.channel.send(y);
}
if(command === 'blocage_supérieur'){
    if (!args.length) {
        return message.channel.send(`Il faut mettre un nombre crétin, ${message.author}!`);
    }
    var min = Math.floor(Math.min(`${args}`*0.5));
    var max = Math.floor(Math.max(`${args}`*1)); 
    var result = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#00d5ef")
    .addField(":shield: ** Vous bloquez l'attaque difficilement et ne prenez qu'une partie des dégâts**",":anger: " + result)
    .setImage("https://i.pinimg.com/originals/4b/87/9a/4b879aedde74130574874919921f6605.jpg")
    message.channel.send(y);
}
/// MONSTRE //////////////////////////
/// MONSTRE //////////////////////////
    /// MONSTRE //////////////////////////
        /// MONSTRE //////////////////////////
            /// MONSTRE //////////////////////////
                /// MONSTRE //////////////////////////
                    /// MONSTRE //////////////////////////
                        /// MONSTRE //////////////////////////
                            /// MONSTRE //////////////////////////
                                /// MONSTRE //////////////////////////
                                    /// MONSTRE //////////////////////////



if(message.content === préfix + "Crocro") {
var result = new Discord.RichEmbed() 
.addField("Nom du monstre", "**__Crocro__**")
.setColor("#ff8300")
.setImage("https://media.discordapp.net/attachments/641785123590635520/660925278540922920/Crocro.jpg?width=559&height=559")
.addField(":heart: HP","25")
.addField(":beginner: Passif", "Aucun")
.addField(":crossed_swords: Attaque", "?crocro_attaque")
.addField(":shield: Défense", "?crocro_défense  [dégats reçu]")
.addField(":moneybag: Récompenses", "?Récompenses_crocro [lvl]")
message.channel.send(result)
}
if(command === 'récompenses_crocro'){
if (!args.length) {
return message.channel.send(`Il faut mettre les dégats que prends le crocro, ${message.author}!`);
}
if(`${args}`==1){       
var minXP = Math.floor(Math.min(-5));
var maxXP = Math.floor(Math.max(5)); 
var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
}
if(`${args}`==2){
var minXP = Math.floor(Math.min(0));
var maxXP = Math.floor(Math.max(5)); 
var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
}
if(`${args}`==3){
var minXP = Math.floor(Math.min(-2));
var maxXP = Math.floor(Math.max(3)); 
var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
}
if(`${args}`<4){ 
var XP = Math.floor(30/`${args}`)
var XP = Math.floor(XP + XXP)
} else if (`${args}`== 4) {
var minXP = Math.floor(Math.min(0));
var maxXP = Math.floor(Math.max(3)); 
var XP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
} else if (`${args}`> 4) {
var XP = 0;
}
var minM = Math.floor(Math.min(5));
var maxM = Math.floor(Math.max(10)); 
var Mercure = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
var result2 = Math.floor((Math.random() * 100) + 1);
var Peau = 0;
if(result2 < 80){
Peau = Peau + 1;
} else if(result2 < 90){
Peau = Peau + 2;
} else if(result2 < 101){
Peau = 0;
}
var result3 = Math.floor((Math.random() * 100) + 1);
var Queu = 0;
if(result3 < 40){
Queu = Queu +1;
} else if(result3 < 96){
Queu = 0;
} else if(result3 < 101){
Queu = Queu + 2;

}
var result4 = Math.floor((Math.random() * 100) + 1);
var Oeil = 0;
if(result4 < 25){
Oeil= Oeil +1;
} else if(result4 < 96){
Oeil = 0;
}
if(XP<0){
    XP=0;
}

var y = new Discord.RichEmbed()
.addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:euro: **Mercure :** " + Mercure + "\n:rat: **Peau de crocro :** "+ Peau +"\n:bug: **Queu de crocro :** " + Queu + "\n:eye: **Oeil de crocro :** " + Oeil)
.setImage("https://static.ankama.com/dofus/www/game/items/200/15243.png")
message.channel.send(y);
}



if(message.content === préfix + "crocro_attaque" || message.content === préfix + "Crocro_attaque"){
var min = Math.floor(Math.min(7));
var max = Math.floor(Math.max(15)); 
var y = Math.floor(Math.random() * (max - min + 1) ) + min;
var result = Math.floor((Math.random() * 100) + 1);
if(result < 80)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField("Le crocro vous fonces dessus venant vous infliger des petits dégats", ":crossed_swords:" + y)
else if (result < 101)
var y = new Discord.RichEmbed()
.setTitle("Le crocro adversaire rate son attaque")
.setColor("#ff8300")
message.channel.sendMessage(y);
}
if(command === 'crocro_défense'){
if (!args.length) {
return message.channel.send(`Il faut mettre les dégats que prends le crocro, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*1);
var min_value = Math.floor(`${args}`*0.6)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 91)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField(":shield: Le crocro ne peu pas bloquer l'attaque, seul sa chaire réduire les dégats",":anger: " + result)
else if (nombre< 101)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField("Le crocro vient donc rapidement se déplacer sur le côté, venant éviter votre attaque",":man_running:  ")
message.channel.send(y);
}



if(message.content === préfix + "Nid'rats") {
var result = new Discord.RichEmbed() 
.addField("Nom du monstre", "**__Nid'rats__**")
.setColor("#ff8300")
.setImage("https://media.discordapp.net/attachments/641785123590635520/660925652085637147/Roi_des_Rats.png?width=990&height=560")
.addField(":heart: HP","40")
.addField(":beginner: Passif", "Aucun")
.addField(":crossed_swords: Attaque", "?Nidrats_attaque")
.addField(":shield: Défense", "Aucune")
.addField(":moneybag: Récompenses", "?Récompenses_Nidrats [lvl]")
message.channel.send(result)
}
if(message.content === préfix + "Nidrats_attaque"){
var min = Math.floor(Math.min(15));
var max = Math.floor(Math.max(30)); 
var y = Math.floor(Math.random() * (max - min + 1) ) + min;
var result = Math.floor((Math.random() * 100) + 1);
if(result < 95)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField("Un grand nombre de bébés rats déscend du Nid venant se jeter sur vous !", ":crossed_swords:" + y)
else if (result < 101)
var y = new Discord.RichEmbed()
.setTitle("Un Crocro sort du Nid'rats")
.setImage("https://media.discordapp.net/attachments/641785123590635520/660925278540922920/Crocro.jpg?width=559&height=559")
.setColor("#ff8300")
message.channel.sendMessage(y);
}

if(command === 'récompenses_nidrats'){
    if (!args.length) {
    return message.channel.send(`Il faut mettre les dégats que prends le crocro, ${message.author}!`);
    }
    if(`${args}`==1){
    var minXP = Math.floor(Math.min(-5));
    var maxXP = Math.floor(Math.max(5)); 
    var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
    }
    if(`${args}`==2){
    var minXP = Math.floor(Math.min(0));
    var maxXP = Math.floor(Math.max(5)); 
    var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
    }
    if(`${args}`==3){
    var minXP = Math.floor(Math.min(-2));
    var maxXP = Math.floor(Math.max(3)); 
    var XXP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
    }
    if(`${args}`<4){ 
    var XP = Math.floor(30/`${args}`)
    var XP = Math.floor(XP + XXP)
    } else if (`${args}`== 4) {
    var minXP = Math.floor(Math.min(0));
    var maxXP = Math.floor(Math.max(3)); 
    var XP = Math.floor(Math.random() * (minXP - maxXP + 1) ) + minXP;
    } else if (`${args}`> 4) {
    var XP = 0;
    }
    var minM = Math.floor(Math.min(5));
    var maxM = Math.floor(Math.max(10)); 
    var Mercure = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
    var result2 = Math.floor((Math.random() * 100) + 1);
    var Peau = 0;
    if(result2 < 80){
    Peau = Peau + 1;
    } else if(result2 < 90){
    Peau = Peau + 2;
    } else if(result2 < 101){
    Peau = 0;
    }
    var result3 = Math.floor((Math.random() * 100) + 1);
    var Queu = 0;
    if(result3 < 40){
    Queu = Queu +1;
    } else if(result3 < 96){
    Queu = 0;
    } else if(result3 < 101){
    Queu = Queu + 2;
    
    }
    if(XP<0){
        XP=0;
    }
    var y = new Discord.RichEmbed()
    .addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:euro: **Mercure :** " + Mercure + "\n:rat: **Peau de crocro :** "+ Peau +"\n:bug: **Queu de crocro :** " + Queu)
    .setImage("https://static.ankama.com/dofus/www/game/items/200/15243.png")
    message.channel.send(y);
    }

if(message.content === préfix + "Rat alpha") {
var result = new Discord.RichEmbed() 
.addField("Nom du monstre", "**__Rat alpha__**")
.setColor("#ff8300")
.setImage("https://cdn.discordapp.com/attachments/641775756191727648/661684852432699412/lava-rat-sarah-stanaland.png")
.addField(":heart: HP","70")
.addField(":beginner: Passifs", ":fire: Immunisé contre les dégats de feu")
.addField(":crossed_swords: Attaque", "?Alpha_attaque")
.addField(":shield: Défense", "?Alpha_défense [dégats reçu]")
.addField(":moneybag: Récompenses", "?Récompenses_Rat_Alpha [lvl]")
message.channel.send(result)
}
if(command === 'récompenses_rat_alpha'){
if (!args.length) {
return message.channel.send(`Il faut mettre le lvl que vous avez, ${message.author}!`);
}
var minXP = Math.floor(Math.min(30));
var maxXP = Math.floor(Math.max(40)); 
var XP = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
if(`${args}`<4){
var A = Math.floor(4-`${args}`);
var XP = Math.floor(XP*(1+(0.2*A)));
}
if(`${args}`>4){
var A = Math.floor(4-`${args}`);
var XP = Math.floor(XP*(1+(0.3*A)));
}
var minM = Math.floor(Math.min(20));
var maxM = Math.floor(Math.max(30)); 
var Mercure = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
if(XP<0){
    XP=0;
}
var y = new Discord.RichEmbed()
.setTitle(":rat: Récompenses du rat alpha")
.addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:euro: **Mercure :** " + Mercure + "\n**SOON**")
.setImage("https://static.ankama.com/dofus/www/game/items/200/15243.png")
message.channel.send(y);
}

if(message.content === préfix + "Alpha_attaque"){
var min = Math.floor(Math.min(20));
var max = Math.floor(Math.max(40)); 
var y = Math.floor(Math.random() * (max - min + 1) ) + min;   
var result = Math.floor((Math.random() * 100) + 1);
if(result < 85)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField("Le rat Alpha fonce sur vous à vives alures avant de vous mordre fermement !", ":crossed_swords:" + y)
else if (result < 101)
var y = new Discord.RichEmbed()
.setTitle("**L'alpha viendra hurler au sang avant de montrer ses crocs en signe de menace")
.setColor("#ff8300")
message.channel.sendMessage(y);
}

if(command === 'alpha_défense'){
if (!args.length) {
return message.channel.send(`Il faut mettre les dégats que prends l'Alpha, ${message.author}!`);
}
var max_value = Math.floor(`${args}`*1.2);
var min_value = Math.floor(`${args}`*0.9)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value; 
var alea = Math.floor((Math.random() * 100) + 1);
if(alea<60){
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField(":shield: Le rat subira l'attaque, sa faible résistance diminuera de peu les dégats !",":anger: " + result)
} else if(alea < 101){
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.setTitle(":rat: Le rat viendra éviter l'attaque en faisant un bond sur le côté !")

}
message.channel.send(y);
}


if(message.content === préfix + "Aragnator") {
var result = new Discord.RichEmbed() 
.addField("Nom du monstre", "**__Aragnator__**")
.setColor("#ff8300")
.setImage("https://cdn.discordapp.com/attachments/641785123590635520/660927665192173638/215387ac70dda5e6b97acb390da2e505.png")
.addField(":heart: HP","100")
.addField(":beginner: Passif", ":fire: Immunisé aux dégâts de feu")
.addField(":crossed_swords: Attaque", "?Aragnator_attaque")
.addField(":shield: Défense", "?Aragnator_défense  [dégâts reçu]")
.addField(":moneybag: Récompenses", "?Récompenses_Aragnator [lvl]")
message.channel.send(result)
}  
if(message.content === préfix + "Aragnator_attaque"){
var min = Math.floor(Math.min(20));
var max = Math.floor(Math.max(40)); 
var y = Math.floor(Math.random() * (max - min + 1) ) + min;
var mins = Math.floor(Math.min(5));
var maxs = Math.floor(Math.max(15)); 
var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
var result = Math.floor((Math.random() * 100) + 1);
if(result < 70)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField("L'Aragnator vous fonce dessus à pleine vitesse piquant vers l'avant !", ":crossed_swords:" + y)
else if (result < 101)
var y = new Discord.RichEmbed()
.addField("l'Argnator vient ouvrir sa bouche venant faire comme un lance flamme", ":crossed_swords:" + y)
.addField("Les flammes auront pour effet de vous brûler pendant 3 tours, à chaque tour vous recevrez donc une petite quantité de dégâts, seul l'armure magique réduit les dégâts", ":fire: " + x)
.setImage("https://media.discordapp.net/attachments/641775756191727648/661299374256816188/0e7b8a36ac4c90b0b3f2dbf5afd9a07b328bccbcv2_hq.png?width=419&height=559")
.setColor("#ff8300")
message.channel.sendMessage(y);
}

if(command === 'aragnator_défense'){
if (!args.length) {
return message.channel.send(`Il faut mettre les dégats que prends le crocro, ${message.author}!`);
}
var nombre = Math.floor((Math.random() * 100) + 1);
var max_value = Math.floor(`${args}`*1.3);
var min_value = Math.floor(`${args}`*0.7)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value;
if(nombre < 76)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField(":shield: L'Aragnator viendra réduire les dégats grâce à ses écailles",":anger: " + result)
else if (nombre< 101)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.setTitle(":bat: L'Aragnator va voler en l'air et faire des loopings pour ne pas se faire toucher")
message.channel.send(y);
}
if(command === 'récompenses_aragnator'){
if (!args.length) {
return message.channel.send(`Il faut mettre ton lvl; ${message.author}!`);
}
var minXP = Math.floor(Math.min(20));
var maxXP = Math.floor(Math.max(30)); 
var XP = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
if(`${args}`<4){
var A = Math.floor(4-`${args}`);
var XP = Math.floor(XP*(1+(0.2*A)));
}
if(`${args}`>4){
var A = Math.floor(4-`${args}`);
var XP = Math.floor(XP*(1+(0.3*A)));
}
var result2 = Math.floor((Math.random() * 100) + 1);
if(result2 < 80){
Peau = Peau + 1;
} else if(result2 < 90){
Peau = Peau + 2;
} else if(result2 < 101){
Peau = 0;
}
var result4 = Math.floor((Math.random() * 100) + 1);
var Corne = 0;
if(result4 < 30){
Corne= Corne +1;
} else if(result4 < 96){
Corne = 0;
}
if(XP<0){
    XP=0;
}

var minM = Math.floor(Math.min(15));
var maxM = Math.floor(Math.max(25)); 
var Mercure = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
var y = new Discord.RichEmbed()
.setTitle(":bat: Récompenses de l'argnator")
.addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:euro: **Mercure :** " + Mercure + "\n:smiling_imp: **peau d'Aragnator:** "+ Peau +"\n:large_blue_diamond: **ailes d'Aragnator :** " + Corne)
.setImage("https://static.ankama.com/dofus/www/game/items/200/15243.png")
message.channel.send(y);
}


if(message.content === préfix + "Gnome pyromane") {
var result = new Discord.RichEmbed() 
.addField("Nom du monstre", "**__Gnome pyromane__**")
.setColor("#ff8300")
.setImage("https://media.discordapp.net/attachments/641785123590635520/660928322817228800/03837f895424ab2c5ae6987a2404e383.png?width=447&height=559")
.addField(":heart: HP","80")
.addField(":shield: Armure","5")
.addField(":beginner: Passifs", ":fire: Immunisé aux dégâts de feu")
.addField(":crossed_swords: Attaque", "?Gnome_attaque")
.addField(":shield: Défense", "?Gnome_défense  [dégats reçu]")
.addField(":moneybag: Récompenses", "?Récompenses_Gnome_pyromane [lvl]")
message.channel.send(result)
}    

if(message.content === préfix + "Gnome_attaque"){
var min = Math.floor(Math.min(20));
var max = Math.floor(Math.max(30)); 
var y = Math.floor(Math.random() * (max - min + 1) ) + min;
var result = Math.floor((Math.random() * 100) + 1);
if(result < 70)
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField("Le Gnome fera apparaiître une boule de feu dans sa main gauche et viendra vous l'envoyer à petite puissance !\n l'armure ne réduira pas les dégâts !", ":crossed_swords:" + y)
else if (result < 101)
var y = new Discord.RichEmbed()
.setTitle("Le Gnome essayera de lancer un boule de feu mais cette dernière vous froleras seulement")
.setColor("#ff8300")
message.channel.sendMessage(y);
}
if(command === 'gnome_défense'){
if (!args.length) {
return message.channel.send(`Il faut mettre les dégats que prends le crocro, ${message.author}!`);
}
var max_value = Math.floor(`${args}`*0.8);
var min_value = Math.floor(`${args}`*0.6)
var result = Math.floor(Math.random() * (max_value - min_value + 1) ) + min_value; 
var y = new Discord.RichEmbed()
.setColor("#ff8300")
.addField(":shield: Notre chère petit gnome placera ses bras en croix de manière à bloquer l'attaque",":anger: " + result)
message.channel.send(y);
}

if(command === 'récompenses_gnome_pyromane'){
if (!args.length) {
return message.channel.send(`Il faut mettre ton lvl; ${message.author}!`);
}
var minXP = Math.floor(Math.min(20));
var maxXP = Math.floor(Math.max(30)); 
var XP = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
if(`${args}`<4){
var A = Math.floor(4-`${args}`);
var XP = Math.floor(XP*(1+(0.2*A)));
}
if(`${args}`>4){
var A = Math.floor(4-`${args}`);
var XP = Math.floor(XP*(1+(0.3*A)));
}
var minM = Math.floor(Math.min(15));
var maxM = Math.floor(Math.max(25)); 
var Mercure = Math.floor(Math.random() * (minM - maxM + 1) ) + minM;
var Peau = 0;
var result2 = Math.floor((Math.random() * 100) + 1);
if(result2 < 80){
Peau = Peau + 1;
} else if(result2 < 90){
Peau = Peau + 2;
} else if(result2 < 101){
Peau = 0;
}   
var result4 = Math.floor((Math.random() * 100) + 1);
var Corne = 0;
if(result4 < 30){
Corne= Corne +1;
} else if(result4 < 96){
Corne = 0;
}
if(XP<0){
    XP=0;
}
var y = new Discord.RichEmbed()
.setTitle(":bat: Récompenses du gnome pyromane")
.addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:euro: **Mercure :** " + Mercure + "\n:smiling_imp: **Peau de gnome :** "+ Peau +"\n:large_blue_diamond: **Cornes de gnome :** " + Corne)
.setImage("https://static.ankama.com/dofus/www/game/items/200/15243.png")
message.channel.send(y);
}



if(message.content === préfix + "Rongeurs") {
var result = new Discord.RichEmbed() 
.addField("Nom du monstre", "**__Rongeurs__**")
.setColor("#ff8300")
.setImage("https://media.discordapp.net/attachments/641785123590635520/660929529170362415/Cranium-rats-5e-e1539179461219.png")
.addField(":heart: HP","100")
.addField(":beginner: Passifs", "Aucune")
.addField(":crossed_swords: Attaque", "?Rongeurs_attaque")
.addField(":shield: Défense", "?Rongeurs_défense  [dégats reçu]")
.addField(":moneybag: Récompenses", "?Récompenses_Rongeurs [lvl]")
message.channel.send(result)
}    

// APPARITION ETAGE 1 ///////////
                // APPARITION ETAGE 1 ///////////
                                // APPARITION ETAGE 1 ///////////
                                // APPARITION ETAGE 1 ///////////
                                                // APPARITION ETAGE 1 ///////////
// APPARITION ETAGE 1 ///////////
                                                // APPARITION ETAGE 1 ///////////
            // APPARITION ETAGE 1 ///////////
                                                // APPARITION ETAGE 1 ///////////
// APPARITION ETAGE 1 ///////////
                                                // APPARITION ETAGE 1 ///////////

if(command === 'apparition_chemin') {
if (!args.length) {
return message.channel.send(`Il faut mettre le nombre de joueur !, ${message.author}!`);
}
if (talkedRecently.has(message.author.id)) {
    message.channel.send("Attendre 10 minutes" + message.author);
} else {
var result = Math.floor((Math.random() * 100) + 1);
if(result < 80){
var x = 1;
} else if (result < 90){
var x = 2;
} else if (result < 101){
var x = 3;
}
var ennemies= Math.floor(`${args}`*x);
var A = 0;
var B = 0;
var C = 0;
while(ennemies!=0){  
var random = Math.floor((Math.random() * 100) + 1);
if(random < 80){
    A = A+1;
} else if (random < 95){
    B = B+1;
} else if (random < 101){
    C = C+1;
}
ennemies=ennemies-1;
} 
if(C < 1){
var mes = new Discord.RichEmbed() 
.setTitle(":vs: Des monstres viennent d'apparaitre !")
.addField(":rat: __**Crocro**__", "**Nombre de crocro :** " + A)
.addField(":rat: **__Nid'rats__**", "**Nombre de nid'rats :** "+B)
.setColor("#ff8300")
.setImage("https://i.pinimg.com/originals/71/71/c0/7171c0b7ba3b53ca7931581fc54f1f9e.jpg")
} else if(C > 0){
var mes = new Discord.RichEmbed()
.setTitle(":vs: Des monstres viennent d'apparaitre !\n Mais attention ! L'Alpha approche !")
.addField(":rat: __**Crocro**__", "**Nombre de crocro :** " + A)
.addField(":rat: **__Nid'rats__**", "**Nombre de nid'rats :** "+B)
.addField(":rat: **_Rat alpha__**", "**Nombre d'Alpha :** " + C)
.setColor("#ff8300")
.setImage("https://i.pinimg.com/originals/71/71/c0/7171c0b7ba3b53ca7931581fc54f1f9e.jpg")
}
message.channel.send(mes);
talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 600000);
    }
}

if(command === 'apparition_plaine_chaude') {
if (!args.length) {
return message.channel.send(`Il faut mettre le nombre de joueur !, ${message.author}!`);
}
if (talkedRecently.has(message.author.id)) {
    message.channel.send("Attendre 10 minutes" + message.author);
} else {
var result = Math.floor((Math.random() * 100) + 1);
if(result < 80){
var x = 1;
} else if (result < 95){
var x = 2;
} else if (result < 101){
var x = 3;
}
var ennemies= Math.floor(`${args}`*x);
var random = Math.floor((Math.random() * 100) + 1);
var A = 0;
var B = 0;
while(ennemies!=0){  
if(random < 60){
    A = A+1;
} else if (random < 101){
    B = B+1;
}
ennemies=ennemies-1;
} 
message.channel.send("**__Des monstres viennent apparaitre__**")
var mes = new Discord.RichEmbed() 
.addField(":bat: __**Aragnator**__", "**Nombre d'aragnator :** " + A)
.addField(":japanese_ogre: **__Gnome pyroman__**", "**Nombre de gnome :** "+B)
.setColor("#ff8300")
.setImage("https://cdn.discordapp.com/attachments/454694319396356128/661506598258343948/restricted___underworld_premade_by_frozenstocks_dbcjnpp-fullview.png")
message.channel.send(mes);

talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    },  600000);
    }
}    




if(command === 'miner_volcan'){
    if (!args.length) {
    return message.channel.send(`Il faut mettre votre level de metier, ${message.author}!`);
    }
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendre 1 minutes==== " + message.author);
    } else {
        
        var minXP = Math.floor(Math.min(0));
        var maxXP = Math.floor(Math.max(1)); 
        var rubi = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(0));
        var maxXP = Math.floor(Math.max(3)); 
        var Adam = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(5));
        var maxXP = Math.floor(Math.max(30)); 
        var cobl = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(3));
        var maxXP = Math.floor(Math.max(5)); 
        var XP = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        if(`${args}`>=3){
            var XP = XP;
            var Adam = Adam*1.5;
            var rubi = rubi*1.5;
            var cobl = cobl*1.5;
        }
        var y = new Discord.RichEmbed()
        .setColor("#b9b9b9")
        .addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:brown_circle:  **Coble :** " + cobl + "\n:black_circle:  **Adamin :** "+ Adam +"\n:large_orange_diamond:  **Rubi :** " + rubi)
        .setImage("https://cdn.discordapp.com/attachments/641777958490472478/665929848182669361/Dr.png")
        message.channel.send(y);


    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}
if(command === 'chasser_chemin'){
    if (!args.length) {
    return message.channel.send(`Il faut mettre votre level de metier, ${message.author}!`);
    }
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
    } else {
        var result = Math.floor((Math.random() * 100) + 1);
        if(result < 20){
        rubi = 1
        }else if(result < 101){
        rubi = 0
        }
        var minXP = Math.floor(Math.min(0));
        var maxXP = Math.floor(Math.max(3)); 
        var Adam = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(0));
        var maxXP = Math.floor(Math.max(2)); 
        var cobl = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(2));
        var maxXP = Math.floor(Math.max(5)); 
        var XP = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        if(`${args}`>=3){
            var XP = XP;
            var Adam = Adam*1.5;
            var rubi = rubi*1.5;
            var cobl = cobl*1.5;
        }
        var y = new Discord.RichEmbed()
        .setColor("#ff3d3d")
        .addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:brown_circle:  **Patte de larve :** " + cobl + "\n:black_circle:  **Aile de crofly:** "+ Adam +"\n:large_orange_diamond:  **Coeur de crona:** " + rubi)
        .setImage("https://cdn.discordapp.com/attachments/641777958490472478/667050544636100628/CI_3DS_MonsterHunterStories_Towns_vulcano.png")
        message.channel.send(y);


    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}


if(command === 'cueillir_plaine'){
    if (!args.length) {
    return message.channel.send(`Il faut mettre votre level de metier, ${message.author}!`);
    }
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Il faut attendre 60minutes. " + message.author);
    } else {
        var result = Math.floor((Math.random() * 100) + 1);
        if(result < 10){
        rubi = 1
        }else if(result < 101){
        rubi = 0
        }
        var minXP = Math.floor(Math.min(0));
        var maxXP = Math.floor(Math.max(3)); 
        var Adam = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(0));
        var maxXP = Math.floor(Math.max(2)); 
        var cobl = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        var minXP = Math.floor(Math.min(3));
        var maxXP = Math.floor(Math.max(4)); 
        var XP = Math.floor(Math.random() * (maxXP - minXP + 1) ) + minXP;
        if(`${args}`>=3){
            var XP = XP;
            var Adam = Adam*1.5;
            var rubi = rubi*1.5;
            var cobl = cobl*1.5;
        }
        var y = new Discord.RichEmbed()
        .setColor("#1bae00")
        .addField("////////////////////////////////////",":diamonds: **XP :** " + XP +"\n:brown_circle:  **Rosalis :** " + cobl + "\n:black_circle:  **Fleur de lave :** "+ Adam +"\n:large_orange_diamond:  **Fleur de magma** " + rubi)
        .setImage("https://cdn.discordapp.com/attachments/641777958490472478/667001718541910087/latest.png")
        message.channel.send(y);


    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 3600000);
    }
}










if(message.content === préfix + "Roll") {
var result = Math.floor((Math.random() * 100) + 1);
if(result < 50)
var result = new Discord.RichEmbed() 
.setColor("#ff0000")
.setAuthor(result)
else if(result < 101)
var result = new Discord.RichEmbed() 
.setColor("#1fff00")
.setAuthor(result)
message.channel.send(result);

}    

if(message.content === préfix + "Fuite") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous venez réussir à fuir")
    .setImage("https://thumbs.gfycat.com/YellowWarlikeGrayling-size_restricted.gif")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("La fuite échoue")
    .setImage("https://i.ytimg.com/vi/2blQE3whQ5c/hqdefault.jpg")
    message.channel.send(result);
    
    }             



    



})
client.on('ready', function () {
    console.log("Je suis connecté !")
    client.user.setGame("?Help");

    })
