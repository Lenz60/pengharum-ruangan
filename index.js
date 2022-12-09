const { Client, GatewayIntentBits } = require("discord.js");
const ChannelID = require("./ChannelID");
require("dotenv").config();


const client = new Client({
    disableMentions: "everyone",
    restTimeOffset: 0,
    intents: [ GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent ],
});

client.login(process.env.TOKEN);

client.on("warn", (info) => console.log(info));
client.on("error", console.error);
client.on("ready", () => {
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    console.log(`${client.user.username} ready!`);
    channel.send('Pengharum Ruangan Online🌼🌼');
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    const content = message.content;
    const bauRegex = /(^| |\"|\')bau( |$|\.|\,|!|\?|\:|\;|\"|\')/i

    if(bauRegex.test(content)) {
        const arkaRegex = /(^| |\"|\')arka( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(arkaRegex.test(content) || content.includes("796773828059201616")) { // Easter egg for Arka Zelaphiel.
            message.reply("Arka bau.\n\nPsssssttt... 🌼\nPsssssttt... 🌼\nPsssssttt... 🌼\nPsssssttt... 🌼\nPsssssttt... 🌼");
            return;
        }

        const senRegex = /(^| |\"|\')(sen{1,}a?)( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(senRegex.test(content) || content.toLowerCase().includes("mentega") || content.includes("349956953252036622")) {
            message.reply("Udah wangy, ga perlu pssst. ❤️");
            return;
        }

        const randomNumber =  Math.floor(Math.random() * 30);
        if(randomNumber == 5) {
            message.reply('Bentar, refill dulu bentar... 😵');
        } else {
            message.reply('Psssssttt... 🌼');
        }
    }
});

process.stdin.resume();
//Close Message When the bot is turned off or killed the process
//Delay close for 3 seconds function
const timeoutclose = setTimeout(function(){console.log('3 seconds delay when closed')},3000);
//Sleep for ctrl+C
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
process.on('SIGHUP', function(){
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    channel.send('Pengharum Ruangan Offline');
})
process.on('SIGINT', function () {
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    channel.send('Pengharum Ruangan Offline');
  sleep(3000).then(() => {
    process.exit(0);
  });
});
process.on('SIGTERM', function(){
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    channel.send('Pengharum Ruangan Offline');
})
process.on('SIGKILL', function(){
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    channel.send('Pengharum Ruangan Offline');
})
process.on('SIGUSR1', async function(){
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    channel.send('Pengharum Ruangan Offline');
})
process.on('SIGUSR2', async function(){
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    channel.send('Pengharum Ruangan Offline');
})
process.on('exit', function(){
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    channel.send('Pengharum Ruangan Offline');
})
process.on('uncaughtException', async function(){
    const channel = client.channels.cache.get(ChannelID.GeneralID);
    channel.send('Pengharum Ruangan Offline');
})
