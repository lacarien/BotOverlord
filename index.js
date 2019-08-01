
const Discord = require('discord.js');

const client = new Discord.Client();

var préfix = "?";


client.login(process.env.TOKEN);

client.on('message', message => {
    

    if(message.content === préfix + "Pistolet"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 40)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Vous tirez avec votre pistolet mais....Vous ratez votre cible")
        else if (result < 60)
        var y = new Discord.RichEmbed()
        .addField("Vous touchez la cible, la balle n'a pas eu un grand impact", "Cela retire 1 point de santé")
        .setImage("https://media.discordapp.net/attachments/576774089335635969/603733779353174036/Z.png")
        .setColor("#d98880")
        else if (result < 101)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous touchez votre cible sans aucun problème", "Cela lui retire 2 points de santé")
        .setImage("https://media.discordapp.net/attachments/576774089335635969/603733925378129931/sword-art-online-2-ii-background-hd-1920x1280-112433.png?width=839&height=560")
        
        message.channel.sendMessage(y);
    }

    if(message.content === préfix + "Revolver"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 50)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Vous tirez avec votre revolver mais....Vous ratez votre cible")
        else if (result < 60)
        var y = new Discord.RichEmbed()
        .addField("Vous touchez la cible à l'aide de votre revolver, la balle n'a pas eu un grand impact", "Cela retire 1 point de santé")
        .setImage("https://media.discordapp.net/attachments/576774089335635969/603736396204736513/2Q.png")
        .setColor("#d98880")
        else if (result < 90)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous touchez votre cible sans aucun problème", "Cela lui retire 2 points de santé")
        .setImage("https://i.ya-webdesign.com/images/warframe-drawing-nekros-2.png")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#922b21")
        .addField("Vous touchez votre cible sur un point vital !", "Cela lui retire 3 points de santé")
        .setImage("https://i.gifer.com/embedded/download/FT8V.gif")
        message.channel.sendMessage(y);
    }

    if(message.content === préfix + "Pompe"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 10)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Vous tirez avec votre fusil à pompe mais....Vous ratez votre cible")
        else if (result < 20)
        var y = new Discord.RichEmbed()
        .addField("Vous touchez la cible à l'aide de votre fusil à pompe, les balles n'ont pas un grand impact", "Cela retire 1 point de santé")
        .setColor("#d98880")
        else if (result < 70)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous touchez votre cible sans aucun problème", "Cela lui retire 2 points de santé")
        .setImage("https://global-img.gamergen.com/killzone-shadow-fall-images-screenshots-09_0190000000395650.jpg")
        else if (result < 90)
        var y = new Discord.RichEmbed()
        .setColor("#922b21")
        .addField("Vous touchez votre cible sur un point vital !", "Cela lui retire 3 points de santé")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#641e16")
        .addField("Vous touchez votre cible sur un point extremement vital !", "Cela lui retire 4 points de santé")
        message.channel.sendMessage(y);
    }

    if(message.content === préfix + "Sniper"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 30)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Vous tirez avec votre fusil de précision mais....Vous ratez votre cible")
        else if (result < 40)
        var y = new Discord.RichEmbed()
        .addField("Vous touchez la cible à l'aide de votre sniper, la balle frole la cible", "Cela retire 1 point de santé")
        .setColor("#d98880")
        .setImage("https://images3.alphacoders.com/810/thumb-1920-810343.jpg")
        else if (result < 50)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous touchez votre cible sans aucun problème", "Cela lui retire 2 points de santé")
        .setImage("https://thewallpaper.co//wp-content/uploads/2017/08/best-futuristic-fighting-action-art-warrior-fantasy-colourful-rpg-mmo-online-destiny-shooter-tumblr-scifi-fps.jpg")
        else if (result < 90)
        var y = new Discord.RichEmbed()
        .setColor("#922b21")
        .addField("Vous touchez votre cible sur un point vital !", "Cela lui retire 3 points de santé")
        .setImage("https://cdn59.picsart.com/169716340002202.jpeg?r1024x1024")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#641e16")
        .addField("Vous touchez votre cible sur un point extremement vital !", "Cela lui retire 4 points de santé")
        .setImage("http://sfwallpaper.com/images/sniper-wallpaper-7.jpg")
        message.channel.sendMessage(y);
    }

    
    if(message.content === préfix + "Fusil"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 10)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Vous tirez avec votre fusil mitrailleur mais....Vous ratez votre cible")
        else if (result < 20)
        var y = new Discord.RichEmbed()
        .addField("Vous touchez la cible à l'aide de votre fusil, la rafale de balle le touche partiellement", "Cela retire 1 point de santé")
        .setColor("#d98880")
        .setImage("https://i.pinimg.com/originals/6d/9a/b4/6d9ab428bcb520eb08ab68b92c0fa120.jpg")
        else if (result < 90)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous touchez votre cible sans aucun problème", "Cela lui retire 2 points de santé")
        .setImage("https://wallpaperaccess.com/full/145450.jpg")
        else if (result < 110)
        var y = new Discord.RichEmbed()
        .setColor("#922b21")
        .addField("Vous touchez votre cible sur un point vital !", "Cela lui retire 3 points de santé")
        .setImage("https://i.pinimg.com/originals/3f/10/36/3f103610a9d4703d0cf03d449a4fb5b7.jpg ")
        message.channel.sendMessage(y);
    }


    if(message.content === préfix + "Couteau"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 30)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Vous foncez sur votre cible avec un couteau mais malheureusement ce dernier l'éfflore")
        else if (result < 40)
        var y = new Discord.RichEmbed()
        .addField("Votre coup de couteau frolle la cible lui laissant une rapide entaille", "Cela retire 1 point de santé")
        .setColor("#d98880")
        .setImage("https://media.discordapp.net/attachments/576774089335635969/603869150716231710/carlos-cabrera-knife-attack.png?width=895&height=560")
        else if (result < 101)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous réussisez à planter votre couteau sur votre cible", "Cela lui retire 2 points de santé")
        .setImage("https://cdn.wallpapersafari.com/77/69/ByzMIL.png")
        message.channel.sendMessage(y);
    }


    if(message.content === préfix + "Lancé"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 50)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Vous lancé une arme au corps à corps, mais cette dérnière frolle votre cible")
        else if (result < 60)
        var y = new Discord.RichEmbed()
        .addField("Votre lancé frolle votre cible de près et lui fait subir une entaille", "Cela retire 1 point de santé")
        .setColor("#d98880")
        .setImage("https://media.discordapp.net/attachments/576774089335635969/603870882984755221/bfln5jRa_L37ziNWm-xNvBdnqT6JZ9_-js3-9dqFCwcunhePyr1xfUxKciLEoqDK8fOE_jYwAqhJUIWs7HBekpGCpiFsJhikY8xn.png")
        else if (result < 70)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Votre lancé touche la cible sur un point non vital", "Cela lui retire 2 points de santé")
        .setImage("https://media.discordapp.net/attachments/576774089335635969/603871079022460949/Z.png")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#922b21")
        .addField("Votre lancé touche la cible sur un point vital !", "Cela lui retire 3 points de santé")
        .setImage("https://media.discordapp.net/attachments/576774089335635969/603872378514046976/BlankBowedLeonberger-size_restricted.gif")
        message.channel.sendMessage(y);
    }


    if(message.content === préfix + "épée"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 20)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Votre coup d'épée rate la cible de peu")
        else if (result < 30)
        var y = new Discord.RichEmbed()
        .addField("Vous faites un coup d'estoc qui frolle la cible lui laissant une entaille comme signe de passage", "Cela retire 1 point de santé")
        .setColor("#d98880")
        .setImage("https://fsa.zobj.net/crop.php?r=W8X_mqsvlA0VI9bkc29xQe01G1ntehN3461Oq4osmtmvnqFai9Phf7_MGKZJmM40_S4lKg13C9fzsWxvTDlWlf6aFE1eW9-LnKCUkfyYTwL1AHFXprFalMqTWQuO48MD7vF72RbNocZBwM7G")
        else if (result < 70)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous donnez un coups d'épée sur un point non vital", "Cela lui retire 2 points de santé")
        .setImage("https://cache.desktopnexus.com/thumbseg/2017/2017890-bigthumbnail.jpg")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#922b21")
        .addField("Votre coup d'épée touche la cible sur un point vital !", "Cela lui retire 3 points de santé")
        .setImage("https://images.cgmagonline.com/wp-content/uploads/2014/04/ninjagaidenzheader-1280x720.jpg")
        message.channel.sendMessage(y);
    }



    if(message.content === préfix + "Hache"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 30)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Votre coup de hache rate la cible de peu")
        else if (result < 60)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous donnez un coups de hache sur un point non vital", "Cela lui retire 2 points de santé")
        .setImage("https://s1.1zoom.me/big0/805/354121-sepik.jpg")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#922b21")
        .addField("Votre coup de hache touche la cible sur un point vital !", "Cela lui retire 3 points de santé")
        .setImage("https://static1.millenium.org/article_old/images/contenu/actus/LOL/Darius/darius_woadking_splash_0.jpg")
        message.channel.sendMessage(y);
    }


    
    if(message.content === préfix + "Lance"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 40)
        var y = new Discord.RichEmbed()
        .setColor("#f9ebea")
        .setTitle("Votre coup de lance rate la cible de peu")
        else if (result < 50)
             var y = new Discord.RichEmbed()
        .setColor("#c0392b")
        .addField("Vous donnez un coups de lance sur un point non vital", "Cela lui retire 2 points de santé")
        .setImage("https://cache.desktopnexus.com/thumbseg/368/368628-bigthumbnail.jpg")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#922b21")
        .addField("Votre coup de lance touche la cible sur un point vital !", "Cela lui retire 3 points de santé")
        .setImage("https://images7.alphacoders.com/423/423166.jpg")
        message.channel.sendMessage(y);
    }

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

     if(message.content === préfix + "Boule de feu"){
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


    if(message.content === préfix + "Tornade feu"){
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


    if(message.content === préfix + "Voyage spatiale"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
           if(result < 2)
           var y = new Discord.RichEmbed()
        .setColor("#6e61ae")
        .setImage("https://images.alphacoders.com/505/505470.jpg")
        .setTitle("Votre vaisseau se fait subitement toucher par un vaisseau ennemi qui était camouflé. Vous finisez sur la planète la plus proche que vous pourrez atteindre avec votre vaiseau détruit tout comme les 3/4 du matériel à l'intérieur devenant impossible à réparer")
           else if(result < 5)
           var y = new Discord.RichEmbed()
      .setColor("#6e61ae") 
           .setTitle("Subitement vous avez un problème technique ne permettant plus à redémarrer les moteurs. Vous devrez attendre qu'un joueur vienne vous récupérer abandonnant votre ancien vaisseau")
           .setImage("https://vignette.wikia.nocookie.net/masstrek/images/9/9b/Fall_of_Denobula.jpg/revision/latest?cb=20121215021908")
            else if(result < 30)
           var y = new Discord.RichEmbed()
           .setColor("#6e61ae")
           .setTitle("Vous avez eu un problème technique. Si cela se reproduit votre vaisseau ne pourra plus se déplacer (temps de réparation : 24h(et seulement si il est toujours en êtat de se déplacer sinon 36h))")
        .setImage("https://crossingzebras.com/wp-content/uploads/2013/02/EVE_CaldariPrimeAftermath.jpg")
         else if(result < 101)
           var y = new Discord.RichEmbed()
           .setColor("#6e61ae")
        .setTitle("Le déplacement se fait sans problème")
        .setImage("https://vignette.wikia.nocookie.net/masseffect/images/8/80/NormandySR2B.jpg/revision/latest?cb=20120424160325&path-prefix=fr")
        message.channel.sendMessage(y);
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




        

        


    if(message.content === préfix + "cqnqicq"){
        var help_embed = new Discord.RichEmbed()
        var min = Math.floor(Math.min(40));
        var max = Math.floor(Math.max(60)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var mins = Math.floor(Math.min(120));
        var maxs = Math.floor(Math.max(180)); 
        var x = Math.floor(Math.random() * (maxs - mins + 1) ) + mins;
        var result = Math.floor((Math.random() * 100) + 1);
        if(result < 70)
        var y = new Discord.RichEmbed()
        .setColor("#01FFDD")
        .addField("Le noble bloque l'attaque", y)
            else if (result < 90)
        var y = new Discord.RichEmbed()
        .setTitle("Le noble ésquive l'attaque")
        .setImage("http://vignette2.wikia.nocookie.net/onepunchman/images/4/4f/Sea_King_true_form.png/revision/latest?cb=20151124210414")
        .setColor("#01FFDD")
        else if (result < 101)
             var y = new Discord.RichEmbed()
        .setColor("#01FFDD")
        .addField("Le noble vous infliges une parade ne prennant donc aucun dégâts, si l'attaque est à distance il esquive juste", x)
        .setImage("https://www.japanator.com/ul/34526-annotated-anime-one-punch-man-episode-8/wanpanmen%20(5)-noscale.jpg")
        
        message.channel.sendMessage(y);
    }

    if(message.content === préfix + "Fuite"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 80)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("La fuite est inutile")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#16ff00")
        .setTitle("Vous réussissez à fuir")
        message.channel.sendMessage(y);
    }

    if(message.content === préfix + "Fuite amélioré"){
        var y = new Discord.RichEmbed()
           var result = Math.floor((Math.random() * 100) + 1);
        if(result < 60)
        var y = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("La fuite est inutile")
        else if (result < 101)
        var y = new Discord.RichEmbed()
        .setColor("#47c33b")
        .setTitle("Vous réussissez à fuir")
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

        

    if(message.content === préfix + "AIUVBEIVUBUIA"){
        var min = Math.floor(Math.min(10));
        var max = Math.floor(Math.max(30)); 
        var y = Math.floor(Math.random() * (max - min + 1) ) + min;
        var y = new Discord.RichEmbed()
        .addField("Vous minez et recevez", y + " :third_place: ")
        .setColor("#636766")
        message.channel.send(y);
    }


    if(message.content === préfix + "AFAIIABVAIV") {
    var result = Math.floor((Math.random() * 100) + 1);
    if(result < 40){
    var result = new Discord.RichEmbed() 
    .setTitle("C'est un temps parfait, aucun nuage à l'horizon")
    .setColor("#00ff04")
    .setImage("https://s2.best-wallpaper.net/wallpaper/1920x1080/1711/Anime-trees-sunset-clouds-nature-landscape_1920x1080.jpg")}
    else if(result < 60){
    var result = new Discord.RichEmbed() 
    .setTitle("Aujourd'hui le temps n'est pas idéal, la pluie est au rendez-vous")
    .setColor("#00afff")
    .setImage("https://media.discordapp.net/attachments/549628514303737856/581863637170389012/fantasy-art-water-nature-reflection-rain-morning-29273-wallhere.com_1.jpg?width=895&height=560")}
    else if(result < 70){
        var result = new Discord.RichEmbed() 
        .setTitle("Vous pouvez sentir quelque chose sur vos épaules...Et oui c'est bien de la neige")
        .setColor("#6faecb")
        .setImage("http://s1.1zoom.me/b5050/208/400825-sepik_1400x1050.jpg")}
    else if(result < 85){
    var result = new Discord.RichEmbed() 
    .setTitle("La brume se lève, votre vision devient trouble")
    .setColor("#818e94")
    .setImage("https://s2.best-wallpaper.net/wallpaper/1920x1200/1807/Forest-trees-haze-fog-morning_1920x1200.jpg")}
    else if(result < 101){
        var result = new Discord.RichEmbed() 
        .setTitle("Le vent se lève, attention as vous")
        .setImage("http://cache.desktopnexus.com/thumbseg/2408/2408928-bigthumbnail.jpg")}
    

    message.channel.send(result);

}


});



client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("?Help");
});

