const {MessageType, GroupSettingChange,ChatModification} = require('@adiwajshing/baileys');
const Julie = require('../events');
const Config = require('../config');
const CH_AD = require('./admin');
const Language = require('../language');
const Lang = Language.getString('admin');
const jul = Language.getString('julie');
const mut = Language.getString('mute');
const fs = require('fs');

// async function checkImAdmin(message, user = message.client.user.jid) {
//     var grup = await message.client.groupMetadata(message.jid);
//     var sonuc = grup['participants'].map((member) => {
        
//         if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
//     });
//     return sonuc.includes(true);
// }

// ===============================================DEATLES============================================================================

Julie.addCommand({pattern: 'dtls ?(.*)', onlyGroup: false, fromMe: true,desc: 'Julie'}, (async (message, match) => {

    const letsm = await message.client.sendMessage(message.jid, "hi Bro" , MessageType.text)
    await message.client.sendMessage(message.jid, letsm + '\n\n\n\n\n' + message , MessageType.text)
    await message.client.sendMessage(message.jid, "hi Bros" , MessageType.text)
    
}));

Julie.addCommand({pattern: 'get-status ?(.*)', onlyGroup: false, fromMe: true,desc: 'CHAT DEATLS'}, (async (message, match) => {

    await message.client.sendMessage(message.jid,'Wait',MessageType.text);
    
    const status = await message.client.getStatus (message.jid) // leave empty to get your own status
    
    await message.client.sendMessage(message.jid,"status: " + status,MessageType.text);
    
}));

// ===============================================PIN============================================================================

Julie.addCommand({pattern: 'pinte ?(.*)', onlyGroup: false, fromMe: true,desc: 'CHAT PINTED'}, (async (message, match) => {

    await message.client.sendMessage(message.jid,'Wait',MessageType.text);
    
    await message.client.modifyChat (message.jid, ChatModification.pin) // pin the chat
    
    await message.client.sendMessage(message.jid,'CHAT PINTED',MessageType.text);

}));


Julie.addCommand({pattern: 'unpinte ?(.*)', onlyGroup: false, fromMe: true,desc: 'CHAT UNPINTED'}, (async (message, match) => {

    await message.client.sendMessage(message.jid,'Wait',MessageType.text);
    
    await message.client.modifyChat (message.jid, ChatModification.unpin)
    
    await message.client.sendMessage(message.jid,'CHAT UNPINTED',MessageType.text);
    
}));

// ===============================================ACIVE============================================================================

Julie.addCommand({pattern: 'achive ?(.*)', onlyGroup: false, fromMe: true,desc: 'CHAT ACHIVE'}, (async (message, match) => {

    await message.client.sendMessage(message.jid,'Wait',MessageType.text);
    
    await message.client.modifyChat (message.jid, ChatModification.archive) // pin the chat
    
    await message.client.sendMessage(message.jid,'CHAT ACHIVED',MessageType.text);

}));

Julie.addCommand({pattern: 'unachive ?(.*)', onlyGroup: false, fromMe: true,desc: 'CHAT UNACHIVE'}, (async (message, match) => {

    await message.client.sendMessage(message.jid,'Wait',MessageType.text);
    
    await message.client.modifyChat (message.jid, ChatModification.unarchive)
    
    await message.client.sendMessage(message.jid,'CHAT UNACHIVE',MessageType.text);
    
}));

// ===============================================BLOCK============================================================================

Julie.addCommand({pattern: 'block ?(.*)', onlyGroup: false, fromMe: true,desc: 'CHAT BLOCK'}, (async (message, match) => {

    await message.client.sendMessage(message.jid,'Wait',MessageType.text);
    
    await message.client.blockUser (message.jid, "add") // Block user
    
    // await message.client.sendMessage(message.jid,'CHAT UNACHIVE',MessageType.text);
    
}));


Julie.addCommand({pattern: 'unblock ?(.*)', onlyGroup: false, fromMe: true,desc: 'CHAT UNBLOCK'}, (async (message, match) => {

    await message.client.sendMessage(message.jid,'Wait',MessageType.text);
    
    await message.client.blockUser (message.jid, "remove") // Unblock user
    
    await message.client.sendMessage(message.jid,'CHAT UNBLOCKED',MessageType.text);
    
}));