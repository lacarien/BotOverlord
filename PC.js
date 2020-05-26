if(message.content === préfix + "PC Druid"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#8aff61")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?SortNaturel [Vos dégâts]``")
    .addField(":sparkles: **17PC**", "**Vous obtenez une nouvelle compétence :** :shield: ``?DBlocage [Dégâts reçu]``")
    .addField(":sparkles: **20PC**", "**Vous obtenez une nouvelle compétence :** :heartpulse: ``?DSoins [PV Max de la cible]``")
    .addField(":sparkles: **22PC**", "**Vous obtenez un bonus :** :blue_heart: ``100 de mana``")
    .addField(":sparkles: **25PC**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?DruidUltime [Vos mana max]``")
    .addField(":sparkles: **30PC**", "**__Vous pouvez devenir Grand druid ou Prêtre__**")
    .setFooter("Menu Druid")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "PC Voleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PC Voleur")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **1PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Dague [Vos dégâts]``\n**Vous obtenez une nouvelle compétence :** :shield: ``?Blocage [Dégâts que vous prennez]``")
    .addField(":sparkles: **5PC**", "**Vous obtenez un bonus :** :shield: ``2AR``")
    .addField(":sparkles: **10PC**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?Voleur ultime``")
    .addField(":sparkles: **10PC**", "**Vous obtenez une nouvelle compétence :** :shield: ``?Esquive``")
    .addField(":sparkles: **15PC**", "**__Vous pouvez devenir Assassin__**")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PC Mage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("PC Mage")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **1PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Magie [Vos dégâts]``\n**Vous obtenez une nouvelle compétence :** :shield: ``?Blocage [Dégâts que vous prennez]``")
    .addField(":sparkles: **5PC**", "**Vous obtenez un bonus :** :cyclone: ``20Mana``")
    .addField(":sparkles: **10PC**", "**Vous obtenez une nouvelle compéte   nce :** :fleur_de_lis: ``?Mage ultime``")
    .addField(":sparkles: **13PC**", "**Vous obtenez une nouvelle compétence :** :shield: ``?MBlocage [Dégâts que vous prennez]``")
    .addField(":sparkles: **15PC**", "**__Vous pouvez devenir Druid ou Sorcier__**")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "PC Combattant" || message.content === préfix + "PC combattant"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PC Combattant")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **1PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CoupEpee [Vos dégâts]``\n**Vous obtenez une nouvelle compétence :** :shield: ``?Blocage [L'attaque que vous recevez]``")
    .addField(":sparkles: **5PC**", "**Vous obtenez un bonus :** :heart: ``20HP``")
    .addField(":sparkles: **10PC**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?Combattant ultime``")
    .addField(":sparkles: **13PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CCoupEpee [Vos dégâts] ou bien ?PBlocage [Dégâts que vous prennez] selon votre futur choix de classe (le blocage pour le paladin et le coup d'épée pour le chevalier)``")
    .addField(":sparkles: **15PC**", "**__Vous pouvez devenir Paladin ou Chevalier__**")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "PC Ranger" || message.content === préfix + "PC ranger"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("PC Ranger")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **1PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Tir [Vos dégâts]``\n**Vous obtenez une nouvelle compétence :** :shield: ``?Blocage [Dégâts que vous prennez]``")
    .addField(":sparkles: **5PC**", "**Vous obtenez un bonus :** :crossed_swords: ``4AT``")
    .addField(":sparkles: **10PC**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?Ranger ultime``")
    .addField(":sparkles: **13PC**", "**Vous obtenez une nouvelle compétence :** :shield: ``?TirRapide [Vos dégâts]``")
    .addField(":sparkles: **15PC**", "**__Vous pouvez devenir Archer__**")
    message.channel.sendMessage(help_embed);
}



 
if(message.content === préfix + "PC Paladin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PC Paladin")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?PCoup [Vos dégâts]``")
    .addField(":sparkles: **18PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Provocation [Vos dégâts]``")
    .addField(":sparkles: **22PC**", "**Vous obtenez un bonus :** :heart: ``50HP``")
    .addField(":sparkles: **25PC**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?PaladinUltime [Vos HP max]``")
    .addField(":sparkles: **15PC**", "**__Vous pouvez devenir Gardien ou Clerc__**")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PC Chevalier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PC Chevalier")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15PC**", "**Vous obtenez une nouvelle compétence :** :shield: ``?CBlocage [L'attaque que vous recevez]``")
    .addField(":sparkles: **18PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CoupMultiple [Vos dégâts]``")
    .addField(":sparkles: **22PC**", "**Vous obtenez une nouvelle compétence :** :shield: ``?Parade [L'attaque que vous recevez]``")
    .addField(":sparkles: **25PC**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?ChevalierUltime [Vos dégâts]``")
    .addField(":sparkles: **15PC**", "**__Vous pouvez devenir Champion ou Berserk__**")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PC Berserk"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00295b")
    .setTitle("PC Berserk")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("30PC", "Vous gagnez 125HP / 25 de Mana / ?Aura de Berserk")
    .addField("33PC", "?B Coup d'épée")
    .addField("35PC", "?B blocage")
    .addField("37PC", "?Charge de berserk")
    .addField("39PC", "?Crie du monstre")
    .addField("41PC", "?Brise garde")
    .addField("43PC", "Berserk ultime")
    .addField("45PC", "Vous pouvez évoluer")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PC Ninja"){
var help_embed = new Discord.RichEmbed()
.setColor("#12110F")
.setTitle("PC Ninja")
.setDescription("Voici ce que vous pourrez gagner à chaque étape")
.addField("30PC", "Vous gagnez 100 Mana ainsi que ?Clonage")
.addField("33PC", "?Coup furtif")
.addField("35PC", "?Shurikens")
.addField("37PC", "?Bouclier d'adamantite")
.addField("39PC", "?Fumée sanglante")
.addField("41PC", "?Lame noir")
.addField("43PC", "Ninja ultime")
.addField("45PC", "Vous pouvez évoluer")
message.channel.sendMessage(help_embed);
}

    if(message.content === préfix + "PC Grand Sorcier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00e9fc")
    .setTitle("PC Grand Sorcier")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("30PC", "250 de Mana")
    .addField("33PC", "?Super blocage magique")
    .addField("35PC", "?Fuite volante")
    .addField("37PC", "?Renvoie")
    .addField("39PC", "?Sort de confusion")
    .addField("41PC", "?Blocage d'aura")
    .addField("43PC", "Grand Sorcier ultime")
    .addField("45PC", "Vous pouvez évoluer")
    
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PC Champion"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00295b")
    .setTitle("PC Champion")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("30PC", "Vous gagnez 100HP / 50 de Mana / ?L'épéiste")
    .addField("33PC", "?Ch Coup d'épée")
    .addField("35PC", "?Ch blocage")
    .addField("37PC", "?Enchainement d'ennemie ")
    .addField("39PC", "?Coup d'estoc")
    .addField("41PC", "Parade amélioré")
    .addField("43PC", "Champion ultime")
    .addField("45PC", "Vous pouvez évoluer")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PC Sorcier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("PC Sorcier")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Sort [Vos dégâts]``")
    .addField(":sparkles: **18PC**", "**Vous obtenez un nouvelle compétence :** :heartpulse:  ``?mSoin``")
    .addField(":sparkles: **22PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Tornade [Vos dégâts]``")
    .addField(":sparkles: **25PC**", "**Vous obtenez une nouvelle compétence :** :shield: ``?SorcierUltime``")
    .addField(":sparkles: **30PC**", "**__Vous pouvez devenir Grand sorcier ou Necromancien ou Prêtre__**")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PC Nécromancien"){
    var help_embed = new Discord.RichEmbed()
    .setColor(" #9fa6a6")
    .setTitle("PC Nécromancien")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("30PC", "250 de Mana ")
    .addField("33PC", "?Tombeau sinistre")
    .addField("35PC", "?Bouclier de squelette")
    .addField("37PC", "?Invocation chevalier")
    .addField("39PC", "?écrase coeur")
    .addField("41PC", "?Aura du Nécromancien")
    .addField("43PC", "Nécromancien ultime")
    .addField("45PC", "Vous pouvez évoluer")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PC Assassin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PC Voleur")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CoupDague [Vos dégâts]``")
    .addField(":sparkles: **18PC**", "**Vous obtenez un bonus :** :shield: ``?Esquive [dégâts que vous prennez]``")
    .addField(":sparkles: **22PC**", "**Vous obtenez une nouvelle compétence :** :bust_in_silhouette: ``?Camouflage``")
    .addField(":sparkles: **25PC**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?AssassinUltime [Vos dégâts]`")
    .addField(":sparkles: **30PC**", "**__Vous pouvez devenir Grand assassin ou Ninja__**")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PC Grand Assassin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PC Grand Assassin")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("30PC", "?Faible blocage")
    .addField("33PC", "?G coup de dague")
    .addField("35PC", "?Fuite amélioré")
    .addField("37PC", "?Dague sinistre")
    .addField("39PC", "?Poison de corruption")
    .addField("41PC", "?Le faux mort")
    .addField("43PC", "Grand Assassin ultime")
    .addField("45PC", "Vous pouvez évoluer")
    
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PC Archer"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("PC Archer")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?ATir [Vos dégâts]``")
    .addField(":sparkles: **18PC**", "**Vous obtenez une nouvelle compétence :** :shield: ``?AEsquive [dégâts reçu]``")
    .addField(":sparkles: **22PC**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?FlecheEmpoisonne [Vos dégâts]``")
    .addField(":sparkles: **25PC**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?ArcherUltime [Vos dégâts]``")
    .addField(":sparkles: **30PC**", "**__Vous pouvez devenir Grand archer ou Tireur d'élite__**")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PC Grand Archer"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("PC Grand Archer")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("30PC", "?50HP + 50 de Mana / ?Piège à loup")
     .addField("33PC", "?Tir puissant")
    .addField("35PC", "?Super fuite")
    .addField("37PC", "?Camouflage")
    .addField("39PC", "?Bandage")
    .addField("41PC", "?....")
    .addField("43PC", "GA ultime")
    .addField("45PC", "Vous pouvez évoluer")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "PC Classe Automaton"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("PC Classe Automaton")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("30PC", "100 de mana en plus / ?Dash énèrgétique")
    .addField("33PC", "?Tir explosif")
    .addField("35PC", "?Tir énèrgétique")
    .addField("37PC", "200 de Mana en plus / ?Réparation")
    .addField("39PC", "Renforcement")
    .addField("41PC", "?Invocation de drone")
    .addField("43PC", "Super bolt")
    .addField("43PC", "Vous pouvez évoluer")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PC Gardien"){
var help_embed = new Discord.RichEmbed()
.setColor("#04157f")
.setTitle("PC Gardien")
.setDescription("Voici ce que vous pourrez gagner à chaque étape")
.addField("30PC", "Vous gagnez 150HP / ?Aura du gardien")
.addField("33PC", "?G Coup d'épée")
.addField("35PC", "?G Blocage")
.addField("37PC", "?Hurlement provocateur")
.addField("39PC", "?Tremblemant de terre")
.addField("41PC", "?Attaque lourde")
.addField("43PC", "Gardien ultime")
.addField("45PC", "Vous pouvez évoluer")
message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "PC Clerc"){
var help_embed = new Discord.RichEmbed()
.setColor("#8c97d9")
.setTitle("PC Clerc")
.setDescription("Voici ce que vous pourrez gagner à chaque étape")
.addField("30PC", "50 de mana en plus / 100HP / ?Drapeau de défense")
.addField("33PC", "?Cl Coup d'épée")
.addField("35PC", "?Cl blocage")
.addField("37PC", "?Drapeau de soins")
.addField("39PC", "?Lourde épée")
.addField("41PC", "?Lumière aveuglante(si PNJ) / ?Lumière éblouissante(si joueur)")
.addField("43PC", "?Clerc ultime")
.addField("45PC", "Vous pouvez évoluer")
message.channel.sendMessage(help_embed);
}
