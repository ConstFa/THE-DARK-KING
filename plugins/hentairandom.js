let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Hentai By THE DARK KING*', '©THE DARK KING', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(hentai|hentay)$/i

handler.rowner = true
