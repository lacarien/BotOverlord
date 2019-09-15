const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require("fs")
var vm = require('vm')
var prefix = "?";
var préfix = "?";

client.login(process.env.TOKEN);

/*
//message de bienvenue 
client.on("guildMemberAdd",user =>
{
    //version sans embeb(bannière)
    //user.guild.channels.get("609021765925994515").send("Bienvenue" + user + "sur le serveur " + user.guild.name +"!")

    let NouveauMembre = new Discord.RichEmbed()
        .setColor("#bf0000")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription("Bienvenue " + user.user.username + " sur le serveur " + user.guild.name +"!")
        .setFooter("Serveur test | BotTest")
    user.guild.channels.get("609021765925994515").send(NouveauMembre)
    user.addRole("609028164492197960")
});

*/
/*
//message d'aurevoir
client.on("guildMemberRemove", user =>
{
    user.guild.channels.get("609021765925994515").send(user.user.username + " nous à malheureusement quitté !")
});

*/



client.on("message",message =>
{
    borneMinimum = 0;
    borneMaximum = 100;
    roll = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);
    roll2 = Math.floor(Math.random() * (borneMaximum - borneMinimum + 1)  + borneMinimum);

    //Inclusion des fichier externe
    eval(fs.readFileSync(__dirname + '/bestiaire.js')+'');
   // eval(fs.readFileSync(__dirname + '/watson.js')+'');
    eval(fs.readFileSync(__dirname + '/attaque.js')+'');
    eval(fs.readFileSync(__dirname + '/pnj.js')+'');
    eval(fs.readFileSync(__dirname + '/Economie.js')+'');
    
    eval(fs.readFileSync(__dirname + '/UnderlordMenu.js')+'');
    eval(fs.readFileSync(__dirname + '/UnderlordAttaque.js')+'');
    eval(fs.readFileSync(__dirname + '/UnderlordMobs.js')+'');





    // Roll
    if(message.content === préfix + "Roll"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 50)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle(result)
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#16ff00")
        .setTitle(result)
        message.channel.sendMessage(y);
    }


    //Blessure malus

    if(message.content === prefix + "MalusBlessure")
    {
        if(roll >= 0 && roll <= 49)
        {
            let blessure = new Discord.RichEmbed()
                .setColor("#bf0000")
                .setAuthor("L'une de vos jambes est touchée, ce qui rend plus difficile une fuite éventuelle")
                .setDescription("**?Fuite-**")
            message.channel.send(blessure)
        }else if(roll >= 50 && roll <= 74)
        {
            let blessure = new Discord.RichEmbed()
                .setColor("#000000")
                .setAuthor("L'une de vos jambes est touchée, ce qui vous rend beaucoup moins agile et vous fait attaquer toujours en dernier")
            message.channel.send(blessure)
        }else if(roll >= 75 && roll <= 100)
        {
            let blessure = new Discord.RichEmbed()
                .setColor("#bf0000")
                .setAuthor("L'un de vos bras est touché, ce qui réduit fortement votre capacité à manier votre arme")
                .setDescription("**Avant chaque attaque faire (?MalusVisée)**")
            message.channel.send(blessure)
        }
    }

    //Blessure grave malus

    if(message.content === prefix + "MalusBlessureGrave")
    {
        if(roll >= 0 && roll <= 59)
        {
            let blessure = new Discord.RichEmbed()
                .setColor("#bf0000")
                .setAuthor("L'un de vos bras est très griévement endommagé, ce qui réduit très fortement votre capacité à manier votre arme")
                .setDescription("**Avant chaque attaque faire (?MalusVisée2)**")
            message.channel.send(blessure)
        }else if(roll >= 60 && roll <= 89)
        {
            let blessure = new Discord.RichEmbed()
                .setColor("#000000")
                .setAuthor("L'un de vos bras est beaucoup trop endommagé, cela vous empêche de manier les armes autres que pistolet ou couteau")
            message.channel.send(blessure)
        }else if(roll >= 90 && roll <= 100)
        {
            let blessure = new Discord.RichEmbed()
                .setColor("#000000")
                .setAuthor("Vous subissez un coup critique qui vous plonge instantanément dans le coma")
            message.channel.send(blessure)
        }
    }
    
    
    if(message.content === préfix + "Voyage spatiale"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
           if(result < 2)
           var y = new Discord.RichEmbed()
        .setColor("#6e61ae")
        .setImage("https://images.alphacoders.com/505/505470.jpg")
        .setTitle("Votre vaisseau se fait subitement toucher par un vaisseau ennemi qui était camouflé. Vous finisez sur la planète la plus proche que vous pourrez atteindre avec votre vaiseau détruit tout comme les 3/4 du matériel à l'intérieur devenant impossible à réparer")
           else if(result < 5)
           var y = new Discord.RichEmbed()
      .setColor("#6e61ae") 
           .setTitle("Subitement vous avez un problème technique ne permettant plus à redémarrer les moteurs. Vous devrez attendre qu'un joueur vienne vous récupérer abandonnant votre ancien vaisseau")
           .setImage("https://vignette.wikia.nocookie.net/masstrek/images/9/9b/Fall_of_Denobula.jpg/revision/latest?cb=20121215021908")
            else if(result < 30)
           var y = new Discord.RichEmbed()
           .setColor("#6e61ae")
           .setTitle("Vous avez eu un problème technique. Si cela se reproduit votre vaisseau ne pourra plus se déplacer (temps de réparation : 24h(et seulement si il est toujours en êtat de se déplacer sinon 36h))")
        .setImage("https://crossingzebras.com/wp-content/uploads/2013/02/EVE_CaldariPrimeAftermath.jpg")
         else if(result < 101)
           var y = new Discord.RichEmbed()
           .setColor("#6e61ae")
        .setTitle("Le déplacement se fait sans problème")
        .setImage("https://vignette.wikia.nocookie.net/masseffect/images/8/80/NormandySR2B.jpg/revision/latest?cb=20120424160325&path-prefix=fr")
        message.channel.sendMessage(y);
    }

    if(message.content === préfix + "Fuite"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 80)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("La fuite est inutile")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#16ff00")
        .setTitle("Vous réussissez à fuir")
        message.channel.sendMessage(y);
    }

    if(message.content === préfix + "Fuite amélioré"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 60)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("La fuite est inutile")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#47c33b")
        .setTitle("Vous réussissez à fuir")
        message.channel.sendMessage(y);
    }
    
    
    if(message.content === préfix + "Voyage spatiale scout"){
  var y = new Discord.RichEmbed()
     var result = Math.floor((Math.random() * 100) + 1);
     if(result < 1)
     var y = new Discord.RichEmbed()
  .setColor("#6e61ae")
  .setImage("https://images.alphacoders.com/505/505470.jpg")
  .setTitle("Votre vaisseau se fait subitement toucher par un vaisseau ennemi qui était camouflé. Vous finisez sur la planète la plus proche que vous pourrez atteindre avec votre vaiseau détruit tout comme les 3/4 du matériel à l'intérieur devenant impossible à réparer")
     else if(result < 3)
     var y = new Discord.RichEmbed()
.setColor("#6e61ae") 
     .setTitle("Subitement vous avez un problème technique ne permettant plus à redémarrer les moteurs. Vous devrez attendre qu'un joueur vienne vous récupérer abandonnant votre ancien vaisseau")
     .setImage("https://vignette.wikia.nocookie.net/masstrek/images/9/9b/Fall_of_Denobula.jpg/revision/latest?cb=20121215021908")
      else if(result < 10)
     var y = new Discord.RichEmbed()
     .setColor("#6e61ae")
     .setTitle("Vous avez eu un problème technique. Si cela se reproduit votre vaisseau ne pourra plus se déplacer (temps de réparation : 24h(et seulement si il est toujours en êtat de se déplacer sinon 36h))")
  .setImage("https://crossingzebras.com/wp-content/uploads/2013/02/EVE_CaldariPrimeAftermath.jpg")
   else if(result < 101)
     var y = new Discord.RichEmbed()
     .setColor("#6e61ae")
  .setTitle("Le déplacement se fait sans problème")
  .setImage("http://66.media.tumblr.com/tumblr_lshxphqGQk1qmpg90o1_500.gif")
  message.channel.sendMessage(y);
}

if(message.content === préfix + "Voyage spatiale technicien"){
  var y = new Discord.RichEmbed()
     var result = Math.floor((Math.random() * 100) + 1);
     if(result < 1)
     var y = new Discord.RichEmbed()
  .setColor("#6e61ae")
  .setImage("https://images.alphacoders.com/505/505470.jpg")
  .setTitle("Votre vaisseau se fait subitement toucher par un vaisseau ennemi qui était camouflé. Vous finisez sur la planète la plus proche que vous pourrez atteindre avec votre vaiseau détruit tout comme les 3/4 du matériel à l'intérieur devenant impossible à réparer")
     else if(result < 5)
     var y = new Discord.RichEmbed()
.setColor("#6e61ae") 
     .setTitle("Subitement vous avez un problème technique ne permettant plus à redémarrer les moteurs. Vous devrez attendre qu'un joueur vienne vous récupérer abandonnant votre ancien vaisseau")
     .setImage("https://vignette.wikia.nocookie.net/masstrek/images/9/9b/Fall_of_Denobula.jpg/revision/latest?cb=20121215021908")
      else if(result < 25)
     var y = new Discord.RichEmbed()
     .setColor("#6e61ae")
     .setTitle("Vous avez eu un problème technique. Si cela se reproduit votre vaisseau ne pourra plus se déplacer (temps de réparation : 24h(et seulement si il est toujours en êtat de se déplacer sinon 36h))")
  .setImage("https://crossingzebras.com/wp-content/uploads/2013/02/EVE_CaldariPrimeAftermath.jpg")
   else if(result < 101)
     var y = new Discord.RichEmbed()
     .setColor("#6e61ae")
  .setTitle("Le déplacement se fait sans problème")
  .setImage("http://66.media.tumblr.com/tumblr_lshxphqGQk1qmpg90o1_500.gif")
  message.channel.sendMessage(y);
}

if(message.content === préfix + "Voyage spatiale assaut"){
  var y = new Discord.RichEmbed()
     var result = Math.floor((Math.random() * 100) + 1);
     if(result < 1)
     var y = new Discord.RichEmbed()
  .setColor("#6e61ae")
  .setImage("https://images.alphacoders.com/505/505470.jpg")
  .setTitle("Votre vaisseau se fait subitement toucher par un vaisseau ennemi qui était camouflé. Vous finisez sur la planète la plus proche que vous pourrez atteindre avec votre vaiseau détruit tout comme les 3/4 du matériel à l'intérieur devenant impossible à réparer")
     else if(result < 5)
     var y = new Discord.RichEmbed()
.setColor("#6e61ae") 
     .setTitle("Subitement vous avez un problème technique ne permettant plus à redémarrer les moteurs. Vous devrez attendre qu'un joueur vienne vous récupérer abandonnant votre ancien vaisseau")
     .setImage("https://vignette.wikia.nocookie.net/masstrek/images/9/9b/Fall_of_Denobula.jpg/revision/latest?cb=20121215021908")
      else if(result < 20)
     var y = new Discord.RichEmbed()
     .setColor("#6e61ae")
     .setTitle("Vous avez eu un problème technique. Si cela se reproduit votre vaisseau ne pourra plus se déplacer (temps de réparation : 24h(et seulement si il est toujours en êtat de se déplacer sinon 36h))")
  .setImage("https://crossingzebras.com/wp-content/uploads/2013/02/EVE_CaldariPrimeAftermath.jpg")
   else if(result < 101)
     var y = new Discord.RichEmbed()
     .setColor("#6e61ae")
  .setTitle("Le déplacement se fait sans problème")
  .setImage("http://66.media.tumblr.com/tumblr_lshxphqGQk1qmpg90o1_500.gif")
  message.channel.sendMessage(y);
}

if(message.content === préfix + "Voyage spatiale croiseur"){
  var y = new Discord.RichEmbed()
     var result = Math.floor((Math.random() * 100) + 1);
     if(result < 1)
     var y = new Discord.RichEmbed()
  .setColor("#6e61ae")
  .setImage("https://images.alphacoders.com/505/505470.jpg")
  .setTitle("Votre vaisseau se fait subitement toucher par un vaisseau ennemi qui était camouflé. Vous finisez sur la planète la plus proche que vous pourrez atteindre avec votre vaiseau détruit tout comme les 3/4 du matériel à l'intérieur devenant impossible à réparer")
     else if(result < 5)
     var y = new Discord.RichEmbed()
.setColor("#6e61ae") 
     .setTitle("Subitement vous avez un problème technique ne permettant plus à redémarrer les moteurs. Vous devrez attendre qu'un joueur vienne vous récupérer abandonnant votre ancien vaisseau")
     .setImage("https://vignette.wikia.nocookie.net/masstrek/images/9/9b/Fall_of_Denobula.jpg/revision/latest?cb=20121215021908")
      else if(result < 30)
     var y = new Discord.RichEmbed()
     .setColor("#6e61ae")
     .setTitle("Vous avez eu un problème technique. Si cela se reproduit votre vaisseau ne pourra plus se déplacer (temps de réparation : 24h(et seulement si il est toujours en êtat de se déplacer sinon 36h))")
  .setImage("https://crossingzebras.com/wp-content/uploads/2013/02/EVE_CaldariPrimeAftermath.jpg")
   else if(result < 101)
     var y = new Discord.RichEmbed()
     .setColor("#6e61ae")
  .setTitle("Le déplacement se fait sans problème")
  .setImage("http://66.media.tumblr.com/tumblr_lshxphqGQk1qmpg90o1_500.gif")
  message.channel.sendMessage(y);
}



if(message.content === préfix + "Esquive scout"){
  var y = new Discord.RichEmbed()
     var result = Math.floor((Math.random() * 100) + 1);
  if(result < 10)
  var y = new Discord.RichEmbed()
  .setColor("#0027a4")
  .setImage("https://media.moddb.com/images/groups/1/3/2632/we_are_under_attack_by_ka4xid-d51b7la.jpg")
  .setTitle("Votre vaisseau évite le tire")
  else if (result < 101)
  var y = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("Vous subissez le tire")
  message.channel.sendMessage(y);
}


if(message.content === préfix + "Laser mark 1"){
  var y = new Discord.RichEmbed()
     var result = Math.floor((Math.random() * 100) + 1);
  if(result < 40)
  var y = new Discord.RichEmbed()
  .setColor("#0027a4")
  .setImage("http://masseffectuniverse.fr/wp-content/uploads/2012/04/Mass-effect-3-normandy-sr2-alliance-2560x16001.jpg")
  .setTitle("Votre tire passe proche du vaisseau ennemie mais...Il ne le touche pas")
  else if (result < 90)
  var y = new Discord.RichEmbed()
  .setColor("#df6504")
  .setTitle("Votre tire touche le vaisseau adverse, cela inflige 3 points de dégats")
  .setImage("http://remlok-industries.fr/wp-content/uploads/2016/11/ED-Combat-9.jpg")
  else if (result < 101)
  var y = new Discord.RichEmbed()
  .setColor("#df4004")
  .setTitle("Votre tire touche le vaisseau adervse, cela inflige 4 points de dégats")
  .setImage("http://remlok-industries.fr/wp-content/uploads/2016/11/ED-Combat-9.jpg")

  message.channel.sendMessage(y);
}

if(message.content === préfix + "Laser mark 2"){
  var y = new Discord.RichEmbed()
     var result = Math.floor((Math.random() * 100) + 1);
  if(result < 30)
  var y = new Discord.RichEmbed()
  .setColor("#0027a4")
  .setImage("http://masseffectuniverse.fr/wp-content/uploads/2012/04/Mass-effect-3-normandy-sr2-alliance-2560x16001.jpg")
  .setTitle("Votre tire passe proche du vaisseau ennemie mais...Il ne le touche pas")
  else if (result < 80)
  var y = new Discord.RichEmbed()
  .setColor("#df6504")
  .setTitle("Votre tire touche le vaisseau adverse, cela inflige 3 points de dégats")
  .setImage("http://remlok-industries.fr/wp-content/uploads/2016/11/ED-Combat-9.jpg")
  else if (result < 101)
  var y = new Discord.RichEmbed()
  .setColor("#df4004")
  .setTitle("Votre tire touche le vaisseau adervse, cela inflige 4 points de dégats")
  .setImage("http://remlok-industries.fr/wp-content/uploads/2016/11/ED-Combat-9.jpg")

  message.channel.sendMessage(y);
}
    
    
        if(message.content === prefix + "Vaisseau")
    {
    let Vaisseau = new Discord.RichEmbed()
        .addField("**__Vaisseau Scout__**", "```diff\n+Le vaisseau scout est parfait pour les voyages rapide et conçus pour réduire au maximum tout problème technique``` ")
        .addField("Blindage","**8**",true)
        .addField("Caractéristique","**?Esquive Scout** ",true)
        .addField("Voyage spatiale","**?Voyage spatial scout**",true)
        .addField("Attaque","**?Laser mark 1**",true)
        .addField("**__Vaisseau technicien__**", "```diff\n+Le vaisseau technicien est spécialisé dans la réparation de vaisseau```")
        .addField("Blindage","**12**",true)
        .addField("Caractéristique","**réparation 2x rapide**",true)
        .addField("Voyage spatiale","**?Voyage spatiale technicien** ",true)
        .addField("Attaque","**?Laser mark 1** ",true)
        .addField("**__Vaisseau d'assault__**", "```diff\n+Les vaisseaux d'assault sont spécialisé dans la recherche et la déstruction``` ")
        .addField("Blindage","**10**",true)
        .addField("Caractéristique spécial","**Rien**",true)
        .addField("Voyage spatiale","**?Voyage spatiale assault** ",true)
        .addField("Attaque","**?Laser mark 2** ",true)
        .addField("**__Croiseur spatiale__**", "```diff\n+Les croiseur sont conçus pour être résistant et est spécialisé dans le transport de troupe```")
        .addField("Blindage","**15**",true)
        .addField("Caractéristique spécial","**Rien**",true)
        .addField("Voyage spatiale","**?Voyage spatiale croiseur** ",true)
        .addField("Attaque","**Laser mark 2** ",true)
    message.channel.send(Vaisseau)
    }

});
