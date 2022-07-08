let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝗜𝗸𝘆𝗶𝗸𝘆\nFollow : https://www.instagram.com/riskysatyr', wm, 'NEXT', '.cevanvietnam', m)
}

handler.help = ['cecansantuy']
handler.tags = ['asupan']
handler.command = /^(cecansantuy)$/i
handler.limit = 3

module.exports = handler
