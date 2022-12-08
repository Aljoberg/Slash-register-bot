const express = require('express');
const Discord = require("discord.js");
const app = express();
process.on('unhandledRejection', async err => (await client.channels.fetch('1047257458835472536')).send(err.stack).catch(async() => (await client.channels.fetch('1047257458835472536')).send(err)))
process.on('uncaughtException', async err => (await client.channels.fetch('1047257458835472536')).send(err.stack).catch(async() => (await client.channels.fetch('1047257458835472536')).send(err)))
process.on('exit', async err => (await client.channels.fetch('1047257458835472536')).send(err).catch(async() => (await client.channels.fetch('1047257458835472536')).send(err)))
process.on('multipleResolves', async err => (await client.channels.fetch('1047257458835472536')).send(err.stack).catch(async() => (await client.channels.fetch('1047257458835472536')).send(err)))
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => { //leave that if ya want
  console.log('server started');
}); //hi
let dtb = require("@replit/database");

let datab = new (require("@replit/database"))(atob(process.env.databaseKey));

let db = datab; //hi
const client = new Discord.Client({intents: ["GUILDS"]});
const source = new Discord.MessageButton()
.setLabel("Source code")
.setStyle("LINK")
.setURL("https://github.com/Aljoberg/Slash-register-bot")
let optionMakeButton = new Discord.MessageButton().setLabel("Make a slash command option").setCustomId("optionButton").setStyle("SUCCESS")
      let choiceMakeButton = new Discord.MessageButton().setLabel("Make a choice on an option").setCustomId("choiceButton").setStyle("SUCCESS")
      let subcommandMakeButton = new Discord.MessageButton().setLabel("Make a subcommand!").setCustomId("subcommandButton").setStyle("SUCCESS")
        let deleteOption = new Discord.MessageButton().setLabel("Delete an option!").setCustomId("deleteOptionButton").setStyle("DANGER");
        let deleteChoice = new Discord.MessageButton().setCustomId("deleteChoiceButton").setLabel("Delete a choice from an option!").setStyle("DANGER");
      let exitandmake = new Discord.MessageButton().setLabel("Exit and make the command").setCustomId("exitAndMake").setStyle("SECONDARY")
let styleOptions = optionsobj => {
  let optns = {
    3: "string",
    4: "number",
    5: "boolean (true or false)",
    6: "user",
    7: "channel",
    8: "role",
    9: "everything mentionable",
    11: "attachment"
  };
  let strig = "\n";
  let choicesstrig = "the choices:\n"; //works works works works its okay lol also wanna remove the console logs? like all of 'em, done whaa- hehe
//anyways pushing to git
  if(!optionsobj || optionsobj.length == 0) return "None"
  for(let i = 0;i<optionsobj.length;i++) {
    let optionsobjec = optionsobj[i];
    if(!optionsobjec) continue;
    if(optionsobj[i]["choices"]) {
    for(let i2 = 0; i2 < optionsobj[i]["choices"].length;i2++){
      if(!optionsobj[i]["choices"][i2]) continue;
      choicesstrig += `\`${optionsobj[i]["choices"][i2]["name"]}\`, and has the value ${optionsobj[i]["choices"][i2]["value"]}`; //dont delte anytihng lol
    }// well uh, the thing is... more formatted code looks better and more understandable than uh,,,, this well yeah but idrc, just so it works nah jk but its good like this uh ok
  }
    strig += `\`${optionsobjec["name"]}\`, which's got the description \`${optionsobjec["description"]}\`, ${optionsobjec["required"] == true ? "is" : "isn't"} required, is the \`${optns[optionsobjec["type"]]}\` type and has ${optionsobjec["choices"] ? choicesstrig : "no choices"}.`
  }

  return strig != "\n" ? strig.replace("the choices:\n.", "no choices.") : "None"//im lazy to filter everything dude
}
client.on("interactionCreate", async interaction => {
  if(interaction.isCommand()) {
    if(interaction.commandName=="eval") {

    
  let e = ["738354468709597227"]
    if(!e.includes(interaction.user.id)) return interaction.reply({content: "This is only for the devs", ephemeral:true})
    const clean = async (text) => {
      
      if (typeof text === "string")
        return;
  
        else return text
    };
    let code = interaction.options.getString("input");
    if (!code) {
      return interaction.reply("Oi u forgot code");
    }
    try {
      let evalCode = code.includes(`await`)
        ? `;(async () => { ${code} })().then(output => output)`
        : code;
      let evaled = await clean(eval(evalCode));
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      let output;
      if (evaled !== undefined) {
        output = `\`\`\`js\n` + evaled + `\n\`\`\``;
      } else {
        output = `\`\`\`fix\nNo Output To Show.\n\`\`\``;
      }
      output = output.length > 1024 ? "```fix\nLarge Output\n```" : output;
      
      
      const embed = new Discord.MessageEmbed()
        .setAuthor({ name: "Eval", iconURL: interaction.user.avatarURL() })
        .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
        . addField ("Output", output)
        .setColor("#00ffee")
        .setTimestamp();
      interaction.reply({embeds: [embed], ephemeral: true});
    } catch (err) {
      const errorEmb = new Discord.MessageEmbed()
        .setAuthor({ name: "Eval", iconURL: interaction.user.avatarURL() })
        .setColor(`#ff0000`)
        .addField("Input", `\`\`\`js\n${code}\n\`\`\``)
        .addField("Error", `\`\`\`js\n${err}\n\`\`\``);
      interaction.reply({embeds: [errorEmb], ephemeral: true});
    }
    }
    if(interaction.commandName == "slash") {
      if(interaction.options.getSubcommand() == "info") {
        await interaction.reply({content: `Hello! You seem to be wondering, what this bot is for, or what the whole Discord Bot things are. So, to start from the beggining: a Discord bot is an integration, which can log into the API like you and perform some actions.\nYour next question would probably be: "Well, how to make one?"\nDiscord has a website for creating these: <https://discord.com/developers>. You can create bots and some presence stuff there.\nTo start, click "New Application" and input your bot's name there. Then, go to the "bot" section, click "add bot", pick an avatar if you like and click "reset token" (and copy it afterwards).\nBy the way, anyone can access your bot if they have the token, so be careful.\nThen, go to the "Oauth2" section and click the subcategory "url generator". Then, select the "bot" scope, add the bot's permissions, copy the URL at the bottom and paste it into your browser. Then, invite the bot and boom! It's in the server. You can now register the bot's commands (</slash register:985984380096901140> :wink:) and proceed to </slash whatnow:985984380096901140>.\n\n**This bot** was created using the API as well, using the wrapper [discord.js](<https://discord.js.org> "djs docs"). The source code is [here](<https://github.com/Aljoberg/Slash-register-bot> "The source"), the support server is [here](<https://discord.gg/YHJfQ4Enz9> "the support server").\nDeveloped by Aljo#9481, have fun using the bot! :D`, ephemeral: true})
      }
      if(interaction.options.getSubcommand() == "whatnow") {
        await interaction.reply({content: `Alright, so let's say you just registered your command. You want to use it, right? Well, Discord has a complicated API on that, but if I sum it up, you need the bot to either:\n- Be online and listening to the gateway events\n- Be configured on a webhook on your webapp.\nThese both seem complicated (the whole official documentation is [here](<https://discord.com/developers/docs> "click here for the docs")), but luckily, there's a lot of wrappers (most used ones being discord.js and discord.py) to help you code it. There's documentations on these as well ([discord.js](<https://discordjs.guide> "discord.js tutorial website"), [discord.py](<https://discordpy.readthedocs.io> "discord.py tutorial website")), so you can access them anytime. There's tutorials on how to use the slash commands there, or you can just google it. All you need is a compiler for node.js or python ;)\nIf you want an example, here's the discord.js one:\n\`\`\`js\nlet Discord = require("discord.js");\nlet client = new Discord.Client({intents: ["GUILDS"]});\nclient.on("interactionCreate", async interaction => {\n 
 if(interaction.commandName == "your command name here") await interaction.reply("Your reply content here");\n});\nclient.login("your bot's token here (use \`/slash info\` to get it, if you don't know how to)");\`\`\`\nHave fun!`, ephemeral: true});
      }
      if(interaction.options.getSubcommand() == "setup") {
        await interaction.reply({content: "Do you wish to delete your token or change any option?", components: [new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setCustomId("yeschangetoken").setLabel("Change token").setStyle("PRIMARY"), new Discord.MessageButton().setCustomId("notchangetoken").setStyle("PRIMARY").setLabel("Don't change token, run through the setup again"))], ephemeral: true});//notchangetoken
      }
      if(interaction.options.getSubcommand() == "register") {
        let sussuss = await db.get(`commands_${interaction.user.id}`)
        if(sussuss == null) sussuss = {}
        let lakaka = Object.keys(sussuss).length
        if(lakaka == 25) return interaction.reply({content: "You can only have 25 commands per account. We'll make an option to pay soon :) Thanks for supporting us!", ephemeral: true})
let m = new Discord.MessageButton()
      .setLabel("Guild commands")
      .setStyle("PRIMARY")
      .setCustomId("guild")
      let e = new Discord.MessageButton()
      .setLabel("Global commands")
      .setStyle("PRIMARY")
      .setCustomId("global")
        let clientid = await db.get(`clientid_${interaction.user.id}`)
        //interaction.deferReply(); 
        if(clientid == null) return interaction.reply({content: "You haven't completed your setup yet. Run `/slash setup` to set up your preferences!", ephemeral: true})
      let inte = await interaction.reply({content: "Okay. What type of a slash command do you want?", components: [new Discord.MessageActionRow().addComponents(m, e)], ephemeral: true, fetchReply: true})
     let bread = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel("Guild commands").setLabel("Guild commands")
      .setStyle("PRIMARY")
      .setCustomId("guild").setDisabled(true), new Discord.MessageButton().setLabel("Global commands").setLabel("Global commands")
      .setStyle("PRIMARY")
      .setCustomId("global").setDisabled(true));        let  q = interaction.channel.createMessageComponentCollector({componentType: "BUTTON", max: 1})
        q.on("collect", ie => {
          interaction.editReply({content: inte.content, components: [bread], ephemeral: true})
        })
      }
      if(interaction.options.getSubcommand() == "delete") {
        let cmds = await db.get(`commands_${interaction.user.id}`)
        if(cmds == null || !cmds || cmds == {}) return interaction.reply({content: "You don't have any commands. Go create one with `/slash register`! ;)", ephemeral: true})
        let brd = Object.keys(cmds).length
        let m = new Discord.MessageSelectMenu().setPlaceholder("Select a command!").setMinValues(1).setMaxValues(brd).setCustomId("deleteSelection")
        Object.keys(cmds).forEach(c => {
          let superil = cmds[c]["made"] == true ? `Made Command - ${c}` : `Not made Command - ${c}`;
          m.addOptions([{"label": superil, "value": `${c}`}])
          
        });
        
        if(brd == 0) return interaction.reply({content: "You've got no commands! Go create one using `/slash register` ;)", ephemeral: true})
        await interaction.reply({content: "Select commands to delete! ;)", ephemeral: true, components: [new Discord.MessageActionRow().addComponents(m)]})
      }
      if(interaction.options.getSubcommand() == "modify") {
        let cmds = await db.get(`commands_${interaction.user.id}`)
        if(cmds == null || !cmds || cmds == {}) return interaction.reply({content: "You don't have any commands. Go create one with `/slash register`! ;)", ephemeral: true})
        let brd = Object.keys(cmds).length
        let m = new Discord.MessageSelectMenu().setPlaceholder("Select a command!").setMinValues(1).setMaxValues(1).setCustomId("modifySelection")
        Object.keys(cmds).forEach(c => {
          let superil = cmds[c]["made"] == true ? `Made Command - ${c}` : `Not made Command - ${c}`;
          m.addOptions([{"label": superil, "value": `${c}`}])
          
        });
        
        if(brd == 0) return interaction.reply({content: "You've got no commands! Go create one using `/slash register` ;)", ephemeral: true})
        await interaction.reply({content: "Select commands to modify! ;)", ephemeral: true, components: [new Discord.MessageActionRow().addComponents(m)]})
      }
    }
  /*  if(interaction.commandName == "setup") {
    let row = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setStyle("PRIMARY").setCustomId("modalclientidguild").setLabel("Client ID input"), source)
      //amogus
     let intr = interaction.reply({content: "Welcome to the setup! Now, I'll leave a button labeled \"source\" on every one of these messages so you can always check the source code in case you don't trust the bot ;)\n\nSo, what's your client ID? (the bot's ID)", components: [row], ephemeral:true})
      await db.set(`currentInteraction_${interaction.user.id}`, intr)  
    }D*/
  }
  if(interaction.isButton()) {
    if(interaction.customId == "yeschangetoken") {
      await db.delete(`botToken_${interaction.user.id}`)
      interaction.reply({content:"Token deleted!", ephemeral: true})
      await db.set(`hasCompletedSetup_${interaction.user.id}`, false);
    }
    if(interaction.customId == "notchangetoken") {
      let row = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setStyle("PRIMARY").setCustomId("modalclientidguild").setLabel("Client ID input"), source)
      //amogus
     let intr = interaction.reply({content: "Welcome to the setup! Now, I'll leave a button labeled \"source\" on every one of these messages so you can always check the source code in case you don't trust the bot ;)\n\nSo, what's your client ID? (the bot's ID)", components: [row], ephemeral:true})
      await db.set(`currentInteraction_${interaction.user.id}`, intr);
    }
    if(interaction.customId == "deleteChoiceButton") {
      let kakakakakaka = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let rftgzhujikol=await db.get(`commands_${interaction.user.id}`)
      let optns = rftgzhujikol[kakakakakaka].options;
      if(!optns || optns == null) return await interaction.reply({content: "You don't have any options. Go create one!", ephemeral: true})

      let isnull = optns.every(elm => elm === null)
      if(!optns || optns == null || isnull == true) return await interaction.reply({content: "You don't have any options. Go create one with the button!", ephemeral: true});
      //let m = new Di
      let su = 0;
      Object.keys(optns).forEach(fofo => {
        //ok so you have 81 consol.logs ik maybe another time
        if(optns[fofo] != null) su = su + 1;
      })
      let m = new Discord.MessageSelectMenu().setCustomId("deleteoptionforchoicemenu").setMinValues(1).setMaxValues(1);
      
      Object.keys(optns).forEach(o => {

        if(optns[o] == null) console.log("it was null :c")
        else m.addOptions([{"label": `Option - ${optns[o].name}`, "value": `${optns[o].name}`}])
      })
      await interaction.update({content: "Select an option to delete the choice on!", ephemeral: true, components: [new Discord.MessageActionRow().addComponents(m)]})
    }
    if(interaction.customId == "deleteOptionButton") {
      let kakakakakaka = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let rftgzhujikol=await db.get(`commands_${interaction.user.id}`)
      let optns = rftgzhujikol[kakakakakaka].options

      if(!optns || optns == null) return await interaction.reply({content: "You don't have any options. Go create one!", ephemeral: true})
      let isnull = optns.every(elm => elm === null)
      if(!optns || optns == null || isnull == true) return await interaction.reply({content: "You don't have any options. Go create one with the button!", ephemeral: true});
      //let m = new Di
      let su = 0;
      Object.keys(optns).forEach(fofo => {
        if(optns[fofo] != null) su = su + 1;
      })
      let m = new Discord.MessageSelectMenu().setCustomId("deleteoptionmenu").setMinValues(1).setMaxValues(su);
      
      Object.keys(optns).forEach(o => { //nah its good
 // hey u dont have to if u dont want, its okay kk
        if(optns[o] == null) console.log("it was null :c") //leave these cuz its for the if
        else m.addOptions([{"label": `Option - ${optns[o].name}`, "value": `${optns[o].name}`}])
      })
      await interaction.update({content: "Select options to delete!", ephemeral: true, components: [new Discord.MessageActionRow().addComponents(m)]})
    }
    if(interaction.customId == "guild") {
      let ja = await db.get(`hasCompletedSetup_${interaction.user.id}`)
      if(ja == null || ja == false) return interaction.reply({content: "You didn't set your preferences up yet! Do that by typing `/slash setup` in your server!", ephemeral: true})
      let mtut = await db.get(`registerMsg_${interaction.user.id}`)
  
      
      /*interaction.channel.messages.fetch(mtut.id).then(realmtut => {
        realmtut.edit("hi")
        console.log(mtut.components)
        realmtut.edit({content: mtut.content, components: [realmtut.components[0]]})
      })*/
     let eyourmom = await interaction.reply({content: "Alright, we're making a guild command. I'll use your preferences, do `/slash setup` to overwrite them and manage them! So, what's your command name and description?", ephemeral: true, components: [new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel("Command info input").setCustomId("commandinfo").setStyle("SUCCESS"))], fetchReply: true})
      let r2 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel("Command info input").setCustomId("commandinfo").setStyle("SUCCESS").setDisabled(true));
      let q = interaction.channel.createMessageComponentCollector({componentType: 'BUTTON', max: 1})
q.on("collect", iqw => {
  interaction.editReply({content: eyourmom.content, components: [r2]})
})
    }
    //e
if(interaction.customId == "global") {
      let ja = await db.get(`hasCompletedSetup_${interaction.user.id}`)
      if(ja == null || ja == false) return interaction.reply({content: "You didn't set your preferences up yet! Do that by typing `/slash setup` in your server!", ephemeral: true})
      let mtut = await db.get(`registerMsg_${interaction.user.id}`)
      
     
      /*interaction.channel.messages.fetch(mtut.id).then(realmtut => {
        realmtut.edit("hi")
        console.log(mtut.components)
        realmtut.edit({content: mtut.content, components: [realmtut.components[0]]})
      })*/
     let eyourmom = await interaction.reply({content: "Alright, we're making a global command. I'll use your preferences, do `/slash setup` to overwrite them and manage them! So, what's your command name and description?", ephemeral: true, components: [new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel("Command info input").setCustomId("commandinfoglobal").setStyle("SUCCESS"))], fetchReply: true})
      let r2 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel("Command info input").setCustomId("commandinfoglobal").setStyle("SUCCESS").setDisabled(true));
      let q = interaction.channel.createMessageComponentCollector({componentType: 'BUTTON', max: 1})
q.on("collect", iqw => {
  interaction.editReply({content: eyourmom.content, components: [r2]})
})
}
//ee
    if(interaction.customId == "commandinfo") {
      let modal = new Discord.Modal().addComponents(new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent().setCustomId("name").setLabel("What's the command name?").setMinLength(2).setMaxLength(15).setStyle("SHORT")), new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent().setCustomId("description").setLabel("What's the command description?").setMinLength(5).setMaxLength(30).setStyle("SHORT").setRequired(true))).setCustomId("infomodalguild").setTitle("Command info modal")
      await interaction.showModal(modal)
    };
//global
        if(interaction.customId == "commandinfoglobal") {
      let modal = new Discord.Modal().addComponents(new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent().setCustomId("name").setLabel("What's the command name?").setMinLength(2).setMaxLength(15).setStyle("SHORT")), new Discord.MessageActionRow().addComponents(new Discord.TextInputComponent().setCustomId("description").setLabel("What's the command description?").setMinLength(5).setMaxLength(30).setStyle("SHORT").setRequired(true))).setCustomId("infomodalglobal").setTitle("Command info modal")
      await interaction.showModal(modal)
    }
//end 
    if(interaction.customId == "modalclientidguild") {
      let clientid = new Discord.TextInputComponent()
      .setCustomId("clientid")
      .setLabel("Type in your client ID!")
      .setMinLength(18)
      .setMaxLength(19)
      .setStyle("SHORT")
      .setRequired(true)
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
  .setRequired(true)
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
      .setRequired(true)
      
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
      .setRequired(true)
      let clientidrow = new Discord.MessageActionRow().addComponents(guildid)
      let guildid2 = new Discord.TextInputComponent()
      .setCustomId("optiondescription")
      .setLabel("Type in your option description")
      .setMinLength(5)
      .setMaxLength(30)
      .setStyle("SHORT")
      /*let spridol = new Discord.MessageActionRow().addComponents(guildid)
      let guildid2 = new Discord.TextInputComponent()
      .setCustomId("optiontype")
      .setLabel("Type in your option type! Refer to the placeholder")
      .setMinLength(5)
      .setMaxLength(30)
      .setStyle("SHORT")
      .setPlaceholder("1 for a string input,")*/
      //.setRequired(true)
      let clientidrowee = new Discord.MessageActionRow().addComponents(guildid2)
      let modal = new Discord.Modal().addComponents(clientidrow, clientidrowee).setTitle("Option info input").setCustomId("modaloptioninput")
      await interaction.showModal(modal)
    };
    
    if(interaction.customId == "choiceButton") {
      let menu = new Discord.MessageSelectMenu().setCustomId("choicemenu").setMaxValues(1).setMinValues(1).setPlaceholder("Select a slash option!")
      let cmds = await db.get(`commands_${interaction.user.id}`)

      if(!cmds[await db.get(`currentEditingCommand_${interaction.user.id}`)]["options"]) return interaction.reply({content: "You don't have any options. Add one with the button! ;)", ephemeral: true})
      for(let i = 0;i<cmds[await db.get(`currentEditingCommand_${interaction.user.id}`)]["options"].length;i++) {
        let key = cmds[await db.get(`currentEditingCommand_${interaction.user.id}`)].options[i]
        
        if(key == null) console.log("nul")
        else {
          let actualkey = key.name
        menu.addOptions([{label: `Option: ${actualkey.toString()}`, value: actualkey.toString()}])
        }
        
      }
      let rowww = new Discord.MessageActionRow().addComponents(menu)
      await interaction.update({content: "Okay, we're making a choice on an option. What option should the choice be on?", components: [rowww], ephemeral: true})
    }
    if(interaction.customId == "exitAndMake") {
      let cmds = await db.get(`commands_${interaction.user.id}`)
      let current = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let commandObj = cmds[`${current}`]
      interaction.update({content: "Okay, registering the command.", components: []})
      
      //await interaction.deferReply({ephemeral: true})
      let fetch = require("node-fetch");
      let body = {
            "name": `${current}`,
            "description": `${commandObj.description}`
          }
      if(commandObj.hasOwnProperty("options")) {
        body["options"] = commandObj.options
      }
      let dussyUrl = commandObj.guild == true ? `https://discord.com/api/v9/applications/${await db.get(`clientid_${interaction.user.id}`)}/guilds/${await db.get(`guildid_${interaction.user.id}`)}/commands` : `https://discord.com/api/v9/applications/${await db.get(`clientid_${interaction.user.id}`)}/commands`
      
      await fetch(dussyUrl, {
        "method": "POST",
        "headers": {
          "Authorization": `Bot ${await db.get(`botToken_${interaction.user.id}`)}`,
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
      }).catch(err => console.error(err)).then(async f => {
      await db.set(`commands_${interaction.user.id}`, cmds)
        if(f.status == 201 || f.status == 200) {
          
          let zuzu = await f.json();
        commandObj["id"] = `${zuzu.id}`;
        commandObj["made"] = true;
      cmds[`${current}`] = commandObj;
          interaction.editReply({content: "It worked! Try going on your slash commands interface.", ephemeral: true})
        } else {
          //let jso = await f.json();
         interaction.editReply({content: "It did not work ... here's the JSON: " + JSON.stringify(zuzu), ephemeral: true})
        }
      })
    }//oj
  }
 if(interaction.isSelectMenu()) {
   if(interaction.customId == "choicechoosemenutodeletehtem") {
     await interaction.deferReply({ephemeral: true});
     //braed 
     let hujtkgfgimfg = await db.get(`commands_${interaction.user.id}`);
     let dgunfduhnfdgujhn = await db.get(`currentEditingCommand_${interaction.user.id}`);
     interaction.values.forEach(async v => {
      
       
       let optionnum;
       try {
         for(let superIdol = 0;superIdol<hujtkgfgimfg[dgunfduhnfdgujhn]["options"].length;superIdol++) {
           if(hujtkgfgimfg[dgunfduhnfdgujhn]["options"][superIdol] == null) console.log("nul")
           else {
 //wat how do you even remember these i just do /shrug damn ok lol
         if(hujtkgfgimfg[dgunfduhnfdgujhn]["options"][superIdol]["name"] == `${await db.get(`currentEditingChoiceOption_${interaction.user.id}`)}`) optionnum = superIdol;
           }
           
       }
       } catch(err) {console.error(err)} finally {
         
       

       for(let lakakak = 0;lakakak < hujtkgfgimfg[dgunfduhnfdgujhn]["options"][optionnum]["choices"].length;lakakak++) {
         if(hujtkgfgimfg[dgunfduhnfdgujhn]["options"][optionnum]["choices"][lakakak] == null) console.log("null sadly")
         else {
           
         if(hujtkgfgimfg[dgunfduhnfdgujhn]["options"][optionnum]["choices"][lakakak]["name"] == `${v}`) {
           delete hujtkgfgimfg[dgunfduhnfdgujhn]["options"][optionnum]["choices"][lakakak];

          
         await interaction.followUp({content: `Deleted ${v}!`, ephemeral: true});
         }
         }
       }
       await db.set(`commands_${interaction.user.id}`, hujtkgfgimfg);
       }
       
     });
     setTimeout(async () => {
       let emm = await db.get(`commands_${interaction.user.id}`)
       let sussus = emm[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`]
      let currentCOmmand = await db.get(`currentEditingCommand_${interaction.user.id}`)
      
      let optionss =emm[currentCOmmand]
      let naeem = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let e69696969 = await db.get(`currentEditingCommand_${interaction.user.id}`)
          let toedit = `**${naeem} command management**\n\nYour command has now got:\nName:${e69696969},\nDescription: ${sussus.description},\nOptions: ` + /*require("util").inspect(optionss.options)*/styleOptions(optionss.options)
         
        await interaction.followUp({content: toedit, ephemeral: true, components: [new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, /*subcommandMakeButton, */exitandmake, deleteOption, deleteChoice)]})
     
     }, 2000)
     

     
   }
   if(interaction.customId == "deleteoptionforchoicemenu") {
     let vuvuv = interaction.values[0];
     //await interaction.deferReply({ephemeral: true});
     
     let cm = await db.get(`commands_${interaction.user.id}`);
     let cm2 = await db.get(`currentEditingCommand_${interaction.user.id}`);
     
      //let m = new Di
      
     for(let op1 = 0;op1<cm[cm2]["options"].length;op1++){
       let op2 = cm[cm2]["options"][op1]
       if(op2 == null) console.log("nul it was")
       else {
        
        
       if(op2.name == vuvuv) {
         let op = cm[cm2]["options"][op1]
         let optns = cm[cm2]["options"]
         if(true) {
           let isnull = optns.every(elm => elm === null)
      if(!optns || optns == null || isnull == true) return await interaction.reply({content: "You don't have any options. Go create one with the button!", ephemeral: true});
         let su = 0;
      Object.keys(optns).forEach(fofo => {
        
        if(optns[fofo] != null) su = su + 1;
      })
         let mn = new Discord.MessageSelectMenu().setMinValues(1).setMaxValues(su).setPlaceholder("Select choices!").setCustomId("choicechoosemenutodeletehtem")
         Object.values(op["choices"]).forEach(async cho => {
           mn.addOptions([{"label": `Choice - ${cho.name}`, "value": `${cho.name}`}]);
         });
           await db.set(`currentEditingChoiceOption_${interaction.user.id}`, vuvuv)
         await interaction.update({content: "Choose the choices to delete!", components: [new Discord.MessageActionRow().addComponents(mn)], ephemeral: true})
          
         }
     
       }  
       }
       
     }
   }
   if(interaction.customId == "deleteoptionmenu") {
     await interaction.deferReply({ephemeral: true});
     //braed 
     let hujtkgfgimfg = await db.get(`commands_${interaction.user.id}`);
     let dgunfduhnfdgujhn = await db.get(`currentEditingCommand_${interaction.user.id}`);
     interaction.values.forEach(async v => {

       for(let lakakak = 0;lakakak < hujtkgfgimfg[dgunfduhnfdgujhn]["options"].length;lakakak++) {
         if(hujtkgfgimfg[dgunfduhnfdgujhn]["options"][lakakak] == null) console.log("null sadly")
         else {

         if(hujtkgfgimfg[dgunfduhnfdgujhn]["options"][lakakak]["name"] == `${v}`) {
           delete hujtkgfgimfg[dgunfduhnfdgujhn]["options"][lakakak];
          
         await interaction.followUp({content: `Deleted ${v}!`, ephemeral: true});
         }
         }
       }
       await db.set(`commands_${interaction.user.id}`, hujtkgfgimfg);
     });
     setTimeout(async () => {
       let emm = await db.get(`commands_${interaction.user.id}`)
       let sussus = emm[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`]
      let currentCOmmand = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let optionss =emm[currentCOmmand]
      let naeem = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let e69696969 = await db.get(`currentEditingCommand_${interaction.user.id}`)
          let toedit = `**${naeem} command management**\n\nYour command has now got:\nName:${e69696969},\nDescription: ${sussus.description},\nOptions: ` + /*require("util").inspect(optionss.options)*/styleOptions(optionss.options)
         
        await interaction.followUp({content: toedit, ephemeral: true, components: [new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, /*subcommandMakeButton, */exitandmake, deleteOption, deleteChoice)]})
     
     }, 2000)
     

     
   }
   if(interaction.customId == "modifySelection") {
     
     await db.set(`currentEditingCommand_${interaction.user.id}`, interaction.values[0])
     await interaction.deferReply({ephemeral: true})
     let emm = await db.get(`commands_${interaction.user.id}`)
     let sussus = emm[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`]
      let currentCOmmand = await db.get(`currentEditingCommand_${interaction.user.id}`)
      
      let optionss =emm[currentCOmmand]
      let naeem = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let e69696969 = await db.get(`currentEditingCommand_${interaction.user.id}`)
          let toedit = `**${naeem} command management**\n\nYour command has now got:\nName:${e69696969},\nDescription: ${sussus.description},\nOptions: ` + /*require("util").inspect(optionss.options)*/styleOptions(optionss.options)
      //    if(!interaction.deferred || interaction.deferred == false) interaction.deferReply({ephemeral:true})
        await interaction.editReply({content: toedit, ephemeral: true, components: [new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, /*subcommandMakeButton, */exitandmake, deleteOption, deleteChoice)]});
   }
   if(interaction.customId == "deleteSelection") {
     await interaction.reply({content: "Trying to delete the commands! Be pacient ;)", ephemeral: true})
     let cm = await db.get(`commands_${interaction.user.id}`)
     interaction.values.forEach(async v => {
       
       
       if(cm[v]["made"] == true) {
         let fetch = require("node-fetch");
         
         let tofehf = cm[v]["guild"] == true ? `https://discord.com/api/v9/applications/${await db.get(`clientid_${interaction.user.id}`)}/guilds/${await db.get(`guildid_${interaction.user.id}`)}/commands/${cm[v]["id"]}` : `https://discord.com/api/v9/applications/${await db.get(`clientid_${interaction.user.id}`)}/commands/${cm[v]["id"]}`;
         
         await fetch(tofehf, {
           "method": "DELETE",
           "headers": {"Authorization": `Bot ${await db.get(`botToken_${interaction.user.id}`)}`}
         }).catch(err => console.error(err)).then(async rp => {
           
           //let sususususususussu = await rp.json();
           //console.log(sususususususussu)
           if(rp.ok) {
             interaction.followUp({content: `Successfully deleted ${v} command! (In the slash interface plus your commands inside this bot)`, ephemeral: true})
             delete cm[v];
             await db.set(`commands_${interaction.user.id}`, cm)
           } 
         })
         
       } else {
         delete cm[v];
         await interaction.followUp({content: `Successfully deleted ${v} command! (The command wasn't made yet so I only deleted it from your commands inside this bot)`, ephemeral: true})
       }
       
     });
     await db.set(`commands_${interaction.user.id}`, cm)
   }
   if(interaction.customId == "choicemenu") {
     let selec = interaction.values[0];
     await db.set(`currentChoiceSelection_${interaction.user.id}`, selec);
     let e = new Discord.TextInputComponent()
     .setCustomId("choicename")
     .setMinLength(3).setMaxLength(15).setLabel('What should be the choice\'s name?').setStyle("SHORT").setRequired(true);
     let e2us = new Discord.TextInputComponent()
     .setCustomId("choicevalue")
     .setMinLength(3).setMaxLength(15).setLabel('What should be the choice\'s value?').setStyle("SHORT").setRequired(true);
   let modal = new Discord.Modal().addComponents(new Discord.MessageActionRow().addComponents(e), new Discord.MessageActionRow().addComponents(e2us)).setCustomId("choicemodal").setTitle("Choice info input")
await interaction.showModal(modal);
   }
   
 }
  if(interaction.isModalSubmit()) {
    if(interaction.customId == "choicemodal") {
      let selec = await db.get(`currentChoiceSelection_${interaction.user.id}`)
     let cmds = await db.get(`commands_${interaction.user.id}`)
     for(let i = 0;i<cmds[await db.get(`currentEditingCommand_${interaction.user.id}`)]["options"].length;i++) {
       let key = cmds[await db.get(`currentEditingCommand_${interaction.user.id}`)].options[i]
       if(key == null) console.log("nudgmfuhn")
       else {
         if(key.name == selec) {
         if(!key.choices) key.choices = []
         key["choices"].push({"name": interaction.fields.getTextInputValue("choicename"), "value": interaction.fields.getTextInputValue("choicevalue")})
         await db.set(`commands_${interaction.user.id}`, cmds)
         let emm = await db.get(`commands_${interaction.user.id}`)
        //let mgu = interaction.channel.messages.fetch(db.get(`currentMng_${interaction.user.id}`))
      let sussus = emm[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`]
      let currentCOmmand = await db.get(`currentEditingCommand_${interaction.user.id}`)
      
      let optionss =emm[currentCOmmand]
      let naeem = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let e69696969 = await db.get(`currentEditingCommand_${interaction.user.id}`)
          let toedit = `**${naeem} command management**\n\nYour command has now got:\nName:${e69696969},\nDescription: ${sussus.description},\nOptions: ` + /*require("util").inspect(optionss.options)*/styleOptions(optionss.options)
         
        interaction.update({content: toedit, ephemeral: true, components: [new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, /*subcommandMakeButton, */exitandmake, deleteOption, deleteChoice)]})
       }
       }
       
     }
    }
    if(interaction.customId == "modaloptioninput") {
      let name = interaction.fields.getTextInputValue("optionname").toLowerCase();
      if(name.includes(" ")) return interaction.reply({content: "You've got spaces in your option name. That isn't good, so click the button again to fix it! :)", ephemeral: true});
      let desc = interaction.fields.getTextInputValue("optiondescription")
      let optionObj = {"name": `${name}`, "description": `${desc}`}
      let rw = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu().setCustomId("optiontypeselect").setMinValues(1).setMaxValues(1).setOptions([{
        label: "String", value: "3"
      }, {label: "Number", value: "4"}, {label: "Boolean (true or false)", value: "5"}, {label: "User", value: "6"}, {label: "Channel", value: "7"}, {label: "Role", value: "8"}, {label: "Everything mentionable", value: "9"}, {label: "Attachment", value: "11"}]))
      let rw2 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setStyle("SUCCESS").setLabel("Yes").setCustomId("optionRequiredTrue").setEmoji("✅"), new Discord.MessageButton().setCustomId("optionRequiredFalse").setLabel("No").setStyle("DANGER").setEmoji("❌"))
      

        await interaction.update({content: "Should the option be required or no?", ephemeral: true, components: [rw2]})
     
        let eueueeueueueu = interaction.channel.createMessageComponentCollector({max: 1, componentType: "BUTTON"})
      eueueeueueueu.on("collect", async btni => {
        let e = await db.get(`commands_${interaction.user.id}`)
        if(!e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options) e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options = []
        if(btni.customId == "optionRequiredTrue") {
          optionObj["required"] = true;
        
        e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options.push(optionObj)
        } else {
          optionObj["required"] = false;
        let e = await db.get(`commands_${interaction.user.id}`)
        e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options.push(optionObj)
        }
        
        await interaction.editReply({content: "Thanks!", ephemeral: true, components: []})
        //await interaction.deferUpdate({ephemeral: true});
        await interaction.followUp({content: "Select the option type!", components: [rw], ephemeral: true})
      })
      
   let superidolll   =interaction.channel.createMessageComponentCollector({max: 1, componentType: "SELECT_MENU"});
      superidolll.on("collect", async clt => {
        optionObj["type"] = clt.values[0];
        let e = await db.get(`commands_${interaction.user.id}`)
     
      let optn = e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options
      if(!optn) {
          if(!e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options || e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options == null) e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options = []
      e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options.push(optionObj)
      await db.set(`commands_${interaction.user.id}`, e)
      let emm = await db.get(`commands_${interaction.user.id}`)
      let db2 = require("quick.db")
        //let mgu = interaction.channel.messages.fetch(db.get(`currentMng_${interaction.user.id}`))
      let sussus = emm[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`]
      let currentCOmmand = await db.get(`currentEditingCommand_${interaction.user.id}`)
      
      let optionss =emm[currentCOmmand]
      let naeem = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let e69696969 = await db.get(`currentEditingCommand_${interaction.user.id}`)
          let toedit = `**${naeem} command management**\n\nYour command has now got:\nName:${e69696969},\nDescription: ${sussus.description},\nOptions: ` + /*require("util").inspect(optionss.options)*/styleOptions(optionss.options)
      
    //   if(!interaction.deferred || interaction.deferred == false) interaction.deferReply({ephemeral:true});
await interaction.editReply({content: "Thanks!", ephemeral: true, components: []})
        await interaction.followUp({content: toedit, ephemeral: true, components: [new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, /*subcommandMakeButton, */exitandmake, deleteOption, deleteChoice)]})
      
      } else {
      for(let iu = 0;iu<optn.length;iu++) {
         
        if(optn[iu] != null && optn[iu].name == name) return interaction.replied ? await interaction.editReply({content: "You've already got that option name on another existing option. Make sure to change it! ;)", ephemeral: true}) : await interaction.editReply({content: "You've already got that option name on another existing option. Make sure to change it! ;)", ephemeral: true})
      }
       // if(!interaction.deffered) {
          if(!e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options || e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options == null) e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options = []
      e[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`].options.push(optionObj)
      await db.set(`commands_${interaction.user.id}`, e)
      let emm = await db.get(`commands_${interaction.user.id}`)
      let db2 = require("quick.db")
        //let mgu = interaction.channel.messages.fetch(db.get(`currentMng_${interaction.user.id}`))
      let sussus = emm[`${await db.get(`currentEditingCommand_${interaction.user.id}`)}`]
      let currentCOmmand = await db.get(`currentEditingCommand_${interaction.user.id}`)
      
      let optionss =emm[currentCOmmand]
      let naeem = await db.get(`currentEditingCommand_${interaction.user.id}`)
      let e69696969 = await db.get(`currentEditingCommand_${interaction.user.id}`)
          let toedit = `**${naeem} command management**\n\nYour command has now got:\nName:${e69696969},\nDescription: ${sussus.description},\nOptions: ` + /*require("util").inspect(optionss.options)*/styleOptions(optionss.options)
      //    if(!interaction.deferred || interaction.deferred == false) interaction.deferReply({ephemeral:true})
await interaction.editReply({content: "Thanks!", ephemeral: true, components: []})
        await interaction.followUp({content: toedit, ephemeral: true, components: [new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, /*subcommandMakeButton, */exitandmake, deleteOption, deleteChoice)]});
          
      
      }
      })
    }
    if(interaction.customId == "infomodalguild") {
      let nm = interaction.fields.getTextInputValue("name").toLowerCase()
      if(nm.includes(" ")) return interaction.reply({content: "You inputed the command with a **space**. Please remove it and do the command again :)", ephemeral: true})
      let e = await db.get(`commands_${interaction.user.id}`)
      
      if(e == null) e = {}
      let ebutdif = e;
      ebutdif[`${nm}`] = {"description": `${interaction.fields.getTextInputValue("description")}`, "guild": true, "made": false}
      
      
      await db.set(`commands_${interaction.user.id}`, ebutdif)

      //hello there
      await db.set(`currentEditingCommand_${interaction.user.id}`, `${interaction.fields.getTextInputValue("name").toLowerCase()}`)
      let roww = new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, /*subcommandMakeButton, */exitandmake, deleteOption, deleteChoice)
      await interaction.reply({content: `**${interaction.fields.getTextInputValue("name")} command management**\n\nYour command has now got:\nName:${interaction.fields.getTextInputValue("name").toLowerCase()},\nDescription: ${interaction.fields.getTextInputValue("description")},\nOptions:${await db.get(`${`commands_${interaction.user.id}`}`).options}`, components: [roww], ephemeral:true})
      interaction.fetchReply().then(async inte => {
        
        //await db.set(`currentMng_${interaction.user.id}`, {interaction["id"], })
      })
    };
      //suske
    if(interaction.customId == "infomodalglobal") {
      let nm = interaction.fields.getTextInputValue("name").toLowerCase()
      if(nm.includes(" ")) return interaction.reply({content: "You inputed the command with a **space**. Please remove it and do the command again :)", ephemeral: true})
      let e = await db.get(`commands_${interaction.user.id}`)
      
      if(e == null) e = {}
      let ebutdif = e;
      ebutdif[`${nm}`] = {"description": `${interaction.fields.getTextInputValue("description")}`, "guild": false, "made": false}

      await db.set(`commands_${interaction.user.id}`, ebutdif)

      //hello there
      await db.set(`currentEditingCommand_${interaction.user.id}`, `${interaction.fields.getTextInputValue("name").toLowerCase()}`)
      let roww = new Discord.MessageActionRow().addComponents(optionMakeButton, choiceMakeButton, /*subcommandMakeButton, */exitandmake, deleteOption, deleteChoice)
      await interaction.reply({content: `**${interaction.fields.getTextInputValue("name")} command management**\n\nYour command has now got:\nName:${interaction.fields.getTextInputValue("name").toLowerCase()},\nDescription: ${interaction.fields.getTextInputValue("description")},\nOptions:${await db.get(`${`commands_${interaction.user.id}`}`).options}`, components: [roww], ephemeral:true})
      interaction.fetchReply().then(async inte => {
        
        //await db.set(`currentMng_${interaction.user.id}`, {interaction["id"], })
      })
    }
//suske #
    if(interaction.customId == "modalclientidrealguild") {
      let clientid = interaction.fields.getTextInputValue("clientid")
      let fetch = require("node-fetch");
      await fetch(`https://discord.com/api/v9/users/${clientid}`, {
        "method": "GET",
        "headers": {"authorization": `Bot ${process.env.token}`}
      }).then(async j => {
        let suske = await j.json()
        
        if(suske.bot == false || j.status != 200) return interaction.reply({content: "You've inputted the wrong client ID. Double check! ;)",ephemeral: true})
        else {
          
      await db.set(`clientid_${interaction.user.id}`, clientid.toString())
      //let intr = await db.get(`currentInteraction_${interaction.user.id}`)
      let btn = new Discord.MessageButton()
      .setLabel("Guild ID input")
.setStyle("PRIMARY").setCustomId("guildidinput")
      interaction.reply({content: "Ok I've got your client ID. What's your guild ID (in case you want to make guild commands)? If you're not planning on making guild commands, just type something random.", components: [new Discord.MessageActionRow(). addComponents (btn, source) ], ephemeral: true})
        }
      })
      
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
      let fetchus = require("node-fetch");
      await fetchus("https://discord.com/api/v9/users/@me/guilds", {
        "method": "GET",
        "headers": {"Authorization": `Bot ${tkn}`}
      }).then(async suss => {
        
        if(suss.status == 401) return interaction.reply({content: "You've inputted a wrong token! Double check ;)", ephemeral: true})
        else {
          await db.set(`botToken_${interaction.user.id}`, tkn)
       interaction.reply({content: `Thanks! You've now got:\n\`${await db.get(`clientid_${interaction.user.id}`)}\` - client (bot) ID,\n\`${await db.get(`guildid_${interaction.user.id}`)}\` - guild ID and\n\`${await db.get(`botToken_${interaction.user.id}`)}\` as your bot token. You should be able to do \`/slash register\` now!`, ephemeral: true})
          await db.set(`hasCompletedSetup_${interaction.user.id}`, true)
        }
      })

    }
  }
})
client.on("guildCreate", async g => {
  (await client.channels.fetch("1047257458835472536")).send(`We got invited to ${g.name} with ${g.memberCount} members :D`)
});

client.on("guildDelete", async g => {
  (await client.channels.fetch("1047257458835472536")).send(`We got kicked from ${g.name} with ${g.memberCount} members :(`)
})

client.on("ready", () => console.log("im ready"))
client.on("ready", async () => {
  console.log(`${client.user.tag} is redy and is in ${client.guilds.cache.size} servers ඞ`);
  client.user.setActivity("the newly created commands", {type: "WATCHING"});

});
client.login(process.env.token)