const Discord = require('discord.js'), db = require('quick.db');
const status = new db.table("AFKs");

exports.run = async (client, message, args) => {
let afk = await status.fetch(message.author.id);
const embed = new Discord.MessageEmbed().setColor("#ff99dd")
    
  if (!afk) {
    embed.setDescription(`**${message.author.tag}** now AFK.`)
    embed.setFooter(`Reason: ${args.join(" ") ? args.join(" ") : "AFK"}`)
    status.set(message.author.id, args.join(" ") || `AFK`);
  } else {
    embed.setDescription("You are no longer AFK.");
    status.delete(message.author.id);
  }
    
  message.channel.send(embed)
}

exports.help = {
  name: "afk",
  description: "Untuk Beristirahat",
  usage: "np!afk [alasan]",
  example: "np!afk capek hidup"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}
