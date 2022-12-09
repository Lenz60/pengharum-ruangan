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

//Get Random Int 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    const content = message.content;
    const bauRegex = /(^| |\"|\')bau( |$|\.|\,|!|\?|\:|\;|\"|\')/i
    const list = ["Repi", "Zahran", "Wajar", "Rapi", "Rapli"]

    const d20 = /(^| |\"|\')rd20( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(d20.test(content) || content.includes("796773828059201616")) { 
            message.reply(`Roll 1d20 : ${getRandomInt(20)}`)
            return;
        }
    const d12 = /(^| |\"|\')rd12( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(d12.test(content) || content.includes("796773828059201616")) { 
            message.reply(`Roll 1d12 : ${getRandomInt(12)}`)
            return;
        }
    const d10 = /(^| |\"|\')rd10( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(d10.test(content) || content.includes("796773828059201616")) { 
            message.reply(`Roll 1d10 : ${getRandomInt(10)}`)
            return;
        }
    const d8 = /(^| |\"|\')rd8( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(d8.test(content) || content.includes("796773828059201616")) { 
            message.reply(`Roll 1d8 : ${getRandomInt(8)}`)
            return;
        }
    const d6 = /(^| |\"|\')rd6( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(d6.test(content) || content.includes("796773828059201616")) { 
            message.reply(`Roll 1d6 : ${getRandomInt(6)}`)
            return;
        }
    const d4 = /(^| |\"|\')rd4( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(d4.test(content) || content.includes("796773828059201616")) { 
            message.reply(`Roll 1d4 : ${getRandomInt(4)}`)
            return;
        }

        const listbauRegex = /(^| |\"|\')list orang bau( |$|\.|\,|!|\?|\:|\;|\"|\')/i
        if(listbauRegex.test(content) || content.includes("796773828059201616")) { 
            message.reply(`List Orang Bau : ${list}`)
            return;
        }


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

//Spray the bot every one hour
(function psstHourly() {
	setTimeout(() => {
		client.guilds.forEach(guild => {
			let psstChannel = Math.floor(Math.random() * guild.channels.filter(c => c.type === "GUILD_TEXT").size);
			guild.channels.filter(c => c.type === "GUILD_TEXT").forEach((channel, i) => {
				if(i == psstChannel) {
					setTimeout(() => {
						channel.send("Psssssttt... 🌼").catch(console.error);
					}, Math.floor(Math.random() * 5001));
				}
			});
		});
		psstHourly();
	}, 3600000 - ((new Date()).getTime() % 3600000) + (
		// random offset antara -2.5 ke 2.5 detik
		Math.ceil(Math.random() * 5001) - 2500
	));
})();

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
