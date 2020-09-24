const Discord = require('discord.js'),
      db = require("quick.db");

exports.run = async (client, message, args) => {
  let data = db.get(`snipe.${message.guild.id}`);
  if (!data) return message.channel.send("I don't see any stored deleted message here.");
  
  let content = data.content,
      user = data.user,
      channel = data.channel;
  
  const embed = new Discord.MessageEmbed()
  .setColor("#ff99dd")
  .setTimestamp()
  .setTitle("Sniped Message")
  .setDescription(`\n> ${content}`)
  message.channel.send(embed);
}

exports.help = {
  name: "snipe",
  description: "Untuk Mengetahui Pesan Yang Telah Terhapus",
  usage: "np!snipe",
  example: "np!snipe"
};

exports.conf = {
  aliases: [],
  cooldown: 10
}
