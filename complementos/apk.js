let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Minecraft.apk'
conn.sendFile(m.chat, vn, 'Minecraft.apk', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Minecraft|minecraft/
handler.command = /^(MINECRAFT |minecraft|A?$)/

module.exports = handler
