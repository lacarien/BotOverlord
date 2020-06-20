if(message.content === préfix + "Immobilier" || message.content === préfix + "immobilier"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .addField(":house: **Où acheter un bâtiment ?**", "``Pour acheter un bâtiment vous devrez demander à un ''agent immobilier magique'', il rajoutera entre 3 et 5% du prix du bâtiment. Mettez un ''?'' avant le bâtiment pour avoir plus d'informations sur ce dernier.``")
    .addField(":scroll: **Liste des bâtiments**", "1-Tipi\n2-Cabane\n3-Maison\n4-Maison au bord du lac\n5-Ancien temple\n6-Petite grotte")
    .setFooter("Menu immobilier")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Tipi" || message.content === préfix + "tipi"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#006825")
    .setTitle(":tent: Tipi")
    .addField(":moneybag: __**Prix**__","500 pièces de bronze et 300 pièces d'argent")
    .addField(":money_with_wings: __**Revente**__","Impossible, vous pouvez juste la détruire.")
    .addField(":scroll: __**Description**__", "Cette petite tente est vraiment petite...La seul chose qu'elle vous apporte est un lieu au chaud où dormir et puis c'est tout ! Il est difficile de rentrer à deux dedans, alors n'essayez même pas à 3 personnes ! En plus de la tente, à l'interieur sera fournit une grande couverture ainsi qu'un oreiller")
    .setImage("https://images6.alphacoders.com/903/thumb-1920-903254.png")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Cabane" || message.content === préfix + "cabane"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#01782b")
    .setTitle(":house_abandoned: Cabane")
    .addField(":moneybag: __**Prix**__","1000 pièces de bronze et 600 pièces d'argent")
    .addField(":money_with_wings: __**Revente**__","Impossible, vous pouvez juste la détruire.")
    .addField(":scroll: __**Description**__", "Cette petite cabane permet d'abriter au grand maximum deux personnes ! Elle a également deux pièces, un salon principal et le lit double. La pièce principal est petite et ne contient qu'une table...Alors inutile d'essayez de faire top chef ou autre.")
    .setImage("https://i.pinimg.com/originals/80/be/e6/80bee63515cac5f171bfecc67bb853e1.jpg")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Maison" || message.content === préfix + "maison"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#009f39")
    .setTitle(":house: Maison")
    .addField(":moneybag: __**Prix**__","1500 pièces de bronze, 1000 pièces d'argent et 100 pièces d'or")
    .addField(":money_with_wings: __**Revente**__","Impossible, vous pouvez juste la détruire.")
    .addField(":scroll: __**Description**__", "Enfin quelque chose de concret ! Cette maison a 4 salles, elle a une chambre avec un lit double qui est extremement confortable. Une salle pour cuisiner bien que vous n'ayez aucun outil...Une salle principal avec une table et quatre chaise et pour finir une salle qui contient un lit pour un invité.")
    .setImage("https://www.wallpapermaiden.com/wallpaper/19027/download/1600x900/anime-house-forest-clouds-scenic-grass.jpg")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Maison au bord du lac" || message.content === préfix + "maison au bord du lac"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#009f6f")
    .setTitle(":house_with_garden: Maison au bord du lac")
    .addField(":moneybag: __**Prix**__","2000 pièces de bronze, 2000 pièces d'argent et 200 pièces d'or")
    .addField(":money_with_wings: __**Revente**__","Impossible, vous pouvez juste la détruire.")
    .addField(":scroll: __**Description**__", "Pour cette maison...C'est la meilleur des meilleurs. Vous avez toutes les salles d'une maison classique du moyen-âge et en cadeau vous êtes proche d'un lac ! Mais attention, bien que le lac est sur votre ''domaine'', il n'est en rien privée et vous n'avez aucune sécurité. Si quelqu'un désirerait venir vous embêter...C'est tant pis pour vous.")
    .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/a/af/Forest_Home.png/revision/latest?cb=20140414053602")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Ancien temple" || message.content === préfix + "ancien temple"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#6aa895")
    .setTitle(":bank: Ancien temple")
    .addField(":moneybag: __**Prix**__","1000 pièces d'argent et 800 pièces d'argent")
    .addField(":money_with_wings: __**Revente**__","Impossible, vous pouvez juste la détruire.")
    .addField(":scroll: __**Description**__", "Un ancien temple en bonne êtat, ce dernier n'est pas habitable et contient que 3 salles toutes identitques les une que les autres...Si vous désirez aménager l'ancien temple le prix pourra augmenter de 500 à 1500 pièces d'argent...Vous l'aurez compris, si le prix est si haut, c'est car à la base ce temple est plus comme une zone de ''réunion'' à l'abris des regards. Un rocher ce situe à côté du temple, faisant couler un étrange liquide, il peut purifier une malediction, mais attention une fois utilisé le rocher n'en produira plus avant une semaine !")
    .setImage("https://data.whicdn.com/images/42566137/original.jpg")
     message.channel.sendMessage(help_embed);
}

if(message.content === préfix + "Petite grotte" || message.content === préfix + "petite grotte"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#496e63")
    .setTitle(":mountain: SOON")
    .addField(":moneybag: __**Prix**__","SOON")
    .addField(":money_with_wings: __**Revente**__","SOON")
    .addField(":scroll: __**Description**__", "SOON")
    .setImage("https://i.pinimg.com/originals/8b/08/8e/8b088efdb33d400f06fa0dd1e7dcac53.jpg")
     message.channel.sendMessage(help_embed);
}

