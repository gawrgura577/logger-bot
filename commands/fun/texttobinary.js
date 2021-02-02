module.exports = {
    name: "text-to-binary",
    aliases: ["ttb", "binary"],
    usage: "text-to-binary <msg>",
    description: "mengubah huruf menjadi bentuk binary",
    code: `$addfield[• Binary:;\`\`\`\n$jsonrequest[https://no-api-key.com/api/v1/binary?text=$message;binary]\n\`\`\`]
$addfield[• From:;\`\`\`\n$message\n\`\`\`]
$footer[© Kanna Kamui;$authoravatar]
$thumbnail[$useravatar[$clientid]]
$author[Text To Binary]
$color[00ffff]
$argscheck[>1;{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]text-to-binary <msg>\n\`\`\`}{color:ff2050}]
`
}