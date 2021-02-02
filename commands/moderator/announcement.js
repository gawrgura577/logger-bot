module.exports = {
    name: "announce",
    aliases: ["announcement"],
    usage: "announce (channel) (everyone/here) <msg>",
    description: "untuk announce suatu hal ke server",
    code: `
$channelsendmessage[$mentionedchannels[1;yes];$replacetext[$replacetext[$checkcontains[$tolowercase[$message[$replacetext[$replacetext[$checkcondition[$mentionedchannels[1;yes]==$channelid];true;$replacetext[$replacetext[$checkcondition[$mentionedchannels[1]!=];false;1];true;2]];false;2]]];here;everyone];true;$replacetext[$replacetext[$replacetext[$replacetext[$tolowercase[$message[$replacetext[$replacetext[$checkcondition[$mentionedchannels[1;yes]==$channelid];true;$replacetext[$replacetext[$checkcondition[$mentionedchannels[1]!=];false;1];true;2]];false;2]]];everyone;@everyone];here;@here];@everyone;@everyone];@here;@here]];false;]
{description:$messageslice[$replacetext[$replacetext[$checkcondition[$mentionedchannels[1;yes]==$channelid];true;$replacetext[$replacetext[$checkcondition[$mentionedchannels[1]!=];false;$replacetext[$replacetext[$checkcontains[$tolowercase[$message[$replacetext[$replacetext[$checkcondition[$mentionedchannels[1;yes]==$channelid];true;$replacetext[$replacetext[$checkcondition[$mentionedchannels[1]!=];false;1];true;1]];false;2]]];off;everyone;here];true;1];false;1]];true;$replacetext[$replacetext[$checkcontains[$tolowercase[$message[$replacetext[$replacetext[$checkcondition[$mentionedchannels[1;yes]==$channelid];true;$replacetext[$replacetext[$checkcondition[$mentionedchannels[1]!=];false;1];true;2]];false;2]]];off;everyone;here];true;2];false;1]]];false;$replacetext[$replacetext[$checkcontains[$tolowercase[$message[$replacetext[$replacetext[$checkcondition[$mentionedchannels[1;yes]==$channelid];true;$replacetext[$replacetext[$checkcondition[$mentionedchannels[1]!=];false;1];true;2]];false;2]]];everyone;here;off];true;2];false;1]]]}{footer:© Kanna Kamui}{thumbnail:$authoravatar}{timestamp}{author:Announce by $username[$authorid]:$authoravatar}{color:BLUE}]
$onlyif[$checkcontains[$tolowercase[$message[$replacetext[$replacetext[$checkcondition[$mentionedchannels[1;yes]==$channelid];true;$replacetext[$replacetext[$checkcondition[$mentionedchannels[1]!=];false;1];true;2]];false;2]]];here;off;everyone]==true;{title:Kesalahan di $tolowercase[$message[$replacetext[$replacetext[$checkcondition[$mentionedchannels[1;yes]==$channelid];true;$replacetext[$replacetext[$checkcondition[$mentionedchannels[1]!=];false;1];true;2]];false;2]]]}{color:ff2050}{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]announce (channel) (everyone/here/off) <msg>\n\n$getservervar[prefix]announce (everyone/here/off) <msg>\n\`\`\`\nContoh:\n****$getservervar[prefix]announce <#$randomchannelid> here Pengumuman penting****}
{footer:Jangan menggunakan #LEFT_CLICK##RIGHT_CLICK# () | #LEFT_CLICK##RIGHT_CLICK# Dibutuhkan, () Optional}

{thumbnail:$useravatar[$clientid]}]
$argscheck[>2;
{description:Penggunaan yang benar\n\`\`\`\n$getservervar[prefix]announce (channel) (everyone/here/off) <msg>\n\n$getservervar[prefix]announce (everyone/here/off) <msg>\n\`\`\`\nContoh:\n****$getservervar[prefix]announce <#$randomchannelid> here Pengumuman penting****}
{footer:Jangan menggunakan #LEFT_CLICK##RIGHT_CLICK# () | #LEFT_CLICK##RIGHT_CLICK# Dibutuhkan, () Optional}
{color:ff2050}
{thumbnail:$useravatar[$clientid]}
{author:Wrong arguments:$authoravatar}]
$onlybotperms[embedlinks;sendmessages;mentioneveryone;{description:Kanna tidak bisa \`EMBED_LINKS\` / \`SEND_MESSAGES\` / \`MENTION_EVERYONE\` ke channel <#$mentionedchannels[1]>}{color:ff2050}{footer:© Kanna Kamui}{timestamp}]
$onlyperms[manageserver;{description:Kamu tidak memiliki permissions untuk \`MANAGE_SERVER\`}{color:ff2050}]



`
}