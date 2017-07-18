const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('MzM2NTkzNTc4MjE2MTI4NTEz.DE6lvg.z-S2RU6DlujcnS6y5u3LFVz7TUY');