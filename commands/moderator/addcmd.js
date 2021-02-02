module.exports = {
    name: "add-cmd",
    aliases: ["new-cmd"],
    usage: "add-cmd <trigger> <response>",
    description: "menambahkan custom command ke server",
    code: `$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]
Berhasil menambahkan $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] ke daftar commands, ketik \`$getservervar[prefix]cmd-list\` untuk melihat seluruh commands yang tersedia

$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` telah tersedia di command list}{color:ff2050}]
$onlyif[$gettextsplitlength<=20;{description:Maximum untuk custom commands adalah \`20\`}{color:ff2050}{footer:© Kanna Kamui}{timestamp}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#LEFT#;#LEFT_BRACKET#;#RIGHT_BRACKET#;#RIGHT#;/]==false;{description:Tolong jangan gunakan \`symbol\` untuk trigger maupun response}{color:ff2050}]
$argscheck[>2;{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]add-cmd <trigger> <response>\n\`\`\`}{footer:© Kanna Kamui}{color:ff2050}]
$onlyperms[manageserver;{description:Kamu tidak memiliki permissions untuk \`MANAGE_SERVER\`}{color:ff2050}{footer:© Kanna Kamui}{timestamp}]
$cooldown[5s;{description:Tolong tunggu %time%}]
`
}