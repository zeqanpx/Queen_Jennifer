
const Julie = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

const B_M_D = {

    SYSDTXT:'💻 System status',
    VER: '🧬 Version',
    MSG: '```Hey There! Bot Online now. 💃🏻♥️```\n\n*Developer:* ```Ai Dark Ezio```\n\n*Official Website:* https://AiDarkEzio.github.io\n\n*Youtube channel :* https://youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ\n\n```Thank You For Using Queen Jennifer💞```'

}

Julie.addCommand({pattern: 'alive', fromMe: true, desc: 'Lang.ALIVE_DESC'}, (async (message, match) => {

    var a_plk = new Array ();
    var BUTTHANDLE = '.';

        a_plk[0] = "https://i.imgur.com/zdcqaaG.jpeg";
        a_plk[1] = "https://mcdn.wallpapersafari.com/medium/20/69/juFNVl.jpg";
        a_plk[2] = "https://cdn.wallpapersafari.com/51/57/WXxpck.jpg";
        a_plk[3] = "https://cdn.wallpapersafari.com/72/42/nAdV2j.jpg";
        a_plk[4] = "https://cdn.wallpapersafari.com/55/85/n5cLrp.jpg";
        a_plk[5] = "https://i.imgur.com/zdcqaaG.jpeg";
        a_plk[6] = "https://mcdn.wallpapersafari.com/medium/55/25/KrvA7S.jpg";
        a_plk[7] = "https://images.pexels.com/photos/8294554/pexels-photo-8294554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        a_plk[8] = "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        a_plk[9] = "https://wallpapercave.com/wp/wp2957455.jpg";
        a_plk[10] = "https://i.imgur.com/1PPJq0Q.jpeg";

    var p = Math.floor(11*Math.random())

    var logo = await axios.get (`${a_plk[p]}`, { responseType: 'arraybuffer' })
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

    const buttons = [
        {buttonId: BUTTHANDLE + 'qaversion', buttonText: {displayText: B_M_D.VER }, type: 1},
        {buttonId: BUTTHANDLE + 'qasysstats', buttonText: {displayText: B_M_D.SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: B_M_D.MSG,
        footerText: 'Queen Jennifer © ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
	   
}));

Julie.addCommand({pattern: 'sysd', fromMe: true, desc: 'Lang.SYSD_DESC', dontAddCommandList: true }, (async (message, match) => {

    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));

Julie.addCommand({pattern: 'qasysstats', fromMe: true, desc: 'Lang.SYSD_DESC', dontAddCommandList: true }, (async (message, match) => {

    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));

Julie.addCommand({pattern: 'qaversion', fromMe: true, desc: 'Lang.SYSD_DESC', dontAddCommandList: true }, (async (message, match) => {

    await message.client.sendMessage(message.jid, `*🧬 Queen Jennifer Version 🧬*\n\n` + '```Installed version :``` ' + Config.VERSION + `\n\nCheck official website : https://AiDarkEzio.github.io`, MessageType.text, {quoted: message.data});

}));

if (Config.WORKTYPE == "public") {
    Julie.addCommand({pattern: 'alive', fromMe: false, desc: 'Lang.ALIVE_DESC'}, (async (message, match) => {

        var a_plk = new Array ();
        var BUTTHANDLE = '.';
    
            a_plk[0] = "https://i.imgur.com/zdcqaaG.jpeg";
            a_plk[1] = "https://mcdn.wallpapersafari.com/medium/20/69/juFNVl.jpg";
            a_plk[2] = "https://cdn.wallpapersafari.com/51/57/WXxpck.jpg";
            a_plk[3] = "https://cdn.wallpapersafari.com/72/42/nAdV2j.jpg";
            a_plk[4] = "https://cdn.wallpapersafari.com/55/85/n5cLrp.jpg";
            a_plk[5] = "https://i.imgur.com/zdcqaaG.jpeg";
            a_plk[6] = "https://mcdn.wallpapersafari.com/medium/55/25/KrvA7S.jpg";
            a_plk[7] = "https://images.pexels.com/photos/8294554/pexels-photo-8294554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
            a_plk[8] = "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
            a_plk[9] = "https://wallpapercave.com/wp/wp2957455.jpg";
            a_plk[10] = "https://i.imgur.com/1PPJq0Q.jpeg";
    
        var p = Math.floor(11*Math.random())
    
        var logo = await axios.get (`${a_plk[p]}`, { responseType: 'arraybuffer' })
        var PIC = Buffer.from(logo.data)
    
        const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })
    
        const buttons = [
            {buttonId: BUTTHANDLE + 'qaversion', buttonText: {displayText: B_M_D.VER }, type: 1},
            {buttonId: BUTTHANDLE + 'qasysstats', buttonText: {displayText: B_M_D.SYSDTXT }, type: 1}
        ]

        let buttonMessages = buttons.selectedDisplayText

        const buttonMessage = {
            contentText: B_M_D.MSG,
            footerText: 'Queen Jennifer © ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ',
            buttons: buttons,
            headerType: 4,
            imageMessage: media.message.imageMessage    
        }
        await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
           
    }));
    
    Julie.addCommand({pattern: 'qasysstats', fromMe: false, desc: 'Lang.SYSD_DESC', dontAddCommandList: false }, (async (message, match) => {
    
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
    
    Julie.addCommand({pattern: 'qaversion', fromMe: false, desc: 'Lang.SYSD_DESC', dontAddCommandList: true }, (async (message, match) => {
    
        await message.client.sendMessage(message.jid, `*🧬 Queen Jennifer Version 🧬*\n\n` + '```Installed version :``` ' + Config.VERSION + `\n\nCheck official website : https://AiDarkEzio.github.io`, MessageType.text, {quoted: message.data});
    
    }));
}