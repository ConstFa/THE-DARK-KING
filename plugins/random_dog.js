//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    let res = await fetch('https://random.dog/woof.json')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
©THE DARK KING
`.trim()
    conn.sendFile(m.chat, json.url, 'dog.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['dog']
handler.tags = ['random']
handler.command = /^dog$/i

handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler
