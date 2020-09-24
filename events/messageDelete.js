const db = require("quick.db");

module.exports = async (client, message) => {
  if (message.partial) await message.fetch();
  
  db.set(`snipe.${message.guild.id}.content`, message.content);
  
  db.set(`snipe.${message.guild.id}.user`, message.author.tag);
  
  setTimeout(function() {
    db.delete(`snipe.${message.guild.id}`);
  }, 60000)
}
