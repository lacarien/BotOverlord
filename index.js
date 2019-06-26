

const Discord = require('discord.js');

const client = new Discord.Client();

var préfix = "?";


client.login(process.env.TOKEN);


client.on('message', message => {
    
        if(message.content === préfix + "Help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Wiki")
        .setDescription("Vous aurez un résumé de l'univers")
        .addField("Personnage et stats", "C'est ici que vous comprendrez ce que vous devrez faire apres votre fiche")
        .addField("Race", "Liste des espèces")
        .addField("Classe", "Liste des classes")
        .addField("Métiers", "Liste des métiers")
        .addField("PC", "Menu des levels")
        .setImage("https://1.bp.blogspot.com/-GY5W6jVP850/WNwKqzuXizI/AAAAAAAABuM/AlfAEZ7FuDAK5y_qnZy0qp06wvCqM826QCLcB/s1600/Overlord_Characters.png")
        .setFooter("Menu de base")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à utiliser la commande d'aide.")
    }

    if(message.content === préfix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Wiki")
        .setDescription("Vous aurez un résumé de l'univers")
        .addField("Personnage et stats", "C'est ici que vous comprendrez ce que vous devrez faire apres votre fiche")
        .addField("Race", "Liste des espèces")
        .addField("Classe", "Liste des classes")
        .addField("Métiers", "Liste des métiers")
        .addField("PC", "Menu des levels")
        .setImage("https://1.bp.blogspot.com/-GY5W6jVP850/WNwKqzuXizI/AAAAAAAABuM/AlfAEZ7FuDAK5y_qnZy0qp06wvCqM826QCLcB/s1600/Overlord_Characters.png")
        .setFooter("Menu de base")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur à utiliser la commande d'aide.")
    }
    
    if(message.content === préfix + "Météo") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40){
    var result = new Discord.RichEmbed() 
    .setTitle("C'est un temps parfait, aucun nuage à l'horizon")
    .setColor("#00ff04")
    .setImage("https://s2.best-wallpaper.net/wallpaper/1920x1080/1711/Anime-trees-sunset-clouds-nature-landscape_1920x1080.jpg")}
    else if(result < 60){
    var result = new Discord.RichEmbed() 
    .setTitle("Aujourd'hui le temps n'est pas idéal, la pluie est au rendez-vous")
    .setColor("#00afff")
    .setImage("https://media.discordapp.net/attachments/549628514303737856/581863637170389012/fantasy-art-water-nature-reflection-rain-morning-29273-wallhere.com_1.jpg?width=895&height=560")}
    else if(result < 70){
        var result = new Discord.RichEmbed() 
        .setTitle("Vous pouvez sentir quelque chose sur vos épaules...Et oui c'est bien de la neige")
        .setColor("#6faecb")
        .setImage("http://s1.1zoom.me/b5050/208/400825-sepik_1400x1050.jpg")}
    else if(result < 85){
    var result = new Discord.RichEmbed() 
    .setTitle("La brume se lève, votre vision devient trouble")
    .setColor("#818e94")
    .setImage("https://s2.best-wallpaper.net/wallpaper/1920x1200/1807/Forest-trees-haze-fog-morning_1920x1200.jpg")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
        .setTitle("Le vent se lève, attention as vous")
        .setImage("http://cache.desktopnexus.com/thumbseg/2408/2408928-bigthumbnail.jpg")}
    

    message.channel.send(result);

}
    
    if(message.content === préfix + "Wiki"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Sommaire du wiki par zone")
    .setDescription("L'ancien temps \n Le royaume principal \n La zone sombre \n Les abysses \n L'arbre des morts")
   
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "L'ancien temps"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("L'ancien temps")
    .setDescription("La création du monde \n Les PNJ de l'ancien temps")
   
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Les PNJ de l'ancien temps"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Liste des PNJ principaux de l'ancien temps")
    .setDescription("Le grand prêtre \n La créatrice \n Le corrompu \n à venir")
   
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Le grand prêtre"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .addField("Surnom","Le grand prêtre")
    .addField("Nom", "Marnox")
    .addField("Participation dans l'ancien temps", "Marnox était avant la grande guerre un chercheur, l'un des fameux chercheurs qui avaient essayé de créer un être surpuissant ce qui en résultera un echec fatal. Il sera particulièrement en retrait durant la grande guerre.")
    .addField("Participation dans le temps actuel", "Après avoir franchi le portail, Marnox continuera ses recherches un temps, seul comme un ermite. Puis un jour il crut recevoir un message du monde passé...Il émit plusieurs hypotèses à cela et décida dans créer un culte dans le bute de créer l'être le plus puissant qui pourra améliorer et diriger ce nouveau monde")
    .addField("Un culte qui se base sur de simple présentiment...   ", "Marnox a crée sa cathédrale dans un des anciens mondes que la créatrice à sauvagement abandonné le considérant comme...Inutile. \n La cathédrale contient une statue d'une déesse, celle-ci représente le ''totem'' qui aurait pour bute de servir à la création du nouvelle être. Quand on regarde dans les yeux de la dèesse on arrive à connaitre un tant soit peu le culte bien qu'en aucun cas on est amené à y croire, après tout qui nous dis que cela n'est pas que pur mensonge ? ")
    .addField("Ce que dit la ''statue''", "La statue qui parle dans les pensées donneraient comme information que le bute du culte est d'attendre patiemment le réveille de l'être suprême, mais attendre de manière bienveillante en aidant les faibles sous-êtres et en ne laissant rentrer personne qui ne croirait pas au culte. Il faudra au passage suivre tous les ordres de Marnox, après tout, c'est pour le bien de l'humanité, non ? Les croyants seront considérés apôtre par l'église vide au bout de 1 semaine si la personne remplie l'éthique")
    .addField("éthique du culte", "1-Les membres et les apôtres doivent être respectueux de n'importe quel environnement \n 2-Ils doivent aider les sous-êtres qui soutiennent le culte \n 3-Ils doivent détruire les démons et doivent repousser les autres races le plus loin possible de l'église, après tout...C'est bien à cause de eux que le plan avait foiré, non ? \n 4-Ils ne doivent en aucun cas s'opposer aux ordres du grand prête, sinon quoi ils seront bannis de l'église et considéré comme une menace à réduire en cendre pour le bien de tous")
    .addField("utilité dans le RP ?", "Event")
    .addField("Influence dans le RP", "Event à risque pour le changement de comportement des croyants voir...Physique")
    .addField("Description physique", "En tenue de prêtre comme à son habitude")
    .setImage("http://vignette1.wikia.nocookie.net/berserk/images/0/05/Mozgus_Manga.jpg/revision/latest?cb=20140416220234")
   
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "La créatrice"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#9c00ff")
    .addField("Surnom","La créatrice")
    .addField("Nom", "Seminia")
    .addField("Participation dans l'ancien temps", "La créatrice a tout simplement combattue lors de la grande guerre, elle y perdra nombreux de ses camarades et lors de la loterie pour décider qui restera, et qui vivera, elle a vie se derniers proches disparaitre")
    .addField("Participation dans l'ancien temps", "Seminia remarquant la stupidité de ces guerres, elle avait cré des univers de tests, tell que la zone noir, tous étaient des echecs, elle a souvent envoyé son esclave réalisé des voeux à l'aide de ses pouvoirs voulant redonner un semblant de sourire à ce monde. Auparavant Marnox lui avait parlé du fameux ancien monde comme quoi leurs anciens compagnons étaient encore en vie sous...une  différente forme...Mais Seminia refusa catégoriquement cette théorie, faisant comprendre à Marnox que le passé devait rester en arrière et qu'il fallait changer ce monde en un monde de paix")
    .addField("Objectif et lien", "Seminia a abandonné le passé, désirant améliorer ce monde, créant une paix sans pareils, bien évidement...Cela est difficile, alors elle souhaite petit à petit créer une ville, puis un royaume, puis un monde (d'ou ses tests de dimension de poche). Elle a peu de lien avec les membres du passé, enfin...Uniquement avec Marnox bien qu'ils sont en désaccords sur beaucoup de points, il n'en reste pas moins qu'ils sont tous les 2 des anciens frères et soeur d'arme, aillant vécue le même passé")
    .addField("utilité dans le RP ?", "Groupe fixe ou bien Event lorsque le petit mage passe offrir des voeux")
    .addField("Influence dans le RP", "Event ou bien groupe fixe, il est conseillé de savoir argumenté devant ce personnage ou bien si vous rejoignez son groupe")
    .addField("Description physique", "Toujours la même tenue avec le même parfum qui l'entoure qui parait si harmonieux à l'odeur")
    .setImage("https://wallpaperscave.com/images/thumbs/wp-preview/800x500/18/08-17/anime-fateapocrypha-76745.jpg")
   
    message.channel.sendMessage(help_embed);
}
    
    
      if(message.content === préfix + "La création du mondes fail"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField("Underlord","Il y a de cela de très nombreuses génération il y avait simplement ce qu'on nommait les ''êtres supérieurs'' du à leur puissance, ces êtres peuplés la surface du monde et était peu nombreux, environ 1/10000 de la population d'aujourd'hui. Ils étaient tous puissants et uniques en leur genre. Les 9/10 étaient des ''humanoïdes'' de forte ressemblance à un humain étant donné qu'ils avaient pour la plupart des capacités physiques ou spirituels débordante. \n En ce temps la il n'y avait pas de démon, simplement les humanoïdes, les hauts elfes et une infinité d'espèces. \n Les automates avaient été pour la plupart crée en ce temps bien que les 3/4 fut abandonnés et reprit par des chercheurs du temps 'actuel' qui ont seulement fait 1/20 du travail des êtres supérieurs pour contempler leur oeuvres, autant dire que la différence intellectuelle des chercheurs d'avant comparés à aujourd'hui est littéralement énorme")
    .addField("Un début de faiblesse","Un début de faiblesse", "Avec le temps...Les êtres supérieurs créèrent des petites cités ou toute race étaient accéptés, mais cela était bien trop beau pour durer.... \n La différence intelectuelle des hauts elfes et des humanoïdes, la force physique des meilleurs chevaliers humanoïdes contre celle des meilleurs hauts Lézards....Et tout un dictionnaire de différence prouvait que ''L'humanoïde'' été l'être le plus polyvalent en tout point, mais celui qui ne sera jamais le meilleur dans un domaine si son oposant decide s'entrainer dans ce même domaine. \n C'est alors que l'humanoïde voulue dépasser les autres éspèces et les plus intéligent décidèrent de créer 2 entités. Ce qui en résultera 2 humains identiques à l'homme d'aujourdhui mais...Cette être été bien trop faible en tout point...Ils décidèrent de ce porter alors vers la recherche d'un nouvelle être")
    .addField("Le début d'un cauchemar"," Nos humains déssidèrent de créer 2 humains mais...Ils étaient bien trop faibles et leur Qi étaient néfaste à eux même. Alors ils ressayèrent mais cette fois-ci ils créèrent 2 Démons qui ressemblait à première vue à des humains, puis plus le temps passait, plus ces 2 démons commençait à devenir de plus en plus fort dépassant même les humanoïdes et toutes races confondues. Les 2 démons finiront par se rebeller envers leur maître qui seront dans l'incapacité de les stabiliser, leur force démonsielle faisait trember la terre ferme et terrifier même les plus forts Lézards. Les 2 démons rasèrent à eux seul leur cités ou ils avaient été crée mais la nouvelle se fit vite répendre...En seulement quelque jours les 10 000 êtres supérieurs restant étaient déjà en route pendant que nos 2 chères démons produisaient déjà en masse des nouveaux nées jusqu'à un nombre de 1 000 000 en seulement quelque jours.")
    .addField("Une guerre sans fin", "Le combat durera seulement une journée...Mais cette journée avait la sensation de duréer des siècles, aucun répis n'était permis de peur de perdre la victoire. les démons se faisaient réduire en cendre face aux êtres supérieurs d'Underlord, mais les 2 grands démons sacrifiaient plus rapidement leurs cellules pour créer des démons qu'il n'en mourait au large du front... \n plusieurs escouades d'élite fut créée ainsi qu'un bataillon regroupant les meilleurs pour son occuper. les escouades fut pour la plupart détruite...Mais permis à notre bataillon d'arriver au centre de la fournaise. Un combat intense eu lieu et la cohésion du groupe regroupant une personne de chaque espèce permis la victoire et la destruction des 2 démons. \n Malheureusement...Il y avait trop bien de démon et il ne restait que 2 000 être supérieurs souffrant le martyre et la fatigue, ils étaient tous fatigués, épuisés, La fin approche..") 
    .addField("Le choix crucial", "Leur puissance était faible, mais leur supériorité numérique était ahurissant. \n C'est alors qu'une décision fut prise... Tous les êtres supérieurs se regroupèrent à un endroit et les 200 meilleurs mages défensives se chargèrent de créer une barrière magique, laissant les démons exploser leur cranes et leur tentacules contre la barrière infranchissable, s'entassant comme des rats affaiblissant la protection à l'usure. Pendant que la barrière tenait le coups, les plus fidèles croyant et plus puissant mage se chargèrent de créer un ''monde parallèle'' ou ils y balancèrent nos 2 humains qui avaient été placés en phase d'hibernation ainsi que 2 clones féminin et masculin de chaque espèces sans oublie les automates. Ils avaient été crée sur place et d'une rapidité qui aura comme résultat d'affaiblir les espèces dans tous les domaines. \n 5minutes...Il restait 5 minutes avant que la barrière explose...") 
    .addField("Une lueur d'éspoir", "Nos êtres supérieurs étés des génies mais...Il était impossible de contenir le portail ouvert trop longtemps et il était impossible de faire rentrer tout le monde à l'intérieur de peur de créer de l'instabilité dans ce nouveau monde qui aura pour bute d'éviter les erreurs du passé. C'est alors que sur nos 1 800 humanoïdes ainsi que hauts êtres qui restaient, c'est alors que petit à petit avec une pièce de l'ancien temps, le pile ou face eu lieu, un moyen de choisir votre sort futur plutôt égale. Des forts pouvaient gagner, comme des plus faibles. Environ 500 personnes avaient été envoyé dans le portail quand aux autres....Ils eu à peine eu le temps de dire leur chaleureux adieu à leurs anciens proche que le bouclier se fit détruire. Leur seule solution a été de litéralement concentrer toute leur énérgie en une bombe pour réduire en cendre cette univers corrompu.") 
    .addField("Un nouveau monde", "Underlord était née, enfin...Le monde parallèle d'Underlord. Il restait donc nos ''survivants'', le problème est que la casi totalité était en phase d'hibernation, probablement que le voyage avait été trop ardu pour les plus faibles d'entre eux. \n Ils étaient un nombre de 10 que l'on surnormera les êtres dit ''divains'', ces derniers pris le choix de disperser au 4 coins du monde les personnes en hibernations tout en leur détruisant la mémoire pensants qu'il fallait cacher le passé pour créer un meilleur Futur.") 
    .setImage("https://media.discordapp.net/attachments/549628514303737856/582997634537488414/138323935360.png?width=749&height=469")
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "La création du monde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField("Underlord","Il y a de cela de très nombreuses génération il y avait simplement ce qu'on nommait les ''êtres supérieurs'' du à leur puissance, ces êtres peuplés la surface du monde et était peu nombreux, environ 1/10000 de la population d'aujourd'hui. Ils étaient tous puissants et uniques en leur genre. Les 9/10 étaient des ''humanoïdes'' de forte ressemblance à un humain étant donné qu'ils avaient pour la plupart des capacités physiques ou spirituels débordante. \n En ce temps la il n'y avait pas de démon, simplement les humanoïdes, les hauts elfes et une infinité d'espèces. \n Les automates avaient été pour la plupart crée en ce temps bien que les 3/4 fut abandonnés et reprit par des chercheurs du temps 'actuel' qui ont seulement fait 1/20 du travail des êtres supérieurs pour contempler leur oeuvres, autant dire que la différence intellectuelle des chercheurs d'avant comparés à aujourd'hui est littéralement énorme")
    .setImage("https://media.discordapp.net/attachments/549628514303737856/582997634537488414/138323935360.png?width=749&height=469")
    message.channel.sendMessage(help_embed);
}
    
     if(message.content === préfix + "La création du monde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField("Un début de faiblesse", "Avec le temps...Les êtres supérieurs créèrent des petites cités ou toute race étaient accéptés, mais cela était bien trop beau pour durer.... \n La différence intelectuelle des hauts elfes et des humanoïdes, la force physique des meilleurs chevaliers humanoïdes contre celle des meilleurs hauts Lézards....Et tout un dictionnaire de différence prouvait que ''L'humanoïde'' été l'être le plus polyvalent en tout point, mais celui qui ne sera jamais le meilleur dans un domaine si son oposant decide s'entrainer dans ce même domaine. \n C'est alors que l'humanoïde voulue dépasser les autres éspèces et les plus intéligent décidèrent de créer 2 entités. Ce qui en résultera 2 humains identiques à l'homme d'aujourdhui mais...Cette être été bien trop faible en tout point...Ils décidèrent de ce porter alors vers la recherche d'un nouvelle être")  
    message.channel.sendMessage(help_embed);
}
           if(message.content === préfix + "La création du monde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100") 
   .addField("Le début d'un cauchemar"," Nos humains déssidèrent de créer 2 humains mais...Ils étaient bien trop faibles et leur Qi étaient néfaste à eux même. Alors ils ressayèrent mais cette fois-ci ils créèrent 2 Démons qui ressemblait à première vue à des humains, puis plus le temps passait, plus ces 2 démons commençait à devenir de plus en plus fort dépassant même les humanoïdes et toutes races confondues. Les 2 démons finiront par se rebeller envers leur maître qui seront dans l'incapacité de les stabiliser, leur force démonsielle faisait trember la terre ferme et terrifier même les plus forts Lézards. Les 2 démons rasèrent à eux seul leur cités ou ils avaient été crée mais la nouvelle se fit vite répendre...En seulement quelque jours les 10 000 êtres supérieurs restant étaient déjà en route pendant que nos 2 chères démons produisaient déjà en masse des nouveaux nées jusqu'à un nombre de 1 000 000 en seulement quelque jours.")
    message.channel.sendMessage(help_embed);
}
    
         if(message.content === préfix + "La création du monde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField("Une guerre sans fin", "Le combat durera seulement une journée...Mais cette journée avait la sensation de duréer des siècles, aucun répis n'était permis de peur de perdre la victoire. les démons se faisaient réduire en cendre face aux êtres supérieurs d'Underlord, mais les 2 grands démons sacrifiaient plus rapidement leurs cellules pour créer des démons qu'il n'en mourait au large du front... \n plusieurs escouades d'élite fut créée ainsi qu'un bataillon regroupant les meilleurs pour son occuper. les escouades fut pour la plupart détruite...Mais permis à notre bataillon d'arriver au centre de la fournaise. Un combat intense eu lieu et la cohésion du groupe regroupant une personne de chaque espèce permis la victoire et la destruction des 2 démons. \n Malheureusement...Il y avait trop bien de démon et il ne restait que 2 000 être supérieurs souffrant le martyre et la fatigue, ils étaient tous fatigués, épuisés, La fin approche..") 
    .setImage("http://paperlief.com/images/demons-vs-angels-war-wallpaper-1.jpg")
    message.channel.sendMessage(help_embed);
}
           if(message.content === préfix + "La création du monde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField("Le choix crucial", "Leur puissance était faible, mais leur supériorité numérique était ahurissant. \n C'est alors qu'une décision fut prise... Tous les êtres supérieurs se regroupèrent à un endroit et les 200 meilleurs mages défensives se chargèrent de créer une barrière magique, laissant les démons exploser leur cranes et leur tentacules contre la barrière infranchissable, s'entassant comme des rats affaiblissant la protection à l'usure. Pendant que la barrière tenait le coups, les plus fidèles croyant et plus puissant mage se chargèrent de créer un ''monde parallèle'' ou ils y balancèrent nos 2 humains qui avaient été placés en phase d'hibernation ainsi que 2 clones féminin et masculin de chaque espèces sans oublie les automates. Ils avaient été crée sur place et d'une rapidité qui aura comme résultat d'affaiblir les espèces dans tous les domaines. \n 5minutes...Il restait 5 minutes avant que la barrière explose...") 
    .setImage("http://www.yukokusamurai.com/data/archive/img/3553549036.jpeg")
    message.channel.sendMessage(help_embed);
}
       if(message.content === préfix + "La création du monde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField("Une lueur d'éspoir", "Nos êtres supérieurs étés des génies mais...Il était impossible de contenir le portail ouvert trop longtemps et il était impossible de faire rentrer tout le monde à l'intérieur de peur de créer de l'instabilité dans ce nouveau monde qui aura pour bute d'éviter les erreurs du passé. C'est alors que sur nos 1 800 humanoïdes ainsi que hauts êtres qui restaient, c'est alors que petit à petit avec une pièce de l'ancien temps, le pile ou face eu lieu, un moyen de choisir votre sort futur plutôt égale. Des forts pouvaient gagner, comme des plus faibles. Environ 500 personnes avaient été envoyé dans le portail quand aux autres....Ils eu à peine eu le temps de dire leur chaleureux adieu à leurs anciens proche que le bouclier se fit détruire. Leur seule solution a été de litéralement concentrer toute leur énérgie en une bombe pour réduire en cendre cette univers corrompu.") 
    .setImage("http://cdn.knowledgehi.com/1920x1200/20121021/explosion%20looking%20for%20sci%20fi%20fantasy%20wallpapers%20for%20dual%20monitors%201920x1200%20wallpaper_www.knowledgehi.com_23.jpg")
    message.channel.sendMessage(help_embed);
}
       if(message.content === préfix + "La création du monde"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setImage("https://media.discordapp.net/attachments/549628514303737856/582997154805579786/fantasy-art-anime-planet-space-Earth-nebula-28625-wallhere.com.jpg?width=749&height=469")
    .addField("Un nouveau monde", "Underlord était née, enfin...Le monde parallèle d'Underlord. Il restait donc nos ''survivants'', le problème est que la casi totalité était en phase d'hibernation, probablement que le voyage avait été trop ardu pour les plus faibles d'entre eux. \n Ils étaient un nombre de 10 que l'on surnormera les êtres dit ''divins'', ces derniers pris le choix de disperser au 4 coins du monde les personnes en hibernations tout en leur détruisant la mémoire pensants qu'il fallait cacher le passé pour créer un meilleur Futur.") 
    message.channel.sendMessage(help_embed);
}
    
  
    
if(message.content === préfix + "Le royaume principal"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Le royaume principal")
    .setDescription("Le lore du royaume principal \n Les PNJ du royaume principal")
   
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Le lore du royaume principal"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Royaume principal")
    .setDescription("Création du royaume \n Royaume actuel")
   
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Création du royaume"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField("Création du royaume", "Après que nos êtres ''divins'' décidèrent de repartir dans leur coin, le monde fut enfin née, les humains du à leur grande population prirent le controle des 8/10 des terres, ne laissant qu'aux autres races de minuscules espaces pour vivres les empechant d'augmenter en population de peur de déborder et de se faire repérer par les humains qui automatiquement attaqueraient ces derniers. Néanmoins cela n'empechera pas aux autres espèces d'évoluer à leur manière.")
    .setImage("https://image.noelshack.com/fichiers/2017/16/1492529074-8-ville.jpg")
    message.channel.sendMessage(help_embed);
}
    
if(message.content === préfix + "Création du royaume"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField("Démon actuel", "Les démons qui étaient primitif dans le passé ont maintenant un minimum évolué bien qu'ils restent l'une des plus grandes menaces, cela en reste qu'il y a certain démon qui ont une forme humanoïde voir proche de celle d'autre espèce")
    .setImage("https://i.pinimg.com/originals/5e/dd/8a/5edd8a4f024348630d49c4c886416fd0.jpg")
    message.channel.sendMessage(help_embed);
}
    
    
    
    

    
if(message.content === préfix + "Zone sombre"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Zone sombre")
    .setDescription("Le lore de la zone sombre \n Les PNJ de la zone sombre")
   
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Les abysses"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("Les abysses")
    .setDescription("Le lore des abysses \n Les PNJ des abysses")
   
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "L'arbre des morts"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle("L'arbre des morts'")
    .setDescription("Le lore du grand arbre")
   
    message.channel.sendMessage(help_embed);
}

    
    if(message.content === "tu penses quoi de Octogone ?"){
    message.reply("`\n Octogone est moche, j'ai envie de vomir à chaque fois que je le voie, c'est insupportable. Une fois j'ai même eu envie de me suicider")
}

    if(message.content === "^^Kiss @Overlord#7651"){
    message.reply("PUTAIN MAIS LÂCHE MOI SALE SOUS ÊTRE")
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
        .addField("Attendre", "Liste des classes")
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
        .addField("Démon", "Vous êtes un Démon, un être diabolique")
        .addField("Vampire","Vous êtes un vampire qui peut s'averé être très dangereux")
        .addField("Lézard", "Vous êtes un lézard, vous avez une bonne défense")
        .addField("Elf", "Vous êtes un Elf, une espece noble et rare")
        .addField("Automaton", "Vous êtes un Automaton, intérieurement vous ressemblez fortement à une machine mais extérieurement...")
        .addField("Liche", "Vous êtes un ancien sorcier mort qui se maintient dans un état de mort-vivant grâce à ses pouvoirs magiques")
        .addField("Beastman","Vous êtes un homme ou une femme annimal")
        .addField("Demi démon","Cette race ne peut pas être pris lors de la création d'un personnage")
        .addField("Pour la précision sur les stats et autre", "?[Nom de votre race]")
        .addField("Pour les PCP", "?PCP [Race]")
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
    
    if(message.content === préfix + "Liche"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#a65fe2")
        .addField("Liche", "Vous êtes un ou une Liche, Vous avez une intéligence surdéveloppé, un vraie surdoué")
        .addField("Bonus", "La classe Nécromancien vous est résérvé et vous commencez avec un bonus de 30 de mana")
        .addField("Malus", "Vous avez un roll de -20 en résistance physique et si vous prenez une autre classe que mage vous subirez un malus de -50% d'HP")
        .setImage("https://i.pinimg.com/originals/4a/79/24/4a79245a91bf71321c25d624f6ff0163.jpg")
        .setFooter("Menu Liche")
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
    
    
    if(message.content === préfix + "Demi démon"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Demi démon")
        .setDescription("Vous êtes devenu un demi-démon. Vous avez perdu les PCP et les PC de votre ancienne race(vous gardez la PC 40) et vous recevez les 2 PC démon, mais également la première PCP démon bien qu'elle vous inflige la même sentence qu'à votre cible. \n vous êtes totalement fou en présence d'une autre race(sauf démon) essayant de mettre KO la personne, même si c'était un ami, alors cela se fera à contrecoeur")
        .addField("Bonus", "Vous êtes accepté par les autres démons bien qu'ils vous considèrent comme un esclave en premier lieu \n vous réduisez de 50% les dégats des sorts de soins")
        .addField("Malus", "Quotidiennement votre corps reçois des douleurs, comme par exemple vos yeux qui saignent, un mal de crane à en vouloir ce le taper contre un mur \n etc")
        .setImage("https://secure.static.tumblr.com/899b832161b8465d4c6bb8d704e3079a/ep3tyma/BBqni62m4/tumblr_static_tumblr_static__640.jpg ")
        .setFooter("Menu Demi démon")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Automaton"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#7c7c70")
        .addField("Automaton", "Vous êtes un Automaton, vous avez le corps d'une machine à l'apparence humaine")
        .addField("Bonus", "Vous avez une classe privilégié et avez une résistance parfaite au poison")
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
    
    if(message.content === préfix + "Nymphe"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#81b4bc")
        .setTitle("Nymphe")
        .setDescription("Vous êtes la représentation de ce qui pourrait se rapprocher à une déesse féminine. Vous avez des yeux et des cheveux argentés")
        .addField("Bonus", "étant la représentation d'une divinité vous êtes forcément belle \n +40 de mana :sparkles: ")
        .addField("Malus", "Vous êtes obligatoirement une femme et votre éspèce est grandement recherché pour être vendue au marcher noir \n -40 d'HP :broken_heart: ")
        .setImage("https://media.discordapp.net/attachments/534758707561496580/585846279977041948/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.webp?width=373&height=560")
        .setFooter("Menu Nymphe")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Démon"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#20ff00")
        .addField("Démon", "Vous êtes un Démon, vous avez une forme humanoïde bien que certain trait de votre apparence peuvent être différents que celui d'un humain")
        .addField("Bonus", "Vous régénèrez 2 fois plus vite votre mana et vos HP")
        .addField("Malus", "Les sorts de soins vous infliges des dégats")
        .setImage("https://www.manga-news.com/public/images/vols/overlord-light-novel-12-jp.jpg")
        .setFooter("Menu Lézard")
        message.channel.sendMessage(help_embed);
    }

if(message.content === préfix + "Beastman"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#a94329")
        .setTitle("Beastman")
        .setDescription("Vous êtes un homme ou une femme qui avait des ressemblances physiques à un animal")
        .addField("Bonus", "Vous vous entendez bien avec les lézards et les elfs")
        .addField("Malus", "Votre apparence ne vous permet pas forcément de rester totalement discret")
        .setImage("https://media.discordapp.net/attachments/536292650698014731/585798353187635210/thumb-1920-834932.png?width=936&height=585")
        .setFooter("Menu Beastman")
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
if(message.content === préfix + "Grand Assassin"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Grand Assassin", "Vous faites...Mal...")
        .addField("Maitre Assassin", "évolution de l'assassin à partir de 45C")
        .setImage("https://vignette.wikia.nocookie.net/ultimate-marvel-cinematic-universe/images/1/1c/Akuma.jpg/revision/latest?cb=20160826205715")
        .setFooter("Menu de Grand Assassin")
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
    if(message.content === préfix + "Gardien"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .setTitle("Gardien")
        .addField("Grand Gardien", "évolution du Gardien à partir de 45PC")
        .setImage("https://i.pinimg.com/originals/5b/d0/db/5bd0dbb892a7ff1a52d5a105e58f285c.jpg")
        .setFooter("Menu du Gardien")
        message.channel.sendMessage(help_embed);
    }
     if(message.content === préfix + "Clerc"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .setTitle("Clerc")
        .addField("Grand Clerc", "évolution du Clerc à partir de 45PC")
        .setImage("https://images7.alphacoders.com/934/thumb-350-934065.jpg")
        .setFooter("Menu du Clerc")
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
if(message.content === préfix + "Berserk"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00295b")
        .addField("Berserk", "On pourrait croire que vous foncez tête baissé...Mais il serait idiot de sous-estimez le monstre qui sommeille en vous ")
        .addField("Berserk sanglant", "évolution du Berserk à partir de 45PC")
        .setImage("http://images6.fanpop.com/image/photos/37800000/Berserker-s-Rage-neonightclaw19-37822558-1920-1080.jpg")
        .setFooter("Menu Berserk")
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
        .addField("PCP Commun", "?PCP commmune")
        message.channel.sendMessage(help_embed);
    }
if(message.content === préfix + "PCP Humain"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("PCP Humain")
    .setDescription("Vous êtes Humain, on ne dirait pas mais rien que le nom est pas mal, en effet, vous pouvez vous ballader partout dans les zones humaines sans avoir de problème")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "PCP Nymphe"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#81b4bc")
    .setTitle("PCP Nymphe")
    .setDescription(" Les Nymphes, étant des êtres Semi-Oniriques, possèdent un rythme de sommeil particulier qui s'accentue avec le temps.Plus une Nymphe est puissante , plus son sommeil est important. Lors que la Nymphe s'endort le corps physique de de la Nymphe se paralyse et un corps Onirique se forme. Celui-ci est un reflet de l'Esprit de la Nymphe, lorsque celui-ci subit un dommage, la santé mentale de la nymphe est alors directement impacté et la Nymphe se réveille alors faisant disparaître le Corps Onirique. Ce corps peux facilement se promener n'importe où dans le monde et interagir avec celui-ci comme il le souhaite. Celui-ci semble aussi réel que son corps d'origine, mais ne dispose pas de la capacité de supporter plus d'une seul attaque au vu de la faible résistance de celui-ci. En effets, en combat se prendre 1 pv de dommage signifie la destruction du corps onirique. \n Level 1/20 : Sommeil Aléatoire une fois par jour durant 4 heures \n Level 20/40 : Sommeil aléatoire de 12 heures \n Level 40 : Plus aucune contrainte")
    .addField("2-PCP Nymphe","Une nymphe dispose de la capacité à faire revivre des moments du passé d'une personne  en rêve mais aussi d'extraire et consommer les Rêves et Cauchemars de ceux-ci.")
    message.channel.sendMessage(help_embed);
}

    
    if(message.content === préfix + "PCP Elf"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#90c830")
    .setTitle("PCP Elf")
    .setDescription("Ils peuvent communiquer avec la nature, dans Les endroits où elle est fortement présente ils peuvent demander à cette dernier des informations (Les personnes qui sont passés par ici, leurs nombres, ce genre de choses) mais cela reste bien vague vous n'aurez jamais une description physique,un arbre n'a pas d'oeil. Et vous n'aurez pas une conversation entière d'un groupe.")
    message.channel.sendMessage(help_embed);
}
    
if(message.content === préfix + "PCP Vampire"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PCP Vampire")
    .setDescription("Bien que vous vivez graçe au sang des humains et que cela peu devenir pendant certaine période à récolter du sang, sachez que vous pouvez transformer une personne et une seul personne en vampire. Néanmoins pour éviter un trop gros nombre de transformation, sachez qu'il faudra d'abord demander à un staff qui vérifiera la liste de nombre de personne d'humain transformer en lien avec le nombre de vampire  et aussi il faut une réel raison qui tien la route, c'est le plus important")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PCP Lézard"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#7fff00")
    .setTitle("PCP Lézard")
    .setDescription("Vous êtes effrayant face aux autres races, vous êtes comme un colosse  et personne ne peus faire style de rien était (sauf une personne avec 15 PC de plus que vous)")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PCP Démon"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff7a00")
    .setTitle("PCP Démon")
    .setDescription("1 fois toute les 2 semaines, en fixant la personne droit dans les yeux vous pouvez enclencher une sorte de flash back lui remémorant tous les moments tragiques de sa vie, l'effet aura pour bute de le briser intérieurement même un grand musclor qui a un sang froid extrême sera affecté. L'effet durera 3 jours")
    .addField("2-PCP Démon","Le démon peu faire un pacte avec une autre personne (autre que démon, soyez logique). Le démon pourra: \n -Communiquer avec la personne par télépathie \n -Se téléporter à la personne deux fois par jour si est seulement si le démon ou bien la personne ne sont pas en combat(si vous êtes entrain de fuir cela ne marche pas) et la disparition et l'apparition du démon ne doit pas être en public et par ailleurs, c'est une invocation et non une prière \n -C'est un pacte donc...pour recevoir son aide et sa loyauté il faut bien sur un contre partie que seul le démon peut choisir d'accepter ou non et le démon peut modifier les thermes du contrat comme il le souhaite si la demande si la contre partie ne lui plait pas ou n'est pas à son avantage. C'est un démon donc...Les contre parties gentilles n'existent pas \n -La personne qui fait le pacte recevra un pentagramme(une marque) sur une partie du corps ")
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "PCP Liche"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a65fe2")
    .setTitle("PCP Liche")
    .setDescription("Vous n'avez ni besoin de boire, ni besoin de manger et vous ne ressentez pas la douleur bien que vous ressentez toujours la peur en cas de danger")
    .addField("2-PCP Liche","Vous pouvez communiquer spirituellement avec un ancien joueur mort si vous retrouvez son squelette, si la personne est morte il y a plus de 2 mois, alors cela ne fonctionne plus")
    message.channel.sendMessage(help_embed);
}
    
    
if(message.content === préfix + "PCP Beastman"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#a94329")
    .setTitle("PCP Beastman")
    .setDescription("Une fois par jour si vous avez déjà reniflé l'odeur d'une personne, vous pouvez suivre sa trace en vous concentrant sur son odorat récent( moins d'une heure), vous pourrez ensuite retrouver la personne. \n si vous vous arrêtez en cours de chemin, l'effet disparait \n si vous parlez en cours de chemin, l'effet disparait \n et une fois que vous êtes arrivé à destination, l'effet disparait")
    .addField("2-PCP Beastman", "Vous pouvez faire ressortir votre nature en aucun cas hostile selon votre éspèce initial. Par exemple un homme loups pourra faire facilement transparaitre un sentiment d'homme à tout faire envers son interlocuteurs. Un ours lui fera ressentir un sentiment protecteur. \n bien entendue vous ne pourrez pas faire ressentir un sentiment protecteur envers votre ennemie, logique. \n il est à noter que plus votre apparence se rapprochera d'un animal, plus cela aura un effet conséquent")
    message.channel.sendMessage(help_embed);

}
    
    if(message.content === préfix + "PCP Druid"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Druid")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("15PC", "Vous pouvez faire apparaitre un inventaire de poche qui peu contenir max 1 objet")
    .addField("18P", "Vous pouvez voir un léger filet de mana autour de la personne, celle-ci vous permets de savoir si la personne est triste, enragé, fou, heureux et j'en passe. Mais en aucun cas cela ne montre sa puissance")
    .addField("20PC", "Vous pouvez placer une marque sur une personne ou un objet, elle disparait si elle est placée a la lumière d'une orbe ou au bout de 24H. Elle permet au mage de connaitre l'emplacement de la marque, utilisable une fois par jour et uniquement sur une personne à la fois.")
    .addField("23PC", "Vous pouvez vous approcher doucement d'un animal, il ne vous feras jamais rien de stupide")
    .addField("25PC", "Vous pouvez faire disparaitre un objet innanimé pour une durée d'une journée. Il doit peser moins de 10Kg")
    .addField("27PC", "Vous pouvez invoquer un petit arbre qui pourra se ballader partout dans des endroits ou la nature y repose, mais en rien cela ne sera une grande aide. Vous pouvez lui parler mais...Il ne vous répondras pas")
    .addField("29PC", "Vous pouvez vous téléportez à une distance de max 10mètres. Utilisable 1 fois par jour")
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "PCP Gardien"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("PCP Gardien")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("32PC", "Le gardien n'est pas entraver par le poids grace au port constant de son armure, il peut porter 3 personnes en même temps sur lui, ou autres poids.")
    .addField("36PC", "Le gardien est imposant, il a le droit à un roll d'intimidation en duel ou conflit, en cas de réussite, il calme le jeux.")
    .addField("42PC", "Le gardien peut choisir un être vivant comme étant son protégé, il passera plus de temps avec cette personne, la protegeant de quiconque pourrait lui faire du mal")
   message.channel.sendMessage(help_embed);
}
    
        if(message.content === préfix + "PCP Grand Archer"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Grand Archer")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("32PC", "à votre apparence on sait que vous êtes un Archer qui n'est pas un simple amateur")
    .addField("36PC", "Le grand archer est un pisteur né, il arrive maintenant à suivre des traces de pas d'un groupe de personne et de savoir leur nombre exacte. (en lien avec la PCP 8 du ranger)")
    .addField("42PC", "Le Grand archer peu faire une esquive sans roll (à une attaque de RP passifs, impossible de l'utiliser si on essaye de vous assommer) une fois tout les jours maximum")
   message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "PCP Grand Assassin"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("PCP Grand Assassin")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("32PC", "Les portes ne sont plus un problèmes pour vous, vous les crochetez sans problèmes, cependant attention à ne pas vous faire repérer ")
    .addField("36PC", "L'assassin est un maitre de l'élimination rapide et discrète, quand il a acquis une cible sans ce faire repérer il à le droit à un bonus de +20 en discrétion")
    .addField("42PC", "Quand vous le croiser vous savez qu'il n'est pas la pour plaisanter et qu'il ne faut pas lui chercher des noises au risques de le regretter très amèrement ")
   message.channel.sendMessage(help_embed);
}
    
    
    if(message.content === préfix + "PCP Clerc"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#8c97d9")
    .setTitle("PCP Clerc")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("32PC", "Le Clerc est entouré d'une petite aura quand il le désire qui prouve sa bienveillance")
    .addField("36PC", "Le Clerc est tellement gentil, qu'il a du mal à refuser")
    .addField("42PC", "Le Clerc arrive à calmer quelqu'un en detresse psychologique ")
   message.channel.sendMessage(help_embed);
}
    
        if(message.content === préfix + "PCP commune"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#8c97d9")
    .setTitle("PCP Commune")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("20PC", "Vous avez une petite aura que vous pouvez faire sortir difficilement à l'aide d'un roll")
    .addField("30PC", "Vous avez une aura que vous pouvez faire sortir quand vous voulez")
    .addField("45PC", "Vous avez une aura plus grande que la moyenne que vous pouvez faire sortir quand vous voulez.")
   message.channel.sendMessage(help_embed);
}
    
    
    if(message.content === préfix + "PCP Classe Automaton"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#bcb9b6")
    .setTitle("PCP Classe Automaton")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("32PC", "Possibilité de changer 1 fois par moi d'apparence")
    .addField("36PC", "Votre énérgie commence à être si puissante que vous devez vous reposer régulièrement")
    .addField("42PC", "Vous n'avez pas peur de l'adversité")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PCP Berserk"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00295b")
    .setTitle("PCP Berserk")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("32PC", "Le berserk adore le combat, il est difficile pour lui de ne pas se mêler d'une bagarre pour prouver sa valeur d'animal")
    .addField("36PC", "Le berserk a un moral d'acier, son habitude a la vue du sang et des combats l'ont forgé, il est difficile de le destabilise/faire changer son point de concentration.")
    .addField("42PC", "La resistance du berserk est des plus fabuleuse, une fois par semaine, il peut encaisser un roll supérieur au sien et riposter")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PCP Ninja"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#12110F")
    .setTitle("PCP Ninja")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("32PC", "Le ninja est quasiment introuvable (-10 de perception le jour, -30 la nuit, pour les gens qui veulent vous trouver)")
    .addField("36PC", "Le ninja est tellement discret qu'il a du mal à s'exprimer")
    .addField("42PC", "Le ninja peut suivre en toute discrétion (indétectable) une personne pendant 30 min, utilisable 1 fois tout les 3 jours")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "PCP Champion"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#939696")
    .setTitle("PCP Champion")
    .setDescription("Voici ce que vous pourrez gagner à chaque étape")
    .addField("32PC", "Contrairement à ses compares combattants, le champion délaisse le poids de son armure pour sa mobilité, ce qui lui offre plus d'énergie et de mouvements : il se déplace plus aisément et rapidement, il peut décider d'attaquer en premier tant qu'un voleur n'est pas dans son groupe.")
    .addField("36PC", "Le champion donne confiance par sa carrure et sa finesse d'esprit. Il est un bon meneur d'équipe et ses coéquipiers lui font confiance.")
    .addField("42PC", "Champion : Pour la plupart de ses PCP, il est PRIMORDIAL pour le champion de maintenir une bonne entente avec les membres de son équipe. En cas contraire, ce sera l'échec de ses actions envers eux")
    message.channel.sendMessage(help_embed);
}

    if(message.content === préfix + "PC Humain"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#939696")
        .setTitle("PC Humain")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Sainte bénédiction")
        .addField("25PC", "Vous obtenez la compétence ?Multi classe")
        .addField("40PC", "Vous pouvez réaparaitre attention...C'est à vos risques et périls ?Réanimation")
        message.channel.sendMessage(help_embed);
    }
    
     if(message.content === préfix + "PC Nymphe"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#81b4bc")
        .setTitle("PC Nymphe")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Appel de la nature")
        .addField("25PC", "Vous obtenez la compétence ?Connaissance onirique")
        .addField("40PC", "Vous obtenez la compétence ?Mimétisme élémentaire")
        message.channel.sendMessage(help_embed);
    }

    
    if(message.content === préfix + "PC Liche"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#a65fe2")
        .setTitle("PC Liche")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "La liche peut invoquer un petit squelette de combat qui l'aide à combattre (?Invocation mini squelette)")
        .addField("20PC", "La liche peut invoquer un petit squelette de combat qui l'aide à combattre (?Invocation mini squelette 2)")
        .addField("25PC", "Vous obtenez 300 de mana :sparkles: et perdez 100HP :broken_heart:  \n pour ensuite obtenir ?Coquille squelettique")
        .addField("40PC", "La liche peut invoquer un petit squelette de combat qui l'aide à combattre (?Invocation mini squelette 3)")
        .addField("40PC", "La liche invoque un portail ou ressorte quotidiennement des squelettes (?Cimetiere ambulant")
        message.channel.sendMessage(help_embed);
    }
    
        if(message.content === préfix + "PC Beastman"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#a94329")
        .setTitle("PC Beastman")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Violente morsure")
        .addField("20PC", "Vous obtenez la compétence ?Violente morsure 2")
        .addField("25PC", "Vous obtenez la compétence ?Regard forceur")
        .addField("35PC", "Vous obtenez la compétence ?Violente morsure 3")
        .addField("40PC", "Vous obtenez la capacité ?Appelle à la meute")
        message.channel.sendMessage(help_embed);
    }

    
if(message.content === préfix + "PCP Automaton"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#bcb9b6")
    .setTitle("PCP Automaton")
    .setDescription("Il est impossible de vous assommer")
    message.channel.sendMessage(help_embed);
}

    if(message.content === préfix + "PC Vampire"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#dc322f")
        .setTitle("PC Vampire")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Drain de vie")
        .addField("15PC", "Vous obtenez la compétence ?Drain de vie 2")
        .addField("20PC", "Vous obtenez la compétence ?Drain de vie 3")
        .addField("25PC", "Vous obtenez la compétence ?Drain de vie 4")
        .addField("25PC", "Vous obtenez la compétence ?Blocage surhumain")
        .addField("30PC", "Vous obtenez la compétence ?Drain de vie 5")
        .addField("35PC", "Vous obtenez la compétence ?Drain de vie 6")
        .addField("40PC", "Vous obtenez la compétence ?Drain de vie 7")
        .addField("40PC", "Vous obtenez la compétence ?Transformation vampirique")
        .addField("45PC", "Vous obtenez la compétence ?Drain de vie 8")
        message.channel.sendMessage(help_embed);
    }
    
   

 if(message.content === préfix + "PC Démon"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#880606")
        .setTitle("PC Démon")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("10PC", "Vous obtenez la compétence ?Vague négative")
        .addField("25PC", "Vous obtenez la compétence ?Saignement démoniaque")
        .addField("40PC", "Vous obtenez la compétence ?Transformation démoniaque")
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
        .addField("20PC", "Vous obtenez la compétence ?Magic gun 2(si vous avez prit la classe Archer)")
        .addField("25PC", "Vous obtenez la compétence ?Réparation automatique")
        .addField("35", "Vous obtenez la compétence ?Magic gun 3(si vous avez prit la classe Automaton)")
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
        .addField("13PC", "Vous obtenez la compétence ?Esquive")
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
        .addField("13PC", "Vous obtenez la compétence ?Blocage magique")
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
        .addField("13PC", "Vous obtenez ?C Coup d'épée ou bien ?Blocage supérieure selon votre futur choix de classe (13PC) pour le combattant")
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
        .addField("10PC", "Vous obtenez la compétence ?Blocage rapide")
        .addField("15PC", "Vous pouvez devenir Archer")
        message.channel.sendMessage(help_embed);
    }
    
    

     
   if(message.content === préfix + "PC Paladin"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .setTitle("PC Paladin")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?P Coup d'épée + 60 de mana + ?Blocage supérieure")
        .addField("18PC", "?Provocation simple")
        .addField("25PC", "?Paladin ultime")
        .addField("30PC", "Vous pouvez passer Clerc ou gardien")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "PC Chevalier"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#1a00ff")
        .setTitle("PC Chevalier")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?Blocage amélioré ")
        .addField("18PC", "?Coup multiple")
        .addField("22PC", "?Parade")
        .addField("25PC", "?Chevalier ultime")
        .addField("30PC", "Vous pouvez passer Berserk ou Champion")
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
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?Sort simple + 70 de Mana")
        .addField("18PC", "?Sort de soins")
        .addField("22PC", "?Tornade de flamme")
        .addField("25PC", " ?Sorcier ultime")
        .addField("30PC", "Vous pouvez passer Nécromancien, grand sorcier, ou prêtre")
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
        .setTitle("PC Assassin")
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?Coup de dague")
        .addField("20PC", "?Camouflage")
        .addField("25PC", "?Assassin ultime")
        .addField("30PC", "Vous pouvez passer Grand Assassin ou Ninja")
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
        .setDescription("Voici ce que vous pourrez gagner à chaque étape")
        .addField("15PC", "?Tir amélioré")
         .addField("18PC", "?Esquive simple")
        .addField("20PC", "?Fuite amélioré")
        .addField("22PC", "?Flèche empoisonné")
        .addField("23PC", "?Régénération de mana supérieur")
        .addField("25PC", "?Archer ultime")
        .addField("30PC", "Vous pouvez évoluer")
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
 if(message.content === préfix + "Cl Coup d'épée"){
        var min = Math.floor(Math.min(75));
        var max = Math.floor(Math.max(85)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligez un coup d'épée dans la figure  qui inflige", ":dagger: "+y)
        .setImage("http://wallpapers4screen.com/Uploads/29-4-2016/30254/thumb2-dark-souls-3-fire-knight-armor-sword.jpg")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "G Coup d'épée"){
        var min = Math.floor(Math.min(60));
        var max = Math.floor(Math.max(75)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligez un coup d'épée dans les cottes qui inflige", ":dagger: "+y)
        .setImage("http://s1.1zoom.me/big0/177/Stormfall_Age_of_War_Knight_Armor_Swords_522831_1280x800.jpg")
        message.channel.send(y);
    }
    
      
    if(message.content === préfix + "Fumée sanglante"){
        var min = Math.floor(Math.min(90));
        var max = Math.floor(Math.max(110)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lancez une fumée de couleur sang sur la première ligne qui est imblocable(-150)", y)
        .setColor("#12110F")
        .setImage("https://www.unesourisetmoi.info/data/medias/photos/290/fumee-rouge.jpg")
        message.channel.send(y);
    }
    if(message.content === préfix + "Poison de corruption"){
        var min = Math.floor(Math.min(70));
        var max = Math.floor(Math.max(90)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lancez une fumée de couleur verte sur la deuxième ligne qui est inévitable(-150)", y)
        .setColor("#ff0000")
        .setImage("https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/03694_800x480.jpg")
        message.channel.send(y);
    }
    
     if(message.content === préfix + "Attaque lourde"){
        var min = Math.floor(Math.min(130));
        var max = Math.floor(Math.max(150)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligez un gros coup d'épée(-60 de mana) elle est impossible à parade", ":crossed_swords:  "+y)
        .setImage("https://j.gifs.com/r8m3X4.gif")
        message.channel.send(y);
    }
    if(message.content === préfix + "CH Coup d'épée"){
        var min = Math.floor(Math.min(75));
        var max = Math.floor(Math.max(85)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setImage("https://images-ext-1.discordapp.net/external/jvvKe9WhSE_9cC6OPwN84ThGj2FvzVXzK7pmFvxyS9s/https/i.pinimg.com/564x/07/82/ea/0782eab69709d1f48eff6e0d62c0994b.jpg")
        .addField("Vous donnez un coup d'épée puissant à votre adversaire", ":dagger: "+y)
        message.channel.send(y);
    }
    if(message.content === préfix + "B Coup d'épée"){
        var min = Math.floor(Math.min(90));
        var max = Math.floor(Math.max(100)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous donnez un violent coup d'épée à votre adversaire", ":dagger: "+y)
        .setImage("https://i.pinimg.com/originals/91/05/c5/9105c5a9836675bcebcb6a05eaf88761.jpg")
        message.channel.send(y);
    }
    if(message.content === préfix + "Coup bas"){
        
         var min = Math.floor(Math.min(30));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligé un coup de dague impossible à bloquer. Vous perdez 40 de mana", ":dagger: "+y)
        .setImage("https://media.giphy.com/media/XptviXceQG8pjLZ0FD/giphy.gif")
        message.channel.send(y);
    }
    
    
     if(message.content === préfix + "Coup de dague"){
        
        var min = Math.floor(Math.min(50));
       var max = Math.floor(Math.max(70)); 
       var y = Math.floor(Math.random() * (max - min + 1) ) + min;
          var result = Math.floor((Math.random() * 100) +1);
       if(result < 85)
       var y = new Discord.RichEmbed()
       .addField("Vous lui infligé un coup de dague rapide et lui infligé",":dagger: "+ y)
       .setColor("#ff6000")
       .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/b/ba/Overlord_II_EP06_097.png/revision/latest?cb=20180216051904")
       if(result > 85)
       var y = new Discord.RichEmbed()
       .setColor("#ff6000")
       .addField("Vous lui infligé un coup de dague rapide, il ne peut pas bloquer le coup ",":dagger: "+ y)
       .setImage("https://i.ytimg.com/vi/mmUlK_FAJqI/maxresdefault.jpg")
       message.channel.send(y);
   }
     if(message.content === préfix + "G Coup de dague"){
        
        var min = Math.floor(Math.min(115));
       var max = Math.floor(Math.max(130)); 
       var y = Math.floor(Math.random() * (max - min + 1) ) + min;
          var result = Math.floor((Math.random() * 100) +1);
       if(result < 90)
       var y = new Discord.RichEmbed()
       .addField("Vous faites un bond sur votre adversaire ", y)
       .setColor("#ff2300")
       .setImage("https://c.wallhere.com/photos/50/2d/1366x768_px_assassin_Daggers_Dark_fantasy_Art-739586.jpg!d")
       if(result > 90)
       var y = new Discord.RichEmbed()
       .setColor("#ff2300")
       .addField("Vous brisez le blocage de votre adversaire", y)
       .setImage("http://s1.1zoom.me/big0/817/DOTA_2_Phantom_assassin_477640.jpg")
       message.channel.send(y);
   }
    
     if(message.content === préfix + "Coup furtif"){
        
    var min = Math.floor(Math.min(105));
   var max = Math.floor(Math.max(120)); 
   var y = Math.floor(Math.random() * (max - min + 1) ) + min;
      var result = Math.floor((Math.random() * 100) +1);
   if(result < 85)
   var y = new Discord.RichEmbed()
   .addField("Vous faites un bond rapide sur votre adversaire ", y)
   .setColor("#ff2300")
   .setImage("https://image.winudf.com/v2/image/Y29tLm5pbmphc2FtdXJhaS5hbmFrcGFkYW5nX3NjcmVlbl8zXzE1MTcwNDcwNjBfMDE3/screen-3.jpg?h=800&fakeurl=1&type=.jpg")
   if(result > 85)
   var y = new Discord.RichEmbed()
   .setColor("#ff2300")
   .addField("Vous trouvez le point vital de votre adversaire et lui transpercé le blocage ", y)
   .setImage("https://cdn.discordapp.com/attachments/541643841061519361/560464712077279252/3324698-ninja-wallpapers.png")
   message.channel.send(y);
}
    
    
if(message.content === préfix + "Aura du gardien"){
        var mins = Math.floor(Math.min(13));
        var maxs = Math.floor(Math.max(23)); 
        var min = Math.floor(Math.min(25));
        var max = Math.floor(Math.max(45)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var y = new Discord.RichEmbed()
        .setColor("#859900")
        .setImage("https://j.gifs.com/lx5NnM.gif")
        .addField("Votre corps deviens plus résistant et réduisez tout les dégats pendant 2 tours mais pendant ces 2 tours, vous perdez en attaque(-30 de Mana)", ":shield: "+y + "\n :crossed_swords:  -"+ x)
        message.channel.send(y);
    }
    if(message.content === préfix + "L'épéiste"){
    var y = new Discord.RichEmbed()
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(30)); 
    var mins = Math.floor(Math.min(30));
    var maxs = Math.floor(Math.max(60));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(Math.random() * (maxs - mins) + 1) + mins;
    var y = new Discord.RichEmbed()
    .setColor("#8c97d9")
    .setImage("http://coolvibe.com/wp-content/uploads/2013/08/Fantasy-Art-Wesley-Burt-Fiendslayer-Paladin.jpg")
    .addField("Le Champion devient quelque peu plus agile et puissant durant 4 tours (-45 de mana)", "Votre attaque est augmenté de :crossed_swords:   " + y  )
    message.channel.sendMessage(y);
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
        .addField("Vous envoyez un sort qui brule votre adversaire. -125 de mana", ":fire: "+y)
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

    if(message.content === préfix + "Hurlement provocateur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#04157f")
    .setTitle("Hurlement provocateur(-75Mana)")
    .setDescription("Durant 2 tours, tout les ennemies seront obligé de vous attaquer")
    .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12f53076-bdc0-4ad4-8de8-3bd26a505de3/d6th824-629e9549-c08d-499f-bedb-a1b4f868d130.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyZjUzMDc2LWJkYzAtNGFkNC04ZGU4LTNiZDI2YTUwNWRlM1wvZDZ0aDgyNC02MjllOTU0OS1jMDhkLTQ5OWYtYmVkYi1hMWI0Zjg2OGQxMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3iwD07G6xKOeXoizbMLn-l_CjggulZBUukDlivGlPho")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Tremblement de terre"){
        var min = Math.floor(Math.min(30));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#0046ff")
        .addField("Vous levez un pied et concentrez toute votre magie dans celui-ci pour impacter le sol et infligez des dégâts à tout les ennemies, non esquivable et non blocable(-50 de mana)", ":dagger: " + y)
        .setImage("https://www.pop-up-urbain.com/wp-content/uploads/2017/01/tumblr_o9fw2kC9cj1ucpcboo1_540.gif")
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


    if(message.content === préfix + "Tire rapide"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(55)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tentez de lui envoyer une fleche rapide en direction de son torse, cherchant à viser un point vital. Vous perdez 40 de mana", ":bow_and_arrow: "+y)
        message.channel.send(y);
    }
    if(message.content === préfix + "Tir amélioré"){
        var min = Math.floor(Math.min(65));
        var max = Math.floor(Math.max(85)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tirez une fleche puissante(-30 de Mana)",":bow_and_arrow: "+ y)
        .setImage("https://media.giphy.com/media/kiJ8TzLnvfZdUhVcbW/giphy.gif")
        message.channel.send(y);
    }
    if(message.content === préfix + "Tir puissant"){
        var min = Math.floor(Math.min(140));
        var max = Math.floor(Math.max(150)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tirez une fleche très puissante(-50 de Mana)",":bow_and_arrow: "+ y)
        .setImage("https://media.discordapp.net/attachments/536292650698014731/569875791190556683/SAVE_20190422_152229.gif")
        message.channel.send(y);
    }
    if(message.content === préfix + "Réparation"){
        var min = Math.floor(Math.min(130));
        var max = Math.floor(Math.max(170)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous récupérez de la vitalité contre du mana(-200 de mana)",":heart:   "+ y)
        .setImage("https://www.syanart.com/wp-content/uploads/2016/04/One-Punch-Man-Genos.jpg")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Piège à loup"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Vous invoquez un piège à loup devant vous invisible à l'oeil nue. 1 pièges max d'activé et il ne s'active qu'une fois si celui-ci fonctionne(-100 de mana)")
        .setColor("#019521")
        .setDescription("Votre piège à une chance de se déclancher lorsque que quelqu'un vous attaques, cela ne fonctionne pas contre des ultimes ou des attaques à distance: ?Piège")
        .setImage("https://media.discordapp.net/attachments/536292650698014731/569877071694921728/c60158208dcd2a4a60a3a546aa2591f5.png")
        message.channel.sendMessage(help_embed);
    }
    
    if(message.content === préfix + "Coup d'estoc"){
   
    var min = Math.floor(Math.min(75));
   var max = Math.floor(Math.max(90)); 
   var y = Math.floor(Math.random() * (max - min + 1) ) + min;
      var result = Math.floor((Math.random() * 100) +1);
   if(result < 70)
   var y = new Discord.RichEmbed()
   .addField("Vous donnez un coups d'épée impossible à esquiver(-50 mana)", y)
   .setColor("#939696")
   .setImage("https://media.discordapp.net/attachments/536292650698014731/576329839280128001/245039-akame-ga-kill-dashing-tatsumi.gif")
   else
   var y = new Discord.RichEmbed()
   .setColor("#939696")
   .addField("Vous donnez un coups d'épée simple(-20 mana)", y)
   .setImage("https://media.discordapp.net/attachments/536292650698014731/576329895924465666/15302dc904ff91928a7d8fb4df970497.gif")
   message.channel.send(y);
}
    
    if(message.content === préfix + "Parade amélioré"){
    var result = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(95));
    var max = Math.floor(Math.max(140)); 
    var w = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 30){
    var w = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .addField("Vous réussiez la parade et vous lui envoyez une vague d'énérgie en plus d'un coup tranchant   :crossed_swords: ", w)
    .setImage("https://j.gifs.com/5QWDJB.gif")}
    else if(result < 101){
    var w = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre parade et subisez tout les dégats")
    .setImage("http://i.imgur.com/Lpv5HId.jpg")}
    message.channel.send(w);
}



    if(message.content === préfix + "Piège"){
        var result = Math.floor((Math.random() * 100) + 1);
        var min = Math.floor(Math.min(90));
        var max = Math.floor(Math.max(110)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        if (result < 50)
        var y = new Discord.RichEmbed()
        .addField("Le piège s'actionne et inflige des dégats en plus de bloquer le coup de l'ennemie.", ":anger:  "+y)
        .setColor("#019521")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setTitle("Le piège ne s'actionne pas, peut-être une prochaine fois")
        message.channel.send(y);
    }
        if(message.content === préfix + "Tir énèrgétique"){
        var min = Math.floor(Math.min(130));
        var max = Math.floor(Math.max(160)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous tirez un énorme tir explosif(-50 de Mana)",":bow_and_arrow: "+ y)
        .setImage("https://media.discordapp.net/attachments/454694319396356128/556392560612868107/unknown.png?width=994&height=560")
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
if(message.content === préfix + "Tir explosif"){
    var y = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(Math.random() * (max - min) + 1) + min;
    var z = Math.floor(Math.random() * (max - min) + 1) + min;
    var y = new Discord.RichEmbed()
    .setColor("#ff7100")
    .setImage("https://media.giphy.com/media/4ZttRyKB1VAjdWtjZM/giphy.gif")
    .addField("Vous faites un tir explosif qui blesse 3 ennemis, c'est imblocable (-50 de mana)", "Le premier reçois " + y + "\n le deuxieme se prend " + x + "\n et le dernier du " + z)
    message.channel.sendMessage(y);
}
    
      if(message.content === préfix + "Dague sinistre"){
        
    var min = Math.floor(Math.min(100));
   var max = Math.floor(Math.max(130)); 
   var y = Math.floor(Math.random() * (max - min + 1) ) + min;
      var result = Math.floor((Math.random() * 100) +1);
   if(result < 90)
   var y = new Discord.RichEmbed()
   .addField("Vous disparaissez et réapparaissez dans le dos de votre adversaire qui est en seconde ligne venant essayer d'enfoncer la dague dans son dos(-100 de mana)", y)
   .setColor("#ff2300")
   .setImage("https://www.eclypsia.com/public/upload/news/2012_08/gw2-theif-class1.jpg")
   if(result > 90)
   var y = new Discord.RichEmbed()
   .setColor("#ff2300")
   .addField("Vous disparaissez et réapparaissez dans le dos de votre adversaire qui est en seconde ligne venant essayer d'enfoncer la dague dans son dos. Impossible à bloquer(-100 de mana)", y)
   .setImage("https://www.lebusmagique.fr/medias/images/thief-02-concept-art-1-.jpg")
   message.channel.send(y);
}
    
    if(message.content === préfix + "Shurikens"){
   
    var min = Math.floor(Math.min(80));
   var max = Math.floor(Math.max(100)); 
   var y = Math.floor(Math.random() * (max - min + 1) ) + min;
      var result = Math.floor((Math.random() * 100) +1);
   if(result < 70)
   var y = new Discord.RichEmbed()
   .addField("Vous lancez des shurikens tellement rapide, qu'ils sont inévitables (-40 de mana)", y)
   .setColor("#ff2300")
   .setImage("https://66.media.tumblr.com/87324f50f67709174b480ca24c9eec99/tumblr_n3gjc3TQIU1sji00bo1_500.gif")
   if(result > 70)
   var y = new Discord.RichEmbed()
   .setColor("#ff2300")
   .addField("Vous lancez des shurikens qui travèrsent la défense de votre ennemie, ce qui en devient imblocable (-40 de mana)", y)
   .setImage("https://66.media.tumblr.com/87324f50f67709174b480ca24c9eec99/tumblr_n3gjc3TQIU1sji00bo1_500.gif")
   message.channel.send(y);
}
   
    if(message.content === préfix + "Soins de bas rang"){
        var min = Math.floor(Math.min(25));
        var max = Math.floor(Math.max(40)); 
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
    if(message.content === préfix + "Faible blocage"){
        var min = Math.floor(Math.min(30));
        var max = Math.floor(Math.max(45)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage de faible qualité et réussisez à bloquer", ":shield: "+y)
        .setImage("https://cdn.discordapp.com/attachments/454694319396356128/553977402104086558/unknown.png")
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
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(45)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage magique et perdez 20 de Mana", ":shield: "+y)
        .setImage("https://media.giphy.com/media/ljYCvFo7HtheECUT7U/giphy.gif")
        message.channel.send(y);
    }
    
     
    
    
        if(message.content === préfix + "Bouclier d'adamantite"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(35)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result  < 75)
    var y = new Discord.RichEmbed()
        .setColor("#12110F")
    .addField("Vous executez un blocage de faible qualité et réussisez à bloquer(-20 de Mana)", ":shield: "+ y)
      .setImage("https://media.discordapp.net/attachments/536292650698014731/564852174803435540/latest.png?width=995&height=559")
       else if (result < 101)
    var y = new Discord.RichEmbed()
.setColor("#12110F")
      .addField("Vous executez un blocage de faible qualité mais pourtant éfficace sans aucun cout de mana", ":shield: "+ y)
 .setImage("https://media.discordapp.net/attachments/536292650698014731/564852174803435540/latest.png?width=995&height=559")
    
    message.channel.sendMessage(y);
}
    
    if(message.content === préfix + "CH Blocage"){
        var min = Math.floor(Math.min(45));
        var max = Math.floor(Math.max(55)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage de champion", ":shield: "+y)
        message.channel.send(y);
    }
    if(message.content === préfix + "B Blocage"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(50)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage Berserkien", ":shield: "+y)
        .setImage("https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-618132.jpg")
        message.channel.send(y);
    }
    if(message.content === préfix + "G Blocage"){
        var min = Math.floor(Math.min(60));
        var max = Math.floor(Math.max(65)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage digne d'un gardien", ":shield: "+y)
        .setImage("https://i.pinimg.com/236x/85/9d/18/859d184458d49481de630477e74efb7e.jpg")
        message.channel.send(y);
    }
     if(message.content === préfix + "Cl Blocage"){
        var min = Math.floor(Math.min(55));
        var max = Math.floor(Math.max(60)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage digne d'un clerc", ":shield: "+y)
        .setImage("https://img4.goodfon.com/wallpaper/nbig/e/81/warrior-knight-soldier-armor-helmet-sword-weapon-shield-batt.jpg")
        message.channel.send(y);
    }
    if(message.content === préfix + "Blocage naturel"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(50)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous exécutez un blocage naturel en faisant apparaitre une ligne de branche et perdez 20 de Mana", ":shield: "+y)
        .setColor("#00ff75")
        message.channel.send(y);
    }
if(message.content === préfix + "Clonage"){
            var help_embed = new Discord.RichEmbed()
            .setColor("#ffffff")
            .addField("Clonage (-120 de Mana)", "Vous invoquez un clone qui fera partie du ciblage obligatoirement. Néanmoins celui-ci meurt à la moindre attaque qu'il subit")
            .addField("Attaque", "?Clone attaque")
            .addField("Défense", "?Clone défense")
            .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/3/30/Overlord_EP12_140.png/revision/latest/scale-to-width-down/200?cb=20150924122918")
            message.channel.sendMessage(help_embed);
        }
        if(message.content === préfix + "Clone esquive") {
            var result = Math.floor((Math.random() * 100) + 1);
            if(result < 50){
            var result = new Discord.RichEmbed() 
            .setColor("#ffffff")
            .setTitle("Vous avez réussie à Esquiver et ne subisez aucun dégat")
            .setImage("https://media.discordapp.net/attachments/499161815549476864/541310276104880129/esqive.gif")
            }
            else if(result < 101){
            var result = new Discord.RichEmbed() 
            .setColor("#ffffff")
            .setAuthor("Le clone disparait")
            }
            message.channel.send(result);
        
        }
        if(message.content === préfix + "Clone attaque") {
            var result = Math.floor((Math.random() * 100) + 1);
            var min = Math.floor(Math.min(100));
            var max = Math.floor(Math.max(115)); 
            var y = Math.floor(Math.random() * (max - min + 1) ) + min;
            if(result < 80){
            var result = new Discord.RichEmbed() 
            .addField("Coup de lance -" +y, "Votre clone essaye d'infliger un coup de lance à votre adversaire")
            .setColor("#ffffff")
            .setImage("https://j.gifs.com/oVV0AB.gif")
            }
            else if(result < 101){
            var result = new Discord.RichEmbed() 
            .setColor("#5af900")
            .addField("Liaison du ninja", "Votre clone rentre dans votre corps et vous guéris de la précédente attaque en échange de sa vie.")
        }
            message.channel.send(result);
        
        }
if(message.content === préfix + "Drapeau de défense"){
    var y = new Discord.RichEmbed()
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(20)); 
    var mins = Math.floor(Math.min(15));
    var maxs = Math.floor(Math.max(30));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(Math.random() * (maxs - mins) + 1) + mins;
    var y = new Discord.RichEmbed()
    .setColor("#8c97d9")
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/553964252935880704/unknown.png")
    .addField("Réduit les dégats reçu de tout les alliés pendant 2 tours(-30 de mana)", "Le Clec réduit de " + y + "\n Et ses alliées réduisent de " + x )
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "Aura de Berserk"){
    var y = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var mins = Math.floor(Math.min(30));
    var maxs = Math.floor(Math.max(60));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(Math.random() * (maxs - mins) + 1) + mins;
    var y = new Discord.RichEmbed()
    .setColor("#00295b")
    .setImage("https://www.desktopbackground.org/p/2013/08/11/621417_deviantart-more-like-meh-demons-souls-wallpapers-by-hitokiriex_900x615_h.jpg")
    .addField("Ses bloquages sont réduis pendant  2 tours et ses attaques augmentes pendant 2 tours (-30 de mana)", "Votre blocage est réduite de :boom:  " + y + "\n vos dégats ont un bonus :crossed_swords:  " + x )
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "Charge de Berserk"){
        var min = Math.floor(Math.min(60));
        var max = Math.floor(Math.max(80)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#00295b")
        .addField("Vous foncez sur 2 ennemies et leur infligez à chacun de lourd dégats imblocable(-50 de mana)", ":crossed_swords:  " + y)
        .setImage("https://media.giphy.com/media/1k2XDMeOFWKwekvfQX/giphy.gif")
        message.channel.send(y);
    }
    if(message.content === préfix + "Enchainement d'ennemie"){
    var y = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
    var mins = Math.floor(Math.min(70));
    var maxs = Math.floor(Math.max(90));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(Math.random() * (maxs - mins) + 1) + mins;
    var lol = new Discord.RichEmbed()
    .setColor("#00295b")
    .setImage("https://j.gifs.com/p8kE42.gif")
    .addField("Vous foncez sur une personne de la première ligne et il ne peu pas bloquer l'attaque", y)
    .addField("Puis pendant qu'il ou elle est déstabilisé par l'attaque, vous en proffitez pour attaquer une personne de la 2eme ligne et lui infliger(-60 de mana)", x)
    message.channel.sendMessage(lol);
}  
    
    if(message.content === préfix + "Brise garde"){
        var min = Math.floor(Math.min(120));
        var max = Math.floor(Math.max(160)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setImage("https://j.gifs.com/WLQGov.gif")
        .addField("Vous foncez sur votre adversaire, venant mettre un gros coup de poings, traversant le blocage de votre ennemie sauf les blocages de la branche mage (-50 de mana)", ":punch:  "+y)
        message.channel.send(y);
    }
    
        if(message.content === préfix + "Crie du monstre"){

   var result = Math.floor((Math.random() * 100) + 1);
        if(result < 60)
    var help_embed = new Discord.RichEmbed()
    .setTitle("Votre adversaire ne pourra pas attaquer au prochain tours (-30 de mana, ne peu pas être utilisé 2 fois d'affilés et 3 fois max par combat)")
    .setColor("#00295b")
    .setImage("https://i2.wp.com/www.lantredugeek.net/wp-content/uploads/2017/10/blackclover-astacri.jpg?resize=752%2C440&ssl=1")
    if(result > 60)
        var help_embed = new Discord.RichEmbed()
    .setTitle("C'est un echec")
    .setColor("#00295b")
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "écrase coeur"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(60)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous compressez spirituellement le coeur de votre ennemie(imblocable). Celui-ci sera la cible prioritaire de votre invocation(-50 de mana)", ":broken_heart:  "+y)
        .setImage("https://media1.tenor.com/images/6c99a6492ff1cf7c6259ca03cd433cf6/tenor.gif?itemid=9475074")
        .setColor("#e200ff")
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
        var min = Math.floor(Math.min(20));
        var max = Math.floor(Math.max(40)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous envoyez un sort de bas rang", ":sparkles: "+y)
        .setImage("https://media.giphy.com/media/lYfMRNGRIyOOQo9PKl/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Sort simple"){
        var min = Math.floor(Math.min(50));
        var max = Math.floor(Math.max(70)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous envoyez un sort sur votre adversaire(-20 de Mana)",":sparkles: "+ y)
        .setImage("https://media.giphy.com/media/2sgF179xV3fH9GW2mJ/giphy.gif")
        message.channel.send(y);
    }
 
    
    if(message.content === préfix + "Sort naturel"){
        var min = Math.floor(Math.min(45));
        var max = Math.floor(Math.max(65)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous attaquez votre adversaire en faisant apparaitre temporaire une tentacule d'épine qui vient frapper ce dernier", ":sparkles: "+y)
        message.channel.send(y);
    }
    
    
    
       if(message.content === préfix + "Le faux mort"){
        var min = Math.floor(Math.min(200));
        var max = Math.floor(Math.max(240)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous simulez une mort pour ensuite tendre un piège à votre ennemie(-150 de Mana, utilisable qu'une fois par combat et la sainte bénédiction ne fonctionne pas et impossible de l'enchainer avec un camouflage)", ":dagger:  " +y)
        .setImage("https://i.pinimg.com/736x/2f/0a/39/2f0a391b33d16504b99d5c94a9501900.jpg")
        .setColor("#ff2300")
        message.channel.send(y);
    }
    

    
    
if(message.content === préfix + "Lame noir"){
        
    var min = Math.floor(Math.min(180));
   var max = Math.floor(Math.max(200)); 
   var y = Math.floor(Math.random() * (max - min + 1) ) + min;
      var result = Math.floor((Math.random() * 100) +1);
   if(result < 60)
   var y = new Discord.RichEmbed()
   .addField("Vous lancez votre dague sombre qui transperce spirituellement votre adversaire(-220 de Mana)", y)
   .setColor("#ff2300")
   .setImage("https://1920x1080hdwallpapers.com/image/201511/fantasy/3017/dark-elf-evil-sword-hairstyle-armor.jpg")
   if(result > 60)
   var y = new Discord.RichEmbed()
   .setColor("#ff2300")
   .addField("Vous lancez votre dague sombre qui traverse votre adversaire et inflige la moitié des dégats à la personne juste dérrière lui, impossible à esquiver et à bloquer (si il est seul, alors il se prend tous les dégats)(-220 de Mana)", y)
   .setImage("https://c.wallhere.com/photos/3d/c2/sword_demon_blue_eyes_armor_shadow_fantasy_art-262927.jpg!d")
   message.channel.send(y);
}
    
    
    if(message.content === préfix + "Drapeau de soins"){
    var y = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setImage("https://vignette.wikia.nocookie.net/contes-des-oublies/images/3/37/Healing_by_omuk-d6mznnr.jpg/revision/latest?cb=20161010000811&path-prefix=fr")
    .addField("Vous invoquez un drapeau de soins. Chaque tours vous et vos alliées gagnez des HP durant 3 tours(-50 de mana)", ":hearts:  " + y)
    message.channel.sendMessage(y);
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
    
    
    if(message.content === préfix + "Gardien ultime"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(60)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#1611c3")
        .addField("Vous devenez resistant durant 4 tours(-300 de Mana)", ":shield:  " + y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(250));
        var maxs = Math.floor(Math.max(300)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed() 
        .setColor("#e60505")
        .addField("Vous régénérez de la vitalité en concentrant votre énergie dans votre lourde épée", ":heart:  "+ w)
        .setImage("https://j.gifs.com/gZkx1j.gif")
        message.channel.send(w);
    }

    if(message.content === préfix + "Berserk ultime"){
        var min = Math.floor(Math.min(200));
        var max = Math.floor(Math.max(300)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#c50e0e")
        .addField("Vous ne pouvez plus utilisez aucune défense durant 3 tours et perdez des HP(-300 de Mana)", ":broken_heart:   " + y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(100));
        var maxs = Math.floor(Math.max(150)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed() 
        .setColor("#e60505")
        .addField("Vos attaques sont inévitables et imparables durant 4 tours et vos compétences n'utilisent plus de mana en plus d'avoir un bonus de dégats", ":crossed_swords:  "+ w)
        .setImage("https://j.gifs.com/5QWAnX.gif")
        message.channel.send(w);
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
        .addField("Negative burst ! L'attaque ne peu ni être évitable, ni être bloquable(-200 de Mana)",":crossed_swords: "+  y)
        .setImage("https://media.giphy.com/media/8FSMNs8bir2lfkpg2u/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Druid ultime"){   
        var min = Math.floor(Math.min(90));
        var max = Math.floor(Math.max(150)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#000000")
        .addField("Fait apparaitre un Ours inoffensif qui se fera tout le temps attaquer en priorité au bout du 3eme tours par les mobs et il a un grand nombre d'HP", y)
        .setImage("https://media.discordapp.net/attachments/536292650698014731/543167288967168056/Bears_Magical_animals_475039_2048x1536.jpg?width=780&height=585")
        message.channel.send(y);
        var e = Math.floor(Math.min(60));
        var a = Math.floor(Math.max(90)); 
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
    
        if(message.content === préfix + "Appell à la nature"){
        var y = new Discord.RichEmbed()
        .setColor("#81b4bc")
        .setImage("http://images3.wikia.nocookie.net/__cb20110531165556/bestiaire-dofus/fr/images/a/a0/La_bloqueuse.jpg")
        .addField("Invocation (-80 mana)", "Vous invoquez une petite bouboule de mère nature qui se tue en un coups et qui est en deuxième ligne")
        .addField("Attaque", "?Défense de bouboule")
        message.channel.sendMessage(y);
          
    }

    if(message.content === préfix + "Défense de bouboule"){
        var min = Math.floor(Math.min(70));
        var max = Math.floor(Math.max(90)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#81b4bc")
        .addField("La bouboule de mère nature fait un mur de liane devant vous et cela réduira les dégats que vous subirez(-40 de mana)", ":shield: "+y)
        .setImage("https://cdn.discordapp.com/attachments/499161815549476864/587937711814475776/derya-kocaurlu-poupee.png")
        message.channel.send(y);
    }


    if(message.content === préfix + "Multi classe"){
    var y = new Discord.RichEmbed()
    .addField("Multi classe", "Vous pourrez utilisez deux compétence d'une autre classe de même niveau ou moins mais pas les ultimes ")
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/553881850653966356/unknown.png")
    message.channel.send(y);
}
if(message.content === préfix + "Saignement démoniaque"){
    var y = new Discord.RichEmbed()
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(3)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#880606")
    .addField("Vous et tout vos alliées (sauf démon) perde 100 HP", "Votre prochaine attaque fera un effet de saignement (comme le poison) durant plusieurs tours sur tous les dégâts que votre ennemie subira. Interdiction d'utiliser une ultime. :timer:   " + y )
    message.channel.sendMessage(y);
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
        var min = Math.floor(Math.min(25));
        var max = Math.floor(Math.max(45)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed() 
        .setColor("#76ff00")
        .addField("Vous régénérez(-80 de mana)", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(40));
        var maxs = Math.floor(Math.max(65)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Et vous infligez de gros dégats", w)
        .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
        message.channel.send(w);
    }
      if(message.content === préfix + "Drain de vie 2"){
        var min = Math.floor(Math.min(35));
        var max = Math.floor(Math.max(55)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed() 
        .setColor("#76ff00")
        .addField("Vous régénérez (-80 de mana)", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(45));
        var maxs = Math.floor(Math.max(75)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Et vous infligez de gros dégats", w)
        .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
        message.channel.send(w);
    }

    if(message.content === préfix + "Drain de vie 3"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(60)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed() 
        .setColor("#76ff00")
        .addField("Vous régénérez (-80 de mana)", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(50));
        var maxs = Math.floor(Math.max(80)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Et vous infligez de gros dégats", w)
        .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
        message.channel.send(w);
    }
    if(message.content === préfix + "Drain de vie 4"){
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(60)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed() 
        .setColor("#76ff00")
        .addField("Vous régénérez (-80 de mana)", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(80));
        var maxs = Math.floor(Math.max(90)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Et vous infligez de gros dégats", w)
        .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
        message.channel.send(w);
    }
    if(message.content === préfix + "Drain de vie 5"){
        var min = Math.floor(Math.min(65));
        var max = Math.floor(Math.max(75)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed() 
        .setColor("#76ff00")
        .addField("Vous régénérez (-80 de mana)", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(95));
        var maxs = Math.floor(Math.max(105)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Et vous infligez de gros dégats", w)
        .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
        message.channel.send(w);
    }
    if(message.content === préfix + "Drain de vie 6"){
        var min = Math.floor(Math.min(75));
        var max = Math.floor(Math.max(85)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed() 
        .setColor("#76ff00")
        .addField("Vous régénérez (-80 de mana)", y)
        message.channel.send(y);
        var mins = Math.floor(Math.min(105));
        var maxs = Math.floor(Math.max(115)); 
        var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var w = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Et vous infligez de gros dégats", w)
        .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
        message.channel.send(w);
    }
if(message.content === préfix + "Drain de vie 7"){
    var min = Math.floor(Math.min(95));
    var max = Math.floor(Math.max(115)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed() 
    .setColor("#76ff00")
    .addField("Vous régénérez (-80 de mana)", y)
    message.channel.send(y);
    var mins = Math.floor(Math.min(125));
    var maxs = Math.floor(Math.max(135)); 
    var w = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var w = new Discord.RichEmbed()
    .setColor("#ff8b00")
    .addField("Et vous infligez de gros dégats", w)
    .setImage("https://media.giphy.com/media/1yMcjoBnar5FjzguDY/giphy.gif")
    message.channel.send(w);
}


if(message.content === préfix + "Drain de vie 8"){
    var min = Math.floor(Math.min(105));
    var max = Math.floor(Math.max(125)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed() 
    .setColor("#76ff00")
    .addField("Vous régénérez (-80 de mana)", y)
    message.channel.send(y);
    var mins = Math.floor(Math.min(135));
    var maxs = Math.floor(Math.max(155)); 
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
    
   if(message.content === préfix + "La survie ou la mort"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#16ff00")
    .addField("Vous êtes immortel durant 2heurs mais vous ne pouvez pas attaquer, seulement utiliser des actions passifs. Vous avez également un +40 en roll de force et un +40 en roll pour ne pas se faire assommer si votre classe vous défavorises", "Mais, en contre partie durant 3jours vous ne pourrez plus combattre")
    .setImage("https://media.discordapp.net/attachments/542016323484385300/566914873452265472/maxresdefault.jpg?width=994&height=560")
    message.channel.sendMessage(help_embed);
}

    if(message.content === préfix + "Magic gun"){
        var min = Math.floor(Math.min(80));
        var max = Math.floor(Math.max(90)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#ff8b00")
        .addField("Vous pouvez uniquement utiliser cette compétence à longue porté. Vous visez un point vital et infligez de lourd dégats(-80 de mana)", ":gun: "+y)
        .setImage("https://media.giphy.com/media/vgvVcpHvIEjO9yPQqg/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Magic gun 2"){
    var min = Math.floor(Math.min(135));
    var max = Math.floor(Math.max(145)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#ff8b00")
    .addField("Vous visez le point vital de votre cible, et lui infligez de lourd dégats(-80 de mana)", ":gun: "+y)
    .setImage("https://media.giphy.com/media/vgvVcpHvIEjO9yPQqg/giphy.gif")
    message.channel.send(y);
}

if(message.content === préfix + "Magic gun 3"){
    var min = Math.floor(Math.min(235));
    var max = Math.floor(Math.max(245)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#ff8b00")
    .addField("Vous visez le point vital de votre cible, et lui infligez de lourd dégats(-80 de mana)", ":gun: "+y)
    .setImage("https://media.giphy.com/media/vgvVcpHvIEjO9yPQqg/giphy.gif")
    message.channel.send(y);
}

    
      if(message.content === préfix + "Violente morsure"){
        var min = Math.floor(Math.min(50));
        var max = Math.floor(Math.max(60)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous donnez un gros coups de griffe qui sonne votre ennemie l'empêchant d'attaquer(-50 de mana)", y)
        .setColor("#a94329")
        .setImage("https://cache.desktopnexus.com/thumbseg/1616/1616662-bigthumbnail.jpg")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Violente morsure 2"){
        var min = Math.floor(Math.min(80));
        var max = Math.floor(Math.max(100)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous donnez un gros coups de griffe qui sonne votre ennemie l'empêchant d'attaquer(-50 de mana)", y)
        .setColor("#a94329")
        .setImage("https://cache.desktopnexus.com/thumbseg/1616/1616662-bigthumbnail.jpg")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Violente morsure 3"){
        var min = Math.floor(Math.min(170));
        var max = Math.floor(Math.max(190)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous donnez un gros coups de griffe qui sonne votre ennemie l'empêchant d'attaquer(-50 de mana)", y)
        .setColor("#a94329")
        .setImage("https://cache.desktopnexus.com/thumbseg/1616/1616662-bigthumbnail.jpg")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Invocation mini squelette"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chevalier mort(-100 mana)")
    .setColor("#000000")
    .setDescription("Vous invoquez un mini squelette")
    .addField("HP", "50")
    .addField("Attaque", "?ms attaque")
    .addField("Défense", "?ms défense")
    .setImage("https://i.pinimg.com/564x/e1/eb/e4/e1ebe40009b64a51acb6400c342daf15.jpg")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Invocation mini squelette 2"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chevalier mort(-200 mana)")
    .setColor("#000000")
    .setDescription("Vous invoquez un mini squelette")
    .addField("HP", "150")
    .addField("Attaque", "?ms2 attaque")
    .addField("Défense", "?ms2 défense")
    .setImage("https://i.pinimg.com/564x/aa/bc/81/aabc8117fb902535fe8b7b923e695f59.jpg")
    message.channel.sendMessage(help_embed);
}
if(message.content === préfix + "Invocation mini squelette 3"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chevalier mort(-400 mana)")
    .setColor("#000000")
    .setDescription("Vous invoquez un mini squelette")
    .addField("HP", "300")
    .addField("Attaque", "?ms3 attaque")
    .addField("Défense", "?ms3 défense")
    .setImage("https://i.pinimg.com/564x/94/b8/9e/94b89e75a8ba88213ae74cd222339354.jpg")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "ms attaque"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le mini squelette attaque, c'est imblocable", y)
    .setColor("#000000")
    message.channel.send(y);
}
if(message.content === préfix + "ms2 attaque"){
    var min = Math.floor(Math.min(35));
    var max = Math.floor(Math.max(55)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le mini squelette attaque, c'est imblocable", y)
    .setColor("#000000")
    message.channel.send(y);
}
if(message.content === préfix + "ms3 attaque"){
    var min = Math.floor(Math.min(60));
    var max = Math.floor(Math.max(75)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le mini squelette attaque, c'est imblocable", y)
    .setColor("#000000")
    message.channel.send(y);
}
if(message.content === préfix + "ms défense"){
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le mini squelette bloque l'attaque", y)
    .setColor("#000000")
    message.channel.send(y);
}
if(message.content === préfix + "ms2 défense"){
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(20)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le mini squelette bloque l'attaque", y)
    .setColor("#000000")
    message.channel.send(y);
}
if(message.content === préfix + "ms3 défense"){
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le mini squelette bloque l'attaque", y)
    .setColor("#000000")
    message.channel.send(y);
}
                
    
    if(message.content === préfix + "Réparation automatique"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00ff0d")
        .setTitle("Réparation automatique")
        .setDescription("Vous regagnez 50% de vos HP pendant 2 tours et vous permet de combiner 2 attaques aux prochains tours")
        message.channel.sendMessage(help_embed);
    }

    if(message.content === préfix + "Tire pleine puissance"){
        var min = Math.floor(Math.min(4000));
        var max = Math.floor(Math.max(5000)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .setColor("#9c9c9c")
        .addField("Ho grand maitre.... \n Ho celui à qui je veille \n sachez que je vous aime sans pouvoir vous le montrer \n et c'est pour cela que je détruirais votre ennemie jurée","Cette attaque est inévitable et imblocable :skull_crossbones:  "+ y)
        .setImage("https://j.gifs.com/XLQj8A.gif")
        message.channel.send(y);
          var x = new Discord.RichEmbed()
        .setColor("#9c9c9c")
        .setTitle("Vous êtes dans l'incapacité de vous battres durant 1semaine")
        message.channel.send(x);
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
    
if(message.content === préfix + "Transformation vampirique"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#dc322f")
    .setTitle("Transformation vampirique")
    .setDescription("Vous prennez une forme étrange et avez une nouvelle esquive temporaire. Toute vos attaques vous régénères en HP. Cette transformation dure 30minutes et vous ne pouvez qu'utiliser cette forme contre des joueurs ou des PNJ, mais jamais contre des monstres(ou bien, regen d'HP/2). Cela dure une fois par mois et vous êtes capable de traquer votre adversaire avec un roll de +30 si celui-ci fuit à pied")
    .addField("Esquive temporaire", "Vous obtenez la compétence ?Esquive vampirique")
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/589330651078197248/dadadcavava.PNG")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Esquive vampirique") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70)
    var result = new Discord.RichEmbed() 
    .setColor("#dc322f")
    .setTitle("Le vampire évite en un clin d'oeil")
    .setImage("https://pa1.narvii.com/6688/0497fca41b1310e5e9b89e68660846704b7c5ffb_hq.gif")
    if(70 < result)
    var result = new Discord.RichEmbed() 
    .setColor("#dc322f")
    .setAuthor("Le vampire subit tout les dégats")
    
    message.channel.send(result);

}
    
    
    if(message.content === préfix + "Réanimation monstrueuse"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Liste des posibilités de réanimation")
    .setDescription("?Réanimation d'animal \n ?Réanimation du malade \n ?Réanimation monstre \n ?Réanimation d'esprit")
    .addField("!! Attention, pour toute les réanimations vous avez perdu la mémoire sauf pour la réanimation du malade. Mais il y a aussi la durée à prendre en compte !!", "Votre transformation est temporaire, faites un roll pour savoir combien de temps vous y resterez \n Roll>80 = 5Mois \n Roll>50 = 3mois \n Roll>0 = 2mois")
    .setImage("https://trustmyscience.com/wp-content/uploads/2016/11/trou-noir-supermassif.jpg")
    .setFooter("Menu des monstres")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);

}
    if(message.content === préfix + "Réanimation d'esprit"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La réanimation d'esprit, j'éspère que vous aimez le RP passifs")
    .setDescription("Vous êtes un esprit, vous pouvez vous rendre matériel 1 heure par jour(pas d'abus) et pouvez lire et parler dans les pensées des autres. Attention vous ne pouvez pas combattre et n'avez plus dutout la même apparence, vous êtes un esprit qui cherche à faire du mal à tourmenter tout le monde, sauf la race que vous veiller à protéger mentalement. Vous choisirez lors de votre update, la race que vous allez veiller")
    .setImage("https://media.discordapp.net/attachments/549628514303737856/560852234829824001/abf0826023a0f49070112b59640109e7.png?width=415&height=585")
    .setFooter("Menu d'esprit")
    .setColor("#000000")
    message.channel.sendMessage(help_embed);

}
    
if(message.content === préfix + "Réanimation du malade"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La réanimation du malade")
    .setDescription("Vous n'avez pas une mémoire différente et n'avez pas changé physiquement, mais alors...Ou est le problème ? \n Alala, idiot que vous êtes vous n'arrivez plus à reconnaitre personne ne voyant que des ombres flottantes indéscriptibles et n'arrivez plus à comprendre la langue lambda. En effet vous arriverez seulement à communiquer avec les autres monstres ou bien les démons, mais attention...Vous reconnaitrez que leur voix et non leurs ombres. \n Vous alez donc sombrer dans la folie la plus total étant donné que vous serez dans l'obligation d'attaquer tout ce que vous ne comprendrez pas donc tout sauf les démons qui ne vous serons pas néfastes et les autres monstres s'ils décident de s'allier, seul les démons peuvent vous aider...Ou vous enfoncer mais rien ne vous empeches de les attaquer")
    .addField("Changement physique", "Vos yeux saignent régulièrement, laissant des filets de sang sur vos joues \n votre respiration est saccadé en présence de 2 personnes minimum et vous pouvez exploser un cable pour aucune raison à toute instant si votre réspiration ne se calme pas \n Vous riez régulièrement pour aucune raison...")
    .addField("Stats", "1500HP \n Vous n'avez que l'attaque de base de votre classe(si votre attaque consomme du mana, alors cela sera gratuit) et n'utilisez que des parades simples(si vous êtes un archer ou un mage, alors dans le RP vous vous servirez de votre couteau, la folie à l'etat pure)")
    .setImage("https://wallpaperplay.com/walls/full/2/9/b/115097.jpg")
    .setColor("#000000")
    .setFooter("Menu du malade")
    message.channel.sendMessage(help_embed);

}
    
    if(message.content === préfix + "Réanimation monstre"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La réanimation en monstre")
    .setDescription("Vous voila donc un monstre...Mais vous êtes quoi comme monstre ? Laissez moi vous expliquer. \n Vous avez le choix entre tous les mobs du serveur hormis les Boss. Après cela, vous serez bloqué dans une zone mais...Si vous êtes une chouette du vent alors vous serez dans la forêt calme, et si vous êtes un un guerrier aquatique alors vous serez en permanence sur le bord de la plage calme. Vous ne pourrez pas sortir de ce territoire sauf de force ou si on vous captures, mais votre instinct vous forceras à y retourner dès que possible")
    .setImage("https://image.winudf.com/v2/image/Y29tLkdhbGF4eUx3cC5TdXBlcm5vdmEwNF9zY3JlZW5zaG90c18zXzc0NTAyYWI1/screen-3.jpg?h=800&fakeurl=1&type=.jpg")
    .setFooter("Menu du monstre")
    message.channel.sendMessage(help_embed);

}

    
    if(message.content === préfix + "Réanimation d'animal"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La réanimation en animal")
    .setDescription("Vous allez réaparaitre en tant qu'animal parmis les choix ci-dessous. Néanmoins vous serez comme un nouveau 'humain' avec donc une nouvelle mémoire bloqué dans un corps d'animal plutôt...Robuste")
    .addField("Liste des animaux", "?Réanimation loup de givre \n ?Réanimation grand ours \n ?Réanimation aigle celeste \n ?Réanimation chat")
    .setImage("https://couleur-science.eu/img/black-hole-2.jpg")
    .setColor("#000000")
    .setFooter("Menu des animaux")
    message.channel.sendMessage(help_embed);

}
    
    if(message.content === préfix + "Réanimation aigle celeste"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La réanimation en aigle")
    .setDescription("Vous allez réaparaitre en tant qu'aigle. Vous avez une vision total quand vous êtes à l'extérieur et n'avez pas besoin de faire un repérage dans votre chanel pour savoir qui s'y trouve. Si vous volez, les combattants et voleurs ne pourront pas vous toucher(logique) mais les rangers et les mages...Vous avez le droit de choisir un maitre a qui vous pourrez uniquement murmurer des choses dans l'oreille")
    .addField("Stats", "300HP \n ?Aigle attaque \n ?Aigle défense")
    .setColor("#b2adad")
    .setImage("http://www.wallpapers-hd-desktop.com/wp-content/uploads/2017/07/Aigle-08-640x480.jpg")
    .setFooter("Menu de l'aigle celeste")
    message.channel.sendMessage(help_embed);

}
    
    if(message.content === préfix + "Aigle attaque"){
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setImage("http://www.wallpapers-hd-desktop.com/wp-content/uploads/2017/07/Aigle-31-640x480.jpg")
    .addField("Vous faites une attaque en piqué imblocable pour la branche combattant, voleur et ranger(si vous attaquez un voleur ou un combattant alors celui-ci pourra vous attaquer juste après)", y)
    .setColor("#b2adad")
    message.channel.send(y);
}

if(message.content === préfix + "Aigle défense"){
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 55)
    var y = new Discord.RichEmbed()
    .setTitle("L'Aigle virevolte et esquive l'attaque")
    .setImage("https://static-s.aa-cdn.net/img/gp/20600004769961/cinFszBOKEBS6PsZYYA-FwvwMSml9-EhFjv2wApBrTQPlknJ-A7Rbn2KWncZmugIGg=h900")
    .setColor("#b2adad")
     else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("L'aigle se prend tout les dégats")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Réanimation chat"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La réanimation en chat")
    .setDescription("Vous allez réapparaitre en chat, mais attention, vous n'êtes pas un chat classique, en effet vous pouvez parler et avez la capacité à ressentir les émotions des autres et à les comprendres")
    .addField("Stats", "50HP \n ?Chat attaque \n ?Chat défense")
    .setColor("#ff00ce")
    .setImage("http://4everstatic.com/images/dessins/digital-art/chat-noir,-chat-dessine-154897.jpg")
    .setFooter("Menu du chat")
    message.channel.sendMessage(help_embed);

}
    
    if(message.content === préfix + "Chat attaque"){
    var y = new Discord.RichEmbed()
    .setImage("http://www.fondsecran.eu/a/get_photo/518365/2560/1600")
    .addField("Le chat vous donne un coup de griffe", "Durant 3 tours vos attaques seront divisés par 2 comme si vous étiez ralentit")
    .setColor("#ff00ce")
    message.channel.send(y);
}

if(message.content === préfix + "Chat défense"){
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 40)
    var y = new Discord.RichEmbed()
    .setTitle("Le chat évite l'attaque")
    .setImage("https://www.10wallpaper.com/wallpaper/medium/1105/cheshire_Desktop_Wallpapers_medium.jpg")
    .setColor("#ff00ce")
     else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Le chat se prend tout les dégats")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Réanimation grand ours"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La réanimation en grand ours")
    .setColor("#635a64")
    .setDescription("Vous allez réapparaitre en grand ours(vous avez le droit d'avoir une armure dans votre description physique), vous ne pouvez parler avec personne sauf avec les autres personnes dans votre cas")
    .addField("Stats", "1500HP \n ?Ours attaque")
    .setImage("http://www.yukokusamurai.com/data/archive/img/2643079267.jpeg")
    .setFooter("Menu de l'ours")
    message.channel.sendMessage(help_embed);

}
    
if(message.content === préfix + "Ours attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(120));
    var max = Math.floor(Math.max(150)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 70)
    var y = new Discord.RichEmbed()
    .addField("L'ours donne un énorme coups de patte", y)
    .setImage("http://img.xooimage.com/files110/f/9/0/spirit-bear-4da9aba.png")
    .setColor("#635a64")
     else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#635a64")
    .setTitle("L'ours est trop lent...Peut-être une prochainne fois")
    message.channel.sendMessage(y);
}

    
    if(message.content === préfix + "Réanimation loup de givre"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("La réanimation en loup")
    .setDescription("Vous allez réaparaitre en tant que loup. Vous savez distinguer les odeurs et êtes un bon traqueur pour pourchasser une personne. Vous avez le droit de vous familliariser uniquement avec une seul personne, vous pourrez ainsi lui parler dans sa tête et uniquement dans sa tête")
    .addField("Stats", "700HP \n ?Loup attaque \n ?Loup défense")
    .setColor("#00ffe7")
    .setImage("http://images5.fanpop.com/image/photos/31400000/Wolf-fantasy-31454823-1280-800.jpg")
    .setFooter("Menu du loup")
    message.channel.sendMessage(help_embed);

}
    
    
    if(message.content === préfix + "Loup attaque"){
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 65)
    var y = new Discord.RichEmbed()
    .addField("Le loup vous attaques", y)
    .setImage("https://i.pinimg.com/originals/3e/36/52/3e3652d62a0e1f0d4bd884b4da955b1b.jpg")
    .setColor("#00ffe7")
     else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .addField("Le loup vous attaques et détruit votre blocage", y)
    .setColor("https://cdn.wallpapersafari.com/62/9/XJt90y.jpg")
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Loup défense"){
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 60)
    var y = new Discord.RichEmbed()
    .setTitle("Le loup se prend tout les dégats")
    .setColor("#00ffe7")
     else if (result < 75)
    var y = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setImage("https://i.pinimg.com/originals/06/ff/f8/06fff8be1b3114ddbed966a95d36d270.jpg")
    .setTitle("Le loup bloque ou évite de peu l'attaque et réduit l'attaque par 2")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#00ffe7")
    .setImage("https://i.pinimg.com/originals/e5/28/9d/e5289d4dde75a59b503e8253439c824d.jpg")
    .setTitle("Le loup évite l'attaque")
    message.channel.sendMessage(y);
}
    
     if(message.content === préfix + "Réanimation"){
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 90)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Vous réaparaisez en tant que monstre...Vous ne méritez pas le pardon de dieu", "?Réanimation monstrueuse")
    .setImage("http://charlessledge.com/wp-content/uploads/2016/10/You-Must-Travel-Through-The-Abyss-Before-You-Can-Soar-To-New-Heights.jpg")
        else
    var y = new Discord.RichEmbed()
    .addField("Dieu a eu pitié de vous, que vous soyez croyant ou non.", "Vous réanimez en tant qu'humain avec une nouvelle apparence et une mémoire totalement vide même si vous connaissez ce monde en tant qu'humain lambda la prochaine fois que vous mourrez vous ferez ?Réanimation 2")
    .setImage("https://images4.alphacoders.com/847/84794.jpg")
    .setColor("#ffffff")
    
    message.channel.sendMessage(y);
}
    
    if(message.content === préfix + "Réanimation 2"){
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 50)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Vous réaparaisez en tant que monstre...Vous ne méritez pas le pardon de dieu", "?Réanimation monstrueuse")
    .setImage("http://charlessledge.com/wp-content/uploads/2016/10/You-Must-Travel-Through-The-Abyss-Before-You-Can-Soar-To-New-Heights.jpg")
        else
    var y = new Discord.RichEmbed()
    .addField("Dieu a eu pitié encore de vous, que vous soyez croyant ou non. sachez que vous avez de la chance", "Vous réanimez en tant qu'humain avec une nouvelle apparence et une mémoire totalement vide même si vous connaissez ce monde en tant qu'humain lambda la prochaine fois que vous mourrez vous ferez ?Réanimation 3")
    .setImage("https://images4.alphacoders.com/847/84794.jpg")
    .setColor("#ffffff")
    
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "Réanimation 3"){
    var help_embed = new Discord.RichEmbed()
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 20)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Vous réaparaisez en tant que monstre...Vous ne méritez pas le pardon de dieu", "?Réanimation monstrueuse")
    .setImage("http://charlessledge.com/wp-content/uploads/2016/10/You-Must-Travel-Through-The-Abyss-Before-You-Can-Soar-To-New-Heights.jpg")
        else
    var y = new Discord.RichEmbed()
    .addField("Whow...La ce n'est plus Dieu qui a eu pitié...Mais c'est qu'il doit vous aimer ou bien c'est la chance qui a décidé de vous chérir", "Vous réanimez en tant qu'humain avec une nouvelle apparence et une mémoire totalement vide même si vous connaissez ce monde en tant qu'humain lambda la prochaine fois que vous mourrez vous ferez ?Réanimation 4")
    .setImage("https://images4.alphacoders.com/847/84794.jpg")
    .setColor("#ffffff")
    
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "Bouclier de squelette"){
        var min = Math.floor(Math.min(70));
        var max = Math.floor(Math.max(90)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous invoquez un mur de squelette devant votre alliée. Au prochain coup qu'il se recevra, l'attaque sera diminué(-50 de mana)", ":shield: "+y)
        .setImage("https://j.gifs.com/E8xvYg.gif")
        .setColor("#000000")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Invocation chevalier"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Chevalier mort(-350 mana)")
    .setColor("#000000")
    .setDescription("Vous invoquez un chevalier squelettique")
    .addField("HP", "250")
    .addField("Attaque", "?Chevalier attaque")
    .addField("Défense", "?Chevalier défense")
    .setImage("https://vignette.wikia.nocookie.net/overlord8371/images/6/6a/Death_Knight_Databook_01.png/revision/latest?cb=20190206001525&path-prefix=fr")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Chevalier attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le chevalier vous infliges un coup d'épée imblocable", y)
    .setColor("#000000")
    .setImage("https://d.wattpad.com/story_parts/684781223/images/157be6d70d9c556d711500985972.gif")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Chevalier défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 80)
    var y = new Discord.RichEmbed()
    .addField("Le chevalier bloque l'attaque à l'aide de son bouclier", y)
    .setImage("https://pm1.narvii.com/6782/bacc97ce1fbdf149a459b55b6138b343392eea39v2_hq.jpg")
    .setColor("#000000")
        else if(result < 90)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/9/92/Death_Knight_Profile.png/revision/latest?cb=20151130052156")
    .setAuthor("Le chevalier ne bloque pas mais il reçoit uniquement la moitié des dégats")
    else if(result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Le chevalier se prend tout les dégats sans broncher")
    message.channel.sendMessage(y);
}

    
    if(message.content === préfix + "Invocation divine"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("L'Ange")
    .setColor("#ffffff")
    .setDescription("Vous invoquez un Ange puissant et faisant frémir vos ennemies. Il attaque 1 fois tout les 3tours. Au bout du 6eme tours, il devient automatiquement une cible prioritaire par les mobs, même si celui-ci est placé en seconde ligne")
    .addField("HP", "500")
    .addField("Attaque", "?Ange attaque")
    .addField("Défense", "?Aucune")
    .setImage("https://image.myanimelist.net/ui/z3a0S--4LnRurzJAHi0hLc7mUF0wHOYpG-DmXnKO5JE322e5dl0OZhyBMAbg8szq")
    message.channel.sendMessage(help_embed);
}
    if(message.content === préfix + "Ange attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(400));
    var max = Math.floor(Math.max(600)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("l'ange vous attaques avec un pouvoir divin faisant des ravages...", y)
    .setColor("#ffffff")
    .setImage("https://anilyze.files.wordpress.com/2015/08/horriblesubs-overlord-04-720p-mkv_snapshot_16-52_2015-08-06_22-33-52.jpg")
    message.channel.sendMessage(y);
}

    if(message.content === préfix + "Invocation d'ange"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("ange")
    .setColor("#ffffff")
    .setDescription("Vous invoquez un ange guerrier qui attaque et se défend constament, néanmoins il doit utiliser le ciblage pour attaquer quelqu'un")
    .addField("HP", "150")
    .addField("Attaque", "?A attaque")
    .addField("Défense", "?A défense")
    .setImage("https://media.discordapp.net/attachments/541643841061519361/560871237660966913/latest.png?width=832&height=468")
    message.channel.sendMessage(help_embed);
}
    
    
    if(message.content === préfix + "A attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(100));
    var max = Math.floor(Math.max(150)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("l'ange vous donnes un coups d'épée", y)
    .setColor("#ffffff")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "A défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Le guerrier angélique tente de bloquer l'attaque tant bien que mal", y)
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
        if(message.content === préfix + "Super fuite") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous fuyez")
    if(60 < result)
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
    var min = Math.floor(Math.min(130));
    var max = Math.floor(Math.max(170)); 
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
    var min = Math.floor(Math.min(80));
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
    
      if(message.content === préfix + "Régénération de mana inhumain"){
    var min = Math.floor(Math.min(500));
    var max = Math.floor(Math.max(700)); 
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
    .addField("Listes des articles par catégories", "?Information sur l'argent"+" \n ?Parchemin" +"\n ?Arme"+"\n ?Armure"+"\n ?Potion" + "\n ?Divers");
    message.channel.sendMessage(help_embed);
}
 if(message.content === préfix + "Arme"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#f0ff00")
    .addField("Les Armes", "Elles ne sont pas achetables, mais peuvent être obtenue via des events ou des loots rares");
    message.channel.sendMessage(help_embed);
}   
    if(message.content === préfix + "Divers"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#f0ff00")
    .addField("Ticket de bateaux (ne comporte que l'aller)", "25 pièces d'argent'" + "\n 100 pièces de bronze");
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
    .addField("Armure en cuir souple / level 5 minimum", "Prix : 70 pièces de bronze \n ?Achat : armure en cuir souple")
    .addField("Armure simple avec cotte de mailles / level 25minimum", "Prix : 150 pièces de bronze \n 45 pièces d'argent \n ?Achat : armure simple avec cotte de mailles")
    .addField("Armure en plate / level 40minimum", "Prix: 500 pièces de bronze \n 210 pièces d'argent \n 70 pièces d'or \n ?Achat : armure en plate")
    .setColor("#f0ff00")
    message.channel.sendMessage(help_embed);
}


if(message.content === préfix + "Armure mana"){
    var help_embed = new Discord.RichEmbed()
    .addField("Armure en tissus fin / level 5 minimum", "Prix : 70 pièces de bronze \n ?Achat : armure en tissus fin")
    .addField("Armure de sorcier traditionnel / level 25 minimum", "Prix : 150 pièces de bronze \n 45 pièces d'argent \n ?Achat : armure de sorcier traditionnel")
    .addField("Armure de sorcier reconnu / level 40 minimum", "Prix: 500 pièces de bronze \n 210 pièces d'argent \n 70 pièces d'or \n ?Achat : armure de sorcier reconnu")
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
    if(message.content === préfix + "Armure guerrier aquatique"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(150));
    var max = Math.floor(Math.max(250)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(30));
    var maxs = Math.floor(Math.max(50)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var y = new Discord.RichEmbed()
  
    .addField(":shield:  Armure du guerrier aquatique", "HP: " + y + ":hearts: \n Mana: " + x +":sparkles: ")
    .setColor("#331988")
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
    if(message.content === préfix + "Parchemin d'invocation"){
    var help_embed = new Discord.RichEmbed()
    .addField("?Invocation divine", "700 pièces de bronze \n 300 pièces d'argent' \n 100 pièces d'or")
    .addField("?Invocation d'ange", "200 pièces de bronze \n 50 pièces d'argent")
    
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
    .addField("15PC", "Vous pouvez faire apparaitre un inventaire de poche qui peu contenir max 1 objet")
    .addField("18P", "Vous pouvez invoquer un miroir permettant au mage d'observer une personne qu'elle connait personellement.")
    .addField("20PC", "Vous pouvez placer une marque sur une personne ou un objet, elle disparait si elle est placée a la lumière d'une orbe ou au bout de 24H. Elle permet au mage de connaitre l'emplacement de la marque, utilisable une fois par jour et uniquement sur une personne à la fois.")
    .addField("23PC", "Vous pouvez devenir totalement invisible sauf si, lui et ses habits sauf si l'Archer fait un roll > 90, il pourra alors vous détecter. Tout contact physique brise le sort. Utilisable une fois par jour")
    .addField("25PC", "Au simple regarde, on remarque que vous êtes un sorcier")
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
    var max = Math.floor(Math.max(50)); 
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
    .addField("Point de vie d'un énnemie", "500")
    .addField("Attaque", "?Nomade attaque")
    .addField("Défense", "?Nomade défense")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Nomade attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(150));
    var max = Math.floor(Math.max(200)); 
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
    if(result < 35)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setTitle("Le nomade vous fais une parade et vous renvoie la moitié de vos dégats sans même que vous puisez vous défendre, si c'est une attaque à distance alors le Nomade se contentera d'ésquiver l'attaque")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")
    if(35 < result)
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
    var min = Math.floor(Math.min(70));
    var max = Math.floor(Math.max(80)); 
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
    var min = Math.floor(Math.min(120));
    var max = Math.floor(Math.max(140)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 80)
    var y = Math.floor(Math.floor(y) * 1.6)

        if(result < 40)
    var y = new Discord.RichEmbed()
    .addField("Le Champion vous donnes un gros coup d'épée vous faisants reculer de bien 2 metres pour les plus résistants", y)
    .setColor("#045713")
        else if(result < 50)
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
    var result = Math.floor((Math.random() * 100) + 1);
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
    var min = Math.floor(Math.min(3));
    var max = Math.floor(Math.max(7)); 
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
    var min = Math.floor(Math.min(4));
    var max = Math.floor(Math.max(8)); 
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
        .addField("Point de vie d'un énnemie", "500")
        .addField("Attaque", "?Nomade attaque")
        .addField("Défense", "?Nomade défense")
        .setImage("https://media.discordapp.net/attachments/454694319396356128/550671177203318785/c98eba00905084c02123912904b91cff.jpg?width=322&height=560")}
    else if(result < 101){
        var y = new Discord.RichEmbed() 
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(20)); 
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
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(9)); 
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
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(20)); 
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
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(20)); 
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
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(10)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 50){
        var y = new Discord.RichEmbed()
        .setColor("#524b4b")
        .setDescription("Dans les profondeurs de la grotte...Vous croisez sur votre chemin un homme armée, salement amoché, à sa tenue on pourrait penser qu'il est perdu dans la grotte depuis fort longtemps...")
        .addField("Point de vie d'un énnemie", "600")
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
    {
    var help_embed = new Discord.RichEmbed()
            .setColor("#045713")
            .setTitle("Goblin champion")
            .setDescription("Vous arrivez au plus profond de la grotte...vous croisez alors un colosse sur votre route, gardant un ?Petit coffre")
            .addField("Point de vie", "1500")
            .addField("Attaque", "?C goblin attaque")
            .addField("Défense", "?C goblin défense")
            .addField("Passifs", "Dégats au dessus de 500 divisé par 2")
            .addField("Une fois qu'il se fait tuer: le loot normal du mobs + ?Petit coffre grotte")
            .setImage("https://media.discordapp.net/attachments/454694319396356128/551019149409910809/unknown.png?width=994&height=560")}
    message.channel.send(help_embed);

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
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(10));
    var maxs = Math.floor(Math.max(15)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 94)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 94)
    var y = new Discord.RichEmbed()
    .addField("Loot légendaire :exclamation: ", y + "?Dague d'assassin :dagger: " )
    .setColor("#e200ff")
    message.channel.sendMessage(y);
} 

if(message.content === préfix + "Mort paladin démon"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(10));
    var maxs = Math.floor(Math.max(20)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 94)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 94)
    var y = new Discord.RichEmbed()
    .addField("Loot légendaire :exclamation: ", "?Bouclier démoniaque :shield: ")
    .setColor("#e200ff")
    message.channel.sendMessage(y);
} 
if(message.content === préfix + "Mort nomade fou"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(10));
    var maxs = Math.floor(Math.max(20)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 94)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 94)
    var y = new Discord.RichEmbed()
    .addField("Loot légendaire :exclamation: ", "?épée de folie :crossed_swords: ")
    .setColor("#e200ff")
    message.channel.sendMessage(y);
} 

if(message.content === préfix + "Mort squelette"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(10));
    var maxs = Math.floor(Math.max(20)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 94)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 94)
    var y = new Discord.RichEmbed()
    .addField("Loot légendaire :exclamation: ", y + "?Livre abandonné :sparkles: ")
    .setColor("#e200ff")
    message.channel.sendMessage(y);
} 

if(message.content === préfix + "Mort goblin champion"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(200));
    var max = Math.floor(Math.max(250)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(25));
    var maxs = Math.floor(Math.max(50)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
     var result = Math.floor((Math.random() * 100) + 1);
if(result < 94)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x)
    .setColor("#9e9a9a")
    if(result > 94)
        var y = new Discord.RichEmbed()
        .addField("Gain du loot :exclamation: ", y + "Pièce(s) de bronze" + "\n Pièces d'argent " + x + "\n L'arme légendaire de votre classe")
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
    .setDescription("Cette épée d'ancien chevaliers, a été corrompu et a forcé les chevaliers à devenir de simple Nomade érrant dans les grottes. Si vous êtes un démon vous deviendrais encore plus violent et impulsifs qu'avant (pas forcé de faire du friendly fire) mais si vous êtes d'une autre race, vous deviendrez alors avec le temps un demi démon")
    .addField("Bonus", "?Parade folle \n ?Rire de fou")
    message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Livre abandonné"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#e200ff")
    .setTitle("Livre abandonné")
    .setDescription("Ce livre abandonné appartenait à un ancien sorcier qui se dirigeait vers la voix de la mélancolie et de la nécromancie")
    .addField("Bonus", "?Tornade ténébreuse \n ?Invocation de gardien")
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
    var min = Math.floor(Math.min(110));
    var max = Math.floor(Math.max(140)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("")
    .addField("Votre bouclier prend une aura démoniaquue et aspire de votre mana pour bloquer le coups(-60 de Mana)", y)
    .setImage("https://i.pinimg.com/originals/33/b6/5f/33b65fef141b7dd31737f84e8dda02f8.jpg")
    message.channel.send(y);
}
if(message.content === préfix + "Parade folle"){
    var result = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(135));
    var max = Math.floor(Math.max(160)); 
    var w = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 35){
    var w = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .addField("Vous réussiez la parade et vous lui infligez :crossed_swords: ", w)
    .setImage("https://media.giphy.com/media/KXNCVpOZsTpgFS5ULZ/giphy.gif")}
    else if(result < 101){
    var w = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre parade et subisez tout les dégats")
    .setImage("http://i.imgur.com/Lpv5HId.jpg")}
    message.channel.send(w);
}
if(message.content === préfix + "Tornade ténébreuse"){
    var result = Math.floor((Math.random() * 100) + 1);
    var min = Math.floor(Math.min(200));
    var max = Math.floor(Math.max(250)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(result < 50)
    var y = new Discord.RichEmbed()
    .addField("Vous envoyez un sort qui détruit votre adversaire, la compétence n'est pas bloquable(-200 de mana) :sparkles: ", y)
    .setImage("https://media.giphy.com/media/x49CbUokcHQZdaSyga/giphy.gif   ")
    .setColor("#000000")    
    if(result > 50)
    var y = new Discord.RichEmbed()
    .addField("Vous envoyez un sort qui détruit votre adversaire, la compétence n'est pas esquivable(-200 de mana) :sparkles: ", y)
    .setImage("https://media.giphy.com/media/x49CbUokcHQZdaSyga/giphy.gif   ")
    .setColor("#000000")    
    message.channel.send(y);
}

if(message.content === préfix + "Tir magique"){
    var min = Math.floor(Math.min(110));
    var max = Math.floor(Math.max(130)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .addField("Vous tirez une fleche magique(-20 de Mana)",":bow_and_arrow: "+ y)
    .setImage("https://media.giphy.com/media/kiJ8TzLnvfZdUhVcbW/giphy.gif")
    message.channel.send(y);
}

if(message.content === préfix + "Pluie de fleche"){
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var x = Math.floor((Math.random() * 100) + 1);
    if ( x < 60)
    var y = new Discord.RichEmbed()
    .addField("Vous tirez en l'air, votre fleche explose et fait apparaitre une pluie de fleches qui blesse tout les ennemies de manière inesquivables(-50 de Mana)",":bow_and_arrow: "+ y)
    
    .setImage("https://cdn.discordapp.com/attachments/536292650698014731/551878057246326787/79925.png")
    
       else if ( x < 101)
               var y = new Discord.RichEmbed()

.addField("Vous tirez en l'air, votre fleche explose et fait apparaitre une pluie de fleches qui blesse tout les ennemies de manière inesquivables et imblocables(-50 de Mana)",":bow_and_arrow: "+ y)
    
    .setImage("https://cdn.discordapp.com/attachments/536292650698014731/551878057246326787/79925.png")
    
    message.channel.send(y);
}
if(message.content === préfix + "Invocation de gardien"){   
    var min = Math.floor(Math.min(200));
    var max = Math.floor(Math.max(275)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("Fait apparaitre un golem de bois inoffensif qui se prendra tout les dégats à votre place.(-300 de mana / utilisable une fois par combats)", y + ":heart: ")
    .setImage("https://i.pinimg.com/originals/d0/0c/b9/d00cb927aa373746143cca0368271165.jpg")
    message.channel.send(y);
}
if(message.content === préfix + "Coup de dague rapide"){
        
    var min = Math.floor(Math.min(95));
   var max = Math.floor(Math.max(110)); 
   var y = Math.floor(Math.random() * (max - min + 1) ) + min;
      var result = Math.floor((Math.random() * 100) +1);
   if(result < 70)
   var y = new Discord.RichEmbed()
   .addField("Vous lui infligé un coup de dague rapide et lui infligé", y)
   .setColor("#ff6000")
   .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/b/ba/Overlord_II_EP06_097.png/revision/latest?cb=20180216051904")
   else if (result < 95)
   var y = new Discord.RichEmbed()
   .setColor("#ff6000")
   .addField("Vous lui infligé un coup de dague rapide, il ne peut pas bloquer le coup ", y)
   .setImage("https://i.ytimg.com/vi/mmUlK_FAJqI/maxresdefault.jpg")
    else if (result < 101)
           var y = new Discord.RichEmbed()
 .setColor("#ff6000")
   .addField("Vous lui infligé un coup de dague rapide, il ne peut pas bloquer le coup ", y)
   .setImage("https://i.ytimg.com/vi/mmUlK_FAJqI/maxresdefault.jpg")
   message.channel.send(y);
}
if(message.content === préfix + "Lancé de dague"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(50));
    var max = Math.floor(Math.max(75)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor((Math.random() * 3) + 1);
    if( x < 2)
    var y = new Discord.RichEmbed()
    .addField("Vous tirez une flèche empoisonnée qui n'inflige aucun dégats mais un poison durant 2tours impossible à bloquer(-30 de Mana)", y)
    .setColor("#9f0000")
    else if(x < 4)
    var y = new Discord.RichEmbed()
    .setColor("#4e8b27")
    .addField("Votre dague inflige des dégats pendant 3tours(-40 de Mana)", y)
    message.channel.sendMessage(y);
}
    
 if(message.content === préfix + "Trouble démoniaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    var y = new Discord.RichEmbed()
    .setColor("#820000")
    .addField("Vous arrivez à bloquer une attaque imblocable(-50 de mana)", y)
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
/// Ta mere c'est la nouvelle zone
    
    
    if(message.content === préfix + "Apparition plage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50){{
    var help_embed = new Discord.RichEmbed()
    .setTitle("Golem de sable")
    .setColor("#AAEEFF")
    .addField("Point de vie", "1000HP")
    .addField("Attaque", "?S Golem attaque")
    .addField("Défense", "?S Golem défense")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/560180788004651019/412c147ddd889658914f868f8d52cd38.png?width=395&height=559")
    message.channel.sendMessage(help_embed);
}}
    else if(result < 90){
{
        var help_embed = new Discord.RichEmbed()
        .setTitle("Guerrier aquatique")
        .setColor("#AAEEFF")
        .addField("Point de vie", "1500HP")
        .addField("Attaque", "?Guerrier attaque")
        .addField("Défense", "?Guerrier défense")
        .addField("Passifs", "Arrivé à 500HP restant, son attaque ce change en ?F Guerrier attaque")

.setImage("https://media.discordapp.net/attachments/454694319396356128/560080305709645834/400px-Wyrmguard_full.jpg")
        message.channel.sendMessage(help_embed);
    }}
    else if(result < 101){
    {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Noble aquatique")
        .setColor("#01FFDD")
        .addField("Point de vie", "1500HP")
        .addField("Attaque", "?Noble attaque")
        .addField("Défense", "?Noble défense")
 .addField("Passifs", "Une fois arrivé à 0HP ?Transformation aquatique")
        .setImage("https://media.discordapp.net/attachments/454694319396356128/560077864867856394/Deep_Sea_King_Anime_Portrait.png?width=332&height=376")
        message.channel.sendMessage(help_embed);
    }
    }


}
    
    if(message.content === préfix + "S Golem attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(120));
    var max = Math.floor(Math.max(130)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 30)
    var y = Math.floor(Math.floor(y) * 0.5)
        if(result >  30)
    var y = new Discord.RichEmbed()
    .setColor("#ffb700")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/560180788004651019/412c147ddd889658914f868f8d52cd38.png?width=395&height=559")
    .addField("Le golem de sable, crée une tornade de sable, qui inflige des dégâts à tout les ennemies. La première ligne subit le double des dégâts. C'est imblocable", y)
        else
    var y = new Discord.RichEmbed()
    .addField("Le golem de sable, vous donnes un coups de poings", y)
    .setColor("#ffb700")
    
    message.channel.sendMessage(y);
}

if(message.content === préfix + "S Golem défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result >  30)
    var y = new Discord.RichEmbed()
    .addField("Le golem de sable tente de bloquer avec ses bras", y)
    .setColor("#ffb700")
        else
    var y = new Discord.RichEmbed()
    .setColor("#ffb700")
    .setTitle("Votre attaque traverse le sable, il ne subit aucun dégat")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Guerrier attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(170));
    var max = Math.floor(Math.max(190)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    var y = new Discord.RichEmbed()
    .addField("Le guerrier essaye de vous infliger un coups en diagonale à l'aide de son épée", y)
    .setColor("#331988")
    message.channel.sendMessage(y);
}
    
    if(message.content === préfix + "F Guerrier attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(300));
    var max = Math.floor(Math.max(350)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    var y = new Discord.RichEmbed()
    .addField("Le guerrier ouvre sa gueule et vous envoies une spiral d'eau vous réduisant vos dégats au prochain tours de moitié", y)
    .setColor("#331988")
    message.channel.sendMessage(y);
}
    
    
if(message.content === préfix + "Guerrier défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(40)); 
    var mins = Math.floor(Math.min(50));
    var maxs = Math.floor(Math.max(70)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result >  30)
    var y = new Discord.RichEmbed()
    .addField("Le guerrier utilise son bouclier pour se défendre", y)
    .setColor("#331988")
        else
    var y = new Discord.RichEmbed()
    .setColor("#331988")
    .setImage("https://media.discordapp.net/attachments/454694319396356128/560080305709645834/400px-Wyrmguard_full.jpg")
    .addField("Le guérrier pratique une parade, vous infligeant de léger dégâts, si vous attaquez à distance, alors il se contentera seulement d'éviter", x)
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Noble attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(180));
    var max = Math.floor(Math.max(220)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result > 30)
    var y = Math.floor(Math.floor(y) * 0.70)
        if(result >  30)
    var y = new Discord.RichEmbed()
    .addField("Le noble vous fous un énorme punch dans le ventre", y)
    .setImage("https://vignette.wikia.nocookie.net/onepunchman/images/7/75/Sea_King_finishes_Stinger.png/revision/latest?cb=20151124210315")
    .setColor("#01FFDD")
        else
    var y = new Discord.RichEmbed()
     .setColor("#01FFDD")
    .addField("Le noble vous envoies une vague d'eau qui inflige des dégats à tout le monde, réduit de *2 à la ligne de dérrière", y)
   
    
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Noble défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(80)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 85)
    var y = new Discord.RichEmbed()
    .setColor("#01FFDD")
    .addField("Le noble bloque l'attaque", y)
        else
    var y = new Discord.RichEmbed()
    .setTitle("Le noble évite l'attaque")
    .setImage("https://m.media-amazon.com/images/M/MV5BY2FmNDYzNzItNzczMC00NDJhLTg2ZGEtZTBiMmI0NWViOWQ5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX1777_CR0,0,1777,999_AL_.jpg")
    .setColor("#01FFDD")
    
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Tombeau sinistre"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#9fa6a6")
    .setTitle("Le tombeau qui annonce votre fin...(-250 de mana)")
    .setDescription("L'ennemie ne pourra plus attaquer ni utliser une compétence(sauf aura) tant qu'il n'a pas reçu de dégats. Il sera bloqué maximum 2 tours. Hors RP le tombeau consomme 100 de mana toute les 5minutes(si vous l'utilisez une 2eme fois lors d'un combat, cela coutera 200 de mana de plus)")
    .setImage("https://cdn.discordapp.com/attachments/454694319396356128/560458979575332881/unknown.png")
    message.channel.sendMessage(help_embed);
}
    
    
    if(message.content === préfix + "Arrive sur la plage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 75)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tombez sur des hhumanoîdes", "?Apparition plage")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("La plage est calme, seul le vent vous entoures")
    message.channel.send(result);

}
    if(message.content === préfix + "S Noble attaque"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(250));
    var max = Math.floor(Math.max(300)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var y = Math.floor(Math.floor(y) * 0.3)
        if(result <  20)
    var y = new Discord.RichEmbed()
    .setColor("#01FFDD")
    .addField("Le noble envoie une vague uniquement à la ligne de dérrière", y)
        else if (result < 101)
    var y = new Discord.RichEmbed()
    .addField("Le noble vous attaques avec sa langue", y)
    .setImage("http://vignette2.wikia.nocookie.net/onepunchman/images/f/f2/Sea_King_moray.png/revision/latest?cb=20151124210406")
    .setColor("#01FFDD")
    
    message.channel.sendMessage(y);
}

if(message.content === préfix + "S Noble défense"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(60)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var mins = Math.floor(Math.min(120));
    var maxs = Math.floor(Math.max(180)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70)
    var y = new Discord.RichEmbed()
    .setColor("#01FFDD")
    .addField("Le noble bloque l'attaque", y)
        else if (result < 90)
    var y = new Discord.RichEmbed()
    .setTitle("Le noble ésquive l'attaque")
    .setImage("http://vignette2.wikia.nocookie.net/onepunchman/images/4/4f/Sea_King_true_form.png/revision/latest?cb=20151124210414")
    .setColor("#01FFDD")
    else if (result < 101)
         var y = new Discord.RichEmbed()
    .setColor("#01FFDD")
    .addField("Le noble vous infliges une parade ne prennant donc aucun dégâts, si l'attaque est à distance il esquive juste", x)
    .setImage("https://www.japanator.com/ul/34526-annotated-anime-one-punch-man-episode-8/wanpanmen%20(5)-noscale.jpg")
    
    message.channel.sendMessage(y);
}
    
    if(message.content === préfix + "Mort Golem de sable"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(70));
    var max = Math.floor(Math.max(140)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(20));
    var maxs = Math.floor(Math.max(50)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var minss = Math.floor(Math.min(3));
    var maxss = Math.floor(Math.max(10)); 
    var w = Math.floor(Math.random() * (maxss - minss + 1) ) + minss;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ",":third_place:  Pièce(s) de bronze " + y + "\n :second_place:  Pièces d'argent " + x + "\n :first_place:  Pièces d'or " + w)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}  
if(message.content === préfix + "Mort Guerrier aquatique"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(100));
    var max = Math.floor(Math.max(200)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(60));
    var maxs = Math.floor(Math.max(80)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var minss = Math.floor(Math.min(5));
    var maxss = Math.floor(Math.max(15)); 
    var w = Math.floor(Math.random() * (maxss - minss + 1) ) + minss;
    var result = Math.floor((Math.random() * 100) + 1);
        if(result < 30)
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ", ":third_place:  Pièce(s) de bronze " + y + "\n :second_place:  Pièces d'argent " + x + "\n :first_place:  Pièces d'or " + w)
    .setColor("#331988")
         .addField("Armure peu commune", "?Armure guerrier aquatique")
   
    else if(result < 101)
        var y = new Discord.RichEmbed()
         .addField("Gain du loot :exclamation: ", ":third_place:  Pièce(s) de bronze " + y + "\n :second_place:  Pièces d'argent " + x + "\n :first_place:  Pièces d'or " + w)
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);

 
}  
    
    
if(message.content === préfix + "Mort Noble aquatique"){
    var help_embed = new Discord.RichEmbed()
    var min = Math.floor(Math.min(700));
    var max = Math.floor(Math.max(1000)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var help_embed = new Discord.RichEmbed()
    var mins = Math.floor(Math.min(300));
    var maxs = Math.floor(Math.max(450)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var minss = Math.floor(Math.min(60));
    var maxss = Math.floor(Math.max(90)); 
    var w = Math.floor(Math.random() * (maxss - minss + 1) ) + minss;
    var y = new Discord.RichEmbed()
    .addField("Gain du loot :exclamation: ",":third_place:  Pièce(s) de bronze " + y + "\n :second_place:  Pièces d'argent " + x + "\n :first_place:  Pièces d'or " + w +"\n futur item légendaire")
    .setColor("#9e9a9a")
    message.channel.sendMessage(y);
}  

if(message.content === préfix + "Transformation aquatique"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#07848e")
    .setTitle("Le grand noble")
    .addField("Point de vie", "3000")
    .addField("Attaque", "?S Noble attaque")
    .addField("Défense", "S Noble défense")
    .addField("Passifs", "Aucune...Sachez juste qu'ici repose votre futur tombe")
    .setImage("https://theglorioblog.files.wordpress.com/2015/12/opm9seaking.jpg")
    message.channel.sendMessage(help_embed);
}
    
    
    
if(message.content === préfix + "Arrive dans l'église") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 99){
    var result = new Discord.RichEmbed() 
    .setColor("#FFD700")
    .setTitle("L'église est...Normal")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
    .setColor("#FFFFFF")
    .setTitle("PNJ")
    .setDescription("Marnox le grand prêtre rentre dans l'église avec une atitude totalement silencieuse et plate. Vous n'aurez pas le temps de faire quoi que ce soit que sa présence vous rendras aussi religieu que les anciens apôtres. Il repartira peu de temps après avoir fait sa prière.")
    .addField("Si vous l'avez déjà vue une fois", "?Eglise lugubre")
    .setImage("http://vignette1.wikia.nocookie.net/berserk/images/0/05/Mozgus_Manga.jpg/revision/latest?cb=20140416220234")}
    

    message.channel.sendMessage(result);

}

if(message.content === préfix + "Eglise lugubre"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Une apparence bien trompense...")
    .setColor(" #000000")
    .setDescription("Ce n'était pas Marnox qui était rentrée dans l'église...Non....Impossible étant donné que celui-ci était en pélerinage. En réalité ce dernier vous avez observé dans l'église depuis bien longtemps, l'un des trois démons c'était fait un plaisir de voir votre dévouement en dieu comme une partie de divertissement...Un portail s'ouvrir dérrière vous et des tentacules vous saisirent bras et jambes pour vous emporter dans les abysses durant 1 semaines ou vous y perdrez la fois envers Dieu devenant petit à petit un demi démon....Ou bien vous arriverez à garder la tête haute et sortirait des abysses avec beaucoup de difficulté mentalement et deviendrais un demi ange")
    .setImage("http://i1.cdnds.net/12/32/gaming_dark_souls_prepare_to_die_dlc_1.jpg")
    message.channel.sendMessage(help_embed);
}
    
    if(message.content === préfix + "Arrive dans la rivière noir") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60){
    var result = new Discord.RichEmbed() 
    .setColor("#a90f0f")
    .setImage("https://i.pinimg.com/originals/80/e9/e9/80e9e99e1886239716032fc01a923fe0.jpg")
    .setTitle("Un animal géant vous fonces dessus vous retirant 20% de vos HP")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
    .setColor("#06af2b")
    .setTitle("C'est bien calme...")}
    message.channel.send(result);

}
    
    if(message.content === préfix + "Arrive cher le Druid") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 90){
    var result = new Discord.RichEmbed() 
    .setColor("#06af2b")
    .setTitle("Le druide ne fait rien")}
    else if(result < 98){
        var result = new Discord.RichEmbed() 
    .setColor("#06af2b")
    .setTitle("Le druide rentre cher lui venant vous remarquer dans sa propriété. Il reste droit face à vous du haut de ses 1m30 dégeant aucune magie à première vue. Si vous restez 10minutes de plus alors il vous transformera en lapin durant 2jours et fera un petit tours dans sa maison avant de repartir tranquillement")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
    .setColor("#a90f0f")
    .setTitle("Le druide arrive...Il vous remarques et par réflexe il vous saisie avec des lianes et vous fais bouffer l'eau à plusieurs reprise avant de vous lancer contre un arbre vous transformant en chat durant 5jours")}
    message.channel.send(result);

}
    
    
    if(message.content === préfix + "Arrive plaine sombre") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 30){
    var result = new Discord.RichEmbed() 
    .setColor("#00421a")
    .setImage("https://images-ext-1.discordapp.net/external/8XGiV7jTKHvbDJ0RvALPi_wjlwPhU8jNX8J9WpshDZs/https/media.discordapp.net/attachments/536292650698014731/569877071694921728/c60158208dcd2a4a60a3a546aa2591f5.png")
    .setTitle("Vous marchez sur un piège à loups magique qui absorbe 30% de votre mana")}
    else if(result < 60){
        var result = new Discord.RichEmbed() 
    .setColor("#00421a")
    .setImage("https://cdna.artstation.com/p/assets/images/images/012/856/400/large/gwenaelle-michel-space-concept-001-v3-wm.jpg?1536853549")
    .setTitle("Une barrière invisible apparait devans vous, vous empechants de rester dans cette zone, vous devez partir")}
    else if(result < 99){
        var result = new Discord.RichEmbed() 
    .setColor("#00421a")
    .setImage("https://media.discordapp.net/attachments/581867542574923834/581872673387315201/378211.jpg?width=729&height=467")
    .setTitle("Les yeux d'une statue s'illuminent et vous devenez immobilisez sur place durant 10minutes")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
    .setColor("#a90f0f")
    .setTitle("Rois squelette")
    .setDescription("Du haut d'une colline ou dérrière celle-ci ce trouvait un champs de ruine, une masse squelettique apparut")
    .addField("HP", "15 000")
    .addField("Attaque", "GS attaque")
    .addField("Info supplémentaire", "Il est toujours en première ligne")}
    message.channel.send(result);

}

if(message.content === préfix + "GS attaque"){
    var min = Math.floor(Math.min(10));
    var max = Math.floor(Math.max(15)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70){
    var y = new Discord.RichEmbed()
    .setColor("#1a00ff")
    .setTitle("Un chevalier squelettique sort de la grande masse, venant se placer sur le front")
    .addField("HP", "350")
    .addField("Attaque", "?Chevalier attaque")
    .addField("Défense", "?Chevalier défense")
    .setImage("https://vignette.wikia.nocookie.net/overlord8371/images/6/6a/Death_Knight_Databook_01.png/revision/latest?cb=20190206001525&path-prefix=fr")}
    else if(result < 101){
    var y = new Discord.RichEmbed() 
    .setColor("#37ac0f")
    .setTitle("Des squelettes sortent du géant venant rejoindre le front")
    .addField("Nombre d'énnemie: ", y)
    .addField("Point de vie d'un énnemie", "40")
    .addField("Attaque", "?Squelette attaque")
    .addField("Défense", "Aucune")
    .setImage("https://vignette.wikia.nocookie.net/overlordmaruyama/images/2/20/Overlord_II_EP03_051.png/revision/latest?cb=20180127032839")}
    message.channel.send(y);
}
    
    
        if(message.content === préfix + "Mort test"){
            const user = message.author;
        message.channel.sendMessage(":?givelevel " + user + " 50")
         console.log("Le test est effécuté")

    }

         if(message.content === préfix + "Test 123"){            
        message.channel.sendMessage("5/5")
         console.log("Le test est effécuté")

    }
    
    var groupe = Number(1; 7);
   
    if(message.content === préfix + "Récompenses " + groupe ){    
        var XPmin = Math.floor(Math.min(20));
        var XPmax = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (XPmax - XPmin + 1) ) + XPmin;
             console.log("Le début est bon")

             if(groupe < 2){
               }

                else if(groupe < 3){
                   }
                else if(groupe < 4){
                }
                else if(groupe < 10){
                }
    
    message.channel.sendMessage(y + " XP")

     console.log("Le test est effécuté")

}
    
    
});















client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("?Help");
});
