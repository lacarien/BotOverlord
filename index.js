

const Discord = require('discord.js');

const client = new Discord.Client();

var préfix = "?";

client.login(process.env.TOKEN);


client.on('message', message => {













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
        
         var min = Math.floor(Math.min(15));
        var max = Math.floor(Math.max(25)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous lui infligé un coup de dague impossible à bloquer. Vous perdez 40 de mana", y)
        .setImage("https://media.giphy.com/media/XptviXceQG8pjLZ0FD/giphy.gif")
        message.channel.send(y);
    }
    
    if(message.content === préfix + "Tornade de flamme"){
        var min = Math.floor(Math.min(50));
        var max = Math.floor(Math.max(80)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous envoyez un sort qui brule votre adversaire. Vous perdez 50 de mana", y)
        .setImage("https://media.giphy.com/media/x49CbUokcHQZdaSyga/giphy.gif   ")
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
    
    if(message.content === préfix + "Sort de soins"){
        var min = Math.floor(Math.min(50));
        var max = Math.floor(Math.max(70)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous soignez une personne au choix, ou bien vous. En contrepartie vous perdez 50 de mana", y)
        .setImage("https://media.giphy.com/media/Bp4Iz5pItPXI3ErsAf/giphy.gif")
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
    
    if(message.content === préfix + "Blocage magique"){
        var min = Math.floor(Math.min(25));
        var max = Math.floor(Math.max(45)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous executez un blocage magique et perdez 20 de Mana", y)
        .setImage("https://media.giphy.com/media/ljYCvFo7HtheECUT7U/giphy.gif")
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
    
    if(message.content === préfix + "Sort simple"){
        var min = Math.floor(Math.min(30));
        var max = Math.floor(Math.max(50)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous envoyez un sort sur votre adversaire", y)
        .setImage("https://media.giphy.com/media/2sgF179xV3fH9GW2mJ/giphy.gif")
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
        var min = Math.floor(Math.min(50));
        var max = Math.floor(Math.max(70)); 
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
        .addField("Votre instinct vampirique prend le dessus et vous bloquez facilement le coup")
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
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
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
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(30)); 
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































  
});














client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("?Help");
});
