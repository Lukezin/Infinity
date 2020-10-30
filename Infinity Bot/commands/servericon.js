const Discord = require("discord.js"); 

exports.run = (client, message, args) => { 


    let embed2 = new Discord.MessageEmbed()

    .setColor('AQUA')
    .setTitle(`Icone ddo servidor`)
    .setDescription("**[Baixe-a](" + message.guild.iconURL + ")**")
    .setImage(message.guild.iconURL)
    .setColor('#36393e')

    message.channel.send(embed2)

}

exports.help = { 
    name: 'servericon'
}