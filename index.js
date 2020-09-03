//Token (DO NOT EDIT)



//Const require section

const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');
const ytdl = require("ytdl-core");


//vars

var servers  = {};

//Prefix

const PREFIX = '!';


//What to put in the log
console.log('This bot is online.')

//Weather

module.exports = {
    name: "weather",
    description: "Checks a weather forecast",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Please specify a location')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}


//music


//Custom Status



//Ban/kick commands

//Kick


module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.kickable) return message.channel.send('This user can\'t be kicked. It is either because they are a mod/admin, or their highest role is higher than mine');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t kick yourself!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Member Kicked')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kicked', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(kickembed);


    }
}

//Ban

module.exports = {
    name: "ban",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


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
            message.reply('Yes, I am.');
            break;
    }

});

//msg commands


//info

bot.login(process.env.token);