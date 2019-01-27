

const Discord = require('discord.js');

const client = new Discord.Client();

var préfix = "?";

client.login(process.env.TOKEN);

client.on('message', message => {

    if(message.content === préfix + "Help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Overlord")
        .setDescription("Vous aurez un résumé de l'univers")
        .addField("Personnage et stats", "C'est ici que vous comprendrez ce que vous devrez faire apres votre fiche")
        .addField("Race", "Liste des espèces")
        .addField("Classe", "Liste des classes")
        .addField("Combats", "Explication des combats")
        .setImage("https://1.bp.blogspot.com/-GY5W6jVP850/WNwKqzuXizI/AAAAAAAABuM/AlfAEZ7FuDAK5y_qnZy0qp06wvCqM826QCLcB/s1600/Overlord_Characters.png")
        .setFooter("Menu de base")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à utiliser la commande d'aide.")
    }

    if(message.content === préfix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Overlord")
        .setDescription("Vous aurez un résumé de l'univers")
        .addField("Personnage et stats", "C'est ici que vous comprendrez ce que vous devrez faire apres votre fiche")
        .addField("Race", "Liste des espèces")
        .addField("Classe", "Liste des classes")
        .addField("Combats", "Explication des combats")
        .setImage("https://www.animenachrichten.de/wp-content/uploads/2017/07/Overlord-Review.jpg")
        .setFooter("Menu de base")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à utiliser la commande d'aide.")
    }


    if(message.content === préfix + "Overlord"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Overlord résumé")
        .setDescription("L'univers se déroule en 2126 dans un jeu qui se nomme YGGDRASIL. Celui-ci devenant trop vieux finisa par fermer et enferma avec lui les derniers joueurs connecté. Les PNJ deviennent soudainement comme de simple personne Lambda. Le monde se déroule dans un univers médiéval fantaisy avec de nombreuses races. Vous incarnerez un PNJ selon des choix spécifiques")
        .setImage("https://www.animenachrichten.de/wp-content/uploads/2017/07/Overlord-Review.jpg")
        .setFooter("Menu Overlord  ")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à utiliser la commande d'aide.")
    }

    if(message.content === préfix + "Objectif"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Les objectifs")
        .setDescription("Si vous avez écrit cette commande c'est que vous ne savez pas quoi faire, vous n'avez donc aucun bute et vous faites litéralement chier. Voici donc quelques exemple d'objectif")
        .addField("Attendre les mini events", "Si un staff remarque que votre personnage fait du RP passif depuis un bon moment, il a le droit sans meme vous prévenir de jouer un PNJ qui ne sera pas forcement hostile mais histoire de créer de l'activité, apres rien ne vous interdits de défoncer le PNJ(faite attention, n'attaquez pas tout les PNJ car si vous tombez sur un PNJ puissant sa risque de faire mal)")
        .addField("Attendre les events de combat", "Il n'y a pas de réel date, mais cela se passera souvent en weekend, un PNJ crée de toute piece du style gros boss de MMORPG pourra enuyer une faction, biensur selons si les joueurs arrivent à affronter le boss ou non, il y aura des répercusions")
        .addField("Attendr", "Liste des classes")
        .addField("Combats", "Explication des combats")
        .setImage("https://1.bp.blogspot.com/-GY5W6jVP850/WNwKqzuXizI/AAAAAAAABuM/AlfAEZ7FuDAK5y_qnZy0qp06wvCqM826QCLcB/s1600/Overlord_Characters.png")
        .setFooter("Menu de base")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à utiliser la commande d'aide.")
    }
 
 
    
    if(message.content.startsWith(préfix + "Clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas l'autorisation pour utiliser cette commande.");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Merci d'entrer le nombre de messages à supprimer.");
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(``)
        }
        )
    }

    if(message.content === préfix + "Race"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Humain")
        .setDescription("Vous êtes un humain normal sans malus ni bonus")
        .addField("Gobelin", "Vous êtes un Gobelin avec des caractéristiques particulières")
        .addField("Vampire","Vous êtes un vampire qui peut s'averé être très dangereux")
        .addField("Lézard", "Vous êtes un lézard, vous avez une bonne défense")
        .addField("Elf", "Vous êtes un Elf, une espece noble et rare")
        .addField("Automaton", "Vous êtes un Automaton, intérieurement vous ressemblez fortement à une machine mais extérieurement...")
        .addField("Pour la précision sur les stats et autre", "?[Nom de votre race]")
        .setFooter("Menu des races RP")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Humain"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#939696")
        .setTitle("Humain")
        .setDescription("Vous êtes un humain, vous seul maitrisez la magie sainte")
        .setImage("https://vignette.wikia.nocookie.net/overlord8371/images/d/dc/Blue_Rose.jpg/revision/latest?cb=20180803234950&path-prefix=fr")
        .setFooter("Menu Humain")
        message.channel.sendMessage(help_embed);
    }

// FAUNE : Utiliser la présentation suivante comme "Presets" pour les futurs fiches de faune.
{
        if(message.content === préfix + "Gobelin"){
            var help_embed = new Discord.RichEmbed()
            .setColor("#859900")
            .setTitle("Gobelin")
            .setDescription("Vous êtes un Gobelin, vous êtes la race la plus fragile, néanmoins ! vous avez une compétence unique à votre espece")
            .addField("Bonus", "Vous attaquez toujours en premier et vous avez des compétences uniques")
            .addField("Malus", "Vous avez 40HP en moins")
            .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/0/00/Goblin_Troop_Anime.png/revision/latest?cb=20180831233640")
            .setFooter("Menu du Gobelin")
            message.channel.sendMessage(help_embed);
    }
}
// Fiche de la faune de Nanpa Shima :
{
    if(message.content === préfix + "Vampire"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#dc322f")
        .addField("Vampire", "Vous êtes un ou une vampire, vous avez des capacités uniques qui se débloquent au fils du temps")
        .addField("Bonus", "Vous avez des compétences uniques")
        .addField("Malus", "Vous commencez avec 20HP en moins")
        .setImage("https://img-9gag-fun.9cache.com/photo/a47NvYd_700b.jpg")
        .setFooter("Menu Vampire")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Lézard"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#20ff00")
        .addField("Lézard", "Vous êtes un Lézard, une espèce qui en vaut le coup d'oeil")
        .addField("Bonus", "Vous avez 40 HP en plus")
        .addField("Malus", "Vous attaquez toujours en dernier et n'avez aucune compétences uniques pour votre espèce")
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/7/72/Overlord_II_EP03_101.png/revision/latest?cb=20180127052134")
        .setFooter("Menu Lézard")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Automaton"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#7c7c70")
        .addField("Automaton", "Vous êtes un Automaton, vous avez le corps d'une machine à l'apparence humaine")
        .addField("Bonus", "Vous êtes immunisé contre le poison et vous seul pouvez utiliser des compétences en rapport avec des armes à feux")
        .addField("Malus", "????")
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/3/35/Overlord_III_EP01_011.png/revision/latest?cb=20180713084418")
        .setFooter("Menu Automaton")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Elf"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#90c830")
        .addField("Elf", "Vous êtes un Elf, Vous êtes une race plutôt rare")
        .addField("Bonus", "Vous avez 20 de mana en plus et vous seul pourrez avoir la branche d'évolution en rapport avec la magie de la nature")
        .addField("Malus", "Vous avez 20HP en moins")
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/0/07/Overlord_EP01_097.png/revision/latest?cb=20150713021025")
        .setFooter("Menu Elf")
        message.channel.sendMessage(help_embed);
    }




    if(message.content === préfix + "Classe"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Classe")
        .setDescription("Voici les classes disponibles, aux fils de vos lvl up des variantes de votre classe seront disponibles")
        .addField("Voleur", "Spécialisé dans les dégats, une seul ligne d'évolution")
        .addField("Combattant", "2 ligne d'évolution, dégats au corps à corps")
        .addField("Ranger", "Archer, faible variante mais se concentre sur les dégats")
        .addField("Mage", "Dégats magiques et compétences uniques, beaucoup de variante")
        .setFooter("Menu des classes")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Voleur"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Voleur", "Vous êtes la classe qui fait le plus de dégats avec le ranger")
        .addField("Assassin", "évolution du voleur à partir de ???")
        .setImage("https://coubsecure-s.akamaihd.net/get/b96/p/coub/simple/cw_timeline_pic/c6b4f22ba33/4f5366739caf7b081fecf/big_1474128121_image.jpg")
        .setFooter("Menu du voleur")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Combattant"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("Combattant", "Vous avez 20HP en plus")
        .addField("Chevalier", "évolution du combattant à partir de ???")
        .addField("Paladin", "évolution du combattant à partir de ???")
        .setImage("https://cdn.discordapp.com/attachments/532644881588551683/534445613354582046/unknown.png")
        .setFooter("Menu du Combattant")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Paladin"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("Paladin", "Vous avez 180HP en plus")
        .addField("Gardien", "évolution du combattant à partir de ???")
        .addField("Clerc", "évolution du combattant à partir de ???")
        .setImage("https://i.pinimg.com/736x/fc/fd/ba/fcfdba80b33336f4f04e5eb8510086d2--armor-concept-concept-art.jpg")
        .setFooter("Menu du Combattant")
        message.channel.sendMessage(help_embed);
    }


    if(message.content === préfix + "Ranger"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#019521")
        .addField("Ranger", "Vous êtes la classe qui fait le plus de dégats avec le ranger")
        .addField("Archer", "évolution du Ranger à partir de ???")
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/5/59/Overlord_EP07_015.png/revision/latest?cb=20150822091615")
        .setFooter("Menu Ranger")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Mage"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField("Mage", "Vous avez 20 de mana en plus et vous êtes la classe qui a le plus de mana et vous l'utilisez le plus souvent")
        .addField("Druid", "évolution du Mage à partir de ??? /!\ exclusivement réservé aux elfes")
        .addField("Sorcier", "évolution du Mage à partir de ???")
        .setImage("https://static.zerochan.net/Evileye.%28Overlord%29.full.2317125.png")
        .setFooter("Menu Mage")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Combats"){
        var help_embed = new Discord.RichEmbed()
        .addField("Les combats", "Après avoir créé votre personnage, vous aurez un nombre d'HP, un nombre d'attaque et un nombre de Mana. Le combat se déroule par du tour par tour, certaines compétences utilisent du mana, d'autre non et si jamais vous voulez attaquer vous devriez utiliser certaine commandes, il y a plein de coups différents qui se débloquent en fonction de votre level et de votre classe")
        .addField("Liste des compétences de Race", "Ici vous trouverez les attaques uniques de votre nature")
        .addField("Liste des coups de classe", "Ici vous trouverez la liste des coups disponibes selon votre classe")
        .setFooter("Menu Combat")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Liste des coups de classe"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .addField("Voleur", "?Coup d'épée / ?Blocage simple / ?Voleur ultime")
        .addField("Combattant", "?Coup d'épée / ?Blocage simple / ?Combattant ultime")
        .addField("Ranger", "?Tir à l'arc / ?Blocage simple / ?Ranger ultime")
        .addField("Mage", "?Magie simple / ?Blocage simple / ?Mage ultime")
        .setFooter("Menu des coups de classe, à finir")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Liste des compétences de Race"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .addField("Humain", "-Ceci n'est pas un vide")
        .addField("Gobelin", "?Cor du gobelin / !Cor du général gobelin (débloquable seulement au bout du 3eme palier)")
        .addField("Vampire", "?Drain de vie / !Transformation (débloquable seulement au bout du 3eme palier)")
        .addField("Mage", "!Récupération de mana")
        .setFooter("Menu des compétences de race, à finir")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Personnage et stats"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Personnage")
        .setDescription("Bon, ici on arrive sur les parties compliquées, quand votre fiche sera acceptée il faudra que vous vous rename du style: Pseudo [HP / Mana] sur un cas un peu plus serieux cela donnerait Bernard [80-100] après vous pouvez changer l'esthetisme du moment que cela reste compréhensible.")
        .addField("Comment évoluer ?", "Imaginons que vous êtes voleur et que vous voulez évoluer en assassin, cela dépendrait non pas de vos actions mais de votre implication dans le RP grace au bot. En effet chaque level que vous gagnez correspondra à un point de caractéristique, pour voir comment les utiliser: ?PC ")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Les points de caractéristique")
        .setDescription("On arrive sur la partie technique. à chaque level que vous donnes le bot, vous gagnerez 1PC, ce point sera un moyen de savoir à partir de quand vous debloquerez une améliration")
        .addField("Catégorie Race", "Faites ?PC [Nom de votre Race]")
        .addField("Catégorie classe", "Faites ?PC [Nom de votre classe]")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC Humain"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#939696")
        .setTitle("PC Humain")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Sainte bénédiction")
        .addField("25PC", "Vous obtenez la compétence ?Invocation divine")
        .addField("40PC", "Vous obtenez une nouvelle compétence qui vous permet de réanimer un mort(utilisable seulement 1 fois par mois et ne peus être utilisé seulement sur un mort récent) ?Prière incessante")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC Vampire"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#dc322f")
        .setTitle("PC Vampire")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Drain de vie")
        .addField("25PC", "Vous obtenez la compétence ?Blocage surhumain")
        .addField("40PC", "Vous obtenez la capacité à vous transformer(en cours de travaux)")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC Gobelin"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#859900")
        .setTitle("PC Gobelin")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Cor du gobelin")
        .addField("25PC", "Vous obtenez la compétence ?Hurlement frénétique")
        .addField("40PC", "Vous obtenez l'objet d'invocation ?Cor du général gobelin")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC Lézard"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#859900")
        .setTitle("PC Lézard")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?écailles renforcées")
        .addField("25PC", "Vous obtenez 300P")
        .addField("40PC", "Vous obtenez la compétence ?La survie ou la mort")
        message.channel.sendMessage(help_embed);
    }

    
    if(message.content === préfix + "PC Automaton"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#7c7c70")
        .setTitle("PC Automaton")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Magic gun")
        .addField("25PC", "Vous obtenez la compétence ?Réparage automatique")
        .addField("40PC", "Vous obtenez la compétence ?Tire pleine puissance")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC Elf"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#90c830")
        .setTitle("PC Elf")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Soins de la nature")
        .addField("25PC", "Vous obtenez la compétence ?Mana de la nature")
        .addField("40PC", "Vous obtenez la compétence ?Soins de mere nature")
        message.channel.sendMessage(help_embed);
    }


    if(message.content === préfix + "PC Voleur"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("PC Voleur")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("5PC", "Vous obtenez l'attaque spécial ?Coup bas")
        .addField("10PC", "Vous obtenez la compétence ?Voleur ultime")
        .addField("15PC", "Vous pouvez devenir Assassin")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC Mage"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .setTitle("PC Mage")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("5PC", "Vous obtenez la compétence spécial ?Soins de bas rang")
        .addField("10PC", "Vous obtenez la compétence ?Mage ultime")
        .addField("15PC", "Vous pouvez devenir Druid ou Sorcier")
        message.channel.sendMessage(help_embed);
    }


    if(message.content === préfix + "PC Combattant"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .setTitle("PC Combattant")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("5PC", "Vous obtenez 20hp en plus")
        .addField("10PC", "Vous obtenez la compétence ?Combattant ultime")
        .addField("15PC", "Vous pouvez devenir Paladin ou Chevalier")
        message.channel.sendMessage(help_embed);
    }

    
    if(message.content === préfix + "PC Ranger"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#019521")
        .setTitle("PC Ranger")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("5PC", "Vous obtenez la compétence ?Tire rapide")
        .addField("10PC", "Vous obtenez la compétence ?Ranger ultime")
        .addField("15PC", "Vous pouvez devenir Archer")
        message.channel.sendMessage(help_embed);
    }














    if(message.content === préfix + "Coup d'épée"){
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligez un coup d'épée rapide qui inflige", y)
        .setImage("https://cdn.discordapp.com/attachments/534821670217711626/535086034459820042/Coup_depee.gif")
        message.channel.send(y);
    }

    if(message.content === préfix + "Coup bas"){
        
         var min = Math.floor(Math.min(20));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous essayez de lui infliger un coup de dague puissant. Vous perdez 40 de mana", y)
        .setImage("https://media.giphy.com/media/XptviXceQG8pjLZ0FD/giphy.gif")
        message.channel.send(y);
    }

    if(message.content === préfix + "Tire rapide"){
        var min = Math.floor(Math.min(20));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tentez de lui envoyer une fleche rapide en direction de son torse, cherchant à viser un point vital. Vous perdez 30 de mana", y)
        message.channel.send(y);
    }

    if(message.content === préfix + "Soins de bas rang"){
        var min = Math.floor(Math.min(15));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous soignez une personne au choix, ou bien vous. En contrepartie vous perdez 20 de mana", y)
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/7/71/Overlord_III_EP07_131.png/revision/latest/scale-to-width-down/640?cb=20180828050559")
        message.channel.send(y);
    }


    if(message.content === préfix + "Blocage simple"){
        var min = Math.floor(Math.min(5));
        var max = Math.floor(Math.max(15)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage simple et réussisez à bloquer", y)
        .setImage("https://media.giphy.com/media/67uARzea7eiZ9P0U1I/giphy.gif")
        message.channel.send(y);
    }

    

    if(message.content === préfix + "Tir à l'arc"){
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tirez une fleche rapide sur votre ennemie", y)
        .setImage("https://media.giphy.com/media/5QI6YQxisFehaLlQ8I/giphy.gif")
        message.channel.send(y);
    }

    
    if(message.content === préfix + "Magie simple"){
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous envoyez un sort de bas rang", y)
        .setImage("https://media.giphy.com/media/lYfMRNGRIyOOQo9PKl/giphy.gif")
        message.channel.send(y);
    }


    if(message.content === préfix + "Assassin ultime"){
        var min = Math.floor(Math.min(150));
        var max = Math.floor(Math.max(200)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Vous executez 2 coups puissants et précis qui infligent du", y)
        .setImage("https://media.giphy.com/media/39jPRRkGyd4xc4EysM/giphy.gif")
        message.channel.send(y);
    }

    if(message.content === préfix + "Voleur ultime"){   
        var min = Math.floor(Math.min(55));
        var max = Math.floor(Math.max(80)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous executez un back stab qui inflige du", y)
        .setImage("https://media.giphy.com/media/1woWwqPRWY6xGVHQ8M/giphy.gif")
        message.channel.send(y);
    }

    if(message.content === préfix + "Combattant ultime"){
        var min = Math.floor(Math.min(20));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#76ff00")
        .addField("Vous régénérez", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(20));
        var maxs = Math.floor(Math.max(40)); 
        var l = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var l = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous executez un violent coup qui inflige", l)
        .setImage("https://cdn.discordapp.com/attachments/532644881588551683/535086945420967937/Combattant_ultime.gif")
        message.channel.send(l);
    }

    if(message.content === préfix + "Ranger ultime"){
        var min = Math.floor(Math.min(55));
        var max = Math.floor(Math.max(80)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous effectuez un tir parfait", y)
        .setImage("https://media.giphy.com/media/uUl8lkfxMYLi5q9wp8/giphy.gif")
        message.channel.send(y);
    }

    if(message.content === préfix + "Mage ultime"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(50)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00f5ff")
        .addField("Vous régénérez du Mana", y)
        .setImage("https://media.giphy.com/media/Bp4Iz5pItPXI3ErsAf/giphy.gif")
        message.channel.send(y);
        var mins = Math.floor(Math.min(20));
        var maxs = Math.floor(Math.max(40)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed() 
        .setColor("#ff8b00")
        .addField("Vous executez un sort de base qui inflige du", w)
        message.channel.send(w);
    }

    if(message.content === préfix + "Cor du gobelin"){
        var min = Math.floor(Math.min(5));
        var max = Math.floor(Math.max(25)); 
        var result = Math.floor(Math.random() * (max - min + 1) ) + min;
        var result = new Discord.RichEmbed()
        .setColor("#039c06")
        .addField("Vous invoquez 3gobelins, ils attaquent chacun leur tour", result)
        message.channel.send(result);
        var mins = Math.floor(Math.min(10));
        var maxs = Math.floor(Math.max(25)); 
        var y = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var y = new Discord.RichEmbed()
        .setColor("#039c06")
        .addField("Le deuxieme attaque du", y)
        message.channel.send(y);
        var minx = Math.floor(Math.min(15));
        var maxx = Math.floor(Math.max(25)); 
        var w = Math.floor(Math.random() * (maxx - minx + 1) ) + minx;
        var w = new Discord.RichEmbed()
        .setColor("#039c06")
        .addField("Le troisieme attaque du", w)
        .setImage("https://media.giphy.com/media/wJsMKBq8e0V95wuYOk/giphy.gif")
        message.channel.send(w)



    }

    if(message.content === préfix + "Drain de vie"){
        var min = Math.floor(Math.min(20));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed() 
        .setColor("#76ff00")
        .addField("Vous régénérez", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(35));
        var maxs = Math.floor(Math.max(60)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Et vous infligez de gros dégats", w)
        .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
        message.channel.send(w);
    }


    if(message.content === préfix + "écailles renforcées"){
        var min = Math.floor(Math.min(15));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#859900")
        .setImage("http://33.media.tumblr.com/eb728f63a9481148b5432b7bdc343a86/tumblr_neantpDeML1su5akfo2_1280.jpg")
        .addField("Votre corps deviens plus résistant et réduisez tout les dégats pendant 3 tours de", y)
        message.channel.send(y);
    }

    if(message.content === préfix + "Magic gun"){
        var min = Math.floor(Math.min(60));
        var max = Math.floor(Math.max(100)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous pouvez uniquement utiliser cette compétence à longue porté. Vous visez un point vital et infligez du", y)
        .setImage("https://media.giphy.com/media/vgvVcpHvIEjO9yPQqg/giphy.gif")
        message.channel.send(y);
    }





    if(message.content === préfix + "Régénération de mana"){
        var min = Math.floor(Math.min(25));
        var max = Math.floor(Math.max(100)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00fdff")
        .addField("Vous rénérez du mana hors combat et vous recevez", y)
        message.channel.send(y);
          
    }

    
    if(message.content === préfix + "Blocage surhumain"){
        var min = Math.floor(Math.min(150));
        var max = Math.floor(Math.max(200)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setClient("Test", "test")
        .setImage("https://media.giphy.com/media/fBMynhfzwdau1sLmPi/giphy.gif")
        message.channel.send(y);
          
    }

    if(message.content === préfix + "Sainte bénédiction "){
        var y = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setAuthor("Vous vous mettez à genoux et priez pour votre dieu, une douce lumière vient vous éclairer et vous confères une zone autour de vous infranchissable pendant 30minutes. Attention, si vous recevez plus de 150 de dégats alors votre zone de protection sera détruite")
        message.channel.sendMessage(y);
          
    }
    


    
    




}

 



// Flore : Utiliser la présentation suivante comme "Presets" pour les futurs fiches de flore.

// Fiche de la flore de Nanpa Shima :
    
// Endroit de Nanpa Shima :
{
    if(message.content === préfix + "Préset Biome"){
        var help_embed = new Discord.RichEmbed()
        .addField("Nom :", "[Inserer Nom]")
        .addField("Description :", "[Inserer une description]")
        .setFooter(" ")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Liste Biome"){
        var help_embed = new Discord.RichEmbed()
        .addField("Plaine", "[Plaine]")
        .addField("Lac", "[Lac]")
        .addField("Forêt tempéré", "[Forêt tempéré]")
        .addField("Forêt humide", "[Forêt humide]")
        .addField("Forêt tropical", "[Forêt tropical]")
        .addField("Forêt sèche", "[Forêt sèche]")
        .addField("Forêt très sèche", "[Forêt très sèche]")
        .addField("Maquis", "[Maquis]")
        .addField("Oasis", "[Oasis]")
        .addField("Plage", "[Plage]")
        .addField("Lagune", "[Lagune]")
        .addField("Banquise", "[Banquise]")
        .addField("Montagne", "[Montagne]")
        .addField("Forêt de Pin", "[Forêt de Pin]")
        .addField("Toundra", "[Toundra]")
        .addField("Plaine neigeuse", "[Plaine neigeuse]")
        .addField("Volcan", "[Volcan]")
        .addField("Canyon", "[Canyon]")
        .addField("Falaise", "[Falaise]")
        .addField("Grève", "[Grève]")
        .addField("Mer bas fond", "[Mer bas fond]")
        .addField("Mer haut fond", "[Mer haut fond]")
        .addField("Fleuve", "[Fleuve]")
        .addField("Désert erg", "[Désert erg]")
        .addField("Désert reg", "[Désert reg]")
        .addField("Bayou", "[Bayou]")
        .addField("Delta", "[Delta]")
        .addField("Mangrove", "[Mangrove]")
        .addField("Tourbière", "[Tourbière]")
        .addField("Forêt pluvial", "[Forêt pluvial]")
        .setFooter("Liste des biomes de l'île")
        message.channel.sendMessage(help_embed);
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
}
if(message.content === préfix + "Créature des marécages"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Créature des marécages")
    .setColor("#4e8b27")
    .addField("Point de vie", "50")
    .addField("Attaque", "?Petit coup de griffe")
    .addField("Attaque spécial", "En dessous de 15HP il ne l'utilise qu'une fois ?Petit cracha d'acide")
    .addField("Défense", "?Petite peau")
    .setImage("http://img.over-blog-kiwi.com/1/21/05/60/20150615/ob_c78fcd_cameron-diaz-en-robe-transparente-refe.jpg")
    message.channel.sendMessage(help_embed);
}



if(message.content === préfix + "Petit coup de griffe"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(20)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#4e8b27")
    .addField("La créature vous donnes des petits coups de griffe"  , y)
    .addBlankField("test")
    message.channel.send(y);
}








if(message.content === préfix + "Petit cracha d'acide"){
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (y > 20)
    var y = new Discord.RichEmbed()
    .setColor("#4e8b27")
    .addField("La créature vous craches violament contre votre torse pour ", y)
    if (y < 20)
    var y = new Discord.RichEmbed()
    .setColor("#4e8b27")
    .addField("La créature vous craches de l'acide sur votre torse mais sa n'a pas l'air de faire grand effet, vous avez de la chance !", y)
    message.channel.send(y);
}



if(message.content === préfix + "Petite peau"){
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(10)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#4e8b27")
    .addField("La créature se crispe legerement sur elle même et de fine couche d'acie sort de sa peau réduissant l'attaque", y)
    message.channel.send(y);
}





if(message.content === préfix + "Lézard primitif"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("Point de vie", "150")
    .addField("Attaque", "?Lézard primitif attaque")
    .addField("Défense", "?Lézard primitif défense")
    .setImage("https://cdn.discordapp.com/attachments/538837191061930012/539004107151638528/f697e4377e28191f7f9c57361e20aedb.png")
    message.channel.sendMessage(help_embed);
}



if(message.content === préfix + "Lézard primitif attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 60)
    var y = new Discord.RichEmbed()
    .addField("le Lézard est trop lent et vous manques de vous toucher", "0")
        if(result > 60)
    var y = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("le grand lézard vous attrapes dans sa bouche, il gigote sa tête de droite à gauche et vous envoyer voler se prendre un arbre, vous ne pouvez pas attaquer au prochain tour", y)
    message.channel.sendMessage(y);
}




if(message.content === préfix + "Lézard primitif défense"){

    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)

    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(100)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("La créature se protege à l'aide de sa carapace", y);

    if(result > 50)

    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(40)); 
    var x = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("La créature vous laisses l'attaquer mais attention il est résistant", x)

    if (result < 50)
    message.channel.send(y);
     if (result > 50)
    message.channel.send(x);
}





if(message.content === préfix + "Arbre maudit"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("Point de vie", "120")
    .addField("Attaque", "?Arbre maudit attaque")
    .addField("Défense", "?Arbre maudit défense")
    .setImage("https://cdn.discordapp.com/attachments/538837191061930012/539055088652779521/monsters-magic-the-gathering-fantasy-art-swamps-wallpaper-516738.jpg")
    message.channel.sendMessage(help_embed);
}









if(message.content === préfix + "Arbre maudit attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 80)
    var y = new Discord.RichEmbed()
    .addField("L'arbre maudit grinça de son bras et vous balaya d'un mouvement grand mouvement lourd et lent", y)
    .setColor("#217504")
        if(result > 80)
    var y = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("L'arbre maudit arrache un arbre du sol pour ensuite vous donner un violent coup avec", y)
    .addField("Il en profite ensuite pour se regénérer", "15HP")
    message.channel.sendMessage(y);
}






if(message.content === préfix + "Arbre maudit défense"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("L'arbre maudit place ses longs bras devant lui pour bloquer les coups", y)
    .setColor("#217504")
    message.channel.send(y);
}






if(message.content === préfix + "Arrive dans les marécages") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Apparition marécage")
    if(50 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}



if(message.content === préfix + "Apparition marécage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60){
    var result = new Discord.RichEmbed() 
    .setTitle("Une petite créature fonce dans votre direction")
    .setColor("#4e8b27")
    .addField("Point de vie", "50")
    .addField("Attaque", "?Petit coup de griffe")
    .addField("Attaque spécial", "En dessous de 15HP il ne l'utilise qu'une fois ?Petit cracha d'acide")
    .addField("Défense", "?Petite peau")
    .setImage("http://img.over-blog-kiwi.com/1/21/05/60/20150615/ob_c78fcd_cameron-diaz-en-robe-transparente-refe.jpg")}
    else if(result < 90){
    var result = new Discord.RichEmbed() 
    .setTitle("L'abre qui était juste à votre gauche se mit à bouger vous prennant pour cible")
    .setColor("#217504")
    .addField("Point de vie", "120")
    .addField("Attaque", "?Arbre maudit attaque")
    .addField("Défense", "?Arbre maudit défense")
    .setImage("https://cdn.discordapp.com/attachments/538837191061930012/539055088652779521/monsters-magic-the-gathering-fantasy-art-swamps-wallpaper-516738.jpg")}
    else if(result < 99){
    var result = new Discord.RichEmbed() 
    .setTitle("Une carapace qui ressemblait à un simple terrain boueux se mit à se lever, laissant apparaitre un ancien Lézard, celui-ci emetta un crie qui fit trembler les arbres")
    .setColor("#217504")
    .addField("Point de vie", "150")
    .addField("Attaque", "?Lézard primitif attaque")
    .addField("Défense", "?Lézard primitif défense")
    .setImage("https://cdn.discordapp.com/attachments/538837191061930012/539004107151638528/f697e4377e28191f7f9c57361e20aedb.png")}

    message.channel.send(result);

}



  
});














client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("?Help");
});

