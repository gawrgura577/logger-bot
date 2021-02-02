module.exports = ({
    name: "help",
    aliases: ["cmd"],
    usage: "help",
    description: "list seluruh commands yang tersedia",
    code: `$description[
List commands:
<:kanna_detective:805845655896588420> **Info**
\`ping, botinfo, serverinfo, userinfo, change-log, invite, patreon, list-cmd, help, avatar, calculate, anime, youtube, translate\`
<:kanna_chibby:805845846109192262> **Currency**
\`balance, shop, daily, hunt, weekly, blackjack\`
<:kanna_sugoi:805845613711065118> **Fun**
\`neko, fact, pat, hug, waifu, kiss, slap, smug, text-to-binary, binary-to-text, jumbo\`
<:kanna_police:805845703251066880> **Moderator**
\`setprefix, setcounting, resetcounting, add-cmd, del-cmd, announce\`
<:kanna_drink:805845749355118632> **Music**
\`play, nowplaying, queue, lyrics, skip, stop, pause, resume, loopqueue, shuffle, volume, loopsong, search\`
<:kanna_nope:805845884268445770> **NSFW**
:warning: 🔞
$replacetext[$replacetext[$checkcondition[$channelnsfw[$channelid]==true];true;\`hentai, nekos, tits, nekosgif, eroneko, nekopict, kitsune\`];false;]
:warning: Developer :warning:
\`eval, djseval, refresh\`

]
$color[RANDOM]
$footer[\`$getServerVar[prefix]command <cmd_name>\` untuk detail]
$thumbnail[$userAvatar[$clientID]]
$title[Kanna membantu kamu]

$cooldown[8s;{description:Tolong tunggu **%time%**}]`
})