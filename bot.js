const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjUwMDU2Mzg4Njc1ODk1Mjk4.XeF0AA.SXKiwtRXKHs2alLzNalPeMsmEAs'; // Token goes here.

client.login(token); // login the bot with your token.
 
client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.
 
    if(message.author.id === '487263157945892864')
    {
        message.channel.send("ga nin.");
    }
    
    // etc.... you get the idea.
 
 
});