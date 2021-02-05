const Discord = require('discord.js');
const { default: Axios } = require('axios');

module.exports.run = async (bot, message, args) => {
let getVersion = async () => {
  let response = await Axios.get('https://fortnite-public-service-publictest-prod12.ol.epicgames.com/fortnite/api/version')
  let version = response.data;
  return version
}
let versionValue = await getVersion()
 console.log(versionValue)
 message.reply(`The latest public test server fortnite build is: \n ${versionValue.version} with the build date of: ${versionValue.buildDate}`)
}

module.exports.config = {
  name: "publictestserver",
  description: "Grabs the test server information from the game",
  usage: "?publictestserver",
  aliases: []
}