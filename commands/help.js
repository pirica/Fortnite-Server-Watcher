const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const ServerLists = new Discord.MessageEmbed()
        .setTitle('Server Lists')
        .addField('?version', 'Grabs the latest version from fortnite-public-service-stage.ol.epicgames.com')
        .addField('?testserver', 'Grabs the latest version from fortnite-public-service-devplaytest-prod12.ol.epicgames.com')
        .addField('?qq', 'Grabs the latest version from fortnite-service-predeploy.fortnite.qq.com')
        .addField('?ioscert', 'Grabs the latest version from fortnite-public-service-ioscert-prod.ol.epicgames.com')
        .addField('?testb', 'Grabs the latest version from fortnite-public-service-extqareleasetestingb-prod.ol.epicgames.com')
        .addField('?events', 'Grabs the latest version from fortnite-public-service-events-prod.ol.epicgames.com')
        .addField('?athena-prod', 'Grabs the latest version from fortnite-public-service-athena-prod.ol.epicgames.com')
        .setTimestamp()

        const General = new Discord.MessageEmbed()
        .setTitle('General')
        .addField('?info', "Grabs the bots info")
        .addField('?ping', 'Grabs the bots ping')
        .setTimestamp()

        const pages = [
                ServerLists,
                General
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }

module.exports.config = {
    name: "help",
    description: "Show's commands",
    usage: "?help",
    aliases: []
  }