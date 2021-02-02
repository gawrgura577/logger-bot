module.exports = {
    name: "shop",
    usage: "shop",
    description: "list semua barang di shop",
    code: `$title[Shop Server's $servername]
$thumbnail[$servericon]
$description[$joinsplittext[
]
Info detail barang ketik \`$getservervar[prefix]items <item_name>\`]
$footer[© Kanna Kamui;$useravatar[$clientid]]
$color[00ffff]

$onlyif[$gettextsplitlength>=2;{description:Sepertinya \`$serverName\` belum setting sistem currencynya}{color:ff2050}{footer:© Kanna Kamui:$useravatar[$clientid]}]
$textsplit[$getservervar[item_name];|]
$onlyforids[$botownerid;{description:Masih dalam pembuatan}{color:YELLOW}]
`
}