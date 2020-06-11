if(message.content === préfix + "LVL Druid"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#8aff61")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?SortNaturel [Vos dégâts]``")
    .addField(":sparkles: **17LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?DBlocage [Dégâts reçu]``")
    .addField(":sparkles: **20LVL**", "**Vous obtenez une nouvelle compétence :** :heartpulse: ``?DSoins [PV Max de la cible]``")
    .addField(":sparkles: **22LVL**", "**Vous obtenez un bonus :** :blue_heart: ``100 de mana``")
    .addField(":sparkles: **25LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?DruidUltime [Vos mana max]``")
    .addField(":sparkles: **30LVL**", "**__Vous pouvez devenir Grand druid ou Prêtre__**")
    .setFooter("Menu Druid")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "LVL Voleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PC Voleur")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **1LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Dague [Vos dégâts]``\n**Vous obtenez une nouvelle compétence :** :shield: ``?Blocage [Dégâts que vous prennez]``")
    .addField(":sparkles: **5LVL**", "**Vous obtenez un bonus :** :shield: ``2AR``")
    .addField(":sparkles: **10LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?Voleur ultime``")
    .addField(":sparkles: **10LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?Poison [Vos dégâts]``")
    .addField(":sparkles: **15LVL**", "**__Vous pouvez devenir Assassin__**")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "LVL Mage"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("PC Mage")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **1LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Magie [Vos dégâts]``\n**Vous obtenez une nouvelle compétence :** :shield: ``?Blocage [Dégâts que vous prennez]``")
    .addField(":sparkles: **5LVL**", "**Vous obtenez un bonus :** :cyclone: ``20Mana``")
    .addField(":sparkles: **10LVL**", "**Vous obtenez une nouvelle compéte   nce :** :fleur_de_lis: ``?Mage ultime``")
    .addField(":sparkles: **13LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?MBlocage [Dégâts que vous prennez]``")
    .addField(":sparkles: **15LVL**", "**__Vous pouvez devenir Druid ou Sorcier__**")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "LVL Combattant" || message.content === préfix + "LVL combattant"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PC Combattant")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **1LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CoupEpee [Vos dégâts]``\n**Vous obtenez une nouvelle compétence :** :shield: ``?Blocage [L'attaque que vous recevez]``")
    .addField(":sparkles: **5LVL**", "**Vous obtenez un bonus :** :heart: ``20HP``")
    .addField(":sparkles: **10LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?Combattant ultime``")
    .addField(":sparkles: **13LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CCoupEpee [Vos dégâts] ou bien ?PBlocage [Dégâts que vous prennez] selon votre futur choix de classe (le blocage pour le paladin et le coup d'épée pour le chevalier)``")
    .addField(":sparkles: **15LVL**", "**__Vous pouvez devenir Paladin ou Chevalier__**")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "LVL Ranger" || message.content === préfix + "LVL ranger"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("PC Ranger")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **1LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Tir [Vos dégâts]``\n**Vous obtenez une nouvelle compétence :** :shield: ``?Blocage [Dégâts que vous prennez]``")
    .addField(":sparkles: **5LVL**", "**Vous obtenez un bonus :** :crossed_swords: ``4AT``")
    .addField(":sparkles: **10LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?Ranger ultime``")
    .addField(":sparkles: **13LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?TirRapide [Vos dégâts]``")
    .addField(":sparkles: **15LVL**", "**__Vous pouvez devenir Archer__**")
    message.channel.sendMessage(help_embed);
}



 
if(message.content === préfix + "LVL Paladin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PC Paladin")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?PCoup [Vos dégâts]``")
    .addField(":sparkles: **18LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Provocation [Vos dégâts]``")
    .addField(":sparkles: **22LVL**", "**Vous obtenez un bonus :** :heart: ``50HP``")
    .addField(":sparkles: **25LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?PaladinUltime [Vos HP max]``")
    .addField(":sparkles: **30LVL**", "**__Vous pouvez devenir Gardien ou Clerc__**")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "LVL Chevalier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PC Chevalier")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?CBlocage [L'attaque que vous recevez]``")
    .addField(":sparkles: **18LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CoupMultiple [Vos dégâts]``")
    .addField(":sparkles: **22LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?Parade [L'attaque que vous recevez] [Vos dégâts]``")
    .addField(":sparkles: **25LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?ChevalierUltime [Vos dégâts]``")
    .addField(":sparkles: **30LVL**", "**__Vous pouvez devenir Champion ou Berserk__**")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "LVL Berserk" || message.content === préfix + "LVL berserk"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00295b")
    .setTitle("PC Berserk")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **30LVL**", "**Vous obtenez une nouvelle compétence :** :diamond_shape_with_a_dot_inside: ``?AuraBerserk [Vos HP]``")
    .addField(":sparkles: **33LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?BCoupEpee [Vos dégâts]``")
    .addField(":sparkles: **35LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?BBlocage [L'attaque que vous recevez]``")
    .addField(":sparkles: **37LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?ChargeBerserk``")
    .addField(":sparkles: **39LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Soif de sang``")
    .addField(":sparkles: **41LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?BriseGarde [Vos dégâts]``")
    .addField(":sparkles: **43LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?BerserkUltime [Vos HP max]``")  
    .addField(":sparkles: **45LVL**", "**__Vous pouvez devenir ???__**") 
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "LVL Champion" || message.content === préfix + "LVL champion"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1F618D")
    .setTitle("PC Champion")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **30LVL**", "**Vous obtenez une nouvelle compétence :** :diamond_shape_with_a_dot_inside: ``?AuraChampion [Vos HP]``")
    .addField(":sparkles: **33LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CCoupEpee [Vos dégâts]``")
    .addField(":sparkles: **35LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?CHBlocage [L'attaque que vous recevez]``") // Regen de mana
    .addField(":sparkles: **37LVL**", "**Vous obtenez une nouvelle compétence :** :crown: ``?Preux chevalier``") // Sur un alliée et se prend les dégâts mais peu contre attaquer
    .addField(":sparkles: **39LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?SOON``")
    .addField(":sparkles: **41LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CParade [L'attaque que vous recevez] [Vos dégâts]``")
    .addField(":sparkles: **43LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?ChampionUltime [Vos HP max] [N'importe quel quantité de mana]``") 
    .addField(":sparkles: **45LVL**", "**__Vous pouvez devenir ???__**")   
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "LVL Ninja"){
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

    if(message.content === préfix + "LVL Grand Sorcier"){
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


if(message.content === préfix + "LVL Sorcier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setTitle("PC Sorcier")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Sort [Vos dégâts]``")
    .addField(":sparkles: **18LVL**", "**Vous obtenez un nouvelle compétence :** :heartpulse:  ``?mSoin``")
    .addField(":sparkles: **22LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?Tornade [Vos dégâts]``")
    .addField(":sparkles: **25LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?SorcierUltime``")
    .addField(":sparkles: **30LVL**", "**__Vous pouvez devenir Grand sorcier ou Necromancien ou Prêtre__**")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "LVL Nécromancien"){
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

if(message.content === préfix + "LVL Assassin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PC Voleur")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?CoupDague [Vos dégâts]``")
    .addField(":sparkles: **18LVL**", "**Vous obtenez un bonus :** :shield: ``?Esquive [dégâts que vous prennez]``")
    .addField(":sparkles: **22LVL**", "**Vous obtenez une nouvelle compétence :** :bust_in_silhouette: ``?Camouflage``")
    .addField(":sparkles: **25LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?AssassinUltime [Vos dégâts]`")
    .addField(":sparkles: **30LVL**", "**__Vous pouvez devenir Grand assassin ou Ninja__**")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "LVL Grand Assassin"){
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
if(message.content === préfix + "LVL Archer"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#019521")
    .setTitle("PC Archer")
    .setDescription("```Voici ce que vous pourrez gagner à chaque étape```")
    .addField(":sparkles: **15LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?ATir [Vos dégâts]``")
    .addField(":sparkles: **18LVL**", "**Vous obtenez une nouvelle compétence :** :shield: ``?AEsquive [dégâts reçu]``")
    .addField(":sparkles: **22LVL**", "**Vous obtenez une nouvelle compétence :** :crossed_swords: ``?FlecheEmpoisonne [Vos dégâts]``")
    .addField(":sparkles: **25LVL**", "**Vous obtenez une nouvelle compétence :** :fleur_de_lis: ``?ArcherUltime [Vos dégâts]``")
    .addField(":sparkles: **30LVL**", "**__Vous pouvez devenir Grand archer ou Tireur d'élite__**")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "LVL Grand Archer"){
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

if(message.content === préfix + "LVL Classe Automaton"){
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
if(message.content === préfix + "LVL Gardien"){
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


if(message.content === préfix + "LVL Clerc"){
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
