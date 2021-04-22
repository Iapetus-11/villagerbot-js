const Discord = require("discord.js")

exports.run = async (client, message, args, tools) => {
    let embed = new Discord.MessageEmbed()
        .setColor("#00FF80")
        .setTitle("About Villager Bot JS")
        .setDescription("This bot was made by ThunderRedStar#9374 in response to Iapetus11 botbanning me.\n\nYou might have been looking for the original Villager Bot, however now that you have me you don’t have to switch! Here are some reasons to choose me over the original Villager Bot.")
        .addField("Better servers 🖥", "The original Villager bot is run on an extremely underpowered machine. This bot is run on **35x** more power servers!", true)
        .addField("Better uptime ⌚", "This bot has 99.9% uptime while the original Villager Bot has about 85% uptime.", true)
        .addField("More authentic experience 📕", "This bot will give you a more authentic experience with Minecraft! Efficiency I is not the highest, Efficiency V is!", true)
        .addField("Less toxic developer 🙋‍♂️", "Your bot developer is less toxic. He won't mute you for no reason.", true)
        .addField("Better programming language 👨‍💻", "There will be more features than the original (coming soon). This bot is also written with a better framework.", true)
        .setFooter("Made by ThunderRedStar#9374")
        .setTimestamp()
    await message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    cooldown: 5,
    permLevel: 0
};

exports.help = {
    name: "about",
    description:
        "Returns some info about the bot",
    usage: "about",
};
