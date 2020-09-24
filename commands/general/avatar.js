const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  
  const embed = new Discord.MessageEmbed()
  .setColor("#ff99dd")
  .setImage(avatar)
  
  return message.channel.send(embed);
}

exports.help = {
  name: "avatar",
  description: "Untuk Melihat Avatar Seseorang",
  usage: "np!avatar [@user | user ID]",
  example: "np!avatar @ray#1337"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}
