const { owner } = require('../../config.json')
module.exports.run = async (client, message, args) => {
    if(owner.includes(message.author.id))
    message.channel.send("Goodbye! 👋").then(process.exit);
    else return
}

module.exports.info = {
    name: "shutdown",
    aliases: [ "die" ]
}