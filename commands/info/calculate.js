
module.exports = {
    name: "calculate",
    aliases: ["math"],
    usage: "calculate <num1> + <num2> - <num3> / <num4> etc.",
    description: "menggunakan kalkulator",
    code: `$djseval[let math = require ('mathjs')
let {MessageEmbed} = require('discord.js')
try {
  let e = math.evaluate(\`$message\`)
  let embed = new MessageEmbed()
  .addField(\`Pertanyaan\`, "\`\`\`" + "$message" + "\`\`\`")
  .addField(\`Jawaban\`, "\`\`\`" + e + "\`\`\`")
  .setColor('RANDOM')
  .setTimestamp()
  .setThumbnail(client.user.displayAvatarURL())
  message.channel.send(embed)
} catch (e) {
  let embede  = new MessageEmbed()
  .addField(\`Kesalahan di\`, "\`\`\`$message\`\`\`")
  .setColor("#FF2050")
  .setTimestamp()
  message.channel.send(embede).then(m => m.delete({timeout: 5 * 1000}))
}]
$argscheck[>1;{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]$commandname <num1> + <num2> - <num3> / <num4> etc.\n\`\`\`}{color:ff2050}]`
}