module.exports = {
    name: "binary-to-text",
    aliases: ["btt", "b-text"],
    usage: "binary-to-text <msg>",
    description: "mengubah binary menjadi bentuk text",
    code: `$addfield[• Text:;$replacetext[$replacetext[$checkcondition[$jsonrequest[https://no-api-key.com/api/v1/binary-text?binary=$message;text]!=];false;\`\`\`\nTidak dapat mendeteksi binary\n\`\`\`];true;\`\`\`\n$jsonrequest[https://no-api-key.com/api/v1/binary-text?binary=$message;text]\n\`\`\`]]
$addfield[• From:;\`\`\`\n$message\n\`\`\`]
$thumbnail[$useravatar[$clientid]]
$author[Binary To Text]
$color[00ffff]
$footer[© Kanna Kamui;$authoravatar]
$argscheck[>1;{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]$commandname <msg>\n\`\`\`}{color:ff2050}]
`
}