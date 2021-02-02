module.exports = ({
    name: "setcounting",
    aliases: ["setcont", "setnumber"],
    usage: "setcounting <channel>",
    description: "menghitung angka dari 1 sampai ??",
    code: `
$description[Channel counting di set ke <#$findChannel[$message[1]]>
Untuk mengubah channel ketik \`$getServerVar[prefix]setcounting <channel>\`]
$color[01ff00]
$setServerVar[counting;$mentionedchannels[1]]
$onlyif[$serverchannelexists[$findchannel[$message]]==true;{description:Channel tidak dapat ditemukan ❔}{color:ff2050}]
$argscheck[>1;{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]setcounting <channel>\n\`\`\`}{color:ff2050}]
$onlyBotPerms[manageemojis;{description:\`:warning:\` Kanna tidak memiliki permission \`manage_emojis\`}{color:ff2050}]
$onlyPerms[admin;{description:\`:warning:\` Maaf kamu harus memiliki permission \`admin\`}{color:ff2050}]
`
})