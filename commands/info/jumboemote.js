module.exports = {
    name: "jumbo",
    aliases: ["emoji"],
    usage: "jumbo <emoji>",
    description: "memperbesar emote",
    code: `$image[https://cdn.discordapp.com/emojis/$advancedtextsplit[$splittext[3];>;1]$replaceText[$replaceText[$advancedTextSplit[$message[1];<;2;:;1];;.png];a;.gif]]
$color[00ffff]
$onlyif[$attachment[https://cdn.discordapp.com/emojis/$advancedtextsplit[$splittext[3];>;1]$replaceText[$replaceText[$advancedTextSplit[$message[1];<;2;:;1];;.png];a;.gif]]!=;{description:Hanya dapat memperbesar custom emoji!}{color:ff2050}]
$onlyif[$advancedtextsplit[$message[1];:;3;>;1]!=;{description:Hanya dapat memperbesar custom emoji!}{color:ff2050}]
$textsplit[$message[1];:]
$argscheck[>1;{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]jumbo <emoji>\n\`\`\`}{color:ff2050}]
$cooldown[5s;{description:Tolong tunggu %time%}{color:ff2050}]
`
}