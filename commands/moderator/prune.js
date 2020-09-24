const { Client, Message } = require("discord.js")

exports.run = async (client, message, args) => {
  const channel = message.channel
  let count = 0

  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "#ff99dd", description: "Nii-Chan Gaboleh Pake Command Ini Baka!!"}})
  }

  if (!args[0]) {
    message.reply(client.usage('Moderation::Prune'))
    return undefined
  } else {
    count = parseInt(args[0])
  }

  await message.delete()
  await channel.bulkDelete(count)
  await message.reply(`berhasil menghapus **${count} pesan** di channel ini.`)
    .then(m => {
      setTimeout(() => {
        m.delete()
      }, 3000)
    })
}

exports.help = {
  name: "prune",
  description: "Untuk Menghapus Pesan Dalam Skala Besar",
  usage: "np!prune [jumlah pesan]",
  example: "np!prune 100"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}