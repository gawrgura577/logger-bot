const dbd = require("dbd.js")
const express = require("express")
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('Im ready!');
});
const discord = require("discord.js")
const client = new discord.Client()
const bot = new dbd.Bot({
    token: "TOKEN_BOT",
    
    prefix: ["$getServerVar[prefix]", "kanna", "<@$clientID>", "<@!$clientID>", "Kanna"],
})

bot.onMessage({
    guildOnly: true,
    respondToBots: false
})

bot.variables({
    prefix: "kn!",
    clog: "🔁 | Utility commands: v0.4.4",
    version: "v0.4.4",
    counting: "",
    number: "1",
    autostats: "",
    longstats: "0",
    datestamp: "",
    patreon: "",
    botstts: "idle",
    //CURRENCY COMMANDS
    hunt: "",
    cash: "0",
    premium: "0",
    cdhunt: "60",
    bjcd: "45",
    item_name: "",
    //blackjack
    ycard: "0",
    dcard: "0",
    bjcash: "",
    bjtime: "0",
    //MUSIC PUN BUTUH VARIABLE, HERAN
    duration: "",
    dc: "0",
    ppause: "0",
    loopq: "0",
    //SONG SEARCH
    search1: "",
    searchid: "",
    //CUSTOM COMMANDS
    ccmd: "",
    cdes: "",
    //LONGUE
    lang: "id",

})

//INVITE
bot.command({
    name: "invite",
    usage: "invite",
    description: "memberikan link invite Kanna",
    code: `$description[[Invite Kanna\\](https://dsc.gg/kanna-kamui) | [Support Server\\](https://discord.io/snowshark) | [Vote Kanna\\](https://top.gg/bot/787484830585061419)]
$color[00ffff]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]
$footer[© Kanna Kamui;$authorAvatar]`
})

//FOR CURRENCY COMMANDS
bot.command({
  name: "blackjack",
  aliases: ["bj"],
  usage: "blackjack <amount>",
  description: "bermain judi berbasis kartu",
  code: `$awaitMessages[$authorID;1m;hit,stay,h,s;bj1,bj2,bj1,bj2;{description:Terlalu lama, membatalkan blackjack dan barack kamu menghilang}{color:ff2050}{execute:bje}]
  $setGlobalUserVar[bjtime;2]
  $description[
  Ketik \`hit\` untuk memperbesar kartu dan ketik \`stay\` untuk menetapkan kartu
  Kartu kamu:
  $getGlobalUserVar[ycard]
  Kartu musuh:
  ???]
  $footer[hit | stay]
  $setGlobalUserVar[ycard;$random[6;21]]
  $setGlobalUserVar[dcard;$random[7;23]]
  $setGlobalUserVar[bjcash;$message[1]]
  $onlyIf[$isNumber[$message[1]]==true;{description:Bet harus berupa angka}{color:ff2050}]
  $globalCooldown[$getGlobalUserVar[bjcd]s;{title:Cooldown masih **%time%**}{color:ff2050}{description:$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[premium]==1];true;Terima kasih telah berdonasi ke Kanna Kamui, untuk mendapatkan update update terbaru silahkan mengunjungi [kamui palace\\](https://discord.io/snowshark)];false;Normalnya untuk para donatur hanya menunggu;res] \`20s\`,
Info lebih lanjut cek di server [kamui palace\\](https://discord.io/snowshark)]}]
  $argsCheck[>1;{description:Usage \`$getServerVar[prefix]blackjack <amount>\`}]
  $onlyIf[$argsCount<=1;{description:Invalid argument, gunakan \`$getServerVar[prefix]blackjack <amount>\`}{color:ff2050}]
  $onlyIf[$message[1]<=$getGlobalUserVar[cash];{description:Maaf sepertinya kamu hanya punya \`$getGlobalUserVar[cash]\` barack}{color:ff2050}]
$onlyIf[$message[1]>=350;{description:Untuk menggunakan blackjack kamu haru memiliki minimal \`350\` barack}{color:RED}]
$onlyIf[$getGlobalUserVar[cash]>=350;{description:Untuk menggunakan blackjack kamu harus memiliki minimal \`350\` barack}{color:RED}]
  $onlyIf[$getGlobalUserVar[bjtime]<=1;{description:Kamu masih di dalam match!}{color:ff2050}]`
})
bot.awaitedCommand({
  name: "bj1",
  code: `$awaitMessages[$authorID;30s;hit,stay,h,s;bj1,bj2,bj1,bj2;{description:Terlalu lama, membatalkan pilihan, dan barack kamu menghilang}{color:ff2050}{execute:bje}]
  $description[
  Ketik \`hit\` untuk memperbesar kartu, ketik \`stay\` untuk menetapkan kartu
  Kartu kamu:
  $getGlobalUserVar[ycard]
  Kartu musuh:
  ???]
  $footer[hit | stay]
  $onlyIf[$getGlobalUserVar[ycard]<=21;{execute:bjen}]
  $setGlobalUserVar[ycard;$sum[$getGlobalUserVar[ycard];$randomText[$random[4;5];$random[5;7];$random[8;10]]]]`
})

bot.awaitedCommand({
  name: "bj2",
  code: `$setGlobalUserVar[ycard;0]
  $setGlobalUserVar[dcard;0]
  $setGlobalUserVar[bjcash;]
  $setGlobalUserVar[bjtime;0]
  $description[
  Kartu kamu:
  $getGlobalUserVar[ycard]
  Kartu musuh:
  $getGlobalUserVar[dcard]]
  $color[$replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[ycard]>$getGlobalUserVar[dcard]]$checkCondition[$getGlobalUserVar[ycard]<$getGlobalUserVar[dcard]]$checkCondition[$getGlobalUserVar[dcard]>=21]$checkCondition[$getGlobalUserVar[ycard]==$getGlobalUserVar[dcard]];truefalsefalsefalse;01ff00];falsetruefalsefalse;ff2050];falsefalsefalsetrue;ffffff];falsetruetruefalse;01ff00]]
  $footer[$replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[ycard]>$getGlobalUserVar[dcard]]$checkCondition[$getGlobalUserVar[ycard]<$getGlobalUserVar[dcard]]$checkCondition[$getGlobalUserVar[dcard]>=21]$checkCondition[$getGlobalUserVar[ycard]==$getGlobalUserVar[dcard]];truefalsefalsefalse;Kamu menang! | +$getGlobalUserVar[bjcash]];falsetruefalsefalse;Kamu kalah! | -$getGlobalUserVar[bjcash]];falsefalsefalsetrue;Imbang!];falsetruetruefalse;Musuh tertangkap!]]
  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[ycard]>$getGlobalUserVar[dcard]]$checkCondition[$getGlobalUserVar[ycard]<$getGlobalUserVar[dcard]]$checkCondition[$getGlobalUserVar[dcard]>=21]$checkCondition[$getGlobalUserVar[ycard]==$getGlobalUserVar[dcard]];truefalsefalsefalse;$getGlobalUserVar[bjcash]];falsetruefalsefalse;-$getGlobalUserVar[bjcash]];falsefalsefalsetrue;0];falsetruetruefalse;$getGlobalUserVar[bjcash]]]]`
})
bot.awaitedCommand({
  name: "bjen",
  code: `$setGlobalUserVar[ycard;0]
  $setGlobalUserVar[dcard;0]
  $setGlobalUserVar[bjcash;]
  $setGlobalUserVar[bjtime;0]
  $description[
  Kartu kamu:
  $getGlobalUserVar[ycard]
  Kartu musuh:
  $getGlobalUserVar[dcard]]
  $color[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[dcard]<21]$checkCondition[$getGlobalUserVar[dcard]>=21];truefalse;ff2050];falsetrue;ffffff]]
  $footer[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[dcard]<21]$checkCondition[$getGlobalUserVar[dcard]>=21];truefalse;Kamu tertangkap! | -$getGlobalUserVar[bjcash]];falsetrue;Musuh tertangkap! | +$getGlobalUserVar[bjcash]]]
  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[dcard]<21]$checkCondition[$getGlobalUserVar[dcard]>=21];truefalse;-$getGlobalUserVar[bjcash]];falsetrue;0]];$authorID]`
})

bot.awaitedCommand({
  name: "bje",
  code: `$setGlobalUserVar[ycard;0]
  $setGlobalUserVar[dcard;0]
  $setGlobalUserVar[bjcash;]
  $setGlobalUserVar[bjtime;0]
  $setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$getGlobalUserVar[bjcash]]]
Tidak ada pilihan, membatalkan pilihan dan barack kamu hilang \`$getGlobalUserVar[bjcash]\``
})


bot.command({
    name: "balance",
    aliases: ["bal", "credit", "cash", "barack", "uang"],
    description: "check uang yang kamu miliki",
    usage: "balance",
    code: `$title[$replaceText[$replaceText[$checkCondition[$mentioned[1;yes]==$authorID];true;__**Barack kamu**__];false;__**Barack $username[$mentioned[1;yes]]**__]] 

$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[00ffff]
$description[
$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[premium;$mentioned[1;yes]]==1];true;Premium User <a:cool_premium:798276017105797120>];false;]

Barack: **$getGlobalUserVar[cash;$mentioned[1;yes]]** :coin:]
$footer[© Kanna Kamui | discord.io/snowshark]
$globalCooldown[5s;{description:Mohon tunggu **%time%**}{color:RED}]`
})
bot.command({
    name: "startp",
    code: `$setGlobalUserVar[premium;1;$mentioned[1]]
$setGlobalUserVar[cdhunt;30;$mentioned[1]]
$setGlobalUserVar[bjcd;20;$mentioned[1]]
Success give premium poin
$onlyForIDs[515143925502312451;]`
})
bot.command({
    name: "endp",
    code: `$setGlobalUserVar[premium;0;$mentioned[1]]
$setGlobalUserVar[cdhunt;60;$mentioned[1]]
$setGlobalUserVar[bjcd;45s;$mentioned[1]]
Success took premium poin
$onlyForIDs[515143925502312451;]`
})
bot.command({
    name: "hunt",
    usage: "hunt",
    description: "membantu kanna berburu/mencari kebutuhan makanan dan minuman",
    code: `$setUserVar[hunt;]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;$multi[$random[300;500];$random[1;3]]];makan;$multi[$random[100;300];$random[1;4]]];minum;$multi[$random[0;200];$random[1;5]]]]]
$editMessage[$getUserVar[hunt];{author:Berhasil $replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;memburu hewan];makan;mengambil makanan];minum;mengambil minuman]:$authorAvatar}{color:00ffff}{thumbnail:$userAvatar[$clientID]}{footer:© Kanna Kamui}{timestamp}{description::coin: | Terima kasih sudah membantu Kanna **$username**, sekarang Kanna kenyang dan bisa melakukan aktivitas secara normal lagi!\n\`Kamu berhasil mendapatkan $replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;$multi[$random[300;500];$random[1;3]]];makan;$multi[$random[100;300];$random[1;4]]];minum;$multi[$random[0;200];$random[1;5]]] barack\`}]
$wait[3s]
$editMessage[$getUserVar[hunt];{description:****Berhasil $replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;berburu];makan;menemukan];minum;menemukan]  .  .  .****}{timestamp}]
$wait[3s]
$editMessage[$getUserVar[hunt];{description:****Mencoba $replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;berburu];makan;mencari makanan];minum;mencari minuman]****}{timestamp}]
$wait[3s]
$setUserVar[hunt;$sendMessage[{description:****Melakukan pemburuan  .  .  .****}{timestamp};yes]]
$globalCooldown[$getGlobalUserVar[cdhunt]s;{title:Kanna masih kenyang, kamu harus menunggu **%time%** lagi}{description:Normalnya untuk para donatur, Kanna lebih cepat lapar. dalam waktu 30 detik Kanna sudah lapar lagi.
Untuk info lebih lanjut buruan gabung bareng [Kanna\\](https://discord.io/snowshark)}{color:RED}]
$onlyIf[$getGlobalUserVar[premium]!=1;{execute:huntp}]
`
})
bot.awaitedCommand({
    name: "huntp",
    code: `$setUserVar[hunt;]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;$multi[$random[300;500];$random[1;3]]];makan;$multi[$random[100;300];$random[1;4]]];minum;$multi[$random[0;200];$random[1;5]]]]]
$editMessage[$getUserVar[hunt];{author:Berhasil $replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;berburu hewan];makan;mengambil makanan];minum;mengambil minuman]:$authorAvatar}{color:00ffff}{thumbnail:$userAvatar[$clientID]}{footer:© Kanna Kamui}{timestamp}{description::coin: | Terima kasih sudah membantu Kanna **$username**, sekarang Kanna kenyang dan bisa melakukan aktivitas secara normal lagi!\n\`Kamu berhasil mendapatkan $replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;$multi[$random[300;500];$random[1;3]]];makan;$multi[$random[100;300];$random[1;4]]];minum;$multi[$random[0;200];$random[1;5]]] barack\`}]
$wait[3s]
$editMessage[$getUserVar[hunt];{description:****Berhasil $replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;berburu];makan;menemukan];minum;menemukan]  .  .  .****}{timestamp}]
$wait[3s]
$editMessage[$getUserVar[hunt];{description:****Mencoba $replaceText[$replaceText[$replaceText[$randomText[hewan;makan;minum];hewan;berburu];makan;mencari makanan];minum;mencari minuman]****}{timestamp}]
$wait[3s]
$setUserVar[hunt;$sendMessage[{description:****Melakukan penjarahan  .  .  .****}{timestamp};yes]]
$globalCooldown[30s;{title:Kanna masih kenyang, kamu harus menunggu **%time%** lagi}{description:Terima kasih sudah menjadi donatur bot Kanna Kamui :\).
Yuk gabung di server dengan [Kanna\\](https://discord.io/snowshark)}{color:RED}]`
})





bot.awaitedCommand({
    name: "nsfw",
    code: `$description[hentai: $commandInfo[hentai;description]
nekos: $commandinfo[nekos;description]
tits: $commandinfo[tits;description]
eroneko: $commandinfo[eroneko;description]
nekos: $commandinfo[nekos;description]
nekopict: $commandinfo[nekopict;description]
kitsune: $commandinfo[kitsune;description]]
$title[:warning: NSFW :warning:]
$thumbnail[$userAvatar[$clientID]]
$footer[$getServerVar[prefix]command <cmd_name> untuk detail]
$color[RANDOM]
$addTimestamp
$onlyNSFW[{description::warning: Oops, command ini hanya bekerja di NSFW channel}{color:RED}]
`
})
bot.awaitedCommand({
    name: "music",
    code: `$description[
play: $commandInfo[p;description]
queue: $commandInfo[q;description]
nowplaying: $commandInfo[np;description]
lyrics: $commandInfo[ly;description]
skip: $commandInfo[sk;description]
stop: $commandInfo[stop;description]
pause: $commandInfo[pause;description]
resume: $commandInfo[resume;description]
loop: $commandInfo[loop;description]
shuffle: $commandInfo[shuffle;description]
volume: $commandinfo[vol;description]
loopsong: $commandinfo[loopsong;description]
search: $commandinfo[search;description]]
$title[**Music**]
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]
$footer[$getServerVar[prefix]command <cmd_name> untuk detail]
$addTimestamp`
})
bot.awaitedCommand({
    name: "moderator",
    code: `$description[
setprefix: $commandInfo[setprefix;description]
setcounting: $commandInfo[setcounting;description]
resetcounting: $commandInfo[resetcounting;description]
add-cmd: $commandinfo[add-cmd;description]
del-cmd: $commandinfo[del-cmd;description]]
$title[**Moderator**]
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]
$footer[$getServerVar[prefix]command <cmd_name> untuk detail]
$addTimestamp`
})
bot.awaitedCommand({
    name: "currency",
    code: `$description[
balance: $commandInfo[balance;description]
shop: $commandInfo[shop;description]
daily: $commandInfo[daily;description]
weekly: $commandInfo[weekly;description]
hunt: $commandInfo[hunt;description]
blackjack: $commandInfo[bj;description]]
$title[**Currency**]
$thumbnail[$userAvatar[$clientID]]
$footer[$getServerVar[prefix]command <cmd_name> untuk detail]
$color[RANDOM]
$addTimestamp`
})
bot.awaitedCommand({
    name: "info",
    code: `$description[
ping: $commandInfo[ping;description]
botinfo: $commandInfo[botinfo;description]
serverinfo: $commandInfo[serverinfo;description]
userinfo: $commandInfo[userinfo;description]
change-log: $commandInfo[changelog;description]
invite: $commandInfo[invite;description]
patreon: $commandinfo[patreon;description]
list-cmd: $commandinfo[list-cmd;description]
]
$title[**Info**]
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]
$footer[$getServerVar[prefix]command <cmd_name> untuk detail]
$addTimestamp`
})
bot.awaitedCommand({
    name: "fun",
    code: `$description[
neko: $commandInfo[neko;description]
waifu: $commandInfo[waifu;description]
hug: $commandInfo[hug;description]
smug: $commandInfo[smug;description]
pat: $commandInfo[pat;description]
slap:$commandInfo[slap;description]
fact: $commandInfo[fact;description]
kiss: $commandInfo[kiss;description]
nekogif: $commandInfo[nekogif;description]
anime: $commandInfo[anime;description]
youtube: $commandInfo[youtube;description]
]




$title[**Fun**]
$thumbnail[$userAvatar[$clientID]]
$color[RANDOM]
$footer[$getServerVar[prefix]command <cmd_name> untuk detail]
$addTimestamp`
})
bot.command({
    name: "list-cmd",
    aliases: ["all-cmd", "cmd-list"],
    usage: "list-cmd",
    description: "list semua custom commands yang tersedia",
    code: `$title[**__Custom Commands__**;https://dsc.gg/kanna-kamui]
$color[RANDOM]
$thumbnail[$servericon]
$description[\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`]
$footer[© Kanna Kamui]
$addtimestamp
$onlyif[$gettextsplitlength>=2;{description:Tidak ada custom commands di server \`$servername\`}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyperms[manageserver;{description:Kamu tidak memiliki permissions untuk \`MANAGE_SERVER\`}{color:ff2050}{footer:© Kanna Kamui}{timestamp}]
$cooldown[5s;{description:Tolong tunggu %time%}]
`
})

bot.command({
    name: "del-cmd",
    aliases: ["remove-cmd"],
    usage: ["remove-cmd <cmd name>"],
    description: "menghapus custom commands",
    code: `$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
Berhasil menghapus command $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{description:Command \`$tolowercase[$message]\` tidak tersedia di command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#LEFT#;#LEFT_BRACKET#;#RIGHT_BRACKET#;#RIGHT#;/]==false;{description:Tolong jangan gunakan \`symbol\` untuk trigger maupun response}{color:ff2050}]
$argscheck[>1;{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]del-cmd <trigger>\n\`\`\`}{footer:© Kanna Kamui}{color:ff2050}]
$onlyperms[manageserver;{description:Kamu tidak memiliki permissions untuk \`MANAGE_SERVER\`}{color:ff2050}{footer:© Kanna Kamui}{timestamp}]
$cooldown[5s;{description:Tolong tunggu %time%}]
`
})

bot.command({
    name: "add-patreon",
    usage: "add-patreon",
    description: "only for developer",
    code: `$setvar[patreon;$getvar[patreon]$message|]
Berhasil menambahkan \`$message\`, ke daftar patreon


$argscheck[>1;{description:Kamu harus mengisi nama servernya}{color:ff2050}]
$onlyforids[$botownerid;{description:Maaf command ini hanya untuk developer}{color:ff2050}]`
})
bot.command({
    name: "patreon",
    aliases: ["partner"],
    usage: "patreon",
    description: "daftar list patron dr bot Kanna",
    code: `$thumbnail[$useravatar[$clientid]]
$title[**__Patreon__**;https://dsc.gg/kanna-kamui]
$description[**__Patreon List__**\n$splittext[1]\n$splittext[2]\n$splittext[3]\n$splittext[4]\n$splittext[5]\n$splittext[6]\n$splittext[7]\n$splittext[8]\n$splittext[9]\n$splittext[10]

Note: \`Untuk menjadi patreon kami / partner kami, kalian bisa dm langsung ke $username[$botownerid]\`]
$color[00ffff]
$footer[© Kanna Kamui]
$addtimestamp
$suppresserrors[{execute:errorcmd}]
$textsplit[$getvar[patreon];|]`
})
bot.command({
    name: "setprefix",
    aliases: ["changeprefix", "sp", "prefix"],
    description: "untuk mengganti bot prefix",
    usage: "setprefix <new_prefix>",
    code: `:white_check_mark: | Prefix telah diganti ke \`$message[1]\`
$setServerVar[prefix;$message[1]]
$onlyIf[$message!=;{description:Prefix sekarang adalah \`$getServerVar[prefix]\`
Kamu juga bisa menggunakan beberapa pilihan berikut sebagai prefix:
**kanna/Kanna** help
**<@$clientID>** help}{color:RANDOM}]
$onlyIf[$argsCount<=1;{description:Prefix tidak boleh menggunakan spasi}{color:ff2050}]
$onlyIf[$charCount<=5;{description:Maksimal huruf adalah 5, dan tidak boleh melebihi value tersebut}{color:ff2050}]
$onlyPerms[manageserver;{description:\`:warning:\` Maaf kamu tidak memiliki permission \`MANAGE_SERVER\`}{color:ff2050}]
$cooldown[10s;{description:Tolong tunggu %time%}{color:ff2050}]`
})
bot.command({
    name: "change-log",
    aliases: ["changelog"],
    description: "memberikan informasi bot version terbaru",
    usage: "change-log",
    code: `$description[$getVar[clog]]
$footer[© Kanna Kamui]
$addTimestamp
$color[RANDOM]
$title[Change-Log]
$thumbnail[$userAvatar[$clientID]]
$cooldown[8s;{description:Tolong tunggu **%time%**}]`
})
bot.command({
    name: "command",
    aliases: ["modules"],
    usage: "command <cmd_name>",
    description: "Memberitahu kamu semua informasi dari commands yang ada di Kanna",
    code: `$addField[Prefix:;**$getServerVar[prefix]**;yes]
$addField[Aliases:;**$replaceText[$replaceText[$checkCondition[$commandInfo[$message;aliases]!=];false;Tidak ada aliases];true;$commandInfo[$message;aliases]]**;yes]
$addField[Fungsi:;**$commandInfo[$message;usage]**;yes]
$addField[Deskripsi:;**$commandInfo[$message;description]**;yes]
$addField[Name:;**$commandInfo[$message;name]**;yes]
$footer[$getServerVar[prefix]command <cmd_name>]
$color[RANDOM]
$thumbnail[$userAvatar[$clientID]]
$cooldown[8s;{description:Tolong tunggu **%time%**}]

$onlyIf[$commandInfo[$message[1];name]!=;{description:❓ Tidak bisa menemukan commandnya}{color:ff2050}]
$onlyIf[$commandInfo[$message[1];description]!=;{description:❓ Tidak bisa menemukan commandnya}{color:ff2050}]`
})
bot.command({
    name: "serverinfo",
    aliases: ["serverstats"],
    description: "Informasi dari server yang Kanna tempati sekarang",
    usage: "serverinfo",
    code: `$title[**$serverName**]
$thumbnail[$serverIcon]
$color[RANDOM]
$addField[Channels:;**All Channels\: $sum[$channelCount[text];$channelCount[voice]]\nText\: $channelCount[text]\nVoice\:$channelCount[voice]**;yes]
$addField[Emote Count:;**$emojiCount**;yes]
$addField[Members:;👥 semua member\: **$membersCount**\n:robot: bot count\: **$botCount**\n:green_circle: online \: **$membersCount[$guildID;online]**\n:orange_circle: idle\: **$membersCount[$guildID;idle]**\n:red_circle: dnd\: **$membersCount[$guildID;dnd]**\n:black_circle: offline/invisible\: **$membersCount[$guildID;offline]**;yes]
$addField[Verify Level:;**$serverVerificationLevel**;yes]
$addField[Boost:;**$serverBoostCount/$serverBoostLevel**;yes]
$addField[Fitur Server:;**$replacetext[$replacetext[$checkcondition[$serverFeatures!=];false;Tidak ada fitur];true;$serverfeatures]**;yes]
$addField[Server Region:;**$serverRegion**;yes]
$addField[Guild ID:;**$guildID**;yes]
$addField[Guild dibuat:;**$creationDate[$guildID]**;yes]
$addField[Owner:;**[$username[$ownerID]\\]($getServerInvite)**;yes]
$footer[© Kanna Kamui | $serverName;$authorAvatar]
$addTimestamp
$cooldown[8s;{description:Tolong tunggu **%time%**}]`
})

bot.command({
    name: "userinfo",
    aliases: ["profile", "user"],
    usage: "userinfo (user)",
    description: "Memberikan informasi dari seseorang",
    code: `$title[Informasi dari $username[$mentioned[1;yes]]]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$addField[Join:;**$memberJoinedDate[$mentioned[1;yes]]**;yes]
$addField[Dibuat:;**$creationDate[$mentioned[1;yes]]**;yes]
$addField[Avatar:;**[Link Avatar\\]($userAvatar[$mentioned[1;yes]])**;yes]
$addField[Voted:;**$replacetext[$replacetext[$checkcondition[$jsonRequest[https://top.gg/api/bots/$clientID/check?userId=$mentioned[1;yes];voted;{description:Error terdeteksi di saat melakukan informasi voting}{color:ff2050};Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4NzQ4NDgzMDU4NTA2MTQxOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExODkxMjk5fQ.SOeIs1g8fDnR7--JPB9ptI_elNU8jndvoCE51y2x12Q]==1];true;:white_check_mark: Voter];false;:x: Tidak vote]**;yes]
$addField[Roles:;**$replacetext[$replacetext[$checkcondition[$userRoles[$mentioned[1;yes];mentions;, ]!=];false;Tidak memiliki role];true;$userroles[$mentioned[1;yes];mentions;,]]**;yes]
$addField[Role tertinggi:;**$replacetext[$replacetext[$checkcondition[$highestRole[$mentioned[1;yes]]==$findrole[@everyone]];true;:x: Tidak memiliki role];false;<@&$highestRole[$mentioned[1;yes]]>]**;yes]
$addField[Permission:;**$replaceText[$replaceText[$checkCondition[$userPerms[$mentioned[1;yes];, ]!=];false;-];true;$userPerms[$mentioned[1;yes]]]**;yes]
$addField[Boosted?:;**$replaceText[$replaceText[$isBoosting[$mentioned[1;yes]];true;Boost Server!];false;none]**;yes]
$addField[Badge:;**$replaceText[$replaceText[$replaceText[$getUserBadges[$mentioned[1;yes]];House Bravery;Bravery $customemoji[cool_bravery]];House Brilliance;Briliance $customemoji[cool_brilliance]];House Balance;Balance $customemoji[cool_balance]]**;yes]
$addField[Activity:;**$activity[$mentioned[1;yes]]**;yes]
$addField[Status:;**$status[$mentioned[1;yes]]**;yes]
$addField[User ID:;**$mentioned[1;yes]**;yes]
$addField[User Tag:;**$userTag[$mentioned[1;yes]]**;yes]
$addField[Mentioned:;**<@$mentioned[1;yes]>**;yes]
$color[$getRoleColor[$highestRole[$mentioned[1;yes]]]]
$footer[© Kanna Kamui | Req - $username]
$cooldown[8s;{description:Tolong tunggu **%time%**}]
$onlyIf[$memberExists[$mentioned[1;yes]]!=;{description:Member tersebut tidak ada di server ini}]`
})











//MUSIC COMMANDS ONLY!!!!

bot.musicStartCommand({
    channel: "$channelID",
    code: `
$thumbnail[$songInfo[thumbnail]]
$description[$customEmoji[cool_youtube] | **[$songInfo[title]\\]($songInfo[url]) - [$advancedtextsplit[$songInfo[duration]; ;3;(;2;);1]\\]($songInfo[url])**]


`
})
bot.onMusicStart()


bot.command({
    name: "play",
    usage: "play <song_name/song_url>",
    aliases: ["p"],
    description: "memutar music dari youtube",
    code: `
$replaceText[$replaceText[$checkCondition[$voiceID==];true;];false;:thumbsup: **Join ke voice channel <#$voiceID[$authorID]> dan membawa berkas :page_facing_up: ke <#$channelID>**]
**$replaceText[$replaceText[$checkCondition[$queueLength<=1];false;Ditambah ke queue :inbox_tray:];true;Playing 🎶] \`$playSong[$message;0s;yes;Error ketika mengambil data,\n out from voice  .  .  .]\`**
$sendMessage[
$customEmoji[cool_youtube] Searching :mag_right: \`$message\`
;no]

$onlyIf[$voiceID[$clientID]==;{execute:play1}]

$argsCheck[>1;{author:Error}{description:Tolong berikan judul music/url dari music yang ingin kamu mainkan.}{footer:Music}{color:FF0000}]
$onlyIf[$voiceID!=;{author:Error}{description:Kanna tidak mendeteksi bahwa kamu join ke voice channel}{footer::copyright: Kanna Kamui | Music}{color:FF0000}]

$cooldown[10s;{description:Tolong tunggu %time%}{color:ff2050}]
$onlyBotPerms[connect;speak;{description::warning: Kanna tidak memiliki permissions untuk speak/connect}{color:ff2050}]

`})

bot.awaitedCommand({
    name: "play1",
    code: `
**$replaceText[$replaceText[$checkCondition[$queueLength<=1];false;Ditambah ke queue :inbox_tray:];true;Playing 🎶] \`$playSong[$message;0s;yes;Error ketika mengambil data,\n out from voice  .  .  .]\`**
$sendMessage[
$customEmoji[cool_youtube] Searching :mag_right: \`$message\`
;no]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya kanna sedang dipakai di voice <#$voiceID[$clientID]>}{color:RED}]
$argsCheck[>1;{author:Error}{description:Tolong berikan judul music/url dari music yang ingin kamu mainkan.}{footer:Music}{color:FF0000}]
`
})
bot.command({
    name: "play",
    aliases: ["p"],
    code: `$stopSong
$sendMessage[{description:Kanna sudah berada di voice hapir 3 jam, sekarang kanna keluar dari voice otomatis}{color:YELLOW}{footer:© Kanna Kamui | Music}]
$onlyIf[$voiceID[$clientID]!=;]
$onlyIf[$queueLength>=1;]
$wait[3h]
`
})
bot.awaitedCommand({
    name: "npmax",
    code: `$author[Sekarang diputar | ;$authorAvatar]
$thumbnail[$songInfo[thumbnail]]
$color[00ffff]
$footer[Music]
$description[\`$repeatmessage[32;▬]🔘\`
$jsonrequest[https://api.itzteduhyt.repl.co/progressbar?now=$replacetext[$sub[$advancedtextsplit[$songinfo[duration_left]; ;1];$advancedtextsplit[$songinfo[duration]; ;1]];-;]?max=$advancedtextsplit[$songinfo[duration]; ;1];timestamp]
]
$addField[Info:;**Voice: $channelName[$voiceID[$clientID]]
Req: $username[$songInfo[userID]]**;no]
$addField[Uploader:;**[$songInfo[publisher]\\]($songInfo[publisher_url])**;no]
$addField[Song:;**[$songInfo[title]\\]($songInfo[url])**;no]


$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$cooldown[5s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})
bot.awaitedCommand({
    name: "npmin",
    code: `$author[Sekarang diputar | ;$authorAvatar]
$thumbnail[$songInfo[thumbnail]]
$color[00ffff]
$footer[Music]
$description[\`🔘$repeatmessage[32;▬]\`
$jsonrequest[https://api.itzteduhyt.repl.co/progressbar?now=$replacetext[$sub[$advancedtextsplit[$songinfo[duration_left]; ;1];$advancedtextsplit[$songinfo[duration]; ;1]];-;]?max=$advancedtextsplit[$songinfo[duration]; ;1];timestamp]
]
$addField[Info:;**Voice: $channelName[$voiceID[$clientID]]
Req: $username[$songInfo[userID]]**;no]
$addField[Uploader:;**[$songInfo[publisher]\\]($songInfo[publisher_url])**;no]
$addField[Song:;**[$songInfo[title]\\]($songInfo[url])**;no]



$suppressErrors[{description:Error ketika execute command, tolong report ke support server}{color:RED}]

$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$cooldown[5s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})
bot.command({
    name: "nowplaying",
    aliases: ["np"],
    usage: "nowplaying",
    description: "info music yang sedang dimainkan",
    code: `
$author[Sekarang diputar | ;$authorAvatar]
$thumbnail[$songInfo[thumbnail]]
$color[00ffff]
$footer[Music]
$description[\`$getobjectproperty[bar]\`
$jsonrequest[https://api.itzteduhyt.repl.co/progressbar?now=$replacetext[$sub[$advancedtextsplit[$songinfo[duration_left]; ;1];$advancedtextsplit[$songinfo[duration]; ;1]];-;]?max=$advancedtextsplit[$songinfo[duration]; ;1];timestamp]
]
$addField[Info:;**Voice: $channelName[$voiceID[$clientID]]\nReq: $username[$songInfo[userID]]**;no]
$addField[Uploader:;**[$songInfo[publisher]\\]($songInfo[publisher_url])**;no]
$addField[Song:;**[$songInfo[title]\\]($songInfo[url])**;no]
$addObjectProperty[bar;$repeatMessage[$round[$multi[$getObjectProperty[p];32]];▬]🔘$repeatMessage[$sub[32;$round[$multi[$getObjectProperty[p];32]]];▬]]
$onlyif[$multi[$getObjectProperty[p];32]>=1;{execute:npmin}]
$onlyif[$multi[$getObjectProperty[p];32]<=31;{execute:npmax}]
$addObjectProperty[p;$roundTenth[$divide[$getObjectProperty[c];$getObjectProperty[d]];2]]
$addObjectProperty[c;$sub[$getObjectProperty[d];$getObjectProperty[dl]]]
$addObjectProperty[dl;$advancedTextSplit[$songInfo[duration_left]; ;1]]
$addObjectProperty[d;$advancedTextSplit[$songInfo[duration]; ;1]]

$createObject[{}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$cooldown[5s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})
bot.command({
    name: "queue",
    aliases: ["q"],
    usage: "queue",
    description: "list music yang sedang dimainkan di server",
    code: `$description[$queue[1;10;[{number} - {title}\\]({url})]]
$thumbnail[$songInfo[thumbnail]]
$title[Queue]
$footer[Music]
$color[00ffff]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:RED}]
$cooldown[5s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})


//BOT STATUS NYEMPIL!!!

bot.readyCommand({
    channel: "801696336986636298",
    code: `$loop[1;ready1]
$setStatus[$numberSeparator[$serverCount;,] Guilds | $numberSeparator[$allmemberscount;,] Users| $getVar[version];streaming;idle]
`
})
bot.awaitedCommand({
    name: "ready1",
    code: `$loop[1;ready2]
$wait[2s]
$log[Ready jump in spesific $servercount Guilds | $allmemberscount Users | $allchannelscount Channels | $allemojicount Emojis]`
})
bot.awaitedCommand({
    name: "ready2",
    code: `$loop[1;ready2]
$wait[10s]
$setStatus[$numberSeparator[$serverCount;,] Guilds | $numberSeparator[$allmemberscount;,] Users | $getVar[version];streaming;$getVar[botstts]]
`
})

//LANJUTAN MUSIC COMMANDS
bot.command({
    name: "test",
    code: `$forEachGuild[test2]`
})
bot.awaitedCommand({
    name: "test2",
    code: `$forEachMember[test3]`
})
bot.awaitedCommand({
    name: "test3",
    code: `
$voiceID
$onlyIf[$voiceID!=;]`
})



//COUNTING SERVER
//COUNTING SERVER
//COUNTING SERVER


bot.command({
    name: "$alwaysExecute",
    code: `
$addcmdreactions[$customemoji[cool_music]]


$usechannel[$getservervar[counting]]
$setServerVar[number;$sum[$getServerVar[number];1]]

$onlyIf[$message==$getServerVar[number];{execute:wrongc}]
$onlyIf[$getServerVar[counting]!=;]

$onlyForChannels[$getServerVar[counting];]


$suppresserrors[{execute:counte}]`
})
bot.awaitedCommand({
    name: "wrongc",
    code: `$sendmessage[{description:Kesalahan oleh <@$authorid>\nCounting diulang dr angka \`$getservervar[number]\`}{color:ff2050};no]
$setServerVar[number;1]
$addCmdReactions[❌]

$color[ff2050]

$suppresserrors[{execute:counte}]
`
})
bot.awaitedCommand({
    name: "counte",
    code: `$setservervar[number;1]
$setservervar[counting;]`
})
bot.command({
    name: "resetcounting",
    aliases: ["resetcont" ,"resetnumber"],
    usage: "resetcounting",
    description: "menghapus sistem counting di server",
    code: `$setServerVar[counting;]
$setServerVar[number;1]
$description[Sistem counting telah dihapus dari server, untuk set ulang ketik \`$getServerVar[prefix]setcounting <channel>\`]
$color[01ff00]
$onlyIf[$getServerVar[counting]!=;{description:\`:warning:\` Sistem counting belum di tambahkan ke server, ketik \`$getServerVar[prefix]setcounting <channel>\` untuk set channel counting}{color:ff2050}]
$onlyBotPerms[manageemojis;{description:\`:warning:\` Kanna tidak memiliki permission \`manage_emojis\`}{color:ff2050}]
$onlyPerms[admin;{description:\`:warning:\` Kamu harus memiliki permission \`admin\`}{color:ff2050}]
$suppresserrors[{execute:errorcmd}]`
})

//ECONOMY COMMANDS YANG TERSEMPIL
bot.command({
    name: "daily",
    usage: "daily",
    description: "mengambil tip harian",
    code: `$author[ | Mengambil tip harian;$authorAvatar]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;2000]]]
$color[00ff70]
$description[:coin: | Kanna memberikanmu tip harian senilai \`$random[1000;2000]\` Barack]
$footer[© Kanna Kamui | $username;$userAvatar[$clientID]]
$globalCooldown[1d; {description:Cooldown masih **%time%**, mohon menunggu}{color:RANDOM}]`
})

//ANOTHER MUSIC COMMANDS YANG TERSEMPIL
bot.command({
    name: "lyrics",
    aliases: ["ly"],
    description: "lyrics music",
    usage: "lyrics <song_name>",
    code: `$title[Lyrics]
$thumbnail[$userAvatar[$clientID]]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;Kanna tidak dapat menemukan lyrics dari \`$message\`]]
$color[00f7ff]
$footer[© Kanna Kamui | Music;$authorAvatar]
$onlyIf[$message!=;{description:Ketik \`$getServerVar[prefix]lyrics <song_name>\`}{color:ff2050}]
`
})
bot.command({
    name: "volume",
    aliases: ["vol", "v"],
    usage: "volume < 1 - 100 >",
    description: "mengatur volume music (only for voters)",
    code: `**:loud_sound: | Berhasil set volume ke \`$volume\`**
$volume[$message[1]]
$onlyif[$message[1]<=99;{description:Volume tidak boleh diatas \`100\`}{color:ff2050}]
$onlyif[$message[1]>=1;{description:Volume tidak boleh dibawah \`1\`}{color:ff2050}]
$onlyif[$isnumber[$message[1]]==true;{description:Penggunaan yang benar:\n\`\`\`\n$getservervar[prefix]volume < 1 - 100 >\n\`\`\`}{footer:© Music | vol = $volume}{title:Error}{color:ff2050}]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya Kanna sedang dipakai di <#$voiceID[$clientID]>}{color:ff2050}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$onlyIf[$voiceID!=;{description:Kamu belum join ke voice channel}{color:ff2050}]
$onlyif[$checkcondition[$jsonRequest[https://top.gg/api/bots/$clientID/check?userId=$authorid;voted;{description:Error terdeteksi di saat melakukan informasi voting}{color:ff2050};Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4NzQ4NDgzMDU4NTA2MTQxOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExODkxMjk5fQ.SOeIs1g8fDnR7--JPB9ptI_elNU8jndvoCE51y2x12Q]==1]==true;{color:ff2050}{title:Not Voting!}{description:Untuk mengatur volume kamu harus voting bot Kanna, karena kualitas volume yang masih dalam perkembangan}]
$onlyif[$findtextsplitindex[$servername]==0;{execute:volpatreon}]
$textsplit[$getvar[patreon];|]
$cooldown[10s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})
bot.awaitedCommand({
    name: "volpatreon",
    code: `**:loud_sound: | Berhasil set volume ke \`$volume\`**
$volume[$message[1]]
$onlyif[$message[1]<=99;{description:Volume tidak boleh diatas \`100\`}{color:ff2050}{footer:Verified Patreon}]
$onlyif[$message[1]>=1;{description:Volume tidak boleh dibawah \`1\`}{color:ff2050}{footer:Verified Patreon}]
$onlyif[$isnumber[$message[1]]==true;{description:Penggunaan yang benar:\n\`\`\`\n$getservervar[prefix]volume < 1 - 100 >\n\`\`\`}{footer:© Music | vol = $volume | Verified Patreon}{title:Error}{color:ff2050}]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya Kanna sedang dipakai di <#$voiceID[$clientID]>}{color:ff2050}{footer:Verified Patreon}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}{footer:Verified Patreon}]
$onlyIf[$voiceID!=;{description:Kamu belum join ke voice channel}{color:ff2050}{footer:Verified Patreon}]`
})
bot.command({
    name: "skip",
    aliases: ["sk"],
    usage: "skip (number)",
    description: "skip music yang tersedia di queue",
    code: `$skipTo[$message[1]]
**⏭️ | Berhasil melompati \`$message[1]\` music**
$onlyIf[$message<=$queueLength;{description:Queue hanya berisi \`$queueLength\` lagu}{color:ff2050}]
$onlyIf[$isNumber[$message[1]]==true;{description:Gunakan nomor untuk skip lagu}{color:ff2050}]
$onlyIf[$message!=;{execute:skip1}]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya Kanna sedang dipakai di <#$voiceID[$clientID]>}{color:ff2050}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$onlyIf[$voiceID!=;{description:Kamu belum join ke voice channel}{color:ff2050}]
$cooldown[10s;{description:Tolong tunggu **%time%**}{color:ff2050}]

`
})
bot.awaitedCommand({
    name: "skip1",
    code: `
**⏭️ | Berhasil skip music**
$skipSong

`
})
bot.command({
    name: "shuffle",
    usage: "shuffle",
    aliases: ["random"],
    description: "mengacak music di queue",
    code: `** 🔀 | Shuffle berhasil $replaceText[$replaceText[$shuffleQueue;true;dinyalakan oleh ];false;dimatikan oleh ]$username[$authorID]**
$onlyif[$queuelength>=3;{description:Minimal queue untuk mengacak music adalah 3}{color:ff2050}{footer:© Music | $queuelength}]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya Kanna sedang dipakai di <#$voiceID[$clientID]>}{color:ff2050}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$onlyIf[$voiceID!=;{description:Kamu belum join ke voice channel}{color:ff2050}]
$cooldown[10s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})
bot.command({
    name: "stop",
    aliases: ["disconnect", "dc"],
    usage: "stop",
    description: "berhenti memutar music dan keluar dari voice channel",
    code: `$skipsong
$skipto[$queuelength]
$onlyIf[$voiceID[$clientID]==$voiceID[$authorID];{description:Kanna sepertinya sedang dipakai di voice channel <#$voiceID[$clientID]>}{color:RED}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:RED}]
$onlyIf[$voiceID!=;{description:Kanna tidak mendeteksi bahwa kamu join voice channel}{color:RED}]
$cooldown[5s;{description:Mohon tunggu **%time%**}{color:RED}] 
$suppresserrors[{execute:errorcmd}]
`
})
bot.command({
    name: "pause",
    usage: "pause",
    description: "menghentikan music yang dimainkan",
    code: `**:stop_button: | Music di pause oleh \`$username[$authorID]\`**
$pauseSong
$setServerVar[ppause;1]
$onlyIf[$getServerVar[ppause]==0;{description:Tidak ada music yang dapat di pause}{color:RED}{footer:© Kanna Kamui | Music}]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya Kanna sedang dipakai di <#$voiceID[$clientID]>}{color:ff2050}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$onlyIf[$voiceID!=;{description:Kamu belum join ke voice channel}{color:ff2050}]
$cooldown[10s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})
bot.command({
    name: "resume",
    usage: "resume",
    description: "melanjutkan music yang terpause",
    code: `**:arrow_forward: | Music di lanjutkan oleh \`$username[$authorID]\`**
$resumeSong
$setServerVar[ppause;0]
$onlyIf[$getServerVar[ppause]==1;{description:Tidak ada music yang dapat di resume}{color:RED}{footer:© Kanna Kamui | Music}]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya Kanna sedang dipakai di <#$voiceID[$clientID]>}{color:ff2050}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$onlyIf[$voiceID!=;{description:Kamu belum join ke voice channel}{color:ff2050}]
$cooldown[10s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})
bot.command({
    name: "loopqueue",
    usage: "loopqueue",
    aliases: ["repeat-all", "lp-all", "loop-all"],
    description: "untuk mengulang queue yang diputar",
    code: `**:repeat: | Repeat $replaceText[$replaceText[$loopQueue;true;Dinyalakan];false;Dimatikan]**
$setServerVar[loopq;$replaceText[$replaceText[$getServerVar[loopq];1;0];0;1]]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya Kanna sedang dipakai di <#$voiceID[$clientID]>}{color:ff2050}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$onlyIf[$voiceID!=;{description:Kamu belum join ke voice channel}{color:ff2050}]
$cooldown[10s;{description:Tolong tunggu **%time%**}{color:ff2050}]
`
})
bot.command({
    name: "loopsong",
    usage: "loopsong",
    aliases: ["repeat-one", "lp-one", "loop-one"],
    description: "untuk mengulang 1 music di queue",
    code: `**:repeat_one: | Repeat $replaceText[$replaceText[$loopSong;true;Dinyalakan];false;Dimatikan]**
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{description:Maaf sepertinya Kanna sedang dipakai di <#$voiceID[$clientID]>}{color:ff2050}]
$onlyIf[$queueLength>=1;{description:Kanna tidak mendeteksi adanya music yang dimainkan}{color:ff2050}]
$onlyIf[$voiceID!=;{description:Kamu belum join ke voice channel}{color:ff2050}]
$cooldown[10s;{description:Tolong tunggu **%time%**}{color:ff2050}]
$onlyif[$authorid==$botownerid;{description:Masih dalam pembuatan, next update akan di tambahkan}{color:YELLOW}{footer:© Kanna Kamui | Music}]
`
})
bot.command({
      name: "search",
      aliases: ["query"],
      usage: "search <song_name/song_url>",
      description: "play music dari list judul music yang diberikan",
      code: `$awaitMessages[$authorid;15s;1,2,3,4,5,6,7,8,9,10;q1,q1,q1,q1,q1,q1,q1,q1,q1,q1;{execute:searche}]
$setuservar[search1;$replacetext[$message; ;-]]
$description[1 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=1;title]\`

2 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=2;title]\`

3 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=3;title]\`

4 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=4;title]\`

5 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=5;title]\`

6 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=6;title]\`

7 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=7;title]\`

8 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=8;title]\`

9 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=9;title]\`

10 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=10;title]\`]
$color[00ff7f]
$footer[© Music | 15s]
$author[Pilih 1 - 10;$authoravatar]
$onlyif[$voiceid[$clientid]==;{execute:searchq1}]
$argsCheck[>1;{author:Error}{description:Tolong berikan judul music/url dari music yang ingin kamu mainkan.}{footer:Music}{color:FF0000}]
$onlyIf[$voiceID!=;{author:Error}{description:Kanna tidak mendeteksi bahwa kamu join ke voice channel}{footer::copyright: Kanna Kamui | Music}{color:FF0000}]
$cooldown[10s;{description:Tolong tunggu %time%}{color:ff2050}]
$onlyif[$replacetext[$replacetext[$replacetext[$replacetext[$checkcondition[$jsonRequest[https://top.gg/api/bots/$clientID/check?userId=$authorid;voted;{description:Error terdeteksi di saat melakukan informasi voting}{color:ff2050};Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4NzQ4NDgzMDU4NTA2MTQxOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExODkxMjk5fQ.SOeIs1g8fDnR7--JPB9ptI_elNU8jndvoCE51y2x12Q]==1]$checkcondition[$findtextsplitindex[$servername]==0];truetrue;true];truefalse;true];falsetrue;false];falsefalse;true]==true;{color:ff2050}{title:Not Voting!/No Patreon}{description:Karena masih dalam tahap pengembangan, untuk menggunakan command \`search\` kamu harus vote bot Kanna setiap 12h\nKamu bisa juga menjadi Patreon dari bot Kanna!}]
$suppresserrors[{execute:errorcmd}]
`
})
bot.awaitedCommand({
      name: "searchq1",
      code: `$awaitMessages[$authorid;15s;1,2,3,4,5,6,7,8,9,10;q1,q1,q1,q1,q1,q1,q1,q1,q1,q1;{execute:searche}]
$setuservar[search1;$replacetext[$message; ;-]]
$description[
1 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=1;title]\`

2 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=2;title]\`

3 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=3;title]\`

4 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=4;title]\`

5 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=5;title]\`

6 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=6;title]\`

7 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=7;title]\`

8 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=8;title]\`

9 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=9;title]\`

10 - \`$jsonRequest[https://api.itzteduhyt.repl.co/yt-video?search=$replacetext[$message; ;-]&choose=10;title]\`]


$color[00ff7f]
$footer[© Music | 15s]
$author[Pilih 1 - 10;$authoravatar]
$onlyif[$voiceid[$clientid]==$voiceid[$authorid];{description:Sepertinya Kanna sedang dipakai di <#$voiceid[$clientid]>}{color:ff2050}{footer:© Kanna Kamui | Music}]
$onlyif[$message!=;{author:Error}{description:Tolong berikan judul music/url dari music yang ingin kamu mainkan.}{footer:Music}{color:FF0000}]
$onlyIf[$voiceID!=;{author:Error}{description:Kanna tidak mendeteksi bahwa kamu join ke voice channel}{footer::copyright: Kanna Kamui | Music}{color:FF0000}]
$cooldown[10s;{description:Tolong tunggu %time%}{color:ff2050}]
$onlyBotPerms[connect;speak;{description::warning: Kanna tidak memiliki permissions untuk speak/connect}{color:ff2050}]
$suppresserrors[{execute:errorcmd}]
`
})
bot.awaitedCommand({
      name: "q1",
      code: `
$replacetext[$replacetext[$checkcondition[$voiceid[$clientid]==];false;];true;**Join ke voice channel <#$voiceID[$authorID]> dan membawa berkas :page_facing_up: ke <#$channelID>**]
**$replaceText[$replaceText[$checkCondition[$queueLength<=1];false;Ditambah ke queue :inbox_tray:];true;Playing 🎶] \`$playSong[$jsonrequest[https://api.itzteduhyt.repl.co/yt-video?search=$getuservar[search1]&choose=$message;title];0s;yes;Error ketika mengambil data,\n out from voice  .  .  .]\`**
`
})
bot.awaitedCommand({
      name: "searche",
      code: `
$sendmessage[{description:Tidak ada pilihan yang diberikan, membatalkan pilihan}{color:ff2050}{footer:© Kanna Kamui | Music};no]

`
})

//FUN COMMANDS
bot.command({
    name: "neko",
    aliases: ["catgirl"],
    usage: "neko",
    description: "memberikan 200+ referensi \"cat girl\"!",
    code: `$djseval[const client = require('nekos.life'); 
const neko = new client(); 
const {MessageEmbed} = require('discord.js')
neko.sfw.neko().then(neko => {
let e = new MessageEmbed()
.setTitle('Neko UwU')
.setImage(neko.url)
message.channel.send(e)
});]
`
})
bot.command({
    name: "waifu",
    usage: "waifu",
    description: "waifu yang sangat UwU ^-^",
    code: `$djseval[const client = require('nekos.life'); 
const waifu = new client(); 
const {MessageEmbed} = require('discord.js')
waifu.sfw.waifu().then(waifu => {
let e = new MessageEmbed()
.setTitle('Waifu UwU')
.setImage(waifu.url)
message.channel.send(e)
});]
`
})
bot.command({
    name: "hug",
    usage: "hug",
    description: "peluk orang yang kamu sayang ^-^",
    code: `$djseval[const client = require('nekos.life'); 
const hug = new client(); 
const {MessageEmbed} = require('discord.js')
hug.sfw.hug().then(hug => {
let e = new MessageEmbed()
.setTitle('$username[$authorID] Hug $message')
.setImage(hug.url)
message.channel.send(e)
});]
$onlyIf[$message!=;{description:Usage \`$getServerVar[prefix]hug <user>\`}{color:RED}]`
})
bot.command({
    name: "slap",
    usage: "slap",
    description: "pukul orang nakal :*",
    code: `$djseval[const client = require('nekos.life'); 
const slap = new client(); 
const {MessageEmbed} = require('discord.js')
slap.sfw.slap().then(slap => {
let e = new MessageEmbed()
.setTitle('$username[$authorid] slap $message')
.setImage(slap.url)
message.channel.send(e)
});]
$onlyIf[$message!=;{description:Usage \`$getServerVar[prefix]slap <user>\`}{color:RED}]`
})
bot.command({
    name: "kiss",
    usage: "kiss",
    description: "kiss orang?? ( ◜‿◝ )♡",
    code: `$djseval[const client = require('nekos.life'); 
const kiss = new client(); 
const {MessageEmbed} = require('discord.js')
kiss.sfw.kiss().then(kiss => {
let e = new MessageEmbed()
.setTitle('$username[$authorid] kiss $message')
.setImage(kiss.url)
message.channel.send(e)
});]
$onlyIf[$message!=;{description:Usage \`$getServerVar[prefix]kiss <user>\`}{color:RED}]`
})
bot.command({
    name: "poke",
    usage: "poke",
    description: "Poke!!",
    code: `$djseval[const client = require('nekos.life'); 
const poke = new client(); 
const {MessageEmbed} = require('discord.js')
poke.sfw.poke().then(poke => {
let e = new MessageEmbed()
.setTitle('Poke')
.setImage(poke.url)
message.channel.send(e)
});]`
})
bot.command({
    name: "nekogif",
    usage: "nekogif",
    description: "Neko UwU gif",
    code: `$djseval[const client = require('nekos.life'); 
const nekoGif = new client(); 
const {MessageEmbed} = require('discord.js')
nekoGif.sfw.nekoGif().then(nekoGif => {
let e = new MessageEmbed()
.setTitle('Neko UwU')
.setImage(nekoGif.url)
message.channel.send(e)
});]
`
})
bot.command({
    name: "smug",
    usage: "smug",
    description: "smugging ;)",
    code: `$djseval[const client = require('nekos.life'); 
const smug = new client(); 
const {MessageEmbed} = require('discord.js')
smug.sfw.smug().then(smug => {
let e = new MessageEmbed()
.setTitle('Smug')
.setImage(smug.url)
message.channel.send(e)
});]`
})
bot.command({
    name: "pat",
    usage: "pat",
    description: "patting seseorang",
    code: `$djseval[const client = require('nekos.life'); 
const pat = new client(); 
const {MessageEmbed} = require('discord.js')
pat.sfw.pat().then(pat => {
let e = new MessageEmbed()
.setTitle('$username[$authorid] pat $message')
.setImage(pat.url)
message.channel.send(e)
});]
$onlyIf[$message!=;{description:Usage \`$getServerVar[prefix]pat <user>\`}{color:RED}]`
})
bot.command({
    name: "fact",
    usage: "fact",
    description: "Sebuah fakta",
    code: `$title[Fact]
$addfield[• Fact;$jsonrequest[https://api.itzteduhyt.repl.co/translate?to=id?text=$jsonrequest[https://happy-meme-a.glitch.me/fact;fact];res]]
$color[00ffff]
`
})
bot.command({
    name: "hentai",
    usage: "hentai",
    description: ":warning: 18+ :warning:",
    code: `$djseval[const client = require('nekos.life'); 
const randomHentaiGif = new client(); 
const {MessageEmbed} = require('discord.js')
randomHentaiGif.nsfw.randomHentaiGif().then(randomHentaiGif => {
let e = new MessageEmbed()
.setTitle('Hentai')
.setImage(randomHentaiGif.url)
message.channel.send(e)
});]
$onlyNSFW[{description::warning: | Oops, ini adalah picture 18+ tolong gunakan di channel NSFW}{color:RED}{footer:© Kanna Kamui}]`
})
bot.command({
    name: "nekosgif",
    usage: "nekosgif",
    description: ":warning: Neko gif 18+ :warning:",
    code: `$djseval[const client = require('nekos.life'); 
const nekoGif = new client(); 
const {MessageEmbed} = require('discord.js')
nekoGif.nsfw.nekoGif().then(nekoGif => {
let e = new MessageEmbed()
.setTitle('Neko Gif')
.setImage(nekoGif.url)
message.channel.send(e)
});]
$onlyNSFW[{description::warning: | Oops, ini adalah picture 18+ tolong gunakan di channel NSFW}{color:RED}{footer:© Kanna Kamui}]`
})
bot.command({
    name: "nekopict",
    usage: "nekopict",
    description: ":warning: Neko 18+ :warning:",
    code: `$djseval[const client = require('nekos.life'); 
const neko = new client(); 
const {MessageEmbed} = require('discord.js')
neko.nsfw.neko().then(neko => {
let e = new MessageEmbed()
.setTitle('Neko')
.setImage(neko.url)
message.channel.send(e)
});]
$onlyNSFW[{description::warning: | Oops, ini adalah picture 18+ tolong gunakan di channel NSFW}{color:RED}{footer:© Kanna Kamui}]`
})
bot.command({
    name: "kitsune",
    usage: "kitsune",
    description: ":warning: Kitsune 18+ :warning:",
    code: `$djseval[const client = require('nekos.life'); 
const kitsune = new client(); 
const {MessageEmbed} = require('discord.js')
kitsune.nsfw.kitsune().then(kitsune => {
let e = new MessageEmbed()
.setTitle('Hentai')
.setImage(kitsune.url)
message.channel.send(e)
});]
$onlyNSFW[{description::warning: | Oops, ini adalah picture 18+ tolong gunakan di channel NSFW}{color:RED}{footer:© Kanna Kamui}]`
})
bot.command({
    name: "eroneko",
    usage: "eroneko",
    description: ":warning:  ero neko 18+ :warning:",
    code: `$djseval[const client = require('nekos.life'); 
const eroNeko = new client(); 
const {MessageEmbed} = require('discord.js')
eroNeko.nsfw.eroNeko().then(eroNeko => {
let e = new MessageEmbed()
.setTitle('Hentai')
.setImage(eroNeko.url)
message.channel.send(e)
});]
$onlyNSFW[{description::warning: | Oops, ini adalah picture 18+ tolong gunakan di channel NSFW}{color:RED}{footer:© Kanna Kamui}]`
})
bot.command({
    name: "tits",
    usage: "tits",
    description: ":warning: Tits 18+ :warning:",
    code: `$djseval[const client = require('nekos.life'); 
const tits = new client(); 
const {MessageEmbed} = require('discord.js')
tits.nsfw.tits().then(random => {
let e = new MessageEmbed()
.setTitle('Hentai')
.setImage(random.url)
message.channel.send(e)
});]
$onlyNSFW[{description::warning: | Oops, ini adalah picture 18+ tolong gunakan di channel NSFW}{color:RED}{footer:© Kanna Kamui}]`
})
bot.command({
     name: "anime",
     aliases: ["an", "search-anime"],
     usage: "anime <anime_name>",
     description: "mencari tahu info dari anime",
     code: `
$title[$jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];titles.romaji]]
$thumbnail[$jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];posterImage.original]]
$description[
**• Synopsis:**
$jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];synopsis]]

$addField[• Info update & eps:;
\`• Start: $jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];startDate]\`
\`• End: $replaceText[$replaceText[$checkCondition[$jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];endDate]!=];false;Masih Ongoing];true;$jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];endDate]]\`
\`• Episode: $replaceText[$replaceText[$checkCondition[$jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];episodeCount]!=];false;N/A];true;$jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];episodeCount]]\`;no]
$addField[• Popularitas:;
\`• Rate: $jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];averageRating]\`
\`• Type: $jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];type]\`
\`• SubType: $jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];subType]\`
\`• Rank: $jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];popularityRank]\`;no]
$footer[© Anime search | Powered by itzteduhyt;$authorAvatar]
$color[00ffff]
$onlyIf[$jsonRequest[https://api.itzteduhyt.repl.co/anime?name=$replaceText[$message; ;-];titles.romaji;error]!=;{description:Kanna tidak dapat menemukan anime dengan nama \`$message\`}{color:RED}]
$sendMessage[$customEmoji[loading] | Mencari info anime \`$message\`;no]
$argsCheck[>1;{description:Penggunaan yang benar,
\`$getServerVar[prefix]anime <anime_name>\`}{color:RED}]
$cooldown[5s;{description:Tolong tunggu **%time%**}{color:RED}]
`
})
bot.command({
     name: "youtube",
     aliases: ["yt-search"],
     usage: "youtube <channel_name>",
     description: "mencari tahu informasi dari seorang youtuber",
     code: `$title[$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;name]]
$thumbnail[$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;thumbnails]]
$description[**• Description:**

$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;description]]
$addField[Channels:;**[$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;name]\\]($jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;url])**;no]
$addField[Video:;**$numberSeparator[$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;statistics.videoCount];,]**;no]
$addField[Viewers:;**$numberSeparator[$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;statistics.viewCount];,]**;no]
$addField[Subscriber:;**$numberSeparator[$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;statistics.subscriberCount];,]**;no]
$addField[Dibuat:;**$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;dateCreated]**;no]
$footer[© Youtube search | Powered by itzteduhyt]
$onlyIf[$jsonRequest[https://itzteduhyt-api.glitch.me/yt-channel?search=$message;name]!=;{description:Kanna tidak dapat menemukan users dengan nama \`$message\`}{color:RED}]
$argsCheck[>1;{description:Penggunaan yang benar,
\`$getServerVar[prefix]youtube <channel_name>\`}{color:RED}]
$cooldown[5s;{description:Tolong tunggu **%time%**}{color:RED}]
$onlyforids[$botownerid;{description:Masih dalam pembuatan}{color:ff2050}]
$suppresserrors[{description:Error terdeteksi ketika execute commands}{color:ff2050}]
`
})
bot.awaitedCommand({
    name: "errorcmd",
    code: `$deletein[5s]
$description[Uh oh, ada kesalahan ketika executing commands]
$color[ff2050]
$footer[error]
`
})




bot.loadCommands('./commands/')
