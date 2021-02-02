module.exports = {
    name: "botinfo",
    aliases: ["stats", "info"],
    usage: "botinfo",
    description: "informasi dari Kanna kamui-desu",
    code: `$title[Bot Statistic]
$thumbnail[$useravatar[$clientid]]
$color[RANDOM]
$footer[Uptime $getobjectproperty[uptime];$authoravatar]
$description[**• Name:** $username[$clientid]
**• ID:** $clientid
**• Discriminator:** $discriminator[$clientid]
**• Dibuat:** $getobjectproperty[createdAt]
**• Bot Version:** $getvar[version]]
$addfield[**__Inspired by__**;**• $usertag[$finduser[590047618479030272]]  <:cool_bot:806046954836328448>**
**• $usertag[$finduser[802467105345110097]]  <:cool_bot:806046954836328448>**]
$addfield[**__Support__**;**• $usertag[472293676542984193]**
**• $usertag[747315492104044555]**]
$addfield[**__Development__**;**• $getobjectproperty[owner]**]

$addfield[**__Bot Information__**;**• Guilds:** $numberseparator[$servercount;,]
**• User:** $numberseparator[$allmemberscount;,]
**• Channels:** $numberseparator[$allchannelscount;,]
**• Emote:** $numberseparator[$allemojicount;,]
**• Commands:** $commandscount]
$addfield[**__Memory__**;**• CPU Usage:** $roundtenth[$replacetext[$cpu;%;];2]%
**• RAM Usage:** $roundtenth[$ram;2]MB
**• RAM Used:** $roundtenth[$replacetext[$maxram;%;];2]%]
$addField[**__System__**;**• Cores:** 6
**• Model:** AMD EPYC 7282 16-Core Processor]
$addobjectproperty[owner;$usertag[$botownerid]]
$addobjectproperty[uptime;$uptime]
$djseval[d.object.createdAt = new Date(client.user.createdAt).toDateString()]
$createobject[{}]
$suppresserrors[{execute:errorcmd}]
$cooldown[8s;{description:Tolong tunggu **%time%**}] 
`
}