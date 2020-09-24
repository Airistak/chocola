const { Client, Message } = require("discord.js")

exports.run = async (client, message, args) => {
  const memberBan = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!memberBan) {
    message.reply("Cara penggunaannya adalah:```np!ban <UserID|UserMention> [reason]```")
    return undefined
  }
  if (memberBan.hasPermission('MANAGE_ROLES')) return message.reply('anda tidak bisa mengeksekusi staff.')

  // Reason dari member
  const _reason = args.slice(1).join(' ')
  const reason = _reason.length > 0 ? _reason : 'Tidak ada alasan'
  const auditReason = `${reason} | ${message.author.tag}`

  if (!memberBan.bannable) {
    message.reply(`${memberBan.user.tag} tidak bisa ditendang, mungkin karena rolenya berada di atas bot ini.`)
  } else {
    memberBan.send(
      `Anda telah dibanned dari server **${message.guild.name}** oleh <@!${message.author.id}> dengan alasan:\n\`\`\`${reason}\`\`\``
    ).then(msg => {
      memberBan.ban(auditReason)
      message.channel.send(
      `${memberBan.user.tag} telah dibanned dari server ini dengan alasan:\n\`\`\`${reason}\`\`\``
      )
    })
  }
}

exports.help = {
  name: "ban",
  description: "Untuk Memban User Jika Melanggar Peraturan",
  usage: "np!ban [@user/id | alasan]",
  example: "np!ban @Chocola#1000 Send NSFW"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}
