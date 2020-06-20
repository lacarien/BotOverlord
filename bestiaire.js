if(message.content === préfix + "Fuite" || message.content === préfix + "fuite") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 15)
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
    .addField(":heart: HP","250")
    .addField(":beginner: Passif", "1-Vous ne pouvez pas lui infliger plus de 50 de dégâts.\n2-Lorsque sa barre de vie est en dessous de 50, son attaque change : ?Hades attaque")
    .addField(":crossed_swords: Attaque", "?Sergent attaque")
    .addField(":shield: Défense", "?bsergent [dégâts reçu]")
    .addField(":moneybag: Récompenses", "?Loot hades")
    message.channel.send(result)
}


if(message.content === préfix + "Hades attaque"  || message.content === préfix + "hades attaque"){
    var min = Math.floor(Math.min(35));
    var max = Math.floor(Math.max(45)); 
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
    var min = Math.floor(Math.min(30));
    var max = Math.floor(Math.max(40)); 
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
    var min = Math.floor(Math.min(40));
    var max = Math.floor(Math.max(50));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(7));
    var maxs = Math.floor(Math.max(12)); 
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
    .setDescription("L'anneau du sergent peut-être stocké uniquement au nombre de 1. Si dans un combat vous venez à vous faire tuer, alors vos HP viendront se bloquer à 1. Une fois le combat finit, vous reviendrais à la vie et l'anneau se ''brisera'', le rendant donc inutile et utilisable une seul fois.")
    message.channel.sendMessage(y);
}

/// GROTTE PALIER 2 /// 
    /// GROTTE PALIER 2 /// 
        /// GROTTE PALIER 2 /// 
            /// GROTTE PALIER 2 /// 
            /// GROTTE PALIER 2 /// 
        /// GROTTE PALIER 2 /// 
    /// GROTTE PALIER 2 /// 
/// GROTTE PALIER 2 /// 

if(message.content === préfix + "Gobelin attaque"  || message.content === préfix + "gobelin attaque"){ 
    var mins = Math.floor(Math.min(40));
    var maxs = Math.floor(Math.max(50)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = x*1.3
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le gobelin rate son attaque...")
    } else if (result <23){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le goblin vient vous attaquer à l'aide de sa dague, néanmoins __elle ne perce pas votre armure !__", ":crossed_swords:" + x)
    } else if (result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le goblin vient vous attaquer à l'aide de sa dague, __l'attaque perce votre armure !__", ":crossed_swords:" + x)
    }else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .addField("Le goblin vient vous attaquer à l'aide de sa dague, __**l'attaque perce votre armure en plus d'être un coup critique !**__", ":crossed_swords:" + Z)
    }
    message.channel.sendMessage(y);
    
}

if(message.content === préfix + "Agobelin attaque"  || message.content === préfix + "agobelin attaque"){ 
    var mins = Math.floor(Math.min(45));
    var maxs = Math.floor(Math.max(55)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = x*1.3
    var W = x*0.7
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le gobelin archer rate son attaque...")
    } else if (result <65){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le goblin archer tire une flèche sur un adversaire de première ligne. Si la personne a une armure, alors les dégâts sur cette derniere viendront à être transféré sur la personne au cible juste en dessous(tire perce armure).", ":bow_and_arrow: " + x)
    } else if (result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le goblin archer viendra tirer sur une cible de la __deuxième ligne__", ":bow_and_arrow: " + W)
    }else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .addField("**Le goblin viendra tirer une flèche qui fera de gros dégâts.**", ":bow_and_arrow: " + Z)
    }
    message.channel.sendMessage(y);
    
}

if(message.content === préfix + "Loup attaque"  || message.content === préfix + "loup attaque"){ 
    var mins = Math.floor(Math.min(30));
    var maxs = Math.floor(Math.max(45)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = Math.floor(x*1.3)
    var W = Math.floor(x*0.3)
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le loup rate son attaque...")
    } else if (result <60){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le loup viendra mordre son adversaire sans pour autant lui affecter un malus. Si le loup vous as déjà mordu au précédent tours, alors vous ne pourrez pas attaquer(L'attaque avec le saignement n'est pas prit en compte).", ":crossed_swords: " + x)
    } else if (result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le loup viendra vous donner un coup de croc, il vous appliquera un saignement non cumulable pendant 3 tours.", ":crossed_swords: " + x + "\n:drop_of_blood: " + W)
    }else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .addField("**Le loup vous donneras un féroce coup de croc !**", ":crossed_swords: " + Z)
    }
    message.channel.sendMessage(y);
    
}

if(message.content === préfix + "Hobgobelin attaque"  || message.content === préfix + "hobgobelin attaque"){ 
    var mins = Math.floor(Math.min(45));
    var maxs = Math.floor(Math.max(55)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = Math.floor(x*1.3)
    var W = Math.floor(x*0.5)
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le hobgobelin rate son attaque...")
    } else if (result <70){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le Hobgobelin viendra vous donner un coup de poings en plein dans le visage.", ":crossed_swords: " + x)
    } else if (result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Levant son pied, il viendra écraser le sol créant un mini seisme...__Tout le mond prend des dégâts (Uniquement esquivable et l'armure est inutile...Néanmoins si vous avez plus d'armure que les dégâts du hobgobelin, alors vous prenez que la moitié.)", ":crossed_swords: " + W)
    }else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .addField("**Le loup vous donneras un féroce coup de croc !**", ":crossed_swords: " + Z)
    }
    message.channel.sendMessage(y);
    
}

if(message.content === préfix + "Vagabond attaque"  || message.content === préfix + "vagabond attaque"){ 
    var mins = Math.floor(Math.min(55));
    var maxs = Math.floor(Math.max(70)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = Math.floor(x*1.3)
    var W = Math.floor(x*0.3)
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le vagabond rate son attaque...")
    } else if (result <25){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le vagabond vous regarde droit dans les yeux et vous force à attaquer votre alliée.")
    } else if (result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le vagabond viendra vous donner un coup d'épée en plein dans le torse !", ":crossed_swords: " +x)
    }else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .addField("**La lame du vagabond vient devenir violette et ce dernier la plante dans votre corps...Quand vous serez sortie du donjon, vous serez extrêmement malade et serez dans l'impossibilité de faire plus de deux combat par jours. Cette semaine -25% de vos PV**", ":crossed_swords: " + Z)
    }
    message.channel.sendMessage(y);
    
}

if(message.content === préfix + "Paladin attaque"  || message.content === préfix + "paladin attaque"){ 
    var mins = Math.floor(Math.min(45));
    var maxs = Math.floor(Math.max(55)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = Math.floor(x*1.3)
    var W = Math.floor(x*0.3)
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le vagabond rate son attaque...")
    } else if (result <35){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le paladin fonce sur vous et vous donnes un coup de bouclier et vous fais perdre 20% de vos HP max...Si vous êtes 5 dans le combat, alors vous serez ''hors jeu'' pendant 5 tours. Si vous êtiez 4, alors pendant 4 tours, etc.")
    } else if (result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le paladin vous donnes un coup de bouclier en plein dans votre face", ":crossed_swords: " +x)
    }else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .addField("**La bouclier du paladin viendra prendre une couleur violette et vous viendrez le manger en pleine face...**", ":crossed_swords: " + Z)
    .addField("**Malus**","Quand vous serez sortie du donjon, vous verez des visions affreuses de votre passé et serez dans l'impossibilité de faire plus de deux combat par jours. De plus...\nVous aurez pendant cette semaine -25% de vos PV (il est à noter que si vous venez d'un autre monde, les visions vous ferons retrouver un peu plus la mémoire bien que __tout__ sera tourné dans le malheur pouvant même créer des visions fausses)")
    }
    message.channel.sendMessage(y);
    
}

if(message.content === préfix + "Sorcier attaque"  || message.content === préfix + "sorcier attaque"){ 
    var mins = Math.floor(Math.min(45));
    var maxs = Math.floor(Math.max(55)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = Math.floor(x*1.3)
    var W = Math.floor(x*0.5)
    var J = Math.floor(x*0.3)
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le sorcier rate son attaque...")
    } else if (result <60){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Levant une main, le sorcier viendra envoyer une nuée de chauve souris sur __toutes les lignes,__ l'attaque est __perce armure__", ":crossed_swords: "+W)
    } else if (result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Le sorcier envoie trois attaque rapidement sur un membre de la deuxième ligne(Donc 3 blocages ou 3 esquive)", ":crossed_swords: " +J)
    }else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .addField("**Le sorcier fait un coup critique et vous envoie une boule de feu.**", ":crossed_swords: " + Z)
    }
    message.channel.sendMessage(y);
    
}

if(message.content === préfix + "Druid attaque"  || message.content === préfix + "druid attaque"){ 
    var mins = Math.floor(Math.min(40));
    var maxs = Math.floor(Math.max(60)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = Math.floor(x*2)
    var W = Math.floor(x*0.5)
    var J = Math.floor(x*0.3)
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le druid rate son sort...")
    } else if (result <70){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Venant chanter une incantation, le druid viendra soigner le paladin noir ou le vagabond en priorité...S'ils sont mort, il soignera le monstre qui c'est fait attaqué dernièrement", ":heartpulse: "+W)
    } else if (result < 97){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Levant une main, le druid viendra retirer tout ce qui est dégâts sur le long therme de ses alliées(Saignement, etc). Si il n'a rien à soigner...Alors tant pis.")
    }else if(result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .addField("**Le druid viendra faire un coup critique sur son incantation.**", ":heartpulse: " + Z)
    }
    message.channel.sendMessage(y);
    
}

if(message.content === préfix + "Champion attaque"  || message.content === préfix + "champion attaque"){ 
    var mins = Math.floor(Math.min(120));
    var maxs = Math.floor(Math.max(150)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
    var Z = Math.floor(x*2)
    var W = Math.floor(x*0.5)
    var J = Math.floor(x*0.3)
    var result = Math.floor((Math.random() * 100) + 1);
    if(result<3){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Le champion rate son attaque...")
    } else if (result <70){
    var y = new Discord.RichEmbed()
    .setColor("#515A5A")
    .addField("Grognant comme le goblin qu'il est, le champion viendra vous donner un coup sans hésiter", ":crossed_swords: "+x)
    } else if (result < 101){
    var y = new Discord.RichEmbed()
    .setColor("#c50000")
    .setImage("https://media1.giphy.com/media/WoLbiZxOu0Na83cfuD/giphy.gif")
    .addField("**Vous venez vous prendre un bon gros coup...(Dans le pire vos HP seront bloqué à 1..Mais rien ne vous empêche de mourir plus tard). Dans 3 tours vous pourrez revenir sur le terrain.**",":crossed_swords: " + Z )
    }
    message.channel.sendMessage(y);
    
}

/// LOUP

if(message.content === préfix + "Loup" || message.content === préfix + "loup") {
    var help_embed = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Loup")
    .setImage("https://cdn.discordapp.com/attachments/708449828337745942/720323106916532305/image0.jpg")
    .addField(":heart: HP par loup","240")
    .addField(":crossed_swords: Attaque", "?Loup attaque")
    .addField(":trident: Passif","Si un loup est provoqué, alors tout les loups attaquent la même cible. Si le loup provoqué est seul, alors ses dégâts sont multipliés par 2\nSi vous avez subit plus de 5 morsures, alors votre armure deviendra inutilisable jusqu'à la fin du combat")
    .addField(":beginner: Défense", "?Bloup [dégâts reçu]")
    .addField(":moneybag: Récompenses", "?Loot loup")
    message.channel.sendMessage(help_embed);
        
}

if(message.content === préfix + "Gobelin de la horde" || message.content === préfix + "Gobelin de la horde") {
    var help_embed = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Horde de gobelin")
    .setImage("https://static.comicvine.com/uploads/scale_super/11133/111335377/6810507-7543951013-Scree.png")
    .addField(":heart: HP par gobelin","160")
    .addField(":shield: Armure par gobelin", "5")
    .addField(":crossed_swords: Attaque", "?Gobelin attaque")
    .addField(":beginner: Défense", "?Bhgobelin [dégâts reçu]")
    .addField(":moneybag: Récompenses", "?Loot gobelin")
    message.channel.sendMessage(help_embed);
        
}

if(message.content === préfix + "Gobelin archer" || message.content === préfix + "Gobelin archer") {
    var help_embed = new Discord.RichEmbed()
    .setColor("#515A5A")
    .setTitle("Horde de gobelin")
    .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c17260ba-b9a1-4bbf-bb1b-ec6d88452d1e/d9465pj-99df55f4-32af-4490-b5ae-039c5834331f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzE3MjYwYmEtYjlhMS00YmJmLWJiMWItZWM2ZDg4NDUyZDFlXC9kOTQ2NXBqLTk5ZGY1NWY0LTMyYWYtNDQ5MC1iNWFlLTAzOWM1ODM0MzMxZi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.oJ1poNSOnnsoJZLSk83f1xUrHVY8tU9WBHj2ux0B26c")
    .addField(":heart: HP par Gobelin","100")
    .addField(":shield: Armure par gobelin", "5")
    .addField(":crossed_swords: Attaque", "?Agobelin attaque")
    .addField(":beginner: Défense", "?Bagobelin [dégâts reçu]")
    .addField(":moneybag: Récompenses", "?Loot gobelin archer")
    message.channel.sendMessage(help_embed);
        
}

if(message.content === préfix + "Loot loup" || message.content === préfix + "loot loup"){
    var min = Math.floor(Math.min(7));
    var max = Math.floor(Math.max(12));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(2));
    var maxs = Math.floor(Math.max(4)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;

    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot gobelin" || message.content === préfix + "loot gobelin"){
    var min = Math.floor(Math.min(6));
    var max = Math.floor(Math.max(9));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(2));
    var maxs = Math.floor(Math.max(4)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;

    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Loot gobelin archer" || message.content === préfix + "loot gobelin archer"){
    var min = Math.floor(Math.min(5));
    var max = Math.floor(Math.max(10));
    var y = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Pièce argent
    var mins = Math.floor(Math.min(1));
    var maxs = Math.floor(Math.max(5)); 
    var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;

    var y = new Discord.RichEmbed()
    .setColor("#223300")
    .addField("Vous gagnez des pièces de bronze", ":third_place:" + y)
    .addField("Vous gagnez des pièces d'argent", ":second_place:" + x)
    message.channel.sendMessage(y);
}
















// ARME LEGENDAIRE ///
    // ARME LEGENDAIRE ///
        // ARME LEGENDAIRE ///
            // ARME LEGENDAIRE ///
            // ARME LEGENDAIRE ///
        // ARME LEGENDAIRE ///
    // ARME LEGENDAIRE ///
// ARME LEGENDAIRE ///


if(message.content === préfix + "Légendaire dague sinistre") {
    var result = new Discord.RichEmbed() 
    .setTitle("Dague sinistre")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/e2/6d/30/e26d30cb6fa2a606bc0ed250385e2d70.png")
    .addField(":trident: **__Compétence__**","Pendant 4 tours vous débloquez la compétence : ?Mesquive [dégâts reçu]")
    .addField(":beginner: **__Passif__**", "La première semaine vous perdrez votre voix...La deuxième semaine vous ne pourrez plus utiliser la gestuelle pour parler ressemblant plus à une ''âme vide'' qu'autre chose...")
    .addField(":beginner: **__Passif (suite)__**","arrivé au stade où vous ne pourrez plus comuniquer avec la gestuelle et la voix, vous pourrez uniquement chuchoter dans les oreilles auprès des autres personnes qui sont de la classe voleur, ou bien d'une seul personne au choix(c'est parmanent, donc ne choisisez pas n'importe qui).")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    message.channel.send(result)
}

if(message.content === préfix + "Légendaire épée de folie") {
    var result = new Discord.RichEmbed() 
    .setTitle("épée de folie")
    .setColor("#4A007E")
    .setImage("https://cdna.artstation.com/p/assets/images/images/021/026/414/large/francois-cannels-brightswordfinal-lowres.jpg?1570090378")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Mparade [dégâts reçu]")
    .addField(":beginner: **__Passif__**", "L'épée de folie comme son nom l'indique vous rendras fou...La première semaine cela vient à se montrer uniquement via l'oral et la deuxième semaine vous commencez à frapper physiquement autrui...Votre folie atteint son ''maximum'' au bout d'un mois.")
    .addField(":beginner: **__Passif (suite)__**","Il est à noter que ce comportement ''violent et impulsif'' peut-être sur 3 variantes : Vous protégez quelqu'un et vous n'hésitez pas à frapper la personne pour qu'elle vous écoutes (car vous avez toujours raison askip) et ne laissez personne l'approcher. Vous n'hésitez pas à frapper quelqu'un qui vous parle car celon vous ''il vous agresse''. Ou bien vous êtes juste '' extremement impulsif'' dans votre quotidien. ")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    message.channel.send(result)
}

if(message.content === préfix + "Légendaire bouclier du garde vagabond") {
    var result = new Discord.RichEmbed() 
    .setTitle("Bouclier lichien")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/34/1f/48/341f482aaa1f2deed465239d124ce936.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Crie squelettique")
    .addField(":beginner: **__Passif__**", "Le malus du bouclier est simple, plus vous allez passer du temps avec votre bouclier, plus vous allez finir schizophrène. Au bout de 2 semaines vous ferez limite plus confiance à votre bouclier qu'à vos proches et vous vous renfermerez sur vous même.")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    message.channel.send(result)
}

if(message.content === préfix + "Légendaire arc du serpent") {
    var result = new Discord.RichEmbed() 
    .setTitle("L'arc du serpent")
    .setColor("#4A007E")
    .setImage("https://i.pinimg.com/originals/46/ee/80/46ee802e45537168f7198d278c244f7a.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Tir de zone [Vos dégâts]")
    .addField(":beginner: **__Passif__**", "Le malus de l'arc est simple...Au bout de deux semaines vous deviendrez aveugle en contre partie d'une ''super ouïe''.")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    message.channel.send(result)
}

if(message.content === préfix + "Légendaire grimoire du druid") {
    var result = new Discord.RichEmbed() 
    .setTitle("Le grimoire du petit druid")
    .setColor("#4A007E")
    .setImage("https://img5.goodfon.com/wallpaper/nbig/5/4e/elena-kondratova-grimoire-cg-art-fentezi-kniga-magiia.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Invocation groop [Votre mana max]")
    .addField(":beginner: **__Passif__**", "Le malus de cette arme légendaire est de vous rendre extremement peureux au bout de deux semaine. Vous serez au stade de vous laissez vous faire victimiser en se mettant en boule au sol et en pleurant(on parle d'un coup de poinge en RP passifs, si il vous attaque avec une vraie attaque vous pourrez vous défendre).")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    message.channel.send(result)
}

if(message.content === préfix + "Légendaire grimoire du sorcier") {
    var result = new Discord.RichEmbed() 
    .setTitle("Le grimoire du grand sorcier")
    .setColor("#4A007E")
    .setImage("https://66.media.tumblr.com/09a3a46b8c2b0a6035ac7297a1543d8e/tumblr_piic463vSM1x4rh9bo1_1280.jpg")
    .addField(":trident: **__Compétence__**","Vous débloquez la compétence : ?Tornade ténébreuse [Vos dégâts]")
    .addField(":beginner: **__Passif__**", "Le malus de cette arme légendaire est de vous faire croire que vous ''voyez l'avenir'', voir même que vous êtes le héro d'une grande histoire liée à une prophétie (qui n'a jamais existé, car dans la réalité ~~tu restes une petite merde~~)")
    .addField(":page_facing_up: **__Note__**", "Vous ne pouvez pas porter plus d'une arme légendaire sur vous.")
    .addField(":moneybag: Revente", "Impossible")
    message.channel.send(result)
}













