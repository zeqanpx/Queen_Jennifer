const {MessageType, GroupSettingChange,ChatModification} = require('@adiwajshing/baileys');
const Julie = require('../events');
const Config = require('../config');
const CH_AD = require('./admin');
const Language = require('../language');
const Lang = Language.getString('admin');
const jul = Language.getString('julie');
const mut = Language.getString('mute');
const axios = require('axios');
const fs = require('fs');

// async function checkImAdmin(message, user = message.client.user.jid) {
//     var grup = await message.client.groupMetadata(message.jid);
//     var sonuc = grup['participants'].map((member) => {
        
//         if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
//     });
//     return sonuc.includes(true);
// }

// ===============================================DEATLES============================================================================


Julie.addCommand({pattern: 'HNY ?(.*)', onlyGroup: false, deleteCommand: true, fromMe: true,desc: 'NEW YEAR MSG'}, (async (message, match) => {
    
    const r_text = "https://raw.githubusercontent.com/zeqanpx/Media/main/img/New%20Year%20Corporate%20Wishes.png";

    var respoimage = await axios.get(r_text, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*_Happy New Year_*'})

}));
  
Julie.addCommand({on: 'text', fromMe: false, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

    let regexb1ichu = new RegExp('.s')
    let regexb1ichu1 = new RegExp('.a')
    let regexb1ichu2 = new RegExp('.y')
    let regexb1ichu3 = new RegExp('.v')


    if (regexb1ichu.test(message.message) | regexb1ichu1.test(message.message) | regexb1ichu2.test(message.message) | regexb1ichu3.test(message.message)) {
        
        await message.client.sendMessage(message.jid, "Queen Jennifer\n\n---------------\n*Happy New Year*\n*Happy New Year*\n---------------" , MessageType.text)
        
    } 
    
}));
