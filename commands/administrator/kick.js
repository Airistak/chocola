const { Client, Message } = require("discord.js")

exports.run = async (client, message, args) => {
  const memberKick = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!memberKick) {
    message.reply("Cara penggunaannya adalah:```np!kick <UserID|UserMention> [reason]```")
    return undefined
  }
  if (memberKick.hasPermission('MANAGE_ROLES')) return message.reply('anda tidak bisa mengeksekusi staff.')

  // Reason dari member
  const _reason = args.slice(1).join(' ')
  const reason = _reason.length > 0 ? _reason : 'Tidak ada alasan'
  const auditReason = `${reason} | ${message.author.tag}`

  if (!memberKick.kickable) {
    message.reply(`${memberKick.user.tag} tidak bisa ditendang, mungkin karena rolenya berada di atas bot ini.`)
  } else {
    memberKick.send(
      `Anda telah ditendang dari server **${message.guild.name}** oleh <@!${message.author.id}> dengan alasan:\n\`\`\`${reason}\`\`\``
    ).then(msg => {
      memberKick.kick(auditReason)
      message.channel.send(
      `${memberKick.user.tag} telah ditendang dari server ini dengan alasan:\n\`\`\`${reason}\`\`\``
      )
    })
  }
}

exports.help = {
  name: "kick",
  description: "Untuk Mengkick User Jika Melanggar Peraturan",
  usage: "np!kick [@user/id | alasan]",
  example: "np!kick @Chocola#1000 Send NSFW"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}
