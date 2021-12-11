const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Julie = require('../events');
const Config = require('../config');
const CH_AD = require('./admin');
const Language = require('../language');
const Lang = Language.getString('admin');
const jul = Language.getString('julie');
const mut = Language.getString('mute');
const fs = require('fs');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Julie.addCommand({pattern: 'rens ?(.*)', onlyGroup: false, fromMe: true,desc: Julie}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'Code Exited',MessageType.text);

    let response = await message.client.sendMessage(message.jid,'group name changed to  ```' + match[1] + '```' ,MessageType.text);

    await message.client.deleteMessage (jid, {id: response.messageID, remoteJid: message.jid, fromMe: true})
    
}));

Julie.addCommand({pattern: 'rens ?(.*)', onlyGroup: false, fromMe: true,desc: Julie}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'Code Exited',MessageType.text);

    let response = await message.client.sendMessage(message.jid,'group name changed to  ```' + match[1] + '```' ,MessageType.text);

    await message.client.deleteMessage (jid, {id: response.messageID, remoteJid: message.jid, fromMe: true})
    
}));

Julie.addCommand({pattern: 'rens ?(.*)', onlyGroup: false, fromMe: true,desc: Julie}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'Code Exited',MessageType.text);

    let response = await message.client.sendMessage(message.jid,'group name changed to  ```' + match[1] + '```' ,MessageType.text);

    await message.client.deleteMessage (jid, {id: response.messageID, remoteJid: message.jid, fromMe: true})
    
}));

Julie.addCommand({pattern: 'rens ?(.*)', onlyGroup: false, fromMe: true,desc: Julie}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'Code Exited',MessageType.text);

    let response = await message.client.sendMessage(message.jid,'group name changed to  ```' + match[1] + '```' ,MessageType.text);

    await message.client.deleteMessage (jid, {id: response.messageID, remoteJid: message.jid, fromMe: true})
    
}));

Julie.addCommand({pattern: 'rens ?(.*)', onlyGroup: false, fromMe: true,desc: Julie}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'Code Exited',MessageType.text);

    let response = await message.client.sendMessage(message.jid,'group name changed to  ```' + match[1] + '```' ,MessageType.text);

    await message.client.deleteMessage (jid, {id: response.messageID, remoteJid: message.jid, fromMe: true})
    
}));