if(message.content === préfix + "Couture peau de crocro" || message.content === préfix + "couture peau de crocro"){
    var minM = Math.floor(Math.min(3));
    var maxM = Math.floor(Math.max(6)); 
    var result = Math.floor(Math.random() * (maxM - minM + 1) ) + minM;
    var y = new Discord.RichEmbed() 
    .addField("**Amélioratoin du métier couturier", "Vous venez utiliser la peau de crocro afin de vous entrainer dans le méier de couturier\n**Gain d'XP dans le métier : **" + result)
    .setColor("#ff4600")
    .setImage("https://cdn.discordapp.com/attachments/641777958490472478/667035755725455361/1659613-bigthumbnail.png")
    .setFooter("©[LCR] Production", "https://cdn.discordapp.com/attachments/625441285578162177/641778421277392907/art-romance-of-the-apocalypse-romantically-apocalyptic-comics-sunglasses-leather-jacket-mask-pilot.jpg");
    message.channel.send(y);
}