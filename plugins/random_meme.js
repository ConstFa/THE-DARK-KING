const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/memesmexico")
let json = res.data
let THEDARKING = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, THEDARKING, "*😂😂😂😂😂*", '©THE DARK KING', '😂 SIGUIENTE 😂', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^meme$/i
handler.group = true
handler.admin = true
module.exports = handler
