const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as Codes List .#2551!`);
});

const prefix = "$"

client.on("message", message => {
    if (message.content.startsWith(prefix + "obc")) { ///@» MHSTR 🇮🇶#1119
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» MHSTR 🇮🇶#1119
  let args = message.content.split(" ").slice(1); ///@» MHSTR 🇮🇶#1119
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => { //@» MHSTR 🇮🇶#1119
  m.send(`${argresult}\n ${m}`); ///@» MHSTR 🇮🇶#1119
  }) /// @» MHSTR 🇮🇶#1119
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete(); ///@» MHSTR 🇮🇶#1119
  }; ///@» MHSTR 🇮🇶#1119
  }); //// @» MHSTR 🇮🇶#1119
 
 
 
  client.on("message", message => {
  ///@» MHSTR 🇮🇶#1119
              if (message.content.startsWith(prefix + "bc")) { //@» MHSTR 🇮🇶#1119
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» MHSTR 🇮🇶#1119
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); // @» MHSTR 🇮🇶#1119
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`); //@» MHSTR 🇮🇶#1119
  }) ///@» MHSTR 🇮🇶#1119
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `);
   message.delete(); //@» MHSTR 🇮🇶#1119
  };     /// @» MHSTR 🇮🇶#1119
  }); ///@» MHSTR 🇮🇶#1119
  
  
  client.login(process.env.BOT_TOKEN5);
