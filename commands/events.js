const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fortnite-public-service-events-prod.ol.epicgames.com/fortnite/api/version", {
            headers: {
                'Authorization': `Bearer ${config.AccessToken}`
              },
        })
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setAuthor('@RiftSTW1 on twitter')
 .setTitle('Latest server Information:')
 .addField('Name', `${versionValue.moduleName}`)
 .addField('Build #', `${versionValue.build}`)
 .addField('Version', `${versionValue.version}`)
 .addField('Branch', `${versionValue.branch}`)
 .addField('Changelist #', `${versionValue.cln}`);
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "events",
    description: "",
    usage: "%events",
    aliases: []
}