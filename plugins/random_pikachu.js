//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    let res = await fetch('https://some-random-api.ml/img/pikachu')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
©THE DARK KING
`.trim()
    conn.sendFile(m.chat, json.link, '', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['pikachu']
handler.tags = ['random']
handler.command = /^pikachu$/i

handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler
