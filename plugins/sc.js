//Codigo by THE DARK KINGV3
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/KVqY6z3.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/KVqY6z3.jpg')).buffer()
let text = `*https://github.com/JEIRONY/THE-DARK-KING*`.trim()
let text = `*https://www.youtube.com/channel/UCCrEOFYcEqK28CJq7EwB6rg*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: '𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'THE DARK KING',
thumbnail: pp
}}})}
handler.command = /^sc|script|repositorio|repobot|scbot$/i
module.exports = handler
