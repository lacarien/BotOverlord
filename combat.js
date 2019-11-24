// Soldat 

if(message.content === préfix + "SD attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 90)
    var result = new Discord.RichEmbed() 
    .setColor("#b30000")
    .addField("Vous tirez sur la cible", ":anger: 2")
    .setImage("https://motaen.com/upload/wallpapers/2018/06/29/12/33/57711/15302647775b35fcc9f33e77.01649764-preview.jpg")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tirez sur la cible avec dextérité", ":anger: 3")
    .setImage("https://media.giphy.com/media/AJ87qu5szu4ow/giphy.gif")
    message.channel.send(result);
    
}


if(message.content === préfix + "SD esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 90)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, vous pouvez remercier votre formation")
    .setImage("https://images-ext-1.discordapp.net/external/H15HuhCg50nk6Zh73bm7SbocdMYZWtgjsRyxvBruPFA/https/cdn.discordapp.com/attachments/641770012746448901/642423175891648512/military_China_weapon_soldier_anime_girls_war_spec_ops-1152388.jpgd.jpg?width=839&height=559")
    message.channel.send(result);
    
}


if(message.content === préfix + "SD blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 76)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("http://s1.picswalls.com/wallpapers/2014/09/15/awesome-soldier-wallpaper_102857429_215.jpg")
    message.channel.send(result);
    
}

// Investigateur

if(message.content === préfix + "IN attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 41)
    var result = new Discord.RichEmbed() 
    .setColor("#b22f2f")
    .addField("Vous infligez un coups avec l'aide de votre sabre", ":crossed_swords:  1")
    .setImage("https://wallpapercave.com/wp/wp3326462.jpg")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#b30000")
    .addField("Vous infligez un coups avec l'aide de votre sabre et effleuré un point non vital", ":crossed_swords: 2")
    .setImage("https://media.giphy.com/media/QsOHbA5Rn9DFHhPYfA/giphy.gif")
    message.channel.send(result);
    
}


if(message.content === préfix + "IN esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 95)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, vous pouvez remercier l'art des investigateurs")
    .setImage("https://wallup.net/wp-content/uploads/2016/04/10/327061-white_hair-original_characters-anime-anime_girls-sword.jpg")
    message.channel.send(result);
    
}


if(message.content === préfix + "IN blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 31)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("https://avvesione.files.wordpress.com/2014/04/noragami-12-rabou-yato-yukine-nora-gods-shinki-katana-sword_fight.jpg")
    message.channel.send(result);
    
}

// Puissance

if(message.content === préfix + "P attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 86)
    var result = new Discord.RichEmbed() 
    .setColor("#b30000")
    .addField("Vous donnez un coups sur votre adversaire ", ":eight_pointed_black_star: 2")
    .setImage("https://wallpaperaccess.com/full/523269.jpg")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous donnez un coups puissant sur votre adversaire, risquant de lui fissurer des os", ":eight_pointed_black_star: 3")
    .setImage("https://media.giphy.com/media/hrQreNh4AJD9lnJl7z/giphy.gif")
    message.channel.send(result);
    
}


if(message.content === préfix + "P esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 90)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, vous pouvez remercier votre supériorité")
    .setImage("https://images6.alphacoders.com/683/683456.jpg")
    message.channel.send(result);
    
}


if(message.content === préfix + "P blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 70)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("https://wallpapercave.com/wp/wp4380059.png")
    message.channel.send(result);
    
}

// Monstre

if(message.content === préfix + "M attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 31)
    var result = new Discord.RichEmbed() 
    .setColor("#b22f2f")
    .addField("Vous donnez un coups sur votre adversaire ", ":diamond_shape_with_a_dot_inside: 1")
    .setImage("https://vignette.wikia.nocookie.net/pathfinder/images/d/de/Fire_elemental_fight.jpg/revision/latest?cb=20090119183930")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#b30000")
    .addField("Vous donnez un coups puissant sur votre adversaire sur un point non vital", ":diamond_shape_with_a_dot_inside: 2")
    .setImage("https://wallup.net/wp-content/uploads/2016/01/5746-artwork-sword-fantasy_art-digital_art-warrior.jpg")
    message.channel.send(result);
    
}

if(message.content === préfix + "M blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 41)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("https://cdn.wallpapersafari.com/54/83/l3yn8V.jpg")
    message.channel.send(result);
    
}

// Speed

if(message.content === préfix + "S attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 31)
    var result = new Discord.RichEmbed() 
    .setColor("#b30000")
    .addField("Vous donnez un coups sur votre adversaire ", ":cyclone: 1")
    .setImage("https://rainbowwallpaper.info/Wallpapers-Idea/one-punch-man-sonic-wallpapers-high-definition-For-Wallpaper-Idea.png")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#b22f2f")
    .addField("Vous donnez des coups rapide à votre adversaires", ":cyclone: 2")
    .setImage("https://media.giphy.com/media/j6wx7RRxsJsvHR08oM/giphy.gif")
    message.channel.send(result);
    
}


if(message.content === préfix + "S esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 80)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, vous pouvez remercier votre supériorité")
    .setImage("https://media.giphy.com/media/UWKfHkOY0ez5P2A0tv/giphy.gif")
    message.channel.send(result);
    
}


if(message.content === préfix + "S blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 90)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("https://i.pinimg.com/736x/45/f8/33/45f833496e403095a052b0263ebb18a4.jpg")
    message.channel.send(result);
    
}

// Tank

if(message.content === préfix + "T attaque") {
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tirez sur la cible avec votre lourd équipement", ":anger: 3")
    .setImage("https://media.discordapp.net/attachments/642675299825483779/643036830979063828/dadadavavava.PNG")
    message.channel.send(result);
    
}
if(message.content === préfix + "T blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 25)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Votre armure réduit l'attaque", ":shield:  1")
    .setImage("https://cdn.vox-cdn.com/thumbor/wcS0_AE7iizzlhQhQPj7KeZWKjU=/0x0:3840x2160/1200x800/filters:focal(617x694:1231x1308)/cdn.vox-cdn.com/uploads/chorus_image/image/65318874/3184_17_2111_s20190626_016JT_JR.0.jpeg")
    message.channel.send(result);
    
}   

// Elite


if(message.content === préfix + "E attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 46)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous tirez sur la cible avec votre fusil", ":anger: 3")
    .setImage("https://i.pinimg.com/564x/5e/28/73/5e287384124bf39383281b6cd886af56.jpg")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#8b0000")
    .addField("Vous tirez sur la cible sur un point vital", ":anger: 4")
    .setImage("https://media1.tenor.com/images/4150a1bf9652eae0dd5854317a325ab0/tenor.gif?itemid=13740619")
    message.channel.send(result);
    
}

if(message.content === préfix + "E blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 51)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("https://cdn.wallpapersafari.com/46/11/0mtjKz.jpg")
    message.channel.send(result);
    
}

if(message.content === préfix + "E esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 90)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, pas étonnant quand on fait partie de l'élite")
    .setImage("https://i.pinimg.com/564x/68/45/e1/6845e1097bbac89610d5ee38964fefb5.jpg")
    message.channel.send(result);
    
}
// Fighter


if(message.content === préfix + "F attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 91)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous donnez un coups sur la cible", "3")
    .setImage("https://i.pinimg.com/originals/86/f7/a3/86f7a3bd41bfb8c99dd42352b0dfbf5d.jpg")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#8b0000")
    .addField("Vous donnez un coup de lame sur une partie vital", "4")
    .setImage("https://media.giphy.com/media/SSQh422HSUbkUXf8pf/giphy.gif")
    message.channel.send(result);
}

if(message.content === préfix + "F blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 26)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("https://medievalotaku.files.wordpress.com/2014/09/vlcsnap-2014-08-24-15h18m40s154.png?w=640&h=360")
    message.channel.send(result);
    
}


if(message.content === préfix + "F esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 95)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, vous pouvez remercier l'art des investigateurs")
    .setImage("https://wallup.net/wp-content/uploads/2016/04/10/327061-white_hair-original_characters-anime-anime_girls-sword.jpg")
    message.channel.send(result);
    
}

// Slayer


if(message.content === préfix + "SL attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 61)
    var result = new Discord.RichEmbed() 
    .setColor("#8b0000")
    .addField("Vous donnez un coups d'épée sur un point vital !", "4")
    .setImage("https://img4.goodfon.com/wallpaper/nbig/8/1e/japanese-power-monter-blade-manga-man-warrior-fight-armor-as.jpg")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#000000")
    .addField("Vous donnez un coups d'épée sur un point critique de la cible !", "5")
    .setImage("https://media.giphy.com/media/W6L04hmDMSOvnZSpLu/giphy.gif")
    message.channel.send(result);
    
}

if(message.content === préfix + "SL blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 81)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez l'attaque avec votre épée et lui renvoyez la moitié des dégats(non blocable)", ":shield:  1")
    .setImage("https://s3.narvii.com/image/x2xilfmynbsjseuw6zcv5oy4h7vjo5ev_hq.jpg")
    message.channel.send(result);

}



if(message.content === préfix + "SL esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 95)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, vous pouvez remercier l'art des Slayers")
    .setImage("https://cdn.discordapp.com/attachments/499161815549476864/643101853327818772/ezgif.com-gif-maker_4.gif")
    message.channel.send(result);
    
}

// Immortel


if(message.content === préfix + "C attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 61)
    var result = new Discord.RichEmbed() 
    .setColor("#b30000")
    .addField("Vous donnez un lourd coups sur votre adversaire", "2")
    .setImage("https://i.redd.it/hz55s4hm1fb21.png")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous donnez un lourd touchant une partie non vital", "3")
    .setImage("https://media.giphy.com/media/f8cFGVvfBFf3uycnsJ/giphy.gif")
    message.channel.send(result);
    
}

if(message.content === préfix + "C blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("http://vignette1.wikia.nocookie.net/onepunchman/images/e/e7/Sea_King_defends_against_Pri_Pri.png/revision/latest?cb=20151124211502")
    message.channel.send(result);
    
}

// Super speed

if(message.content === préfix + "SS attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 61)
    var result = new Discord.RichEmbed() 
    .setColor("#b30000")
    .addField("Vous donnez un coups rapide", "2")
    .setImage("https://cdn.discordapp.com/attachments/499161815549476864/643098158230143007/rIgaeLF.gif")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous donnez un coups ultra rapide", "3")
    .setImage("https://cdn.discordapp.com/attachments/499161815549476864/643098158230143007/rIgaeLF.gif")
    message.channel.send(result);
}

if(message.content === préfix + "SS attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 5)
    var result = new Discord.RichEmbed() 
    .setColor("#b30000")
    .addField("Vous donnez un coups rapide", "3")
    .addField("Puis encore un autre", "3")
    .setImage("https://media.giphy.com/media/YqLGpDc4CszfzVMp2A/giphy.gif")
    else if(result < 20)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous donnez un autre coups ultra rapide", "3")
    .setImage("https://media.giphy.com/media/YqLGpDc4CszfzVMp2A/giphy.gif")
    else if(result < 30)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous donnez un autre coups ultra rapide", "2")
    .setImage("https://cdn.discordapp.com/attachments/499161815549476864/643097438483382312/EnviousSpectacularGopher-size_restricted.gif")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("rien ne se passe")
    message.channel.send(result);
}

if(message.content === préfix + "SS blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 80)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("https://images5.alphacoders.com/668/thumb-350-668132.png")
    message.channel.send(result);
    
}


if(message.content === préfix + "SS esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 60)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, vous pouvez remercier votre supériorité")
    .setImage("https://media.giphy.com/media/eKsJD0kCCNW2iAOXYz/giphy.gif")
    message.channel.send(result);
    
}

// Destructeur

if(message.content === préfix + "D attaque") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 31)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous donnez un coups sur la cible", "3")
    .setImage("https://www.picclickimg.com/d/l400/pict/332779918531_/008-Goblin-Slayer-Fight-Monster-Hot.jpg")
    else if(result < 61)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .addField("Vous donnez un coups sur la cible tout en détruisant son blocage", "3")
    .setImage("https://i.ebayimg.com/images/g/PcQAAOSwjftdLVAR/s-l1600.jpg")   
    else if(result < 91)
    var result = new Discord.RichEmbed() 
    .setColor("#8b0000")
    .addField("Vous attaquez la cible sur un point vital", ":anger: 4")
    .setImage("https://www.picclickimg.com/d/l400/pict/332779918531_/008-Goblin-Slayer-Fight-Monster-Hot.jpg")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#8b0000")
    .addField("Vous attaquez la cible sur un point vital détruisant au passage son blocage", ":anger: 4")
    .setImage("https://i.ebayimg.com/images/g/PcQAAOSwjftdLVAR/s-l1600.jpg")
    message.channel.send(result);
    
}

if(message.content === préfix + "D Blocage") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 41)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous ne réussisez pas à bloquer l'attaque")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#0315ae")
    .addField("Vous bloquez le coups et réduisez les dégats", ":shield:  1")
    .setImage("https://qph.fs.quoracdn.net/main-qimg-723f7f14b9ecf6e904e951c99b737e2a")
    message.channel.send(result);
    
}


if(message.content === préfix + "D esquive") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 90)
    var result = new Discord.RichEmbed() 
    .setColor("#ff0000")
    .setAuthor("Vous loupez votre esquive")
    else if(result < 101)
    var result = new Discord.RichEmbed() 
    .setColor("#1fff00")
    .setAuthor("Vous esquivez l'attaque, vous pouvez remercier votre supériorité")
    .setImage("https://images6.alphacoders.com/683/683456.jpg")
    message.channel.send(result);
    
}











