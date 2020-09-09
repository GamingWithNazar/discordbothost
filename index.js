//Token (DO NOT EDIT)



//Const require section

const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');
const ytdl = require("ytdl-core");


//vars

var servers = {};

//Prefix

const PREFIX = '!';


//What to put in the log
bot.on('ready', () => {
    console.log('This bot is online.');
    bot.user.setActivity('people say "!help".', {
        type: "WATCHING"
    }).catch(console.error);
})


//Weather




//music


//Custom Status



//Ban/kick commands

//Kick
bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'kick':


            const user = message.mentions.users.first();

            if (user) {
                const member = member.guild.member(user);

                if (member) {
                    member.kick('You were kicked from the server!').then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in the server.")
                }

            } else {
                message.reply('You need to give a mention of a person.')
            }
            break;
    }

});


//Ban



//Commands



bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.reply('pong!');
            break;
    }

});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'help':
            message.reply('Say "!who made this?" for info on who made this. Say "!can I add you?" for info if I can.   Say "!are you hosted 24/7?" and it will answer.   Say "!join" for the bot support and test server.   Say "!how are you?" to see how the bot is doing.    Say "!ping for a nice game of ping pong.');
            break;
    }

});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length);

    switch (args) {
        case 'who made this?':
            message.reply('nazar_minecraft#2538');
            break;
    }

});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length);

    switch (args) {
        case 'can I add you?':
            message.reply('No, sorry but if you help with the bot and show me you programming skills I might add you.');
            break;
    }

});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length);

    switch (args) {
        case 'join':
            message.reply('https://discord.gg/Y5bPFYf');
            break;
    }

});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length);

    switch (args) {
        case 'how are you?':
            message.reply('Hello, you probobly asked me this because you are interested in me. Well Im a bot currently In proggres in Microsoft Visual Studio Code. My developer, nazar_minecraft#2538 is currently in proggres of making me. And by the way to have an anwser to your question, yes Im am fine. Hope that answers everything. :)');
            break;
    }

});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length);

    switch (args) {
        case 'are you hosted 24/7?':
            message.reply('Yes, I am.');
            break;
    }

});

//msg commands


//info

bot.login(process.env.token);