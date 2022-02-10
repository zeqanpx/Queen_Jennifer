const ADE = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');

ADE.addCommand({pattern: 'alive', fromMe: false, desc: "*Its sent alive msg*"}, (async (message, match) => {

    // send a simple text!
    await message.client.sendMessage (message.jid, 'Oh hello there;', MessageType.text)
    await message.client.sendMessage (message.jid, "I'm *Alive*", MessageType.text)

    // send a contact!
    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                + 'VERSION:3.0\n' 
                + 'FN:Dark Ezio\n' // full name
                + 'ORG:Subadra Bro You Tube Chanel;\n' // the organization of the contact
                + 'TEL;type=CELL;type=VOICE;waid=94781564565:+94781564565\n' // WhatsApp ID + phone number
                + 'END:VCARD'
    await message.client.sendMessage(message.jid, {displayname: "⚜Dark Ezio✅", vcard: vcard}, MessageType.contact)

    
//send a template message!
const templateButtons = [
    {index: 1, urlButton: {displayText: '💖 Plz Subacribe on Youtube!', url: 'https://youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ'}},
    {index: 2, callButton: {displayText: "Don't Call me!", phoneNumber: "+94781564565"}},
    {index: 3, quickReplyButton: {displayText: "It's ok", id: '.alive'}},
]

const templateMessage = {
    text: "_=======================_\n\n*More DTLS*\n\n_=======================_",
    footer: 'Queen Jennifer © ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ',
    templateButtons: templateButtons
}

const sendMsg = await sock.sendMessage(id, templateMessage)

    // End
 }));