if(message.content === préfix + "Classe" || message.content === préfix + "classe"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Classe de personnage")
    .addField(":dagger: **?Voleur**", "Vous êtes spécialisé dans les dégâts et êtes un DPS")
    .addField(":shield: **?Combattant**", "Vous êtes une classe pouvant être polyvalente ou bien vous spécialiser")
    .addField(":bow_and_arrow: **?Ranger**", "Vous êtes un DPS à distance privilisant les cibles solitaire")
    .addField(":cyclone: **?Mage**", "Classe pouvant être dans le DPS comme dans le soutien")
    .setImage("https://cdn.discordapp.com/attachments/696642608507912204/696722354176393306/unknown.png")
    .setFooter("Menu des classes")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Voleur"  || message.content === préfix + "voleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Voleur")
    .addField(":trident: **Bonus**", "Aucun")
    .addField(":chart_with_upwards_trend: **Liste des attaques du voleur**", "?LVL Voleur")
    .addField(":chart_with_downwards_trend: **Liste des passifs du voleur**", "?PCP Voleur")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du voleur en assassin PC 15")
    .setImage("https://coubsecure-s.akamaihd.net/get/b96/p/coub/simple/cw_timeline_pic/c6b4f22ba33/4f5366739caf7b081fecf/big_1474128121_image.jpg")
    .setFooter("Menu du voleur")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Assassin"  || message.content === préfix + "assassin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Voleur")
    .addField(":trident: **Bonus**", "Vous gagnez 2.5 d'armure en plus")
    .addField(":notepad_spiral: **Description**", "Vous êtes l'évolution du voleur, quelqu'un qui fait très mal !")
    .addField(":chart_with_upwards_trend: **Liste des attaques de l'assassin**", "?LVL Assassin")
    .addField(":chart_with_downwards_trend: **Liste des passifs de l'assassin**", "?PCP Assassin")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution de l'assassin en grand assassin PC 30")
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540206387842514985/Screenshot_2019-01-29-09-55-06-1.png")
    .setFooter("Menu de l'assassin")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Grand Assassin"  || message.content === préfix + "grand assassin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Grand Assassin")
    .addField(":trident: **Bonus**", "Aucun")
    .addField(":notepad_spiral: **Description**", "Vous êtes l'évolution de l'assassin, vous êtes l'un des plus grand DPS !")
    .addField(":chart_with_upwards_trend: **Liste des attaques du grand assassin**", "?LVL Gassassin")
    .addField(":chart_with_downwards_trend: **Liste des passifs du grand assassin**", "?PCP Gassassin")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du grand assassin en ???")
    .setImage("https://vignette.wikia.nocookie.net/ultimate-marvel-cinematic-universe/images/1/1c/Akuma.jpg/revision/latest?cb=20160826205715")
    .setFooter("Menu de Grand Assassin")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Ninja"  || message.content === préfix + "ninja"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Voleur")
    .addField(":trident: **Bonus**", "Aucun")
    .addField(":chart_with_upwards_trend: **Liste des attaques du voleur**", "?LVL Voleur")
    .addField(":chart_with_downwards_trend: **Liste des passifs du voleur**", "?PCP Voleur")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du voleur en assassin PC 15")
    .setImage("https://coubsecure-s.akamaihd.net/get/b96/p/coub/simple/cw_timeline_pic/c6b4f22ba33/4f5366739caf7b081fecf/big_1474128121_image.jpg")
    .setFooter("Menu du voleur")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Combattant"  || message.content === préfix + "combattant"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("Combattant")
    .addField(":trident: **Bonus**", "Vous avez 20HP en plus")
    .addField(":notepad_spiral: **Description**", "Vous êtes un combattant, un guerrier polyvalent")
    .addField(":chart_with_upwards_trend: **Liste des attaques du combattant**", "?LVL Combattant")
    .addField(":chart_with_upwards_trend: **Liste des passifs du combattant**", "?PCP Combattant")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du combattant en chevalier ou paladin PC 15")
    .setImage("https://images6.alphacoders.com/405/thumb-1920-405091.jpg")
    .setFooter("Menu du Combattant")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Paladin"  || message.content === préfix + "paladin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("Paladin")
    .addField(":trident: **Bonus**", "Vous avez 25HP en plus")
    .addField(":notepad_spiral: **Description**", "Vous êtes un paladin, un guerrier qui se dirige pour devenir un tank")
    .addField(":chart_with_upwards_trend: **Liste des attaques du paladin**", "?LVL Paladin")
    .addField(":chart_with_upwards_trend: **Liste des passifs du paladin**", "?PCP Paladin")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du paladin en clerc ou gardien PC 30")
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540955169005764671/Screenshot_2019-01-29-09-54-16-1.png")
    .setFooter("Menu du Paladin")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Gardien"  || message.content === préfix + "gardien"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("Gardien")
    .addField(":trident: **Bonus**", "Aucun")
    .addField(":notepad_spiral: **Description**", "Vous êtes un gardien....Un mur comme personne n'en a jamais vue !")
    .addField(":chart_with_upwards_trend: **Liste des attaques du gardien**", "?LVL Gardien")
    .addField(":chart_with_upwards_trend: **Liste des passifs du gardien**", "?PCP Gardien")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du gardien en ???")
    .setImage("https://i.pinimg.com/originals/5b/d0/db/5bd0dbb892a7ff1a52d5a105e58f285c.jpg")
    .setFooter("Menu du Gardien")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Clerc"  || message.content === préfix + "clerc"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("Clerc")
    .addField(":trident: **Bonus**", "Aucun")
    .addField(":notepad_spiral: **Description**", "Vous êtes un clerc, un tank qui fera également office de support !")
    .addField(":chart_with_upwards_trend: **Liste des attaques du clerc**", "?LVL Clerc")
    .addField(":chart_with_upwards_trend: **Liste des passifs du clerc**", "?PCP Clerc")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du clerc en ???")
    .setImage("https://images7.alphacoders.com/934/thumb-350-934065.jpg")
    .setFooter("Menu du Clerc")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Chevalier"  || message.content === préfix + "chevalier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("Chevalier")
    .addField(":trident: **Bonus**", "Vous avez 1 d'armure et 15 d'HP en plus.")
    .addField(":notepad_spiral: **Description**", "Vous êtes un chevalier, un guerrier polyvalent.")
    .addField(":chart_with_upwards_trend: **Liste des attaques du chevalier**", "?LVL Chevalier")
    .addField(":chart_with_upwards_trend: **Liste des passifs du chevalier**", "?PCP Chevalier")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du chevalier en champion ou berserk PC 30")
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/540975588173676579/1104530.png")
    .setFooter("Menu du Chevalier")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Berserk"  || message.content === préfix + "berserk"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00295b")
    .setTitle("Berserk")
    .addField(":trident: **Bonus**", ":heart: **100 HP**")
    .addField(":notepad_spiral: **Description**", "Vous êtes un berserk, un guerrier quelque peu fada du combat qui a des tendances de loup solitaire.")
    .addField(":chart_with_upwards_trend: **Liste des attaques du berserk**", "?LVL Berserk")
    .addField(":chart_with_upwards_trend: **Liste des passifs du berserk**", "?PCP Berserk")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du berserk en ??? au PC ??")
    .setImage("http://images6.fanpop.com/image/photos/37800000/Berserker-s-Rage-neonightclaw19-37822558-1920-1080.jpg")
    .setFooter("Menu Berserk")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Champion"  || message.content === préfix + "champion"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1F618D")
    .setTitle("Champion")
    .addField(":trident: **Bonus**", ":heart:**50HP et :cyclone: 50MA**")
    .addField(":notepad_spiral: **Description**", "Vous êtes un champion, quelqu'un de plus fort qu'un chevalier et de moins con qu'un Berserk.")
    .addField(":chart_with_upwards_trend: **Liste des attaques du berserk**", "?LVL Champion")
    .addField(":chart_with_upwards_trend: **Liste des passifs du berserk**", "?PCP Champion")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du berserk en ??? au PC ??")
    .setImage("https://i.pinimg.com/originals/42/04/fa/4204fa463bbe96c63a60b5f197826724.jpg")
    .setFooter("Menu Champion")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Ranger"  || message.content === préfix + "ranger"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("Ranger")
    .addField(":trident: **Bonus**", "Aucun")
    .addField(":chart_with_upwards_trend: **Liste des attaques du ranger**", "?LVL Ranger")
    .addField(":chart_with_upwards_trend: **Liste des passifs du ranger**", "?PCP Ranger")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du ranger en archer PC 15")
    .setImage("https://i.pinimg.com/originals/2e/e3/85/2ee38516c6cfb3c549c0d325605dc145.jpg")
    .setFooter("Menu Ranger")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Archer"  || message.content === préfix + "archer"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("Ranger")
    .addField(":trident: **Bonus**", "Vous gagnez 5 d'attaque en plus.")
    .addField(":chart_with_upwards_trend: **Liste des attaques du ranger**", "?LVL Archer")
    .addField(":chart_with_upwards_trend: **Liste des passifs du ranger**", "?PCP Archer")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution de l'archer en grand archer PC 30")
    .setImage("https://animeforums.net/uploads/monthly_2015_05/frame-1.jpg.b08b0dbda880aa8aa5892634662eac96.jpg")
    .setFooter("Menu Ranger")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Mage"  || message.content === préfix + "mage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("Mage")
    .addField(":trident: **Bonus**", "Vous avez 20 de mana en plus")
    .addField(":chart_with_upwards_trend: **Liste des attaques du mage**", "?LVL Mage")
    .addField(":chart_with_upwards_trend: **Liste des passifs du mage**", "?PCP mage")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du mage en sorcier ou druid PC 15")
    .setImage("https://static.zerochan.net/Evileye.%28Overlord%29.full.2317125.png")
    .setFooter("Menu Mage")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Druid"  || message.content === préfix + "druid"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("Druid")
    .addField(":trident: **Bonus**", "Vous avez 25 de mana en plus")
    .addField(":chart_with_upwards_trend: **Liste des attaques du druid**", "?LVL Druid")
    .addField(":chart_with_upwards_trend: **Liste des passifs du druid**", "?PCP Druid")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du Druid en prêtre ou grand druid PC 30")
    .setImage("https://images.alphacoders.com/767/thumb-350-767907.jpg")
    .setFooter("Menu Druid")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Sorcier"  || message.content === préfix + "sorcier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("Mage")
    .addField(":trident: **Bonus**", "Vous avez 2 d'attaque et 15 de mana en plus")
    .addField(":chart_with_upwards_trend: **Liste des attaques du mage**", "?LVL Sorcier")
    .addField(":chart_with_upwards_trend: **Liste des passifs du mage**", "?PCP Sorcier")
    .addField(":diamond_shape_with_a_dot_inside: **évolution**", "évolution du mage en necromancien ou grand sorcier ou prêtre PC 30")
    .setImage("https://i.pinimg.com/originals/c2/3c/0d/c23c0d8928b37bd3fe576f4e6f2ccecc.jpg")
    .setFooter("Menu Sorcier")
    message.channel.sendMessage(help_embed);
}


/// ULTIME PALIER 1 ///
    /// ULTIME PALIER 1 ///
        /// ULTIME PALIER 1 ///
            /// ULTIME PALIER 1 ///
            /// ULTIME PALIER 1 ///
        /// ULTIME PALIER 1 ///
    /// ULTIME PALIER 1 ///
/// ULTIME PALIER 1 ///

if(message.content === préfix + "Ranger ultime"  || message.content === préfix + "ranger ultime"){

    if (talkedRecently2.has(message.author.id)) {
        message.channel.send("Attendre 24H" + message.author);
    } else {
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("Ultime du ranger")
    .setDescription(":bow_and_arrow: **Vous venez à charger votre arc, suite à quoi pendant ce tour vous pourrez enchainer ''2 compétences''** :bow_and_arrow: ")
    .setImage("https://i.pinimg.com/originals/42/35/94/42359412eed3d55106f4ed83ac13a103.gif")
    .setFooter("Ranger")
    message.channel.sendMessage(help_embed);
    talkedRecently2.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
}

if(message.content === préfix + "Mage ultime"  || message.content === préfix + "Mage ultime"){

    if (talkedRecently2.has(message.author.id)) {
        message.channel.send("Attendre 24H" + message.author);
    } else {
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("Ultime du mage")
    .setDescription(":cyclone: **Vous venez à charger votre mana en vous. Votre prochaine compétence coûtera 0 de mana** :cyclone:")
    .setImage("https://66.media.tumblr.com/a673ad82a38c0cab2fc64dea6475098a/tumblr_oan4oe8Oe51twgfw0o1_500.gif")
    .setFooter("Mage")
    message.channel.sendMessage(help_embed);
    talkedRecently2.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
}

if(message.content === préfix + "Combattant ultime"  || message.content === préfix + "Combattant ultime"){

    if (talkedRecently2.has(message.author.id)) {
        message.channel.send("Attendre 24H" + message.author);
    } else {
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("Ultime du combattant")
    .setDescription(":shield: **Au prochain tour vous serez immunisé aux dégâts. Si la cible est seul, elle sera provoqué** :shield:")
    .setImage("https://31.media.tumblr.com/c160b59a52bb3259e79391a3ac8b1362/tumblr_moo6fjtpmA1rb06tgo2_500.gif")
    .setFooter("Combattant")    
    message.channel.sendMessage(help_embed);
    talkedRecently2.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
}

if(message.content === préfix + "Voleur ultime"  || message.content === préfix + "voleur ultime"){

    if (talkedRecently2.has(message.author.id)) {
        message.channel.send("Attendre 24H" + message.author);
    } else {
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Ultime du voleur")
    .setDescription(":dagger: **Cette compétence est utilisable à n'importe quel moment. Elle vous permet d'éviter l'attaque à 100%** :dagger:")
    .setImage("https://i.pinimg.com/originals/ea/2f/23/ea2f238c841768542bfcc232bd4fd22c.gif")
    .setFooter("Voleur")    
    message.channel.sendMessage(help_embed);
    talkedRecently2.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently2.delete(message.author.id);
        }, 86400000);
        }
}

/// COMPETENCE UTILITAIRE ///
    /// COMPETENCE UTILITAIRE ///
        /// COMPETENCE UTILITAIRE ///
            /// COMPETENCE UTILITAIRE ///
            /// COMPETENCE UTILITAIRE ///
        /// COMPETENCE UTILITAIRE ///
    /// COMPETENCE UTILITAIRE ///
/// COMPETENCE UTILITAIRE ///

if(message.content === préfix + "Camouflage" || message.content === préfix + "camouflage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Vous vous disimulez dans l'obscurité petit à petit...(-60 Mana)")
    .setDescription("Pendant 3 tours grand max, personne ne peus vous attaquer. Si vous attaquez vous sortez de votre invisibilité. Vous avez le choix entre faire une autre compétence qui sera imblocable, ou...: ``?BackStab [vos dégâts]``")
    .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/2/24/SAO_E06.png/revision/latest?cb=20140328034307")
    message.channel.sendMessage(help_embed);
}
  
