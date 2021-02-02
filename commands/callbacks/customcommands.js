module.exports = ({
    name: "$alwaysExecute",
    code: `$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;]

$textsplit[$getservervar[ccmd];/]`
})