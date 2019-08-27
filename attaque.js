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




