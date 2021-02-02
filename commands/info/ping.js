module.exports = ({
    name: "ping",
    usage: "ping",
    description: "Check latency",
    code: `$editmessage[$splittext[1];{description::heartbeat:: \`$roundtenth[$divide[$getobjectproperty[botping];1000];2] s\`\n\n
  ⏱ : \`$roundtenth[$divide[$getobjectproperty[ping1];1000];2] s\`\n\n
⏳: \`$roundtenth[$divide[$sub[$datestamp;$getobjectproperty[ping]];1000];2] s\`}
{color:007ff0}
{footer:© Kanna Kamui}]

$textsplit[$sendmessage[Pinging  .  .  .;yes]; ]
$createobject[{"ping": "$datestamp", "botping": "$botping", "ping1": "$ping"}]
$cooldown[8s;{description:Tolong tunggu **%time%**}]`
})