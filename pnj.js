//Arbites terra

//SOS
if(message.content === prefix + "SOS Arbites")
{

    if(roll >= 0 && roll <= 9)
    {
        let SergentArbites = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Un sergent de l'arbites accompagné de 2 chien robotique")
            .setDescription("Sergent = 6 point de vie, chien robotique = 2 point de vie ")
            .addField("**Attaque sergent**","?S-ArbitesAttaque",true)
            .addField("**Attaque Chien**","?ChienArbitesAttaque",true)
            .addField("**Capacité Sergent**" , "Initiative && -1 dégats subis",true)
            .addField("**Capacité Chien**","Aucune",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610473345200160769/3b3183e63bdc8babb0b24715c72affc9.jpg")
        message.channel.send(SergentArbites)

    }else if(roll >= 10 && roll <= 55 )
    {
        let ProtectorArbites = new Discord.RichEmbed()
            .setColor("#960101")
            .setAuthor("2 Arbites protector lourdement équipé")
            .setDescription("3 Point de vie ")
            .addField("**Attaque**","?P-ArbitesAttaque",true)
            .addField("**Capacité**" , "-1 dégats subis par attaque",true)
            .setImage("https://media.discordapp.net/attachments/610241216738492448/610473351219118100/54940_9dbb177444c3d40842f5f7b4366cd471.jpeg?width=1153&height=670")
        message.channel.send(ProtectorArbites)
    }else if(roll >= 56 && roll <= 100)
    {
        let GardeArbites = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("2 garde Arbites lourdement équipé")
            .setDescription("3 Point de vie ")
            .addField("**Attaque**","?ArbitesAttaque",true)
            .addField("**Capacité**","Initiative",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610473346831876116/telechargement_1.jpg")
        message.channel.send(GardeArbites)
    }
}
//PNJ unique

if(message.content === prefix + "Garde arbites")
{
    let GardeArbites = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Un garde Arbites lourdement équipé")
            .setDescription("3 Point de vie ")
            .addField("**Attaque**","?ArbitesAttaque",true)
            .addField("**Capacité**","Initiative",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610473346831876116/telechargement_1.jpg")
        message.channel.send(GardeArbites)
}

if(message.content === prefix + "Protector arbites")
{
    let ProtectorArbites = new Discord.RichEmbed()
            .setColor("#960101")
            .setAuthor("2 Arbites protector lourdement équipé")
            .setDescription("3 Point de vie ")
            .addField("**Attaque**","?P-ArbitesAttaque",true)
            .addField("**Capacité**" , "-1 dégats subis par attaque",true)
            .setImage("https://media.discordapp.net/attachments/610241216738492448/610473351219118100/54940_9dbb177444c3d40842f5f7b4366cd471.jpeg?width=1153&height=670")
        message.channel.send(ProtectorArbites)
}

if(message.content === prefix + "Sergent arbites")
{
    let SergentArbites = new Discord.RichEmbed()
            .setColor("#000000")
            .setAuthor("Un sergent de l'arbites accompagné de 2 chien robotique")
            .setDescription("**Sergent :** 6 point de vie  **chien robotique :** 2 point de vie ")
            .addField("**Attaque sergent**","?S-ArbitesAttaque",true)
            .addField("**Attaque Chien**","?ChienArbitesAttaque",true)
            .addField("**Capacité Sergent**" , "Initiative & -1 dégats subis",true)
            .addField("**Capacité Chien**","Aucune",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610473345200160769/3b3183e63bdc8babb0b24715c72affc9.jpg")
        message.channel.send(SergentArbites)
}

//Armé impérial 

if(message.content === prefix + "Garde impérial")
{
    let GardeImperial = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Garde impérial")
            .setDescription(" 4 point de vie")
            .addField("**Attaque**","?G-ImperialAttaque")
            .addField("**Capacité Garde**" , "-1 dégats subit")
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610528337542250499/886653e8fd8639d32ccde569c0814d6e--warhammer-k-imperial-guard-imperial-guard-k.jpg")
        message.channel.send(GardeImperial)
}

if(message.content === prefix + "Escouade impérial")
{
    let EscouadeImperial = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Une escouade de 3 garde impériaux")
            .addField("Point de vie"," 4 point de vie")
            .addField("**Attaque**","?G-ImperialAttaque", true)
            .addField("**Capacité Garde**" , "-1 dégats subit", true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610545586172592138/dc43654222c3ac87d997300caaffbb8e.jpg")
        message.channel.send(EscouadeImperial)
}

if(message.content === prefix + "Officier impérial")
{
    let OfficierImperial = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Officier impérial")
            .setDescription(" 5 point de vie")
            .addField("**Attaque**","?O-ImperialAttaque",true)
            .addField("**Capacité Garde**" , "-1 dégats subit & initiative",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610797414747603004/ios_large_1504445473_image.jpg")
        message.channel.send(OfficierImperial)
}

if(message.content === prefix + "Amiral impérial")
{
    let AmiralImperialSophie = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("L'amiral Sophie, une combattante expérimenté et tactitienne de génie.")
            .setDescription(" 10 point de vie")
            .addField("**Attaque**","?A-SophieAttaque",true)
            .addField("**Capacité Amiral**" , "-2 dégats subit & initiative & Dextérité",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610531871368937483/3de99073de36e8dcba588c44441547a1.jpg")
        message.channel.send(AmiralImperialSophie)
}

//Armé Androide

if(message.content === prefix + "Garde androide")
{
    let GardeAndroide = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Un garde androide K-tron lourdement blindé")
            .setDescription(" 2 point de vie")
            .addField("**Attaque**","?G-AndroideAttaque",true)
            .addField("**Capacité K-tron**" , "-2 dégats subit",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610545610143039520/38501599fd90ce339b49d1de61958447.jpg")
        message.channel.send(GardeAndroide)
}

if(message.content === prefix + "Escouade androide")
{
    let EscouadeAndroide = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Une escouade de 3 garde androide K-tron lourdement blindé")
            .setDescription(" 2 point de vie")
            .addField("**Attaque**","?G-AndroideAttaque",true)
            .addField("**Capacité K-tron**" , "-2 dégats subit",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610547291308163102/valerian___ktron_by_benmauro_dbiwmjw-pre.png")
        message.channel.send(EscouadeAndroide)
}

if(message.content === prefix + "Officier androide")
{
    let OfficierAndroide = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Un officier androide lourdement blindé")
            .setDescription(" 4 point de vie")
            .addField("**Attaque**","?O-AndroideAttaque",true)
            .addField("**Capacité K-tron**" , "-2 dégats subit",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/610549145748373535/Sci-fi-Art-Geoffroy-Thoorens-Beamgun-Commander.png")
        message.channel.send(OfficierAndroide)
}

//Istaris

//Garde Istaris

if(message.content === prefix + "Garde Istaris")
{
    let GardeIstaris = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Un garde Istaris équipé d'un fusil rafale de précision")
            .setDescription(" 5 point de vie")
            .addField("**Attaque**","?G-IstarisAttaque",true)
            .addField("**Capacité Istaris**" , "Initiative",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611251526291423232/265px-Dire_Avenger_Mymeara.jpg")
        message.channel.send(GardeIstaris)
}

if(message.content === prefix + "Escouade Istaris")
{
    let EscouadeIstaris = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Une escouade de 3 gardes Istaris équipés de fusils rafales à précision")
            .setDescription(" 5 point de vie")
            .addField("**Attaque**","?G-IstarisAttaque",true)
            .addField("**Capacité Istaris**" , "Initiative",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611253613255327754/4d5f76bf5d6e4a5f345e2ac272673891.jpg")
        message.channel.send(EscouadeIstaris)
}

if(message.content === prefix + "Officier Istaris")
{
    let OfficierIstaris = new Discord.RichEmbed()
            .setColor("#bf0000")
            .setAuthor("Un officier Istaris équipé d'une redoutable lance laser")
            .setDescription(" 6 point de vie")
            .addField("**Attaque**","?O-IstarisAttaque",true)
            .addField("**Capacité Istaris**" , "Initiative & ?Esquive à chaque attaque",true)
            .setImage("https://cdn.discordapp.com/attachments/610241216738492448/611251530724671510/df51fcf8132257219cbf3c355b8fc0b4.jpg")
        message.channel.send(OfficierIstaris)
}