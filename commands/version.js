const Discord = require('discord.js');
const { default: Axios } = require('axios');

module.exports.run = async (bot, message, args) => {
let getVersion = async () => {
  let response = await Axios.get('https://fortnite-public-service-stage.ol.epicgames.com/fortnite/api/version')
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
 message.channel.send({
    embed
});
return;
}

module.exports.config = {
  name: "version",
  description: "Grabs the latest version from the game",
  usage: "?version",
  aliases: []
}