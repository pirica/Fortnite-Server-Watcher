const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");


exports.run = (bot, message, args, level) => { // eslint-disable-line no-unused-vars
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    message.channel.send(`= STATISTICS =
  • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  • Uptime     :: ${duration}
  • Users      :: ${message.guild.memberCount}
  • Discord.js :: v${version}
  • Node       :: ${process.version}`, {code: "asciidoc"});
  };

module.exports.config = {
    name: "info",
    description: "Shows the bots stats",
    usage: "?info",
    aliases: []
  }