const discord = require('discord.js') // eslint-disable-line

exports.run = async (client, message, args) => {
  const memberBan = message.mentions.members.first()
  const reason = args.slice(1).join(' ')

  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "#ff99dd", description: "Nii-Chan Gaboleh Pake Command Ini Baka!!"}})
  }

  if (!memberBan) {
    message.reply(client.usage('Moderation::Kick'))
    return undefined
  }

  let messageReplay = `${memberBan.user.tag} telah dibanned`
  // Apabila ada alasan, tambahin alasannya
  if (reason.length > 0) {
    messageReplay += ` dengan alasan:\n\`\`\`${reason}\`\`\``
  }

  // Pertama, kirim dulu
  await message.reply(messageReplay)

  // Kedua, delay 1 detik terus boongin
  setTimeout(() => {
    message.channel.send('Tapi boong.')
  }, 5000)
}

exports.help = {
  name: "funnybanned",
  description: "Untuk Ngeprank Ban Orang",
  usage: "np!fban [user/ID | alasan]",
  example: "np!fban @Chocola#1000 Send NSFW"
}

exports.conf = {
  aliases: ["fban"],
  cooldown: 5
}