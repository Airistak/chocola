const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    let StartDate = Date.now();
    const Wait = new MessageEmbed()
      .setColor("ff99dd")
      .setDescription(`Please Wait...`);
    message.channel.send(Wait).then(Msg => {
      let EndDate = Date.now();

      const embed = new MessageEmbed()
        .setColor("ff99dd")
        .setTitle(`Pong!`)
        .addField("Message Latency", `${Math.floor(StartDate - EndDate)}`)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`)
        .setTimestamp();
      Msg.delete();
      message.channel.send(embed);
    });
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