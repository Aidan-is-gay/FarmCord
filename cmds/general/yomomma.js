const Discord = require('discord.js')
const ym = require('yo-mamma').default
const insult = ym()
module.exports.run = async (client, message, args) => {
  const embed1 = new Discord.MessageEmbed()
    .setColor('#42f5ce')
    .setDescription(insult + ' 🤣')
  message.channel.send(embed1)
}
module.exports.info = {
  name: 'yomomma',
  aliases: ['ym']
}
