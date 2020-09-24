const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let channel = message.mentions.channels.first();

    if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "#ff99dd", description: "Nii-Chan Gaboleh Pake Command Ini Baka!!"}}).then(m => {
      setTimeout(() => {
        m.delete()
      }, 2000)
    })
  }

    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }   
    channel.send(args.slice(1).join(" "));
       message.channel.send("Pesan Terkirim")
       message.delete()
  }

exports.help = {
  name: "announce",
  description: "Untuk Mengabarkan Informasi Ke Luar Channel",
  usage: "np!announce [pesan]",
  example: "np!announce ada nitrod gratis"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}