const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const Auth = require('../libs/auth.js');
const config = require('../config.json');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let token = await auth.login(null, '');
    let getVersion = async () => {
        let response = await Axios.get("https://fortnite-public-service-extqareleasetestingb-prod.ol.epicgames.com/fortnite/api/version", {
            headers: {
                'Authorization': `Bearer ${token}`
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
    name: "releasetestb",
    description: "",
    usage: "%releasetestb",
    aliases: ['testb']
}