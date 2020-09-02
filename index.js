//Token (DO NOT EDIT)



//Const require section

const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");

const ytdl = require('quick.db')

//vars

var servers  = {};

//Prefix

const PREFIX = '!';


//What to put in the log

bot.on('ready', () =>{
    console.log('This bot is online.');
});

//Weather





//music


//Custom Status


module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    if(!message.author.id === "710971859109281822") {
      return message.channel.send("This command can only be used by owner")
    }
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
   await message.channel.send("Updated the bot status")
    process.exit(1);
    
  }
}
//Commands

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!');
            break;
    }

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help':
            message.reply('Say "!who made this?" for info on who made this. Say "!can I add you?" for info if I can.   Say "!are you hosted 24/7?" and it will answer.   Say "!join" for the bot support and test server.   Say "!how are you?" to see how the bot is doing.    Say "!ping for a nice game of ping pong.');
            break;
    }

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length);

    switch(args){
        case 'who made this?':
            message.reply('nazar_minecraft#2538');
            break;
    }

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length);

    switch(args){
        case 'can I add you?':
            message.reply('No, sorry but if you help with the bot and show me you programming skills I might add you.');
            break;
    }

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length);

    switch(args){
        case 'join':
            message.reply('https://discord.gg/Y5bPFYf');
            break;
    }

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length);

    switch(args){
        case 'how are you?':
            message.reply('Hello, you probobly asked me this because you are interested in me. Well Im a bot currently In proggres in Microsoft Visual Studio Code. My developer, nazar_minecraft#2538 is currently in proggres of making me. And by the way to have an anwser to your question, yes Im am fine. Hope that answers everything. :)');
            break;
    }

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length);

    switch(args){
        case 'are you hosted 24/7?':
            message.reply('Yes I am, but only run for 22 days, then I have a large downtime.');
            break;
    }

});

//msg commands


//info

bot.login(process.env.token);