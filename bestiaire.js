if(message.content === préfix + "Fuite" || message.content === préfix + "fuite") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 30)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setTitle("Vous fuyez")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setTitle("La fuite est impossible")
    message.channel.send(result);

}

if(message.content === préfix + "Tigrou") {
    var result = new Discord.RichEmbed() 
    .setTitle("Tigrou")
    .setColor("#223300")
    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU4jg5iYWBTXRbrU3Qw36azSF-qaHDt07bfulRZA529NIBWMWh&usqp=CAU")
    .addField(":heart: HP","30")
    .addField(":beginner: Passif", "Une fois arrivé en dessous de 10HP : ``?Badaboom``")
    .addField(":crossed_swords: Attaque", "?Tigrou attaque")
    .addField(":shield: Défense", "?Tigrou blocage")
    .addField(":moneybag: Récompenses", "?Loot tigrou")
    message.channel.send(result)
}

if(message.content === préfix + "Tigrou attaque" || message.content === préfix + "tigrou attaque"){
    var min = Math.floor(Math.min(15));
    var max = Math.floor(Math.max(20)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 95)
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Le Tigrou vous fonces dessus venant vous infliger des petits dégats", ":crossed_swords:" + y)
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setTitle("Le Tigrou adversaire rate son attaque")
    .setColor("#000000")
    message.channel.sendMessage(y);
    }

if(message.content === préfix + "Badaboom" || message.content === préfix + "badaboom"){
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 50)
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Le Tigrou viendra cracher de l'acide sur votre torse vous infligeant de lourd dégâts. Suite à quoi Tigrou viendra décéder.(Vos HP peuvent se bloquer à 1HP)", ":bomb:" + y)
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setTitle("Le Tigrou viendra cracher de l'acide, par chance il ne vous touche pas, mais le Tigrou viendra quand même décéder.")
    .setColor("#000000")
    message.channel.sendMessage(y);
    }    

if(message.content === préfix + "Tigrou blocage" || message.content === préfix + "tigrou blocage"){
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(3)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Le Tigrou viendra faire prendre le coup. Seul sa peau viendra réduire l'attaque", ":shield:" + y)
    message.channel.sendMessage(y);
    }

if(message.content === préfix + "Loot tigrou" || message.content === préfix + "loot tigrou"){
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(3)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    message.channel.sendMessage(y);
}

/////////////////////// ARBROS ////////////////

if(message.content === préfix + "Arbros") {
    var result = new Discord.RichEmbed() 
    .setTitle("Arbros")
    .setColor("#223300")
    .setImage("https://cdn.discordapp.com/attachments/712371639136026735/713126526597464064/hcOgYviAo_57fA5voaF-zysO3Jt52k8jsBaYJ-rKApGhjme6-Prudqmnun50ubmS1DebmXGFbjgJVx9p9UTIs8r-7lw1fLBIxi4Z.png")
    .addField(":heart: HP","50")    
    .addField(":beginner: Passif", "Aucune")
    .addField(":crossed_swords: Attaque", "?Arbros attaque")
    .addField(":shield: Défense", "?Arbros blocage")
    .addField(":moneybag: Récompenses", "?Loot arbros")
    message.channel.send(result)
}

if(message.content === préfix + "Arbros attaque" || message.content === préfix + "arbros attaque"){
    var min = Math.floor(Math.min(12));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 95)
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("L'Arbros viendra vous donner un coup d'arbre en plein sur la figure", ":crossed_swords:" + y)
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setTitle("L'Arbros vous regarde")
    .setColor("#000000")
    message.channel.sendMessage(y);
    }
if(message.content === préfix + "Arbros blocage" || message.content === préfix + "Arbros blocage"){
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(10)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("L'Arbre viendra bloquer l'attaque à l'aide de ses bras", ":shield:" + y)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot arbros" || message.content === préfix + "loot arbros"){
    var min = Math.floor(Math.min(2));
    var max = Math.floor(Math.max(5)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    message.channel.sendMessage(y);
}

/////////////////////// TORTANK ////////////////

if(message.content === préfix + "Tortank") {
    var result = new Discord.RichEmbed() 
    .setTitle("Tortank")
    .setColor("#223300")
    .setImage("https://i.pinimg.com/originals/da/6c/ac/da6cac0e71d4e78d48d38d3e93a133dc.jpg")
    .addField(":heart: HP","40")
    .addField(":beginner: Passif", "Aucune")
    .addField(":crossed_swords: Attaque", "?Tortank attaque")
    .addField(":shield: Défense", "?Tortank blocage")
    .addField(":moneybag: Récompenses", "?Loot tortank")
    message.channel.send(result)
}

if(message.content === préfix + "Tortank attaque" || message.content === préfix + "tortank attaque"){
    var min = Math.floor(Math.min(17));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 75)
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Tortank viendra vous donner un coup de queue. Attention au visage !", ":crossed_swords:" + y)
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .addField("Tortank viendra vous mordre la jambes et vous lancer sur le côté, vous êtes paralysé et passé votre tour !", ":crossed_swords:" + y)
    .setColor("#000000")
    .setImage("https://i.pinimg.com/originals/da/6c/ac/da6cac0e71d4e78d48d38d3e93a133dc.jpg")
    message.channel.sendMessage(y);
    }

if(message.content === préfix + "Tortank blocage" || message.content === préfix + "tortank blocage"){
    var min = Math.floor(Math.min(20));
    var max = Math.floor(Math.max(25)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Tortank viendra bloquer l'attaque sans bouger le petit doigt. Merci sa carapace", ":shield:" + y)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot tortank" || message.content === préfix + "loot tortank"){
    var min = Math.floor(Math.min(3));
    var max = Math.floor(Math.max(7)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(0));
    var maxs = Math.floor(Math.max(2)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;

    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    message.channel.sendMessage(y);
}

/// PALIER 2 ///    
    /// PALIER 2 ///    
        /// PALIER 2 ///
            /// PALIER 2 ///
            /// PALIER 2 ///
        /// PALIER 2 ///
    /// PALIER 2 ///
/// PALIER 2 ///

if(message.content === préfix + "Goblin") {
    var result = new Discord.RichEmbed() 
    .setTitle("Goblin")
    .setColor("#58D68D")
    .setImage("https://cdn.discordapp.com/attachments/712345553895424011/712672362440425482/16-24-18-images.jpg")
    .addField(":heart: HP","100")
    .addField(":beginner: Passif", "Est très relou")
    .addField(":crossed_swords: Attaque", "?Goblin attaque")
    .addField(":shield: Défense", "?Goblin esquive")
    .addField(":moneybag: Récompenses", "?Loot goblin")
    message.channel.send(result)
}

if(message.content === préfix + "Goblin attaque"  || message.content === préfix + "goblin attaque"){
    var min = Math.floor(Math.min(35));
    var max = Math.floor(Math.max(45)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Poison // 
    var mins = Math.floor(Math.min(5));
    var maxs = Math.floor(Math.max(10)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var total = x*3;

    var result = Math.floor((Math.random() * 100) + 1);
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Le goblin vient vous attaquer à l'aide de sa dague.", ":crossed_swords:" + y)
    message.channel.sendMessage(y);
    if(result>60){
    var y = new Discord.RichEmbed()    
        .addField("**Pas de chance, il vous empoisones et vous infliges du poison pendant 3 tours (non cumulable)**", ":green_heart: " + x + " (Le total est de : " + total + " )")
        .setColor("#000000")
        message.channel.sendMessage(y);
    }
}

if(message.content === préfix + "Goblin esquive" || message.content === préfix + "goblin esquive"){
    var result = Math.floor((Math.random() * 100) + 1);
    if(result <65)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Le goblin esquive l'attaque, la faute à pas de chance")
    .setImage("https://www.nautiljon.com/images/more/01/89/121798.jpg")
    else if( result < 101)
    var y = new Discord.RichEmbed()
    .setTitle("Le goblin subit tous les dégâts")
    .setColor("#223300")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot goblin" || message.content === préfix + "loot goblin"){
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(8)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(1));
    var maxs = Math.floor(Math.max(3)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;

    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    message.channel.sendMessage(y);
}

/////////////////////// HIBOU ////////////////

if(message.content === préfix + "Hibou") {
    var result = new Discord.RichEmbed() 
    .setTitle("Hibou")
    .setColor("#58D68D")
    .setImage("https://i.redd.it/l1hi7um1wtl01.png")
    .addField(":heart: HP","400")
    .addField(":beginner: Passif", "Croak ! Croak !")
    .addField(":crossed_swords: Attaque", "?Hibou attaque")
    .addField(":shield: Défense", "?BHibou [Dégâts reçu]")
    .addField(":moneybag: Récompenses", "?Loot hibou")
    message.channel.send(result)
}

if(message.content === préfix + "Hibou attaque"  || message.content === préfix + "hibou attaque"){
    var min = Math.floor(Math.min(35));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(y*1.1);
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Le hibou viendra vous donner un coup de pique pique", ":crossed_swords:" + y)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setImage("https://i.ytimg.com/vi/OQeB6KsoEVU/maxresdefault.jpg")
    .addField("Le hibou viendra prendre de la hauteur. Suite à quoi il vous enverra une rafale de vent. Vous ne pourrez pas bloquer la prochaine attaque", ":crossed_swords:" + x)
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot hibou" || message.content === préfix + "loot hibou"){
    var min = Math.floor(Math.min(8));
    var max = Math.floor(Math.max(15));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(3));
    var maxs = Math.floor(Math.max(5)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;

    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    message.channel.sendMessage(y);
}

/////////////////////// GEANT ////////////////

if(message.content === préfix + "Géant") {
    var result = new Discord.RichEmbed() 
    .setTitle("Géant")
    .setColor("#58D68D")
    .setImage("https://cdn.discordapp.com/attachments/712371639136026735/712768881277534218/forest-spirit-anthony-james-hutchings.jpg")
    .addField(":heart: HP","2000")
    .addField(":beginner: Passif", "Aucune")
    .addField(":crossed_swords: Attaque", "?Géant attaque")
    .addField(":shield: Défense", "Aucune")
    .addField(":moneybag: Récompenses", "?Loot géant")
    message.channel.send(result)
}

if(message.content === préfix + "Géant attaque"  || message.content === préfix + "géant attaque"){
    var min = Math.floor(Math.min(80));
    var max = Math.floor(Math.max(100)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(y*1.5);
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 80){
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Le géant viendra vous donner un coup de pied", ":crossed_swords:" + y)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Pas de chance...Le géant était ''un peu enerve'', il viendra alors essayé de vous applatir au sol", ":crossed_swords:" + x)
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot géant" || message.content === préfix + "loot géant"){
    var min = Math.floor(Math.min(25));
    var max = Math.floor(Math.max(40));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(8));
    var maxs = Math.floor(Math.max(15)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;

    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    message.channel.sendMessage(y);
}

/// DONJON EN RUINE ///
    /// DONJON EN RUINE ///
        /// DONJON EN RUINE ///
            /// DONJON EN RUINE ///
            /// DONJON EN RUINE ///
        /// DONJON EN RUINE ///
    /// DONJON EN RUINE ///
/// DONJON EN RUINE ///

if(message.content === préfix + "Boss donjon ruine") {
    var result = new Discord.RichEmbed() 
    .setTitle("Sergent Hadès")
    .setColor("#4A007E")
    .setThumbnail('https://s1.zerochan.net/Shinigami.Kishi.600.2617464.jpg')
    .setImage("https://s1.zerochan.net/Shinigami.Kishi.600.2654621.jpg")
    .addField(":heart: HP","350")
    .addField(":beginner: Passif", "1-Vous ne pouvez pas lui infliger plus de 50 de dégâts.\n2-Lorsque sa barre de vie est en dessous de 100, son attaque change : ?Hades attaque")
    .addField(":crossed_swords: Attaque", "?Sergent attaque")
    .addField(":shield: Défense", "?Sergent défense")
    .addField(":moneybag: Récompenses", "?Loot hades")
    message.channel.send(result)
}


if(message.content === préfix + "Hades attaque"  || message.content === préfix + "hades attaque"){
    var min = Math.floor(Math.min(45));
    var max = Math.floor(Math.max(55)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var min = Math.floor(Math.min(0));
    var max = Math.floor(Math.max(10)); 
    var vol = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(y*1.2);
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60){
    var y = new Discord.RichEmbed()
    .setColor("#4A007E")
    .addField("Hadès prit de fureur viendra alors donner un coup de faux à l'horizontal. En plus d'infliger des dégâts, il viendra se régénérer", ":crossed_swords: " + y +"\n💗 " + vol)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#4A007E")
    .setImage("https://s1.zerochan.net/Shinigami.Kishi.600.2654623.jpg")
    .addField("La faux d'Hadès viendra prendre une étrange couleur...Et ce n'était pas bon signe. D'ailleurs, Hadès vous le prouveras en venant vous foncer dessus accompagné d'une grande puissance. Vous infligeant des dégâts __perce armure.__ et se régénérant des HP", ":crossed_swords:" + x  +"\n💗 " + vol)
    }
    message.channel.sendMessage(y);
}
if(message.content === préfix + "Sergent attaque"  || message.content === préfix + "sergent attaque"){
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(50)); 
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    var x = Math.floor(y*1.1);
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 80){
    var y = new Discord.RichEmbed()
    .setColor("#4A007E")
    .addField("Le Sergent s'approchera de sa cible et viendra donner un coup de faux à l'horizontal afin d'attaquer son adversaire, suite à quoi il viendra faire un bond en arrière", ":crossed_swords: " + y)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#4A007E")
    .setImage("https://s1.zerochan.net/Shinigami.Kishi.600.2654624.jpg")
    .addField("Le Sergent viendra alors faire un bond à gauche puis à droite avant de finalement venir vous sauter dessus, vous infligeant des dégâts __perce armure.__", ":crossed_swords: " + x)
    }
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot hadès" || message.content === préfix + "loot hadès"){
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(50));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(2));
    var maxs = Math.floor(Math.max(7)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var result = Math.floor((Math.random() * 100) + 1);
    if(result <97)
    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    else if(result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/ba/f7/05/baf705990e172623bfbfbb1375b5de4c.jpg")
    .setTitle("L'anneau du Sergent")
    .setDescription("L'anneau du sergent peut-être stocké uniquement au nombre de 1.")
    message.channel.sendMessage(y);
}


