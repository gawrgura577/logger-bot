module.exports = {
    name: "translate",
    aliases: ["trans"],
    usage: "translate <lang> <msg>",
    description: "translate text dari text yang kamu berikan, ke language yang kamu pilih",
    code: `$color[00ffff]
$addfield[• To ($touppercase[$message[1]]):;\`\`\`\n$replacetext[$replacetext[$checkcondition[$jsonrequest[https://api.itzteduhyt.repl.co/translate?to=$message[1]?text=$messageslice[1];res]!=];false;Tidak dapat mendeteksi bahasa];true;$jsonrequest[https://api.itzteduhyt.repl.co/translate?to=$message[1]?text=$messageslice[1];res]]\n\`\`\`]
$addfield[• From:;\`\`\`\n$messageslice[1]\n\`\`\`]
$author[ | translated;$authoravatar]
$thumbnail[$useravatar[$clientid]]
$footer[ | © Kanna Kamui;https://cdn.discordapp.com/attachments/803969643408392272/805962014530863124/1024px-Google_Translate_logo.svg.png]
$addtimestamp
$onlyif[$replacetext[$replacetext[$replacetext[$replacetext[$checkcondition[$findtextsplitindex[$servername]!=0]$checkcondition[$authorid==$botownerid];truetrue;true];truefalse;true];falsetrue;true];falsefalse;false]==true;{description:Maaf commands ini hanya untuk Patreon bot Kanna,\nJika kalian berminat untuk Patreon kalian bisa dm \`$usertag[$botownerid]\`}{color:YELLOW}{footer:© Kanna Kamui}]
$onlyif[$charcount[$message[1]]<=2;{description:Language hanya dapat mendeteksi 2 huruf, sebagai contoh language <ja>, ini bermaksud language japan}{color:ff2050}]
$textsplit[$getvar[patreon];|]
$argscheck[>2;{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]$commandname <lang> <msg>\n\`\`\`}{color:ff2050}]
`
}