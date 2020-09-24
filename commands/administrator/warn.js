const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const warns = require("quick.db")

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "#ff99dd", description: "Nii-Chan Gaboleh Pake Command Ini Baka!!"}}).then(m => {
      setTimeout(() => {
        m.delete()
      }, 5000)
    })
  }

    const wUser =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!wUser)
      return message.reply(
        "Cara penggunaannya adalah:```np!warn <UserID|UserMention> [reason]```"
      );

    let reason = args.join(" ").slice(22);

    if (!reason) reason = "Tanpa alasan yang jelas!";

    if (!warns[wUser.user.id])
      warns[wUser.user.id] = {
        warns: 1
      };
    else warns[wUser.user.id].warns++;

    fs.writeFile("./warninglist.json", JSON.stringify(warns, 0, 2), err => {
      if (err) console.log(err);
    });

    message.channel.send(
      `${wUser} berhasil diberi peringatan dengan alasan:\`\`\`${reason} | terhitung ${warns[wUser.user.id].warns} kali pelanggaran\`\`\``
    );
  

    if (warns[wUser.user.id].warns === 2) {
      // if nya harus === untuk yang sama {
      const muterole = message.guild.roles.cache.find(
        r => r.name === "Muted"
      );

      if (!muterole) return message.reply("Buat Role muted dulu...!");

      const mutetime = "12h";

      wUser.roles.add(muterole.id);

      message.channel.send(
        `Terhitung 2 kali pelanggaran, saatnya membungkam <@${wUser.id}> selama setengah hari`
      );

      setTimeout(() => {
        wUser.roles.remove(muterole.id);
        message.reply("Bungkaman telah dilepas");
      }, ms(mutetime));

    } else if (warns[wUser.user.id].warns === 3) {
      wUser.kick({ reason });

      message.channel.send(
        `Terhitung 3 kali pelanggaran, saatnya menendang <@${wUser.id}>, ini adalah hukuman pertama untukmu!`
      );

    } else if (warns[wUser.user.id].warns === 4) {
      const muterole1 = message.guild.roles.cache.find(r => r.name === "Muted");

      if (!muterole1) return message.reply("Buat Role muted dulu...!");

      const mutetime = "1d";

      wUser.roles.add(muterole1.id);

      message.channel.send(
        `Terhitung 4 kali pelanggaran, saatnya membungkam <@${wUser.id}> selama 1 hari`
      );

      setTimeout(() => {
        wUser.roles.remove(muterole1.id);
        message.reply("Bungkaman telah dilepas");
      }, ms(mutetime));


    } else if (warns[wUser.user.id].warns === 6) {
      wUser.ban({ reason });

      message.channel.send(
        `Terhitung 6 kali pelanggaran, saatnya membanned <@${wUser.id}>, ini adalah hukuman terakhir untukmu!`
      );
      message.delete()
    } else return;
  }

exports.help = {
  name: "warn",
  description: "Untuk Memwarn Seseorang Jika Melanggar Peraturan",
  usage: "np!warn [user/ID | alasan]",
  example: "np!warn @Chocola#1000 Send NSFW"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}