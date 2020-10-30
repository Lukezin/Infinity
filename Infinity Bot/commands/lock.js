const Discord = require("discord.js");
const moment = require("moment");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (client, message, args) => {
  
message.delete();

if(!message.member.hasPermission("MUTE_MEMBERS")) return errors.noPerms(message, "MUTE_MEMBERS");

if(args[0] == null) {
  
const NoArgs = new Discord.RichEmbed()
  .setDescription(`**An error has occured**\n\n**►** Error: Not enough arguments\n**►** Arguments: if!lock <perm|temp|unlock> [time **IF** temp]\n\n***
  Certifique-se de executar o comando dentro do canal que deseja bloquear***`)
  .setColor("RED")
  .setFooter(`At ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)

message.channel.send(NoArgs).then(m => m.delete(5000))

}else if(args[0] == "temp") {
  
let time = args[1]

message.channel.overwritePermissions(message.guild.defaultRole.id, {
SEND_MESSAGES: false
}, "Canal desbloqueado.");

const Locked = new Discord.RichEmbed()
  .setTitle(`🔒**Canal bloqueado**🔒`)
  .addField("Lock Information", `**Channel** ${message.channel}\n**Duration** ${time}\n**Author** ${message.author.tag}`)
  .setColor("RED")
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
  
  message.channel.send(Locked).then(m => m.delete(5000));
  
const Unlock = new Discord.RichEmbed()
  .setTitle(`🔓**Canal Desbloqueado**🔓`)
  .addField("Unlock Information", `**Channel** ${message.channel}\n**Duration** ${time}\n**Author** ${client.user.tag}`)
  .setColor("GREEN")
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
  
setTimeout(function(){
message.channel.overwritePermissions(message.guild.defaultRole.id, {
SEND_MESSAGES: true
}, "Canal bloqueado.");
message.channel.send(Unlock).then(m => m.delete(5000));
}, ms(time));

}else if(args[0] == "unlock") {
  
message.channel.overwritePermissions(message.guild.defaultRole.id, {
SEND_MESSAGES: true
}, "Canal desbloqueado.");
  
const UnlockChannel = new Discord.RichEmbed()
  .setTitle(`🔓**Canal Desbloqueado**🔓`)
  .addField("Unlock Information", `**Channel** ${message.channel}\n**Author** ${message.author.tag}`)
  .setColor("GREEN")
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)

message.channel.send(UnlockChannel).then(m => m.delete(5000))
  
} else if(args[0] == "perm") {
  
message.channel.overwritePermissions(message.guild.defaultRole.id, {
SEND_MESSAGES: false
}, "Canal bloqueado.");
  
const Locked = new Discord.RichEmbed()
  .setTitle(`🔒**Canal bloqueado**🔒`)
  .addField("Lock Information", `**Channel** ${message.channel}\n**Duration** Permanent\n**Author** ${message.author.tag}`)
  .setColor("RED")
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
  
  message.channel.send(Locked).then(m => m.delete(5000));
  
}
  
}

module.exports.help = {
  name: "lockchat"
}