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
    .setImage("https://c.wallhere.com/photos/82/ac/sniper_rifle_soldier_weapon_artwork-253103.jpg!d")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 3 point de santé")
    else if (result < 101)
    var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .setImage("https://c.wallhere.com/photos/82/ac/sniper_rifle_soldier_weapon_artwork-253103.jpg!d")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 4 point de santé")
    message.channel.sendMessage(y);
}


if(message.content === préfix + "Fusil Gauss MK-4"){
    var y = new Discord.RichEmbed()
       var result = Math.floor((Math.random() * 100) + 1);
    if (result < 30)
    var y = new Discord.RichEmbed()
    .setColor("#922b21")
    .setImage("https://c.wallhere.com/photos/82/ac/sniper_rifle_soldier_weapon_artwork-253103.jpg!d")
    .setTitle("Votre tire touche un point vital de la cible, cela retire 3 point de santé")
    else if (result < 90)
    var y = new Discord.RichEmbed()
    .setColor("#c0392b")
    .setImage("https://c.wallhere.com/photos/82/ac/sniper_rifle_soldier_weapon_artwork-253103.jpg!d")
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


















