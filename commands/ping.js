const discord = module.require('discord.js')

module.exports.run = async (bot, message) => {
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
}

module.exports.config = {
    name: "ping",
    description: "Pings the bot",
    usage: "?ping",
    aliases: []
  }