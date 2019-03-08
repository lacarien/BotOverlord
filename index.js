

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
        .addField("Métiers", "Liste des métiers")
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
        .addField("Métiers", "Liste des métiers")
        .setImage("https://www.animenachrichten.de/wp-content/uploads/2017/07/Overlord-Review.jpg")
        .setFooter("Menu de base")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à utiliser la commande d'aide.")
    }
    
    if(message.content === préfix + "Métiers"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Liste des métiers")
    .setDescription("Chaque métier a ses avantages, faite la commande du métier pour plus de détails")
    .addField("Garde du royaume", "Uniquement résérvé aux Combattants et rangers Humain (rien ne vous empêches de vous infiltrer dans la garde)")
    .addField("Tavernier", "Tout le monde peut le devenir du moment que les espèces humanoîdes cachent leur véritable identité sauf les personnes recherchés")
    .addField("Aventurier", "Tout le monde peut le devenir du moment que les espèces humanoîdes cachent leur véritable identité")
    .addField("Pour d'autre métiers", "?Sous-Métiers")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Sous-Métiers"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Liste des sous-métiers")
    .setDescription("Les sous métiers sont des 2eme jobs, vous ne pouvez en avoir qu'un seul")
    .addField("Chasseur", "Utilisez la commande: ?Chasser \n dans une forêt, vous devrez rester 3heurs dans le channel sans pouvoir partir ou faire une autre action (vous aurez le droit de parler)")
    .addField("Bucheron", "Utilisez la commande: ?Coupe du bois \n dans une forêt, vous devrez rester 3heurs dans le channel sans pouvoir partir ou faire une autre action (vous aurez le droit de parler)")
    .addField("Mineur", "Utilisez la commande: ?Miner \n dans la grotte, vous devrez rester 3heurs dans le channel sans pouvoir partir ou faire une autre action (vous aurez le droit de parler)")
    .addField("Pêcheur", "Utilisez la commande: ?Pêche \n dans une zone comportant de l'eau, vous devrez rester 3heurs dans le channel sans pouvoir partir ou faire une autre action (vous aurez le droit de parler)")

    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Chasser"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous traquez des animaux de la forêt et recevez", y + " :third_place: ")
    .setColor("#1dab1a")
    message.channel.send(y);
}
if(message.content === préfix + "Coupe du bois"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous coupez du bois et recevez", y + " :third_place: ")
    .setColor("#06ff02")
    message.channel.send(y);
}

if(message.content === préfix + "Pêche"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous pêchez des poissons et recevez", y + " :third_place: ")
    .setColor("#00ffde")
    message.channel.send(y);
}
if(message.content === préfix + "Miner"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous minez et recevez", y + " :third_place: ")
    .setColor("#636766")
    message.channel.send(y);
}
    
    if(message.content === préfix + "Aventurier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Aventurier")
    .setDescription("Pour devenir aventurier il faut se présenter au batiment des aventuriers")
    .addField("Participer à des quêtes ?", "Tout est expliquer au tableau des quêtes néanmoins le gain de rang en équipe est partagé")
   
    message.channel.sendMessage(help_embed);
}

    if(message.content === préfix + "Tavernier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Tavernier")
    .setDescription("Pour se faire recruter il suffit de demander à un staff(évitez de pings le fondateur...)")
    .addField("Tavernier", "En tant que Tavernier, vous êtes chargé de donner à boire et à manger au personne qui rentre dans la taverne, c'est vous qui imposez vos prix. Mais aussi de louer des chambres ")
    .addField("Chambre classique 1 Lit", "Tout le monde peut rentrer en détruisant la porte...C'est une chambre vraiment...Crade \n Prix: 5Pièces de bronze par jour")
    .addField("Chambre classique 2 Lits", "Tout le monde peut rentrer en détruisant la porte...C'est une chambre vraiment...Crade \n Prix: 8Pièces de bronze par jour")
    .addField("Chambre privée 1 Lit", "Chambre propre, elle est en sécurité, impossible pour une autre personne d'y rentrer en théorie \n Prix: 15Pièces de bronze par jour")
    .addField("Chambre privée 2 Lits", "Chambre propre, elle est en sécurité, impossible pour une autre personne d'y rentrer en théorie \n Prix: 22Pièces de bronze par jour")
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "Garde du royaume"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Garde du Royaume")
    .setDescription("Pour être garde vous devez faire une demande au royaume au poste de garde((au royaume)un staff jouera le PNJ). Vous avez une hiérarchie et le plus haut gradé peut donner des ordres à celui qui est en dessous. Chaque semaine vous gagnerez un salaire celon votre status. Et celon vos actes. Vous êtes dans l'OBLIGATION d'aider un village / le royaume / ou bien un villageois en cas de problème.")
    .addField("Comment le grade de départ est-il défini ? et comment évoluer ?", "Celon votre histoire RP et pour évoluer il suffit de faire son boulot...Correctement")
    .addField("Garde Novice joueur", "Salaira par jour: 10 pièces de bronze \n vous devez toujours être accompagné d'un garde")
    .addField("Garde joueur", "Salaire par jour: 20 Pièces de bronze")
    .addField("SG garde joueur", "Salaire par jour: 25 Pièces de bronze et 2 Pièces d'argent")
    .addField("Chef garde", "Salaire : ??")
    .addField("Pourquoi le salaire est-il si important ?", "Car comme je l'ai dit une fois garde vous êtes obligé d'intervenir face à une mance même si celle-ci est plus forte que vous...Mme si vous êtes level 5 et qu'un vampire level 40 fout le bordel, il est en votre devoir d'essayer de le stopper(étant donné que le meta RP est interdit), après si ils vous défonces et que vous entez que c'est impossible, la c'est compréhensible de fuir, mais au minimum essayer")

    message.channel.sendMessage(help_embed);
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
        .addField("Bonus", "Vous avez une classe privilégié ")
        .addField("Malus", "A obligatoirement un maître")
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

    if(message.content === préfix + "Démon"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#20ff00")
        .addField("Démon", "Vous êtes un Démon, vous avez une forme humanoïde bien que certain trait de votre apparence peuvent être différents que celui d'un humain")
        .addField("Bonus", "Vous régénèrez 2 fois plus vitevoleur mana et leur HP")
        .addField("Malus", "Vous attaquez toujours en dernier et n'avez aucune compétences uniques pour votre espèce")
        .setImage("https://www.manga-news.com/public/images/vols/overlord-light-novel-12-jp.jpg")
        .setFooter("Menu Lézard")
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
    
    if(message.content === préfix + "Assassin"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Voleur", "Vous êtes la classe qui fait le plus de dégats avec le ranger")
        .addField("Grand Assassin", "évolution de l'assassin à partir de 30PC")
        .addField("Grand illusionist", "évolution de l'assassin à partir de 30PC")
        .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540206387842514985/Screenshot_2019-01-29-09-55-06-1.png")
        .setFooter("Menu de l'assassin")
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
        .addField("Paladin", "Vous gagnez en plus 100HP")
        .addField("Gardien", "évolution du Paladin à partir de 30PC et d'une mise à l'épreuve...Inconnu...")
        .addField("Clerc", "évolution du Paladin à partir de 30PC et d'une bénédiction...Inconnu")
        .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540955169005764671/Screenshot_2019-01-29-09-54-16-1.png")
        .setFooter("Menu du Paladin")
        message.channel.sendMessage(help_embed);
    }
    
    if(message.content === préfix + "Chevalier"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .addField("Chevalier", "Vous êtes un chevalier, ne faites pas attention à la vitalité du Paladin... Il perdra en puissance contrairement à vous  ")
        .addField("Champion", "évolution du Chevalier à partir de 30PC et d'une mise à l'épreuve...Inconnu...")
        .addField("Berserk", "évolution du Chevalier à partir de 30PC et d'une bénédiction...Inconnu")
        .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540975588173676579/1104530.png")
        .setFooter("Menu du Chevalier")
        message.channel.sendMessage(help_embed);
    }



    if(message.content === préfix + "Ranger"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#019521")
        .addField("Ranger", "Vous êtes la classe qui fait le plus de dégats avec le voleur")
        .addField("Archer", "évolution du Ranger à partir de ???")
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/5/59/Overlord_EP07_015.png/revision/latest?cb=20150822091615")
        .setFooter("Menu Ranger")
        message.channel.sendMessage(help_embed);
    }
    
    if(message.content === préfix + "Archer"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#019521")
        .addField("Ranger", "Vous êtes l'évolution du Ranger, vous avez une faible défense comparé à vos dégats")
        .addField("Grand Archer", "évolution du l'archer à partir de ???")
        .addField("Classe Automaton", "évolution du l'archer à partir de ???, uniquement pour les Automatons")
        .setImage("https://animeforums.net/uploads/monthly_2015_05/frame-1.jpg.b08b0dbda880aa8aa5892634662eac96.jpg")
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
    
    if(message.content === préfix + "Druid"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField("Druid", "Vous gagnez 30 de Mana")
        .addField("Grand Druid", "évolution du Druid à partir de ???")
        .setImage("https://images.alphacoders.com/767/thumb-350-767907.jpg")
        .setFooter("Menu Druid")
        message.channel.sendMessage(help_embed);
    }
    
       if(message.content === préfix + "Sorcier"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField("Sorcier", "Vous êtes un sorcier, vous avez beaucoup de mana mais par contre les HP...Pensez à ne pas la jouer solitaire")
        .addField("Nécromancien", "évolution du Sorcier à partir de 30PC  et d'un évènement...Inconnu")
        .addField("Grand Sorcier", "évolution du sorcier à partir de 30PC et d'un évènement....Inconnu")
        .addField("Prêtre", "évolution du sorcier à partir de 30PC et d'une bénédiction....Inconnu")
        .setImage("https://media.discordapp.net/attachments/534758707561496580/540985871625748480/8a7f7af52ec8e3d4bb71482cfdb3fa1b.jpg?width=365&height=585")
        .setFooter("Menu Sorcier")
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
        .addField("25PC", "Vous obtenez 300HP")
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
    
    if(message.content === préfix + "PC Druid"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .addField("PC Druid", "Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?Soins de Druid + ?Sort naturel + ?Blocage naturel + 100 de Mana")
        .addField("20PC", "?Soins de la forêt")
        .addField("25PC", "?Druid ultime")
        .addField("30PC", "Vous pouvez devenir grand Druid")

        .setFooter("Menu Druid")
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

     
   if(message.content === préfix + "PC Paladin"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .setTitle("PC Paladin")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?P Coup d'épée + 60 de mana + ?Blocage supérieure")
        .addField("20PC", "?Provocation simple")
        .addField("25PC", "?Paladin ultime")
        .addField("30PC", "Vous pouvez passer Clerc ou gardien")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC Chevalier"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .setTitle("PC Chevalier")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?C Coup d'épée + ?Blocage amélioré ")
        .addField("20PC", "?Coup multiple")
        .addField("25PC", "?Chevalier ultime")
        .addField("30PC", "Vous pouvez passer Berserk ou Champion")
        message.channel.sendMessage(help_embed);
    }

    
    if(message.content === préfix + "PC Sorcier"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00ffe7")
        .setTitle("PC Sorcier")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?Sort simple + ?Blocage magique + ?Sort de soins + 70 de Mana")
        .addField("20PC", "?Tornade de flamme")
        .addField("25PC", " ?Sorcier ultime")
        .addField("30PC", "Vous pouvez passer Nécromancien, grand sorcier, ou prêtre")
        message.channel.sendMessage(help_embed);
    }


    if(message.content === préfix + "PC Assassin"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("PC Assassin")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?Coup de dague + ?Esquive")
        .addField("20PC", "?Camouflage")
        .addField("25PC", "?Assassin ultime")
        .addField("30PC", "Vous pouvez passer Grand Assassin ou Grand illusionist ")
        message.channel.sendMessage(help_embed);
    }
    
    if(message.content === préfix + "PC Archer"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#019521")
        .setTitle("PC Archer")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?Tir amélioré + ?Esquive simple + ?Blocage rapide")
        .addField("20PC", "?Fuite amélioré + ?Flèche empoisonné")
        .addField("25PC", "?Archer ultime")
        .addField("30PC", "Vous pouvez évoluer")
        message.channel.sendMessage(help_embed);
    }










    if(message.content === préfix + "Coup d'épée"){
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligez un coup d'épée rapide qui inflige", ":dagger: "+ y )
        .setImage("https://cdn.discordapp.com/attachments/534821670217711626/535086034459820042/Coup_depee.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "C Coup d'épée"){
        var min = Math.floor(Math.min(35));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligez un coup d'épée puissant qui inflige",":dagger: "+ y)
        .setImage("https://cdn.discordapp.com/attachments/454694319396356128/541560314827898911/unknown.png")
        message.channel.send(y);
    }

    if(message.content === préfix + "P Coup d'épée"){
        var min = Math.floor(Math.min(30));
        var max = Math.floor(Math.max(35)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligez un coup d'épée lent qui inflige", ":dagger: "+y)
        .setImage("https://media.discordapp.net/attachments/454694319396356128/541558773291024408/unknown.png?width=1040&height=585")
        message.channel.send(y);
    }

    if(message.content === préfix + "Coup bas"){
        
         var min = Math.floor(Math.min(15));
        var max = Math.floor(Math.max(25)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligé un coup de dague impossible à bloquer. Vous perdez 40 de mana", ":dagger: "+y)
        .setImage("https://media.giphy.com/media/XptviXceQG8pjLZ0FD/giphy.gif")
        message.channel.send(y);
    }
    
    
     if(message.content === préfix + "Coup de dague"){
        
        var min = Math.floor(Math.min(45));
       var max = Math.floor(Math.max(70)); 
       var y = Math.floor(Math.random() * (max - min + 1) ) + min;
          var result = Math.floor((Math.random() * 100) +1);
       if(result < 90)
       var y = new Discord.RichEmbed()
       .addField("Vous lui infligé un coup de dague rapide et lui infligé",":dagger: "+ y)
       .setColor("#ff6000")
       .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/b/ba/Overlord_II_EP06_097.png/revision/latest?cb=20180216051904")
       if(result > 90)
       var y = new Discord.RichEmbed()
       .setColor("#ff6000")
       .addField("Vous lui infligé un coup de dague rapide, il ne peut pas bloquer le coup ",":dagger: "+ y)
       .setImage("https://i.ytimg.com/vi/mmUlK_FAJqI/maxresdefault.jpg")
       message.channel.send(y);
   }
    
    
    if(message.content === préfix + "Camouflage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Vous vous disimulez dans l'obscurité petit à petit...(-100Mana)")
    .setDescription("Pendant 3 tours grand max, personne ne peus vous attaquer. Si vous attaquez votre coup sera doublé uniquement pendant votre temps d'action")
    .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/2/24/SAO_E06.png/revision/latest?cb=20140328034307")
    message.channel.sendMessage(help_embed);
}
  

    
    if(message.content === préfix + "Tornade de flamme"){
        var min = Math.floor(Math.min(150));
        var max = Math.floor(Math.max(200)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous envoyez un sort qui brule votre adversaire. -100 de mana", ":fire: "+y)
        .setImage("https://media.giphy.com/media/x49CbUokcHQZdaSyga/giphy.gif   ")
        .setColor("#e65e0d")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Concentration d'énergie"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#898989")
    .setTitle("Vous vous concentrez, durant 3 tours(le tour ou vous commencez l'action compte). Une fois cela fait \n ?Puissante énergie")
    .setImage("https://media.giphy.com/media/RN6HAms0nQkojw1wVV/giphy.gif")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Puissante énergie"){
    var min = Math.floor(Math.min(210));
    var max = Math.floor(Math.max(260)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous délivrez une puissante énergie en plein dans la face de votre adversaire", y)
    .setImage("https://media.giphy.com/media/5kF1TNy7WwLZjzzMxI/giphy.gif")
    .setColor("#ff0000")
    message.channel.send(y);
}

    
    if(message.content === préfix + "Provocation simple"){
        var min = Math.floor(Math.min(45));
        var max = Math.floor(Math.max(60)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous faites saigner un seul ennemie et celui-ci est obligé de vous attaquer pendant le prochain tour(-50 de Mana)", y)
        .setImage("https://images8.alphacoders.com/895/895034.png ")
        .setColor("#0819a5")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Coup multiple"){
        var min = Math.floor(Math.min(35));
        var max = Math.floor(Math.max(100)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#0046ff")
        .addField("Vous enchainez de coups votre adversaire",":dagger: "+ y)
        .setImage("https://media.discordapp.net/attachments/534758707561496580/541557069506150420/Chevalier_Hish_Hish_lequipe_est_toka.gif ")
        message.channel.send(y);
    }


    if(message.content === préfix + "Tir rapide"){
        var min = Math.floor(Math.min(20));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tentez de lui envoyer une fleche rapide en direction de son torse, cherchant à viser un point vital. Vous perdez 30 de mana", ":bow_and_arrow: "+y)
        message.channel.send(y);
    }
    if(message.content === préfix + "Tir amélioré"){
        var min = Math.floor(Math.min(55));
        var max = Math.floor(Math.max(80)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tirez une fleche puissante(-20 de Mana)",":bow_and_arrow: "+ y)
        .setImage("https://media.giphy.com/media/kiJ8TzLnvfZdUhVcbW/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Flèche empoisonné"){
        var help_embed = new Discord.RichEmbed()
        var min = Math.floor(Math.min(15));
        var max = Math.floor(Math.max(25)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var x = Math.floor((Math.random() * 3) + 1);
        if(result < 2)
        var y = new Discord.RichEmbed()
        .addField("Vous tirez une flèche empoisonnée qui n'inflige aucun dégats mais un poison durant 1tours impossible à bloquer(-30 de Mana)", y)
        .setColor("#9f0000")
        .setImage("https://nerdblogdotcom.files.wordpress.com/2013/06/borborygmos-enraged.jpg")
        else if(x < 3)
        var y = new Discord.RichEmbed()
        .setColor("#4e8b27")
        .addField("Vous tirez une flèche empoisonnée qui n'inflige aucun dégats mais un poison durant 3tours impossible à bloquer(-30 de Mana)", ":bow_and_arrow: "+y)
        else if(x < 4)
        var y = new Discord.RichEmbed()
        .setColor("#4e8b27")
        .addField("Vous tirez une flèche empoisonnée qui n'inflige aucun dégats mais un poison durant 4tours impossible à bloquer(-30 de Mana)",":bow_and_arrow: "+ y)
        message.channel.sendMessage(y);
    }


    if(message.content === préfix + "Soins de bas rang"){
        var min = Math.floor(Math.min(20);
        var max = Math.floor(Math.max(35)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous soignez une personne au choix, ou bien vous. En contrepartie vous perdez 20 de mana", ":heartpulse: "+y)
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/7/71/Overlord_III_EP07_131.png/revision/latest/scale-to-width-down/640?cb=20180828050559")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Sort de soins"){
        var min = Math.floor(Math.min(50));
        var max = Math.floor(Math.max(70)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField(":hearts: Vous soignez une personne au choix, ou bien vous. En contrepartie vous perdez 50 de mana",":heartpulse: "+ y)
        .setImage("https://media.giphy.com/media/Bp4Iz5pItPXI3ErsAf/giphy.gif")
        .setColor("#20d916")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Soins de Druid"){
        var min = Math.floor(Math.min(80));
        var max = Math.floor(Math.max(120)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous soignez une personne au choix, ou bien vous même grâce à la nature qui vous entoures. En contrepartie vous perdez 70 de mana", ":heartpulse: "+y)
        .setImage("http://pre00.deviantart.net/5483/th/pre/f/2015/310/6/f/forest___swamp_druid_by_night2-d9cll9w.jpg")
        .setColor("#00ff75")
        message.channel.send(y);
    }
     if(message.content === préfix + "Soins de la forêt"){
        var min = Math.floor(Math.min(150));
        var max = Math.floor(Math.max(200)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00ff75")
        .addField("Vous soignez une personne au choix, ou bien vous même grâce à une grande puissance naturel.(-100 de Mana)", ":heartpulse: "+y)
        .setImage("https://i.ytimg.com/vi/l18vWOYUbgo/maxresdefault.jpg")
        message.channel.send(y);
    }


    if(message.content === préfix + "Blocage simple"){
        var min = Math.floor(Math.min(5));
        var max = Math.floor(Math.max(15)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage simple et réussisez à bloquer", ":shield: "+y)
        .setImage("https://media.giphy.com/media/67uARzea7eiZ9P0U1I/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Blocage rapide"){
        var min = Math.floor(Math.min(15));
        var max = Math.floor(Math.max(25)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage rapide et réussisez à bloquer", ":shield: "+y)
        .setImage("https://cdn.discordapp.com/attachments/499161815549476864/541313060917215253/BDci.gif")
        message.channel.send(y);
    }
    
     if(message.content === préfix + "Blocage amélioré"){
        var min = Math.floor(Math.min(30));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage amélioré et réussisez à bloquer", ":shield: "+y)
        .setImage("https://cdn.discordapp.com/attachments/499161815549476864/541320949333622785/ezgif.com-gif-maker_3.gif")
        message.channel.send(y);
    }

    if(message.content === préfix + "Blocage supérieure"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(50)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage supérieure et réussisez à bloquer", ":shield: "+y)
        .setImage("https://media.discordapp.net/attachments/499161815549476864/541320990614093825/2530.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Blocage magique"){
        var min = Math.floor(Math.min(35));
        var max = Math.floor(Math.max(45)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage magique et perdez 20 de Mana", ":shield: "+y)
        .setImage("https://media.giphy.com/media/ljYCvFo7HtheECUT7U/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Blocage naturel"){
        var min = Math.floor(Math.min(20));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous exécutez un blocage naturel en faisant apparaitre une ligne de branche et perdez 20 de Mana", ":shield: "+y)
        .setColor("#00ff75")
        message.channel.send(y);
    }


    

    if(message.content === préfix + "Tir à l'arc"){
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tirez une fleche rapide sur votre ennemie",":bow_and_arrow: "+y)
        .setImage("https://media.giphy.com/media/5QI6YQxisFehaLlQ8I/giphy.gif")
        message.channel.send(y);
    }

    
    if(message.content === préfix + "Magie simple"){
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous envoyez un sort de bas rang", ":sparkles: "+y)
        .setImage("https://media.giphy.com/media/lYfMRNGRIyOOQo9PKl/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Sort simple"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(55)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous envoyez un sort sur votre adversaire",":sparkles: "+ y)
        .setImage("https://media.giphy.com/media/2sgF179xV3fH9GW2mJ/giphy.gif")
        message.channel.send(y);
    }
 
    
    if(message.content === préfix + "Sort naturel"){
        var min = Math.floor(Math.min(35));
        var max = Math.floor(Math.max(45)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous attaquez votre adversaire en faisant apparaitre temporaire une tentacule d'épine qui vient frapper ce dernier", ":sparkles: "+y)
        message.channel.send(y);
    }
    
    


    if(message.content === préfix + "Assassin ultime"){
        var min = Math.floor(Math.min(250));
        var max = Math.floor(Math.max(300)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Vous executez 2 coups puissants et précis qui infligent du",":crossed_swords: "+ y)
        .setImage("https://media.giphy.com/media/39jPRRkGyd4xc4EysM/giphy.gif")
        message.channel.send(y);
    }

    if(message.content === préfix + "Voleur ultime"){   
        var min = Math.floor(Math.min(55));
        var max = Math.floor(Math.max(80)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous executez un back stab qui inflige du", ":crossed_swords: "+ y)
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
        .addField("Vous executez un violent coup qui inflige", ":crossed_swords: "+ l)
        .setImage("https://cdn.discordapp.com/attachments/532644881588551683/535086945420967937/Combattant_ultime.gif")
        message.channel.send(l);
    }
    
    if(message.content === préfix + "Paladin ultime"){
        var min = Math.floor(Math.min(100));
        var max = Math.floor(Math.max(150)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#76ff00")
        .addField("Vous régénérez", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(100));
        var maxs = Math.floor(Math.max(80)); 
        var l = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var l = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous executez un violent d'épée(-150 de Mana)",":crossed_swords: "+  l)
        .setImage("https://thumbs.gfycat.com/MintyConstantAnkole-size_restricted.gif")
        message.channel.send(l);
    }
    
    if(message.content === préfix + "Chevalier ultime"){
        var help_embed = new Discord.RichEmbed()
        var min = Math.floor(Math.min(150));
        var max = Math.floor(Math.max(200)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var result = Math.floor((Math.random() * 100) + 1);
            if(result < 90)
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligez un coup violent et l'étourdisez pour le prochain tour, il ne pourra ni attaquer ni se défendre(-150 de mana) ", ":crossed_swords: "+ y)
        .setColor("#ff0000")
        .setImage("https://66.media.tumblr.com/737f6cd176072287264517f7c6706005/tumblr_ntncw6Psi91qa94xto1_400.gif")
            if(result > 90)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Vous lui infligez de lours dégats (-150 de mana)",":crossed_swords: "+  y)
        .setImage("https://66.media.tumblr.com/737f6cd176072287264517f7c6706005/tumblr_ntncw6Psi91qa94xto1_400.gif")
        message.channel.sendMessage(y);
    }


    if(message.content === préfix + "Ranger ultime"){
        var min = Math.floor(Math.min(55));
        var max = Math.floor(Math.max(80)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous effectuez un tir parfait(-80 de mana)", ":crossed_swords: "+ y)
        .setImage("https://media.giphy.com/media/uUl8lkfxMYLi5q9wp8/giphy.gif")
        message.channel.send(y);
    }
    
     if(message.content === préfix + "Archer ultime"){
        var min = Math.floor(Math.min(250));
        var max = Math.floor(Math.max(300)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous effectuez un tir plus que parfait (-200 de mana)",":crossed_swords: "+  y)
        .setImage("https://media.giphy.com/media/KYFj8oIWlhbH6wPwoK/giphy.gif")
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
        var mins = Math.floor(Math.min(40));
        var maxs = Math.floor(Math.max(65)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed() 
        .setColor("#ff8b00")
        .addField("Vous executez un sort de base qui inflige du", ":crossed_swords: "+ w)
        message.channel.send(w);
    }
    
    if(message.content === préfix + "Sorcier ultime"){   
        var min = Math.floor(Math.min(200));
        var max = Math.floor(Math.max(250)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .addField("Negative burst ! (-200 de Mana)",":crossed_swords: "+  y)
        .setImage("https://media.giphy.com/media/8FSMNs8bir2lfkpg2u/giphy.gif")
        message.channel.send(y);
        var e = Math.floor(Math.min(60));
        var a = Math.floor(Math.max(70)); 
        var w = Math.floor(Math.random() * (a - e + 1) ) + e;
        var w = new Discord.RichEmbed()
        .setColor("#00f5ff")
        .addField("Vous régénérez du Mana", w)
        message.channel.send(w);
    }
    
    if(message.content === préfix + "Druid ultime"){   
        var min = Math.floor(Math.min(70));
        var max = Math.floor(Math.max(130)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .addField("Fait apparaitre un Ours inoffensif qui se fera tout le temps attaquer en priorité au bout du 3eme tours par les mobs et il a un grand nombre d'HP", y)
        .setImage("https://media.discordapp.net/attachments/536292650698014731/543167288967168056/Bears_Magical_animals_475039_2048x1536.jpg?width=780&height=585")
        message.channel.send(y);
        var e = Math.floor(Math.min(40));
        var a = Math.floor(Math.max(70)); 
        var w = Math.floor(Math.random() * (a - e + 1) ) + e;
        var w = new Discord.RichEmbed()
        .setColor("#00f5ff")
        .addField("L'ours polaire feras gagner à un des membres du groupe un certain nombre d'HP", w)
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

    if(message.content === préfix + "Vague négative"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Dégagement d'aura négative(-80Mana)")
    .setDescription("Pendant 3 tours tout le monde (même vos alliées(sauf les démons)) auront -20 en défense")
    .setImage("https://www.journaldugeek.com/wp-content/blogs.dir/1/files/2017/05/ETD-1.png")
    message.channel.sendMessage(help_embed);
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
        .addField("Votre corps deviens plus résistant et réduisez tout les dégats pendant 3 tours de", ":shield: "+y)
        message.channel.send(y);
    }

    if(message.content === préfix + "Magic gun"){
        var min = Math.floor(Math.min(70));
        var max = Math.floor(Math.max(80)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous pouvez uniquement utiliser cette compétence à longue porté. Vous visez un point vital et infligez du", ":gun: "+y)
        .setImage("https://media.giphy.com/media/vgvVcpHvIEjO9yPQqg/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Réparation automatique"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00ff0d")
        .setTitle("Réparation automatique")
        .setDescription("Vous regagnez 50% de vos HP pendant 2 tours et vous permet de combiner 2 attaques aux prochains tours")
        message.channel.sendMessage(help_embed);
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
        .addField("Votre instinct vampirique prend le dessus et vous bloquez facilement le coup", y)
        .setImage("https://media.giphy.com/media/fBMynhfzwdau1sLmPi/giphy.gif")
        message.channel.send(y);
          
    }

       if(message.content === préfix + "Sainte bénédiction"){
        var y = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setImage("http://mask-tub-et-brush.m.a.pic.centerblog.net/o/308ebfe7.png")
        .setAuthor("Une lumière vous enveloppes et vous fais disparaître juste avant de subir le coup, vous réapparaissez juste après")
        message.channel.sendMessage(y);
          
    }
    
    if(message.content === préfix + "Invocation divine"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("L'Ange")
    .setColor("#ffffff")
    .setDescription("Vous invoquez un Ange puissant et faisant frémir vos ennemies. Il attaque 1 fois tout les 3tours")
    .addField("HP", "150")
    .addField("Attaque", "?Ange attaque")
    .addField("Défense", "?Ange défense")
    .setImage("https://image.myanimelist.net/ui/z3a0S--4LnRurzJAHi0hLc7mUF0wHOYpG-DmXnKO5JE322e5dl0OZhyBMAbg8szq")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Ange attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(150));
    var max = Math.floor(Math.max(200)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("l'ange vous attaques avec un pouvoir divin faisant des ravages...", y)
    .setColor("#ffffff")
    .setImage("https://anilyze.files.wordpress.com/2015/08/horriblesubs-overlord-04-720p-mkv_snapshot_16-52_2015-08-06_22-33-52.jpg")
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Ange défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("l'ange ne se défend pas et se contente de subir pendant qu'il rechargé son attaque", y)
    .setColor("#ffffff")
    message.channel.sendMessage(y);
}

    
    
    if(message.content === préfix + "Esquive simple") {
        var result = Math.floor((Math.random() * 100) + 1);
        if(result < 40)
        var result = new Discord.RichEmbed() 
        .setColor("#00ff27")
        .setTitle("Vous avez réussie à Esquiver et ne subisez aucun dégat")
        .setImage("https://media.discordapp.net/attachments/499161815549476864/541310276104880129/esqive.gif")
        if(40 < result)
        var result = new Discord.RichEmbed() 
        .setColor("#ff0000")
        .setAuthor("Vous subisez tout les dégats")
        message.channel.send(result);
    
    }
    
   
  if(message.content === préfix + "Esquive") {
        var result = Math.floor((Math.random() * 100) + 1);
        if(result < 50)
        var result = new Discord.RichEmbed() 
        .setColor("#00ff27")
        .setTitle("Votre esquive est réussie, mais attention...Ne prenez pas trop la confiance")
        .setImage("https://cdn.discordapp.com/attachments/456251076253843456/541951693328220160/Screenshot_20190204-130104_Netflix.jpg")
        if(50 < result)
        var result = new Discord.RichEmbed() 
        .setColor("#ff0000")
        .setAuthor("Vous subisez tout les dégats, sa fait mal...")
        message.channel.send(result);
    
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
    .addField("Attaque spécial", "En dessous de 15HP il ne l'utilise qu'une fois ?Petit cracha d'acide. Attention on ne peut pas bloquer le coup")
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
    .addField("La créature se crispe legerement sur elle même et de fine couche d'acie sort de sa peau réduisant l'attaque", y)
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

    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("La créature se protege à l'aide de sa carapace", y);

    if(result > 50)

    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
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






if(message.content === préfix + "Arrive dans le marécage") {
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

if(message.content === préfix + "Arrive dans la forêt") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Apparition forêt")
    if(50 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}

if(message.content === préfix + "Les zones"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#f0ff00")
    .setTitle("Marécage")
    .setDescription("?Arrive dans le marécage")
    .addField("Forêt", "?Arrive dans la forêt")
    .addField("Royaume ou village en cas d'agression et de Roll réussie celon la situation", "?SOS")
    message.channel.sendMessage(help_embed);
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
    else if(result < 101){
        var result = new Discord.RichEmbed() 
        .setColor("#217504")
        .setTitle("Roi des marécages")
        .setDescription("Houston...La terre tremble....Houston...WHOW HOUSTON LA TERRE TREMBLE VRAIMENT CASSE TOI !!")
        .addField("Point de vie", "1500")
        .addField("Attaque quand HP>750", "?Roi des marécages attaque")
        .addField("Attaque quand HP<750", "?Roi des marécages attaque 2")
        .addField("Défense", "?Roi des marécages défense")
        .setImage("http://www.fondsecran.eu/pictures/2012/0206/1/monsters-birds-magic-the-gathering-giant-realistic-warriors-1600x1171-wallpaper-488183.jpg")}
    

    message.channel.send(result);

}




if(message.content === préfix + "Le roi des marécages"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("Point de vie", "1500")
    .addField("Attaque quand HP>750", "?Roi des marécages attaque")
    .addField("Attaque quand HP<750", "?Roi des marécages attaque 2")
    .addField("Défense", "?Roi des marécages défense")
    .setImage("http://www.fondsecran.eu/pictures/2012/0206/1/monsters-birds-magic-the-gathering-giant-realistic-warriors-1600x1171-wallpaper-488183.jpg")
    message.channel.sendMessage(help_embed);
}






if(message.content === préfix + "Roi des marécages attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(200));
    var max = Math.floor(Math.max(250)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 80)
    var y = new Discord.RichEmbed()
    .addField("Le Roi lève ses grandes pattes et tente de vous piétiner violament au sol comme de vulgaires insectes", y )
    .setColor("#217504")
        if(result > 80)
    var y = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("Crie de renfort", "Le roie prend une grande inspiration pour ensuite crier de rage, Il vous projette au loin tout en arrachant des arbres et vous infliges des dégâts monstrueux")
    .addField(y ,"\n Le roi va alors faire resortir 2 arbres maudit des marécages") 
    .setImage("http://www.fondsecran.eu/pictures/2012/0206/1/monsters-birds-magic-the-gathering-giant-realistic-warriors-1600x1171-wallpaper-488183.jpg")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Roi des marécages attaque 2"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(250));
    var max = Math.floor(Math.max(300)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 80)
    var y = new Discord.RichEmbed()
    .addField("Le roi fonce sur vous à toute vitesse et vous infliges des dégats considérables", y )
    .setColor("#217504")
        if(result > 80)
    var y = new Discord.RichEmbed()
    .setColor("#217504")
    .addField("Crie de désespoir", "Le roie prend une grande inspiration pour ensuite crier de rage, Il vous projette au loin tout en créant des vagues sur le marécage et vous infliges des dégâts monstrueux")
    .addField(y ,"\n Le roi va alors faire resortir 2 Lézards Primitifs") 
    .setImage("http://www.fondsecran.eu/pictures/2012/0206/1/monsters-birds-magic-the-gathering-giant-realistic-warriors-1600x1171-wallpaper-488183.jpg")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Roi des marécages défense"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#217504")
    var min = Math.floor(Math.min(175));
    var max = Math.floor(Math.max(200)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 95)
    var y = new Discord.RichEmbed()
    .addField("Le roi ne se défend pas et sa peau est très résistante", y )
    .setColor("#217504")
    if(result < 95)
    var y = new Discord.RichEmbed()
    .setTitle("Il ne reçois aucun dégats et la personne qu'il l'a attaqué ne peut rien faire pendant 2Tours était paralysé par la nature autour de lui")
    message.channel.sendMessage(help_embed);
}



if(message.content === préfix + "Ciblage 2") {
    var result = Math.floor((Math.random() * 2) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}

if(message.content === préfix + "Ciblage 3") {
    var result = Math.floor((Math.random() * 3) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}




if(message.content === préfix + "Ciblage 4") {
    var result = Math.floor((Math.random() * 4) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}

if(message.content === préfix + "Ciblage 5") {
    var result = Math.floor((Math.random() * 5) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}

if(message.content === préfix + "Ciblage 6") {
    var result = Math.floor((Math.random() * 6) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}
if(message.content === préfix + "Ciblage 7") {
    var result = Math.floor((Math.random() * 7) + 1);
    var result = new Discord.RichEmbed() 
    .setTitle("Vous êtes pris pour cible ")
    .setDescription(result)
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540194986952622080/latest.png")
    message.channel.send(result);

}



if(message.content === préfix + "Fuite") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 30)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous fuyez")
    if(30 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("La fuite est impossible")
    message.channel.send(result);

}

    
    if(message.content === préfix + "Fuite amélioré") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous fuyez")
    if(50 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("La fuite est impossible")
    message.channel.send(result);

}

if(message.content === préfix + "Sergent garde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#0800ff")
    .addField("Point de vie", "150")
    .addField("Attaque", "?SG attaque")
    .addField("Défense", "?SG défense")
    .setImage("https://cdn.discordapp.com/attachments/534758707561496580/540206929193205790/thumb-1920-405091.png")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "SG attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le sergent vous charges avec son fléau", y)
    .setColor("#0800ff")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "SG défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le sergent essaye de bloquer l'attaque", y)
    .setColor("#0800ff")
    message.channel.sendMessage(y);
}
    
    if(message.content === préfix + "Garde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#0800ff")
    .addField("Point de vie", "100")
    .addField("Attaque", "?Garde attaque")
    .addField("Défense", "?Garde défense")
    .setImage("https://www.gamewallpapers.com/wallpapers_slechte_compressie/01wallpapers/wallpaper_dark_souls_2_01_1920x1080.jpg")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Garde attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le garde donne un coup d'épée à l'horizontal", y)
    .setColor("#0800ff")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Garde défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(20)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le garde donne un coup d'épée à l'horizontal", y)
    .setColor("#0800ff")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Garde royaume") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40){
    var result = new Discord.RichEmbed() 
    .setTitle("Garde Novice")
    .setDescription("Un garde novice, il n'est pas un grand danger")
    .setColor("#0800ff")
    .addField("Point de vie", "70")
    .addField("Attaque", "?GN attaque")
    .addField("Défense", "?GN défense")
    .setImage("https://media.discordapp.net/attachments/534758707561496580/540249126890110976/image0.png?width=384&height=586")}
    else if(result < 90){
    var result = new Discord.RichEmbed() 
    .setTitle("Garde")
    .setDescription("Un garde du Royaume")
    .setColor("#0800ff")
    .addField("Point de vie", "100")
    .addField("Attaque", "?Garde attaque")
    .addField("Défense", "?Garde défense")
    .setImage("https://www.gamewallpapers.com/wallpapers_slechte_compressie/01wallpapers/wallpaper_dark_souls_2_01_1920x1080.jpg")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
        .setTitle("Garde Sergent")
        .setDescription("Ce Garde est vraiment fort...Fuyez jeune voleur")
        .setColor("#0800ff")
        .addField("Point de vie", "150")
        .addField("Attaque", "?SG attaque")
        .addField("Défense", "?SG défense")
        .setImage("https://cdn.discordapp.com/attachments/534758707561496580/540206929193205790/thumb-1920-405091.png")}
    

    message.channel.send(result);

}
    

if(message.content === préfix + "SOS") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 90)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Un garde arrive ?Garde royaume")
    if(90 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous êtes seul...")
    message.channel.send(result);

}
    
    
    if(message.content === préfix + "GN attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le garde donne un coup d'épée à l'horizontal", y)
    .setColor("#0800ff")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "GN défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le garde donne un coup d'épée à l'horizontal", y)
    .setColor("#0800ff")
    message.channel.sendMessage(y);
}





if(message.content === préfix + "La flamme immortel"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La flamme immortel")
    .setDescription("La flamme immortel de son vrai nom Andraaz est ce qu'on pourrait appeler une légende voir un mythe inconnu aux yeux de beaucoup de monde, peu d'information réside à son sujet à pars qu'il serait capable de rivaliser avec les plus térrifiants des monstres ")
    .addField("HP", "2000")
    .addField("Attaque", "?FI Attaque")
    .addField("Attaque si HP < 500 ", "FI Attaque puissante")
    .addField("Défense", "FI Défense")
    .addField("Defense si HP < 500", "FI Défense puissante")
    .setImage("https://i.pinimg.com/originals/72/49/60/7249604e82aff98f8603f60833b00a26.jpg")
    .setFooter("La Flamme immortel")
    .setColor("#ff0000")
    message.channel.sendMessage(help_embed);
}

    
    
if(message.content === préfix + "FI attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(70));
    var max = Math.floor(Math.max(100)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 50)
    var y = Math.floor(Math.floor(y) * 2)
        if(result < 50)
    var y = new Discord.RichEmbed()
    .addField("Andraaz fit des petits pas jusqu'à accélerer le rythme et bondir sur son ennemi", y)
    .setColor("#fb6f00")
        else
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Andraaz se lança dans la mêlé, aucune crainte, aucune peur, il était sans pitié...", y)
    .setImage("https://i.pinimg.com/originals/37/d2/92/37d2925f057f102cb496a2eda94cf19f.gif")
    message.channel.sendMessage(y);
}




if(message.content === préfix + "FI défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(60));
    var max = Math.floor(Math.max(100)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 80)
    var y = Math.floor(Math.floor(y) * 2)
        if(result > 80)
    var y = new Discord.RichEmbed()
    .addField("Parade infernal", "Andraaz fit une parade, il reçoit aucun dégats, et vous renvoie la moitié que vous lui avez infligez, impossible de bloquer")
    .setImage("https://www.wallpaperup.com/uploads/wallpapers/2018/03/17/1230961/bf3607bb70b902ac87145fd98bfda0c1-700.jpg")
    .setColor("#ff0000")
        else
    var y = new Discord.RichEmbed()
    .setColor("#fb6f00")
    .addField("Andraaz bloque l'attaque avec son épée de flamme", y)
    message.channel.sendMessage(y);
}





/// EVENT


if(message.content === préfix + "Potion ???"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#fffd00")
    .addField("Utilisation", "Vous le serez en MP")
    .addField("Information écrit sur la fiole", "Attention, elle est utilisable qu'une seule fois, personne ne peut savoir en avance ce qui se produira")
    .setImage("http://img13.deviantart.net/af5c/i/2010/203/e/c/potion_by_markusthebarbarian.jpg")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Utilisation de la potion X001"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#fffd00")
    .setTitle("Tu n'as qu'un seul chemin...Et il t'aportera au porte de la mort")
    .setDescription("Vous êtes  recouvert d'une grande aura obscure, celle-ci vous fais un Bonus de X4 à votre prochaine attaque uniquement pendant un tours")
    .setImage("https://i.ytimg.com/vi/uYZcXCT6Arw/maxresdefault.jpg")
    message.channel.sendMessage(help_embed);
}



/// ZONE DE GLACE
/// ZONE DE GLACE
    /// ZONE DE GLACE
    
  

if(message.content === préfix + "Golem de glace"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Golem de glace")
    .setColor("#00ffef")
    .addField("Point de vie", "600")
    .addField("Attaque", "?Golem attaque")
    .addField("Spécial", "Quand HP<300. Utilisation de ?Blizzard")
    .addField("Défense", "?Golem défense")
    .setImage("https://cdn.discordapp.com/attachments/499161815549476864/541891888022552597/9eee440ed789d3b076d0377479c460f7.jpg")
    message.channel.sendMessage(help_embed);
}





if(message.content === préfix + "Golem attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 30)
    var y = new Discord.RichEmbed()
    .addField("Echec", "Le Golem manqua de vitesse et n'a pas réussie à vous toucher")
        if(result > 30)
    var y = new Discord.RichEmbed()
    .setColor("#00ffef")
    .addField("Le Golem vous éclates au sol, profitez-en pour manger la neige", y)
    message.channel.sendMessage(y);
}



if(message.content === préfix + "Golem défense"){
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le Golem n'avait pas besoin de se défendre... Sa couverture de glace était déjà bien résistante", y)
    .setColor("#00ffef")
    message.channel.send(y);
}




if(message.content === préfix + "Blizzard"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Blizzard~~")
    .setDescription("Le golem de glace hurle d'une voix roque et une tempête de neige apparait autour de lui, tous les dégats qu'il subira seront maintenant divisé par 2")
    .setColor("#00ffef")
    .setImage("https://cdn.discordapp.com/attachments/499161815549476864/541891888022552597/9eee440ed789d3b076d0377479c460f7.jpg")
    message.channel.sendMessage(help_embed);
}



/// FORET
/// FORET
    ///FORET
    ///FORET
    ///FORET



if(message.content === préfix + "Chouette du vent"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chouette du vent")
    .setColor("#048502")
    .addField("Point de vie", "500HP")
    .addField("Attaque", "?Chouette attaque")
    .addField("Défense", "?Chouette défense")
    .setImage("https://media.discordapp.net/attachments/456251076253843456/541740554078257154/l1hi7um1wtl01.png?width=586&height=586")
    message.channel.sendMessage(help_embed);
}



if(message.content === préfix + "Chouette attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 30)
    var y = Math.floor(Math.floor(y) * 0.8)
        if(result >  30)
    var y = new Discord.RichEmbed()
    .addField("La chouette vous envoies des micros tornades", y)
    .setColor("#048502")
        else
    var y = new Discord.RichEmbed()
    .setColor("#026500")
    .addField("La Chouette vous lances un disque de vent qui vous empecheras de bloquer au prochain tour", y)
    .setImage("https://media.discordapp.net/attachments/456251076253843456/542739372689326090/Shrike-combat-PAXEast-screenshots-dauntless-1.png?width=1041&height=586")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Chouette défense"){
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("La chouette fait un bond en arrière, essayant d'éviter le coup", y)
    .setColor("#048502")
    message.channel.send(y);
}

    
    if(message.content === préfix + "Gobelin primitif"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Gobellin primitif")
    .setColor("#048502")
    .addField("Point de vie", "40HP")
    .addField("Attaque", "?Gobelin attaque")
    .addField("Défense", "?Gobelin défense")
    .setImage("https://media.discordapp.net/attachments/499161815549476864/541890154244341760/Reta.jpg?width=559&height=586")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Gobelin attaque"){
    var min = Math.floor(Math.min(1));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#048502")
    .addField("Le Gobelin vous place un petit coup de dague, cela ne fait aucun dégât, néanmoins chaque tour vous subirez. L'effet est cumulable(sur 2 tours)"  , y)
    message.channel.send(y);
}
if(message.content === préfix + "Gobelin défense") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70)
    var result = new Discord.RichEmbed() 
    .setColor("#00ff27")
    .setTitle("Le Gobelin se prend 0 Coups")
    .setImage("https://i.ytimg.com/vi/mOPsIiE5ICw/maxresdefault.jpg")
    if(70 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Le Gobelin subit tout les dégâts")
    message.channel.send(result);

}
if(message.content === préfix + "Géant de la forêt"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Géant de la forêt")
    .setColor("#038913")
    .addField("Point de vie", "2000HP")
    .addField("Attaque", "?Géant attaque")
    .addField("Défense", "Le géant n'a pas de défense")
    .setImage("https://i.pinimg.com/originals/37/e1/4a/37e14ac75bfb201334042027242b6d21.jpg")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Géant attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(125));
    var max = Math.floor(Math.max(200)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 35)
    var y = Math.floor(Math.floor(y) * 0.5)
        if(result >  35)
    var y = new Discord.RichEmbed()
    
        .setColor("#4e8b27")
    .addField("Le géant vous donnes un gros coup de pied vous envoyez valser en l'air jusqu'à que vous retombiez comme un déchêt sur la terre ferme", y)
        else
    var y = new Discord.RichEmbed()
.setColor("#9f0000")
        .addField("Le Géant hurla avant de s'acharner sur vous", y)
.setImage("https://nerdblogdotcom.files.wordpress.com/2013/06/borborygmos-enraged.jpg")
    
    message.channel.sendMessage(y);
}



if(message.content === préfix + "Apparition forêt") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60){{
    var help_embed = new Discord.RichEmbed()
    .setTitle("Gobelin primitif")
    .setColor("#048502")
    .addField("Point de vie", "40HP")
    .addField("Attaque", "?Gobelin attaque")
    .addField("Défense", "?Gobelin défense")
    .setImage("https://media.discordapp.net/attachments/499161815549476864/541890154244341760/Reta.jpg?width=559&height=586")
    message.channel.sendMessage(help_embed);
}}
    else if(result < 90){
{
        var help_embed = new Discord.RichEmbed()
        .setTitle("Chouette du vent")
        .setColor("#048502")
        .addField("Point de vie", "500HP")
        .addField("Attaque", "?Chouette attaque")
        .addField("Défense", "?Chouette défense")
        .setImage("https://media.discordapp.net/attachments/456251076253843456/541740554078257154/l1hi7um1wtl01.png?width=586&height=586")
        message.channel.sendMessage(help_embed);
    }}
    else if(result < 101){
    {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Géant de la forêt")
        .setColor("#038913")
        .addField("Point de vie", "2000HP")
        .addField("Attaque", "?Géant attaque")
        .addField("Défense", "Le géant n'a pas de défense")
        .setImage("https://i.pinimg.com/originals/37/e1/4a/37e14ac75bfb201334042027242b6d21.jpg")
        message.channel.sendMessage(help_embed);
    }
    }


}
  
    
  if(message.content === préfix + "Régénération de mana supérieur"){
    var min = Math.floor(Math.min(250));
    var max = Math.floor(Math.max(300)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#00fdff")
    .addField("Vous rénérez du mana hors combat et vous recevez", y)
    message.channel.send(y);
      
}

if(message.content === préfix + "Régénération de mana de l'Archer"){
    var min = Math.floor(Math.min(100));
    var max = Math.floor(Math.max(200)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#00fdff")
    .addField("Vous rénérez du mana hors combat et vous recevez", y)
    message.channel.send(y);
      
}


if(message.content === préfix + "Soins de la nature"){
    var y = new Discord.RichEmbed()
    .setColor("#1fff00")
    .addField("Vous rénérez 50% de votre santé graçe à la nature qui vous entoures", y)
    .setImage("https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/vlies-wallpaper-mural-green-forest-10112-[2]-27940-p.jpg")
    message.channel.send(y);
      
}  
    
    
    /// STUFF
    
    if(message.content === préfix + "Potion d'HP faible"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Créer par la force de simples mages après de nombreuse tentative... ", y)
    .setColor("#ff0000")
    .setImage("https://media.discordapp.net/attachments/542028605874634752/542053551619440640/568061fd015a05580add57ed64de815e.png")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Potion d'HP"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(100));
    var max = Math.floor(Math.max(200)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Créer par de puissants alchimistes qui vive dans la noblesse du Royaume... Cette potion serait d'une grande éfficacité", y)
    .setColor("#ff0000")
    .setImage("https://media.discordapp.net/attachments/536292650698014731/543821870957330442/346523c1d18d9c4b83cb0cb116f76946.png")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Potion d'HP haute"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(250));
    var max = Math.floor(Math.max(400)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Créer par de puissant Druide exilé du royaume... Cette potion rendrait un grand nombre d'HP", y)
    .setColor("#ff0000")
    .setImage("https://cdn.discordapp.com/attachments/536292650698014731/543822332477571103/9f1ac6ee17031792f769a99085e742ca.png")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Potion de mana faible"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Créer par la force de simples mages après de nombreuse tentative... ", y)
    .setColor("#00ffe7")
    .setImage("https://media.discordapp.net/attachments/542028605874634752/542053261130334228/da66dd28623e31be7cd6ff36e7a849ae.png?width=404&height=585")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Potion de mana"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(100));
    var max = Math.floor(Math.max(200)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Créer par des alchimistes fasciné par la magie... Cette potion serait d'une grande éfficacité", y)
    .setColor("#00ffe7")
    .setImage("https://media.discordapp.net/attachments/536292650698014731/543822800666886144/2069a5b730f5952ec917bafaaf594ee2.png?width=391&height=585")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Potion de mana haute"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(250));
    var max = Math.floor(Math.max(400)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Créer par de puissants Sorciers reconnus de tous... Cette potion vous redonneras une immense quantité de mana", y)
    .setColor("#00ffe7")
    .setImage("https://media.discordapp.net/attachments/536292650698014731/543822848737673251/99abd957719c40c5150d7aa7427048ae.png?width=509&height=586")
    message.channel.sendMessage(y);
}
    
if(message.content === préfix + "Shop"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#f0ff00")
    .addField("Listes des articles par catégories", "?Information sur l'argent"+" \n ?Parchemin" +"\n ?Arme"+"\n ?Armure"+"\n ?Potion");
    message.channel.sendMessage(help_embed);
}
 if(message.content === préfix + "Arme"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#f0ff00")
    .addField("Les Armes", "Elles ne sont pas achetables, mais peuvent être obtenue via des events ou des loots rares");
    message.channel.sendMessage(help_embed);
}   
    
    
   if(message.content === préfix + "Potion HP"){
    var help_embed = new Discord.RichEmbed()
    .addField("Potion d'HP faible'", "35 pièces de bronze")
    .addField("Potion d'HP", "100 pièces de bronze" + " \n 10 pièces d'argent")
    .addField("Potion d'HP haute", "300 pièces de bronze" + "\n 30 pièces d'argent" + "\n 10 pièces d'or \n \n \n")
    .setFooter("Les potions d'HP")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}
    
     if(message.content === préfix + "Potion mana"){
    var help_embed = new Discord.RichEmbed()
    .addField("Potion de mana faible", "35 pièces de bronze")
    .addField("Potion de mana", "100 pièces de bronze" + " \n 10 pièces d'argent")
    .addField("Potion de mana haute", "300 pièces de bronze" + "\n 30 pièces d'argent" + "\n 10 pièces d'or   ")
    .setFooter("Les potions de mana")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}
    

    
    if(message.content === préfix + "Potion"){
    var help_embed = new Discord.RichEmbed()
    .addField("Liste des potions", "?Potion HP et ?Potion mana")
    .addField("Information", "Les potions sont achetables dans la zone de commerce ou bien gagnable dans des donjons ou sur des mobs")
 
    .setFooter("Les potions")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}
    
if(message.content === préfix + "AAA"){
    var help_embed = new Discord.RichEmbed()
    .addField("C'est quoi et à quoi il sert ?", "Il peut être obtenue après avoir tué un monstre ou bien lors de récompense des donjons. Il peut être utiliser pour de l'équipement, des demandes à d'autre joueur, pour acheter des potions...")
    .addField("Où en trouver ?", "Il existe 3 types de pièces: \n  Celui en bronze: que l'on trouve avant tout dans les marécages \n Celui en argent trouvable dans certain donjon et dans la forêt \n Celui en or: trouvable dans la montagne enneigé et contre des boss \n mais le moyen le plus facile d'en avoir c'est via des quêtes d'aventuriers")
    .setFooter("Où acheter des items ?", "Au royaume dans la zone commercial")
    .setFooter("Où acheter des items ?", "?Achat : [Nom entier de votre achat, exemple : ?Achat : Armure en plate](sauf pour les potions, vous découvrez son éfficacité qu'une fois utilisé)")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "Information sur l'argent"){
    var help_embed = new Discord.RichEmbed()
    .addField("C'est quoi et à quoi il sert ?", "Il peut être obtenue après avoir tué un monstre ou bien lors de récompense des donjons. Il peut être utiliser pour de l'équipement, des demandes à d'autre joueur, pour acheter des potions...")
   .addField("Où en trouver ?", "Il existe 3 types de pièces: \n  Celui en bronze: que l'on trouve avant tout dans les marécages \n Celui en argent trouvable dans certain donjon et dans la forêt \n Celui en or: trouvable dans la montagne enneigé et contre des boss \n mais le moyen le plus facile d'en avoir c'est via des quêtes d'aventuriers")
    .addField("Où acheter des items ?", "Au royaume dans la zone commercial")
    .addField("La commande pour acheter", "?Achat : [Nom entier de votre achat, exemple : ?Achat : Armure en plate](sauf pour les potions, vous découvrez son éfficacité qu'une fois utilisé)")
    .addField("Commande pour les loots des mobs", "?Mort [Nom du mobs sans majuscule]")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "Armure"){
    var help_embed = new Discord.RichEmbed()
    .addField("Les armures", "Il est à savoir que seul les personnes avec un corps fortement identiques aux humains peuvent s'équiper d'armure, un Lézard ne peut donc en avoir")
    .addField("Armure qui augmente les HP", "?Armure HP")
    .addField("Armure qui augmente le capacité de mana", "?Armure mana")
    .addField("Comment s'équiper d'une armure ?", "Après avoir fait la commande de l'armure que vous désirez, retirez la somme que vous avez payé depuis votre inventaire. Vous pouvez l'équiper quand vous voulez à condition de faire une action RP")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Armure HP"){
    var help_embed = new Discord.RichEmbed()
    .addField("Armure en cuir souple", "Prix : 70 pièces de bronze \n ?Achat : armure en cuir souple")
    .addField("Armure simple avec cotte de mailles", "Prix : 150 pièces de bronze \n 45 pièces d'argent \n ?Achat : armure simple en cotte de mailles")
    .addField("Armure en plate", "Prix: 500 pièces de bronze \n 210 pièces d'argent \n 70 pièces d'or \n ?Achat : armure en plate")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Armure mana"){
    var help_embed = new Discord.RichEmbed()
    .addField("Armure en tissus fin", "Prix : 70 pièces de bronze \n ?Achat : armure en tissus fin")
    .addField("Armure de sorcier traditionnel", "Prix : 150 pièces de bronze \n 45 pièces d'argent \n ?Achat : armure de sorcier traditionnel")
    .addField("Armure de sorcier reconnu", "Prix: 500 pièces de bronze \n 210 pièces d'argent \n 70 pièces d'or \n ?Achat : armure de sorcier reconnu")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Achat : armure en cuir souple"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField(":shield:  Armure en cuir souple", "HP:" + y + ":hearts: ")
    .setColor("#0009ff")
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Achat : armure simple avec cotte de mailles"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(70));
    var max = Math.floor(Math.max(100)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(20));
    var maxs = Math.floor(Math.max(30)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
  
    .addField(":shield:  Armure simple avec cotte de mailles", "HP: " + y + ":hearts: \n Mana: " + x +":sparkles: ")
    .setColor("#0006a4")
    message.channel.sendMessage(y);    
}
if(message.content === préfix + "Achat : armure en plate"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(220));
    var max = Math.floor(Math.max(440)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(50));
    var maxs = Math.floor(Math.max(70)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
  
    .addField(":shield:  Armure simple en plate", "HP: " + y + ":hearts: \n Mana: " + x +":sparkles: ")
    .setColor("#010461")
    message.channel.sendMessage(y);    
}
if(message.content === préfix + "Achat : armure en tissus fin"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField(":shield:  Armure en tissus fin", "Mana:" + y + ":sparkles: ")
    .setColor("#0009ff")
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Achat : armure de sorcier traditionnel"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(70));
    var maxs = Math.floor(Math.max(100)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
  
    .addField(":shield:  Armure de sorcier traditionnel", "HP: " + y + ":hearts: \n Mana: " + x +":sparkles: ")
    .setColor("#0006a4")
    message.channel.sendMessage(y);    
}
if(message.content === préfix + "Achat : armure de sorcier reconnu"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(220));
    var maxs = Math.floor(Math.max(440)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
  
    .addField(":shield:  Armure de sorcier reconnu", "HP: " + y + ":hearts: \n Mana: " + x +":sparkles: ")
    .setColor("#010461")
    message.channel.sendMessage(y);    
}
if(message.content === préfix + "Parchemin"){
    var help_embed = new Discord.RichEmbed()
    .addField("Parchemin", "Ils sont tous à utilisation unique")
    .addField("Liste des parchemins", "?Parchemin de fuite \n ?Parchemin d'invocation \n ?Parchemin de message")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}
    
  if(message.content === préfix + "Parchemin de message"){
    var help_embed = new Discord.RichEmbed()
    .addField("Parchemin de message simple", "5 pièces de bronze \n peut envoyer un message à une personne et ne peut contenir que 3 phrases maximum")
    .addField("Parchemin de message", "15 pièces de bronze \n 2 pièces d'argent \n  peut envoyer un message à une personne avec un objet si besoin")
    
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}  
if(message.content === préfix + "Parchemin d'invocation'"){
    var help_embed = new Discord.RichEmbed()
    .addField("???", "Pas encore dispo")
    
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Parchemin de fuite"){
    var help_embed = new Discord.RichEmbed()
    .addField("Parchemin de fuite simple", "50 pièces de bronze \n Utilisation une fois achetté: ?Parchemin de fuite simple")
    .addField("Parchemin de fuite", "80 pièces de bronze \n  15 pièces d'argent \n  Utilisation unef ois achetté: ?Parchemin de fuite normal")
    .addField("Parchemin de fuite haut", "150 pièces de bronze \n 30 pièces d'argent \n  5 pièces d'or \n Utilisation une fois achetté: ?Parchemin de fuite haut")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Parchemin de fuite simple") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var result = new Discord.RichEmbed() 
    .setColor("#00ff37")
    .setAuthor("Le parchemin vous téléporte à votre domicile")
    if(50 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Le parchemin ne fonctionne pas")
    message.channel.send(result);

}
if(message.content === préfix + "Parchemin de fuite normal") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 65)
    var result = new Discord.RichEmbed() 
    .setColor("#00ff37")
    .setAuthor("Le parchemin vous téléporte à votre domicile")
    if(65 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Le parchemin ne fonctionne pas")
    message.channel.send(result);

}
if(message.content === préfix + "Parchemin de fuite haut") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 80)
    var result = new Discord.RichEmbed() 
    .setColor("#00ff37")
    .setAuthor("Le parchemin vous téléporte à votre domicile")
    if(80 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Le parchemin ne fonctionne pas")
    message.channel.send(result);

}     
if(message.content === préfix + "Mort créature des marécages"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(3)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze")
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}    
    if(message.content === préfix + "Mort arbre maudit"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(10)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze")
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}    
   
if(message.content === préfix + "Mort lézard primitif"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(20)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze")
    .setColor("#ab5902")
    message.channel.sendMessage(y);
}     
    if(message.content === préfix + "Entre dans le petit donjon"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La porte se referme avec l'aide d'une magie inconnu :interrobang: ")
    .setColor("#ff0000")
    .setDescription("Vous et vos compagnons êtes maintenant enfermés dans le donjon, personne ne peut venir vous chercher et le seul moyen dans sortir c'est de finir le donjon. Les parchemins de fuites sont inutiles")
    .addField("Fonctionnement du donjon", "Vous devez donc utiliser la même commande qui est: \n ?Déplacement petit donjon \n après avoir remplie les conditions du déplacement, vous changerez de chanel jusqu'à arriver à la salle du boss. ?Petit donjon boss")
    .setImage("https://i.pinimg.com/originals/f9/b5/58/f9b558b5dcdb2f413ea08407c77c043e.jpg")
    .setFooter("Donjon")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Déplacement petit donjon"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Vous trouvez un passage rapide :soon: ")
    .setDescription("Vous avez de la chance ! Rien à l'horizon et vous accédez à l'étage suivant sans trop de problème")
    .setImage("https://i.pinimg.com/236x/b3/f7/07/b3f707e59b2f4a30fd37b92cb8b43bd7--the-dungeon-concept-art.jpg")
    .setFooter("Donjon")
    .setColor("#000000")
    else if(result < 50)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Reptile Tank")
    .setDescription("Un Reptile se trouve en plein sur votre passage, vous devez obligatoirement l'affrontez pour continuer votre route et accéder au prochain étage")
    .addField("HP", "75 :heart: ")
    .addField(":knife: Attaque", "?Reptile tank attaque")
    .addField(":shield: Défense", "?Reptile tank défense")
    .setImage("https://jolstatic.fr/www/captures/1876/9/83459.jpg")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Archer masqué")
    .setDescription("Un archer se trouve en haut d'une tour, vous devez obligatoirement l'affrontez pour continuer votre route et accéder au prochain étage")
    .addField("HP", "45 :heart: ")
    .addField(":bow_and_arrow:  Attaque", "?Archer masqué attaque")
    .addField(":shield: Défense", "?Archer masqué défense")
    .setImage("https://cdn.discordapp.com/attachments/539900275280969746/542014866970378240/367cf2462847232dc762837575f240ba.png")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Reptile tank attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(16)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 70)
    var y = Math.floor(Math.floor(y) *1.2)
        if(result < 70)
    var y = new Discord.RichEmbed()
    .addField("Le Reptile vous infliges un grand coup de poings violent dans le ventre", y)
    .setColor("#fb6f00")
        else
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Le Reptile attaque tout les ennemies d'un rugissement, les blessants en plus de leur infliger une provocation(durée: 2Tours)", y)
    .setImage("https://jolstatic.fr/www/captures/1876/9/83459.jpg")
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Reptile tank défense"){
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le Reptile tente de bloquer l'attaque du mieux qu'il peut", y)
    .setColor("#217504")
    message.channel.send(y);
}
    if(message.content === préfix + "Archer masqué attaque"){
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("L'archer vous tires une flèche en plein dans votre torse à l'aide de son arbalete"  , y)
    message.channel.send(y);
}

if(message.content === préfix + "Archer masqué défense") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 35)
    var result = new Discord.RichEmbed() 
    .setColor("#00ff27")
    .setTitle("L'archer fait une roulade sur le coter et évite l'attaque")
    if(35 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("L'archer se prends les dégats en plein dans le torse")
    message.channel.send(result);
}
    if(message.content === préfix + "Salle final"){
    var help_embed = new Discord.RichEmbed()
    .setTitle(":warning:  C'est l'heure du boss...")
    .setColor("#ff0000")
    .setDescription("Vous rentrez dans une salle en forme de cercle ou au centre se trouve un terrible ennemie qui est pret à vous en découdres")
    .addField("HP", "135 :heart: ")
    .addField(":knife: Attaque", "?Boss faible attaque")
    .addField(":shield: Défense", "?Boss faible défense")
    .addField("Une fois le boss mort", "?Donjon faible finit")
    .setImage("https://cdn.discordapp.com/attachments/539900275280969746/542015020133777409/cd80fa7470840140877e9915996a39b1.png")
    .setFooter("Donjon")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Boss faible attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 65)
    var y = Math.floor(Math.floor(y) *1.1)
    if(result > 80)
    var y = Math.floor(Math.floor(y) *0.9)
    if(result < 65)
    var y = new Discord.RichEmbed()
    .addField("Le lancier attaque d'un coup de lance vertical", y)
    .setColor("#1a00ff")
        else if (result < 80)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Le lancier vous charges et vous ne pouvez pas bloquer l'attaque", y)
       else
       var y = new Discord.RichEmbed()
       .setColor("#000000")
    .addField("Le lancier vous infliges un coup d'estoc ce qui vous paralyses et vous empeches de vous défendres ou d'attaquer(durée: 1Tours)", y)
    .setImage("https://images-ext-2.discordapp.net/external/5DsovwwSu49CRIE7OPv7VIc2vqPXAzj5eC0EbDS5BJ8/https/cdn.discordapp.com/attachments/539900275280969746/542015020133777409/cd80fa7470840140877e9915996a39b1.png?width=388&height=559")
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "Boss faible défense"){
    var min = Math.floor(Math.min(12));
    var max = Math.floor(Math.max(18)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le lancier bloque votre attaque sans trop de difficulté", y)
    .setColor("#ff0000")
    message.channel.send(y);
}
    
    if(message.content === préfix + "Donjon faible finit"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Vous obtenez un parchemin de fuite simple")
    .setImage("https://media.discordapp.net/attachments/499161815549476864/545186073806897173/f5f4818c26697205c9e9ebf823a5f987.jpg?width=414&height=559")
    .setFooter("Donjon")
    .setColor("#000000")
    else if(result < 50)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Vous obtenez des pièces")
    .setDescription("5 Pièces d'argent et 20 pièces de bronze")
    .setColor("#f0ff00")
    else if (result < 75)
     var help_embed = new Discord.RichEmbed()
    .setTitle("Vous obtenez des potions")
    .setDescription("Vous trouvez 2 potions de soins faible")
    .setImage("https://images-ext-1.discordapp.net/external/1swjVmJawpL2QX_ZC4Z83EqQ2FngkYvGT9exbMF29Lk/https/media.discordapp.net/attachments/542028605874634752/542053551619440640/568061fd015a05580add57ed64de815e.png")
    .setColor("#ff0000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Vous obtenez des potions")
    .setDescription("Vous trouvez 2 potions de mana faible")
    .setImage("https://images-ext-2.discordapp.net/external/w3INPO_dL0WbmSd7eTRYAQELeZ0f_caaLJix6H5YkKE/%3Fwidth%3D404%26height%3D585/https/media.discordapp.net/attachments/542028605874634752/542053261130334228/da66dd28623e31be7cd6ff36e7a849ae.png?width=386&height=559")
    .setColor("#00ffe7")
    message.channel.sendMessage(help_embed);
}
    
    
    
 if(message.content === préfix + "Mort gobelin primitif"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(7));
    var max = Math.floor(Math.max(17)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(0));
    var maxs = Math.floor(Math.max(2)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}   
if(message.content === préfix + "Mort chouette du vent"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(26));
    var max = Math.floor(Math.max(45)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(4));
    var maxs = Math.floor(Math.max(6)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}       
if(message.content === préfix + "Mort géant de la forêt"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(70));
    var max = Math.floor(Math.max(100)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(20));
    var maxs = Math.floor(Math.max(35)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "PCP Combattant"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Combattant")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("3PC", "+10 dans les Roll d'action de force (exemple: donner un coup de poings)")
    .addField("8PC", "Vous avez de bonnes connaissances sur les armures et les armes")
    .addField("13PC", "+10 dans les Roll d'action de force (exemple: donner un coup de poings)")
    message.channel.sendMessage(help_embed);
}
    
  if(message.content === préfix + "PCP Paladin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Paladin")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("15PC", "Vous avez Roll +10 pour résister aus tentatives d'assommement")
    .addField("18P", "Vous êtes lourd et lent")
    .addField("20PC", "Votre grande apparence laisse croire à tout le monde que vous êtes un type qui n'a pas peur de prendre des coups")
    .addField("23PC", "Vous coulez rapidement avec votre armure, évitez l'eau")
    .addField("25PC", "Vous êtes résistant au combat de rue")
    .addField("27PC", "Tout les PC 20 ont peur de vous, comme si vous êtiez un collose")
    .addField("29PC", "On ne peut pas vous assommer si vous portez votre armure")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PCP Chevalier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Chevalier")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("15PC", "Vous êtes d'une agilité remarquable")
    .addField("18P", "Au simple regard on arrive à savoir que vous êtes un chevalier ")
    .addField("20PC", "Vous avez un bon cardio et une bonne endurance")
    .addField("23PC", "Votre apparence laisse à croire que vous êtes un chevalier qui est prêt à en découdre")
    .addField("25PC", "Vous êtes puissant en combat de rue")
    .addField("27PC", "Vous avez une bonne connaissance des armes lambdas")
    .addField("29PC", "Vous avez un mental d'acier, il sera très dur de vous corrompre ou de vous détruire mentalement")
    message.channel.sendMessage(help_embed);
}  
    
    
if(message.content === préfix + "PCP Mage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Mage")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("3PC", "Vous pouvez faires apparaitre une boule lumineuse de mana pour vous éclaire dans l'obscurité")
    .addField("8PC", "Vous pouvez vous méthamorphoser en humanoîde pendant 30minutes grand max(Si vous subisez des dégats, l'effet disparait)")
    .addField("13PC", "Vous pouvez voler en l'air pendant 10minutes grand maximum(Interdit en plein combat)")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "PCP Sorcier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Sorcier")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("15PC", "Vous pouvez faire apparaitre une image d'une taille inferieure a un homme. Elle est immobile et le moindre contact physique la fait disparaitre. Elle reste naturellement jusqu'à 30 minutes.")
    .addField("18P", "Vous pouvez invoquer un miroir permettant au mage d'observer une personne qu'elle connait personellement.")
    .addField("20PC", "Vous pouvez placer une marque sur une personne ou un objet, elle disparait si elle est placée a la lumière d'une orbe ou au bout de 24H. Elle permet au mage de connaitre l'emplacement de la marque, utilisable une fois par jour et uniquement sur une personne à la fois.")
    .addField("23PC", "Vous pouvez devenir totalement invisible sauf si, lui et ses habits sauf si l'Archer fait un roll > 90, il pourra alors vous détecter. Tout contact physique brise le sort. Utilisable une fois par jour")
    .addField("25PC", "Vous pouvez faire disparaitre un objet innanimé pour une durée d'une journée. Il doit peser moins de 10Kg")
    .addField("27PC", "Vous pouvez faire apparaitre un petit esprit(30cm de hauteur max) que vous pouvez contrôler à distance pour communiquer. Il ne traverse pas la matière et peut-être détruit")
    .addField("29PC", "Vous pouvez vous téléportez à une distance de max 10mètres. Utilisable 1 fois par jour")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "PCP Ranger"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Ranger")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("3PC", "+10 dans les Roll d'action visuelle (exemple: regarder au loin)")
    .addField("8PC", "Vous pouvez retrouver les traces de passage d'un joueur d'il y a 6heures (avec un Roll pour la recherche des traces). Mais vous ne pouvez pas encore reconnaitre leur nombre exacte")
    .addField("13PC", "+10 dans les Roll d'action visuelle (exemple: regarder au loin)")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "PCP Archer"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Archer")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("15PC", "Vous êtes d'une agilité remarquable")
    .addField("18P", "Les annimaux ne vous fuis pas")
    .addField("20PC", "Vous savez imiter le morts")
    .addField("23PC", "Vous arrivez à reconnaitre les détails d'une blessures d'une personne sans trop de difficulté")
    .addField("25PC", "Vous savez différencier les traces de pas de chaque personne que vous connaissez")
    .addField("27PC", "Vous avez une connaissance parfaite sur les plantes et la végétation")
    .addField("29PC", "Vous arrivez à connaitre au simple regard les capacités physiques d'une personne et si elle est armée ou non")
    message.channel.sendMessage(help_embed);
}
    
if(message.content === préfix + "PCP Voleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Voleur")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("3PC", "+10 dans les Roll d'action de discrétion (exemple: s'approcher dans le dos discrétement)")
    .addField("8PC", "+10 dans les Roll d'action d'agilité (exemple: esquiver un coup de poings ou escalader un arbre ou autre)")
    .addField("13PC", "+10 dans les Roll d'action de discrétion (exemple: s'approcher dans le dos discrétement)")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "PCP Assassin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Assassin")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("15PC", "Vous êtes d'une agilité remarquable")
    .addField("18P", "Vous êtes légers et avez une bonne endurance")
    .addField("20PC", "Vous êtes très bon en parcours")
    .addField("23PC", "Vous pouvez voler jusqu'à 10 pièces de bronze maximum dans les poches des autres(joueurs) avec un roll, si la personne fait un plus grand roll que vous, elle vous prend la main dans le sac")
    .addField("25PC", "Vous avez une grande dextérité")
    .addField("27PC", "Vous pouvez disparaitre dans un petit nuage de fumée pour réapparaitre derrière la personne que vous désirez (il faut qu'elle soit à une distance respectable) utilisable 1 fois par jour")
    .addField("29PC", "Vous pouvez vous fondre dans la masse devenant introuvable, utilisable 1 fois par jour")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Quêtes rang Cuivre"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 35)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chasse au monstre")
    .setDescription("éliminé 2monstres des marécages")
    .setColor("#000000")
    else if(result < 70)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde provisoire")
    .setDescription("Vous devez protéger la petit village en tant que mercenaire pendant 30minutes")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Tueur d'arbre")
    .setDescription("Vous devez tuer un arbre")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Quête rang Cuivre accomplie"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(5));
    var maxs = Math.floor(Math.max(10)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  Pièce(s) de bronze: " + x + "\n XP dans le rang cuivre: " + y)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Quêtes rang Fer"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 35)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chasse au monstre")
    .setDescription("éliminé 4monstres des marécages")
    .setColor("#000000")
    else if(result < 70)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde provisoire")
    .setDescription("Vous devez protéger la petit village en tant que mercenaire pendant 60minutes")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Tueur d'arbre")
    .setDescription("Vous devez tuer un arbre seul")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Quête rang Fer accomplie"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(8));
    var maxs = Math.floor(Math.max(15)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  Pièce(s) de bronze: " + x + "\n XP dans le rang Fer: " + y)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Quêtes rang Argent"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 35)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Le grand chasseur")
    .setDescription("Tuer un Lézard primitif")
    .setColor("#000000")
    else if(result < 70)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde provisoire")
    .setDescription("Vous devez protéger la petit village en tant que mercenaire pendant 120 minutes")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Tueur d'arbre")
    .setDescription("Vous devez tuer 3 arbre seul")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Quête rang Argent accomplie"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(15));
    var maxs = Math.floor(Math.max(20)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  Pièce(s) de bronze: " + x + "\n XP dans le rang d'Argent: " + y)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Quêtes rang Or"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 35)
    var help_embed = new Discord.RichEmbed()
    .setTitle("L'ultime combattant'")
    .setDescription("Tuer un Lézard primitif seul")
    .setColor("#000000")
    else if(result < 70)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Garde provisoire")
    .setDescription("Sauver une personne en difficulté(qui a ses HP en dessous de 90%)")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Explorateur")
    .setDescription("Vous devez tuer 2 monstres de la forêt mystique")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Quête rang Or accomplie"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(80));
    var max = Math.floor(Math.max(120)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(20));
    var maxs = Math.floor(Math.max(30)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var minss = Math.floor(Math.min(0));
    var maxss = Math.floor(Math.max(2)); 
    var q = Math.floor(Math.random() * (maxss - minss + 1) ) + minss;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  Pièce(s) de bronze: " + x + "\n :second_place:  Pièce(s) d'argent: " + q + "\n XP dans le rang Or: " + y )
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Quêtes rang Platine"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Tueur forêstier")
    .setDescription("Tuer 4 monstres dans la fort mystique seul")
    .setColor("#000000")
    else if (result < 101)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Tueur de chouette")
    .setDescription("Vous devez tuer 1 chouette seul")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Quête rang Platine accomplie"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(120));
    var max = Math.floor(Math.max(150)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(30));
    var maxs = Math.floor(Math.max(50)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var minss = Math.floor(Math.min(2));
    var maxss = Math.floor(Math.max(5)); 
    var q = Math.floor(Math.random() * (maxss - minss + 1) ) + minss;
    var y = new Discord.RichEmbed()
    .addField("Gain de la récompense de la quête :exclamation: ",  ":third_place:  Pièce(s) de bronze: " + x + "\n :second_place: Pièce(s) d'argent: " + q + "\n XP dans le rang Platine: " + y )
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Parade: " + w){
    var result = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(30)); 
    var w = w + (Math.random() * (max - min + 1) );
    if(result < 40)
    var w = new Discord.RichEmbed()
    .addField("Vous réussiez la parade et infligez de lourd dégats", y)
    if(result > 40)
    var w = new Discord.RichEmbed() 
    .setAuthor("Test il prend tout les dégats")
    message.channel.send(w);
}
    
    
if(message.content === préfix + "Parade"){
    var result = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(60)); 
    var w = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 30)
    var w = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .addField("Vous réussiez la parade et vous lui infligez ", w)
    .setImage("https://media.giphy.com/media/1yn1R1HrcRiOUuMQ01/giphy.gif")
    if(result > 30)
    var w = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre parade et subisez tout les dégats")
    .setImage("http://i.imgur.com/Lpv5HId.jpg")
    message.channel.send(w);
}
    
if(message.content === préfix + "Dash énèrgétique"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(35));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Vous subisez une partie des dégats que vous arrivez à réduire(-25 de mana)", y)
        else
    var y = new Discord.RichEmbed()
    .setAuthor("Vous faites un dash parfait et esquiver l'attaque(-50 de mana)" )
    .setImage("https://cdn.discordapp.com/attachments/541643841061519361/549958896098213901/dadadadadadadadadada.gif")
    message.channel.sendMessage(y);
}
    
    /// GROTTE
    
    
    
    if(message.content === préfix + "Grotte"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Explication du fonctionnement de la Grotte")
    .setColor("#ff0000")
    .setDescription("La grotte contient 5 étages, le principe est simple, Pour rentrer dans la grotte: ?Entrée de la grotte \n à chaque étages vous tapper la commande ?Grotte [numéro de l'étage] une fois cela fait et que vous aurez battue le monstre si il y en a un, vous devriez obligatoirement déscendre à l'étage inférieur. Une fois que vous voudrez sortir de la grotte, il faudra que vous fassiez tout les étages, un par un, dans le sens inverse.")
    .addField("Peut on rester dans la grotte ?", "Oui, mais pour cela il faut acheter un campement, il est utilisable jusqu'à que vous décidiez de sortir de la grotte.")
    .addField("Des recompenses à chaque étages ?", "à chaque étages si et seulement si vous avez affronté un mobs ?Récompenses grotte [numéro de l'étage]")
    .setFooter("Grotte")
    message.channel.sendMessage(help_embed);
}



if(message.content === préfix + "Entrée de la grotte"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#656161")
    .setTitle("Gardien de la grotte")
    .setDescription("Un golem garde l'entrée de la porte, pour rentrer à l'intérieure de celle-ci il faut le battre, à noter que pour sortir de la grotte vous n'aurez pas besoin de l'affronter")
    .addField("Point de vie", "500")
    .addField("Attaque", "?P Golem attaque")
    .addField("Défense", "Aucune")
    .setImage("https://i.pinimg.com/originals/0d/65/56/0d655654d1bfa8a40f6b7ab4dc7e715f.jpg")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "P Golem attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 70)
    var y = new Discord.RichEmbed()
    .addField("Le Golem vous écrases avec son poings de pierre", y)
    .setColor("#656161")
        if(result > 70)
    var y = new Discord.RichEmbed()
    .setColor("#656161")
    .setAuthor("Le golem est bien trop lent...Il ne vous touches pas")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Horde de goblin"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#37ac0f")
    .setTitle("Horde de goblin")
    .addField("Nombre d'énnemie: ", y)
    .addField("Point de vie d'un énnemie", "100")
    .addField("Attaque", "?H goblin attaque")
    .addField("Défense", "?H goblin défense")
    .setImage("https://vignette.wikia.nocookie.net/goblinslayer/images/e/ea/Goblins_Banda.PNG/revision/latest?cb=20180401005522&path-prefix=es")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "H goblin attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(55)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 30)
    var y = new Discord.RichEmbed()
    .addField("L'attaque perce votre armure et vous ne pouvez pas la bloquer", y)
    .setColor("#ac0f0f")
    else if (result < 60)
    var y = new Discord.RichEmbed()
    .setColor("#37ac0f")
    .addField("Le Goblin vous sautes dessus, essayant de vous planter une dague dans l'épaule", y)
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#37ac0f")
    .addField("Le Goblin vous tires une flèche dans le torse", y)
    message.channel.sendMessage(y);
}
if(message.content === préfix + "H goblin défense") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 30)
    var result = new Discord.RichEmbed() 
    .setColor("#00ff27")
    .setTitle("Le Gobelin fait un bond en arrière avant que vous puisez le toucher")
    .setImage("https://www.nautiljon.com/images/more/01/89/121798.jpg")
    if(30 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Le Gobelin se prend tout les dégats")
    message.channel.send(result);

}
    
    if(message.content === préfix + "Nomade fou"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#524b4b")
    .setTitle("Nomade fou")
    .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un homme armée, salement amoché, à sa tenue on pourrait penser qu'il est perdu dans la grotte depuis fort longtemps...")
    .addField("Point de vie d'un énnemie", "300")
    .addField("Attaque", "?Nomade attaque")
    .addField("Défense", "?Nomade défense")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Nomade attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(60));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 40)
    var y = new Discord.RichEmbed()
    .addField("Le Nomade vous donnes un tranchant vertical avant de faire un bond en arrière", y)
    .setColor("#524b4b")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#524b4b")
    .addField("le fou commence à courir autours de vous tout en vous jettant des petites dagues au niveau de vos jambes", y)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Nomade défense") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 30)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setTitle("Le nomade vous fais une parade et vous renvoie la moitié de vos dégats sans même que vous puisez vous défendre, si c'est une attaque à distance alors le Nomade se contentera d'ésquiver l'attaque")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")
    if(30 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#00ff27")
    .setAuthor("Le nomade ne fait pas attention à sa défense, il prend le coups sans broncher")
    message.channel.send(result);

}
if(message.content === préfix + "Paladin démon"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#820000")
    .setTitle("Paladin démon")
    .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un paladin avec des cornes qui semblait...Hostile")
    .addField("Point de vie d'un énnemie", "600")
    .addField("Attaque", "?P démon attaque")
    .addField("Défense", "?P démon défense")
    .setImage("https://i.pinimg.com/originals/33/b6/5f/33b65fef141b7dd31737f84e8dda02f8.jpg")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "P démon défense"){
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le paladin bloqua le coup à l'aide de son bouclier", y)
    .setColor("#820000")
    message.channel.send(y);
}
if(message.content === préfix + "P démon attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(55)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 60){
        var y = new Discord.RichEmbed()
        .addField("Le démon fit un grand geste de bras, venant vous donner un coup d'épée horizontal", y)
        .setColor("#820000") }
    else if(result < 80){
        var y = new Discord.RichEmbed() 
        .setColor("#820000")
        .addField("L'épée du paladin devient rouge et ce dernier vous envoies un slash rouge sanglant qui touche tout le groupe", y) }
    else if(result < 97){
        var y = new Discord.RichEmbed() 
        .setColor("#820000")
        .addField("Il vous fonce dessus et vous propulse contre un mur, vous empechant de bloquer au prochain tours ni même d'attaquer, vous ne serez même pas prit en compte dans le ciblage", y)
        .setImage("https://i.pinimg.com/originals/33/b6/5f/33b65fef141b7dd31737f84e8dda02f8.jpg")}
    else if(result < 101){
        var y = new Discord.RichEmbed() 
        .setDescription("Sa lame démoniaque vous infectes(sauf les automates et les démons)...Durant de 3jours(2 pour les Lézards et 1 pour les vampires)  votre personnage se vera constament avec des douleurs musculaires, il sera comme un chien souffrant le martyre et aura des halucinations de son passé visant à le briser mentalement")   
    }

    message.channel.send(y);

}

if(message.content === préfix + "Squelette"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(7));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#37ac0f")
    .setTitle("Squelette")
    .setDescription("Vous avancez dans l'obscurité quand soudainement...Une horde de squelette apparait")
    .addField("Nombre d'énnemie: ", y)
    .addField("Point de vie d'un énnemie", "30")
    .addField("Attaque", "?Squelette attaque")
    .addField("Défense", "Aucune")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/2/20/Overlord_II_EP03_051.png/revision/latest?cb=20180127032839")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Squelette attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(13)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 90)
    var y = new Discord.RichEmbed()
    .addField("Le squelette vous donnes un faible coup d'épée, malheureusement vous ne pouvez pas le bloquer à cause de l'obscurité et de la zone trop étroite", y)
    .setColor("#820000")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#820000")
    .setTitle("Le squelette s'éffondre au sol et meurt")
 
    message.channel.sendMessage(y);
}    
if(message.content === préfix + "Goblin champion"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#045713")
    .setTitle("Goblin champion")
    .setDescription("Vous arrivez au plus profond de la grotte...vous croisez alors un colosse sur votre route, gardant un petit coffre")
    .addField("Point de vie", "1500")
    .addField("Attaque", "?C goblin attaque")
    .addField("Défense", "?C goblin défense")
    .addField("Passifs", "?dégats au dessus de 500 divisé par 2")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/551019149409910809/unknown.png?width=994&height=560")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "C goblin attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(80));
    var max = Math.floor(Math.max(100)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 80)
    var y = Math.floor(Math.floor(y) * 2)

        if(result < 60)
    var y = new Discord.RichEmbed()
    .addField("Le Champion vous donnes un gros coup d'épée vous faisants reculer de bien 2 metres pour les plus résistants", y)
    .setColor("#045713")
        else if(result < 80)
    var y = new Discord.RichEmbed()
    .setColor("#045713")
    .setAuthor("Le Champion rate son attaque")
    else if(result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Le gobelin champion vous envoies valser contre une paroie de la grotte, vous sortant donc de la zone de combat, vous ne pouvez plus rien faire pendant 2 tours et vous ne pouvez pas être ciblé", y)
    .setImage("https://j.gifs.com/4Q85A2.gif")
    message.channel.sendMessage(y);
}
if(message.content === préfix + "C goblin défense"){
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 80)
    var y = new Discord.RichEmbed()
    .setTitle("Le champion prend tout les dégats en plein dans son torse")
    .setColor("#045713")
        if(result > 80)
    var y = new Discord.RichEmbed()
    .setColor("#045713")
    .setImage("https://j.gifs.com/ROgRZ0.gif")
    .setTitle("Le Champion ne prend aucun dégat du à un sacrifice forcé d'un goblin")
    message.channel.sendMessage(y);
}
    
    if(message.content === préfix + "Goblin champion + Horde de goblin"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#045713")
    .setDescription("Vous arrivez au plus profond de la grotte...vous croisez alors un colosse et des goblins devant lui sur votre route, gardant un gros coffre")
    .addField("Point de vie du goblin champion", "1500")
    .addField("Attaque du goblin champion", "?C goblin attaque")
    .addField("Défense du goblin champion", "?C goblin défense")
    .addField("Passifs", "Dégats au dessus de 500 divisé par 2")
    .addField("Nombre de goblin: ", y)
    .addField("Point de vie d'un goblin", "100")
    .addField("Attaque d'un goblin", "?H goblin attaque")
    .addField("Défense d'un goblin", "?H goblin défense")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/551019149409910809/unknown.png?width=994&height=560")
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "GC avec une Horde de goblin"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#045713")
    .setDescription("Vous arrivez au plus profond de la grotte...vous croisez alors un colosse et des goblins devant lui sur votre route, gardant un gros coffre")
    .addField("Point de vie du goblin champion", "1500")
    .addField("Attaque du goblin champion", "?C goblin attaque")
    .addField("Défense du goblin champion", "?C goblin défense")
    .addField("Passifs", "Dégats au dessus de 500 divisé par 2")
    .addField("Nombre de goblin: ", y)
    .addField("Point de vie d'un goblin", "100")
    .addField("Attaque d'un goblin", "?H goblin attaque")
    .addField("Défense d'un goblin", "?H goblin défense")
    .setImage("https://j.gifs.com/wVjOMz.gif")
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "Squelette faible"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#b1afaf")
    .setTitle("Squelette faible")
    .addField("Point de vie", "150")
    .addField("Attaque", "?F squelette attaque")
    .addField("Défense", "?F squelette défense")
    .setImage("http://fantasyartdesign.com/free-wallpapers/imgs/mid/cgRotFarmSkeleton-m.jpg")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "F squelette attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 80)
    var y = new Discord.RichEmbed()
    .addField("Le squelette vous donnes un coup d'épée", y)
    .setColor("#b1afaf")
        if(result > 80)
    var y = new Discord.RichEmbed()
    .setColor("#b1afaf")
    .addField("Le squelette vous lances un os en forme de pique en plein dans votre épaule, étant une attaque bien particulière, elle n'est pas bloquable", y)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "F squelette défense"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
     if(result < 80)
    var y = new Discord.RichEmbed()
    .addField("Le squelette essaye de bloquer l'attaque", y)
    .setColor("#b1afaf")
    if(result > 80)
    var y = new Discord.RichEmbed()
    .addField("Le squelette se prend le double des dégâts", y)
    .setColor("#ff0000")
    message.channel.send(y);
}

if(message.content === préfix + "Arrive grotte 1") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Grotte étage 1")
    if(50 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}

if(message.content === préfix + "Grotte étage 1") {
    var result = Math.floor((Math.random() * 100) + 1);
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 80){
        var y = new Discord.RichEmbed()
    .setColor("#b1afaf")
    .addField("Point de vie", "150")
    .addField("Attaque", "?F Squelette attaque")
    .addField("Défense", "?F Squelette défense")
    .setImage("http://fantasyartdesign.com/free-wallpapers/imgs/mid/cgRotFarmSkeleton-m.jpg")}
    else if(result < 101){
        var y = new Discord.RichEmbed() 
    .setColor("#37ac0f")
    .addField("Nombre d'énnemie: ", y)
    .addField("Point de vie d'un énnemie", "100")
    .addField("Attaque", "?H goblin attaque")
    .addField("Défense", "?H goblin défense")
    .setImage("https://vignette.wikia.nocookie.net/goblinslayer/images/e/ea/Goblins_Banda.PNG/revision/latest?cb=20180401005522&path-prefix=es")}
    

    message.channel.send(y);

}
if(message.content === préfix + "Arrive grotte 2") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Grotte étage 2")
    if(60 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}
    
    
 if(message.content === préfix + "Grotte étage 2") {
    var result = Math.floor((Math.random() * 100) + 1);
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 20){
        var y = new Discord.RichEmbed()
    .setColor("#b1afaf")
    .addField("Point de vie", "150")
    .addField("Attaque", "?F Squelette attaque")
    .addField("Défense", "?F Squelette défense")
    .setImage("http://fantasyartdesign.com/free-wallpapers/imgs/mid/cgRotFarmSkeleton-m.jpg")}
    else if(result < 80){
        var y = new Discord.RichEmbed() 
    .setColor("#37ac0f")
    .addField("Nombre d'énnemie: ", y)
    .addField("Point de vie d'un énnemie", "100")
    .addField("Attaque", "?H goblin attaque")
    .addField("Défense", "?H goblin défense")
    .setImage("https://vignette.wikia.nocookie.net/goblinslayer/images/e/ea/Goblins_Banda.PNG/revision/latest?cb=20180401005522&path-prefix=es")}
    else if(result < 101){
        var y = new Discord.RichEmbed() 
    .setColor("#524b4b")
    .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un homme armée, salement amoché, à sa tenue on pourrait penser qu'il est perdu dans la grotte depuis fort longtemps...")
    .addField("Point de vie d'un énnemie", "300")
    .addField("Attaque", "?Nomade attaque")
    .addField("Défense", "?Nomade défense")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")}

    message.channel.send(y);

}   
    
    if(message.content === préfix + "Grotte étage 3") {
    var result = Math.floor((Math.random() * 100) + 1);
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 20){
        var y = new Discord.RichEmbed()
        .setColor("#37ac0f")
        .addField("Nombre d'énnemie: ", y)
        .addField("Point de vie d'un énnemie", "100")
        .addField("Attaque", "?H goblin attaque")
        .addField("Défense", "?H goblin défense")
        .setImage("https://vignette.wikia.nocookie.net/goblinslayer/images/e/ea/Goblins_Banda.PNG/revision/latest?cb=20180401005522&path-prefix=es")}
    else if(result < 80){
        var y = new Discord.RichEmbed() 
        .setColor("#524b4b")
        .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un homme armée, salement amoché, à sa tenue on pourrait penser qu'il est perdu dans la grotte depuis fort longtemps...")
        .addField("Point de vie d'un énnemie", "300")
        .addField("Attaque", "?Nomade attaque")
        .addField("Défense", "?Nomade défense")
        .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")}
    else if(result < 101){
        var y = new Discord.RichEmbed() 
        var min = Math.floor(Math.min(7));
        var max = Math.floor(Math.max(15)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#37ac0f")
        .setDescription("Vous avancez dans l'obscurité quand soudainement...Une horde de squelette apparait")
        .addField("Nombre d'énnemie: ", y)
        .addField("Point de vie d'un énnemie", "30")
        .addField("Attaque", "?Squelette attaque")
        .addField("Défense", "Aucune")
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/2/20/Overlord_II_EP03_051.png/revision/latest?cb=20180127032839") }

    message.channel.send(y);

}
   
if(message.content === préfix + "Grotte étage 4") {
    var result = Math.floor((Math.random() * 100) + 1);
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 50){
        var y = new Discord.RichEmbed()
        .setColor("#37ac0f")
        .addField("Nombre d'énnemie: ", y)
        .addField("Point de vie d'un énnemie", "100")
        .addField("Attaque", "?H goblin attaque")
        .addField("Défense", "?H goblin défense")
        .setImage("https://vignette.wikia.nocookie.net/goblinslayer/images/e/ea/Goblins_Banda.PNG/revision/latest?cb=20180401005522&path-prefix=es")}
    else if(result < 101){
        var y = new Discord.RichEmbed() 
        var min = Math.floor(Math.min(7));
        var max = Math.floor(Math.max(15)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#37ac0f")
        .setDescription("Vous avancez dans l'obscurité quand soudainement...Une horde de squelette apparait")
        .addField("Nombre d'énnemie: ", y)
        .addField("Point de vie d'un énnemie", "30")
        .addField("Attaque", "?Squelette attaque")
        .addField("Défense", "Aucune")
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/2/20/Overlord_II_EP03_051.png/revision/latest?cb=20180127032839") }

    message.channel.send(y);

}

if(message.content === préfix + "Arrive grotte 3") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Grotte étage 3")
    if(60 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}
if(message.content === préfix + "Arrive grotte 4") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Grotte étage 4")
    if(60 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}

if(message.content === préfix + "Grotte étage 5") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20){
        var y = new Discord.RichEmbed()
      .setColor("#820000")
    .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un paladin avec des cornes qui semblait...Hostile")
    .addField("Point de vie d'un énnemie", "600")
    .addField("Attaque", "?P démon attaque")
    .addField("Défense", "?P démon défense")
    .setImage("https://i.pinimg.com/originals/33/b6/5f/33b65fef141b7dd31737f84e8dda02f8.jpg")  }
    else if(result < 101){
        var y = new Discord.RichEmbed() 
        var min = Math.floor(Math.min(7));
        var max = Math.floor(Math.max(15)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#37ac0f")
        .setDescription("Vous avancez dans l'obscurité quand soudainement...Une horde de squelette apparait")
        .addField("Nombre d'énnemie: ", y)
        .addField("Point de vie d'un énnemie", "30")
        .addField("Attaque", "?Squelette attaque")
        .addField("Défense", "Aucune")
        .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/2/20/Overlord_II_EP03_051.png/revision/latest?cb=20180127032839") }

    message.channel.send(y);

}

if(message.content === préfix + "Arrive grotte 5") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Grotte étage 5")
    if(60 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}
if(message.content === préfix + "Arrive grotte 6") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Grotte étage 6")
    if(60 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}
if(message.content === préfix + "Grotte étage 6") {
    var result = Math.floor((Math.random() * 100) + 1);
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 50){
        var y = new Discord.RichEmbed()
        .setColor("#524b4b")
        .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un homme armée, salement amoché, à sa tenue on pourrait penser qu'il est perdu dans la grotte depuis fort longtemps...")
        .addField("Point de vie d'un énnemie", "300")
        .addField("Attaque", "?Nomade attaque")
        .addField("Défense", "?Nomade défense")
        .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")}
 
    else if(result < 101){
        var y = new Discord.RichEmbed() 
        .setColor("#820000")
        .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un paladin avec des cornes qui semblait...Hostile")
        .addField("Point de vie d'un énnemie", "600")
        .addField("Attaque", "?P démon attaque")
        .addField("Défense", "?P démon défense")
        .setImage("https://i.pinimg.com/originals/33/b6/5f/33b65fef141b7dd31737f84e8dda02f8.jpg")   }

    message.channel.send(y);

} 
    
    
if(message.content === préfix + "Grotte étage 7") {
    var result = Math.floor((Math.random() * 100) + 1);
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 30){
        var y = new Discord.RichEmbed()
        .setColor("#524b4b")
        .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un homme armée, salement amoché, à sa tenue on pourrait penser qu'il est perdu dans la grotte depuis fort longtemps...")
        .addField("Point de vie d'un énnemie", "300")
        .addField("Attaque", "?Nomade attaque")
        .addField("Défense", "?Nomade défense")
        .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")}
 
    else if(result < 60){
        var y = new Discord.RichEmbed() 
        .setColor("#820000")
        .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un paladin avec des cornes qui semblait...Hostile")
        .addField("Point de vie d'un énnemie", "600")
        .addField("Attaque", "?P démon attaque")
        .addField("Défense", "?P démon défense")
        .setImage("https://i.pinimg.com/originals/33/b6/5f/33b65fef141b7dd31737f84e8dda02f8.jpg")   }
        else if(result < 101){
            var y = new Discord.RichEmbed() 
            .setColor("#045713")
            .setTitle("Goblin champion")
            .setDescription("Vous arrivez au plus profond de la grotte...vous croisez alors un colosse sur votre route, gardant un ?Petit coffre")
            .addField("Point de vie", "1500")
            .addField("Attaque", "?C goblin attaque")
            .addField("Défense", "?C goblin défense")
            .addField("Passifs", "Dégats au dessus de 500 divisé par 2")
            .addField("Une fois qu'il se fait tuer: le loot normal du mobs + ?Petit coffre grotte")
            .setImage("https://media.discordapp.net/attachments/454694319396356128/551019149409910809/unknown.png?width=994&height=560")}
    message.channel.send(y);

}
if(message.content === préfix + "Arrive grotte 7") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Grotte étage 7")
    if(70 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("C'est bien calme...")
    message.channel.send(result);

}

if(message.content === préfix + "Arrive grotte 8") {
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des monstres", "?Grotte étage 8")
    message.channel.send(result);

}
if(message.content === préfix + "Grotte étage 8") {
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#045713")
    .setDescription("Vous arrivez au plus profond de la grotte...vous croisez alors un colosse et des goblins devant lui sur votre route, gardant un gros coffre")
    .addField("Point de vie du goblin champion", "1500")
    .addField("Attaque du goblin champion", "?C goblin attaque")
    .addField("Défense du goblin champion", "?C goblin défense")
    .addField("Passifs", "Dégats au dessus de 500 divisé par 2")
    .addField("Nombre de goblin: ", y)
    .addField("Point de vie d'un goblin", "100")
    .addField("Attaque d'un goblin", "?H goblin attaque")
    .addField("Défense d'un goblin", "?H goblin défense")
    .addField("Une fois que tout le monde est mort (en bonus du loot des mobs): ?Coffre grotte")
    .setImage("https://j.gifs.com/wVjOMz.gif")
    message.channel.send(y);

}
    
    if(message.content === préfix + "Mort squelette faible"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(4));
    var max = Math.floor(Math.max(9)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze")
    .setColor("#ab5902")
    message.channel.sendMessage(y);
}  

if(message.content === préfix + "Mort horde de goblin"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(13));
    var max = Math.floor(Math.max(26)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(2));
    var maxs = Math.floor(Math.max(4)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 99)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 99)
    var y = new Discord.RichEmbed()
    .addField("Loot légendaire :exclamation: ", y + "?Dague d'assassin :dagger: " )
    .setColor("#e200ff")
    message.channel.sendMessage(y);
} 

if(message.content === préfix + "Mort paladin démon"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(35)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(5));
    var maxs = Math.floor(Math.max(8)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 99)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 99)
    var y = new Discord.RichEmbed()
    .addField("Loot légendaire :exclamation: ", "?Bouclier démoniaque :shield: ")
    .setColor("#e200ff")
    message.channel.sendMessage(y);
} 
if(message.content === préfix + "Mort nomade fou"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(35)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(5));
    var maxs = Math.floor(Math.max(8)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 99)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 99)
    var y = new Discord.RichEmbed()
    .addField("Loot légendaire :exclamation: ", "?épée de folie :crossed_swords: ")
    .setColor("#e200ff")
    message.channel.sendMessage(y);
} 

if(message.content === préfix + "Mort squelette"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(13));
    var max = Math.floor(Math.max(26)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(2));
    var maxs = Math.floor(Math.max(4)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 99)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 99)
    var y = new Discord.RichEmbed()
    .addField("Loot légendaire :exclamation: ", y + "?Livre abandonné :sparkles: ")
    .setColor("#e200ff")
    message.channel.sendMessage(y);
} 

if(message.content === préfix + "Mort goblin champion"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(100));
    var max = Math.floor(Math.max(150)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(25));
    var maxs = Math.floor(Math.max(50)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
} 
    
    
    if(message.content === préfix + "Dague d'assassin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#e200ff")
    .setTitle("Dague d'assassin")
    .setDescription("Cette dague retrouvé sur un cadavre de goblin est en réalité une bonne vieille dague que l'on retrouvé sur les assassins des temps modernes")
    .addField("Bonus", "?Coup de dague rapide \n ?Lancé de dague")
    .addField("Passifs", "La dague une fois lancé et arrivé à destination (même dans le rp passifs) va disparaitre puis réapparaitre sur son propriétaire")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Bouclier démoniaque"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#e200ff")
    .setTitle("Bouclier démoniaque")
    .setDescription("Ce bouclier est un bouclier des paladins guérriers des enfers")
    .addField("Bonus", "?Blocage démoniaque \n ?Trouble démoniaque")
    .addField("Passifs", "Le bouclier à comme une âme démoniaque à l'intérieur de lui, vous pouvez donc lui parler et créer des diaglogues, biensur il n'aura aucun effet sur la réalité mais cela permet de créer des intéractions. Seul le propriétaire peu entendre la voix. pouvant donc influencer la mentalité du personnage")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "épée de folie"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#e200ff")
    .setTitle("épée de folie")
    .setDescription("Cette épée forgeait par des nomades a subi de nombreuse rituel...Celle-ci a la particularité de dégradé la santé mental de son propriétaire")
    .addField("Bonus", "?Parade folle \n ?Rire de fou")
    .addField("Passifs", "Une fois par jour, vous devrez faire un ?Roll qui aura pour objectif de savoir si votre santé mental se dégrade ou si elle ne bouge pas. Attention l'épée ne pourra jamais améliorer votre santé mental, seul les liens sociaux le permettront")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Livre abandonné"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#e200ff")
    .setTitle("Livre abandonné")
    .setDescription("Ce livre abandonné appartenait à un ancien sorcier qui se dirigeait vers la voix de la mélancolie et de la nécromancie")
    .addField("Bonus", "?Tornade ténénbreuse \n ?Invocation de gardien")
    .addField("Passifs", "Ce livre abandonné vous permet de lire dans les pensées d'une personne avant de débuter une dicussion. Utilisable une fois par jour")
    message.channel.sendMessage(help_embed);
}
    
 

if(message.content === préfix + "Arc magique"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#e200ff")
    .setTitle("Arc magique")
    .setDescription("Cette arc magique a été façonné par des elfs durant des grandes guerres...")
    .addField("Bonus", "?Tir magique \n ?Pluie de fleche")
    .addField("Passifs", "Vous pouvez tirer des flêches téléguidé ")
    .setImage("https://i62.servimg.com/u/f62/12/53/84/36/arc_de11.jpg")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Blocage démoniaque"){
    var min = Math.floor(Math.min(80));
    var max = Math.floor(Math.max(110)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("")
    .addField("Votre bouclier prend une aura démoniaquue et aspire de votre mana pour bloquer le coups(-50 de Mana)", y)
    .setImage("https://i.pinimg.com/originals/33/b6/5f/33b65fef141b7dd31737f84e8dda02f8.jpg")
    message.channel.send(y);
}
if(message.content === préfix + "Parade folle"){
    var result = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(100));
    var max = Math.floor(Math.max(160)); 
    var w = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 35)
    var w = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .addField("Vous réussiez la parade et vous lui infligez :crossed_swords: ", w)
    .setImage("https://j.gifs.com/oVQQYK.gif")
    if(result > 35)
    var w = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre parade et subisez tout les dégats")
    .setImage("http://i.imgur.com/Lpv5HId.jpg")
    message.channel.send(w);
}
if(message.content === préfix + "Tornade ténénbreuse"){
    var result = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(200));
    var max = Math.floor(Math.max(250)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 50)
    var y = new Discord.RichEmbed()
    .addField("Vous envoyez un sort qui détruit votre adversaire, la compétence n'est pas bloquable(-175 de mana) :sparkles: ", y)
    .setImage("https://media.giphy.com/media/x49CbUokcHQZdaSyga/giphy.gif   ")
    .setColor("#000000")    
    if(result > 50)
    var y = new Discord.RichEmbed()
    .addField("Vous envoyez un sort qui détruit votre adversaire, la compétence n'est pas esquivable(-175 de mana) :sparkles: ", y)
    .setImage("https://media.giphy.com/media/x49CbUokcHQZdaSyga/giphy.gif   ")
    .setColor("#000000")    
    message.channel.send(y);
}

if(message.content === préfix + "Tir magique"){
    var min = Math.floor(Math.min(90));
    var max = Math.floor(Math.max(130)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous tirez une fleche magique(-30 de Mana)",":bow_and_arrow: "+ y)
    .setImage("https://media.giphy.com/media/kiJ8TzLnvfZdUhVcbW/giphy.gif")
    message.channel.send(y);
}

if(message.content === préfix + "Pluie de fleche"){
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous tirez en l'air, votre fleche explose et fait apparaitre une pluie de fleches qui blesse tout les ennemies(-50 de Mana)",":bow_and_arrow: "+ y)
    .setImage("https://cdn.discordapp.com/attachments/536292650698014731/551878057246326787/79925.png")
    message.channel.send(y);
}
if(message.content === préfix + "Invocation de gardien"){   
    var min = Math.floor(Math.min(200));
    var max = Math.floor(Math.max(300)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Fait apparaitre un golem de bois inoffensif qui se prendra tout les dégats à votre place", y + ":heart: ")
    .setImage("https://i.pinimg.com/originals/d0/0c/b9/d00cb927aa373746143cca0368271165.jpg")
    message.channel.send(y);
}
if(message.content === préfix + "Coup de dague rapide"){
        
    var min = Math.floor(Math.min(70));
   var max = Math.floor(Math.max(110)); 
   var y = Math.floor(Math.random() * (max - min + 1) ) + min;
      var result = Math.floor((Math.random() * 100) +1);
   if(result < 90)
   var y = new Discord.RichEmbed()
   .addField("Vous lui infligé un coup de dague rapide et lui infligé", y)
   .setColor("#ff6000")
   .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/b/ba/Overlord_II_EP06_097.png/revision/latest?cb=20180216051904")
   if(result > 90)
   var y = new Discord.RichEmbed()
   .setColor("#ff6000")
   .addField("Vous lui infligé un coup de dague rapide, il ne peut pas bloquer le coup ", y)
   .setImage("https://i.ytimg.com/vi/mmUlK_FAJqI/maxresdefault.jpg")
   message.channel.send(y);
}
if(message.content === préfix + "Lancé de dague"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor((Math.random() * 3) + 1);
    if(result < 2)
    var y = new Discord.RichEmbed()
    .addField("Vous tirez une flèche empoisonnée qui n'inflige aucun dégats mais un poison durant 1tours impossible à bloquer(-30 de Mana)", y)
    .setColor("#9f0000")
    .setImage("https://nerdblogdotcom.files.wordpress.com/2013/06/borborygmos-enraged.jpg")
    else if(x < 3)
    var y = new Discord.RichEmbed()
    .setColor("#4e8b27")
    .addField("Votre dague inflige des dégats pendant 3tours(-40 de Mana)", y)
    else if(x < 4)
    var y = new Discord.RichEmbed()
    .setColor("#4e8b27")
    .setTitle("Vous lancé une dague qui endort votre ennemie au prochain tours(-40 de Mana)")
    message.channel.sendMessage(y);
}
 if(message.content === préfix + "Trouble démoniaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(y < 30)
    var y = new Discord.RichEmbed()
    .addField("Votre bouclier fait trembler votre adversaire et lui réduit sa défense au prochain tours (-50 de mana)", y)
    .setColor("#820000")
        if(y > 30)
    var y = new Discord.RichEmbed()
    .setColor("#820000")
    .addField("Votre bouclier fait trembler de peur votre adversaire et lui réduit sa défense au prochain tours (-75 d'HP)", y)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Rire de fou"){
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
        if(result > 50)
    var y = new Discord.RichEmbed()
    .setTitle("Vous riez d'un rire fou et vous blessez volontairement par pur folie (-50HP)")
    .setColor("#524b4b")
    .setImage("https://uploads.disquscdn.com/images/7af7c32bd1be5c45c84036a4b5ae14dc18dbd008528130ac0be9b53e1347e9bc.gif")
        if(result < 50 )
    var y = new Discord.RichEmbed()
    .setColor("#524b4b")
    .setTitle("Vous riez d'un rire fou comme si vous aviez perdu le contrôle de vous mêmes, votre prochainne attaque fera doublement mal")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Petit coffre") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 25){
    var result = new Discord.RichEmbed() 
    .setTitle("3 Potion d'HP")
    .setColor("#f0ff00")}
    else if(result < 50){
    var result = new Discord.RichEmbed() 
    .setColor("#f0ff00")
    .setTitle("3 Potion de mana")}
    else if(result < 90){
    var result = new Discord.RichEmbed() 
    .setColor("#f0ff00")
    .setTitle("300 pièces de bronze et 30 d'argent")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
        .setColor("#f0ff00")
        .setTitle("Arc magique")
        .setDescription("Cette arc magique a été façonné par des elfs durant des grandes guerres...")
        .addField("Bonus", "?Tir magique \n ?Pluie de fleche")
        .addField("Passifs", "Vous pouvez tirer des flêches téléguidé ")
        .setImage("https://i62.servimg.com/u/f62/12/53/84/36/arc_de11.jpg")}
    

    message.channel.send(result);

} 
    
    if(message.content === préfix + "Gros coffre") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 25){
    var result = new Discord.RichEmbed() 
    .setTitle("5 Potion d'HP")
    .setColor("#f0ff00")}
    else if(result < 50){
    var result = new Discord.RichEmbed() 
    .setColor("#f0ff00")
    .setTitle("5 Potion de mana")}
    else if(result < 80){
    var result = new Discord.RichEmbed() 
    .setColor("#f0ff00")
    .setTitle("500 pièces de bronze et 50 d'argent")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
        .setColor("#f0ff00")
        .setTitle("Arc magique")
        .setDescription("Cette arc magique a été façonné par des elfs durant des grandes guerres...")
        .addField("Bonus", "?Tir magique \n ?Pluie de fleche")
        .addField("Passifs", "Vous pouvez tirer des flêches téléguidé ")
        .setImage("https://i62.servimg.com/u/f62/12/53/84/36/arc_de11.jpg")}
    

    message.channel.send(result);

}
    if(message.content === préfix + "@Lacarien#8386"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Merci de ping un autre staff")
        .setDescription("WHOWWWWWWWWWWW Je suis surchargé H24, alors vous me ferez le plaisir de ping un autre staff et non pas direct le fonda...C'est pas compliqué.")
        .setFooter("Vous me faites perdre 5 minutes de ma vie")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à utiliser la commande d'aide.")
    }

});














client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("?Help");
});
