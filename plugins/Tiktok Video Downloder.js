const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({ pattern: 'ttv ?(.*)', fromMe: false, desc: 'Titok video downloder'}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

    await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n')

				await axios
					.get(`https://zenzapi.xyz/api/downloader/tiktok?url=${link}&apikey=5c3ceca04a58`)
					.then(async(response) => {
						const {
							nowatermark
						} = response.data.result

						const linkdata = await axios.get(nowatermark, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: 'Tiktok Video',
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							)
					})
					
})
}
  
  Asena.addCommand({ pattern: 'ttv ?(.*)', fromMe: true, dontaddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Tiktok Link* ")

    await message.sendMessage('👻 *Tiktok Video Downloader* 🕊 \n')

				await axios
					.get(`https://zenzapi.xyz/api/downloader/tiktok?url=${link}&apikey=5c3ceca04a58`)
					.then(async(response) => {
						const {
							nowatermark
						} = response.data.result

						const linkdata = await axios.get(nowatermark, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: 'Tiktok Video',
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
							)
					})
					
})
