let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm... teksnya mana?'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => ''),
    comment: text,
    username: m.pushName
  }), 'yt-comment.png', 'هذا هو تعليقك المزور', m)
}

handler.help = ['ytcomment    تعليق مزور']
handler.tags = ['tools']

handler.command = /^(ytcomment)$/i

module.exports = handler
