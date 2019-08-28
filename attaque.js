//Attaque arbites

//Sergent

if(message.content === prefix + "S-ArbitesAttaque")
{

    if(roll >= 0 && roll <= 9)
    {
        let SArbites0D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Le sergent arbites vous tire dessus cependant il vous manque de peu")
        message.channel.send(SArbites0D)
    }else if(roll >= 10 && roll <= 19)
    {
        let SArbites1D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le sergent arbites vous tire dessus et vous inflige 1 point de dégat")
        message.channel.send(SArbites1D)
    }else if(roll >= 20 && roll <= 69)
    {
        let SArbites2D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le sergent arbites vous tire dessus et vous inflige 2 point de dégat")
        message.channel.send(SArbites2D)
    }else if(roll >= 70 && roll <= 100)
    {
        let SArbites3D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Le sergent arbites vous tire dessus et vous inflige 3 point de dégat")
        message.channel.send(SArbites3D)
    }
}

//Protector

if(message.content === prefix + "P-ArbitesAttaque")
{

    if(roll >= 0 && roll <= 19)
    {
        let PArbites0D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("L'arbites protector vous fonce dessus et essaye de vous donner un gros coup de matraque cependant il vous manque de peu")
        message.channel.send(PArbites0D)
    }else if(roll >= 20 && roll <= 29)
    {
        let PArbites1D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("L'arbites protector vous fonce dessus et vous donne un gros coup de matraque. Il vous inflige 1 point de dégat")
        message.channel.send(PArbites1D)
    }else if(roll >= 30 && roll <= 89)
    {
        let PArbites2D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("L'arbites protector vous fonce dessus et vous donne un gros coup de matraque. Il vous inflige 2 point de dégat")
        message.channel.send(PArbites2D)
    }else if(roll >= 90 && roll <= 100)
    {
        let PArbites3D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("L'arbites protector vous fonce dessus et vous donne un gros coup de matraque et touche un point critique. Il vous inflige 3 point de dégat")
        message.channel.send(PArbites3D)
    }
}

//Garde arbites

if(message.content === prefix + "G-ArbitesAttaque")
{

    if(roll >= 0 && roll <= 9)
    {
        let GArbites0D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Le garde arbites vous tire dessus avec son fusil disruptif, cependant il vous manque de peu ")
        message.channel.send(GArbites0D)
    }else if(roll >= 10 && roll <= 19)
    {
        let GArbites1D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le garde arbites vous tire dessus avec son fusil disruptif. Il vous inflige 1 point de dégat")
        message.channel.send(GArbites1D)
    }else if(roll >= 20 && roll <= 89)
    {
        let GArbites2D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le garde arbites vous tire dessus avec son fusil disruptif. Il vous inflige 2 point de dégat")
        message.channel.send(GArbites2D)
    }else if(roll >= 90 && roll <= 100)
    {
        let GArbites3D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Le garde arbites vous tire dessus avec son fusil disruptif et touche un point critique. Il vous inflige 3 point de dégat")
        message.channel.send(GArbites3D)
    }
}

//Chien arbites

if(message.content === prefix + "ChienArbitesAttaque")
{

    if(roll >= 0 && roll <= 39)
    {
        let ChienArbites0D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Le chien méchanique vous fonce dessus et essaye de vous mordre, cependant vous parvenez à l'esquiver de peu ")
        message.channel.send(ChienArbites0D)
    }else if(roll >= 40 && roll <= 100)
    {
        let ChienArbites1D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le chien méchanique vous fonce dessus et vous mords l'un de vos membres. Il vous inflige 1 point de dégat")
        message.channel.send(ChienArbites1D)
    }
}

//Armé impérial

//Garde impérial

if(message.content === prefix + "G-ImperialAttaque")
{

    if(roll >= 0 && roll <= 9)
    {
        let GardeImpérial0D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Le garde impérial vous tire dessus avec son fusil laser, cependant il vous manque de peu ")
        message.channel.send(GardeImpérial0D)
    }else if(roll >= 10 && roll <= 49)
    {
        let GardeImpérial1D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le garde impérial vous tire dessus avec son fusil laser. Il vous inflige 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610582476838141996/9d3148faa44619e4ef287e7149e5a54a.jpg")
        message.channel.send(GardeImpérial1D)
    }else if(roll >= 50 && roll <= 100)
    {
        let GardeImpérial2D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Le garde impérial vous tire dessus avec son fusil laser. Il vous inflige 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610581749646360581/1e3ea71eb48b8c44844699aeda3049c1--stormtroopers-warhammer-.jpg")
        message.channel.send(GardeImpérial2D)
    }
}


//Officier impérial 

if(message.content === prefix + "O-ImperialAttaque")
{

    if(roll >= 0 && roll <= 9)
    {
        let OfficierImpérial0D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("L'officier impérial vous tire dessus avec son pistolet laser, cependant il vous manque de peu ")
        message.channel.send(OfficierImpérial0D)
    }else if(roll >= 10 && roll <= 39)
    {
        let OfficierImpérial2D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("L'officier impérial fonce sur vous et tire une salve avec son pistolet laser. Il vous inflige 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610798080089915422/profanus40k_tope_guardia_imperial.jpg")
        message.channel.send(OfficierImpérial2D)
    }else if(roll >= 40 && roll <= 89)
    {
        let OfficierImpérial3D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("L'officier impérial effectue un mouvement de précision avec son épée et vise un point vital. Il vous inflige 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610798937929940992/e1caa61d1b372783a7ad41f54e091c30.jpg")
        message.channel.send(OfficierImpérial3D)
    }else if(roll >= 90 && roll <= 100)
    {
        let OfficierImpérial4D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("L'officier impérial vous assène un coup d'épée puissant et précis et touche un point critique. Il vous inflige 4 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610797410192588828/56ff1345ff7d0fd6a65ba48c5cbcae02.jpg")
        message.channel.send(OfficierImpérial4D)
    }
}

//Amiral sophie

if(message.content === prefix + "A-SophieAttaque")
{

    if(roll >= 0 && roll <= 19)
    {
        let AmiralSophie2D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("L'amiral sophie vous canarde avec son pistolet à répétition laser afin de vous clouer sur place. Elle vous inflige 2 point de dégats")
        message.channel.send(AmiralSophie2D)
    }else if(roll >= 20 && roll <= 69)
    {
        let AmiralSophie3D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("L'amiral sophie vous fonce dessus afin de vous asséner un puissant coup de son épée énergétique. Elle vous inflige 3 point de dégat")
        message.channel.send(AmiralSophie3D)
    }else if(roll >= 70 && roll <= 100)
    {
        let AmiralSophie4D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("L'amiral sophie vous assène un puissant coup de son épée énergétique et touche un point vitale. Elle vous inflige 4 point de dégat")
        message.channel.send(AmiralSophie4D)
    }
}

//Armé androide

//Garde androide

if(message.content === prefix + "G-AndroideAttaque")
{

    if(roll >= 0 && roll <= 9)
    {
        let GardeAndroide0D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Le K-tron vous tire une rafale du fusil énergétique cependant il vous loupe de peu")
        message.channel.send(GardeAndroide0D)
    }else if(roll >= 10 && roll <= 69)
    {
        let GardeAndroide2D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le K-tron vous tire une rafale du fusil énergétique, il vous inflige 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611184813755334656/ben-mauro-v-ktron-newscene2-a2bbbbadwdaw-bm.jpg")
        message.channel.send(GardeAndroide2D)
    }else if(roll >= 70 && roll <= 100)
    {
        let GardeAndroide3D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Le K-tron vous tire une rafale du fusil énergétique, il vous inflige 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611184813755334656/ben-mauro-v-ktron-newscene2-a2bbbbadwdaw-bm.jpg")
        message.channel.send(GardeAndroide3D)
    }
}

if(message.content === prefix + "O-AndroideAttaque")
{

    if(roll >= 0 && roll <= 9)
    {
        let OfficierAndroide0D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("L'officer androïde vous tire une rafale du fusil énergétique lourd cependant il vous loupe de peu")
        message.channel.send(OfficierAndroide0D)
    }else if(roll >= 10 && roll <= 59)
    {
        let OfficierAndroide2D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("L'officer androïde vous tire une rafale du fusil énergétique lourd, il vous inflige 2 point de dégat")
        message.channel.send(OfficierAndroide2D)
    }else if(roll >= 60 && roll <= 100)
    {
        let OfficierAndroide3D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("L'officer androïde vous tire une rafale du fusil énergétique lourd, il vous inflige 3 point de dégat")
        message.channel.send(OfficierAndroide3D)
    }
}

//Istaris 
if(message.content === prefix + "G-IstarisAttaque")
{

    if(roll >= 0 && roll <= 9)
    {
        let GardeIstaris1D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Le garde Istaris vous tire dessus avec son fusil et vous inflige 1 point de dégat")
        message.channel.send(GardeIstaris1D)
    }else if(roll >= 10 && roll <= 79)
    {
        let GardeIstaris2D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le garde Istaris vous tire dessus en visant un point vital qu'il loupe de peu. Il vous inflige 2 point de dégat")
        message.channel.send(GardeIstaris2D)
    }else if(roll >= 80 && roll <= 100)
    {
        let GardeIstaris3D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Le garde Istaris vous tire dessus et vise un point vital qu'il touche. Il vous inflige 3 point de dégat")
        message.channel.send(GardeIstaris3D)
    }
}

if(message.content === prefix + "O-IstarisAttaque")
{

    if(roll >= 0 && roll <= 59)
    {
        let OfficierIstaris2D = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("L'officier Istaris vous fonce dessus avant de vous infliger un coup de lance laser. Cela vous inflige 2 point de dégats")
        message.channel.send(OfficierIstaris2D)
    }else if(roll >= 60 && roll <= 100)
    {
        let OfficierIstaris3D = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("L'officier Istaris vous fonce dessus et vous assène un puissant coup de lance qui touche un point critique vous perdez 3 point de dégats")
        message.channel.send(OfficierIstaris3D)
    }
}

//Monstre Citrus

if(message.content === prefix +"M-MonstreCitrus")
{
    if(roll >= 0 && roll <= 29)
    {
        let MorsureCitrus = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Le monstre fonce sur vous et tente de vous mordre la jugulaire, cependant elle vous manque de peu")
        message.channel.send(MorsureCitrus)
    }else if(roll >= 30 && roll <= 49)
    {
        let MorsureCitrus1 = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le monstre fonce sur vous et vous mord très viollement l'un de vos membres. Vous subissez 1 point de dégat")
        message.channel.send(MorsureCitrus1)
    }else if(roll >= 50 && roll <= 89)
    {
        let MorsureCitrus2 = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le monstre fonce sur vous et vous mord très viollement l'un de vos membres. Vous subissez 2 point de dégat")
        message.channel.send(MorsureCitrus2)
    }else if(roll >= 90 && roll <= 100)
    {
        let MorsureCitrus3 = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Le monstre fonce sur vous et vous mord très viollement l'un de vos membres. Vous subissez 3 point de dégat")
        message.channel.send(MorsureCitrus3)
    }
}

//Griffe 
if(message.content === prefix +"G-MonstreCitrus")
{
    if(roll >= 0 && roll <= 19)
    {
        let MorsureCitrus = new Discord.RichEmbed()
            .setColor("#00bf0d")
            .setAuthor("Le monstre fonce sur vous et tente de vous infligez un gros coup de griffe, cependant elle vous manque de peu")
        message.channel.send(MorsureCitrus)
    }else if(roll >= 20 && roll <= 79)
    {
        let MorsureCitrus1 = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Le monstre fonce sur vous et vous donne un gros coup de griffe. Vous subissez 2 point de dégat")
        message.channel.send(MorsureCitrus1)
    }else if(roll >= 80 && roll <= 100)
    {
        let MorsureCitrus2 = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Le monstre fonce sur vous et vous donne un puissant coup de griffe vous infligeant un coup critique. Vous subissez 3 point de dégat")
        message.channel.send(MorsureCitrus2)
    }
}






//Attaque arme distance

if(message.content === préfix + "Pistolet MK-1"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 30)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Vous ratez votre tire")
    .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615876776228290560/22bbade48e2ffa2c50968c635445b6a1.gif")
    else if (result < 60)
    var y = new Discord.RichEmbed()
    .setColor("#d98880") 
    .setTitle("Votre tire touche un point non vital de la cible, cela retire 1 point de santé")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615876762600996879/giphy.gif")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615876762600996879/giphy.gif")
    .setTitle("Votre tire touche un point précis de la cible, cela retire 2 point de santé")

    message.channel.sendMessage(y);
}

if(message.content === préfix + "Pistolet MK-2"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Vous ratez votre tire")
    .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615876776228290560/22bbade48e2ffa2c50968c635445b6a1.gif")
    else if (result < 40)
    var y = new Discord.RichEmbed()
    .setColor("#d98880") 
    .setTitle("Votre tire touche un point non vital de la cible, cela retire 1 point de santé")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615876762600996879/giphy.gif")
    else if (result < 90)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615876762600996879/giphy.gif")
    .setTitle("Votre tire touche un point précis de la cible, cela retire 2 point de santé")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615876762600996879/giphy.gif")
    .setTitle("Votre tire touche un point précis de la cible, cela retire 3 point de santé")

    message.channel.sendMessage(y);
}


if(message.content === préfix + "Pistolet MK-3"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Vous ratez votre tire")
    .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615876776228290560/22bbade48e2ffa2c50968c635445b6a1.gif")
    else if (result < 40)
    var y = new Discord.RichEmbed()
    .setColor("#d98880") 
    .setTitle("Votre tire touche un point non vital de la cible, cela retire 1 point de santé")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615878528914685994/ddAklywk2Z9qBONLhrMv.png?width=994&height=560")
    else if (result < 80)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615878528914685994/ddAklywk2Z9qBONLhrMv.png?width=994&height=560")
    .setTitle("Votre tire touche un point précis de la cible, cela retire 2 point de santé")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615878528914685994/ddAklywk2Z9qBONLhrMv.png?width=994&height=560")
    .setTitle("Votre tire touche un vital de la cible, cela retire 3 point de santé")

    message.channel.sendMessage(y);
}




if(message.content === préfix + "Fusil Gauss MK-1"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Vous ratez votre tire")
    .setImage("https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9d492c49527253.58e13f81f10cf.jpg")
    else if (result < 60)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setTitle("Votre tire touche un point non vital de la cible, cela retire 2 point de santé")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615881943757750272/Free-Download-Game-Halo-5-Wallpaper-HD.png?width=994&height=559")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615881943757750272/Free-Download-Game-Halo-5-Wallpaper-HD.png?width=994&height=559")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 3 point de santé")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Fusil Gauss MK-2"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 10)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Vous ratez votre tire")
    .setImage("https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9d492c49527253.58e13f81f10cf.jpg")
    else if (result < 40)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setTitle("Votre tire touche un point non vital de la cible, cela retire 2 point de santé")
    .setImage("https://i.pinimg.com/originals/3d/8c/9d/3d8c9d68c92c9fa81b795fe73c07f6e6.png")
    else if (result < 80)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .setImage("https://i.pinimg.com/originals/3d/8c/9d/3d8c9d68c92c9fa81b795fe73c07f6e6.png")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 3 point de santé")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .setImage("https://i.pinimg.com/originals/3d/8c/9d/3d8c9d68c92c9fa81b795fe73c07f6e6.png")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 4 point de santé")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Fusil Gauss MK-3"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 10)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Vous ratez votre tire")
    .setImage("https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9d492c49527253.58e13f81f10cf.jpg")
    else if (result < 50)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .setImage("https://i.pinimg.com/originals/3d/8c/9d/3d8c9d68c92c9fa81b795fe73c07f6e6.png")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 3 point de santé")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .setImage("https://i.pinimg.com/originals/3d/8c/9d/3d8c9d68c92c9fa81b795fe73c07f6e6.png")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 4 point de santé")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Fusil Gauss MK-4"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if (result < 30)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .setImage("https://i.pinimg.com/originals/3d/8c/9d/3d8c9d68c92c9fa81b795fe73c07f6e6.png")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 3 point de santé")
    else if (result < 90)
    var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .setImage("https://i.pinimg.com/originals/3d/8c/9d/3d8c9d68c92c9fa81b795fe73c07f6e6.png")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 4 point de santé")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .setImage("https://i.pinimg.com/originals/c8/61/e2/c861e242a1cdc163f9b64bda453ab09b.jpg")
    .setTitle("Votre tire fait de lourd dégats, cela retire 5 point de santé")
    message.channel.sendMessage(y);
}






if(message.content === prefix +"Fusil laser MK-1")
{
    if(roll >= 0 && roll <= 9)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous tirez avec votre fusil laser cependant votre arme vous glisse des mains et vous manquez de peu,on va dire.., la cible ")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615930780450947098/ezgif-1-28ef5f81cc2a.gif")
        message.channel.send(Attaque)
    }else if(roll >= 10 && roll <= 19)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous tirez avec votre fusil laser et vous touchez votre cible.")
            .setDescription("***Vous infligez 1 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878558048452608/ivor-tosic-by-ivor-tosic-futuristic-sniper-assassin-sniper-c.jpg")
        message.channel.send(Attaque)
    }else if(roll >= 20 && roll <= 89)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous visez votre adversaire avec précision avant de lui tirez dessus avec fusil votre laser.")
            .setDescription("***Vous infligez 2 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878511231762443/crysis-2-le-soldat-avec-larme-science-fiction-soldat-tir-191703.jpg")
        message.channel.send(Attaque)
    }else if(roll >= 90 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous tirez des rafales de laser sur votre adversaire avec une précision sans égal")
            .setDescription("***Vous infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615618120505229335/ezgif-1-975104d0c7b0.gif")
        message.channel.send(Attaque)
    }
}
//Fusil laser mk2
if(message.content === prefix +"Fusil laser MK-2")
{	
    if(roll >= 0 && roll <= 9)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous tirez avec votre fusil laser cependant votre arme vous glisse des mains et vous manquez de peu,on va dire.., la cible ")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615930780450947098/ezgif-1-28ef5f81cc2a.gif")
        message.channel.send(Attaque)
    }else if(roll >= 10 && roll <= 19)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous tirez avec votre fusil laser et vous touchez votre cible.")
            .setDescription("***Vous infligez 1 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878558048452608/ivor-tosic-by-ivor-tosic-futuristic-sniper-assassin-sniper-c.jpg")
        message.channel.send(Attaque)
    }else if(roll >= 20 && roll <= 69)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous visez votre adversaire avec précision avant de lui tirez dessus avec fusil votre laser.")
            .setDescription("***Vous infligez 2 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878511231762443/crysis-2-le-soldat-avec-larme-science-fiction-soldat-tir-191703.jpg")
        message.channel.send(Attaque)
    }else if(roll >= 70 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous tirez des rafales de laser sur votre adversaire avec une précision sans égal")
            .setDescription("***Vous infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615618120505229335/ezgif-1-975104d0c7b0.gif")
        message.channel.send(Attaque)
    }
}

//Mk 3 

if(message.content === prefix +"Fusil laser MK-3")
{
    if(roll >= 0 && roll <= 9)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous tirez avec votre fusil laser cependant votre arme vous glisse des mains et vous manquez de peu,on va dire.., la cible ")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615930780450947098/ezgif-1-28ef5f81cc2a.gif")
        message.channel.send(Attaque)
    }else if(roll >= 10 && roll <= 59)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous visez votre adversaire avec précision avant de lui tirez dessus avec fusil votre laser.")
            .setDescription("***Vous infligez 2 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878511231762443/crysis-2-le-soldat-avec-larme-science-fiction-soldat-tir-191703.jpg")
        message.channel.send(Attaque)
    }else if(roll >= 60 && roll <= 89)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous tirez des rafales de laser sur votre adversaire avec une précision sans égal")
            .setDescription("***Vous infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615618120505229335/ezgif-1-975104d0c7b0.gif")
        message.channel.send(Attaque)
    }else if(roll >= 90 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous tirez avec votre fusil laser et vous touchez votre cible.")
            .setDescription("***Vous infligez 4 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878644853899274/futuristic-artwork-soldier-science-fiction-futuristic-armor-Marksman-shooting-games-screenshot-mecha.jpg")
        message.channel.send(Attaque)
    }
}


//mk 4 

if(message.content === prefix +"Fusil laser MK-4")
{
    if(roll >= 0 && roll <= 9)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous tirez avec votre fusil laser cependant votre arme vous glisse des mains et vous manquez de peu,on va dire.., la cible ")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615930780450947098/ezgif-1-28ef5f81cc2a.gif")
        message.channel.send(Attaque)
    }else if(roll >= 10 && roll <= 29)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous visez votre adversaire avec précision avant de lui tirez dessus avec fusil votre laser.")
            .setDescription("***Vous infligez 2 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878511231762443/crysis-2-le-soldat-avec-larme-science-fiction-soldat-tir-191703.jpg")
         message.channel.send(Attaque)
    }else if(roll >= 30 && roll <= 79)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tirez des rafales de laser sur votre adversaire avec une précision sans égal")
            .setDescription("***Vous infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615618120505229335/ezgif-1-975104d0c7b0.gif")
        message.channel.send(Attaque)
    }else if(roll >= 80 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous tirez avec votre fusil laser et vous touchez votre cible.")
            .setDescription("***Vous infligez 4 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878644853899274/futuristic-artwork-soldier-science-fiction-futuristic-armor-Marksman-shooting-games-screenshot-mecha.jpg")
        message.channel.send(Attaque)
    }
}

//Fusil plasma

if(message.content === prefix +"Fusil plasma MK-1")
{
    if(roll >= 0 && roll <= 29)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous tirez avec votre fusil plasma cependant le recul de l'arme vous fait manquer de peu la cible... ")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615930780450947098/ezgif-1-28ef5f81cc2a.gif")
        message.channel.send(Attaque)
    }else if(roll >= 30 && roll <= 89)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous tirez avec votre fusil plasma et vous touchez de plein fouet votre cible.")
            .setDescription("***Vous infligez 2 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878926652145674/gif1.gif")
        message.channel.send(Attaque)
    }else if(roll >= 90 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tirez avec votre fusil plasma et vous touchez un point vital.")
            .setDescription("***Vous infligez 3 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615879079521943554/gif69gbqj.gif")
        message.channel.send(Attaque)
    }
}

//mk2

if(message.content === prefix +"Fusil plasma MK-2")
{
    if(roll >= 0 && roll <= 29)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous tirez avec votre fusil plasma cependant le recul de l'arme vous fait manquer de peu la cible... ")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615930780450947098/ezgif-1-28ef5f81cc2a.gif")
        message.channel.send(Attaque)
    }else if(roll >= 30 && roll <= 49)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous tirez avec votre fusil plasma et vous touchez de plein fouet votre cible.")
            .setDescription("***Vous infligez 2 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878926652145674/gif1.gif")
        message.channel.send(Attaque)
    }else if(roll >= 50 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tirez avec votre fusil plasma et vous touchez un point vital.")
            .setDescription("***Vous infligez 3 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615879079521943554/gif69gbqj.gif")
        message.channel.send(Attaque)
    }
}

if(message.content === prefix +"Fusil plasma MK-3")
{
    if(roll >= 0 && roll <= 29)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous tirez avec votre fusil plasma cependant le recul de l'arme vous fait manquer de peu la cible... ")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615930780450947098/ezgif-1-28ef5f81cc2a.gif")
        message.channel.send(Attaque)
    }else if(roll >= 30 && roll <= 39)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous tirez avec votre fusil plasma et vous touchez de plein fouet votre cible.")
            .setDescription("***Vous infligez 2 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878926652145674/gif1.gif")
        message.channel.send(Attaque)
    }else if(roll >= 40 && roll <= 79)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tirez avec votre fusil plasma et vous touchez un point vital.")
            .setDescription("***Vous infligez 3 dégat***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615879079521943554/gif69gbqj.gif")
        message.channel.send(Attaque)
    }else if(roll >= 80 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous tirez un coup extrêment précis qui touche un point critique.")
            .setDescription("***Vous infligez 4 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878644853899274/futuristic-artwork-soldier-science-fiction-futuristic-armor-Marksman-shooting-games-screenshot-mecha.jpg")
        message.channel.send(Attaque)
    }
}

//mk4

if(message.content === prefix +"Fusil plasma MK-4")
{
    if(roll >= 0 && roll <= 29)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous tirez avec votre fusil plasma cependant le recul de l'arme vous fait manquer de peu la cible... ")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/615930780450947098/ezgif-1-28ef5f81cc2a.gif")
        message.channel.send(Attaque)
    }else if(roll >= 30 && roll <= 69)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tirez avec votre fusil plasma et vous touchez de plein fouet votre cible.")
            .setDescription("***Vous infligez 3 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878926652145674/gif1.gif")
        message.channel.send(Attaque)
    }else if(roll >= 70 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous tirez un coup extrêment précis qui touche un point critique.")
            .setDescription("***Vous infligez 4 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615878644853899274/futuristic-artwork-soldier-science-fiction-futuristic-armor-Marksman-shooting-games-screenshot-mecha.jpg")
        message.channel.send(Attaque)
    }
}


//Pompe 

if(message.content === prefix + "Fusil disruptif MK-1")
{

    if(roll >= 0 && roll <= 49)
    {
        let FDlaserMK10D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez votre cible en tirant avec votre arme, comment c'est possible à cette distance ...")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615939511792173071/TautWearyEsok-size_restricted.gif")
        message.channel.send(FDlaserMK10D)
    }else if(roll >= 50 && roll <= 59)
    {
        let FDlaserMK12D = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous foncez sur l'adversaire toute en lui tirant un coup de fusil")
            .setDescription("***vous lui infligez 2 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875161694142484/ezgif-1-8ae5406111a5.gif")
        message.channel.send(FDlaserMK12D)
    }else if(roll >= 60 && roll <= 100)
    {
        let FDlaserMK13D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous foncez sur l'adversaire toute en lui tirant un coup de fusil qui touche un point vital")
            .setDescription("***Vous infligez 3 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875229843193876/ezgif-1-da3b6310d60b.gif")
        message.channel.send(FDlaserMK13D)
    }
}

if(message.content === prefix + "Fusil disruptif MK-2")
{

    if(roll >= 0 && roll <= 49)
    {
        let FDlaserMK20D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez votre cible en tirant avec votre arme, comment c'est possible à cette distance . . .")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615939511792173071/TautWearyEsok-size_restricted.gif")
        message.channel.send(FDlaserMK20D)
    }else if(roll >= 50 && roll <= 89)
    {
        let FDlaserMK23D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous foncez sur l'adversaire toute en lui tirant un coup de fusil")
            .setDescription("***vous lui infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875161694142484/ezgif-1-8ae5406111a5.gif")
        message.channel.send(FDlaserMK23D)
    }else if(roll >= 90 && roll <= 100)
    {
        let FDlaserMK24D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous foncez sur l'adversaire toute en lui tirant un coup de fusil qui touche un point vital")
            .setDescription("***Vous infligez 3 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875229843193876/ezgif-1-da3b6310d60b.gif")
        message.channel.send(FDlaserMK24D)
    }
}

if(message.content === prefix + "Fusil disruptif MK-3")
{

    if(roll >= 0 && roll <= 39)
    {
        let FDlaserMK30D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez votre cible en tirant avec votre arme, comment c'est possible à cette distance . . .")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615939511792173071/TautWearyEsok-size_restricted.gif")
        message.channel.send(FDlaserMK30D)
    }else if(roll >= 40 && roll <= 89)
    {
        let FDlaserMK33D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous foncez sur l'adversaire toute en lui tirant un coup de fusil")
            .setDescription("***vous lui infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875161694142484/ezgif-1-8ae5406111a5.gif")
        message.channel.send(FDlaserMK33D)
    }else if(roll >= 90 && roll <= 100)
    {
        let FDlaserMK34D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous foncez sur l'adversaire toute en lui tirant un coup de fusil qui touche un point vital")
            .setDescription("***Vous infligez 3 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875229843193876/ezgif-1-da3b6310d60b.gif")
        message.channel.send(FDlaserMK34D)
    }
}

if(message.content === prefix + "Fusil disruptif MK-4")
{

    if(roll >= 0 && roll <= 39)
    {
        let FDlaserMK40D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez votre cible en tirant avec votre arme, comment c'est possible à cette distance . . .")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615939511792173071/TautWearyEsok-size_restricted.gif")
        message.channel.send(FDlaserMK40D)
    }else if(roll >= 40 && roll <= 69)
    {
        let FDlaserMK43D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous foncez sur l'adversaire toute en lui tirant un coup de fusil")
            .setDescription("***vous lui infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875161694142484/ezgif-1-8ae5406111a5.gif")
        message.channel.send(FDlaserMK43D)
    }else if(roll >= 70 && roll <= 89)
    {
        let FDlaserMK44D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous tirez avec votre arme et vous inflige 4 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875229843193876/ezgif-1-da3b6310d60b.gif")
        message.channel.send(FDlaserMK44D)
    }else if(roll >= 90 && roll <= 100)
    {
        let FDlaserMK45D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous foncez sur l'adversaire toute en lui tirant un coup de fusil qui touche un point vital")
            .setDescription("***Vous infligez 3 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615875229843193876/ezgif-1-da3b6310d60b.gif")
        message.channel.send(FDlaserMK45D)
    }
}

//Arme corps à corps

//Lance

if(message.content === prefix + "Lance MK-1")
{

    if(roll >= 0 && roll <= 39)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance cependant... vous manquez votre cible")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947042560278561/gil.gif")
        message.channel.send(Attaque)
    }else if(roll >= 40 && roll <= 49)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance")
            .setDescription("***vous lui infligez 2 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947182557757465/1505993867_original.gif")
        message.channel.send(Attaque)
    }else if(roll >= 50 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance qui touche un point vital")
            .setDescription("***Vous infligez 3 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947399210205184/1432832600_d2c.gif")
        message.channel.send(Attaque)
    }
}

//Lance mk2

if(message.content === prefix + "Lance MK-2")
{

    if(roll >= 0 && roll <= 39)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance cependant... vous manquez votre cible")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947042560278561/gil.gif")
        message.channel.send(Attaque)
    }else if(roll >= 40 && roll <= 69)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance")
            .setDescription("***vous lui infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947399210205184/1432832600_d2c.gif")
        message.channel.send(Attaque)
    }else if(roll >= 50 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance qui touche un point vital")
            .setDescription("***Vous infligez 4 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947406705688588/JubilantColorfulBluegill-size_restricted.gif")
        message.channel.send(Attaque)
    }
}

//Lance mk3 

if(message.content === prefix + "Lance MK-3")
{

    if(roll >= 0 && roll <= 39)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance cependant... vous manquez votre cible")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947042560278561/gil.gif")
        message.channel.send(Attaque)
    }else if(roll >= 40 && roll <= 59)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance")
            .setDescription("***vous lui infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947399210205184/1432832600_d2c.gif")
        message.channel.send(Attaque)
    }else if(roll >= 60 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance qui touche un point vital")
            .setDescription("***Vous infligez 4 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947406705688588/JubilantColorfulBluegill-size_restricted.gif")
        message.channel.send(Attaque)
    }
}

//mk4

if(message.content === prefix + "Lance MK-4")
{

    if(roll >= 0 && roll <= 29)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance cependant... vous manquez votre cible")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947042560278561/gil.gif")
        message.channel.send(Attaque)
    }else if(roll >= 30 && roll <= 49)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance")
            .setDescription("***vous lui infligez 3 dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947399210205184/1432832600_d2c.gif")
        message.channel.send(Attaque)
    }else if(roll >= 50 && roll <= 89)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance qui touche un point vital")
            .setDescription("***Vous infligez 4 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947406705688588/JubilantColorfulBluegill-size_restricted.gif")
        message.channel.send(Attaque)
    }else if(roll >= 90 && roll <= 100)
    {
        let Attaque = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous foncez sur l'adversaire afin de lui infliger un coup de lance qui touche un point vital")
            .setDescription("***Vous infligez 5 point de dégats***")
            .setImage("https://cdn.discordapp.com/attachments/562261092697636894/615947406705688588/JubilantColorfulBluegill-size_restricted.gif")
        message.channel.send(Attaque)
    }
}

/// Vielle attaque 


if(message.content === préfix + "Grenade"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 20)
    var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Vous lancez une grenade qui explose proche de votre cible, mais pas assez près pour la blesser, néanmoins elle pourra ressentir le grand souffle de l'explosion")
    else if (result < 30)
    var y = new Discord.RichEmbed()
    .addField("La grenade explose proche de votre cible, le souffle de l'explosion ainsi que la chaleur qu'elle dégage l'affecte", "Cela retire 1 point de santé")
    .setColor("#d98880")
    .setImage("https://i.pinimg.com/originals/68/34/84/68348466b7c0cdcd1c5ac628314a4020.gif")
    else if (result < 80)
         var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .addField("La grenade explose à l'emplacement ciblé. Elle blesse l'objectif sans vraiment atteindre à ses points vitaux", "Cela lui retire 2 points de santé")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/603995716146298881/explode.png")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .addField("La grenade explose à seulement quelques pas de la cible, l'explosion a grandement blessé l'objectif !", "Cela lui retire 3 points de santé")
    .setImage("https://media1.tenor.com/images/0e939fe3de17e3d87395308991aad285/tenor.gif?itemid=8319886")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Assassinat"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 50)
       var y = new Discord.RichEmbed()
       .setColor("#f9ebea")
       .setTitle("Vous vous approchez de la personne endormie mais....La personne se réveille subitement se tournant vers vous, un coups de chance ou bien le destin ?")
       else if (result < 70)
       var y = new Discord.RichEmbed()
       .addField("Vous tentez votre assassinat sur la cible en question venant lui infliger de lourd dégat la faisant se réveiller dans une grande douleur", "Cela retire 3 point de santé")
       .setColor("#d98880")
       .setImage("https://www.wallpaperflare.com/static/629/229/292/fantasy-art-assassins-fantasy-art-wallpaper.jpg")
    else if (result < 90)
         var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .addField("Vous tentez d'assassiner la cible en question mais...L'assassinat n'est pas parfait, vous touchez un point vital qui fera probablement réveiller la cible dans d'atroce souffrance", "Cela lui retire 4 points de santé")
    .setImage("https://vignette.wikia.nocookie.net/powerlisting/images/7/7a/The_Neutral.jpg/revision/latest?cb=20170623221129")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .addField("Vous avez vue quelque chose ? Bizarre...Peut-être mon halucination", "Votre cible perd 5 points de santé")
    .setImage("https://s1.1zoom.me/big3/301/DOTA_2_Phantom_assassin_499023.jpg")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Explosion"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 20)
       var y = new Discord.RichEmbed()
       .addField("L'explosion n'a pas un grand impact", "Cela retire 1 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/604001087397167104/image0.jpg")
       .setColor("#d98880") 
       else if (result < 40)
       var y = new Discord.RichEmbed()
       .addField("L'explosion a touché la cible", "Cela retire 2 point de santé")
       .setColor("#d98880")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/603998799001682008/image0.jpg?width=606&height=559")
    else if (result < 70)
         var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .addField("L'explosion a fait de très lourd dégats !", "Cela lui retire 3 points de santé")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/603998799001682008/image0.jpg?width=606&height=559")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .addField("l'explosion a touché des points vitaux...", "Votre cible perd 4 points de santé")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/604004711372292108/image0.gif")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Magie secondaire glace"){
     var result = Math.floor((Math.random() * 100) + 1);
       if(result < 90)
       var y = new Discord.RichEmbed()
       .addField("Vous venez à lancer un sort de basse classe de glace", "Cela retire 1 point de santé")
       .setImage("https://i.pinimg.com/originals/2a/74/4b/2a744b3ae6e2022896b1318e86d88654.jpg")
       .setColor("#d98880") 
         else if(result < 101)
       var y = new Discord.RichEmbed()
     .addField("Vous venez à lancer un sort de basse classe de glace qui l'empeche d'utiliser son arme principale durant 2tours (ou bien 10min)", "Cela retire 1 point de santé")
       .setImage("https://i.pinimg.com/originals/2a/74/4b/2a744b3ae6e2022896b1318e86d88654.jpg")
       .setColor("#d98880") 
              message.channel.sendMessage(y);
}

if(message.content === préfix + "Magie secondaire foudre"){
     var result = Math.floor((Math.random() * 100) + 1);
       if(result < 95)
       var y = new Discord.RichEmbed()
       .addField("Vous venez à lancer un sort de basse classe de foudre", "Cela retire 1 point de santé")
       .setImage("https://i.pinimg.com/originals/7f/ef/b3/7fefb335896250cdcb8148d0bdfe80af.jpg")
       .setColor("#d98880") 
         else if(result < 101)
       var y = new Discord.RichEmbed()
     .addField("Vous venez à lancer un sort de basse classe de foudre qui l'empeche d'attaquer durant 1tours (ou bien 5min)", "Cela retire 1 point de santé")
       .setImage("https://i.pinimg.com/originals/7f/ef/b3/7fefb335896250cdcb8148d0bdfe80af.jpg")
       .setColor("#d98880") 
              message.channel.sendMessage(y);
}

if(message.content === préfix + "Magie secondaire feux"){
     var result = Math.floor((Math.random() * 100) + 1);
       if(result < 90)
       var y = new Discord.RichEmbed()
       .addField("Vous venez à lancer un sort de basse classe de feux", "Cela retire 1 point de santé")
       .setImage("http://gwenfantastic.g.w.pic.centerblog.net/a5im5xs7.jpg")
       .setColor("#d98880") 
         else if(result < 101)
       var y = new Discord.RichEmbed()
     .addField("Vous venez à lancer un sort de basse classe de feux qui brule la cible", "Cela retire 2 point de santé")
       .setImage("http://gwenfantastic.g.w.pic.centerblog.net/a5im5xs7.jpg")
       .setColor("#d98880") 
              message.channel.sendMessage(y);
}

  if(message.content === préfix + "Magie secondaire poison"){
     var result = Math.floor((Math.random() * 100) + 1);
       if(result < 90)
       var y = new Discord.RichEmbed()
       .addField("Vous venez à lancer un sort de basse classe de poison", "Cela retire 1 point de santé")
       .setImage("https://sites.google.com/site/fagewiki/_/rsrc/1451614313413/specializations/mage-specializations/blood-mage/Blood%20Mage.jpg?height=400&width=282")
       .setColor("#d98880") 
         else if(result < 101)
       var y = new Discord.RichEmbed()
     .addField("Vous venez à lancer un sort de basse classe de poison. Si il est en blessure grave, alors cela le rend inconscient", "Cela retire 1 point de santé")
       .setImage("https://sites.google.com/site/fagewiki/_/rsrc/1451614313413/specializations/mage-specializations/blood-mage/Blood%20Mage.jpg?height=400&width=282")
       .setColor("#d98880") 
              message.channel.sendMessage(y);
}



 if(message.content === préfix + "Magie précise glace"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
        if(result < 10)
       var y = new Discord.RichEmbed()
             .setColor("#d98880") 
       .addField("Vous invoquez une flèche de foudre, elle touche sa cible et l'empeche d'utiliser son arme principale durant 1 tours (ou bien 10min)", "Cela retire 1 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/605143194853703703/1ddcee7437ac200e8bd24a51da24279d.png?width=395&height=559")
       if(result < 15)
       var y = new Discord.RichEmbed()
             .setColor("#d98880") 
       .addField("Vous invoquez une flèche de glace, elle touche sa cible et l'empeche d'utiliser son arme principale durant 2 tours (ou bien 10min)", "Cela retire 2 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/605143194853703703/1ddcee7437ac200e8bd24a51da24279d.png?width=395&height=559")
       else if (result < 23)
       var y = new Discord.RichEmbed()
       .setTitle("Vous invoquez une flèche de glace mais celle-ci n'atteint pas sa cible")
    .setColor("#f9ebea")
    else if (result < 40)
         var y = new Discord.RichEmbed()
    .addField("Vous invoquez une flèche de glace et cette dérnière blesse votre cible", "Cela retire 1 point de santé")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/605143727614328964/images.png")
    .setColor("#d98880") 
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .addField("Vous invoquez une flèche de glace et cette dérnière blesse grandement un cible", "Cela retire 2 point de santé")
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/605143727614328964/images.png")
    message.channel.sendMessage(y);
}

  if(message.content === préfix + "Magie précise foudre"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
        if(result < 10)
       var y = new Discord.RichEmbed()
             .setColor("#d98880") 
       .addField("Vous invoquez une flèche de glace, elle touche sa cible et l'empeche d'attaquer durant 1 tours( ou bien 5min)", "Cela retire 1 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/605143194853703703/1ddcee7437ac200e8bd24a51da24279d.png?width=395&height=559")
       if(result < 15)
       var y = new Discord.RichEmbed()
             .setColor("#d98880") 
       .addField("Vous invoquez une flèche de glace, elle touche sa cible et l'empeche d'attaquer durant 1 tours(ou bien 5min)", "Cela retire 2 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/605143194853703703/1ddcee7437ac200e8bd24a51da24279d.png?width=395&height=559")
       else if (result < 23)
       var y = new Discord.RichEmbed()
       .setTitle("Vous invoquez une flèche de foudre mais celle-ci n'atteint pas sa cible")
    .setColor("#f9ebea")
    else if (result < 40)
         var y = new Discord.RichEmbed()
    .addField("Vous invoquez une flèche de foudre et cette dérnière blesse votre cible", "Cela retire 1 point de santé")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/605143727614328964/images.png")
    .setColor("#d98880") 
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .addField("Vous invoquez une flèche de foudre et cette dérnière blesse grandement un cible", "Cela retire 2 point de santé")
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/605143727614328964/images.png")
    message.channel.sendMessage(y);
}

 if(message.content === préfix + "Boule de feux"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 10)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Votre boule de feux frole la cible mais la rate")
       else if(result < 30)
       var y = new Discord.RichEmbed()
  .setColor("#d98880") 
       .addField("Vous envoyez une boule de feux sur la cible", "Cela retire 1 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/605149381167022101/c55b34284c78a722f47e135c6766df3a.png")
        else if(result < 101)
       var y = new Discord.RichEmbed()
           .setColor("#c0392b")
    .addField("Vous envoyez une boule de feux sur la cible, la blessant grandement", "Cela lui retire 2 points de santé")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/605150395735736333/4ed3178b86948349379f3f32384e5333.png?width=432&height=559")  
    message.channel.sendMessage(y);


var x = new Discord.RichEmbed()
      var z = Math.floor((Math.random() * 100) + 1);
         if(z < 50)
       var x = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Rien ne se produit en plus")  
       else if(z < 101)
       var x = new Discord.RichEmbed()
    .setColor("#ff5700")
    .setTitle("Cela produit une brulure ! Cela retire 1 point de santé en plus")  
    message.channel.sendMessage(x);

}


if(message.content === préfix + "Tornade feux"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 10)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Votre tornade de feux rate la cible")
       else if(result < 70)
       var y = new Discord.RichEmbed()
  .setColor("#d98880") 
       .addField("Vous invoquez une tornade de feux qui blesse les cibles", "Cela retire 1 point de santé")
       .setImage("https://mobimg.b-cdn.net/lwallpaper_img/fire_tornado/real/1_fire_tornado.jpg")
        else if(result < 90)
       var y = new Discord.RichEmbed()
           .setColor("#c0392b")
    .addField("Vous invoquez une tornade de feux qui blesse grandement plusieurs ennemies", "Cela retire 2 points de santé")
    .setImage("https://magic.wizards.com/sites/mtg/files/images/wallpaper/Firespout_FTV_iPad_Wallpaper.jpg")
     else if(result < 101)
       var y = new Discord.RichEmbed()
   .setColor("#922b21")
    .addField("Votre tornade de feux touche les points vitaux des cibles !", "Cela retire 3 points de santé")
    .setImage("https://thumbs.dreamstime.com/b/tornade-rouge-d%C3%A9truisant-la-maison-117162582.jpg")
         message.channel.sendMessage(y);
 
       var x = new Discord.RichEmbed()
      var z = Math.floor((Math.random() * 100) + 1);
         if(z < 90)
       var x = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Rien ne se produit en plus")  
       else if(z < 101)
       var x = new Discord.RichEmbed()
    .setColor("#ff5700")
    .setTitle("Cela produit une brulure ! Cela retire 1 point de santé en plus")  
    message.channel.sendMessage(x);


}


if(message.content === préfix + "Explosion magique"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 10)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Votre explosion rate la cible")
        else if(result < 20)
       var y = new Discord.RichEmbed()
           .setColor("#c0392b")
    .addField("Votre explosion fait de faible dégats", "Cela retire 2 points de santé")
    .setImage("https://i.pinimg.com/originals/0d/e4/2b/0de42bae5f8c69dba96621b6c25389b1.jpg")
     else if(result < 50)
       var y = new Discord.RichEmbed()
   .setColor("#922b21")
    .addField("L'explosion magique touche un point non vital", "Cela retire 3 points de santé")
    .setImage("https://i.ytimg.com/vi/5_uKZ8jBKWE/maxresdefault.jpg")
else if(result < 90)
       var y = new Discord.RichEmbed()
    .addField("Un point vital a été touché par l'explosion magique !", "Cela retire 4 points de santé")
    .setImage("https://iamnotashamedofthegospelofchrist.files.wordpress.com/2013/06/air_burst_lg.jpeg")
    .setColor("#c0392b")
        else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .addField("l'explosion fait...Mal...", "Votre cible perd 5 points de santé")
    .setImage("http://www.anime-evo.net/wp-content/uploads/2016/03/Konosuba_10_18.jpg")
         message.channel.sendMessage(y);
 
       var x = new Discord.RichEmbed()
      var z = Math.floor((Math.random() * 100) + 1);
         if(z < 90)
       var x = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Rien ne se produit en plus")  
       else if(z < 101)
       var x = new Discord.RichEmbed()
    .setColor("#ff5700")
    .setTitle("Cela produit une brulure ! Cela retire 1 point de santé en plus")  
    message.channel.sendMessage(x);


}

if(message.content === préfix + "Lance de glace"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 20)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Votre lance de glace rate la cible")
       else if(result < 50)
       var y = new Discord.RichEmbed()
  .setColor("#d98880") 
       .addField("Votre lance de glace blesse la cible !", "Cela retire 1 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/605149381167022101/c55b34284c78a722f47e135c6766df3a.png")
        else if(result < 101)
       var y = new Discord.RichEmbed()
           .setColor("#c0392b")
    .addField("Votre lance touche un point vital !", "Cela lui retire 2 points de santé")
    .setImage("https://images2.alphacoders.com/616/thumb-350-616976.png")  
    message.channel.sendMessage(y);


var x = new Discord.RichEmbed()
      var z = Math.floor((Math.random() * 100) + 1);
         if(z < 75)
       var x = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Rien ne se produit en plus")  
       else if(z < 101)
       var x = new Discord.RichEmbed()
    .setColor("#00daff")
    .setTitle("Cela gèle l'adversaire et ignore les points de santé bonus de la cible")  
    message.channel.sendMessage(x);

}


if(message.content === préfix + "Arc de foudre"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 10)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Votre arc de foudre rate la cible")
       else if(result < 70)
       var y = new Discord.RichEmbed()
  .setColor("#d98880") 
       .addField("L'arc de foudre touche la cible", "Cela retire 1 point de santé")
       .setImage("https://i.pinimg.com/236x/0f/97/8b/0f978b7926dcffce4d724f46d1af3ae9--wizards-dark.jpg")
        else if(result < 101)
       var y = new Discord.RichEmbed()
           .setColor("#c0392b")
    .addField("L'arc de foudre touche un point vital !", "Cela lui retire 2 points de santé")
    .setImage("https://i.pinimg.com/originals/f4/72/eb/f472eb846640788d857d2b342866419d.jpg")  
    message.channel.sendMessage(y);


var x = new Discord.RichEmbed()
      var z = Math.floor((Math.random() * 100) + 1);
         if(z < 65)
       var x = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Rien ne se produit en plus")  
       else if(z < 101)
       var x = new Discord.RichEmbed()
    .setColor("#ffeb00")
    .setTitle("Cela paralyse la cible l'empechant de se défendre au prochain tours")  
    message.channel.sendMessage(x);

}


 if(message.content === préfix + "Toucher mortel"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 90)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Votre arc de foudre rate la cible")
        else if(result < 101)
       var y = new Discord.RichEmbed()
           .setColor("#ff0000")
    .addField("Vous le touchez et lui infliger une grande décharge dans tout son corps", "Cela lui retire 5 points de santé")
    .setImage("https://i.pinimg.com/originals/f4/72/eb/f472eb846640788d857d2b342866419d.jpg")  
    message.channel.sendMessage(y);


var x = new Discord.RichEmbed()
      var z = Math.floor((Math.random() * 100) + 1);
         if(z < 40)
       var x = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Rien ne se produit en plus")  
       else if(z < 101)
       var x = new Discord.RichEmbed()
    .setColor("#ffeb00")
    .setTitle("Cela paralyse la cible l'empechant de se défendre au prochain tours")  
    message.channel.sendMessage(x);

}

 if(message.content === préfix + "Crachat acide"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 60)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Votre cracha d'acide rate la cible")
       else if(result < 70)
       var y = new Discord.RichEmbed()
  .setColor("#d98880") 
       .addField("Votre cacha d'acide blesse la cible", "Cela retire 1 point de santé")
       .setImage("https://vignette.wikia.nocookie.net/torar/images/8/85/Venir.jpg/revision/latest/scale-to-width-down/290?cb=20130615022555")
        else if(result < 101)
       var y = new Discord.RichEmbed()
      .setColor("#922b21")
    .addField("Votre lancé touche la cible sur un point vital !", "Cela lui retire 3 points de santé")
    .setImage("https://vignette.wikia.nocookie.net/torar/images/8/85/Venir.jpg/revision/latest/scale-to-width-down/290?cb=20130615022555")
    message.channel.sendMessage(y);


}
if(message.content === préfix + "Vague poison"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 30)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("La vague de poison rate")
       else if(result < 101)
       var y = new Discord.RichEmbed()
  .setColor("#d98880") 
       .addField("Vous invoquez une grande fumée de poison dans toute la zone sur les cibles ennemies", "Cela retire 1 point de santé")
       .setImage("https://cdn.wallpapersafari.com/87/88/NQJrdI.jpg")
    message.channel.sendMessage(y);


var x = new Discord.RichEmbed()
      var z = Math.floor((Math.random() * 100) + 1);
         if(z < 30)
       var x = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Rien ne se produit en plus")  
       else if(z < 70)
       var x = new Discord.RichEmbed()
    .setColor("#4c9b36")
    .setTitle("Cela inflige 1 point de santé en plus à la cible")
       else if(z < 101)
       var x = new Discord.RichEmbed()
    .setColor("#4c9b36")
    .setTitle("Cela inflige 1 point de santé en plus mais cela vous rends également 1 point de santé pour le nombre d'ennemie touché(vous ne pouvez pas revenir à santé stable)")    
    message.channel.sendMessage(x);
}

 if(message.content === préfix + "Poison de folie"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 10)
       var y = new Discord.RichEmbed()
    .setColor("#f9ebea")
    .setTitle("Votre poison ne blesse pas la cible")
       else if(result < 50)
       var y = new Discord.RichEmbed()
  .setColor("#d98880") 
       .addField("Le poison blesse la cible légerement", "Cela retire 1 point de santé")
       .setImage("https://vignette.wikia.nocookie.net/astrohanasia/images/a/a4/Wizardry.jpg/revision/latest?cb=20180519184203")
        else if(result < 101)
       var y = new Discord.RichEmbed()
       .setColor("#c0392b")
    .addField("Le poison blesse grandement la cible", "Cela lui retire 2 points de santé")
    .setImage("https://vignette.wikia.nocookie.net/astrohanasia/images/a/a4/Wizardry.jpg/revision/latest?cb=20180519184203")  
    message.channel.sendMessage(y);

var x = new Discord.RichEmbed()
      var z = Math.floor((Math.random() * 100) + 1);
         if(z < 10)
       var x = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Rien ne se produit en plus")  
       else if(z < 30)
       var x = new Discord.RichEmbed()
    .setColor("#4c9b36")
    .setTitle("Votre cible ratera la prochaine attaque")
       else if(z < 70)
       var x = new Discord.RichEmbed()
    .setColor("#4c9b36")
    .setTitle("Votre cible ratera les 2 prochaines attaque")  
     else if(z < 101)
       var x = new Discord.RichEmbed()
    .setColor("#4c9b36")
    .setTitle("Votre cible ratera les 3 prochaines attaque")      
    message.channel.sendMessage(x);

}


if(message.content === préfix + "Magie précise poison"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
        if(result < 10)
       var y = new Discord.RichEmbed()
             .setColor("#d98880") 
       .addField("Vous lancez un sort précis de poison", "Cela retire 1 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/605148549600116738/a51ccea46693501986dd9359076ab24a.png")
       if(result < 15)
       var y = new Discord.RichEmbed()
             .setColor("#d98880") 
       .addField("Vous invoquez une boule de feux, elle touche sa cible en la brulant grandement !", "Cela retire 3 point de santé")
       .setImage("https://media.discordapp.net/attachments/603629419063541788/605148549600116738/a51ccea46693501986dd9359076ab24a.png")
       else if (result < 23)
       var y = new Discord.RichEmbed()
       .setTitle("Vous invoquez une flèche de foudre mais celle-ci n'atteint pas sa cible")
    .setColor("#f9ebea")
    else if (result < 40)
         var y = new Discord.RichEmbed()
    .addField("Vous invoquez une boule de feux venant blesser la cible", "Cela retire 1 point de santé")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/605148549600116738/a51ccea46693501986dd9359076ab24a.png")
    .setColor("#d98880") 
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .addField("Vous invoquez une boule feux venant blesser grandement la cible", "Cela retire 2 point de santé")
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/603629419063541788/605148549600116738/a51ccea46693501986dd9359076ab24a.png")
    message.channel.sendMessage(y);
}








if(message.content === préfix + "Paralysie"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
       if(result < 10)
       var y = new Discord.RichEmbed()
  .setTitle("La cible ne reçoit aucun dégat")
    .setColor("#f9ebea")
       if(result < 30)
       var y = new Discord.RichEmbed()
       .setTitle("La cible ne reçoit aucun dégat mais est paraylsé pendant 1 tours(ou bien 5min)")
       .setColor("#f9ebea")
       else if (result < 35)
       var y = new Discord.RichEmbed()
     .addField("La cible est blessé mais n'est pas paralysé", "Cela retire 1 point de santé")
    .setColor("#d98880")
    .setImage("https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/16744_800x480.jpg")
     else if (result < 101)
       var y = new Discord.RichEmbed()
     .addField("La cible est blessé et paralysé pendant 1 tours(ou bien 5min)", "Cela retire 1 point de santé")
    .setColor("#d98880")
    .setImage("https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/16744_800x480.jpg")

    message.channel.sendMessage(y);
}


if(message.content === préfix + "Protection faible"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 11)
    var y = new Discord.RichEmbed()
    .setColor("#0023ff")
    .setImage("https://i.pinimg.com/736x/a8/26/58/a8265802c5cd97bbd353ebd6da93145a.jpg")
    .setTitle("Votre faible protection annule l'attaque physique")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("C'est un echec")
    message.channel.sendMessage(y);
}
 if(message.content === préfix + "Protection moyenne"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 21)
    var y = new Discord.RichEmbed()
    .setColor("#0023ff")
    .setImage("https://i.pinimg.com/736x/a8/26/58/a8265802c5cd97bbd353ebd6da93145a.jpg")
    .setTitle("Votre faible protection annule l'attaque physique")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("C'est un echec")
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "Protection majeur"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 31)
    var y = new Discord.RichEmbed()
    .setColor("#0023ff")
    .setImage("https://i.pinimg.com/736x/a8/26/58/a8265802c5cd97bbd353ebd6da93145a.jpg")
    .setTitle("Votre faible protection annule l'attaque physique")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("C'est un echec")
    message.channel.sendMessage(y);
}

/// RESISTANCE MAGIQUE ////

    if(message.content === préfix + "Resistance faible"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 11)
    var y = new Discord.RichEmbed()
    .setColor("#0023ff")
    .setImage("https://i.pinimg.com/736x/76/a8/76/76a87647e067d403f6b4f04b9622a579.jpg")
    .setTitle("Votre faible protection annule l'attaque physique")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("C'est un echec")
    message.channel.sendMessage(y);
}
 if(message.content === préfix + "Resistance moyenne"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 21)
    var y = new Discord.RichEmbed()
    .setColor("#0023ff")
    .setImage("https://i.pinimg.com/736x/76/a8/76/76a87647e067d403f6b4f04b9622a579.jpg")
    .setTitle("Votre faible protection annule l'attaque physique")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("C'est un echec")
    message.channel.sendMessage(y);
}
    if(message.content === préfix + "Resistance majeur"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 31)
    var y = new Discord.RichEmbed()
    .setColor("#0023ff")
    .setImage("https://i.pinimg.com/736x/76/a8/76/76a87647e067d403f6b4f04b9622a579.jpg")
    .setTitle("Votre faible protection annule l'attaque physique")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("C'est un echec")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Seringue"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Vous ratez votre coups")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#16ff00")
    .setTitle("Vous réussissez à planter votre seringue sur la cible !")
    message.channel.sendMessage(y);
}

if(message.content === préfix + "Tazer"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40)
    var y = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Vous ratez votre coups")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#16ff00")
    .setTitle("Vous réussissez à rendre inconscient la cible !")
    message.channel.sendMessage(y);
}


if(message.content === prefix + "Epée MK-1")
{

    if(roll >= 0 && roll <= 19)
    {
        let EpéeMK10D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez de peux votre cible et ne lui infligé aucun dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951657775267867/29b1ad4523e65bcddddb8cda3909d17f14b88892_hq.gif")
        message.channel.send(EpéeMK10D)
    }else if(roll >= 20 && roll <= 29)
    {
        let EpéeMK11D = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous touchez votre ennemi mais ce n'est qu'une taillade et lui infligé 1 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951336269152258/source_1.gif")
        message.channel.send(EpéeMK11D)
    }else if(roll >= 30 && roll <= 79)
    {
        let EpéeMK12D = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous portez un coup à votre ennemi sans hésitation et lui infligé 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951260327346186/tenor.gif")
        message.channel.send(EpéeMK12D)
    }
    else if(roll >= 80 && roll <= 100)
    {
        let EpéeMK13D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tranchez bien comme il faut votre adversaire et lui infligé 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951310281244672/slahs.gif")
        message.channel.send(EpéeMK13D)
    }
}

if(message.content === prefix + "Epée MK-2")
{

    if(roll >= 0 && roll <= 19)
    {
        let EpéeMK20D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez de peux votre cible et ne lui infligé aucun dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951657775267867/29b1ad4523e65bcddddb8cda3909d17f14b88892_hq.gif")
        message.channel.send(EpéeMK20D)
    }else if(roll >= 20 && roll <= 69)
    {
        let EpéeMK22D = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous portez un coup à votre ennemi sans hésitation et lui infligé 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951260327346186/tenor.gif")
        message.channel.send(EpéeMK22D)
    }
    else if(roll >= 70 && roll <= 100)
    {
        let EpéeMK23D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tranchez bien comme il faut votre adversaire et lui infligé 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951310281244672/slahs.gif")
        message.channel.send(EpéeMK23D)
    }
}

if(message.content === prefix + "Epée MK-3")
{

    if(roll >= 0 && roll <= 09)
    {
        let EpéeMK30D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez de peux votre cible et ne lui infligé aucun dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951657775267867/29b1ad4523e65bcddddb8cda3909d17f14b88892_hq.gif")
        message.channel.send(EpéeMK30D)
    }else if(roll >= 10 && roll <= 49)
    {
        let EpéeMK32D = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous portez un coup à votre ennemi sans hésitation et lui infligé 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951260327346186/tenor.gif")
        message.channel.send(EpéeMK32D)
    }
    else if(roll >= 50 && roll <= 100)
    {
        let EpéeMK33D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tranchez bien comme il faut votre adversaire et lui infligé 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951310281244672/slahs.gif")
        message.channel.send(EpéeMK33D)
    }
}

if(message.content === prefix + "Epée MK-4")
{

    if(roll >= 0 && roll <= 09)
    {
        let EpéeMK40D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez de peux votre cible et ne lui infligé aucun dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951657775267867/29b1ad4523e65bcddddb8cda3909d17f14b88892_hq.gif")
        message.channel.send(EpéeMK40D)
    }else if(roll >= 10 && roll <= 29)
    {
        let EpéeMK42D = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous portez un coup à votre ennemi sans hésitation et lui infligé 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951260327346186/tenor.gif")
        message.channel.send(EpéeMK42D)
    }
    else if(roll >= 30 && roll <= 70)
    {
        let EpéeMK43D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tranchez bien comme il faut votre adversaire et lui infligé 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615951310281244672/slahs.gif")
        message.channel.send(EpéeMK43D)
    }
    else if(roll >= 70 && roll <= 100)
    {
        let EpéeMK44D = new Discord.RichEmbed()
            .setColor("#00000")
            .setAuthor("Vous infligez de sérieux dégat à votre ennemi et lui infligé 4 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615952919300145152/tenor.gif")
        message.channel.send(EpéeMK44D)
    }
}


if(message.content === prefix + "Hache MK-1")
{

    if(roll >= 0 && roll <= 29)
    {
        let HacheMK10D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez de vitesse et votre cible à le temps d'equiver le coups")
            .setImage("")
        message.channel.send(HacheMK10D)
    }else if(roll >= 30 && roll <= 59)
    {
        let HacheMK12D = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous portez un coup à votre ennemi sans hésitation et lui infligé 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/540217343670747136/615962743328997376/darius_woadking_splash_0.jpg")
        message.channel.send(HacheMK12D)
    }
    else if(roll >= 60 && roll <= 100)
    {
        let HacheMK13D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tranchez bien comme il faut votre adversaire et lui infligé 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/540217343670747136/615962743328997376/darius_woadking_splash_0.jpg")
        message.channel.send(HacheMK13D)
    }
}

if(message.content === prefix + "Hache MK-2")
{

    if(roll >= 0 && roll <= 29)
    {
        let HacheMK20D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez de vitesse et votre cible à le temps d'equiver le coups")
            .setImage("")
        message.channel.send(HacheMK20D)
    }else if(roll >= 30 && roll <= 49)
    {
        let HacheMK22D = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor("Vous portez un coup à votre ennemi sans hésitation et lui infligé 2 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/540217343670747136/615962743328997376/darius_woadking_splash_0.jpg")
        message.channel.send(HacheMK22D)
    }
    else if(roll >= 50 && roll <= 100)
    {
        let HacheMK23D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tranchez bien comme il faut votre adversaire et lui infligé 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/540217343670747136/615962743328997376/darius_woadking_splash_0.jpg")
        message.channel.send(HacheMK23D)
    }
}

if(message.content === prefix + "Hache MK-3")
{

    if(roll >= 0 && roll <= 29)
    {
        let HacheMK30D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez de vitesse et votre cible à le temps d'equiver le coups")
            .setImage("")
        message.channel.send(HacheMK30D)
    }else if(roll >= 30 && roll <= 79)
    {
        let HacheMK33D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tranchez bien comme il faut votre adversaire et lui infligé 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/540217343670747136/615962743328997376/darius_woadking_splash_0.jpg")
        message.channel.send(HacheMK33D)
    }
    else if(roll >= 80 && roll <= 100)
    {
        let HacheMK34D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous infligez de sérieux dégat à votre ennemi et lui infligé 4 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/540217343670747136/615962743328997376/darius_woadking_splash_0.jpg")
        message.channel.send(HacheMK34D)
    }
}

if(message.content === prefix + "Hache MK-4")
{

    if(roll >= 0 && roll <= 19)
    {
        let HacheMK40D = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setAuthor("Vous manquez de vitesse et votre cible à le temps d'equiver le coups")
            .setImage("")
        message.channel.send(HacheMK40D)
    }else if(roll >= 20 && roll <= 69)
    {
        let HacheMK43D = new Discord.RichEmbed()
            .setColor("#a70101")
            .setAuthor("Vous tranchez bien comme il faut votre adversaire et lui infligé 3 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/540217343670747136/615962743328997376/darius_woadking_splash_0.jpg")
        message.channel.send(HacheMK43D)
    }
    else if(roll >= 70 && roll <= 100)
    {
        let HacheMK44D = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Vous infligez de sérieux dégat à votre ennemi et lui infligé 4 point de dégat")
            .setImage("https://cdn.discordapp.com/attachments/540217343670747136/615962743328997376/darius_woadking_splash_0.jpg")
        message.channel.send(HacheMK44D)
    }
}




if(message.content === préfix + "Couteau MK-1"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 30)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Votre couteau frolle la cible")
    .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615876776228290560/22bbade48e2ffa2c50968c635445b6a1.gif")
    else if (result < 40)
    var y = new Discord.RichEmbed()
    .setColor("#d98880") 
    .setTitle("Vous plantez la cible, cela retire 1 point de santé")
    .setImage("https://wallpaperplay.com/walls/full/5/1/8/72567.jpg")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://wallpaperplay.com/walls/full/5/1/8/72567.jpg")
    .setTitle("Vous plantez la cible sur un point non vital, cela retire 2 points de santé")

    message.channel.sendMessage(y);
}

if(message.content === préfix + "Couteau MK-2"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 10)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Votre couteau frolle la cible")
    .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615876776228290560/22bbade48e2ffa2c50968c635445b6a1.gif")
    else if (result < 50)
    var y = new Discord.RichEmbed()
    .setColor("#d98880") 
    .setTitle("Vous plantez la cible, cela retire 1 point de santé")
    .setImage("https://wallpaperplay.com/walls/full/5/1/8/72567.jpg")
    else if (result < 90)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615876762600996879/giphy.gif")
    .setTitle("Vous plantez la cible sur un point non vital, cela retire 2 points de santé")
        else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://img4.goodfon.com/wallpaper/nbig/7/fd/soldat-naemnik-art-nozh-shlem-maska-kostium-zashchita-skhvat.jpg")
    .setTitle("Vous plantez la cible sur un point vital, cela retire 3 points de santé")

    message.channel.sendMessage(y);
}



if(message.content === préfix + "Couteau MK-3"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 10)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Votre couteau frolle la cible")
    .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615876776228290560/22bbade48e2ffa2c50968c635445b6a1.gif")
    else if (result < 30)
    var y = new Discord.RichEmbed()
    .setColor("#d98880") 
    .setTitle("Vous plantez la cible, cela retire 1 point de santé")
    .setImage("https://wallpaperplay.com/walls/full/5/1/8/72567.jpg")
    else if (result < 80)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615876762600996879/giphy.gif")
    .setTitle("Vous plantez la cible sur un point non vital, cela retire 2 points de santé")
        else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://img4.goodfon.com/wallpaper/nbig/7/fd/soldat-naemnik-art-nozh-shlem-maska-kostium-zashchita-skhvat.jpg")
    .setTitle("Vous plantez la cible sur un point vital, cela retire 3 points de santé")

    message.channel.sendMessage(y);
}

if(message.content === préfix + "Couteau MK-4"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if(result < 10)
    var y = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Votre couteau frolle la cible")
    .setImage("https://cdn.discordapp.com/attachments/615874638001471498/615876776228290560/22bbade48e2ffa2c50968c635445b6a1.gif")
    else if (result < 80)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://media.discordapp.net/attachments/615874638001471498/615876762600996879/giphy.gif")
    .setTitle("Vous plantez la cible sur un point non vital, cela retire 2 points de santé")
        else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#d98880")
    .setImage("https://img4.goodfon.com/wallpaper/nbig/7/fd/soldat-naemnik-art-nozh-shlem-maska-kostium-zashchita-skhvat.jpg")
    .setTitle("Vous plantez la cible sur un point vital, cela retire 3 points de santé")

    message.channel.sendMessage(y);
}












