const { MessageEmbed } = require("discord.js")

exports.run = (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Tolong Berikan Saran!!")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.id === "758165078968893490"))
    
    
    if(!channel) {
      return message.channel.send("Kirim Suggest Kamu Ke **<#758165078968893490>** Ya")
    }
    
    channel.send(`<@&758164558459830332>`)                                                
    let embed = new MessageEmbed()
    .setAuthor("Saran Baru Dari: " + message.author.tag, message.author.avatarURL())
    .setColor('#ff99dd')
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Mengirimkan Saran Kamu Ke **<#758165078968893490>**")
    
  }

exports.help = {
  name: "suggest",
  description: "Untuk Mengirimkan Saran Kamu",
  usage: "np!suggest [pesan]",
  example: "np!suggest saya ingin server ini maju"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}