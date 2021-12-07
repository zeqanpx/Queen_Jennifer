/*
# Copyright (C) 2020 MuhammedKpln.
#
# WhatsAsena is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# WhatsAsena is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
*/

function successfullMessage(msg) {
    return "✅ *Pinky Bot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Pinky Bot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Pinky Bot*:  ```" + msg + "```"
}

function songsender(name,url,RTime,UTime,Viws,cName) {

  return `=====================

»» ♪ *Name* : ${name}

»» 💌 *Link* : ${url}

»» 🕕 *Running Time* : _${RTime}_

»» ♻️ *Uploade Date* : _${UTime}_

»» 👩‍💻 *Views* : _${Viws}_

»» 🆔 *Chanel name* : _${cName}_

=====================

»» [  ᴛʏᴘᴇ: •ᴍᴘ𝟹 & •ᴍʀᴀ  ] ««
»» [ ᴜᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ ] ««

*And Plz Subscribe My Yt Chanel*

»» [ https://youtube.com/channel/UCeDeaDD8dpdMT2gO3VHY1JQ ]

=====================
`

}

module.exports = {
    songsender,
    successfullMessage,
    errorMessage,
    infoMessage
}
