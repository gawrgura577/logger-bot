module.exports = {
    name: "avatar",
    aliases: ["image"],
    usage: "avatar (user)",
    description: "menampilkan avatar dari user",
    code: `$color[$getrolecolor[$highestrole[$mentioned[1;yes]]]]
$image[$useravatar[$mentioned[1;yes]]]
$description[****[webp\\]($replacetext[$useravatar[$mentioned[1;yes]];webp;webp]) | [png\\]($replacetext[$useravatar[$mentioned[1;yes]];webp;png]) | [jpg\\]($replacetext[$useravatar[$mentioned[1;yes]];webp;jpg])****]

$author[$replacetext[$replacetext[$checkcondition[$mentioned[1;yes]==$authorid];true;Avatar kamu];false;Avatar $username[$mentioned[1;yes]]];$useravatar[$mentioned[1;yes]]]
$addtimestamp
$onlybotperms[embedlinks;{description:Kanna tidak memiliki permissions untuk \`EMBED_LINKS\`}{color:ff2050}{footer:© Kanna Kamui}]
$cooldown[5s;{description:Tolong tunggu %time%}{color:ff2050}]`
}