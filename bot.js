const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("635192662840049740")
setInterval(function() {
channel.send(` one shot `);
}, 30)
})

client.login(process.env.BOT_TOKEN);