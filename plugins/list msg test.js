const ADE = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');

ADE.addCommand({pattern: 'test-list', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    // send a list message!
    const sections = [
        {
        title: "Section 1",
        rows: [
            {title: "Attp", rowId: ".attp hi"},
            {title: "Tts", rowId: ".tts Hi I'm Queen Jennefer Bot", description: "This is a description"}
        ]},
        // ==========================
        {
        title: "Section 2",
        rows: [
            {title: "Alive", rowId: ".alive"},
            {title: "YT", rowId: ".yt andakare", description: "This is a description V2"}
        ]},
    ]

    const listMessage = {
    text: "This is a list",
    footer: "nice footer, link: https://youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ",
    title: "Amazing boldfaced list title",
    buttonText: "Required, text on the button to view the list",
    sections
    }

    await message.client.sendMessage(message.jid, listMessage)
    
    // End
 }));