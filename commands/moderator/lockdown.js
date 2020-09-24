const Discord = module.require("discord.js");

exports.run = async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}

exports.help = {
  name: "lockdown",
  description: "Untuk Mengabarkan Informasi Ke Luar Channel",
  usage: "np!announce [pesan]",
  example: "np!announce ada nitrod gratis"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}