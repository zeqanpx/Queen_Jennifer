const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const config = require('../config');
const Config = require('../config');
let onf = require('./sql/data/Configs');
let help = require('./sql/data/Helperes');
//============================== LYRICS =============================================
const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');

//=====================================================================================
const newLocal = "status@broadcast";

Asena.addCommand({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
    let arama = await yts(match[1]);
    let poshiya = await yts(match[1]);
    arama = arama.videos;
    if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);

    let title = arama[0].title.replace(' ', '+');
    let stream = ytdl(arama[0].videoId, {quality: 'highestaudio'});
    got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));

    let name = poshiya.videos[0].title
    let url = poshiya.videos[0].url
    let time = poshiya.videos[0].timestamp
    let ago = poshiya.videos[0].ago
    let views = poshiya.videos[0].views
    let cname = poshiya.videos[0].author.name

    await message.client.sendMessage(message.jid,'*_DOWNLOADING SONG_*:\n\n'+ name + '',MessageType.text);

    ffmpeg(stream)
        .audioBitrate(320)
        .save('./' + title + '.mp3')
        .on('end', async () => {
            const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
            writer.setFrame('TIT2', arama[0].title)
                .setFrame('TPE1', [arama[0].author.name])
                .setFrame('APIC', {
                    type: 3,
                    data: fs.readFileSync(title + '.jpg'),
                    description: arama[0].description
                });
            writer.addTag();

            await message.client.sendMessage(message.jid, fs.readFileSync('./' + title + '.jpg'), MessageType.image, {
                caption: help.songsender(name,url,time,ago,views,cname) ,
                quoted : {
                    key: { 
                        fromMe: false, 
                        participant: message.jid, 
                        remoteJid: newLocal
                    }, message: { 
                        "extendedTextMessage": { 
                            "text": "*Queen Jennifer*" 
                        }
                    }
                }
            });
            // await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, ptt: false});
            await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data});
        });
}));


if (config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        let poshiya = await yts(match[1]);
        arama = arama.videos;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {quality: 'highestaudio'});
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));

        let name = poshiya.videos[0].title
        let url = poshiya.videos[0].url
        let time = poshiya.videos[0].timestamp
        let ago = poshiya.videos[0].ago
        let views = poshiya.videos[0].views
        let cname = poshiya.videos[0].author.name

        await message.client.sendMessage(message.jid,'*_DOWNLOADING SONG_*:\n\n'+ name + '',MessageType.text);

        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                await message.client.sendMessage(message.jid, fs.readFileSync('./' + title + '.jpg'), MessageType.image, {
                    caption: help.songsender(name,url,time,ago,views,cname) ,
                    quoted : {
                        key: { 
                            fromMe: false, 
                            participant: message.jid, 
                            remoteJid: newLocal
                        }, message: { 
                            "extendedTextMessage": { 
                                "text": "*Queen Jennifer*" 
                            }
                        }
                    }
                });
                // await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, ptt: false});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data});
            });
    }));

}


// type: "video"
// videoId: "78N2SP6JFaI"
// url: "https://youtube.com/watch?v=78N2SP6JFaI"
// title: "Superman • Main Theme • John Williams"
// description: "Soundtrack from the 1978 Richard Donner film \"Superman\…pher Reeve, Marlon Brando, Gene Hackman, Ned Beatty, ..."
// image: "https://i.ytimg.com/vi/78N2SP6JFaI/hqdefault.jpg"
// thumbnail: "https://i.ytimg.com/vi/78N2SP6JFaI/hqdefault.jpg"
// seconds: 266
// timestamp: "4:26"
// duration: Object {toString: function(), seconds: 266, timestamp: "4:26"}
// ago: "6 years ago"
// views: 11756121
// author: Object
// name: "HD Film Tributes"
// url: "https://youtube.com/user/TheWraith5"

// {quoted : {key: { fromMe: false, participant: message.jid, remoteJid: newLocal}, message: { "extendedTextMessage": { "text": "*Queen Jennifer*" }}}}