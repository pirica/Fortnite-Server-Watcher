const Discord = require("discord.js")

module.exports = client => { 
    console.log(`${client.user.username} is online`)
    console.log(`Your bot is in: ${client.guilds.cache.size} servers`)
    client.user.setActivity(`Fortnite's APIs`, {type: "WATCHING"});
}