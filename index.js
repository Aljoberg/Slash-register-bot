const express = require('express');
const Discord = require("discord.js");
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
let dtb = require("@replit/database");
let db = new dtb() //hi

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const source = new Discord.MessageButton()
.setLabel("Source code")
.setStyle("LINK")
.setURL("https://example.com/")
client.on("interactionCreate", async interaction => {
  if(interaction.isCommand()) {
    if(interaction.commandName == "slash") {
      if(interaction.options.getSubcommand() == "setup") {
        let row = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setStyle("PRIMARY").setCustomId("modalclientidguild").setLabel("Client ID input"), source)
      //amogus
     let intr = interaction.reply({content: "Welcome to the setup! Now, I'll leave a button labeled \"source\" on every one of these messages so you can always check the source code in case you don't trust the bot ;)\n\nSo, what's your client ID? (the bot's ID)", components: [row], ephemeral:true})
      await db.set(`currentInteraction_${interaction.user.id}`, intr)  
      }
      if(interaction.options.getSubcommand() == "register") {
let m = new Discord.MessageButton()
      .setLabel("Guild commands")
      .setStyle("PRIMARY")
      .setCustomId("guild")
      let e = new Discord.MessageButton()
      .setLabel("Global commands")
      .setStyle("PRIMARY")
      .setCustomId("global")
        let clientid = await db.get(`clientid_${interaction.user.id}`)
        if(clientid == null) return interaction.reply({content: "You haven't completed your setup yet. Run `/slash setup` to set up your preferences!", ephemeral: true})
      interaction.reply({content: "Okay. What type of a slash command do you want?", components: [new Discord.MessageActionRow().addComponents(m, e)], ephemeral: true})
        
      }
      
    }
  /*  if(interaction.commandName == "setup") {
    let row = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setStyle("PRIMARY").setCustomId("modalclientidguild").setLabel("Client ID input"), source)
      //amogus
     let intr = interaction.reply({content: "Welcome to the setup! Now, I'll leave a button labeled \"source\" on every one of these messages so you can always check the source code in case you don't trust the bot ;)\n\nSo, what's your client ID? (the bot's ID)", components: [row], ephemeral:true})
      await db.set(`currentInteraction_${interaction.user.id}`, intr)  
    }*/
  }
  if(interaction.isButton()) {
    if(interaction.customId == "guild") {
      interaction.reply({content: "Alright, we're making a guild command. I'll use your preferences, do `/slash setup` to overwrite them and manage them! So, what's your command name and description?", ephemeral: true, components: [new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel("Command info input").setCustomId("commandinfo").setStyle("SUCCESS"))]})
      
    }
    if(interaction.customId == "commandinfo") {
      let modal = new Discord.Modal().addComponents(new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent().setCustomId("name").setLabel("What's the command name?").setMinLength(2).setMaxLength(15).setStyle("SHORT")), new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent().setCustomId("description").setLabel("What's the command description?").setMinLength(5).setMaxLength(30).setStyle("SHORT"))).setCustomId("infomodal").setTitle("Command info modal")
      await interaction.showModal(modal)
    }
    if(interaction.customId == "modalclientidguild") {
      let clientid = new Discord.TextInputComponent()
      .setCustomId("clientid")
      .setLabel("Type in your client ID!")
      .setMinLength(18)
      .setMaxLength(18)
      .setStyle("SHORT")
      let clientidrow = new Discord.MessageActionRow().addComponents(clientid)
      let modal = new Discord.Modal().addComponents(clientidrow).setTitle("Client ID input :D").setCustomId("modalclientidrealguild")
      await interaction.showModal(modal)
    }
if(interaction.customId == "guildidinput") {
  let guildid = new Discord.TextInputComponent()
      .setCustomId("guildid")
      .setLabel("Type in your guild ID!")
      .setMinLength(18)
      .setMaxLength(18)
      .setStyle("SHORT")
      let clientidrow = new Discord.MessageActionRow().addComponents(guildid)
      let modal = new Discord.Modal().addComponents(clientidrow).setTitle("Guild ID input :D").setCustomId("modalguildidsus")
      await interaction.showModal(modal)
};
    if(interaction.customId == "tokeninput") {
  let guildid = new Discord.TextInputComponent()
      .setCustomId("token")
      .setLabel("Type in your bot token!")
      .setMinLength(50)
      .setMaxLength(80)
      .setStyle("PARAGRAPH")
      let clientidrow = new Discord.MessageActionRow().addComponents(guildid)
      let modal = new Discord.Modal().addComponents(clientidrow).setTitle("Token input").setCustomId("modaltokeninpute")
      await interaction.showModal(modal)
    }
    if(interaction.customId == "optionButton") {
      //uh
      let guildid = new Discord.TextInputComponent()
      .setCustomId("optionname")
      .setLabel("Type in your option name")
      .setMinLength(3)
      .setMaxLength(10)
      .setStyle("SHORT")
      let clientidrow = new Discord.MessageActionRow().addComponents(guildid)
      let guildid2 = new Discord.TextInputComponent()
      .setCustomId("optiondescription")
      .setLabel("Type in your option description")
      .setMinLength(5)
      .setMaxLength(30)
      .setStyle("SHORT")
      let clientidrowee = new Discord.MessageActionRow().addComponents(guildid2)
      let modal = new Discord.Modal().addComponents(clientidrow, clientidrowee).setTitle("Option info input").setCustomId("modaloptioninput")
      await interaction.showModal(modal)
    }
  }
 
  if(interaction.isModalSubmit()) {
    if(interaction.customId == "modaloptioninput") {
      let name = interaction.fields.getTextInputValue("optionname")
      let desc = interaction.fields.getTextInputValue("optiondescription")
      let e = await db.get(`commands_${interaction.user.id}`)
      console.log(e)
      if(!e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options || e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options == null) e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options = []
      e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options.push({"name": `${name}`, "description": `${desc}`})
      await db.set(`commands_${interaction.user.id}`, e)
      let emm = await db.get(`commands_${interaction.user.id}`)
      await db.get(`currentMng_${interaction.user.id}`).edit(`**${await db.get(`currentEditingCommand_${interaction.user.id}`)} command management**\n\nYour command has now got:\nName:${await db.get(`currentEditingCommand_${interaction.user.id}`)},\nDescription: ${emm[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].description},\nOptions:${await db.get(`${`commands_${interaction.user.id}`}`).options}`)
    }
    if(interaction.customId == "infomodal") {
      let nm = interaction.fields.getTextInputValue("name")
      let e = await db.get(`commands_${interaction.user.id}`)
      console.log(e)
      if(e == null) e = {}
      let ebutdif = e;
      ebutdif[`${nm}`] = {"description": `${interaction.fields.getTextInputValue("description")}`}
      console.log(ebutdif)
      console.log("up was ebutrif")
      await db.set(`commands_${interaction.user.id}`, ebutdif)
      console.log(await db.get(`commands_${interaction.user.id}`))
      let optionMakeButton = new Discord.MessageButton().setLabel("Make a slash command option").setCustomId("optionButton").setStyle("SUCCESS")
      let choiceMakeButton = new Discord.MessageButton().setLabel("Make a choice on an option").setCustomId("choiceButton").setStyle("SUCCESS")
      let subcommandMakeButton = new Discord.MessageButton().setLabel("Make a subcommand!").setCustomId("subcommandButton").setStyle("SUCCESS")
      let exitandmake = new Discord.MessageButton().setLabel("Exit and make the command").setCustomId("exitAndMake").setStyle("SECONDARY")
      //hello there
      await db.set(`currentEditingCommand_${interaction.user.id}`, `${interaction.fields.getTextInputValue("name")}`)
      let roww = new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, subcommandMakeButton, exitandmake)
      await interaction.reply({content: `**${interaction.fields.getTextInputValue("name")} command management**\n\nYour command has now got:\nName:${interaction.fields.getTextInputValue("name")},\nDescription: ${interaction.fields.getTextInputValue("description")},\nOptions:${await db.get(`${`commands_${interaction.user.id}`}`).options}`, components: [roww], ephemeral:true}).then(async msg => {
        console.log(msg)
        await db.set(`currentMng_${interaction.user.id}`, msg)
      })
        
      
    }
    if(interaction.customId == "modalclientidrealguild") {
      let clientid = interaction.fields.getTextInputValue("clientid")
      console.log(clientid)
      await db.set(`clientid_${interaction.user.id}`, clientid.toString())
      //let intr = await db.get(`currentInteraction_${interaction.user.id}`)
      let btn = new Discord.MessageButton()
      .setLabel("Guild ID input")
.setStyle("PRIMARY").setCustomId("guildidinput")
      interaction.reply({content: "Ok I've got your client ID. What's your guild ID (in case you want to make guild commands)? If you're not planning on making guild commands, just type something random.", components: [new Discord.MessageActionRow(). addComponents (btn, source) ], ephemeral: true})
    }
    
if(interaction.customId == "modalguildidsus") {
  let guildid = interaction.fields.getTextInputValue("guildid");
await db.set(`guildid_${interaction.user.id}`, guildid);
  let btn = new Discord.MessageButton()
      .setLabel("Token input")
.setStyle("PRIMARY").setCustomId("tokeninput")
      interaction.reply({content: "Alright, I've got your guild ID. Now, lastly, input your bot token. Remember, the source button is always there to check ;)", components: [new Discord.MessageActionRow(). addComponents (btn, source) ], ephemeral: true})
}
    if(interaction.customId == "modaltokeninpute") {
      let tkn = interaction.fields.getTextInputValue("token");
await db.set(`botToken_${interaction.user.id}`, tkn)
       interaction.reply({content: `Thanks! You've now got:\n\`${await db.get(`clientid_${interaction.user.id}`)}\` - client (bot) ID,\n\`${await db.get(`guildid_${interaction.user.id}`)}\` - guild ID and\n\`${await db.get(`botToken_${interaction.user.id}`)}\` as your bot token. You should be able to do \`/slash register\` now!`, ephemeral: true})
    }
  }
})


client.login(process.env.token)