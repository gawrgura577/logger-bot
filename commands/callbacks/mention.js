module.exports = ({
    name: "$alwaysExecute",
    code: `$description[Hallo \`$username\`, Prefix Kanna sekarang adalah \`$getservervar[prefix]\`\nUntuk list seluruh commands silahkan ketik \`$getservervar[prefix]help\`]
$color[00ffff]
$onlyif[$checkcontains[$message;$clientid]==true;]`
})