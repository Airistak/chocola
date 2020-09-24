const { Client, Message } = require("discord.js")

exports.run = (client, message, args) => {
  const startTime = Date.now()
  message.channel.send(':ping_pong: Wait for it...')
    .then(msg => {
      const diff = (Date.now() - startTime).toLocaleString()
      const api = client.ping.toFixed(0)
      msg.edit(`Latency: ${diff} ms | API: ${api} ms.`)
    })
}

exports.help = {
  name: "ping",
  description: "Untuk Mengetahui Ping Bot",
  usage: "np!ping",
  example: "np!ping"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}